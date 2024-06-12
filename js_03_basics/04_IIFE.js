// Immediately Invoked Function Expression (IIFE)

// IIFE is used to revoke the problems of global scope pollutions

(function chai (){
    //Named IIFE
    console.log(`DB connected`);
})();

( (name) => {
    console.log(`DB connected two ${name}`);
} )("Arjit");