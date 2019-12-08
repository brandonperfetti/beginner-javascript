const brandon = document.querySelector('.brandon');

// selectors for elements
// console.log(brandon.children);
// console.log(brandon.firstElementChild);
// console.log(brandon.lastElementChild);
// console.log(brandon.previousElementSibling);
// console.log(brandon.nextElementSibling);
// console.log(brandon.parentElement);

// selectors for nodes
// console.log(brandon.childNodes);
// console.log(brandon.firstChild);
// console.log(brandon.lastChild);
// console.log(brandon.previousSibling);
// console.log(brandon.nextSibling);
// console.log(brandon.parentNode);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();
console.log(p);
