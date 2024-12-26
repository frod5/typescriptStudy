/**
 * Class as type and value
 */

class Dog {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    bark() {
        return `${this.name}가 짖습니다.`;
    }
}

let ori = new Dog('오리');
console.log(ori.bark());

// ori = '오리'; // error

ori = {
    name: 'bule',
    bark(): string {
        return `${this.name}가 짖습니다.`;
    }
}
console.log(ori.bark());
