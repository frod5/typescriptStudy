/**
 * Intersection
 *
 * And
 */

interface Human {
    name: string,
    age: number,
}

interface Contacts {
    phone: string,
    address: string,
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
    name: 'kim',
    age: 10,
    phone: '1234',
    address: '1234',
}

type NumberAndString = number & string; // 기본타입이 둘다 만족할 수없는 상황이기 때문에 never로 변경된다.
// let numberAndString: NumberAndString = 'ss'; never 타입은 아무것도 할당 못한다. error
