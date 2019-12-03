// console.log('it works!');

// We Currently Declare Functions w/ the Function Keyword
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

//  Annon function - a function w/o a name
// function (firstName) {
//   return `Dr. ${firstName}`;
// };

// console.log(doctorize2('wes'));

// Function Expression - store a function as a value in a variable
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

//  Arrow Expression -

// function inchToCm(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// function inchToCm(inches) {
//   return inches * 2.54;
// }

// const inchToCm = function(inches) {
//   return inches * 2.54;
// };

/* eslint-disable */
// const inchToCm = (inches) => {
//   return inches * 2.54;
// };

// Implicit Return - no need to type return keyword

// const inchToCm = (inches) =>  inches * 2.54;

// If there is only ever one argument you can omit the parenthesis
const inchToCm = inches => inches * 2.54;

// function add(a,b = 3) {
//     const total = a + b;
//     return total;
// }

// function add(a, b = 3) {
//     return a + b;
// }

// const add = function(a, b = 3) {
//     return a + b;
// }

// const add = (a, b = 3)  => {
//     return a+b;
// }

const add = (a,b = 3) => a + b;

// Returning an object

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0,
//     }
//     return baby;
// }

const makeABaby = (first, last) => ({name: `${first} ${last}`, age: 0 });

// IIFE
//  Immediately Invoked Function Expression

// (function(age) {
//     console.log('Running the anon function');
//     return `You are cool and ${age}`;
// })(10);

// Method - a function that lives inside of an object

const brandon = {
    name: ' Brandon Perfetti',
    // Method
    sayHi: function() {
        console.log('Hey Brandon');
        return 'Hey Brandon'
    },
    // short hand method
    yellHi() {
        console.log('HEY BRANDONNNN')
    },
    // Aarow function - takes no arguments
    whisperHi: () => {
        console.log('...hi brandon...')
    }
}

// Callback Functions

// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
    console.log('Great Clicking!!!');
}

button.addEventListener('click', function() {
    console.log('Nice Job!!!')
})

//  Timer Callback
setTimeout(brandon.yellHi, 1000);

setTimeout(function() {
    console.log('DONE! Time to eat!');
}, 2000);

setTimeout( () => {
    console.log('DONE! Time to eat with arrows!');
}, 3000);