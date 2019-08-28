

// describe("Example test cases", function() {
//     Test.assertSimilar(flattenAndSort([]), []);
//     Test.assertSimilar(flattenAndSort([[], [1]]), [1]);
//     Test.assertSimilar(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
//     Test.assertSimilar(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
//   });

let a = [3, 7, 4]
let b = [9, 6, 8];
let c = [10, 22, [3]]

function flattenAndSort(...args) {
    const c = [...args];
    let b = c.reduce((acc, val) => acc.concat(val), []);
    b.sort(function (a, b) { return a - b });
    return b;
}
console.log(flattenAndSort(a, b, c));


function addArr(...args) {
    const a = [...args]
    const b = [];
    while (a.length) {
        const next = a.pop();
        if (Array.isArray(next)) {
            a.push(...next);
        }
        else {
            b.push(next);
        }
    }
    return b.sort(function (a, b) { return a - b });

}


console.log(addArr(a, b, c))







//   function test(){

//     let c = addArr(a,b,c);
//     console.log(c);
//     let b= c.reduce((acc,val) => Array.isArray(val) ? acc.concat(test(val)) : acc.concat(val),[]);
//             return b.sort();
//         }

console.log(addArr(a, b, c));
console.log(test());