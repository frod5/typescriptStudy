/**
 * tuple
 *
 * js에서는 없음
 */
let topMembers: string[] = ['member1', 'member2'];

let numberAndStringTuple: [number, string] = [24, 'string']
// numberAndStringTupple = ['string', 20] // error

numberAndStringTuple.push('member3')
console.log(numberAndStringTuple);

let unmodifiableTuple: readonly [number, string] = [24, 'str'];

// unmodifiableTuple.push('member3') //error
console.log(unmodifiableTuple);

/**
 * tuple 유추
 */
let actresses = ['actor1', 'actor2'];
let actressesTuple = ['actor1', 'actor2'] as const;
let actressesTupleConst = ['actor1', 'actor2'] as const;

let stringArray: string[] = [
    ...actressesTuple,
    ...actressesTupleConst,
    ...['1', '2']
]

console.log(stringArray);

/**
 * named tuple
 */
const namedTuple: [name: string, age: number] = ['code', 100];

/**
 * Assigning Tuple to Tuple
 * Tuple은 같은 타입끼리만 할당이 가능하다.
 */
const tuple1: [string, string] = ['str1', 'str2'];
const tuple2: [number, number] = [1,2]

// let tuple3: [boolean, boolean] = tuple1; //error
// let tuple4: [number, number, number] = tuple2; //error
let tuple5: [number, number] = tuple2;

/**
 * tuple과 array의 관계
 */
let stringTuple: [string, string] = ['str1', 'str2'];
let stringArr: string[] = stringTuple; //tuple이 좀더 상세한 타입이기때문에 할당 가능
// let stringTuple2: [string, string] = stringArr; // error

/**
 * multi dimension tuple
 */

const tuple2D: [string,number][] = [
    ['str1',1],
    ['str2',2],
    ['str3',3],
]
