// Function Scope

// const age = 100;

// function go() {
//   const myAge = 200;
//   const hair = 'blonde';
//   console.log(hair);
//   console.log(age);
//   console.log(myAge);
// }
// go();

//  Block Scope

// function isCool(name) {
//   if (name === 'brandon') {
//     var cool = true;
//   }
//   console.log(cool);
//   return cool;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// Scope Lookup

const dog = 'pearl';

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog(dog);
}

go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

yell();
