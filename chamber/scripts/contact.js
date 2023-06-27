/*****************Contact**************
document.addEventListener('DOMContentLoaded', () => {
   const form = document.getElementById('contact-form');
   form.addEventListener('submit', (event) => {
     event.preventDefault(); // Prevent form submission
 
     // Perform form validation
     const nameInput = document.getElementById('name');
     const emailInput = document.getElementById('email');
 
     const name = nameInput.value.trim();
     const email = emailInput.value.trim();
 
     if (name === '') {
       alert('Please enter your name.');
       nameInput.focus();
       return;
     }
 
     if (email === '') {
       alert('Please enter your email address.');
       emailInput.focus();
       return;
     }
 
     if (!validateEmail(email)) {
       alert('Please enter a valid email address.');
       emailInput.focus();
       return;
     }
 
     // Form is valid, proceed with submission
     alert('Form submitted successfully!');
     form.reset();
   });
 
   const validateEmail = (email) => {
     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return re.test(email);
   };
 });*/
 //spotlight display

 fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const companies = data.companies;

    const sections = document.querySelectorAll('.spotlight section');

    companies.forEach((company, index) => {
      const section = sections[index];

      section.querySelector('h3').textContent = company.name;
      section.querySelectorAll('p')[0].textContent = company.address;
      section.querySelectorAll('p')[1].textContent = 'Phone: ' + company.phone;
      section.querySelectorAll('p')[2].innerHTML = '<a href="' + company.website + '">Website</a>';
      section.querySelector('img').src = company.image;
      section.querySelector('img').alt = company.name;
      section.querySelectorAll('p')[3].textContent = 'Membership Level: ' + company.membershipLevel;
      section.querySelectorAll('p')[4].textContent = company.otherInfo;
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
