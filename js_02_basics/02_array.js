const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

// const allNewHeroes = [...marvel_heroes, ...dc_heroes];           //Spread operator
// console.log(allNewHeroes);

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const real_anotherArray = anotherArray.flat(Infinity);          // Spreads all array elements
// console.log(real_anotherArray);

// console.log(Array.isArray("Arjit"));
// console.log(Array.from("Arjit"));                                  // Returns converted array (Takes single input)
// console.log(Array.from({name: "Arjit"}));                          // Interesting (It can't form the desired array)

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3));                    // Returns new array from set of elements

let a = "Arjit";
let b = "Kumar";
let c = "Sahoo";

console.log(Array.of(a,b,c));