// +++++++++++++++++++ Number ++++++++++++++++++


// const score = new Number(100);
// console.log(score);

// console.log(score.toString().length);
// console.log(score.toFixed(2));

// const otherNumber = 123.8936;
// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++ Maths +++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-7));
// console.log(Math.round(7.69));
// console.log(Math.ceil(5.38));
// console.log(Math.floor(5.79));

// console.log(Math.max(1,2,3,4,5));
// console.log(Math.min(1,2,3,4,5));

// console.log( Math.floor((Math.random()*10) + 1) );

const min = 1;
const max = 10;

let random = Math.floor(Math.random() * (max-min+1)) + min ;
console.log(random);