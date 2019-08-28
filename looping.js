function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split('')[1],
        speak() {
            console.log('my name is ', name);

        }
    };
};

var suspect = ['miss scarlet', 'colonel mustard', 'mr white'];
var suspectList = [];

var _ = {};

_.each = (suspect, function (name) {
    let suspectObj = CreateSuspectObjects(name);
    suspectList.push(suspsectObj);
})

_.each(['observatory', 'ballroom', 'library'],
    function (value, index, list) {
        console.log(value);
        console.log(index);
    })





['observatory', 'ballroom', 'library'].forEach(function (value, index, list) {
    console.log(value);
    console.log(index);
    console.log(list);
});



let arr = [1, 2, 3, 4];
let newArr1 = []
function plus(i) {
    i = i + 2;
    newArr1.push(i)
}
let newArr = [];

arr.forEach(
    plus

    // function (i) {
    //     i = i + 2
    //     newArr.push(i)
    // }
);
console.log(newArr1);

console.log(newArr);
