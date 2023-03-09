const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
//create a function with event listener, input value  and empty list
button.addEventListener('click', () =>{
    const myItem = input.value;
    input.value ='';
    
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
    // append eelements 
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'X';
    list.appendChild(listItem);
    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    input.focus();
});