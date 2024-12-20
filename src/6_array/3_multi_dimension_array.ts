/**
 * multi dimension array
 */
const number2DArr: number[][] = [
    [1, 2, 3], [4, 5, 6]
]

const str2DArr = [['1', '2', '3'], ['1', '2', '3']]

const strAndNum2DArr: (number | string)[][] = [
    [1,2,3,'4'],[5,'6']
]

let strOrNum2DArr: string[][] | number[][] = [
    [1,2,3],[4,5,6]
]

strOrNum2DArr = [['1','2','3']]

for (let arr of number2DArr) {
    for (let item of arr) {

    }
}


