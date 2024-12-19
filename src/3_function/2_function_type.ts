/**
 *  function tyoe
 */

type Mapper = (x:string) => string;

const runner = (callback: Mapper) => {
    return ['kim', 'lee', 'sung'].map(callback);
}

console.log(runner(x => `firstName: ${x}`));

type MultiplyTwoNumbers = (x:number, y: number) => number;

const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y) => {
    return x * y;
}

/**
 * interface로 함수타입 선언하기
 */
interface IMultiplyTwoNumbers {
    (x:number, y:number): number;
}

const multiplyTwoNumbers2: IMultiplyTwoNumbers = (x,y) => {
    return x * y;
}