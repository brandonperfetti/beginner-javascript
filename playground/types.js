// /*eslint-disable*/
// const name = 'brandon';
// const middle = "sean";
// const last =`perfetti`;

// // escaping allows you to tll JS not to take teh character as code
// const sentance = 'she\'s so cool';

// const sentance2 = `she's so cool`;

// // multi line string using back tics
// const song = `ohh

// ya
// I
// like
// pizza`

// // concatenation: when you combine two or more strings into one
// // const hello = "hello my name is " + name + ". Nice to meet you";

// // interpolation: when you put a variable inside of a string
// const hello = `hello my name is ${name}. Nice to meet you. I am ${1+100} years old.`;

// // Using back tics allows you to pass through html as a string.
// const html = `
// <div>
//   <h2>${name}</h2>
//   <p>${hello}</p>
// </div>
// `;

// // make document body the value of html
// document.body.innerHTML = html;
// console.log(html);

const age = 100;
const name = 'brandon';

// const a = 10;
// const b = 20;

const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties / kids);
const dadGets = smarties % kids;
console.log(`Each kid gets ${eachKidGets}`);
