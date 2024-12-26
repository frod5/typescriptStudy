/**
 * generic in implementation
 */
interface Singer<T, V> {
    name: T;
    sing(year: V):void;
}

class Member implements Singer<string, number> {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sing(year: number) {
        console.log(`[${year}] ${this.name}이 노래를 부릅니다.`)
    }
}

const member1 = new Member('kim')
member1.sing(2020)

class Member2<T,V> implements Singer<T, V> {
    name: T;

    constructor(name: T) {
        this.name = name;
    }

    sing(year: V) {
        console.log(`[${year}] ${this.name}이 노래를 부릅니다.`)
    }
}

const member2 = new Member2<string, number>('kim')
member2.sing(2020)