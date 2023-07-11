/*async function loadFruits() {
  const response = await fetch('./fruitsOrganic.json');
  const fruits = await response.json();

  const fruitList = document.querySelector('.fruit-list');

  for (const fruits of fruits) {
    const fruitItem = document.createElement('div');
    fruitItem.classList.add('fruit-item');

    const image = document.createElement('img');
    image.src = fruits.image;
    image.alt = fruits.name;

    const name = document.createElement('div');
    name.textContent = fruits.name;

    const description = document.createElement('div');
    description.textContent = fruits.description;

    const price = document.createElement('div');
    price.textContent = fruits.price;

    fruitItem.appendChild(image);
    fruitItem.appendChild(name);
    fruitItem.appendChild(description);
    fruitItem.appendChild(price);

    fruitList.appendChild(fruitItem);
  }
}

loadFruits();*/

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

const options = {
   weekdays: "long",
   day: "numeric",
   month: "long",
   year: "numeric"
 };
 document.getElementById('lastmodified').textContent = new Date().toLocaleDateString('en-US', options)
 const currentYear = new Date().getFullYear();
 document.getElementById('year').textContent = currentYear;
 
