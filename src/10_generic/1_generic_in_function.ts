/**
 * generic 함수에서 사용하기
 */
const whatVal = (value: any) => {
    return value;
}

const value = whatVal('test');

const genericWhatValue = <T>(value: T): T => {
    return value;
}

const genericResult1 = genericWhatValue<String>('test');

const genericResult2 = genericWhatValue(1234)

const multipleGeneric = <X, Y, Z>(x: X, y: Y, z: Z) => {
    return {x, y, z}
}

const multipleGenericResult = multipleGeneric<number, boolean, string>(1, true, 'str');

const getTuple = <X, Y>(val1: X, val2: Y) => {
    return [val1, val2] as const;
}

const tuple = getTuple<boolean, number>(true, 300);

class Member {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    brand: string;
    codeName: string;

    constructor(brand: string, codeName: string) {
        this.brand = brand;
        this.codeName = codeName;
    }
}

const instantiator = <T extends { new(...args: any[]): {} }>(constructor: T, ...args : any[]) => {
    return new constructor(...args)
}

console.log(instantiator(Member, 'name', 30));
console.log(instantiator(Car, 'Carname', '30'));