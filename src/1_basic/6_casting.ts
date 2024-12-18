/**
 * casting
 * TS에서 캐스팅을 하면 JS에서는 적용이 안된다.
 */
const text = 'text';
const testNumber = 3;
console.log(text.toUpperCase());
// console.log(testNumber.toUpperCase()); //error

let sampleNumber: any = 5;
// console.log(testNumber.toUpperCase()); //error
console.log((sampleNumber as string).toUpperCase()); // 컴파일에러는 안나는데 JS에서는 적용되지 않아 오류

let stringVar = sampleNumber as string;

console.log(typeof (sampleNumber as string)); // number

let number = 5;
console.log((number as any).toUpperCase());
