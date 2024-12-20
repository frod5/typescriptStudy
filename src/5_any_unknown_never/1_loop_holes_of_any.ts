/**
 * Loop holes of any
 */

let number: number;
number = 10;
// number.toUpperCase(); //error

// (number as any).toUpperCase(); // runtime error

const multiply = (x:number, y:number) => {
    return x * y;
}

let args1: any = 'str'
let args2: any = true;
// multiply(args1, args2)

// any 타입으로 캐스팅을 하는건 지양하자.

const callbackRunner = (x:number, y:number, callback: any) => {
    return callback(x, y);
}

const callback = (x:number, y:number)=> {
    return x * y;
}

console.log(callbackRunner(5,4,callback));