(function () {
  const esc = s => String(s ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const clean = s => String(s ?? '').replace(/\s+/g, ' ').trim();
  const norm = s => clean(s).replace(/^[①②③④⑤]\s*/, '').replace(/^\d+[.)]\s*/, '').toLowerCase();

  function textOf(el, sel) {
    return clean(el.querySelector(sel)?.textContent || '');
  }

  function findQuestion(card) {
    const direct = textOf(card, '.problem') || textOf(card, '.question');
    if (direct) return direct;
    const heads = [...card.querySelectorAll('h2,h3,p,div')].map(x => clean(x.textContent)).filter(Boolean);
    const bad = /^(문제|정답|상세 풀이|예시 코드|출력 결과|코드 복사)$/;
    return heads.find(t => !bad.test(t) && !/^OX\s*\d+/.test(t) && !/^5지선다\s*\d+/.test(t) && !/^정답/.test(t)) || '';
  }

  function findAnswer(card) {
    const direct = textOf(card, '.answer') || textOf(card, '.ans');
    if (direct) return direct.replace(/^정답\s*/, '').trim();
    const badge = textOf(card, '.badge');
    const bx = badge.match(/정답\s*([OX])/);
    if (bx) return bx[1];
    return '';
  }

  function findExplain(card) {
    return textOf(card, '.explain') || textOf(card, '.exp') || [...card.querySelectorAll('p')]
      .map(p => clean(p.textContent))
      .find(t => t.length > 30 && !t.includes('문제')) || '';
  }

  function findCode(card) {
    const blocks = [...card.querySelectorAll('pre')].map(p => clean(p.textContent));
    const code = blocks.find(x => !x.includes('dtype:') && !x.startsWith('국어') && !x.startsWith('첫째'));
    const out = textOf(card, 'pre.out') || textOf(card, 'pre.output') || '';
    return { code: code || '', out };
  }

  function quizKind(card) {
    const tag = clean(card.querySelector('.q,.qno,.num,.badge,.qtag')?.textContent || '');
    if (/OX/.test(tag)) return 'ox';
    if (/5지선다|객관식/.test(tag)) return 'mc';
    const ans = norm(findAnswer(card));
    if (ans === 'o' || ans === 'x') return 'ox';
    return 'short';
  }

  const pools = {
    dict: ['d["key"]', 'd.get("key")', 'd.keys()', 'd.values()', 'd.items()', 'd.pop("key")', 'dict()', '{}', 'list(d.values())', 'd1.update(d2)', '{**d1, **d2}', 'setdefault()', 'list', 'tuple', 'str', 'int'],
    func: ['def', 'function', 'return', 'print', '*args', '**kwargs', 'global', 'local', 'lambda', 'map', 'filter', 'yield', 'next(g)', '데코레이터', '키워드 인수', '위치 인수', '"""설명"""'],
    string: ['s[7:12]', 's.upper()', 's.lower()', 's.replace()', 's.split()', '"-".join(parts)', 's.find("x")', 's.index("x")', 'strip()', 'startswith()', 'endswith()', 'a*b*c', '-1', '문자열은 불변'],
    file: ['open("file.txt", "r")', 'open("file.txt", "w")', 'read()', 'readline()', 'readlines()', 'write()', 'with open(...) as f:', 'FileNotFoundError', 'try-except', 'seek()', 'tell()', 'encoding="utf-8"'],
    oop: ['class', 'object', '__init__', 'self', '상속', '다형성', '캡슐화', '정보 은닉', '@property', '@classmethod', '@staticmethod', '__str__', 'class Dog(Animal):', 'cls'],
    pandas: ['import pandas as pd', 'pd.DataFrame({...})', 'pd.Series(...)', 'df.shape', 'df.head()', 'df.iloc[0:5]', 'df.loc[...]', 'df.fillna(0)', 'df.dropna()', 'df.groupby("department")["salary"].mean()', 'df.describe()', 'pd.merge(..., how="left")', 'apply(lambda x: ...)']
  };

  function topicFromUrl(url) {
    if (/dict/i.test(url)) return 'dict';
    if (/func/i.test(url)) return 'func';
    if (/string/i.test(url)) return 'string';
    if (/fileio/i.test(url)) return 'file';
    if (/oop/i.test(url)) return 'oop';
    if (/pandas/i.test(url)) return 'pandas';
    return 'dict';
  }

  function inferDistractors(question, answer, code, url) {
    const topic = topicFromUrl(url);
    const base = pools[topic] || [];
    const q = question + ' ' + code;
    let extra = [];
    if (/True|False|실행 결과|출력 결과/.test(q)) extra.push('True', 'False', '0', '1', '오류 발생');
    if (/슬라이|index|find|join|split/.test(q)) extra.push('Hello', 'world', 'Hello,', 'world!', 'a*b*c', '*a*b*c', '-1');
    if (/DataFrame|df|Pandas|행|열/.test(q)) extra.push('df.shape', 'df.size', 'df.head()', 'df.tail()', 'df.iloc[0:5]');
    if (/함수|매개변수|인자|lambda|yield|decorator|데코레이터/.test(q)) extra.push('def', 'return', '*args', '**kwargs', 'global', 'lambda');
    if (/딕셔너리|키|값|pop|get|setdefault/.test(q)) extra.push('d.keys()', 'd.values()', 'd.items()', 'd.get()', 'd.pop()', 'list');
    if (/class|객체|상속|self|메서드|다형성/.test(q)) extra.push('__init__', '__str__', 'self', 'cls', 'class Dog(Animal):');
    const ans = clean(answer).replace(/^[①②③④⑤]\s*/, '');
    const seen = new Set([norm(ans)]);
    const choices = [ans];
    for (const x of [...extra, ...base, '위 설명 모두 틀림', '문법 오류', '아무것도 출력되지 않음']) {
      if (choices.length >= 5) break;
      if (!x || seen.has(norm(x))) continue;
      seen.add(norm(x));
      choices.push(x);
    }
    while (choices.length < 5) choices.push(`오답 보기 ${choices.length}`);
    return shuffleKeepAnswer(choices, ans);
  }

  function shuffleKeepAnswer(choices, ans) {
    const arr = [...choices];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = (i * 7 + 3) % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return { choices: arr, ansIndex: arr.findIndex(x => norm(x) === norm(ans)) };
  }

  function detailedSolution(q) {
    const ans = clean(q.answer).replace(/^[①②③④⑤]\s*/, '');
    const bits = [];
    bits.push(`<b>정답이 되는 이유</b>: 이 문제에서 묻는 핵심은 <code>${esc(q.question)}</code>입니다. 정답 <code>${esc(ans)}</code>은 그 조건을 정확히 만족합니다.`);
    if (q.code) bits.push(`<b>예시 코드로 확인</b>: 아래 코드에서는 문제의 개념이 실제로 어떻게 쓰이는지 보여 줍니다. 코드는 위에서 아래로 실행되고, 변수에 값이 저장된 뒤 함수·메서드가 그 값을 처리합니다.<pre>${esc(q.code)}</pre>`);
    if (q.out) bits.push(`<b>출력물이 이렇게 나오는 이유</b>: 코드가 계산하거나 처리한 최종 값이 <code>print()</code> 또는 출력 영역으로 전달되어 아래처럼 보입니다.<pre>${esc(q.out)}</pre>`);
    bits.push(`<b>오답 선지 보는 법</b>: 객관식은 “그럴듯한 단어”가 아니라 이 문제의 코드·상황에 실제로 맞는지를 봐야 합니다. 이름이 비슷해도 역할이 다르면 오답입니다.`);
    if (q.explain) bits.push(`<b>원본 풀이</b>: ${esc(q.explain)}`);
    return bits.join('<br><br>');
  }

  function renderStatic(questions) {
    return `<div class="warn"><b>인수의 원본 20문항을 이 화면에 가져왔다.</b> OX는 O/X로, 5지선다는 선지를 보충해 객관식으로 풀게 만들었다. 원본에 선지가 저장돼 있지 않은 문항은 정답과 개념을 기준으로 연습용 5개 선지를 넣었다.</div>` +
      questions.map((q, idx) => {
        const n = idx + 1;
        const code = q.code ? `<pre>${esc(q.code)}</pre>` : '';
        const out = q.out ? `<div class="key"><b>출력 결과</b><pre>${esc(q.out)}</pre></div>` : '';
        if (q.kind === 'ox') {
          return `<article class="q"><h3>${n}. ${esc(q.question)}</h3>${code}${out}<label class="choice"><input type="radio" name="sq${idx}" value="O">O</label><label class="choice"><input type="radio" name="sq${idx}" value="X">X</label><div id="sm${n}" class="mark"></div><div id="se${n}" class="explain"><b>정답: ${esc(q.answer)}</b><br>${detailedSolution(q)}</div></article>`;
        }
        if (q.kind === 'mc') {
          return `<article class="q"><h3>${n}. ${esc(q.question)}</h3>${code}${out}<div class="key"><b>오지선다 선지</b>: 아래 5개 중 하나를 고르세요.</div>${q.choices.map((c, j) => `<label class="choice"><input type="radio" name="sq${idx}" value="${esc(c)}">${j + 1}. ${esc(c)}</label>`).join('')}<div id="sm${n}" class="mark"></div><div id="se${n}" class="explain"><b>정답: ${esc(q.answer)}</b><br>${detailedSolution(q)}</div></article>`;
        }
        return `<article class="q"><h3>${n}. ${esc(q.question)}</h3>${code}${out}<input id="sa${n}" style="width:100%;padding:9px" placeholder="정답 입력"><div id="sm${n}" class="mark"></div><div id="se${n}" class="explain"><b>정답: ${esc(q.answer)}</b><br>${detailedSolution(q)}</div></article>`;
      }).join('') +
      `<div class="actions"><button class="grade" onclick="staticGrade()">원본 문제 채점하기</button><button class="solution" onclick="staticSolve()">원본 해설 보기</button><span class="result" id="sr"></span></div>`;
  }

  window.loadStaticOriginal = async function loadStaticOriginalFixed(l) {
    const r = document.querySelector('#originalList');
    try {
      const t = await fetch(l.pdf).then(x => x.text());
      const d = new DOMParser().parseFromString(t, 'text/html');
      const cards = [...d.querySelectorAll('section.card')];
      const questions = cards.map(card => {
        const kind = quizKind(card);
        const question = findQuestion(card);
        const answer = findAnswer(card);
        const explain = findExplain(card);
        const { code, out } = findCode(card);
        const q = { kind, question, answer, explain, code, out };
        if (kind === 'mc') Object.assign(q, inferDistractors(question, answer, code, l.pdf));
        return q;
      });
      r.innerHTML = renderStatic(questions);
      window.S = questions;
      window.SG = false;
    } catch (e) {
      r.innerHTML = `<article class="card">원본 문제를 불러오지 못했습니다. <a href="${esc(l.pdf)}" target="_blank">원본 열기</a></article>`;
    }
  };

  window.staticGrade = function staticGradeFixed() {
    let n = 0;
    (window.S || []).forEach((q, idx) => {
      let ok = false;
      if (q.kind === 'short') {
        ok = norm(document.querySelector('#sa' + (idx + 1))?.value || '') === norm(q.answer);
      } else {
        const picked = document.querySelector(`input[name=sq${idx}]:checked`);
        ok = picked && norm(picked.value) === norm(q.answer);
      }
      if (ok) n++;
      const mark = document.querySelector('#sm' + (idx + 1));
      if (mark) mark.innerHTML = ok ? '<span class="right">✓ 정답</span>' : '<span class="wrong">✗ 오답</span>';
    });
    window.SG = true;
    const sr = document.querySelector('#sr');
    if (sr) sr.textContent = `${n} / ${(window.S || []).length}점`;
  };

  window.staticSolve = function staticSolveFixed() {
    if (!window.SG) {
      alert('먼저 채점하기를 눌러 주세요.');
      return;
    }
    document.querySelectorAll('[id^=se]').forEach(x => x.classList.add('show'));
  };
})();
