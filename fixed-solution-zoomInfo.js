const db = {

    1: {

        name: "nir",

        level: 3,

        parent_id: 2

    },

    2: {

        name: "tal",

        level: 2,

        parent_id: 3

    },

    3: {

        name: "avi",

        level: 1,

        parent_id: 15

    },

    4: {

        name: "gili",

        level: 4,

        parent_id: 7

    },

    5: {

        name: "david",

        level: 2,

        parent_id: 3

    },

    6: {

        name: "yoni",

        level: 5,

        parent_id: 1

    },

    7: {

        name: "yosi",

        level: 3,

        parent_id: 5

    }

};

function getItemById(id) {

    let item = db[id];

    if (item) {
        console.log(item);

        return Promise.resolve(item);
    }
    return Promise.reject({ message: `ERROR :: couldn't find id '${id}' in the DB.` })
}





function solution(num, arr = [], isParent = false) {
    getItemById(num).then(function (data) {
        if (isParent) {
            arr.push(data);
        }
        if (data.level === 1) {
            const result = arr
                .sort((a, b) => a.level - b.level)
                .reduce((acc, item, index, array) => {
                    const isLastItem = index !== array.length - 1
                    return acc + item.name + (isLastItem ? " => " : "");
                }, '')
            console.log(result);
        }
        else {
            solution(data.parent_id, arr, true);
        }
    }).catch((e) => {
        console.error(e);
    })
}
let input_id = 4;
solution(input_id);


