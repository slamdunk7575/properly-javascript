let word1 = '안녕하세요! 🙂';
console.log(word1);

let word2 = "반갑습니다~ 👋";
console.log(word2);

let word3 = '작은따옴표 안에 "큰따옴표" 사용';
let word4 = "큰따옴표 안에 '작은따옴표' 사용";
console.log(word3, word4);

// 오류 발생
// let word5 = '작은따옴표 안에 '작은따옴표' 사용';
// let word6 = "큰따옴표 안에 "큰따옴표" 사용";
// console.log(word1, word2);

// 이스케이프 표현(escape sequence)
let word7 = '작은따옴표 안에 \'작은따옴표\' 사용';
let word8 = "큰따옴표 안에 \"큰따옴표\" 사용";
console.log(word7, word8);

let word9 = '안녕하세요~\t\t반갑습니다!\n저는 \\홍길동\\입니다.';
console.log(word9);


// let longName = '김수한무 거북이와 두루미 삼천갑자 동방삭 치치카포 사리사리센타 워리워리 세브리깡 무두셀라 구름이 허리케인에 담벼락 담벼락에 서생원 서생원에 고양이 고양이엔 바둑이 바둑이는 돌돌이';

let longName = '김수한무 거북이와 두루미 \
삼천갑자 동방삭 치치카포 사리사리센타 \
워리워리 세브리깡 무두셀라 구름이 \
허리케인에 담벼락 담벼락에 서생원 \
서생원에 고양이 고양이엔 바둑이 \
바둑이는 돌돌이';

// 줄바뀜 되는 것이 아님
// 큰따옴표도 마찬가지
console.log(longName);


let word10 = `헬로헬로~ 🤩`;
console.log(word10);

let word = `안녕하세요~		반갑습니다!
저는 \\홍길동\\입니다.`;
console.log(word);


const NAME = '홍길동';
let age = 20;
let married = false;

console.log(
`제 이름은 ${NAME}, 나이는 ${age}세구요, \
${married ? '기혼' : '미혼'}입니다.`
);