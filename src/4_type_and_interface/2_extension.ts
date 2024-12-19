/**
 * extension
 */

interface IName {
    name: string;
}

interface IModel extends IName {
    age: number;
}

const model: IModel = {
    name: 'kim',
    age: 5,
}

type TName = {
    name: string;
}

type TModel = TName & { age: number };

const model2: IModel = {
    name: 'kim',
    age: 5,
}

// type과 interface 섞어서 상속 가능.
//interface는 extends 키워드
interface IModel2 extends TName {
    age: number;
}

const model3: IModel2 = {
    name: 'kim',
    age: 5,
}

//type은 &로
type TModel2 = IName & { age: number };

const model4: TModel2 = {
    name: 'kim',
    age: 5,
}

/**
 * extending multiple
 */
type DogName = {
    name: string;
}

type DogAge = {
    age: number;
}

type DogBreed = {
    breed: string;
}

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
    name: 'kim',
    age: 1,
    breed: 'breed',
}

interface CatName {
    name: string;
}

interface CatAge {
    age: number;
}

interface CatBreed {
    breed: string;
}

interface Cat extends CatName, CatAge, CatBreed {
}

const cat: Cat = {
    name: 'kim',
    age: 5,
    breed: 'breed',
}

/**
 * Overriding
 */
type THeight = {
    height: number;
}

type TRactangle = THeight & {
    height: string;
    width: number;
}

// const ractangle: TRactangle = {
//     height: never
//     width: 10,
// }

type TWidth = {
    width: number | string;
};

type TRactangle2 = TWidth & {
    width: number;
    height: number
}

const ractangle2: TRactangle2 = {
    width: 10,
    height: 10,
}

interface IHeight {
    height: number;
}

// interface IRatangle extends IHeight {
//     height: string;
//     widht: number;
// }

interface IWidth {
    width: string | number;
}

interface IRactangle extends IWidth {
    width: number;
    height: number;
}