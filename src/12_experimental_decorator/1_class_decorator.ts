/**
 * Class Decorator
 */
@Test
@Frozen
@LogTest()
@ChangeClass
class Model {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

function Test(constructor: Function) {
    console.log(constructor);
}

function Frozen(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

const model1 = new Model('kim', 20);
console.log(Object.isFrozen(Object.getPrototypeOf(model1)));

// decorator factory
function LogTest() {
    return function (constructor: Function) {
        console.log(`${constructor}가 실행됐습니다.`)
    }
}

console.log('----------------------------')

const model2 = new Model('lee', 20);
console.log(model2);

// @Test
// @Frozen
// @LogTest()
// 한번만 실행된다.

function ChangeClass<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        groupName = 'group1';

        constructor(...params: any[]) {
            super(...params);
            console.log('constructor init');
        }
    }
}