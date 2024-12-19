/**
 * statement and experssion
 */

//statement
function addTwoNumbers(x:number, y:number) {
    return x + y;
}

//expression
const addTwoNumbersExp = (x:number, y:number) => {
    return x + y;
}

/**
 * statement
 */

function add(x:number, y:number): number {
    return x + y;
}

function sub(x:number, y:number): number {
    return x - y;
}

function mul(x:number, y:number): number {
    return x * y;
}

function div(x:number, y:number): number {
    return x / y;
}

/**
 * expression
 */
type CalculationType = (x:number, y:number) => number

const add2: CalculationType = (x:number, y:number) => {
    return  x + y;
}

const sub2: CalculationType = (x:number, y:number) => {
    return  x - y;
}

const mul2: CalculationType = (x:number, y:number) => {
    return  x * y;
}

const div2: CalculationType = (x:number, y:number) => {
    return  x / y;
}