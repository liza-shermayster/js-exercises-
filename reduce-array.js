let arr = [{ name: 'a' }, { name: 'b' }];
const result = arr.reduce((acc, item, index, a) => {

    console.log(index);
    // if (index !== a.length-1){
    //     console.log(a.length);
    //     console.log(index);
    //    item.name =  item.name+'=>';
     
    // }
    return acc + item.name + (index !== a.length-1? '=>': '' ); 
  
}, '');
console.log(result);
