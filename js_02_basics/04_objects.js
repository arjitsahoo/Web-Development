// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false ;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Arjit",
            middlename: "Kumar",
            lastname: "Sahoo"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

// const obj = {obj1, obj2};
// const obj = Object.assign({}, obj1, obj2, obj3);

const obj = {...obj1, ...obj2, ...obj3};
// console.log(obj);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    }
];

// console.log(users[0].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//                 Object de-structure                 

const course = {
    courseName: "JS in hindi",
    coursePrice: 999,
    courseInstructor: "Hitesh"
};

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course;

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "course": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]