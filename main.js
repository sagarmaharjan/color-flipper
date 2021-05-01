'use strict';

const main = document.querySelector('#main');
const button = document.querySelector('button');
const display = document.querySelector('#hex');
const title = document.querySelector('h1');
const nav = document.querySelector('nav');

const simple = ["green", "red", "rgba(133,122,200)", "#f15025"];
const hex = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const type = ['#simple', '#hex'];
let selectedType = type[0];

function generateHexCode() {
    if(selectedType === '#hex') {
        const randomHexCode = Array.from({length: 6}, () => hex[Math.floor(Math.random() * 15)]);
        return '#' + randomHexCode.join('');
    }

    return simple[Array.from({length: 1}, () => Math.floor(Math.random() * 3))]
}

function changeMainBackgroundColor(hexCode) {
    main.style.backgroundColor = hexCode;
    display.style.color = hexCode;
    title.style.color = hexCode;
}

    button.addEventListener('click', () => {
        const hexCode = generateHexCode();
        changeMainBackgroundColor(hexCode);
        display.textContent = hexCode;
    })

nav.addEventListener('click', (event) => {
    
    if(event.target.tagName.toLowerCase() === 'a' ) {
        if(event.target.parentElement.nextElementSibling === null) {
            event.target.parentElement.previousElementSibling.children[0].classList.remove('active');
        } else {
            event.target.parentElement.nextElementSibling.children[0].classList.remove('active');
        }
        event.target.classList.add('active');
        
        selectedType = event.target.getAttribute('href');
    }
})