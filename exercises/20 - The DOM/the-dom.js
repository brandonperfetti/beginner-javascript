// //  will only ever give you the first matching element
// const p = document.querySelector('p');
// // will give you multiple elements
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2image = item2.querySelector('img');
// const heading = document.querySelector('h2');

// console.log(heading.textContent);
// console.log(heading.innerText);
// //  set the textContent property on that element
// // heading.textContent = 'Brandon is cool';
// // console.log(heading.textContent);
// // console.log(heading.innerText);

// // document.addEventListener('DQMContentLoaded', init);

// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// //  get properties from the element
// const pizzaList = document.querySelector('.pizza');
// //  set properties on the element
// console.log(pizzaList.textContent);

// // use a bit more powerful methods on each of our elements/nodes

// // pizzaList.textContent = `${pizzaList.textContent}🍕`;
// pizzaList.insertAdjacentText('beforeend', '🍕');
// // pizzaList.insertAdjacentText('beforebegin', '🍕');
// pizzaList.insertAdjacentText('afterbegin', '🍕');

// Classes!

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
// pic.classList.add('round');

// will add or remove value depending on if it is there
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
