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
      article.style.scrollMarginTop = '96px';
      return { ...info, id };
    });

    const essential = items.filter(x => x.group === 'essential').sort((a, b) => a.no - b.no);
    const diet = items.filter(x => x.group === 'diet').sort((a, b) => a.no - b.no);

    const panel = document.createElement('section');
    panel.className = 'code-jump-panel';
    panel.innerHTML = `
      <h2>번호 눌러서 해당 코드로 바로 이동</h2>
      <p>시험 직전에 특정 번호만 다시 볼 때 쓰면 됩니다. 버튼을 누르면 그 코드 위치로 바로 내려갑니다.</p>
      <div class="jump-search">
        <label>번호 직접 이동:
          <select id="jumpGroup">
            <option value="essential">필수학습코드</option>
            <option value="diet">다이어트 코드</option>
          </select>
          <input id="jumpNumber" type="number" min="1" inputmode="numeric" placeholder="번호">
          <button type="button" id="jumpGo">이동</button>
        </label>
      </div>
      <details open>
        <summary><b>필수학습코드 1~${essential.length}</b></summary>
        <div class="jump-grid essential-grid"></div>
      </details>
      <details>
        <summary><b>다이어트 코드 1~${diet.length}</b></summary>
        <div class="jump-grid diet-grid"></div>
      </details>
    `;

    const header = document.querySelector('header');
    (header || document.body).insertAdjacentElement(header ? 'afterend' : 'afterbegin', panel);

    const eGrid = panel.querySelector('.essential-grid');
    const dGrid = panel.querySelector('.diet-grid');
    essential.forEach(item => eGrid.appendChild(makeButton(item)));
    diet.forEach(item => dGrid.appendChild(makeButton(item)));

    panel.querySelector('#jumpGo').addEventListener('click', () => {
      const group = panel.querySelector('#jumpGroup').value;
      const no = Number(panel.querySelector('#jumpNumber').value);
      if (!no) return;
      jumpTo(`${group}-${no}`);
    });
    panel.querySelector('#jumpNumber').addEventListener('keydown', e => {
      if (e.key === 'Enter') panel.querySelector('#jumpGo').click();
    });

    const small = document.createElement('a');
    small.href = '#';
    small.className = 'jump-floating';
    small.textContent = '번호 이동';
    small.addEventListener('click', e => {
      e.preventDefault();
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    document.body.appendChild(small);
  }

  const style = document.createElement('style');
  style.textContent = `
    .code-jump-panel{background:#fff;border:2px solid #88a9d8;border-radius:16px;padding:16px;margin:14px 0;box-shadow:0 6px 18px #1e376f18}
    .code-jump-panel h2{margin:0 0 6px;color:#233d78}
    .code-jump-panel p{margin:4px 0 12px}
    .jump-search{background:#edf6ff;border-left:4px solid #3484c4;padding:10px;margin:10px 0;border-radius:8px}
    .jump-search select,.jump-search input,.jump-search button{font:inherit;padding:7px 9px;border:1px solid #b9c8dd;border-radius:8px;margin:3px}
    .jump-search button,.jump-grid button{background:#233d78;color:white;border:0;font-weight:700;cursor:pointer}
    .jump-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(46px,1fr));gap:7px;margin-top:10px}
    .jump-grid button{padding:8px 0;border-radius:8px}
    .jump-grid button:hover,.jump-search button:hover{background:#346bc0}
    .jump-floating{position:fixed;right:16px;bottom:70px;z-index:5;background:#0b6b5a;color:white;text-decoration:none;font-weight:800;padding:10px 12px;border-radius:9px;box-shadow:0 4px 14px #0002}
    article.jump-highlight{outline:4px solid #ffbf32;box-shadow:0 0 0 8px #ffbf3230;transition:box-shadow .2s,outline .2s}
    @media(max-width:640px){.jump-grid{grid-template-columns:repeat(6,1fr)}.jump-floating{right:10px;bottom:76px}.code-jump-panel{padding:13px}.jump-search label{display:block}.jump-search input{width:80px}}
  `;
  document.head.appendChild(style);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addJumpNav);
  else addJumpNav();
})();
