function sayMyName() {
    console.log("A");
    console.log("R");
    console.log("J");
    console.log("I");
    console.log("T");
}

// sayMyName();

// function addTwoNumbers (number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function addTwoNumbers (number1, number2){  
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}
const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);


function loginUserMessage(username ) {
    if(username === undefined){                         //if(!username){ }
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Arjit"));
// console.log(loginUserMessage());







function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000, 5000));

const user = {
    username: "Arjit",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
// handleObject({
//     username: "arjitsahoo",
//     price: 399
// });

const myNewArray = [200, 100, 400, 600];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));