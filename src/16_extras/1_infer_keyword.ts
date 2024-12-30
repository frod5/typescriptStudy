/**
 * infer keyword
 * 추론하다
 *
 * infer 키워드는 conditional type에서만 사용 가능
 * extends 키워드를 사용했을 때 extend 한 대상에서 타입을 한번 더 추론하는 역할
 */

// 1) 가장 많이 사용하는 예제
// Flattening -> Array를 벗길 때
// string[] -> string
// string[][] -> string[]

type Flatten<Type> = Type extends Array<infer Element> ? Element : Type;
type Flatten2<Type> = Type extends (infer Element)[] ? Element : Type;
type StringArray = Flatten<string[]>;
type NumberArray = Flatten<number[]>;
type TwoDArray = Flatten<number[][]>;

// 2) Return type 추론
type InferReturnType<Type> = Type extends (...args: any) => infer ReturnType ? ReturnType : Type;
type NumberArray2 = InferReturnType<number[]>;
type StringFunc = InferReturnType<() => string>;
type NumberFunc = InferReturnType<() => number>;


