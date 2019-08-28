console.log('hello');



let arr = [
    { start_time: 9, end_time: 13 },
    { start_time: 12, end_time: 15 }
];

function test(arr) {
    let newArr = [];
let obj = {};
    for (let i = 0; i < arr.length; i++) {

        let start = arr[0].start_time;
        let end = arr[0].end_time
        if (start < arr[i].start_time) {

            obj.start_time = start;

        }
        if (end < arr[i].end_time) {
            obj.end_time = arr[i].end_time;
            console.log(obj);
        }
    }

    newArr.push(obj);
    return newArr;
}
test(arr);
console.log(test(arr));
