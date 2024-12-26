/**
 * generic in inheritance
 */
class BaseCache<T> {
    data: T[] = [];
}

class StringCache extends BaseCache<string> {

}

const stringCache = new StringCache();
stringCache.data;

class GenericChild<T, Message> extends BaseCache<T> {
    message?: Message;

    constructor(message: Message) {
        super();
        this.message = message;
    }
}

const genericChild = new GenericChild<string, string>('message');

/**
 * 제너릭의 inheritance
 */

interface BaseGeneric {
    name: string;
}

class Member<T extends BaseGeneric> {
    information: T;

    constructor(information: T) {
        this.information = information;
    }
}

const member1 = new Member({name: 'member1', age: 30})

/**
 * keyof 함께 사용하기
 */
const testObj = {
    a: 1,
    b: 2,
    c: 3,
}

const objectParser = <O, K extends keyof O>(obj: O, key: K) => {
    return obj[key];
}

const val = objectParser(testObj, 'b');

/**
 * 1 === 2 ? true : false
 */

class Member2 {
    type?: string;
}

class FemaleMember extends Member2 {
    type: 'Female Member' = 'Female Member'
}

class MaleMember extends Member2 {
    type: 'Male Member' = 'Male Member'
}

type SpecificMember<T extends Member2> = T extends MaleMember ? MaleMember : FemaleMember;

const member2: SpecificMember<FemaleMember> = new FemaleMember()