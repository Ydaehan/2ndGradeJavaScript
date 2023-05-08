# 반복문 다루기
- for, for~in, while
- 배열의 반복문
  - 배열명.forEach()
    - 배열의 원소들을 순서대로 하나씩 콜백함수의 실행결과를 나타냄
    - 콜백 함수
      - parameter: (value, index)
        - value : 원소의 값
        - index : 원소가 저장되어 있는 인덱스
  - 배열명.map()
    - 배열의 원소들을 순서대로 하나씩 콜백함수의 반환값으로 대응시켜 배열 원소 변경
    - 콜백 함수
      - parameter: (value, index)
        - value : 원소의 값
        - index : 원소가 저장되어 있는 인덱스
  
# 무작위로 숫자 뽑기
- Math.random()
  - 0 ~ 1.0 미만(0.999999......) 사이값을 반환하는 메서드
- 실수값을 정수값으로 변경
  - Math.floor()
    - 밑바닥, 내림(버림)
  - Math.round()
    - 반올림
  - Math.ceil()
    - 천장, 올림
- [n, m] : n이상 m이하
  - Math.floor(Math.random()*(m-n+1))+n
  - [1,10] : 1<=num<10
    - Math.floor(Math.random()*(10-1+1))+1
    - Math.floor(Math.random()*9)+1

# 배열 메서드
- 배열명.indexOf()
  - 배열에 검색데이터가 없으면 -1 있으면 해당 인덱스 값을 반환
- 배열명.includes()
  - 배열에 검색데이터가 있으면 true, 없으면 false
- 배열명.join(문자열)
  - 배열 원소를 파라미터의 문자열로 연결해서 하나의 문자열로 반환
- 배열명.fill([배열에 채워넣을 값])
  - 배열에 요소들을 배열에 채워 넣을 값으로 배열의 크기 만큼 다 채움
  - 인수로 아무것도 주어지지 않으면 undefined로 채워줌

# DOM 처리하기 추가 내용 - JS로 HTML 코드 작성하기
- document.createElement()
  - DOM의 element 객체 생성
  - document.createElement('div')
    - <div></div>
  - 자바스크립트로 html 코드를 만들 수 있다.
- document.createTextNode()
  - DOM의 내용이 되는 텍스트노드 객체(엘리먼트) 생성
  - document.createTextNode('텍스트')
- 엘리먼트객체.appendChild(엘리먼트객체); -> lastChild 쪽으로 붙임 (HTML 의 Body 부분)
  - 엘리먼트객체의 내용으로 아규먼트의 엘리먼트객체를 추가
- 엘리먼트객체.append(엘리먼트객체1[, 엘리먼트객체2, ....]); -> 여러개를 붙일 수 있다.
  - 엘리먼트객체의 내용으로 아규먼트의 엘리먼트객체를 추가
- ex) 장바구니 시스템


# 숫자 야구 게임
- 상대가 고른 4개의 숫자(1~9까지의 숫자)의 순서와 값을 맞추는 게임
- 10회 이내에 맞추기
- 플레이어의 입력한 숫자의 위치(index)와 값이 같다면 스트라이크 판정
- 플레이어의 입력한 숫자가 존재하지만 위치(index)가 다르면 볼
- 플레이어의 입력한 숫자가 존재하지 않으면 아웃
  - 제시된 숫자(상대는 모름) : ex) 5728
  - 입력한 숫자 : 
  - ex) 
  - 1st ) 7129 (1strike 1ball)
  - 2nd ) 7528 (2strike 2ball)
  - 3rd ) 7285 (4ball)
  - 4th ) 1234 (1ball)
  - 5th ) 4567 (2ball)
  - 6th ) ...
  - ...
  - 10th) ...


const getRNum = (n,m) => Math.floor(
                            Math.random() * 
                            (m-n+1)
                        )+n;

getRNum(1,10);