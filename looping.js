// let _ = {};

// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
// function each(arr) {
//     let ar = []
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         console.log(element);

//         ar.push({
//             name: element,
//             color: element.split(' ')[1],

//         })
//     }
//     console.log('ar', ar);

//     return ar;
// }
// console.log(each(suspects));

// console.log(each(['a b', 'c d']));

// console.log(_[each]);




// let arr = [1, 2, 3, 4];
// let newArr1 = []
// function plus(i) {
//     i = i + 2;
//     newArr1.push(i)
// }
// let newArr = [];

// arr.forEach(
//     plus

//     // function (i) {
//     //     i = i + 2
//     //     newArr.push(i)
//     // }
// );
// console.log(newArr1);

// console.log(newArr);


// //----------------------------



// var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

// var suspectsList = [];

// x = function CreateList(param) {
//     console.log(param);

//     return {
//         name: param
//     }

// }
//     ;
// console.log(x(suspects));
// let test = [];

// for (let i = 0; i < suspects.length; i++) {
//     test.push(x(suspects[i]))
// }

// console.log(test);

// //----------------------

// let createObj = function (arr) {
//     console.log(arr);

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         console.log(element);

//         b.push({
//             name: element,
//             color: element.split(' ')[1]
//         })

//     };
//     return b;

// }

// let a = ['miss scarlet', 'colonel mustard', 'mr white'];
// let b = [];

// let _ = { each: function () { } }
// _.each(createObj(a));
// console.log(b);
// console.log(_.each(createObj(a)));

const log = (text) => {
    console.log(text);
}

// const notCallbackFn = (text) => {
//     console.log('i not a callback fn', text); 
// }
function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            log(`my name is ${name}`);
        }
    };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = [];

const _ = {
    each: function (arr, callbackFn) {
        const newArr = [];
        for (const item of arr) {
            const newItem = callbackFn(item);
            newArr.push(newItem);
        }
        return newArr;
    }
}

console.log(_.each);


const list2 = _.each(suspects, CreateSuspectObjects);
const list3 = suspects.map(CreateSuspectObjects);

// console.log(list2);
// console.log(list3);


for (const name of suspects) {
    const suspect = CreateSuspectObjects(name);
    suspectsList.push(suspect);
}

console.log(suspectsList);