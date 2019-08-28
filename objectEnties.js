// let arr = ['a','a','b','f','a']

// function maxChar(str) {
// let obj = {};

//     for (item of str){
//         if (!obj[item]){
//             obj[item] = 1;
//         }
//         else obj[item] ++;
//     }
//    let maxChar = Object.entries(obj).sort((a,b)=>a[1]-b[1])

//  return maxChar[maxChar.length-1][0];
// }

// console.log(maxChar(arr));


// function maxValue(arr){
//     let obj = {};

//     for (item of arr){
//         if (!obj[item]){
//             obj[item] = 1;
//         }
//         else obj[item] ++;
//     }
//     let maxKey= '';
//     let maxVal = null;

//     for ([key, value] of Object.entries(obj)){
//         console.log(key);
//         console.log(value);
//        if(maxVal<value){
//            maxVal = value;
//            maxKey = key;
//        }
//     }
//     return maxKey;
// }
// console.log(maxValue(arr));


// (function(){
//     var a = b = 3;
//   })();
  
//   console.log("a defined? " + (typeof a));
//   console.log("b defined? " + (typeof b ));


// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();



for (var i = 0; i < 5; i++) {
    (function(num){
        setTimeout(()=>{
            console.log(num);
    })}
    )(i);
  }

