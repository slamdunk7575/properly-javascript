//==> 괄호 안의 3개의 식에 따른 반복수행
// 변수이므로 let이 사용됨
for (let i = 0; i < 5; i++) {
  console.log(i); 
}
console.log();

for (let i = 0; i < 5;) {
  console.log(i++); 
}
console.log();

for (let i = 0; i < 5;) {
  console.log(++i); 
}
console.log();

for (let i = 10; i >= 0; i-= 2) {
  console.log(i);
}
console.log();


//==> 중첩 사용
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
console.log();


//==> 둘 이상의 변수 사용
for (let x = 0, y = 10; x <= y; x++, y--) {
  console.log(x, y);
}
console.log();

for (
  let x = true, y = 0, z = 0;
  y * z < 10;
  x = !x, x ? y++ : z++
) {
  console.log(y, z);
}
console.log();


//==> 무한루프 (실행시 브라우저 멈출 수 있음)
// let x = 0;
// for (;;) {
//   console.log(x);
// }
// console.log('출력 안됨');

// for (let i = 0; i < 10; i++) {
//   console.log(i--);
// }
// console.log('출력 안됨');


//==> 객체: for (키 이름 in 객체면) - 객체의 키들을 순서대로 반환
const lunch = {
  name: '라면',
  taste: '매운맛',
  kilocalories: 500,
  cold: false
}

// 변할 것이 아니므로 const 사용
for (const key in lunch) {
  console.log(key, ':', lunch[key])
}
console.log();

// 키의 이름은 자유롭게 사용 가능
for (const k in lunch) {
  console.log(k, ':', lunch[k])
}
console.log();


//==> 배열: for (항목 of 배열명) - 배열의 항목들을 순서대로 반환
const list = [1, '가나다', false, null];

for (const item of list) {
  console.log(item);
}
console.log();

for (const el of list) {
  console.log(el);
}
console.log();

// 문자열 역시 이터러블이므로 사용 가능
for (const letter of '안녕하세요~') {
  console.log(letter);
}
console.log();


//==> for ... of 문의 장점
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 변수(i)를 사용하므로 위험요소 존재
for (let i = 0; i < numbers.length; i++) {
  // 이곳에 i를 변경하는 코드가 들어간다면...
  console.log(numbers[i]);
}
console.log();

// 변수를 사용하지 않음으로 보다 안전
for (const num of numbers) {
  console.log(num);
}
console.log();

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];

for (let num of numbers1) {
  num++; // 복사된 값 (let 사용 주목)
  numbers2.push(num + 1);
}
console.log(numbers1, numbers2);
console.log();

for (let i = 0; i < numbers1.length; i++) {
  numbers1[i]++; // 실제 값에 인덱스로 접근 - 원본 배열의 내용 변경
}
console.log(numbers1, numbers2);
console.log();


//==> continue - 한 루프를 건너뜀
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}
console.log('for 루프 종료');
console.log();

//==> break - 블록을 종료하고 빠져나옴
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
console.log('for 루프 종료');
console.log();

//==> label - 중첩된 반복문을 명명하여 continue 또는 break에 사용
outer:
for (let i = 1; i < 10; i++) {

  inner:
  for (let j = 1; j < 10; j++) {

    if (j % 2 === 0) continue inner;
    if (i * j >= 30) continue outer;
    
    if (j > 8) break inner;
    if (i - j > 7) break outer;

    console.log(i, j, i * j);
  }
}