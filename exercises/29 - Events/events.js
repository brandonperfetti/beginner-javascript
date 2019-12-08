const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

// named function
function handleClick() {
  console.log('IT GOT CLICKED!!!');
}

// arrow function stored in a variable
const hooray = () => console.log('Hooray!!!');

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', hooray);

// unbind event listener
butts.removeEventListener('click', handleClick);

// listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
  console.log('BUYING ITEM');
}

function attachListener(buyButton) {
  console.log('Binding the buy button');
  buyButton.addEventListener('click', buyItem);
}

console.log(buyButtons);
console.dir(butts);

// this won't work to attach event listeners brah
// buyButtons.addEventListener('click', buyItem);

// you must loop
buyButtons.forEach(function(buyButton) {
  console.log('Binding the buy button');
  buyButton.addEventListener('click', buyItem);
});

buyButtons.forEach(attachListener);

// using arrow functions
// buyButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     console.log('YOU CLICKED IT');
//   });
// });
