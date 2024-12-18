/**
 * type and interface
 */

/**
 * type
 *
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할
 */
type NewStringType = string;
type NewNullType = null;
type NewNumberType = number;
type MaleOrFemale = 'male' | 'female'; // male or female만 들어감

const stringVar: NewStringType = 'test';

type ModelType = {
    name: string;
    year: number;
}

const model1: {
    name: string;
    year: number;
} = {
    name: "kim",
    year: 1234,
}

const model2: ModelType = {
    name: 'kim',
    year: 1451,
}

/**
 * Interface
 */
interface ModelInteface {
    name: string;
    year: number;
}

const model3: ModelInteface = {
    name: 'sung',
    year: 1996,
}

interface ModelIT {
    name: NewStringType;
    year: NewNumberType;
}

const model4: ModelIT = {
    name: 'kim',
    year: 1996,
}

interface ModelOptinal{
    name: string;
    year?: number;
}

const model5: ModelOptinal = {
    name: 'lee',
}
