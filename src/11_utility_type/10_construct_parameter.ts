/**
 * construct parameter
 */
class Model {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

type ConstructParamType = ConstructorParameters<typeof Model>;