/**
 * property check
 *
 * 초과 속성 검사
 */
type TName = {
    name: string;
}

type TAge = {
    age: number;
}

const person = {
    name:'person',
    age: 30,
}

const testName: TName = person;
const testAge: TAge = person;