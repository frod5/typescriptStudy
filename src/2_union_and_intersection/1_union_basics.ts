/**
 * Union Basics
 * Or
 * 유니온은 ts에서 타입을 병합할 수 있는 수많은 방법중 하나이다.
 */
type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = 'kim';
stringOrBooleanType = true;
// stringOrBooleanType = undefined; // error

type StrBoolNullType = string | boolean | null;

type StateTypes = 'DONE' | 'LOANDING' | 'INITIAL';
let stateTypes: StateTypes = 'DONE';
// stateTypes = 'ERROR'; //error

/**
 * 리스트의 union
 */
type StringListOrBooleanList = string[] | boolean[];

let strListOrBoolList: StringListOrBooleanList = ['string', 'string']

strListOrBoolList = [true, false, true]

// strListOrBoolList = [true, 'string'] //error

type StrOrNumberList = (string | number)[]
let strOrNumberList: StrOrNumberList = [1,'test',2]

/**
 * Interface로 사용하는 union
 */
interface Animal {
    name: string,
    age: number,
}

interface Human {
    name: string,
    age: number,
    address: string,
}

type AnimalOrHuman = Animal | Human;
let animalOrHuman: AnimalOrHuman = {
    name: 'kim',
    age: 5,
    address: 'home',
};

console.log(animalOrHuman)

animalOrHuman = {
    name: '오리',
    age: 5,
}

console.log(animalOrHuman)

let animalOrHuman2: {
    name: string,
    age: number,
} | {
    name:string,
    age: number,
    address: string,
} = {
    name: 'lee',
    age: 30,
    address: 'home',
}

console.log(animalOrHuman2)

animalOrHuman2 = {
    name: '새',
    age: 10,
}
console.log(animalOrHuman2)

// 서로 관계가 없는 union을 선언하면 어떻게되나?
type Person = {
    name: string,
    age: number,
}

type Cat = {
    breed: string,
    country: string,
}

type PersonOrCat = Person | Cat

const personOrCat: PersonOrCat =  {
    name: 'kim',
    age: 5,
    breed: 'york',
    country: 'uk'
}

console.log(personOrCat)