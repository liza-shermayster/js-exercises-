const { first, second } = {
    first: 0,
    second: 'hello'
}
console.log(typeof first);
console.log(second);


let test = {
    name: 'Rusty',
    room: 'kitchen',
    weapon: 'candlestick'
};

const { name, room, weapon } = test;
console.log(name);
console.log(room);
console.log(weapon);

var a = 1, b = 2;
[b, a] = [a, b];
console.log(a, b);

var [a, ...b] = [1, 2, 3];
console.log(a, b);



var suspects = [
    {
        name: 'rusty',
        color: 'orange'
    },
    {
        name: 'miss scarlet',
        color: 'red'
    }
]


const game = {
    'suspects': [
        {
            name: 'rusty',
            color: 'orange'
        },
        {
            name: 'miss scarlet',
            color: 'red'
        }
    ]
}

function test({ suspects }) {
    console.log(suspects);


    // console.log(Object.keys(game));
    // console.log(Object.values(game));
    // console.log(Object.entries(game.suspects));

    // for (const key in obj) {
    // console.log(obj[key][0]);
    // console.log(obj[key]);

    // }
    return;
}
test(game);


var suspects = [
    {
        name: 'rusty',
        color: 'orange'
    },
    {
        name: 'miss scarlet',
        color: 'red'
    }
];

console.log(suspects[0].color);

const [{ color: firstColor }, second] = suspects
console.log(firstColor);
console.log(second);

// const arr = ['test1', 'test2', 'test3'];
// const [test1, ...rest] = arr;
// console.log(rest);

const objTest1 = { name: 'test1', lastName: 'hi' };
let { lastName: name, ...rest } = objTest1;
name = 'bye';
console.log(name);
console.log(rest);
console.log(objTest1);








