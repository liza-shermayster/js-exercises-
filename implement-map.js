

const weapons = ['candlestick', 'lead pipe', 'revolver'];

const makeBroken = function (item) {

    return item.split('')[1];
};

const _ = {
    map: (i, callback) => {
    }
}

_.map = function (arr, callback) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const resolve = callback(element);
        newArray.push(resolve);

    }
    return newArray
}

console.log(_.map(weapons, makeBroken));








