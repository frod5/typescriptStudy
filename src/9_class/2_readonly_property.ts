/**
 * readonly property
 */
class Member {
    readonly name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const member = new Member('member1',30)
member.age = 40;
// member.name = 'han'; // error (readonly)

