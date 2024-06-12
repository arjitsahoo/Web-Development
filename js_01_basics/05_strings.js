const name = "ARJIT";
const repoCount = 1;

// console.log(`Hello my name is ${name} and my repository count is ${repoCount}`);

const gameName = new String('Arjit-Sahoo');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,6);
// console.log(newString);

const anotherString = gameName.slice(-8,4);
// console.log(anotherString);

const newStringOne = "     arjit     ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://arjit.com/arjit%20sahoo";
// console.log(url.replace('%20' , '-'));
// console.log(url.includes('arjit'));

// console.log(gameName.split('-'));

// ++++++++++++++++++ Article(String functions and methods) ++++++++++++++++++++++++++++++

const test = new String("5Arjit-Kumar-Sahoo");
let test1 = "ab\uD800";

// console.log(test.at(-5));
// console.log(test.charAt(4));
// console.log(test.charCodeAt(0)); //Returns ASCI value of the index.
// console.log(test.codePointAt(5));
// console.log(test.concat(" ",name));
// console.log(test.endsWith("Sahoo",111));
// console.log(test.includes("Kumar"));
// console.log(test.indexOf("S"));
// console.log(test.lastIndexOf("a"));
// console.log(test.length);
// console.log(test1.isWellFormed()); 

/* Lone surrogate is a string that contains Unicode characters in the range 0xD800–0xDBFF and 0xDC00–0xDFFF. It returns trues if the lone 
   surrogate is not present. If the string is not well-formed it will give an error if we use the encodeURI() method on it.*/

// console.log(test.length);
// console.log(name.localeCompare(newStringOne));
// console.log(test.match("-"));
// console.log(test.normalize("NFKD"));