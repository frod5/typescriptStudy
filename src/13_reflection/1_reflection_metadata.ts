/**
 * reflection metadata
 */
import 'reflect-metadata';

const model = {
    name: 'model1',
    age: 30,
    nationality: 'korea',
}

console.log(model);

/**
 * 파라미터의 정의
 *
 * 1) 메타데이터의 키
 * 2) 메타데이터의 키에 저장할 값
 * 3) 메타데이터를 저장할 객체
 * 4) 메타데이터를 저장할 객체의 프로퍼티 (필수x)
 *
 * 메타데이터가 무엇인가? - 데이터에 대한 데이터
 */
Reflect.defineMetadata('test-meta', 123, model)
console.log(model)

console.log(Reflect.getMetadata('test-meta', model))

console.log('---------------------------')

Reflect.defineMetadata('test-meta', 456, model)
console.log(Reflect.getMetadata('test-meta', model))

Reflect.defineMetadata('meta2', 789, model)
console.log(Reflect.getMetadata('meta2', model))

console.log('---------------------------')

Reflect.defineMetadata('meta2', {name: 'kim'}, model)
console.log(Reflect.getMetadata('meta2', model))

/**
 * 프로퍼티에 저장하기
 */
Reflect.defineMetadata('object-meta', 999, model, 'name')
console.log(Reflect.getMetadata('object-meta', model, 'name'))

/**
 * 삭제
 */

Reflect.deleteMetadata('object-meta', model, 'name')
console.log(Reflect.getMetadata('object-meta', model, 'name'))
console.log(Reflect.hasMetadata('object-meta', model, 'name'));

console.log('---------------------------')

console.log(Reflect.getMetadataKeys(model))
console.log(Reflect.getMetadataKeys(model, 'name'))

Reflect.defineMetadata('prototype-data', 'prototype data', Object.getPrototypeOf(model))

console.log(Reflect.getMetadataKeys(model))
console.log(Reflect.getOwnMetadataKeys(model))