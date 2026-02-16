let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);  // object

let myCreatedDate = new Date(2025, 3, 22)
console.log(myCreatedDate.toDateString());
//  Tue Apr 22 2025 (because months are starting from the count zero)

let myTimeStamp = Date.now()

console.log(myTimeStamp); // 1745263299510 (miliseconds till now from 1970)
console.log(myCreatedDate.getTime()); // 1745280000000

console.log(Math.floor(Date.now() / 1000)); // seconds till now from 1970

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // 3 (because jan is 0)
console.log(newDate.getDay()); // 1 (because monday is 1 and sunday is 0)

newDate.toLocaleString('default' , {
    weekday : "long"
})
















