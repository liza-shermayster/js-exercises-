// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

function reverseStr(str) {
    let a = str.split('');
    console.log(a);
    let c = [];
    for (let i = 0; i < a.length; i++) {

        if (a[i].match(/[^\s!-@[-`{-~]/g)) {
            c.push(a[i]);
        }

    }
    console.log(c.reverse().join(''));

    return c;

}

// function reverseStr(str){
// let arrStr = str.split(' ');
// let arrReverse = arrStr.map(function(item){
//     if(!item.match(/[0-9]/gi)){
//         return item;
//     }
// })
// console.log(arrReverse);

// }

// var new_array = arr.map(function callback(currentValue, index, array) { 
//     // Возвращает элемент для new_array 
// }[, thisArg])

reverseStr('as34df!!gh');

const test = 'hello'
vowels(test);

function vowels(str) {

    console.log(str.match(/[aeiou]/gi).length);
    console.log(str.match(/[aeiou]/gi));

    str.match(/[aeiou]/gi).length

}

const { first, second } = {
    first: 0,
    second: 1
}
console.log(first);
