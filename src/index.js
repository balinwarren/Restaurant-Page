import './style.css'
import { buildHome } from './home';
import { buildMenu } from './menu';

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

buildHome();

export function resetDOM() {
    let content = document.getElementById('content');

    while(content.firstChild) {
        content.removeChild(content.lastChild);
    }

    console.log('reset executed');
}

function removeActive() {
    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');

    let tabs = [home, menu, contact];

    for(let i = 0; i < 3; i++) {
        tabs[i].classList.remove('active');
    }
}

function setActive(id) {
    let tab = document.getElementById(id);
    tab.classList.add('active');
}

export function applyTabListeners() {
    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');

    let tabs = [home, menu, contact];
    let funcs = [buildHome, buildMenu];

    for(let i = 0; i < 2; i++) {
        tabs[i].addEventListener('click', resetDOM);
        tabs[i].addEventListener('click', funcs[i]);
        tabs[i].addEventListener('click', removeActive);
        tabs[i].addEventListener('click', () => {
            setActive(tabs[i].id);
        });
    }
}