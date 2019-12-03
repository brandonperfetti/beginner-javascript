// Function Definition

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log('Running  Calculate Bill!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function Call or **Run** or **Invoke**

// const myTotal = calculateBill();
// console.log(`Your Total is $${myTotal}`);
// console.log(`Your Total is $${calculateBill()}`);

const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);
// you can pass console.log as many arguments as you want
console.log(myTotal, myTotal2);

// Function Definition
function sayHiTo(firstName) {
  return `Hello, ${firstName}!`;
}

// const greeting = sayHiTo('Brandon');
// console.log(greeting);

// Passing Expressions
// const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

// /pass through undefined to call default value
const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
