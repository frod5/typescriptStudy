/**
 * Defining function
 */

function printName(name: string) {
    console.log(name)
}

function returnTwoCouples(person1: string, person2:string) {
    return `${person1}과 ${person2}가 사귀고 있습니다.`;
}

console.log(returnTwoCouples('kim','lee'))
// console.log(returnTwoCouples(0,1)) // type error
// console.log(returnTwoCouples('kim')) // required 2 args

/**
 * Optional parameter
 */
function multiplyReturn1(x: number, y?: number) {
    if(y) {
        return x * y;
    } else {
        return x;
    }
}

console.log(multiplyReturn1(1,2));
console.log(multiplyReturn1(1));

function multiplyOrReturn2(x: number, y:number = 20) {
    return x * y;
}

console.log(multiplyOrReturn2(10,30));
console.log(multiplyOrReturn2(10));

/**
 * 나머지 매개변수
 */

function getInfiniteParamters(...args: string[]) {
    return args.map(x=> {
        return `너무 좋아 ${x}`
    });
}

console.log(getInfiniteParamters('kim','lee'))

/**
 * Return Type
 */
function addTwoNumbers(x:number, y:number) {
    return x * y;
}

addTwoNumbers(10,20)

function randomNumber() {
    return Math.random() > 0.5 ? 10 : 'random';
}

randomNumber();

function subtractTwoNumbers(x:number, y:number): number {
    // return ''; //error string return
    return x - y;
}

const substractTwoNumbersArrow = (x:number, y:number) : number => {
    return x - y;
}

/**
 * 특수 반환 타입
 *
 * void, never
 */

function doNotReturn(): void {
    console.log('dont return!!');
}

doNotReturn()

function neverEndingLoop() : never {
    while(true) {

    }
}

function throwError2(): never {
    throw Error();
}