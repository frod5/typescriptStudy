/**
 * Types
 */
let helloText: string = 'hello';
// helloText = true; // error

/**
 * JS에 존재하는 타입
 * 7개의 타입
 */
const stringVar: string = 'string';
const numberVar: number = 2;
const bigIntVar: bigint = BigInt(999999999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력할 수 있는 타입
let anyVar: any;
anyVar = 100;
anyVar = 'kim';
anyVar = true;

let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

// unknown - 알 수 없는 타입
let unknownType: unknown;
unknownType = 100;
unknownType = 'kim';
unknownType = true;

// let testNumber2: number = unknownType; // error
// let testString2: string = unknownType; // error
// let testBoolean2: boolean = unknownType; // error
let unknowType2: unknown = unknownType;
let anyType2: any = unknowType2;

// never - 어떠한 값도 저장되거나 반환되지 않을 때 사용하는 타입
// let neverType: never = null;

/**
 * 리스트 타입
 */
const stringGroup: string[] = ['1','2'];
const booleanGroup: boolean[] = [true, false];