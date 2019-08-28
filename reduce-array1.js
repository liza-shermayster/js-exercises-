// // Test.assertSimilar(filter_list([1,2,'a','b']),[1,2])
// // Test.assertSimilar(filter_list([1,'a','b',0,15]),[1,0,15])
// // Test.assertSimilar(filter_list([1,2,'aasf','1','123',123]),[1,2,123])
// function filter_list(arr) {
//     // Return a new array with the strings filtered out

// let newArr = arr.filter(item => typeof item === "number");
// console.log(newArr);
// return newArr;

//   }



//   let test = [1,2,'aasf','1','123',123];
//   filter_list(test);


function count(array) {



    return array.reduce(function (acc, item) {
        console.log(item);
        console.log(acc);
        if (item !== acc) {
            acc[item] = 1
        }

        acc[item] += 1

        console.log(acc);


        return acc;

    }, {})

    // let obj = {};
    // array.forEach(element => {
    //     (!obj[element]) ? obj[element] = 1 : obj[element] += 1
    // });
    // return obj;
}
//   Test.assertSimilar(count(['a', 'a', 'b', 'b', 'b']), { 'a': 2, 'b': 3 })
count(['a', 'a', 'b', 'b', 'b']);


