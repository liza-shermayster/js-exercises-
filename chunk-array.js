let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function chunk(array, size) {
    let result = [];
    let smallArr = [];
    for (let i  of array) {
        if (smallArr.length < size) {
            smallArr.push(i);
        }
        else {
            result.push(smallArr);
            smallArr = []
        }
    }
    result.push(smallArr);
    return result;
}

console.log(chunk(arr, 3));


function chunk1(array, size) {
    const chunked = [];

    for (let element of array){

        const last = chunked[chunked.length - 1];
        console.log(last);
        
        if (!last || last.length === size) {
            
            chunked.push([element]);
        }
        else {
            last.push(element);
        }

    }
    return chunked;

}
console.log(chunk1(arr, 4));



let arr2 = [1, 2, 3, 4, 5, 6, 7];
let arr3 = ['a', 'b', 'c', 'd', 'e', 'f'];

function chunk1(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        console.log(index);
        console.log(array.length);
        
        
        chunked.push(array.slice(index, index + size));
        index += size;
        console.log(index);
        
    }
    return chunked;
}
console.log(chunk1(arr2, 3));
