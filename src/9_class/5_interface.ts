/**
 * interface
 */
interface Animal {
    name: string;
    age: number;
    jump(): string;
}

class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    jump(): string {
        return `${this.name} 가 점프한다.`;
    }
}

const ori: any = new Dog('오리', 5);

const instanceOfAnimal = (object: any): object is Animal => {
    return 'jump' in  object;
}

if (instanceOfAnimal(ori)) {
    ori;
}

/**
 * 다중 구현
 */

interface Pet {
    legsCount: number;
    bark(): void;
}

class Cat implements Animal,Pet {
    name: string;
    age: number;
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    jump(): string {
        return `${this.name} 가 점프한다.`;
    }

    bark() {
        console.log('bark')
    }
}

type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
    name: string;
    age: number;
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    jump(): string {
        return `${this.name} 가 점프한다.`;
    }

    bark() {
        console.log('bark')
    }
}

interface WrongInterface1 {
    name: string;
}

interface WrongInterface2 {
    name: number;
}

// class Person implements WrongInterface1, WrongInterface2 {
//     name: string; // error
//     name: number; // error
// }

class Member {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

interface MemberContructor {
    new (name:string, age: number) : Member;
}

const createMember = (constructor: MemberContructor, name: string, age: number) => {
    return new constructor(name, age)
}

console.log(createMember(Member,'member1',30))