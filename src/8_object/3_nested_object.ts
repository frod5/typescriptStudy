/**
 * nested object
 */

type NestedPerson = {
    identity: {
        name: string;
        age: number;
    },
    nationality: string;
}

const person: NestedPerson = {
    identity : {
        name : 'person',
        age: 20,
    },
    nationality: 'korean',
}

type TPerson = {
    identity: TPersonIdentity;
    nationality:string;
}

type TPersonIdentity = {
    name: string;
    age: number;
}

const person2: TPerson = {
    identity: {
        name:'person2',
        age: 34,
    },
    nationality: 'korean',
}

// TPerson 방식이 좀 더 사용하기 좋다.

interface IPerson {
    identity: IPersonIdentity;
    nationality: string;
}

interface IPersonIdentity {
    name: string;
    age: number;
}

const person3: IPerson = {
    identity: {
        name: 'person2',
        age: 30
    },
    nationality: 'korean',
}