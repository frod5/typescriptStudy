/**
 * import
 * ./ (현재폴더)
 * ../ (상위폴더)
 */

import Model from './1_export_default_1';

// const model = new Model('kim', 40)
// console.log(model)

// console.log(Model) // 12

// const cat: Model = {
//     name:'navi',
//     breed:'korean'
// }

const model2 = new Model.Model('kim', 20)
console.log(model2)

const number = Model.number
console.log(number)