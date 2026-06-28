(function () {
  'use strict';

  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const deep = {
    '딕셔너리': [
      ['딕셔너리를 진짜 처음부터 이해하기', `
        <p>딕셔너리는 <b>이름표가 붙은 보관함</b>입니다. 리스트가 0번, 1번, 2번처럼 “순서 번호”로 값을 찾는 자료라면, 딕셔너리는 <code>"이름"</code>, <code>"점수"</code>, <code>"전화번호"</code>처럼 <b>키(key)</b>라는 이름표로 값을 찾습니다.</p>
        <p>예를 들어 <code>student = {"name": "민수", "score": 90}</code>이라고 쓰면, 컴퓨터 안에는 “name이라는 이름표에는 민수”, “score라는 이름표에는 90”이 저장됩니다. 이때 <code>name</code>, <code>score</code>가 키이고, <code>민수</code>, <code>90</code>이 값(value)입니다.</p>
        <p>시험에서 딕셔너리 문제가 나오면 먼저 중괄호 <code>{}</code>를 보세요. 그리고 안에 콜론 <code>:</code>이 있으면 “왼쪽은 키, 오른쪽은 값”이라고 읽으면 됩니다. <code>{"국어": 80}</code>은 국어라는 키에 80이라는 값을 붙인 것입니다.</p>
      `],
      ['딕셔너리 코드 읽는 순서', `
        <ol>
          <li><code>d = {"a": 1, "b": 2}</code>를 보면 먼저 d라는 딕셔너리가 만들어졌다고 적습니다.</li>
          <li><code>d["a"]</code>는 “d 안에서 a라는 키의 값을 찾아라”입니다. 그래서 결과는 1입니다.</li>
          <li><code>d["c"]</code>처럼 없는 키를 대괄호로 찾으면 오류가 납니다. 없는 사물함 이름표를 찾는 것과 같습니다.</li>
          <li><code>d.get("c", 0)</code>은 “c가 있으면 그 값을 주고, 없으면 0을 줘라”입니다. 그래서 안전합니다.</li>
          <li><code>d["b"] = 5</code>는 b가 이미 있으면 값을 5로 바꿉니다. <code>d["c"] = 3</code>은 c가 없으므로 새 키를 추가합니다.</li>
        </ol>
      `],
      ['자주 나오는 메서드 완전 정리', `
        <p><code>keys()</code>는 키만 꺼냅니다. <code>{"a":1, "b":2}.keys()</code>는 a, b라는 이름표 쪽만 보는 것입니다.</p>
        <p><code>values()</code>는 값만 꺼냅니다. <code>{"a":1, "b":2}.values()</code>는 1, 2만 보는 것입니다. <code>sum(d.values())</code>가 나오면 “값들을 모두 더한다”로 읽으면 됩니다.</p>
        <p><code>items()</code>는 키와 값을 쌍으로 꺼냅니다. 반복문에서 <code>for key, value in d.items():</code>가 나오면 “딕셔너리에서 한 쌍씩 꺼내 key에는 이름표, value에는 값을 넣는다”는 뜻입니다.</p>
        <p><code>pop("a")</code>는 a 키의 값을 꺼내면서 딕셔너리에서 삭제합니다. 즉 “값 확인”과 “삭제”가 동시에 일어납니다.</p>
        <p><code>setdefault("a", [])</code>는 a가 없으면 빈 리스트를 만들어 넣고, 있으면 기존 값을 그대로 돌려줍니다. 여러 값을 키별로 모을 때 자주 씁니다.</p>
      `],
      ['출력 문제 푸는 법', `
        <p>딕셔너리 출력 문제는 <b>키가 새로 생겼는지, 기존 키의 값이 바뀌었는지</b>를 따라가면 됩니다.</p>
        <pre>d = {"a": 1}
d["b"] = 2
d["a"] = 3
print(len(d))</pre>
        <p>첫 줄 뒤에는 키가 a 하나입니다. 둘째 줄에서 b가 새로 생겨 키가 a, b 두 개가 됩니다. 셋째 줄은 a를 새로 추가하는 게 아니라 기존 a의 값을 1에서 3으로 바꾸는 것입니다. 그래서 키 개수는 여전히 2개이고 출력은 <code>2</code>입니다.</p>
      `]
    ],
    '함수': [
      ['함수는 “나중에 실행할 작업 묶음”이다', `
        <p>함수는 코드를 묶어 이름을 붙인 것입니다. 핵심은 <b>정의</b>와 <b>호출</b>을 구분하는 것입니다. <code>def hello():</code>라고 쓰는 순간 함수 안 코드가 바로 실행되는 것이 아닙니다. “hello라는 이름의 작업 묶음을 등록해 둔다”에 가깝습니다.</p>
        <p>실제로 실행하려면 <code>hello()</code>처럼 함수 이름 뒤에 괄호를 붙여 호출해야 합니다. 시험에서 함수 코드가 나오면 <code>def</code> 아래 줄을 바로 실행하지 말고, 아래쪽에서 함수가 호출되는 순간을 찾아야 합니다.</p>
      `],
      ['매개변수와 인자 차이', `
        <p><b>매개변수(parameter)</b>는 함수를 만들 때 비워 둔 자리 이름입니다. <code>def add(a, b):</code>에서 a와 b가 매개변수입니다.</p>
        <p><b>인자(argument)</b>는 함수를 부를 때 실제로 넣는 값입니다. <code>add(2, 3)</code>에서 2와 3이 인자입니다. 호출되는 순간 a에는 2, b에는 3이 들어갑니다.</p>
        <p>그래서 <code>def add(a, b): return a+b</code> 다음에 <code>print(add(2, 3))</code>이 있으면, 머릿속으로 <code>a=2</code>, <code>b=3</code>, <code>a+b=5</code>, print가 5를 출력한다고 계산하면 됩니다.</p>
      `],
      ['print와 return은 완전히 다르다', `
        <p><code>print()</code>는 화면에 보여 주는 행동입니다. 값을 밖으로 돌려주는 것이 아닙니다. 반대로 <code>return</code>은 함수가 계산한 결과를 함수 밖으로 돌려주는 행동입니다.</p>
        <pre>def f():
    print(3)

x = f()
print(x)</pre>
        <p>이 코드는 f()가 실행될 때 먼저 3을 화면에 보여 줍니다. 하지만 return이 없으므로 f()의 반환값은 <code>None</code>입니다. 그래서 x에는 None이 저장되고, 마지막 줄에서 None이 출력됩니다.</p>
        <p>시험에서 “출력 결과”를 물으면 print가 몇 번 실행되는지 봐야 하고, “변수에 저장되는 값”을 물으면 return이 무엇인지 봐야 합니다.</p>
      `],
      ['*args, **kwargs, lambda, map, filter', `
        <p><code>*args</code>는 개수가 정해지지 않은 위치 인자를 튜플로 모읍니다. <code>def total(*args):</code>에 <code>total(1,2,3)</code>을 넣으면 args는 <code>(1,2,3)</code>이 됩니다.</p>
        <p><code>**kwargs</code>는 이름=값 형태의 인자를 딕셔너리로 모읍니다. <code>print_info(이름="호랑이", 역할="선생님")</code>이면 kwargs는 <code>{"이름":"호랑이", "역할":"선생님"}</code>처럼 됩니다.</p>
        <p><code>lambda x: x*2</code>는 이름 없는 짧은 함수입니다. <code>map(lambda x:x*2, [1,2,3])</code>은 1, 2, 3 각각에 x*2를 적용해서 2, 4, 6을 만듭니다.</p>
        <p><code>filter(lambda x:x%2==0, nums)</code>는 조건이 True인 값만 남깁니다. 즉 짝수만 통과시키는 체처럼 생각하면 됩니다.</p>
      `]
    ],
    '문자열': [
      ['문자열은 글자 리스트처럼 읽지만 직접 수정은 안 된다', `
        <p>문자열은 글자들이 순서대로 붙어 있는 자료입니다. <code>s = "python"</code>이면 p, y, t, h, o, n 여섯 글자가 순서대로 있습니다. 위치 번호는 1이 아니라 <b>0부터</b> 시작합니다.</p>
        <p><code>s[0]</code>은 첫 글자인 p, <code>s[1]</code>은 y, <code>s[-1]</code>은 마지막 글자인 n입니다. 음수 인덱스는 뒤에서부터 세는 번호입니다.</p>
        <p>하지만 문자열은 <b>불변(immutable)</b>이라서 <code>s[0] = "P"</code>처럼 특정 위치를 직접 바꿀 수 없습니다. 바꾸고 싶으면 새 문자열을 만들어 변수에 다시 저장해야 합니다.</p>
      `],
      ['슬라이싱은 끝 번호를 포함하지 않는다', `
        <p><code>s[시작:끝]</code>은 시작 위치부터 끝 위치 바로 전까지 가져옵니다. 예를 들어 <code>s = "Hello, world!"</code>일 때 <code>s[7:12]</code>는 7번부터 11번까지라서 <code>world</code>입니다. 12번 느낌표는 포함되지 않습니다.</p>
        <p>시험에서 슬라이싱이 나오면 글자 밑에 0,1,2,3 번호를 직접 적는 게 제일 안전합니다. 특히 <code>s[:3]</code>은 처음부터 2번까지, <code>s[3:]</code>은 3번부터 끝까지입니다.</p>
      `],
      ['split, join, replace, strip', `
        <p><code>split("-")</code>은 문자열을 하이픈 기준으로 잘라 리스트로 만듭니다. <code>"010-1234-5678".split("-")</code>은 <code>["010", "1234", "5678"]</code>입니다.</p>
        <p><code>"-".join(parts)</code>는 리스트의 각 원소 사이에 하이픈을 넣어 다시 문자열로 합칩니다. 즉 split은 문자열→리스트, join은 리스트→문자열입니다.</p>
        <p><code>replace("a","b")</code>는 a를 b로 바꾼 새 문자열을 돌려줍니다. 원본을 직접 바꾸는 게 아니므로 <code>s = s.replace(...)</code>처럼 다시 저장해야 실제로 바뀐 값을 계속 씁니다.</p>
        <p><code>strip()</code>은 양끝 공백과 줄바꿈을 제거합니다. 파일에서 읽은 줄 끝의 <code>\\n</code>을 정리할 때 자주 나옵니다.</p>
      `],
      ['find와 index 차이', `
        <p><code>find()</code>와 <code>index()</code>는 둘 다 글자가 어디 있는지 찾습니다. 차이는 못 찾았을 때입니다. <code>find</code>는 <code>-1</code>을 돌려주고, <code>index</code>는 오류를 냅니다.</p>
        <p>그래서 “없으면 -1”이라는 말이 보이면 find, “없으면 ValueError”가 보이면 index를 떠올리면 됩니다.</p>
      `]
    ],
    '파일 입출력': [
      ['파일 입출력은 저장장치와 프로그램 사이의 대화다', `
        <p>변수에 저장한 값은 프로그램이 끝나면 사라집니다. 하지만 파일에 쓰면 프로그램을 껐다 켜도 남아 있습니다. 파일 입출력은 파이썬이 메모장 파일 같은 외부 파일을 읽고 쓰는 방법입니다.</p>
        <p><code>open("file.txt", "w")</code>는 file.txt를 쓰기 모드로 엽니다. 이때 파일이 없으면 만들고, 이미 있으면 기존 내용을 지웁니다. 그래서 w 모드는 조심해야 합니다.</p>
      `],
      ['r, w, a, r+, rb, wb 모드', `
        <p><code>r</code>은 읽기입니다. 파일이 없으면 오류가 납니다. <code>w</code>는 쓰기입니다. 기존 내용을 지우고 새로 씁니다. <code>a</code>는 추가입니다. 기존 내용 뒤에 덧붙입니다.</p>
        <p><code>r+</code>는 읽기와 쓰기를 함께 합니다. 파일 커서 위치가 중요해지므로 <code>seek()</code>, <code>tell()</code> 문제가 자주 나옵니다.</p>
        <p><code>rb</code>, <code>wb</code>의 b는 binary입니다. 이미지, 음성처럼 글자가 아닌 파일을 다룰 때 씁니다. 텍스트 파일은 보통 <code>encoding="utf-8"</code>을 함께 씁니다.</p>
      `],
      ['with open이 중요한 이유', `
        <p><code>with open(...) as f:</code>는 파일을 열고, 들여쓰기 블록이 끝나면 자동으로 파일을 닫아 줍니다. 파일을 닫지 않으면 저장이 제대로 안 되거나 다른 프로그램이 파일을 못 쓰는 문제가 생길 수 있습니다.</p>
        <p><code>as f</code>는 “열린 파일을 f라는 이름으로 부르겠다”는 뜻입니다. 그래서 안쪽에서 <code>f.read()</code>, <code>f.write()</code>처럼 f에 점을 붙여 파일 기능을 사용합니다.</p>
      `],
      ['read, readline, readlines, write, seek, tell', `
        <p><code>read()</code>는 파일 내용을 한 덩어리 문자열로 읽습니다. <code>read(5)</code>처럼 숫자를 넣으면 현재 위치부터 5개만 읽습니다.</p>
        <p><code>readline()</code>은 한 줄만 읽습니다. <code>readlines()</code>는 모든 줄을 리스트로 읽습니다. 줄 끝에는 <code>\\n</code>이 포함될 수 있습니다.</p>
        <p><code>write("안녕")</code>은 파일에 글자를 씁니다. 화면 출력이 아니라 파일 내용이 바뀌는 것입니다.</p>
        <p><code>seek(5)</code>는 파일 커서를 5번 위치로 옮깁니다. <code>tell()</code>은 현재 커서 위치를 알려 줍니다. 출력 문제에서는 seek로 이동한 뒤 read가 몇 글자를 읽었는지 계산해야 합니다.</p>
      `]
    ],
    '객체지향(OOP)': [
      ['객체지향은 변수와 함수를 한 세트로 묶는 방식이다', `
        <p>객체지향은 어렵게 말하면 “객체를 중심으로 프로그램을 설계하는 방식”입니다. 쉽게 말하면 <b>데이터</b>와 <b>그 데이터를 다루는 기능</b>을 한 덩어리로 묶는 방법입니다.</p>
        <p>예를 들어 학생을 표현한다면 이름, 점수는 데이터이고, 평균을 구한다, 인사한다 같은 것은 기능입니다. 이것을 한 묶음으로 만들면 Student 객체가 됩니다.</p>
      `],
      ['class와 object', `
        <p><code>class Student:</code>는 Student라는 설계도를 만드는 것입니다. 설계도만 만든다고 실제 학생 객체가 생기는 것은 아닙니다. <code>s1 = Student()</code>처럼 호출해야 실제 객체가 만들어집니다.</p>
        <p>클래스는 붕어빵 틀, 객체는 실제 붕어빵이라고 생각하면 됩니다. 같은 틀로 여러 객체를 만들 수 있고, 각 객체는 서로 다른 값을 가질 수 있습니다.</p>
      `],
      ['self와 __init__', `
        <p><code>self</code>는 “지금 이 객체 자신”입니다. <code>self.name = name</code>은 함수 안으로 들어온 name 값을 이 객체의 name 속성에 저장한다는 뜻입니다.</p>
        <p><code>__init__</code>은 객체가 만들어질 때 자동으로 실행되는 특별한 메서드입니다. 그래서 <code>Student("민수")</code>를 실행하면 내부적으로 <code>__init__</code>이 호출되어 이름 같은 초기값을 넣습니다.</p>
      `],
      ['상속, 오버라이딩, 다형성', `
        <p>상속은 부모 클래스의 기능을 자식 클래스가 물려받는 것입니다. <code>class Dog(Animal):</code>은 Dog가 Animal의 기능을 물려받는다는 뜻입니다.</p>
        <p>오버라이딩은 부모에게 있는 메서드를 자식이 같은 이름으로 다시 정의하는 것입니다. Animal의 speak가 “소리낸다”라면 Dog의 speak는 “멍멍”으로 바꿀 수 있습니다.</p>
        <p>다형성은 같은 <code>speak()</code>를 호출해도 Dog면 멍멍, Cat이면 야옹처럼 객체 종류에 따라 다르게 동작하는 성질입니다.</p>
      `]
    ],
    'Pandas 데이터 분석': [
      ['Pandas는 파이썬 안의 엑셀 표 도구다', `
        <p>Pandas는 표 데이터를 다루는 라이브러리입니다. 엑셀처럼 행과 열이 있는 데이터를 파이썬 코드로 정리, 선택, 계산, 분석하게 해 줍니다.</p>
        <p>보통 <code>import pandas as pd</code>라고 씁니다. 이 말은 pandas라는 긴 이름을 앞으로 <code>pd</code>라고 짧게 부르겠다는 뜻입니다. 그래서 <code>pd.DataFrame()</code>처럼 씁니다.</p>
      `],
      ['Series와 DataFrame', `
        <p><code>Series</code>는 한 줄짜리 데이터입니다. 이름표가 붙은 리스트라고 생각하면 됩니다. <code>DataFrame</code>은 여러 열과 행이 있는 표입니다.</p>
        <p><code>df["score"]</code>처럼 대괄호 한 겹으로 한 열을 고르면 보통 Series입니다. <code>df[["score"]]</code>처럼 대괄호 두 겹이면 한 열짜리 DataFrame입니다. 시험에서 자주 헷갈리는 부분입니다.</p>
      `],
      ['행과 열 선택: loc와 iloc', `
        <p><code>loc</code>는 라벨, 즉 이름 기준입니다. 행 이름이 "민수"라면 <code>df.loc["민수"]</code>처럼 고릅니다.</p>
        <p><code>iloc</code>는 정수 위치 기준입니다. 첫 번째 행은 0번, 두 번째 행은 1번입니다. <code>df.iloc[0]</code>은 첫 번째 행입니다.</p>
        <p>외우는 법은 loc는 label의 l, iloc는 integer location의 i입니다. 이름이면 loc, 번호면 iloc입니다.</p>
      `],
      ['결측치, 필터링, 새 열 만들기', `
        <p>결측치는 비어 있는 값입니다. Pandas에서는 주로 <code>NaN</code>으로 보입니다. <code>dropna()</code>는 결측치가 있는 행이나 열을 삭제하고, <code>fillna(0)</code>은 빈 값을 0 같은 값으로 채웁니다.</p>
        <p><code>df[df["age"] > 20]</code>은 age 열이 20보다 큰 행만 남기는 필터링입니다. 안쪽 <code>df["age"] > 20</code>이 True/False 목록을 만들고, 바깥 df[...]가 True인 행만 골라냅니다.</p>
        <p><code>df["new_score"] = df["score"] + 10</code>은 score 열 전체에 10을 더해 new_score라는 새 열로 저장합니다. Pandas는 열 단위 계산을 자동으로 해 줍니다.</p>
      `],
      ['groupby와 merge', `
        <p><code>groupby("class")</code>는 class 값이 같은 행끼리 묶습니다. 그 뒤 <code>["score"].mean()</code>을 붙이면 각 class별 score 평균을 구합니다. groupby는 “묶기”, mean은 “평균 계산”입니다.</p>
        <p><code>pd.merge(df1, df2, on="key", how="left")</code>는 key 열을 기준으로 두 표를 합칩니다. left는 왼쪽 표 df1의 행을 모두 유지하겠다는 뜻입니다. 오른쪽에 맞는 값이 없으면 NaN이 생길 수 있습니다.</p>
      `]
    ]
  };

  function makeArticle(title, html) {
    const article = document.createElement('article');
    article.className = 'card python-deep-card';
    article.innerHTML = `<h3>${esc(title)}</h3>${html}`;
    return article;
  }

  function currentPythonTitle() {
    const title = document.querySelector('#lessonTitle')?.textContent || '';
    return Object.keys(deep).find(k => title.includes(k));
  }

  function injectDeepDive() {
    const learn = document.querySelector('#learn');
    const key = currentPythonTitle();
    if (!learn || !key || learn.querySelector('.python-deep-marker')) return;
    const marker = document.createElement('article');
    marker.className = 'card python-deep-marker';
    marker.innerHTML = `<h3>초보자용 완전 해설: ${esc(key)}</h3><p>아래 설명은 “코딩을 거의 처음 보는 사람” 기준입니다. 문제를 풀 때는 용어를 외우기보다, 코드가 위에서 아래로 어떤 값을 만들고 어떤 명령이 그 값을 쓰는지 따라가면 됩니다.</p>`;
    learn.appendChild(marker);
    deep[key].forEach(([title, html]) => learn.appendChild(makeArticle(title, html)));
  }

  const style = document.createElement('style');
  style.textContent = `
    .python-deep-card,.python-deep-marker{border-color:#8bb7e8!important;background:#fbfdff!important}
    .python-deep-marker{border-left:6px solid #266fb6!important}
    .python-deep-card h3,.python-deep-marker h3{color:#174d87!important}
    .python-deep-card pre{background:#17243b;color:#fff;padding:12px;border-radius:8px;white-space:pre-wrap;overflow:auto}
    .python-deep-card ol{padding-left:24px}
    .python-deep-card li{margin:6px 0}
  `;
  document.head.appendChild(style);

  const obs = new MutationObserver(() => setTimeout(injectDeepDive, 0));
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      const learn = document.querySelector('#learn');
      if (learn) obs.observe(learn, { childList: true });
      injectDeepDive();
    });
  } else {
    const learn = document.querySelector('#learn');
    if (learn) obs.observe(learn, { childList: true });
    injectDeepDive();
  }
})();
