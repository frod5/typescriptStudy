/**
 * reflection and decorator
 */
import 'reflect-metadata'

const restrictParamValueKey = Symbol('restrictParamValue');

interface RestrictionInfo<T> {
    index: number;
    restrictedValues: T[];
}

function RestricParamValue<T>(restrictedValues: T[]) {
    return (target: any, propertyKey: string, index: number) => {
        const prevMeta = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];
        const info: RestrictionInfo<T> = {
            index,
            restrictedValues,
        }

        Reflect.defineMetadata(restrictParamValueKey, [...prevMeta, info], target, propertyKey);
        console.log(Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey));
    }
}

function ValidateMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metas: RestrictionInfo<any>[] = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];
    const original = descriptor.value;
    descriptor.value = function (...args: any) {
        const invalids = metas.filter(
            (x) => !x.restrictedValues.includes(args[x.index]));

        if (invalids.length > 0) {
            throw Error(`잘못된 값입니다. ${invalids.map(x => args[x.index]).join(', ')}`);
        }

        return original.apply(this, args);
    }
}

class Model {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // style에는 '신나게' | '열정적으로'
    @ValidateMethod
    sing(@RestricParamValue(['신나게', '열정적으로']) style: string) {
        return `${this.name}이 ${style} 노래를 부릅니다.`;
    }
}

const model = new Model('kim', 34)
console.log(model.sing('신나게'));
console.log(model.sing('열정적으로'));
console.log(model.sing('이상하게'));