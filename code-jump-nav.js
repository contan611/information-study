(function () {
  'use strict';

  function labelFor(article, index) {
    const h = article.querySelector('h3');
    const text = h ? h.textContent.trim() : '';
    const m = text.match(/(필수학습코드|다이어트 코드)\s*(\d+)번/);
    if (m) {
      const group = m[1].includes('필수') ? 'essential' : 'diet';
      const short = group === 'essential' ? '필수' : '다이어트';
      return { group, no: Number(m[2]), title: text, short };
    }
    if (index < 44) return { group: 'essential', no: index + 1, title: text || `필수학습코드 ${index + 1}번 코드`, short: '필수' };
    if (index < 91) return { group: 'diet', no: index - 43, title: text || `다이어트 코드 ${index - 43}번 코드`, short: '다이어트' };
    return { group: 'etc', no: index + 1, title: text || `코드 ${index + 1}`, short: '기타' };
  }

  function jumpTo(id) {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', '#' + id);
    target.classList.add('jump-highlight');
    setTimeout(() => target.classList.remove('jump-highlight'), 1400);
  }

  function makeButton(item) {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = item.no;
    b.title = item.title;
    b.addEventListener('click', () => jumpTo(item.id));
    return b;
  }

  function goFromControls(root) {
    const group = root.querySelector('[data-jump-group]').value;
    const no = Number(root.querySelector('[data-jump-number]').value);
    if (!no) return;
    jumpTo(`${group}-${no}`);
  }

  function makeControlBox(className, compact, essential = [], diet = []) {
    const box = document.createElement('div');
    box.className = className;
    box.innerHTML = `
      <div class="jump-box-title">${compact ? '바로 이동' : '번호 직접 이동'}</div>
      <div class="jump-row">
        <select data-jump-group aria-label="코드 묶음 선택">
          <option value="essential">필수</option>
          <option value="diet">다이어트</option>
        </select>
        <input data-jump-number type="number" min="1" inputmode="numeric" placeholder="번호" aria-label="이동할 코드 번호">
        <button type="button" data-jump-go>이동</button>
      </div>
      ${compact ? '<details class="side-number-board"><summary><b>번호판 열기</b></summary><div class="side-board-label">필수학습코드</div><div class="jump-grid side-essential-grid"></div><div class="side-board-label">다이어트 코드</div><div class="jump-grid side-diet-grid"></div></details>' : ''}
    `;
    box.querySelector('[data-jump-go]').addEventListener('click', () => goFromControls(box));
    box.querySelector('[data-jump-number]').addEventListener('keydown', e => {
      if (e.key === 'Enter') goFromControls(box);
    });
    const sideEssential = box.querySelector('.side-essential-grid');
    const sideDiet = box.querySelector('.side-diet-grid');
    if (sideEssential && sideDiet) {
      essential.forEach(item => sideEssential.appendChild(makeButton(item)));
      diet.forEach(item => sideDiet.appendChild(makeButton(item)));
    }
    return box;
  }

  function addJumpNav() {
    if (document.querySelector('.code-jump-panel')) return;
    const articles = [...document.querySelectorAll('article')];
    if (!articles.length) return;

    const items = articles.map((article, index) => {
      const info = labelFor(article, index);
      const id = info.group === 'essential' ? `essential-${info.no}` : info.group === 'diet' ? `diet-${info.no}` : `code-${index + 1}`;
      article.id = id;
      article.dataset.codeGroup = info.group;
      article.dataset.codeNo = String(info.no);
      article.style.scrollMarginTop = '105px';
      return { ...info, id };
    });

    const essential = items.filter(x => x.group === 'essential').sort((a, b) => a.no - b.no);
    const diet = items.filter(x => x.group === 'diet').sort((a, b) => a.no - b.no);

    const panel = document.createElement('section');
    panel.className = 'code-jump-panel';
    panel.innerHTML = `
      <h2>번호 눌러서 해당 코드로 바로 이동</h2>
      <p>특정 번호만 다시 볼 때 쓰세요. 위쪽 번호판도 있고, 화면 오른쪽의 떠 있는 상태창에서도 언제든 바로 이동할 수 있습니다.</p>
      <details open>
        <summary><b>필수학습코드 1~${essential.length}</b></summary>
        <div class="jump-grid essential-grid"></div>
      </details>
      <details>
        <summary><b>다이어트 코드 1~${diet.length}</b></summary>
        <div class="jump-grid diet-grid"></div>
      </details>
    `;
    panel.insertBefore(makeControlBox('jump-search', false), panel.querySelector('details'));

    const header = document.querySelector('header');
    (header || document.body).insertAdjacentElement(header ? 'afterend' : 'afterbegin', panel);

    essential.forEach(item => panel.querySelector('.essential-grid').appendChild(makeButton(item)));
    diet.forEach(item => panel.querySelector('.diet-grid').appendChild(makeButton(item)));

    document.body.appendChild(makeControlBox('jump-side-panel', true, essential, diet));
  }

  const style = document.createElement('style');
  style.textContent = `
    .code-jump-panel{background:#fff;border:2px solid #88a9d8;border-radius:16px;padding:16px;margin:14px 0;box-shadow:0 6px 18px #1e376f18}
    .code-jump-panel h2{margin:0 0 6px;color:#233d78}
    .code-jump-panel p{margin:4px 0 12px}
    .jump-search{background:#edf6ff;border-left:4px solid #3484c4;padding:10px;margin:10px 0;border-radius:8px}
    .jump-box-title{font-weight:900;color:#233d78;margin-bottom:6px}
    .jump-row{display:flex;gap:5px;align-items:center;flex-wrap:wrap}
    .jump-search select,.jump-search input,.jump-search button,.jump-side-panel select,.jump-side-panel input,.jump-side-panel button{font:inherit;padding:7px 9px;border:1px solid #b9c8dd;border-radius:8px}
    .jump-search button,.jump-grid button,.jump-side-panel button{background:#233d78;color:white;border:0;font-weight:800;cursor:pointer}
    .jump-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(46px,1fr));gap:7px;margin-top:10px}
    .jump-grid button{padding:8px 0;border-radius:8px}
    .jump-grid button:hover,.jump-search button:hover,.jump-side-panel button:hover{background:#346bc0}
    .jump-side-panel{position:fixed;right:14px;top:92px;z-index:20;background:#ffffff;border:2px solid #233d78;border-radius:14px;padding:12px;width:240px;max-height:calc(100vh - 120px);overflow:auto;box-shadow:0 8px 28px #0003}
    .jump-side-panel .jump-row{display:grid;grid-template-columns:1fr 70px;gap:6px}
    .jump-side-panel [data-jump-go]{grid-column:1/3}
    .side-number-board{margin-top:9px;background:#f6fbff;border:1px solid #c9d9ee;border-radius:10px;padding:8px}
    .side-number-board summary{cursor:pointer;color:#233d78}
    .side-number-board .jump-grid{grid-template-columns:repeat(5,1fr);gap:5px;margin:6px 0 10px}
    .side-number-board .jump-grid button{font-size:.9rem;padding:6px 0}
    .side-board-label{font-weight:900;color:#233d78;margin-top:8px}
    article.jump-highlight{outline:4px solid #ffbf32;box-shadow:0 0 0 8px #ffbf3230;transition:box-shadow .2s,outline .2s}
    @media(max-width:760px){
      .jump-grid{grid-template-columns:repeat(6,1fr)}
      .code-jump-panel{padding:13px}
      .jump-side-panel{left:8px;right:8px;top:auto;bottom:8px;width:auto;padding:9px}
      .jump-side-panel .jump-box-title{display:none}
      .jump-side-panel .jump-row{grid-template-columns:1fr 72px 58px}
      .jump-side-panel [data-jump-go]{grid-column:auto}
      .side-number-board{max-height:45vh;overflow:auto}
      .side-number-board .jump-grid{grid-template-columns:repeat(7,1fr)}
      body{padding-bottom:86px!important}
    }
  `;
  document.head.appendChild(style);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addJumpNav);
  else addJumpNav();
})();
