console.log('It Works!');

const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;
const myHTML = `
  <div class="wrapper">
    <h2>Cute Pup</h2>
    <img src="${src}" alt="${desc}" />
  </div>
`;

// item.innerHTML = `
//   <div>
//     <h1>Hey, How are ya?</h1>
//   </div>
// `;

console.log(myHTML.classList);
console.log(typeof myHTML);

item.innerHTML = myHTML;

console.log(item.innerHTML);

const itemImage = document.querySelector('.wrapper img');
itemImage.classList.add('round');
console.log(itemImage);
