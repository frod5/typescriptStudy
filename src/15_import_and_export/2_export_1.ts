/**
 * export
 */
export class Model {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

export const modelKim = new Model('kim', 30);
export const number = 100;
export interface ICat {
    name: string;
    age: number;
}