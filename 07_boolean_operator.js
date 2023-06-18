// 불리언(boolean)과 관련 연산자
console.log(true, typeof true);
console.log(false, typeof false);

let a = 1 === 2;
let b = 'abc' !== 'def'
let c = a !== b;
let d = typeof a === typeof b === true;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);


// 연산자
//==> 부정 연산자
console.log(
  true, !true, false, !false
);

console.log(
  true, !true, !!true, !!!true
);

console.log(
  false, !false, !!false, !!!false
);

console.log(
  true === !false,
  !(1 == '1'),
  !(1 === '1'),
  !(typeof false === 'boolean')
);


//==> AND / OR 연산자
// && - AND : 양쪽 모두 true 여부 반환
console.log(
  true && true,
  true && false,
  false && true,
  false && false,
);


// || - OR : 한 쪽이라도 true 여부 반환
console.log(
  true || true,
  true || false,
  false || true,
  false || false,
);


let x = 14;
// x = 6;
// x = 25;

console.log(
  (x > 10 && x <= 20) || x % 3 === 0
);


//==> 드모르간의 법칙
let a1 = true;
// a1 = false;
let b1 = true;
// b1 = false;

console.log(
  !(a1 && b1) === (!a1 || !b1),
  !(a1 || b1) === (!a1 && !b1)
); // 항상 true


//==> 단축평가 short circuit
let error = true;
// error = false;

// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn('오류 발생!');

// 앞의 것이 false일 때만 뒤의 코드 실행
error || console.log('이상 없음.');


//==> 삼항연산자 - ~ ? ~ : ~
let x2 = true;
// x = false;

let y2 = x2 ? '참입니다.' : '거짓입니다.';
console.log(y2);

let num = 103247;
console.log(
  'num은 3의 배수' +
  (num % 3 === 0 ? '입니다.' : '가 아닙니다.')
);

let num1 = 103247;
console.log(
  'num은 3의 배수' +
  (num1 % 3 === 0 ? '입니다.' : '가 아닙니다.')
);


// Truthy
console.log(
  1.23 ? true : false,
  -999 ? true: false,
  '0' ? true : false,
  ' ' ? true : false,
  Infinity ? true : false,
  -Infinity ? true : false,
  {} ? true : false,
  [] ? true : false,
);

// true 와 '같다'는 의미는 아님
console.log(
  1.23 == true,
  ' ' == true,
  {} == true
);


// Falsy
console.log(
  0 ? true : false,
  -0 ? true : false,
  '' ? true : false,
  null ? true : false,
  undefined ? true : false,
  NaN ? true : false,
);

// 어떤 값들은 false로 타입변환됨
console.log(
  0 == false,
  0 === false,
  '' == false,
  '' === false
);

console.log(
  null == false,
  undefined == false,
  NaN == false,
);

let x3 = 0;
let y3 = 1;

x3 && x3++;
y3 && y3++;

console.log(x3, y3);

let x4 = 2;
let y4 = 3;

console.log(
  x4 % 2 ? '홀' : '짝',
  y4 % 2 ? '홀' : '짝'
);


let x5 = '';
let y5 = '회사원';
let z = x5 || y5;
console.log(z);


x5 = x5 || '단기알바';
y5 = y5 || '단기알바';
console.log(x5, y5);


// boolean 으로 직접변환
// 한 번 부정
console.log(
  !1, !-999, !'hello',
  !0, !'', !null
);

// 두 번 부정하여 해당 boolean값으로
console.log(
  !!1, !!-999, !!'hello',
  !!0, !!'', !!null
);


let x7 = 123;
console.log(
  'x는 홀수인가?',
  !!(x7 % 2)
);