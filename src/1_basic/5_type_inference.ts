/**
 * type inference
 *
 * 타입 추론
 */
let stringType = 'string';
let booleanType = true;
let numberType = 100;

booleanType = false;
// booleanType = 'string'; // error

const constStringType = 'const string';
const constBooleanType = true;

let model = {
    name: 'kim',
    age: 2003,
}

const model2 = {
    name: 'kim',
    age: 2003,
}

model2.name = 'lee'
console.log(model2) // 변경됌

const model3 = {
    name: 'kim' as const,
    age: 2003 as const,
}

// model3.name = 'lee'; //error 'kim'만 가능

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5]; // number[]
let numbersAndString = [1, 2, 3, '4', '5', '6']; // (number|string)[]

// numbers.push('6'); //error
const number = numbers[0]; // number
const nos = numbersAndString[1]; // number|string
const nos2 = numbersAndString[100]; // 인덱스 값을 읽지 못함 실제론 undefinend

// tuple
const twoNumbers = [1, 3] as const;
// twoNumbers[0] = 10 //error
// twoNumbers.push(100); //error
const first = twoNumbers[0]
// const first2 = twoNumbers[2]; // error out Index