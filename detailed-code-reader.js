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

  Object.assign(word, {
    split: 'split(구분자)는 문자열 전용 메서드입니다. 이 코드에서는 예를 들어 phone이 "010-5678-1234"라면 phone.split("-")가 하이픈을 기준으로 ["010", "5678", "1234"]라는 리스트를 만듭니다. 원본 문자열 phone 자체를 찢어 바꾸는 것이 아니라, 잘라낸 결과 리스트를 새로 돌려줍니다.',
    splitlines: 'splitlines()는 긴 문자열을 줄바꿈 기준으로 나누는 문자열 메서드입니다. 이 코드에서는 여러 줄로 된 표나 텍스트를 한 줄씩 처리하기 위해 사용됩니다. 결과는 ["첫째 줄", "둘째 줄", ...]처럼 줄 단위 리스트가 됩니다.',
    join: 'join(리스트)는 문자열 메서드입니다. "-".join(parts)처럼 쓰면 parts 리스트의 각 글자 사이에 "-"를 끼워 넣어 하나의 문자열로 합칩니다. 이 코드에서는 split으로 나눈 전화번호 조각을 다시 전화번호 모양으로 붙일 때처럼, 리스트 → 문자열 변환 역할을 합니다.',
    replace: 'replace(찾을값, 바꿀값)는 문자열에서 특정 부분을 다른 글자로 바꾼 새 문자열을 돌려주는 메서드입니다. 이 코드에서는 "<"를 "&lt;"로 바꾸는 것처럼 위험하거나 감춰야 할 글자를 안전한 글자로 치환할 때 사용됩니다. 문자열은 직접 수정되지 않으므로 결과를 변수에 다시 저장해야 합니다.',
    strip: 'strip()은 문자열 양끝의 공백, 탭, 줄바꿈을 제거하는 메서드입니다. 이 코드에서는 파일이나 여러 줄 문자열을 읽은 뒤 앞뒤에 붙은 불필요한 빈칸을 없애서 비교·분리·출력이 깔끔하게 되도록 만듭니다. 가운데 공백은 지우지 않습니다.',
    upper: 'upper()는 문자열의 영어 소문자를 대문자로 바꾼 새 문자열을 돌려주는 메서드입니다. 원본 문자열 자체가 바뀌는 것이 아니라 결과를 새로 만들어 줍니다.',
    lower: 'lower()는 문자열의 영어 대문자를 소문자로 바꾼 새 문자열을 돌려주는 메서드입니다. 대소문자 구분 없이 비교할 때 자주 씁니다.',
    encode: 'encode()는 문자열을 컴퓨터가 해시나 저장에 사용할 수 있는 바이트 형태로 바꾸는 문자열 메서드입니다. 이 코드에서는 비밀번호 문자열을 sha256에 넣기 전에 "safe1234".encode()처럼 바이트로 바꾸는 준비 단계입니다.',
    escape: 'html.escape(문자열)는 HTML에서 위험하게 해석될 수 있는 <, >, & 같은 문자를 안전한 표시용 문자로 바꾸는 함수입니다. 이 코드에서는 사용자가 입력한 HTML 태그가 진짜 태그로 실행되지 않고 글자 그대로 보이게 만드는 보호 장치입니다.',

    append: 'append(값)는 리스트 메서드입니다. 리스트 맨 뒤에 값 하나를 추가합니다. 이 코드에서는 factors.append(d)처럼 약수나 소인수분해 결과를 차례대로 모을 때 사용됩니다. append는 리스트 자체를 바꾸며, 새 리스트를 반환하는 명령이 아닙니다.',
    keys: 'keys()는 딕셔너리 메서드입니다. 딕셔너리에서 왼쪽 이름표, 즉 키들만 꺼내 봅니다. 이 코드에서는 security.keys()처럼 저장된 항목 이름들을 리스트로 만들거나 반복할 때 사용됩니다.',
    values: 'values()는 딕셔너리 메서드입니다. 딕셔너리에서 오른쪽 값들만 꺼내 봅니다. 이 코드에서는 *d.values()처럼 여러 값을 함수 인수로 펼쳐 넣거나, sum_all(*s.values())처럼 값들의 합계를 구할 때 사용됩니다.',
    items: 'items()는 딕셔너리 메서드입니다. 키와 값을 한 쌍씩 (키, 값) 형태로 꺼냅니다. 이 코드에서는 sorted(d.items(), key=lambda x:x[1])처럼 점수나 개수 값을 기준으로 정렬하기 위해 사용됩니다.',
    get: 'get(키, 기본값)는 딕셔너리 메서드입니다. 키가 있으면 해당 값을 돌려주고, 키가 없으면 오류 대신 기본값을 돌려줍니다. 시험에서는 d["x"]와 달리 없는 키에서 프로그램이 멈추지 않는다는 점이 중요합니다.',
    update: 'update(다른딕셔너리)는 딕셔너리에 여러 키-값을 한 번에 추가하거나 수정하는 메서드입니다. 같은 키가 있으면 새 값으로 덮어씁니다.',

    read: 'read(개수)는 파일 객체 메서드입니다. 열린 파일에서 현재 커서 위치부터 내용을 읽습니다. read(11)이면 11글자 또는 11바이트만 읽고, read()처럼 비우면 남은 내용을 전부 읽습니다. 읽고 나면 파일 커서가 뒤로 이동합니다.',
    write: 'write(내용)는 파일 객체 메서드입니다. 화면에 보여 주는 print와 달리, 열린 파일 안에 내용을 기록합니다. 이 코드에서는 f.write("안녕하세요")처럼 파일 내용 자체를 만드는 역할입니다. 쓰기 모드 w에서는 기존 내용이 지워질 수 있습니다.',
    seek: 'seek(위치)는 파일 객체 메서드입니다. 파일을 읽거나 쓸 시작 위치, 즉 커서를 지정한 번호로 옮깁니다. 이 코드에서 f.seek(5)는 “다음 read/write는 5번 위치부터 시작해라”라는 뜻입니다.',
    tell: 'tell()은 파일 객체 메서드입니다. 현재 파일 커서가 몇 번 위치에 있는지 알려 줍니다. read나 write를 하면 커서가 움직이므로, tell() 출력은 앞에서 얼마나 읽고 썼는지에 따라 달라집니다.',
    close: 'close()는 파일 객체 메서드입니다. 파일 사용을 끝내고 연결을 닫습니다. with open(...) as f: 구조를 쓰면 블록이 끝날 때 자동으로 닫힙니다.',

    DataFrame: 'pd.DataFrame(데이터)는 Pandas에서 표를 만드는 생성자입니다. 이 코드에서는 딕셔너리의 키가 열 이름이 되고, 리스트 값들이 각 열의 데이터가 됩니다. 예를 들어 {"이름":["A"], "점수":[90]}은 이름 열과 점수 열이 있는 표가 됩니다.',
    Series: 'pd.Series(데이터)는 Pandas의 한 줄짜리 자료구조입니다. DataFrame이 여러 열짜리 표라면 Series는 열 하나 또는 이름표가 붙은 리스트에 가깝습니다.',
    describe: 'describe()는 Pandas DataFrame/Series 메서드입니다. 숫자 열의 개수, 평균, 표준편차, 최솟값, 사분위수, 최댓값을 요약합니다. 이 코드에서는 표 전체를 눈으로 다 보지 않고 데이터 분포를 빠르게 확인하는 역할입니다.',
    groupby: 'groupby(기준열)는 Pandas 메서드입니다. 같은 값을 가진 행끼리 먼저 묶습니다. 그 뒤 ["score"].mean()처럼 특정 열을 고르고 평균·합계·개수를 계산합니다. 즉 groupby 자체가 최종 답을 만드는 게 아니라 “묶기” 단계입니다.',
    mean: 'mean()은 평균을 구하는 메서드입니다. groupby 뒤에 붙으면 각 그룹별 평균이 되고, Series에 붙으면 그 열 전체 평균이 됩니다.',
    plot: 'plot()은 선 그래프나 점이 이어진 그래프를 그리는 메서드입니다. 이 코드에서 b.plot(m,t,"o-")는 x축에 m, y축에 t를 놓고 동그라미 점과 선으로 표시합니다.',
    bar: 'bar(x, y)는 막대그래프를 그리는 메서드입니다. 이 코드에서 a.bar(m,s)는 m 항목마다 s 높이의 막대를 만듭니다.',
    subplot: 'subplot()은 그래프를 그릴 도화지와 축을 준비하는 함수입니다. 이 코드에서는 a=plt.subplot()처럼 a라는 축 객체를 만든 뒤 a.bar(), a.twinx() 같은 그래프 메서드를 이어 씁니다.',
    twinx: 'twinx()는 같은 x축을 공유하면서 오른쪽에 y축을 하나 더 만드는 그래프 메서드입니다. 이 코드에서는 판매량과 기온처럼 단위가 다른 두 값을 한 그림에 같이 보여 주기 위해 씁니다.',
    title: 'title(제목)은 그래프 제목을 붙이는 메서드입니다. 이 코드에서는 plt.title("Sales vs Temp")처럼 그림 위쪽에 제목을 표시합니다.',
    show: 'show()는 준비한 그래프나 화면을 실제로 보여 주는 메서드입니다. plot, bar, title로 설정만 해 둔 뒤 마지막에 show()가 실행되어야 그림이 화면에 나타납니다.',

    sha256: 'hashlib.sha256(바이트)는 SHA-256 해시 계산기를 만드는 함수입니다. 이 코드에서는 비밀번호 원문을 그대로 저장하지 않고, 되돌리기 어려운 긴 해시값으로 바꾸기 위해 사용됩니다.',
    hexdigest: 'hexdigest()는 해시 객체 메서드입니다. sha256(... )으로 계산된 결과를 사람이 읽을 수 있는 16진수 문자열로 꺼냅니다. 이 코드에서는 hashed 변수에 저장되는 최종 해시 문자열을 만드는 마지막 단계입니다.',
    sqrt: 'sqrt()는 제곱근을 구하는 메서드입니다. 이 코드의 Decimal(10005).sqrt()는 10005의 제곱근을 높은 정밀도로 계산합니다.',

    factorize: 'factorize()는 이 학습 코드에서 만든 사용자 정의 메서드입니다. 보통 어떤 수를 소인수들로 나누어 리스트로 돌려주는 역할을 하도록 작성되어 있습니다. 파이썬 기본 내장 메서드가 아니라 class 안에서 직접 만든 기능입니다.',
    is_prime: 'is_prime()은 이 학습 코드에서 만든 사용자 정의 메서드입니다. 현재 객체가 가진 수 self.n 등이 소수인지 검사해서 True 또는 False를 돌려주는 역할입니다.',
    print_result: 'print_result()는 이 학습 코드에서 만든 사용자 정의 메서드입니다. 앞에서 계산한 결과를 사람이 읽기 좋은 문장으로 출력하는 역할입니다.',
    print_chart: 'print_chart()는 이 학습 코드에서 만든 사용자 정의 메서드입니다. 저장된 점수나 항목을 별표·막대·문장 같은 형태로 보기 좋게 출력하는 역할입니다.',
    run: 'run()은 이 학습 코드에서 만든 사용자 정의 메서드입니다. 객체 안에 들어 있는 여러 단계를 순서대로 실행하는 “시작 버튼” 역할입니다. app.run()이면 app 객체가 가진 전체 작업 흐름을 실행합니다.',
    total_score: 'total_score()는 이 학습 코드에서 만든 사용자 정의 메서드입니다. 객체 안에 저장된 여러 점수를 합산해 총점을 구하는 역할입니다.',
    sort_score: 'sort_score()는 이 학습 코드에서 만든 사용자 정의 메서드입니다. 객체 안의 점수 데이터를 기준에 맞게 정렬하는 역할입니다.',
    a: 'a()는 이 학습 코드의 클래스 안에서 만든 짧은 이름의 사용자 정의 메서드입니다. 코드에 따라 area, add 같은 계산 역할일 수 있으므로, 호출 위치에서 괄호 안 인수와 return/print 내용을 함께 봐야 합니다.',
    d: 'd()는 이 학습 코드의 클래스 안에서 만든 사용자 정의 메서드입니다. 기본 파이썬 메서드가 아니라, class 내부에서 def d(...)로 정한 동작을 실행합니다.',
    f: 'f()는 이 학습 코드의 클래스 안에서 만든 사용자 정의 메서드입니다. 보통 factorize처럼 계산 결과 리스트를 돌려주는 짧은 이름으로 쓰였습니다. s.f()라면 s 객체 안의 f 기능을 실행한다는 뜻입니다.',
    g: 'g()는 이 학습 코드의 클래스 안에서 만든 사용자 정의 메서드입니다. 코드에 따라 get/result 역할로 쓰이며, a.g()처럼 객체 뒤에 붙으면 그 객체가 가진 값을 꺼내거나 계산 결과를 반환합니다.',
    p: 'p()는 이 학습 코드의 클래스 안에서 만든 사용자 정의 메서드입니다. 보통 prime 판별처럼 True/False를 돌려주는 짧은 이름으로 쓰였습니다. if s.p():처럼 조건문에 들어가면 결과가 참인지 거짓인지에 따라 실행 흐름이 갈립니다.',
    r: 'r()는 이 학습 코드의 클래스 안에서 만든 사용자 정의 메서드입니다. 보통 result/run처럼 결과를 출력하거나 전체 계산을 실행하는 짧은 이름으로 쓰였습니다. N(...).r()은 N 객체를 만들자마자 r 기능을 실행한다는 뜻입니다.',
    s: 's()는 이 학습 코드의 클래스 안에서 만든 사용자 정의 메서드입니다. 기본 메서드가 아니라 class 안에서 def s(...)로 만든 기능이며, 보통 score/sum/show 같은 계산 결과를 돌려줍니다.'
  });

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

  function literalValue(text) {
    const t = text.trim();
    const quoted = t.match(/^(['"])(.*)\1$/);
    if (quoted) return quoted[2];
    if (/^-?\d+(?:\.\d+)?$/.test(t)) return Number(t);
    return undefined;
  }

  function valuesBefore(lines, until) {
    const state = new Map();
    for (let i = 0; i < until; i += 1) {
      const t = lines[i].trim();
      let m = t.match(/^([A-Za-z_]\w*)\s*=\s*(.+)$/);
      if (m) {
        const [, name, right] = m;
        const direct = literalValue(right);
        if (direct !== undefined) { state.set(name, direct); continue; }
        const split = right.match(/^([A-Za-z_]\w*)\.split\((['"])(.*?)\2\)$/);
        if (split && typeof state.get(split[1]) === 'string') { state.set(name, state.get(split[1]).split(split[3])); continue; }
        const join = right.match(/^(['"])(.*?)\1\.join\(([A-Za-z_]\w*)\)$/);
        if (join && Array.isArray(state.get(join[3]))) { state.set(name, state.get(join[3]).join(join[2])); continue; }
        const length = right.match(/^len\(([A-Za-z_]\w*)\)$/);
        if (length && state.has(length[1])) { state.set(name, state.get(length[1]).length); continue; }
      }
      m = t.match(/^([A-Za-z_]\w*)\[(\d+)\]\s*=\s*(.+)$/);
      if (m && Array.isArray(state.get(m[1]))) {
        const next = [...state.get(m[1])];
        const value = literalValue(m[3]);
        if (value !== undefined) { next[Number(m[2])] = value; state.set(m[1], next); }
      }
    }
    return state;
  }

  function valueLabel(value) {
    if (typeof value === 'string') return `"${esc(value)}"`;
    if (Array.isArray(value)) return `[${value.map(x => `"${esc(String(x))}"`).join(', ')}]`;
    return esc(String(value));
  }

  function equalValue(a, b) { return JSON.stringify(a) === JSON.stringify(b); }

  function workedPath(lines, expected) {
    const steps = [];
    lines.forEach((line, index) => {
      const t = line.trim();
      if (!t) return;
      const before = valuesBefore(lines, index);
      const after = valuesBefore(lines, index + 1);
      const used = unique((t.match(/[A-Za-z_]\w*/g) || []).filter(n => before.has(n)));
      const changed = [];
      [...after.keys()].forEach(name => {
        if (!before.has(name) || !equalValue(before.get(name), after.get(name))) changed.push(name);
      });
      let text = '';
      if (t.startsWith('#')) text = '주석이므로 계산하거나 출력하지 않습니다. 이 번호는 사람이 코드를 구분하려고 붙인 것입니다.';
      else if (/^def\s+/.test(t)) text = '함수의 설계만 등록합니다. 아직 함수 안의 계산은 시작하지 않습니다. 아래에서 함수 이름 뒤에 ()가 실제로 호출될 때 실행됩니다.';
      else if (/^(import|from)\s+/.test(t)) text = '필요한 도구를 가져오는 준비 단계입니다. 이 줄만으로는 최종 출력이 생기지 않습니다.';
      else if (/^for\s+/.test(t)) {
        const range = t.match(/range\((\d+)\s*,\s*(\d+)\)/);
        text = range ? `반복의 시작입니다. 반복 변수는 ${range[1]}부터 ${Number(range[2]) - 1}까지 차례대로 바뀌며, 아래 들여쓴 줄을 모두 ${Number(range[2]) - Number(range[1])}번 실행합니다.` : '반복의 시작입니다. 묶음에서 값을 하나씩 꺼내 아래 들여쓴 줄을 반복 실행합니다.';
      } else if (/^if\s+/.test(t)) text = '조건을 계산합니다. 결과가 True일 때만 바로 아래 들여쓴 줄로 내려가고, False이면 그 줄들을 건너뜁니다.';
      else if (/^print\((.*)\)$/.test(t)) {
        const inside = t.match(/^print\((.*)\)$/)[1].trim();
        text = before.has(inside) ? `출력 직전 ${inside}의 실제 값은 ${valueLabel(before.get(inside))}입니다. 따라서 print는 이 값을 화면에 그대로 보여 줍니다.` : `print 괄호 안의 ${esc(inside)}를 먼저 계산한 뒤 그 결과를 화면에 보여 줍니다.`;
      } else if (changed.length) {
        const changedText = changed.map(name => `${esc(name)} = ${valueLabel(after.get(name))}`).join(', ');
        const beforeText = used.length ? `실행 전 사용되는 값은 ${used.map(n => `${esc(n)} = ${valueLabel(before.get(n))}`).join(', ')}입니다. ` : '';
        text = `${beforeText}이 줄을 실행한 뒤 새로 계산되거나 바뀐 실제 값은 ${changedText}입니다.`;
      } else text = '이 줄은 앞에서 만든 값으로 계산·비교·호출을 수행합니다. 아래의 줄별 상세 해설에서 괄호 안 계산과 기호 역할을 계속 확인하세요.';
      steps.push(`<li><b>${index + 1}단계</b> <code>${esc(t)}</code><br>${text}</li>`);
    });
    const check = expected ? `<p class="answer-check"><b>마지막 검산:</b> 위 순서대로 실행한 결과가 원본의 예상 출력 <code>${esc(expected.trim())}</code>와 일치해야 합니다.</p>` : '';
    return `<details class="worked-path"><summary><b>이 코드 실제 풀이 과정: 위에서 아래로 값 계산하기</b></summary><p>시험에서 출력값을 구할 때는 아래 단계 순서대로 변수 값을 적어 가면 됩니다. 정의 암기가 아니라, 이 코드에 들어 있는 실제 값을 따라가는 풀이입니다.</p><ol>${steps.join('')}</ol>${check}</details>`;
  }

  function codeSpecific(line, allLines, index) {
    const t = line.trim();
    const notes = [];
    const actualState = valuesBefore(allLines, index);
    const appearingNames = unique((t.match(/[A-Za-z_]\w*/g) || []).filter(name => actualState.has(name)));
    if (appearingNames.length) {
      const actual = appearingNames.map(name => `<code>${esc(name)}</code> = <code>${valueLabel(actualState.get(name))}</code>`).join(', ');
      notes.push(`이 줄을 실행하기 <b>바로 전</b>, 이 코드 안에서 이미 계산된 실제 값은 ${actual}입니다. 아래 동작은 이 값을 재료로 사용합니다.`);
    }
    const assignment = t.match(/^([A-Za-z_]\w*(?:\[[^\]]+\])?)\s*(=|\+=|-=|\*=|\/=)\s*(.+)$/);
    if (assignment) {
      const [, left, op, right] = assignment;
      if (op === '=') notes.push(`이 코드에서는 <code>${esc(left)}</code>라는 이름표에 <code>${esc(right)}</code>를 계산한 결과를 보관합니다. 아래 줄에서 <code>${esc(left)}</code>가 다시 나오면 지금 이 줄에서 만든 결과를 꺼내 쓰는 것입니다.`);
      else notes.push(`이 코드에서는 <code>${esc(left)}</code>의 기존 값에 <code>${esc(right)}</code>를 ${op === '+=' ? '더하고' : op === '-=' ? '빼고' : op === '*=' ? '곱하고' : '나누어'}, 새 결과를 다시 <code>${esc(left)}</code>에 저장합니다. 즉 원래 값이 바뀝니다.`);
      const position = left.match(/^([A-Za-z_]\w*)\[(\d+)\]$/);
      if (position && Array.isArray(actualState.get(position[1]))) {
        const before = actualState.get(position[1]);
        const nextValue = literalValue(right);
        if (nextValue !== undefined) {
          const after = [...before]; after[Number(position[2])] = nextValue;
          notes.push(`실제 값 변화: <code>${esc(position[1])}</code>는 실행 전 <code>${valueLabel(before)}</code>입니다. 그중 ${esc(position[2])}번 칸(사람이 세면 ${Number(position[2]) + 1}번째 항목) <code>"${esc(String(before[Number(position[2])]))}"</code>를 <code>"${esc(String(nextValue))}"</code>로 바꾸므로, 실행 뒤에는 <code>${valueLabel(after)}</code>가 됩니다.`);
        }
      }
    }
    const method = t.match(/([A-Za-z_]\w*)\.([A-Za-z_]\w*)\(([^)]*)\)/);
    if (method) {
      const [, object, methodName, args] = method;
      const literalArgs = args.trim() ? `괄호 안의 <code>${esc(args)}</code>를 재료로 사용해서` : '추가 재료 없이';
      notes.push(`여기서는 <code>${esc(object)}</code> 안에 이미 들어 있는 값을 대상으로 <code>.${esc(methodName)}()</code> 기능을 실행합니다. 즉 ${literalArgs} <code>${esc(object)}</code>의 내용에서 다음 결과를 만듭니다.`);
      if (methodName === 'split' && typeof actualState.get(object) === 'string') {
        const separator = literalValue(args);
        if (typeof separator === 'string') notes.push(`실제 계산: <code>"${esc(actualState.get(object))}".split("${esc(separator)}")</code>이므로 <code>[${actualState.get(object).split(separator).map(x => `"${esc(x)}"`).join(', ')}]</code>가 됩니다. 이 결과의 위치 번호는 0, 1, 2 순서입니다.`);
      }
      if (methodName === 'join' && Array.isArray(actualState.get(args.trim()))) notes.push(`실제 계산: <code>${esc(object)}.join(${esc(args.trim())})</code>은 <code>${valueLabel(actualState.get(args.trim()))}</code>의 항목들을 <code>"${esc(object)}"</code> 사이사이에 넣어 이어 붙입니다.`);
    }
    const stringJoin = t.match(/(['"])(.*?)\1\.join\(([A-Za-z_]\w*)\)/);
    if (stringJoin && Array.isArray(actualState.get(stringJoin[3]))) {
      const joined = actualState.get(stringJoin[3]).join(stringJoin[2]);
      notes.push(`실제 계산: <code>${valueLabel(actualState.get(stringJoin[3]))}</code>의 각 항목 사이에 <code>"${esc(stringJoin[2])}"</code>를 넣어 연결하므로 최종 글자는 <code>"${esc(joined)}"</code>가 됩니다.`);
    }
    const call = t.match(/^print\((.*)\)$/);
    if (call) {
      notes.push(`이 코드에서 화면에 보이는 값은 <code>${esc(call[1])}</code>입니다. 따라서 출력 문제에서는 이 괄호 안의 이름·계산이 바로 앞줄들에서 어떤 값으로 바뀌었는지 추적하면 답을 구할 수 있습니다.`);
      const printedName = call[1].trim();
      if (actualState.has(printedName)) notes.push(`실제 출력 계산: 이 줄 직전 <code>${esc(printedName)}</code>에는 <code>${valueLabel(actualState.get(printedName))}</code>가 저장되어 있으므로, 화면에는 바로 <code>${valueLabel(actualState.get(printedName))}</code>가 출력됩니다.`);
    }
    const loop = t.match(/^for\s+([A-Za-z_]\w*)\s+in\s+range\(([^)]*)\):/);
    if (loop) {
      const [, variable, args] = loop;
      const nums = args.split(',').map(x => Number(x.trim()));
      let rangeText = '';
      if (nums.length === 1 && Number.isFinite(nums[0])) rangeText = `0부터 ${nums[0] - 1}까지, 모두 ${nums[0]}번`;
      if (nums.length === 2 && nums.every(Number.isFinite)) rangeText = `${nums[0]}부터 ${nums[1] - 1}까지, 모두 ${nums[1] - nums[0]}번`;
      if (rangeText) notes.push(`이 코드에서는 반복 변수 <code>${esc(variable)}</code>가 ${rangeText} 차례대로 바뀝니다. 매번 아래 들여쓴 줄이 한 번씩 실행되므로, 출력이 그 안에 있다면 같은 횟수만큼 출력됩니다.`);
    }
    const pick = t.match(/([A-Za-z_]\w*)\[([^\]]+)\]/);
    if (pick && !t.startsWith('for ')) {
      const [, container, position] = pick;
      if (/^\d+$/.test(position)) notes.push(`이 코드에서는 <code>${esc(container)}</code>에서 위치 번호 <code>${esc(position)}</code>의 항목을 고릅니다. 파이썬은 0부터 세므로 이것은 사람이 세는 ${Number(position) + 1}번째 항목입니다.`);
      else notes.push(`이 코드에서는 <code>${esc(container)}</code>에서 <code>${esc(position)}</code>가 가리키는 위치 또는 이름표의 값을 고릅니다.`);
    }
    if (/\.loc\[/.test(t)) notes.push('이 코드에서는 표에서 행·열의 **이름**을 이용해 정확한 칸을 찾습니다. 괄호가 아니라 대괄호를 쓰는 이유는 함수 호출이 아니라 표의 한 칸을 고르는 동작이기 때문입니다.');
    if (/\.iloc\[/.test(t)) notes.push('이 코드에서는 표에서 행·열의 **순서 번호**를 이용해 칸을 찾습니다. 첫 행·첫 열의 번호는 모두 0입니다.');
    if (/open\(/.test(t)) notes.push('이 코드에서는 파일을 열고 그 결과를 변수에 보관합니다. 다음 줄의 read·write는 이 줄에서 열어 둔 파일 변수를 대상으로 실행되어야 합니다.');
    if (/return\s+/.test(t)) notes.push('이 코드에서는 이 뒤 표현식이 함수의 최종 답이 됩니다. 함수를 호출한 줄에서는 이 값을 받아 변수에 저장하거나 print로 출력할 수 있습니다.');
    if (/^if\s+/.test(t)) notes.push('이 코드에서는 조건식의 실제 결과가 True일 때만 바로 아래 들여쓴 코드가 실행됩니다. False이면 그 묶음은 건너뛰므로 출력 여부도 달라집니다.');
    if (!notes.length) {
      const previous = allLines.slice(0, index).filter(x => x.trim()).at(-1);
      if (previous) notes.push(`이 줄은 바로 앞의 <code>${esc(previous.trim())}</code>에서 만든 값 또는 정해 둔 규칙을 이어서 사용합니다. 같은 이름이 다시 나오면 앞에서 저장한 값을 뜻합니다.`);
    }
    return `<div class="code-context"><b>이 코드 안에서 실제로 하는 일</b><ul>${notes.map(n => `<li>${n}</li>`).join('')}</ul></div>`;
  }

  function explainLine(line, number, allLines, index) {
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
    return `<details class="character-guide"><summary><b>${number}번째 실행 줄: 글자·기호까지 풀어 보기</b></summary><code class="source-line">${esc(line)}</code>${codeSpecific(line, allLines, index)}<div class="meaning"><b>이 줄 전체의 흐름</b><ul>${bullets.length ? bullets.map(b => `<li>${b}</li>`).join('') : '<li>위에서 만든 값이나 기능을 사용하여 다음 작업을 수행하는 줄입니다. 아래 명령어·기호 설명을 순서대로 읽어 보세요.</li>'}</ul></div>${termText ? `<div class="term-box"><b>이 줄에 나온 명령어·이름</b><ul>${termText}</ul></div>` : ''}${signText ? `<div class="term-box"><b>이 줄에 나온 기호</b><ul>${signText}</ul></div>` : ''}</details>`;
  }

  function codeOverview(lines) {
    const assignments = [];
    const outputs = [];
    const branches = [];
    lines.forEach((line, index) => {
      const t = line.trim();
      const set = t.match(/^([A-Za-z_]\w*)\s*(=|\+=|-=|\*=|\/=)\s*(.+)$/);
      if (set) assignments.push({ name: set[1], op: set[2], value: set[3], index });
      if (/^print\(/.test(t)) outputs.push({ value: t.slice(6, -1), index });
      if (/^(if|elif|else|for|while)\b/.test(t)) branches.push({ code: t, index });
    });
    const latest = new Map();
    assignments.forEach(x => latest.set(x.name, x));
    const variableList = [...latest.values()].slice(0, 14).map(x => {
      const usedLater = lines.slice(x.index + 1).some(l => new RegExp(`\\b${x.name}\\b`).test(l));
      return `<li><code>${esc(x.name)}</code> — 이 코드의 ${x.index + 1}번째 실행 줄에서 <code>${esc(x.value)}</code> 결과를 ${x.op === '=' ? '처음 저장' : '기존 값에서 바꿔 다시 저장'}합니다.${usedLater ? ` 뒤의 줄에서 <code>${esc(x.name)}</code>를 다시 사용하므로, 이 값이 다음 계산의 재료가 됩니다.` : ' 이 이름은 이후 줄에서 다시 쓰이지 않거나, 여기서 최종 결과에 쓰입니다.'}</li>`;
    }).join('');
    const outputList = outputs.map(x => `<li>${x.index + 1}번째 실행 줄의 <code>print(${esc(x.value)})</code>가 실제 화면 출력 지점입니다. 괄호 안 값은 그 전에 실행된 대입·반복·조건문의 결과를 받은 값입니다.</li>`).join('');
    const branchList = branches.map(x => `<li>${x.index + 1}번째 실행 줄의 <code>${esc(x.code)}</code> 때문에 아래 들여쓴 줄의 실행 횟수 또는 실행 여부가 달라집니다.</li>`).join('');
    return `<details class="code-roadmap"><summary><b>이 코드 전체에서 값이 움직이는 순서</b></summary><div class="roadmap-inner"><p>이 부분은 명령어 뜻이 아니라, <b>이 코드 안에서 실제 값이 어떻게 만들어지고 다음 줄로 전달되는지</b>를 정리한 것입니다.</p>${variableList ? `<b>이 코드에서 실제로 만들어지는 변수와 값</b><ul>${variableList}</ul>` : ''}${branchList ? `<b>실행 횟수·실행 여부를 바꾸는 줄</b><ul>${branchList}</ul>` : ''}${outputList ? `<b>출력이 결정되는 줄</b><ul>${outputList}</ul>` : ''}</div></details>`;
  }

  const methodKinds = [
    {name:'문자열 메서드', keys:['split','splitlines','join','replace','strip','upper','lower','encode','escape'], desc:'글자 자료에 점(.)을 붙여 사용합니다. 원본 글자를 직접 찢거나 바꾸기보다, 처리된 새 문자열이나 리스트를 돌려주는 경우가 많습니다.'},
    {name:'리스트 메서드', keys:['append','extend','pop','remove'], desc:'여러 값을 순서대로 담은 리스트에 붙습니다. append처럼 리스트 자체를 바꾸는 메서드가 많으므로 실행 전후 리스트 내용 변화를 봐야 합니다.'},
    {name:'딕셔너리 메서드', keys:['keys','values','items','get','update'], desc:'키와 값이 짝지어진 자료에 붙습니다. keys는 이름표, values는 값, items는 키와 값을 한 쌍으로 꺼냅니다.'},
    {name:'파일 메서드', keys:['read','write','seek','tell','close'], desc:'open으로 연 파일 객체에 붙습니다. read/write는 실제 내용 처리, seek/tell은 파일 안에서 현재 읽고 쓰는 위치를 다룹니다.'},
    {name:'Pandas 표 메서드', keys:['DataFrame','Series','describe','groupby','mean','sort_values','value_counts','read_csv','to_csv','loc','iloc','head','tail','info'], desc:'표 형태 데이터를 만들고 분석하는 기능입니다. DataFrame은 표 만들기, groupby는 묶기, describe는 요약 통계입니다.'},
    {name:'그래프 메서드', keys:['plot','bar','subplot','twinx','title','xlabel','ylabel','legend','show'], desc:'데이터를 그림으로 보여 주는 기능입니다. plot/bar로 그림 내용을 만들고, title 등으로 꾸민 뒤 show로 화면에 표시합니다.'},
    {name:'해시·보안 메서드', keys:['sha256','hexdigest','escape'], desc:'비밀번호나 HTML처럼 안전하게 처리해야 하는 값을 다룹니다. sha256은 해시 계산, hexdigest는 해시 결과 꺼내기, escape는 HTML 안전 표시입니다.'},
    {name:'수학·정밀 계산 메서드', keys:['sqrt','Decimal'], desc:'제곱근이나 정밀한 소수 계산처럼 숫자 계산 정확도가 중요한 부분에서 사용됩니다.'},
    {name:'사용자 정의 메서드', keys:['factorize','is_prime','print_result','print_chart','run','total_score','sort_score','a','d','f','g','p','r','s'], desc:'파이썬 기본 기능이 아니라 코드 작성자가 class 안에서 def로 직접 만든 메서드입니다. 이름이 짧으면 반드시 class 안의 정의 부분을 찾아 “무엇을 return/print 하는지” 확인해야 합니다.'}
  ];

  function methodGuide(lines) {
    const code = lines.join('\n');
    const dotMethods = [...code.matchAll(/\.([A-Za-z_]\w*)\s*\(/g)].map(m => m[1]);
    const constructorMethods = [...code.matchAll(/\b(pd\.DataFrame|pd\.Series|hashlib\.sha256|html\.escape|plt\.subplot|Decimal)\s*\(/g)].map(m => m[1].split('.').pop());
    const found = unique(dotMethods.concat(constructorMethods)).filter(k => word[k]);
    if (!found.length) return '';
    const rows = methodKinds.map(kind => {
      const hits = kind.keys.filter(k => found.includes(k));
      if (!hits.length) return '';
      return '<div class="method-kind"><b>' + kind.name + '</b><p>' + kind.desc + '</p><ul>' + hits.map(k => '<li><code>' + esc(k) + '()</code> — ' + word[k] + '</li>').join('') + '</ul></div>';
    }).filter(Boolean).join('');
    const all = found.map(k => '<code>' + esc(k) + '()</code>').join(', ');
    return '<details class="method-guide"><summary><b>이 코드에 나온 메서드 종류와 역할 전체 보기</b></summary><p>이 코드에서 감지된 메서드는 ' + all + '입니다. 점(.) 앞의 대상이 무엇인지 보면 종류가 갈립니다. 예를 들어 <code>phone.split("-")</code>은 phone이라는 문자열에 붙은 문자열 메서드이고, <code>f.read()</code>는 파일 객체에 붙은 파일 메서드입니다.</p>' + rows + '</details>';
  }

  function addGuides() {
    document.querySelectorAll('article').forEach((article) => {
      const code = article.querySelector(':scope > pre:not(.out)') || article.querySelector('pre');
      if (!code || article.querySelector('.full-code-guide')) return;
      const lines = code.textContent.replace(/\r/g, '').split('\n').filter(l => l.trim());
      const detail = lines.map((line, i) => explainLine(line, i + 1, lines, i)).filter(Boolean).join('');
      const box = document.createElement('section');
      box.className = 'full-code-guide';
      const expected = article.querySelector('pre.out')?.textContent || '';
      box.innerHTML = `<h3>이 코드의 명령어·기호 완전 해설</h3><p>아래를 펼치면 각 실행 줄에서 명령어, 괄호, 대괄호, 점, 따옴표, 대입 기호가 맡는 일을 확인할 수 있습니다. 빈 줄은 실행하지 않으므로 제외했습니다.</p>${methodGuide(lines)}${workedPath(lines, expected)}${codeOverview(lines)}${detail}`;
      code.insertAdjacentElement('afterend', box);
    });
  }

  const style = document.createElement('style');
  style.textContent = `.full-code-guide{background:#fff8e7;border:1px solid #e6bd62;border-radius:12px;padding:14px;margin:12px 0}.full-code-guide h3{margin:0 0 6px;color:#6a4700}.full-code-guide p{margin:0 0 8px}.character-guide,.code-roadmap,.worked-path,.method-guide{background:#fff;border:1px solid #ead6a8;border-radius:9px;margin:8px 0;padding:9px}.character-guide summary,.code-roadmap summary,.worked-path summary,.method-guide summary{cursor:pointer;color:#573900}.method-guide{border-color:#d59a2f;background:#fffaf0}.method-kind{background:#fff;border-left:4px solid #d79a00;padding:9px 11px;margin:9px 0;border-radius:8px}.method-kind p{margin:4px 0}.worked-path{border-color:#6aa9dc;background:#f8fcff}.worked-path>p{background:#e8f4ff;border-left:4px solid #287fbe;padding:8px}.worked-path ol{padding-left:28px}.worked-path li{padding:8px;margin:7px 0;background:#fff;border-radius:7px;border:1px solid #d5e7f5}.answer-check{background:#e9f8ec!important;border-left-color:#38834a!important}.roadmap-inner{background:#eef9ee;border-left:4px solid #38834a;padding:8px 10px;margin-top:8px}.source-line{display:block;background:#17243b;color:#fff;padding:8px;border-radius:6px;margin:8px 0;white-space:pre-wrap}.code-context{background:#e8f4ff;border-left:4px solid #287fbe;padding:7px 10px;margin:7px 0}.meaning,.term-box{background:#fffdf7;border-left:4px solid #d79a00;padding:7px 10px;margin:7px 0}.full-code-guide ul{margin:5px 0 0;padding-left:22px}.full-code-guide li{margin:5px 0}.full-code-guide code{font-family:Consolas,monospace}`;
  document.head.appendChild(style);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addGuides); else addGuides();
})();

