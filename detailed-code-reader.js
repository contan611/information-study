(() => {
  'use strict';

  const word = {
    print: 'print( )는 괄호 안에서 계산이 끝난 값을 화면에 보여 주는 출력 명령어입니다. 따옴표가 있으면 글자를, 변수 이름이 있으면 그 변수 안의 값을 보여 줍니다.',
    input: 'input( )은 사용자에게 키보드 입력을 받는 명령어입니다. 사용자가 입력한 기본 결과는 글자(문자열)이므로, 숫자로 계산하려면 int( ) 또는 float( )로 바꿉니다.',
    int: 'int( )는 괄호 안의 값을 정수(소수점이 없는 숫자)로 바꿉니다. 예: int("12")는 숫자 12가 됩니다.',
    float: 'float( )는 괄호 안의 값을 소수점이 가능한 숫자로 바꿉니다.',
    str: 'str( )은 숫자나 다른 값을 글자 형태로 바꿉니다. 글자와 숫자를 이어 붙여 출력할 때 자주 사용합니다.',
    len: 'len( )은 글자 수 또는 리스트·딕셔너리 안에 든 항목 수를 셉니다.',
    range: 'range(시작, 끝)은 시작부터 끝 바로 전까지의 정수들을 차례로 만들어 반복문에 넘깁니다. 끝 숫자는 포함하지 않는 점이 시험에 자주 나옵니다.',
    enumerate: 'enumerate( )는 반복할 때 항목뿐 아니라 0부터 시작하는 순서 번호도 함께 줍니다.',
    zip: 'zip( )은 여러 묶음에서 같은 순서의 항목끼리 짝지어 줍니다.',
    list: 'list( )는 여러 값을 순서대로 담는 리스트를 만들거나 다른 자료를 리스트로 바꿉니다.',
    dict: 'dict( )는 이름표(키)와 값의 짝으로 된 딕셔너리를 만듭니다.',
    set: 'set( )은 중복을 없앤 값의 모음을 만듭니다. 순서가 중요하지 않을 때 씁니다.',
    tuple: 'tuple( )은 순서가 있지만 만든 뒤에는 항목을 바꾸기 어려운 묶음을 만듭니다.',
    sorted: 'sorted( )는 원래 자료는 그대로 두고, 정렬한 새 결과를 돌려줍니다.',
    sum: 'sum( )은 숫자들이 든 묶음의 합계를 구합니다.',
    max: 'max( )는 가장 큰 값을, min( )는 가장 작은 값을 찾습니다.',
    min: 'min( )는 가장 작은 값을 찾습니다.',
    abs: 'abs( )는 음수·양수 기호를 뺀 절댓값을 구합니다.',
    open: 'open(파일이름, 모드)는 파일을 열어 읽거나 쓸 준비를 합니다. 모드 "r"은 읽기, "w"는 새로 쓰기, "a"는 뒤에 이어 쓰기입니다.',
    read: 'read( )는 열린 파일의 내용을 읽어 문자열로 가져옵니다.',
    write: 'write(내용)은 열린 파일에 내용을 씁니다. 화면 출력이 아니라 파일 안에 기록한다는 점에 주의하세요.',
    close: 'close( )는 사용을 마친 파일을 닫아 저장을 마무리합니다.',
    split: 'split(구분기호)은 글자를 구분기호 기준으로 잘라 리스트로 만듭니다. 예: "a-b".split("-")는 ["a", "b"]입니다.',
    join: '"구분기호".join(리스트)는 리스트의 글자들을 구분기호로 이어 하나의 글자로 만듭니다.',
    replace: 'replace(바꿀것, 새것)은 글자 안의 특정 부분을 다른 글자로 바꾼 새 결과를 만듭니다.',
    strip: 'strip( )은 글자의 맨 앞·뒤 공백이나 줄바꿈을 제거합니다.',
    lower: 'lower( )는 알파벳을 모두 소문자로, upper( )는 모두 대문자로 바꿉니다.',
    upper: 'upper( )는 알파벳을 모두 대문자로 바꿉니다.',
    append: 'append(값)은 리스트의 맨 뒤에 값 하나를 추가합니다.',
    extend: 'extend(묶음)은 리스트의 맨 뒤에 여러 항목을 차례대로 추가합니다.',
    pop: 'pop( )은 리스트에서 항목 하나를 꺼내며, 기본으로 마지막 항목을 꺼냅니다.',
    remove: 'remove(값)은 리스트에서 처음 찾은 해당 값을 지웁니다.',
    keys: 'keys( )는 딕셔너리의 키(이름표)들만 보는 기능입니다.',
    values: 'values( )는 딕셔너리에 저장된 값들만 보는 기능입니다.',
    items: 'items( )는 딕셔너리의 키와 값을 (키, 값) 짝으로 꺼내는 기능입니다.',
    get: 'get(키)는 딕셔너리에서 해당 키의 값을 안전하게 찾습니다. 없는 키일 때 기본값도 정할 수 있습니다.',
    update: 'update( )는 딕셔너리에 여러 키·값을 한 번에 추가하거나 고칩니다.',
    DataFrame: 'DataFrame( )은 행과 열로 된 표 자료를 만듭니다. 엑셀 표처럼 생각하면 됩니다.',
    Series: 'Series( )는 한 줄의 값과 각 값의 이름표를 가진 판다스 자료형입니다.',
    loc: 'loc[행이름, 열이름]은 표의 이름표를 기준으로 원하는 칸을 고릅니다.',
    iloc: 'iloc[행번호, 열번호]은 표의 순서 번호를 기준으로 원하는 칸을 고릅니다. 번호는 0부터 시작합니다.',
    head: 'head( )는 표의 앞부분 몇 줄을 보여 줍니다.',
    tail: 'tail( )는 표의 뒷부분 몇 줄을 보여 줍니다.',
    shape: 'shape는 표의 (행 수, 열 수)를 알려 주는 속성입니다. 함수가 아니므로 괄호를 붙이지 않습니다.',
    info: 'info( )는 표의 열 이름, 비어 있지 않은 값 수, 자료형을 요약해서 보여 줍니다.',
    describe: 'describe( )는 숫자 열의 개수·평균·최솟값·최댓값 같은 통계를 요약합니다.',
    read_csv: 'read_csv(파일)는 CSV 파일을 읽어 DataFrame 표로 만듭니다.',
    to_csv: 'to_csv(파일)는 DataFrame 표를 CSV 파일로 저장합니다.',
    groupby: 'groupby(기준열)는 같은 값끼리 묶은 뒤 평균·합계 같은 계산을 하게 합니다.',
    mean: 'mean( )은 숫자들의 평균을 구합니다.',
    sort_values: 'sort_values(열이름)는 지정한 열의 값을 기준으로 표를 정렬합니다.',
    value_counts: 'value_counts( )는 같은 값이 각각 몇 번 나왔는지 셉니다.',
    plot: 'plot( )은 자료를 그래프로 그립니다.',
    bar: 'bar( )는 막대그래프를 그립니다.',
    title: 'title(글자)는 그래프의 제목을 정합니다.',
    xlabel: 'xlabel(글자)는 가로축 이름을 정합니다.',
    ylabel: 'ylabel(글자)는 세로축 이름을 정합니다.',
    legend: 'legend( )는 그래프 선·막대가 무엇을 뜻하는지 표시하는 범례를 보여 줍니다.',
    show: 'show( )는 준비된 그래프를 화면에 표시합니다.',
    randint: 'randint(시작, 끝)는 시작과 끝 사이의 정수 중 하나를 무작위로 고릅니다.',
    choice: 'choice(묶음)는 묶음 안의 항목 중 하나를 무작위로 고릅니다.',
    Decimal: 'Decimal( )은 소수 계산의 오차를 줄이기 위한 정밀한 숫자 자료형을 만듭니다.',
    sqrt: 'sqrt( )는 제곱근을 구합니다.',
    pd: 'pd는 보통 pandas를 짧게 부르기 위해 붙인 별명입니다. pd.DataFrame처럼 사용합니다.',
    self: 'self는 클래스에서 지금 만들어진 객체 자신을 가리키는 약속된 이름입니다.',
    __init__: '__init__( )는 객체가 만들어질 때 자동으로 실행되는 초기화 함수입니다.'
  };

  const symbol = {
    '(': '여는 괄호: 함수에 넣을 값(인수)을 시작합니다.', ')': '닫는 괄호: 함수에 넣을 값이 여기서 끝났다는 표시입니다.',
    '[': '여는 대괄호: 리스트·표에서 위치를 고르거나 리스트를 만들기 시작합니다.', ']': '닫는 대괄호: 고르기 또는 리스트 표기가 끝났다는 표시입니다.',
    '{': '여는 중괄호: 딕셔너리처럼 키와 값을 묶는 자료를 시작합니다.', '}': '닫는 중괄호: 딕셔너리 표기가 끝났다는 표시입니다.',
    '.': '점: 앞의 자료가 가진 기능(메서드)이나 속성으로 들어간다는 뜻입니다.', ',': '쉼표: 함수에 넣는 값 또는 항목과 항목을 구분합니다.',
    ':': '콜론: if·for·def처럼 바로 아래 들여쓴 코드 묶음이 시작된다는 신호입니다.',
    '=': '등호: 오른쪽에서 만든 값을 왼쪽 이름에 저장한다는 뜻입니다. 수학의 같다와 다릅니다.',
    '==': '같다 비교: 두 값이 같은지 물어 True 또는 False를 만듭니다.', '!=': '다르다 비교: 두 값이 다른지 물어봅니다.',
    '>': '크다 비교: 왼쪽이 오른쪽보다 큰지 묻습니다.', '<': '작다 비교: 왼쪽이 오른쪽보다 작은지 묻습니다.',
    '>=': '크거나 같다 비교입니다.', '<=': '작거나 같다 비교입니다.',
    '+=': '현재 값에 오른쪽 값을 더한 뒤, 같은 변수에 다시 저장합니다.', '-=': '현재 값에서 오른쪽 값을 뺀 뒤 다시 저장합니다.',
    '*=': '현재 값에 오른쪽 값을 곱한 뒤 다시 저장합니다.', '/=': '현재 값을 오른쪽 값으로 나눈 뒤 다시 저장합니다.',
    '+': '덧셈을 하거나, 문자열끼리는 글자를 이어 붙입니다.', '-': '뺄셈을 하거나 음수를 표시합니다.', '*': '곱셈을 합니다.', '/': '나눗셈을 하며 결과가 소수가 될 수 있습니다.',
    '//': '몫만 구하는 나눗셈입니다. 소수점 아래는 버립니다.', '%': '나머지를 구합니다.', '**': '거듭제곱입니다. 예: 2**3은 2의 3제곱인 8입니다.',
    '"': '큰따옴표: 안쪽을 글자(문자열)로 취급한다는 표시입니다.', "'": '작은따옴표: 안쪽을 글자(문자열)로 취급한다는 표시입니다.', '#': '샵: 이 뒤는 사람을 위한 주석이며 프로그램은 실행하지 않습니다.'
  };

  const esc = (s) => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const unique = (items) => [...new Set(items)];
  const terms = (line) => unique((line.match(/__\w+__|[A-Za-z_]\w*/g) || []).filter(t => word[t]));
  const signs = (line) => unique((line.match(/==|!=|>=|<=|\*\*|\/\/|\+=|-=|\*=|\/=|[()\[\]{}.,:=+\-*/%<>#"']/g) || []));

  function explainLine(line, number) {
    const trimmed = line.trim();
    const bullets = [];
    if (!trimmed) return '';
    const spaces = line.match(/^\s*/)[0].length;
    if (spaces) bullets.push(`앞의 공백 ${spaces}칸은 이 줄이 바로 위의 <code>if</code>·<code>for</code>·<code>def</code> 안에 속한다는 들여쓰기 표시입니다. 공백 수가 달라지면 오류가 날 수 있습니다.`);
    if (trimmed.startsWith('#')) bullets.push('이 줄 전체는 주석입니다. 실행 결과에는 영향을 주지 않고, 사람이 코드의 뜻을 알아보기 위해 적어 둔 메모입니다.');
    if (/^def\s+/.test(trimmed)) bullets.push('<code>def 이름(...):</code>은 함수를 만드는 문장입니다. 여기서는 바로 실행하지 않고, 나중에 이름 뒤에 <code>()</code>를 붙여 호출했을 때 아래 들여쓴 줄들을 실행합니다.');
    if (/^class\s+/.test(trimmed)) bullets.push('<code>class 이름:</code>은 같은 성질과 기능을 가진 객체의 설계도를 만드는 문장입니다.');
    if (/^for\s+/.test(trimmed)) bullets.push('<code>for 변수 in 묶음:</code>은 묶음에서 값을 하나씩 꺼내 변수에 넣고, 아래 들여쓴 작업을 반복합니다. 출력 순서는 묶음에서 값이 나오는 순서입니다.');
    if (/^while\s+/.test(trimmed)) bullets.push('<code>while 조건:</code>은 조건이 True인 동안 아래 들여쓴 작업을 계속 반복합니다. 조건을 바꾸지 않으면 끝나지 않을 수 있습니다.');
    if (/^(if|elif)\s+/.test(trimmed)) bullets.push('<code>if</code>는 조건을 검사합니다. 조건 결과가 True일 때만 아래 들여쓴 줄이 실행되고, False면 건너뜁니다.');
    if (/^else\s*:/.test(trimmed)) bullets.push('<code>else:</code>는 앞의 if 조건이 False였을 때 실행할 부분의 시작입니다.');
    if (/^return\b/.test(trimmed)) bullets.push('<code>return</code>은 함수가 만든 결과를 함수를 부른 곳으로 돌려주고, 그 함수의 실행을 끝냅니다. <code>print</code>와 달리 화면에 자동 출력하지는 않습니다.');
    if (/^(import|from)\s+/.test(trimmed)) bullets.push('이 줄은 외부 모듈에서 기능을 가져옵니다. 가져오기만 했을 때는 아직 계산·출력이 일어나지 않고, 뒤에서 그 기능을 사용할 준비만 합니다.');
    if (/^[A-Za-z_]\w*\s*(?:=|\+=|-=|\*=|\/=)/.test(trimmed)) bullets.push('왼쪽 이름은 값을 보관할 변수입니다. 오른쪽을 먼저 계산한 다음, 대입 기호를 따라 왼쪽 변수 안의 이전 값을 새 값으로 바꾸거나 저장합니다.');
    if (/^print\s*\(/.test(trimmed)) bullets.push('이 줄은 화면 출력이 일어나는 지점입니다. 괄호 안쪽 표현식을 먼저 모두 계산한 후, 그 최종 결과를 한 줄로 보여 줍니다.');
    if (/\[.*\]/.test(trimmed)) bullets.push('대괄호 안의 숫자는 보통 위치 번호(인덱스)입니다. 파이썬의 위치 번호는 첫 번째가 1이 아니라 0부터 시작합니다.');
    if (/['"][^'"]*['"]/.test(trimmed)) bullets.push('따옴표로 둘러싼 부분은 글자 그대로 다루는 문자열입니다. 숫자 모양이어도 따옴표 안에 있으면 계산용 숫자가 아니라 글자입니다.');
    const termText = terms(trimmed).map(t => `<li><code>${esc(t)}</code> — ${word[t]}</li>`).join('');
    const signText = signs(trimmed).map(s => `<li><code>${esc(s)}</code> — ${symbol[s]}</li>`).join('');
    return `<details class="character-guide"><summary><b>${number}번째 실행 줄: 글자·기호까지 풀어 보기</b></summary><code class="source-line">${esc(line)}</code><div class="meaning"><b>이 줄 전체의 흐름</b><ul>${bullets.length ? bullets.map(b => `<li>${b}</li>`).join('') : '<li>위에서 만든 값이나 기능을 사용하여 다음 작업을 수행하는 줄입니다. 아래 명령어·기호 설명을 순서대로 읽어 보세요.</li>'}</ul></div>${termText ? `<div class="term-box"><b>이 줄에 나온 명령어·이름</b><ul>${termText}</ul></div>` : ''}${signText ? `<div class="term-box"><b>이 줄에 나온 기호</b><ul>${signText}</ul></div>` : ''}</details>`;
  }

  function addGuides() {
    document.querySelectorAll('article').forEach((article) => {
      const code = article.querySelector(':scope > pre:not(.out)') || article.querySelector('pre');
      if (!code || article.querySelector('.full-code-guide')) return;
      const lines = code.textContent.replace(/\r/g, '').split('\n').filter(l => l.trim());
      const detail = lines.map((line, i) => explainLine(line, i + 1)).filter(Boolean).join('');
      const box = document.createElement('section');
      box.className = 'full-code-guide';
      box.innerHTML = `<h3>이 코드의 명령어·기호 완전 해설</h3><p>아래를 펼치면 각 실행 줄에서 명령어, 괄호, 대괄호, 점, 따옴표, 대입 기호가 맡는 일을 확인할 수 있습니다. 빈 줄은 실행하지 않으므로 제외했습니다.</p>${detail}`;
      code.insertAdjacentElement('afterend', box);
    });
  }

  const style = document.createElement('style');
  style.textContent = `.full-code-guide{background:#fff8e7;border:1px solid #e6bd62;border-radius:12px;padding:14px;margin:12px 0}.full-code-guide h3{margin:0 0 6px;color:#6a4700}.full-code-guide p{margin:0 0 8px}.character-guide{background:#fff;border:1px solid #ead6a8;border-radius:9px;margin:8px 0;padding:9px}.character-guide summary{cursor:pointer;color:#573900}.source-line{display:block;background:#17243b;color:#fff;padding:8px;border-radius:6px;margin:8px 0;white-space:pre-wrap}.meaning,.term-box{background:#fffdf7;border-left:4px solid #d79a00;padding:7px 10px;margin:7px 0}.full-code-guide ul{margin:5px 0 0;padding-left:22px}.full-code-guide li{margin:5px 0}.full-code-guide code{font-family:Consolas,monospace}`;
  document.head.appendChild(style);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addGuides); else addGuides();
})();
