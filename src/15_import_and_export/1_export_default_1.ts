/**
 * export
 * export default는 한개만 가능
 */
class Model {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const number = 12
// export default number;

interface ICat {
    name:string;
    breed:string;
}

export default {
    Model,
    number,
}