const str5 = "Hello, everyone";
console.log(typeof str5);

// 문자열을 배열로 바꾸는 방법
// 1. split()
const array2 = str5.split("");
console.log(array2);

// 2. 전개연산자
const array3 = [...str5];
console.log(array3);

//3. Array()메서드를 사용
const array4 = Array.from(str5);
console.log(array4);

//===============================================

//배열을 문자열로 바꾸는 방법
// 1. join()메서드 함수
const str6 = array4.join("");
console.log(str6);

//문자열에 대한 문법을 언제 사용하는가? 회원가입 & 로그인 페이지
//대문자를 1개 이상 || 특수문자 || 몇글자 이상 회원가입

const string = prompt("영문 소문자로 된 문자열을 입력하세요.");
const firstCh = string[0].toUpperCase();
// slice() : 자르다 매개변수 1, 객체의 문자열에서 1번째 인덱스 값부터 잘라내기
const remainString = string.slice(1);

// const result = firstCh + remainString;
// console.log(firstCh);
// console.log(remainString);

const result = [string[0].toUpperCase(), ...string.slice(1)].join("");
document.write(result);
