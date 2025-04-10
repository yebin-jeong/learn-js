/*
2차원 배열을 사용한 라이언 수강생 관리 시스템
각 반의 학생들을 2차원 배열로 관리하고, 전체 수강생을 조회하는 예제
*/

// 각 반의 학생들
const febcStudents = [
  '하츄핑', '아자핑', '차차핑', '바로핑', '라라핑'
];

const bebcStudents = [
  '해핑', '키키핑', '아잉핑', '부끄핑', '부투핑'
];

const aosbcStudents = [
  '깜빡핑', '띠용핑', '주르핑', '차나핑', '따라핑', '무셔핑'
];

const iosbcStudents = [
  '나르핑', '투투핑', '차캐핑', '떠벌핑'
];

// 전체 멋사 수강생 (2차원 배열)
const lionStudents = [
  febcStudents,  // FEBC 수강생
  bebcStudents,  // BEBC 수강생
  aosbcStudents, // AOSBC 수강생
  iosbcStudents  // IOSBC 수강생
];

// 각 반의 학생 수 출력
console.log('FEBC 학생 수:', febcStudents.length);
console.log('BEBC 학생 수:', bebcStudents.length);
console.log('AOSBC 학생 수:', aosbcStudents.length);
console.log('IOSBC 학생 수:', iosbcStudents.length);

// 전체 멋사 수강생 수 계산
let totalStudents = 0;
for (let i = 0; i < lionStudents.length; i++) {
  for (let j = 0; j < lionStudents[i].length; j++) {
    totalStudents++;
  }
}
// const totalStudents = lionStudents.reduce((total, classStudents) => total + classStudents.length, 0);
console.log(`총 멋사 수강생 수: ${totalStudents}`);

// 특정 반의 모든 학생 출력
const classIndex = 0; // FEBC
console.log('FEBC 학생들');
for (let i = 0; i < lionStudents[classIndex].length; i++) {
  console.log(`${lionStudents[classIndex][i]}`);
}
// console.log(`FEBC 학생들: ${lionStudents[classIndex].join(', ')}`);

// 특정 학생이 있는지 확인
const studentToFind = '주르핑';

// 2차원 배열 조회
for (let i = 0; i < lionStudents.length; i++) {
  for (let j = 0; j < lionStudents[i].length; j++) {
    if (lionStudents[i][j] === studentToFind) {
      console.log(`${studentToFind} 학생이 있습니다.`);
      break;
    }
  }
}

