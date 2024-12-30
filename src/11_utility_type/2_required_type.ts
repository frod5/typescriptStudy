/**
 * required type
 */
interface Dog {
    name: string;
    age?: number;
    country?: string;
}

const dog: Dog = {
    name:'dog1',
}

const requiredDog: Required<Dog> = { // age, country로 필수!
    name:'dog1',
    age: 10,
    country: 'korea'
}