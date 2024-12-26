/**
 * Optional and undifined property
 */

interface Dog {
    name: string;
    age: number;
    breed?: string;
}

const tomung: Dog = {
    name:'토뭉',
    age: 4,
    breed: 'husky',
}

const ori: Dog = {
    name:'오리',
    age: 10,
}

interface Cat {
    name: string;
    age: number;
    breed: string | undefined;
}

const navi: Cat = {
    name:'navi',
    age: 3,
    breed : undefined, // string | undefined 인 경우에도 선언을 해주어야 오류나지 않는다. ?(옵셔널)은 선언하지 않아도 괜찮다.
}