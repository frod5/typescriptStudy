/**
 * Problems with array in JS
 */
const numbers = [1, 2, 3, '4', 5];

let strings: string[] = ['1', '2', '3'];
// strings.push(1) //error

let stringsOrNumbersArray: (string | number)[] = [1, 2, 3, '4', 5];

let stringArrOrNumberArray: string[] | number[] = [1,2,3]
stringArrOrNumberArray = ['1', '2', '3'];

let stringOrNumberArr: string | number[] = [1,2,3]
stringOrNumberArr = 'str'

let boolsArr = [true, false]
// boolsArr.push(1) //error

const onlyStrings = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3];

for (let i = 0; i < onlyStrings.length; i++) {
    let item = onlyStrings[i];
}

for (let item of onlyNumbers) {

}

let number3 = onlyNumbers[0];

let number4 = onlyNumbers[9999]; //ts는 array의 인덱스까지 보지 않는다.