let num = 1234;

function reverseNum(num) {
    let isNegative = num < 0;
    if (isNegative) {
        num = num * -1;
    }
    const result = num.toString().split('').reverse().join('');
    return isNegative ? result * -1 : result;
}

console.log(reverseNum(num));

function reduceNum(num) {
    let isNegative = num < 0;
    if (isNegative) {
        num = num * -1;
    }
    let myNum = num.toString().split('');
    const result= myNum.reduce(function (result, currentValue) {
        result = currentValue + result;
        return result
    }, '')
    return isNegative? result*-1 :result;

}
let num1 = -234566;
console.log(reduceNum(num1));

