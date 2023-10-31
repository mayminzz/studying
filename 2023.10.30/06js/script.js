// 정규식
// 정규표현식을 왜 사용하는가?
// 특정 패턴을 사용해서 문자열을 표현하는 언어
// 쇼핑몰의 경우, 회원가입처리, 주문접수 처리
// 공통적으로 사용자가 입력하는 데이터
// 효율적으로 처리할 때

let regexp = /\d{3}/;
// 숫자 3자리라는 패턴을 regexp라는 변수에 할당하고 표현식으로 사용하겠다!

console.log(regexp.test("123"));
console.log(regexp.test("456"));
console.log(regexp.test("Hello"));

let regexp01 = new RegExp(/\d{3}/);
console.log(regexp01.test("123"));
console.log(regexp01.test("456"));
console.log(regexp01.test("Hello"));

let str = "ES2015 is powerful";
console.log(str.match(/ES6/));
// 문자역에서 정규표현식에 일치하는 부분을 찾아라! 라는 메서드

str.replace(/ES2015/, "ES6");
console.log(str.replace(/ES2015/, "ES6"));

console.log(/es/.test(str));
console.log(/es/i.test(str));
// 정규표현식에서 i의 의미는 대소문자를 가리지 않고 검색해서 찾아라 라는 의미!!

console.log(str.match(/ES\d\d\d\d/));

let hello = "hello Everyone";
// 대문자 H로 시작하는지
console.log(/^H/.test(hello));
// 소문자 h로 시작하는지
console.log(/^h/.test(hello));
//  i 대소문자 상관 없이 소문자 h 로 시작하는지
console.log(/^h/i.test(hello));

// 원에 .로 끝나는지 찾아달라
console.log(/one.$/.test(hello));
console.log(/e.$/.test(hello));
console.log(/one$/.test(hello));

// g 모든 요소를 찾아라
console.log("ES2015".match(/[^0-9]/g)); 
// 숫자와 반대되는 애를 찾아줘
// ^(캐롯): 특정 문자열 앞에 붙으면, 해당 문자로 시작하는지 여부를 확인 대괄호 안에 쓰이면 반대의 의미를 갖게된다.

let str02 = "Oooops";
console.log(str02.match(/o{2}/));
// 2회이상 반복되는 애 찾아줘
console.log(str02.match(/o{2,}/));
console.log(str02.match(/o{2,4}/i));

let str03 = "ES2015(ES6) is powerful";
// 둘중 하나만 있으면 돼
let regexp02 = /ES2015|ES6/;
console.log(regexp02.test(str03));

// 정규식에서 숫자의 패턴만 찾아오고 싶을 때
// /^[0-9]+$/

// 정규식에서 양의 정수 패턴만 찾아오고 싶을 때
// /^[0-9]\d*+$/
