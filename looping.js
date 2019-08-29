let _ = {};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
function each(arr) {
    let ar = []
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);

        ar.push({
            name: element,
            color: element.split(' ')[1],

        })
    }
    console.log('ar', ar);

    return ar;
}
console.log(each(suspects));

console.log(each(['a b', 'c d']));

console.log(_[each]);




let arr = [1, 2, 3, 4];
let newArr1 = []
function plus(i) {
    i = i + 2;
    newArr1.push(i)
}
let newArr = [];

arr.forEach(
    plus

    // function (i) {
    //     i = i + 2
    //     newArr.push(i)
    // }
);
console.log(newArr1);

console.log(newArr);






var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = [];

x = function CreateList(param) {
    console.log(param);

    return {
        name: param
    }

}
    ;
console.log(x(suspects));
let test = [];

for (let i = 0; i < suspects.length; i++) {
    test.push(x(suspects[i]))
}

console.log(test);
