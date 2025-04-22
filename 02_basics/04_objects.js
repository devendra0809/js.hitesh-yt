const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);
// { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email : "some@google.com",
    fullname : {
        userfullname : {
            firstname : "Devender",
            lastname : "Choudhary"
        }
    },
    isLoggedIn : true
}

console.log(regularUser.fullname);
// { userfullname: { firstname: 'Devender', lastname: 'Choudhary' } }

console.log(regularUser.fullname.userfullname);
// { firstname: 'Devender', lastname: 'Choudhary' }

console.log(regularUser.fullname.userfullname.firstname);
// Devender

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

//const obj3 = Object.assign({}, obj1, obj2)
// adding an empty {} obejct is a good practice
// this means that all objects combines in the empty object
// target obj => {}

//console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}
console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(tinderUser);

console.log(Object.keys(tinderUser));
// [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));
// [ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser));
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// true

// OBJECT DE-STRUCTURING
const course = {
    coursename : "JS in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

const {courseInstructor} = course
console.log(courseInstructor);
// Hitesh

const {courseInstructor : instructor} = course
console.log(instructor);
// Hitesh










