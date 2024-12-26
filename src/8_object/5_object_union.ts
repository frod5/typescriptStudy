/**
 * Object union
 */

/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat = Math.random() > 0.5 ? {
    name: 'dog',
    age: 5,
} : {
    name: 'cat',
    breed: 'korean cat'
}

dogOrCat.name //string
dogOrCat.age // number | undefined
dogOrCat.breed // number | undefined

interface Dog {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ? {
    name: 'dog',
    age: 5,
} : {
    name: 'cat',
    breed: 'korean cat'
}

dogOrCat2.name
// dogOrCat2.age //error
// dogOrCat2.breed // error

if('age' in dogOrCat2) {
    dogOrCat2;
} else {
    dogOrCat2;
}