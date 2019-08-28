const aa = "7862";

function test(a) {
    let b = a.split("");
    console.log(b)
    let c = b.sort((a, b) => a - b)
    return c;
}
console.log(test(aa))

const bb = [1, 2, 3, 4];
function test2(a) {
    let b = [];
    a.forEach(element => {
        b.push(element * 2)
    });
    return b;
}
const testMap = bb.map((el) => el * 2);
console.log(testMap)
console.log(test2(bb))


const cc = [1, 2, 3, 4, 5]
function test3(a) {
    let b = [];
    a.forEach(el => {
        console.log(!(el % 2));
        if ((el % 2)) {
            el = el * 2;
        }
        b.push(el);
    })
    return b;
}
console.log(test3(cc))

const dd = cc.map(el => el % 2 ? el * 2 : el)
console.log(dd)