// arrays

const myArr = [0, 1, 2, 3, 4, 5, "devender"]
console.log(myArr[6]);
// devender

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[1]);

// array methods

myArr.push(6)
console.log(myArr);
// [ 0, 1, 2, 3, 4, 5, 'devender', 6 ]

myArr.pop()
console.log(myArr);
// [ 0, 1, 2, 3, 4, 5, 'devender' ]

myArr.unshift(10)
console.log(myArr);
// [ 10, 0, 1, 2, 3, 4, 5, 'devender' ] 

myArr.shift()
console.log(myArr);
// [ 0, 1, 2, 3, 4, 5, 'devender' ]

console.log(myArr.includes(10));
// false

console.log(myArr.indexOf(5));
// 5
// if data is not present in the array then it gives -1 as the output

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
// all data is copied from the myArr and converted it into the string format separated by commas
// whereas myArr remains the same
// myArr => [ 0, 1, 2, 3, 4, 5, 'devender' ]
// newArr => 0,1,2,3,4,5,devender

console.log("A ", myArr);
// [ 0, 1, 2, 3, 4, 5, 'devender' ]

const myna1 = myArr.slice(1, 3)
console.log(myna1);
// [ 1, 2 ]

console.log("B ", myArr);
// B  [ 0, 1, 2, 3, 4, 5, 'devender' ]

const myna2 = myArr.splice(1, 3)
console.log(myna2);
// [ 1, 2, 3 ] 

console.log("C ", myArr);
// C  [ 0, 4, 5, 'devender' ]
// in splice our main array got manipulated in the process which is selected data is just taken out from the main array
// another difference is that it includes the range whereas in slice range is ignored






