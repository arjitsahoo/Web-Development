const user  = {
    username: "Arjit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this); ---------------------------------------> Gives context of current object
    }
}

// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "Arjit"
//     console.log(this.username);
// }
// chai();

// const chai = function() {
//     let username = "Arjit"
//     console.log(this.username);
// }
// chai();

// ------------------------------- Arrow Function ----------------------------

// const chai = () => {
//     let username = "Arjit"
//     console.log(this.username);
// }
// chai();


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 );

const addTwo = (num1, num2) => ( {username: "Arjit"} );

console.log(addTwo(4, 5));