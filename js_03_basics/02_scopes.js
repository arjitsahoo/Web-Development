function one(){
    const username = "Arjit"

    function two(){
        const website = "Youtube"
        console.log(username);
    }

    // console.log(website);
    // two();
}

one();

if(true){
    const username = "Arjit";    
    if(username === "Arjit"){
        const website = " Youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


console.log(addOne(5));

function addOne(num){
    return num + 1;
}


// console.log(addTwo(5)); -----------------> Cannot call function before declaration of function in a variable
const addTwo = function(num){
    return num + 2;
}