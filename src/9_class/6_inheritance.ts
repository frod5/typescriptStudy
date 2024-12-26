/**
 * inheritance
 */
class Parent {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    dance() {
        console.log(`parent: ${this.name}이 춤을 춥니다`);
    }
}

class Child extends Parent {
    age: number;

    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }

    sing() {
        console.log(`chlid: ${this.name} 이 노래합니다.`);
    }
}

const parent = new Parent('parent');
const child = new Child('child', 30);

parent.dance();
child.dance();
child.sing();

let person: Parent;
person = parent;
person = child;

let person2: Child;
person2 = child;
// person2 = parent; // error

/**
 * optional 프로퍼티를 유의하자
 */
class Parent2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Child2 extends Parent2 {
    age?: number;

    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }
}

const parent3 = new Parent2('parent3');
const child3 = new Child2('child3', 20);

let child4: Child2;
child4 = child3;
child4 = parent3 // error 안뜸.. 옵셔널 조심