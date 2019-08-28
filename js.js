
//  let arr = [1,10,1000,1002];
//  console.log(arr);

//  console.log(arr.map(w =>w.toString().length));



//  let words = [ "Hello", "World", "I", "am", "here" ];
//  console.log(words.map(w => w.length));



//  function findLongest(array){
//     return array.reduce(function(result, current,i) {
//         if (current.toString().length > result.toString().length){
//             return current;
//         }
//         return result;
//     },0)
//  }
//  console.log(findLongest(arr));

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = "Lydia";
//     const age = 21;
//   }

//   sayHi();

// for (var i = 0; i < 3; i++) {
//     (function runFn(i) {
//         setTimeout(() => console.log(i), 0);
//     })(i)
// }

//   for ( i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }
// this.radius = 10;
// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () =>  2 * Math.PI * this.radius
//   };

//   console.log(shape.diameter());
// const keys = ["size", "greet"];
// const bird = {
//     "size": "small",
//     "greet": "Hello"
// };
// const k = "size";
// console.log(bird["size"]);

// for (const k of keys) {
//     console.log(bird[k]);
// }



// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// //   const member = new Person("Lydia", "Hallie");
// //   Person.prototype.getFullName = function () {
// //     return `${this.firstName} ${this.lastName}`;
// //   }

// //   console.log(member.getFullName());
// // class Person {
// //     constructor(firstName, lastName) {
// //         this.firstName = firstName;
// //         this.lastName = lastName;
// //     }
// // }
// // Person.prototype.getFullName = function() {
// //     return `${this.firstName} ${this.lastName}`;
// // }



// // const member = new Person("Lydia", "Hallie");
// // console.log(member.getFullName());

// console.log('a' + 'b');

// const getLogFn = (a) => () => console.log('func',a);

// const bFn = getLogFn(4);
// bFn();


// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
// }

// String.prototype.giveLydiaPizza = () => {
//     return "Just give Lydia pizza already!";
// };

// let name = " ";

// console.log(name.giveLydiaPizza());

// const arr = [{ val: 10 }, { val: 11 }];

// // const s = arr.find(i => i === 89);

// const obj = {
//     10: 'ten',
//     12: 12
// }
// obj[10]


const arr = [
    // { startTime: 0,  endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    // { startTime: 10, endTime: 12 },
    // { startTime: 9,  endTime: 10 },
]


function mergeRanges(a) {

    return a.reduce((acc, item) => {
        if (!acc.startTime || acc.startTime > item.startTime) {
            acc.startTime = item.startTime
        }
        if (!acc.endTime || acc.endTime < item.endTime) {
            acc.endTime = item.endTime
        }
        return acc;

    }, {});
}

console.log(mergeRanges(arr)); // [{ startTime: 3, endTime: 8 }]
