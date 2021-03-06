const people = [
  { name: 'Brandon', cool: true, country: 'Canada' },
  { name: 'Steve', cool: true, country: 'Merica' },
  { name: 'Pearl', cool: false, country: 'Fish Country' },
];

// Console Methods

people.forEach((person, index) => {
  // debugger;
  console.log(`${person.name}`);
});

// console.table(people);

function doALotOfStuff() {
  console.group('Doing some stuff');
  console.log('Oh, Hey man!');
  console.log('Take it easy');
  console.error('whoops!');
  console.groupEnd('Doing some stuff');
}

function doctorize(name) {
  // console.count(`Running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // will cause an errror
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootstrap() {
  console.log('Starting the app!');
  go();
}

// bootstrap();

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
