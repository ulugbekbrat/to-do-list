let btn = document.querySelector('#btn');
let list = document.querySelector('#list');

btn.addEventListener('click', (event) => {
    event.preventDefault();

    let text = document.querySelector('#inp').value.trim();
    if (text === '') {
        alert('nmadur yoszing');
        return;
    }

    let li = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    let textNode = document.createTextNode(text);
    
    let button = document.createElement('button');
    button.innerHTML = "o'chirish";
    
    li.appendChild(checkbox);
    li.appendChild(textNode);
    li.appendChild(button);

    list.appendChild(li);

    document.querySelector('#inp').value = '';
});

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.parentElement.remove();
    }
    if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
        event.target.parentElement.classList.toggle('check');
    }
});
