'use strict';

(function() {
    const main = document.querySelector('#main');
    const button = document.querySelector('button');
    const display = document.querySelector('#hex');
    const title = document.querySelector('h1');
    const nav = document.querySelector('nav');
    class ColorFlipper {
        constructor() {
            this.simple = ["green", "red", "rgba(133,122,200)", "#f15025"];
            this.hex = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            this.type = ['#simple', '#hex'];
            this.selectedType = this.type[0];
            this.defaultColorCode = '#49A6E9';
        }

        generateColorCode() {
            if(this.selectedType === '#hex') {
                const randomHexCode = Array.from({length: 6}, () => this.hex[Math.floor(Math.random() * 15)]);
                return '#' + randomHexCode.join('');
            }
        
            return this.simple[Array.from({length: 1}, () => Math.floor(Math.random() * 3))]
        }

        changeColorOfElement(colorCode, ...selectors) {
            selectors.forEach((selector) => {
                if(selector.background) {
                    selector.dom.style.backgroundColor = colorCode;
                } else if(selector.color) {
                    selector.dom.style.color = colorCode;
                }
            })
        }f
    }

    let colorFlipper = new ColorFlipper();    

    button.addEventListener('click', () => {
        const colorCode = colorFlipper.generateColorCode();
        colorFlipper.changeColorOfElement(colorCode, {dom: main, background: true}, {dom: title, color: true});
        display.textContent = colorCode;
    })

    nav.addEventListener('click', (event) => {    
        if(event.target.tagName.toLowerCase() === 'a' ) {
            event.preventDefault();
            colorFlipper.changeColorOfElement(colorFlipper.defaultColorCode, {dom: main, background: true}, {dom: title, color: true});
            display.textContent = colorFlipper.defaultColorCode;
            if(event.target.parentElement.nextElementSibling === null) {
                event.target.parentElement.previousElementSibling.children[0].classList.remove('active');
            } else {
                event.target.parentElement.nextElementSibling.children[0].classList.remove('active');
            }
            event.target.classList.add('active');
            
            colorFlipper.selectedType = event.target.getAttribute('href');
        }
    })
})();