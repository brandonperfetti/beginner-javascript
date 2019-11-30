/*eslint-disable*/
const name = 'brandon';
const middle = "sean";
const last =`perfetti`;

// escaping allows you to tll JS not to take teh character as code
const sentance = 'she\'s so cool';

const sentance2 = `she's so cool`;

// multi line string using backtics
const song = `ohh

ya
I
like
pizza`

// concatination: when you combine two or more strings into one
// const hello = "hello my name is " + name + ". Nice to meet you";

// interpolation: when you put a variable inside of a string
const hello = `hello my name is ${name}. Nice to meet you. I am ${1+100} years old.`;

// backtics can
const html = `
<div>
  <h2>${name}</h2>
  <p>${hello}</p>
</div>
`;

// make document body the value of html
document.body.innerHTML = html;
console.log(html);