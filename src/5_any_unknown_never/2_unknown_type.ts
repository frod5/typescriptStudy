/**
 * Unknown Type
 */

let anyValue: any;
anyValue = 'str';
anyValue = 1;
anyValue = true;
anyValue = [];
anyValue = {};


let unknownType: unknown;

//unknown도 어떤 타입이어도 다 넣을 수 있음.
unknownType = 'str';
unknownType = 1;
unknownType = true;
unknownType = [];
unknownType = {};

// let anyType: any = anyValue;
// let unknowType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrType: string[] = anyType;
// let objType: {} = anyType;
// let nullType: null = anyType;
// let undefinedType: undefined = anyType;


//unknown은 any, unknown에만 가능
// let anyType: any = unknownType;
// let unknowType: unknown = unknownType;
// let booleanType: boolean = unknownType; // error
// let arrType: string[] = unknownType; // error
// let objType: {} = unknownType; // error
// let nullType: null = unknownType; // error
// let undefinedType: undefined = unknownType; // error

anyValue.toUpperCase(); // runtime error
anyValue.name; // undefined
new anyValue(); //runtime error

// unknownType.toUpperCase(); // error
// unknownType.name; // error
// new unknownType(); // error

// type predicate
function isString(target:unknown) : target is string {
    return typeof target === 'string';
}

let testVal: unknown;

if (isString(testVal)) {
    testVal;
}

/**
 * Union type
 */
type uOrString = string | unknown; // unknow
type uOrBoolean = boolean | unknown; // unknown
type uOrNumber = number | unknown; // unknown
type uOrAny = any | unknown; // any

/**
 * Intersection type
 */
type uAndString = string & unknown; // string
type uAndBoolean = boolean & unknown; // boolean
type uAndNumber = number & unknown; // number
type uAndAny = any & unknown; // any

/**
 * Operator
 */
let number1: unknown = 10;
let number2: unknown = 20;
// number1 + number2 //error
// number1 - number2 //error

number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;