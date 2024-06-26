//사용자한테 특정숫자를 전달받으세요
//해당 숫자가 양수라면, 00숫자는 양수입니다! 알림창 출력
// 해당 숫자가 음수라면, 00 숫자는 음수입니다! 알림창 출력
// 해당 숫자가 0이라면, 입력하신 숫자는 0입니다. 알림창 출력

// 예외조항처리
// 숫자가 아닌 예기치 못한 값이 왔을 결루에는 애초에 프로그래밍 코드 자체가 실행될 필요가 없음

const number = Number(prompt("숫자를 입력해주세요!"));

// isNan() : 매개변수에 들어온 값이 숫자인지, 아닌지를 논리적으로 판단해주는 함수입니다.
//  매개변수가 숫자이면, false 반환 || 매개변수가 숫자가 아니면, true를 반환

// const isPositive = (n) => {
//   if (n > 0) {
//     alert(`${n}은 양수입니다.`);
//   } else if (n < 0) {
//     alert(`${n}은 음수입니다.`);
//   } else {
//     alert(`입력하신 숫자는 0입니다.`);
//   }
// };

// if (!isNaN(number)) {
//   isPositive(number);
// }

const isPositive = (n) => {
  if (n > 0) {
    alert(`${n}은 양수입니다.`);
  } else if (n < 0) {
    alert(`${n}은 음수입니다.`);
  } else {
    alert(`${n}은 0입니다.`);
  }
};

// 만약에 숫자가 아닌게 아니라면
if (!isNaN(number)) {
  isPositive(number);
}
