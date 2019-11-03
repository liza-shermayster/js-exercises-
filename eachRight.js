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

let _ = {
    eachRight: function () { }
}

const arr = [1, 2, 3, 4];
// _.eachRight(arr,function(arr){
// for (let i = arr.length; i > arr.length; i--) {
//     const el = arr[i];

//     fn(el);
// }
// });

function fn2(arr) {
    console.log(arr);
    let newArr = [];
    for (let i = arr.length - 1; i > 0; i--) {
        console.log(arr.length);
        console.log(i);
        const el = arr[i];
        newArr.push(el);
    }
    return newArr;
}
fn2(arr);

console.log(fn2(newDevelopment));


