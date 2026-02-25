const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for in loop

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

// ******** objects are iterable in for in loop **********

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// in this it prints only keys that is from 0 to n-1 in the arrays

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

// ******* not iterable by for in loop here ************