/**
 * override
 */
class Parent {
    shout(name: string) {
        return `${name}아 안녕`
    }
}

class Child extends Parent {
    // 1) 부모 메소드와 반환타입 일치
    // 2) 부모 메소드에서 필수인 파라미터 들이 존재해야한다.
    // 3) 부모 메소드에서 optional인 파라미터가 자식에서 필수 파라미터가 되면 안된다.
    shout(name: string, me?:string) {
        if(me) {
            return super.shout(name) + ` 내 이름은${me}야`
        }
        return super.shout(name)
    }
}

const child = new Child();
console.log(child.shout('babo','hoho'));

/**
 * 속성 오버라이드
 */

class PropertyParent {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// class PropertyChild extends PropertyParent {
//    name: number;
//
//     constructor(name: string) {
//         super(name);
//         this.name = name;
//     }
// }

class PropertyParent2 {
    name: string | number;

    constructor(name: string | number) {
        this.name = name;
    }
}

class PropertyChild2 extends PropertyParent2 {
    name: string;

    constructor(name: string) {
        super(name);
        this.name = name;
    }
}

const child2 = new PropertyChild2('child2');
child2.name