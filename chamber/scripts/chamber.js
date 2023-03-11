const hamburgerBtn = document.querySelector('.hamburgerBtn');
const closeBtn = document.querySelector('.closeBtn');
const navigation = document.querySelector('.navigation');

function toggleMenu() {
  navigation.classList.toggle('show');
}

function showButton() {
  if (window.innerWidth <= 468) {
    hamburgerBtn.style.display = 'block';
  } else {
    hamburgerBtn.style.display = 'none';
    navigation.classList.remove('show');
  }
}

hamburgerBtn.addEventListener('click', toggleMenu);
window.addEventListener('resize', showButton);
window.addEventListener('load', showButton);


const datefield = document.querySelector(".date");
//const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {
	dateStyle: "full"
}).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

// last modified date
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;