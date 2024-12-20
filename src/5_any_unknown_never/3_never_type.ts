/**
 * never
 */

// 1) 함수에서 에러를 던질때
function throwError(): never {
    throw Error()
}

// 2) infinite loop
function infiniteLoop(): never {
    while (true) {}
}

// 3) 존재할 수 없는 intersection
type StringAndNumber = string & number;

// let neverType: never = 10 //error
// let neverType: never = undefined //error