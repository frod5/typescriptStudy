/**
 * type predicate
 */
function isNumber(input: any):input is number {
    return typeof input === 'number';
}

console.log(isNumber(10))

function isNumberRetBool(input: any):boolean {
    return typeof input === 'number';
}

let number:any = 5;
if(isNumberRetBool(number)) {
    number; // 여전히 any타입
}

if(isNumber(number)) {
    number;  // number 타입
}

interface Doge{
    name:string;
    age:number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
    return (animal as Doge).age !== undefined
}

const doge: DogeOrCat = Math.random() > 0.5 ? {
    name:'doge',
    age:10,
} : {
    name:'cat',
    breed:'york',
}

if(isDoge(doge)){
    doge
} else {
    doge
}