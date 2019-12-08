// Make a div
// add a class of wrapper to it
const div = document.createElement('div');
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
// add three list items with the words "one, two three" in them
const ul = `<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>`;

// put that list into the above wrapper
div.innerHTML = ul;
// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://picsum.photos/500';

// set the width to 250
img.width = 200;

// stop the jumpy
img.height = 200;

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'Cute puppy';

// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
  <div class="myDiv">
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
  </div>
`;

const ulElement = div.querySelector('ul');
console.log(ulElement);

// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHTML);

// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');

// remove the first paragraph
myDiv.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
  const html = `
  <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>Their height is ${height} cm and ${age} years old. In dog years this person would be ${age *
    7} and ${height * 0.3937008} inches tall. That would be a tall dog!</p>
    <button class="delete" type="button">&times; Delete</button>
  </div>`;
  return html;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// Have that function make 4 cards

// const cardsHTML = generatePlayerCard('brandon', 10, 150);
// console.log(cardsHTML);

let cardsHTML = generatePlayerCard('brandon', 31, 150);
cardsHTML += generatePlayerCard('scott', 29, 150);
cardsHTML += generatePlayerCard('casey', 25, 150);
cardsHTML += generatePlayerCard('allen', 12, 150);
// console.log(cardsHTML);

// another way
// cards.insertAdjacentHTML('afterbegin', generatePlayerCard('snickers', 12, 150));

// append those cards to the div
cards.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener

// select all the buttons!
const buttons = document.querySelectorAll('.delete');

// build out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  //   buttonThatGotClicked.parentElement.remove();

  //   it will search for the closest div or any element that has a playerCard class and remove it.
  buttonThatGotClicked.closest('.playerCard').remove();
  console.log(event.currentTarget);
  console.log('DELETE CARD!');
}

// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
