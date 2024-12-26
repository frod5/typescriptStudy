/**
 * abstact class
 */

abstract class ModelWithId {
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

// const modelWithId = new ModelWithId(1); // 생성 불가

class Product extends ModelWithId {

}

const product = new Product(1)

abstract class ModelWithAbstactMethod {
    abstract shout(name: string): string;
}

class Person extends ModelWithAbstactMethod {
    shout(name: string): string {
        return `${name} shout!!`
    }
}