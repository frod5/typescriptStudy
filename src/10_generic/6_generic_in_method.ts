/**
 * generic in method
 */
class Member<T> {
    id: T;
    name: string;

    constructor(id: T, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello<Time>(logTime: Time) {
        return `[${logTime}] 안녕하세요 제 이름은 ${this.name}이고, ID는 ${this.id}입니다.`
    }
}

const member1 = new Member<string>('member1', 'kim')
console.log(member1.sayHello('2024'));

class Message<T> {
    sayHello<Time>(logTime: Time, message: T) {
        console.log(`logTime: ${typeof logTime} / message: ${typeof message}`);
    }
}

const message = new Message<string>();
message.sayHello(2020,'string')

class DuplicatedGenericName<T> {
    sayHello<T> (logtime: T) {
        console.log(`logTime: ${typeof logtime}`);
    }
}

const duplicate = new DuplicatedGenericName<string>()
duplicate.sayHello<number>(1234) // method의 제네릭 따라감