let aa = 'uop';

let bb = 'oyp';

function anagrams(str1, str2) {
    const firstStr = helper(str1);
    const secondStr = helper(str2);

    const a = Object.keys(firstStr);
    const b = Object.keys(secondStr);

    if (a.length !== b.length) {
        return false;
    }

    for (const key of a) {
        if (firstStr[key] !== secondStr[key]) {
            console.log(firstStr.u);
            return false;
        }
    }
    return true;
}

function helper(str) {
    let first = str.replace(/[^\w]/g, '').toLowerCase();
    let obj = {};
    console.log(first);


    for (let char of first) {
        obj[char] = obj[char] + 1 || 1;
    }
    console.log(obj);


    return obj;
}
console.log(anagrams(aa, bb));
