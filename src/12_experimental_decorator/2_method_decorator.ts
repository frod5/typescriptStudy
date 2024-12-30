/**
 * method decorator
 */
class Model {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @TestMethodDecorator
    @Configurable(false)
    @MethodCallLogger('PROD')
    dance() {
        return `${this.name}가 춤을 춥니다.`
    }
}

//target - static method에 데코레이팅을 할 경우 생성자 함수
//       - instance method에 데코레이팅 할 경우 인스턴스의 prototype
//propertyKey - 메소드의 이름
//descript - property descriptor
function TestMethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('LogCall')
    console.log('--- target ---')
    console.log(target)
    console.log('--- propertyKey ---')
    console.log(propertyKey)
    console.log('--- descriptor ---')
    console.log(descriptor)
}

const model1 = new Model('model1')
console.log('--- run dance() ---')
model1.dance()

function Configurable(configurable: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = configurable;
    }
}

console.log(Object.getOwnPropertyDescriptors(Model.prototype))

function MethodCallLogger(env: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            console.log(`[${env}] running function : ${propertyKey}`)
            const result = originalMethod.apply(this, args);
            return result;
        }
    }
}

console.log(model1.dance())