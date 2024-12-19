/**
 * Narrowing
 *
 * union타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수있게 되는걸 의미한다.
 */
let numberOrString: number | string = 'kim';
numberOrString;

const decimal = 12.3278
console.log(decimal.toFixed(2))  // number에서만 쓸수있는 함수
// numberOrString.toFixed() //error

/**
 * Narrowing의 종류
 *
 * 1) Assignment Narrowing
 * 2) typeOf Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator Narrowing
 * 6) instanceOf Narrowing
 * 7) discriminated union Narrowing (차별된 유니온 내로잉)
 * 8) exhaustiveness chekcing
 */

// 1) Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numOrString: number | string = 'kim';
numberOrString.toString();

// 2) typeOf Narrowing
numOrString = Math.random() > 0.5 ? 1234 : 'text';
if (typeof numOrString === 'string') {
    numOrString;
} else {
    numOrString;
}

// 3) Truthiness Narrowing
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['str1', 'str2'];
if (nullOrString) {
    nullOrString;
} else {
    nullOrString;
}

// 4) Equality Narrowing
let numOrString2: number | string = Math.random() > 0.5 ? 1234 : 'str1';
let stringOrBool2: string | boolean = Math.random() > 0.5 ? true : 'str1';

if (numOrString2 === stringOrBool2) {
    numOrString2;
    stringOrBool2;
} else {
    numOrString2;
    stringOrBool2;
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ? 1234 : Math.random() > 0.5 ? null : 'str1';
if (typeof numberOrStringOrNull === 'number') {
    numberOrStringOrNull
} else {
    numberOrStringOrNull
}

// 5) in operator Narrowing
interface Human {
    name: string,
    age: number,
}

interface Dog {
    name: string,
    type: string,
}

let human: Human = {
    name: 'kim',
    age: 10,
}

let dog: Dog = {
    name: 'gogo',
    type: 'york',
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;
console.log('name' in human);

if ('type' in humanOrDog) {
    humanOrDog
} else {
    humanOrDog
}

// 6) instanceOf Narrowing
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : 'str';
if (dateOrString instanceof Date) {
    dateOrString
} else {
    dateOrString
}

// 7) discriminated union Narrowing (차별된 유니온 내로잉)
interface Animal {
    type: 'human' | 'dog';
    height?: number;
    breed?: string;
}

let animal: Animal = Math.random() > 0.5 ? {
    type: 'human',
    height: 180,
} : {
    type: 'dog',
    breed: 'york',
}

if (animal.type === 'human') {
    animal.height
} else {
    animal.breed;
    animal.height;
}

interface Human2 {
    type: 'human';
    height: number
}

interface Dog2 {
    type: 'dog';
    breed: string;
}

interface Fish2 {
    type: 'fish';
    length: number;
}

type Human2OrDog2 = Human2 | Dog2 | Fish2;
let humanOrDog2: Human2OrDog2 = Math.random() > 0.5 ? {
    type: 'human',
    height: 180,
} : Math.random() > 0.5 ? {
    type: 'dog',
    breed: 'york',
} : {
    type: 'fish',
    length: 10,
};

if (humanOrDog2.type === 'human') {
    humanOrDog2
} else {
    humanOrDog2
}

// 8) exhaustiveness chekcing
switch (humanOrDog2.type) {
    case 'human':
        humanOrDog2;
        break;
    case 'dog':
        humanOrDog2;
        break;
    default:
        humanOrDog2  // never

        // const _check: never = humanOrDog2 // error로 체크할 수 있음
        break
}