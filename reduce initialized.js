const _ = {
    reduce: () => { }
}

_.reduce = function (list, cb, initial) {
    let sum = initial;
    for (let index = 0; index < list.length; index++) {

        if (index === 0 && sum === undefined) {
            sum = list[0]
        } else {
            sum = cb(list[index], sum);
            console.log(sum);
        }
    }
    return sum;
}

function callBackFn(el, acc) {
    return el + acc;
}

console.log(_.reduce([1, 2, 3], callBackFn, 0))




const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce((accumulator, currentValue) => {

    return accumulator + currentValue
}));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce((accumulator, currentValue) => accumulator + currentValue, 5));
// expected output: 15



const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: true },
            { 'dining room': true },
            { 'billiard room': false },
            { library: true }
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            { kitchen: true },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': false },
            { 'billiard room': true },
            { library: false }
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            { kitchen: false },
            { ballroom: false },
            { conservatory: true },
            { 'dining room': false },
            { 'billiard room': true },
            { library: false }
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            { kitchen: true },
            { ballroom: false },
            { conservatory: false },
            { 'dining room': true },
            { 'billiard room': false },
            { library: false }
        ]
    }
];

const notInRoom = (rooms, memo) => {
    console.log(rooms);


    console.log(memo);


    return memo.push(rooms);
};

function reDuce(arr, cb) {
    let memo = [];
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        memo = cb(el, memo)
    }
    return memo;
};
console.log(reDuce(newDevelopment, notInRoom, []));
/*
*create array from rooms
create function map+filter and new array (with array inside) - just for false value
with reduce check if item from new array exist in another array item

*/