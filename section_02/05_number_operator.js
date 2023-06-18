// 양과 음의 정수와 실수
// 자바스크립트에는 정수와 실수의 자료형이 따로 있지 않음
let integer = 100;
let real = 1.234;
let negative = -5.67;

console.log(
  typeof integer,
  typeof real,
  typeof negative
);


// 무한대
let xx = 1 / 0;
console.log(xx, typeof xx);

// 무한대에는 양음이 있음
console.log(-xx, typeof -xx);

let yy = -1 / 0;
console.log(yy, typeof yy);

// Infinity도 예약어
let zz = Infinity;
console.log(zz, typeof zz);


// 숫자가 아닌 것 Not a Number
let xxx = 1 / 'abc';
let yyy = 2 * '가나다';
let zzz = NaN;

console.log(xxx, typeof xxx);
console.log(yyy, typeof yyy);
console.log(zzz, typeof zzz);


// NaN은 양음이 없음
console.log(-NaN);


// 주어진 값이 NaN인지 여부 확인하는 방법
let x = 1 / 'abc';

console.log(
  x,
  x == NaN,
  x === NaN,
  isNaN(x), // 숫자가 아닐 시 true
  Number.isNaN(x) // 보다 엄격한 버전
);


// isNaN과 Number.isNaN의 차이
console.log(
  typeof '1', isNaN('1'), Number.isNaN('1')
); // 특정 숫자로 변환 가능한 문자

console.log(
  typeof true, isNaN(true), Number.isNaN(true)
); // true는 1, false는 0으로 변환됨

console.log(
  typeof 'a', isNaN('a'), Number.isNaN('a')
); // 특정 숫자로 변환 불가인 문자의 경우 차이

console.log(
  typeof (1/'a'), isNaN(1/'a'), Number.isNaN(1/'a')
); // NaN값인 경우


//==> 연산자
// 값 반환
let x1 = 10;
let y1 = x1 * 10;

console.log(y1);

console.log(
  y1 + 1, // 덧샘
  y1 - 1, // 뺄셈
  y1 * 2, // 곱셈
  y1 / 5, // 나눗셈
  y1 % 3,  // 나머지
  y1 ** 2 // 제곱
);

// 부수효과 없음
console.log(y1);

// 널리 사용되는 홀수와 짝수의 판별법
console.log(
  '홀수 ',
  123 % 2,
  55 % 2,
  999 % 2
);
console.log(
  '짝수 ',
  2 % 2,
  100 % 2,
  8 % 2
);

console.log(
  4 * 1 + 2,
  4 * (1 + 2),
  4 * -(1 + 2),
  -(4 * -(1 + 2))
);


//==> 단항 산술 연산자
let x2 = 10;

// 값을 반환부터 하고 증가
console.log('1.', x2++, x2);

// 값을 증가부터 하고 반환
console.log('2.', ++x2, x2);

let x3 = 3;
let y3 = 4;

// 부수효과가 일어나는 시점
console.log(x3-- * --y3, x3, y3);

let x4 = 1;
console.log(
  +x4,
  -x4,
  -(-x4),
  -(x4++),
  -x4 * -1
);


//==> 문자열을 숫자로 바꿈
console.log(
  +'100',
  -'100',
  +'abc' // 숫자로 변환될 수 없는 문자열
);

let x5 = '100';
console.log(x5++, x5);

let y5 = '100';
console.log(--y5, y5);

// 숫자로 변환될 수 없는 문자열
// 첫 번째 값 주의 - 증가 이전에도 변환
let z = 'abc';
console.log(z++, z);


//==> 할당 산술 연산자
let x6 = 3;

x6 += 2;
console.log(x6);

x6 -= 3;
console.log(x6);

x6 *= 12;
console.log(x6);

x6 /= 3;
console.log(x6);

x6 %= 5;
console.log(x6);

x6 **= 4;
console.log(x6)


let y6 = 25;

console.log(
  y6 **= 0.5, // 할당된 결과 반환
  y6
);