/**
 * Object
 */

const member = {
    name: 'john',
    age: 30,
}

interface IMember {
    name: string;
    age: number;
}

type TMember = {
    name: string;
    age: number;
}

const iMember: IMember = {
    name:'member1',
    age: 30,
}

const tMember: TMember = {
    name:'member1',
    age: 30,
}

