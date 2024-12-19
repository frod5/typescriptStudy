/**
 * type vs interface
 */

interface IObject {
    x:number;
    y:number;
}

type TObject = {
    x:number;
    y:number;
}

// function
interface IFunction {
    (x:number, y:number) : number;
}

type TFunction = (x:number, y:number) => number;

/**
 * type에서는 할수있지만,
 * interface에서는 할 수 없는 것들
 */

// 1) 기본타입 선언하기
type Name = string;

// 2) union 타입 선언하기
type UnionType = string | number;

// 3) 기본 타입 리스트 또는 튜플 타입 선언하기
type TupleType = [number, string];

/**
 * interface는 할 수있고,
 * type은 못하는거
 */

// interface merging
interface IRactangle {
    height: number;
}

interface IRactangle {
    width: number;
}

let ractangle : IRactangle = {
    height:200,
    width:200,
};

// type은 중복선언자체가 되지 않는다
// type TRactangle = {
//     height: number;
// }

// type TRactangle = {
//     width: number;
// }

/**
 * interface merging
 */
class Review {
    //프로퍼티
    getY = (x:number) => x;

    //메소드
    getX(x:number) {
        return x;
    }
}

interface GetXnY {
    getX: (x:number) => number;
    getY: (y:number) => number;
}

interface GetXnY {
    getX: (x:number) => number;
    // getY: (y:string) => number;
}

interface GetXnY2 {
    getX(x:number):number;
    getY(y:number):number;
}

interface GetXnY2 {
    getX(x:number):number;
    getY(y:string):number;
}

const testMethod: GetXnY2 = {
    getX(x): number {
        return x;
    },
    getY(y): number {
        return 1
    }
}