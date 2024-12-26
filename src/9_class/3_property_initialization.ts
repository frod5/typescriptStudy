/**
 * peroperty initialization
 */

class Person {
    //일반적인 필수값 선언법
    name: string;

    //초기값 제공 선언법
    age: number = 10;

    //optional
    pet?: string;

    //type of undefined
    petAge: number | undefined

    constructor(name: string) {
        this.name = name;
    }
}

class RouteStack {
    stack!: string[];

    constructor() {
        this.initialize()
    }

    initialize() {
        this.stack = [];
    }
}

const routeStack = new RouteStack();
console.log(routeStack);