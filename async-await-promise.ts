const data = {
    name: 'Liza',
    items: [1, 2, 3, 4]
};

const prom = new Promise((resolve, reject) => {
    resolve(data);
});

// prom.then((d:any)=>{
//     console.log(d);
//     return d.items;
// }).then((item)=>{
//     console.log(item);

// })

async function getData() {
    const items = await prom.then((d: any) => {
        console.log(d);
        return d.items;
    })
    console.log(items);

}

getData()