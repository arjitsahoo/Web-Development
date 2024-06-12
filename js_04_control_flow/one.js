// if
const isUserLoggedIn = true;
const temperature = 41;

// if(temperature === 41){
//     console.log("Less than 50");
// } else {
//     console.log("Temperature is greater than 50");
// }

// if(2 !== "2"){
//     console.log("Executed");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;

// if (score > 100){
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500){
//     console.log("Less than 500");

// } else if (balance < 750){
//     console.log("Less than 750");

// } else if (balance < 900){
//     console.log("Less than 900");

// } else {
//     console.log("Less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromEmail = true;
const loggedInFromGoogle = false;

if (userLoggedIn && debitCard && 2==3){
    console.log("Allowed to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}