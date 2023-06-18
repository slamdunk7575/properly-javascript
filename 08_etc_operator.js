// 쉼표 연산자
// 왼쪽부터 차례로 실행, 마지막 것 반환
let x = 1, y = 2, z = 3;
console.log(x, y, z);

// 마지막으로 실행한 것 반환
console.log(
  (++x, y += x, z *= y)
);


// ?? - null 병합 연산자
let x1;
x1 ?? console.warn(x1, 'x에 값이 없습니다.');

x1 = 0;
x1 ?? console.warn(x1, 'x에 값이 없습니다.');

x1 = null;
x1 ?? console.warn(x1, 'x에 값이 없습니다.');


let a = false;
let b = 0;
let c = '';
let d = null;
let e;

console.log(
  a ?? '기본값',
  b ?? '기본값',
  c ?? '기본값',
  d ?? '기본값',
  e ?? '기본값',
);


let baby1 = '홍길동';
let baby2; // 아직 이름을 짓지 못함

const nameTag1 = baby1 ?? '1번 아기';
const nameTag2 = baby2 ?? '2번 아기';

console.log(nameTag1, nameTag2);


// 연산자의 우선순위
let x2 = 1;
let y2 = 19 === 3 + 4 * 2 ** ++x2;
console.log(y2);

console.log(
  2 > 3 || 4 % 2 === 0,
  2 > (3 || 4) % 2 === 0,
  2 > 3 || 4 % (2 === 0)
);

console.log(
  (3 || 4)
)