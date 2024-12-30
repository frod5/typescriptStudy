/**
 * import
 */
import {Model, modelKim, number, ICat} from './2_export_1' //명칭 자유롭게 사용하지 못함.

const model = new Model('lee', 30)
console.log(model)
console.log(modelKim)
console.log(number)

const cat: ICat = {
    name: 'cat1',
    age: 10,
}

console.log(cat)