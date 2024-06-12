// 1 - Singleton
// object.create

// Object literals

const mysym = Symbol("key1");

const jsUser = {
    name: "Arjit",
    "full name": "Arjit Kumar Sahoo",
    [mysym]: "mykey1",
    age: 22,
    email: "arjit@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]
}

// console.log(jsUser);

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);

jsUser.email = "arjit@chatgpt.com";
// Object.freeze(jsUser);
jsUser.email = "arjit@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello JS user `);
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]} `);
}

// jsUser.greeting();
// jsUser.greetingTwo();

// console.log(jsUser);