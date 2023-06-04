import { buildTabs } from "./home";
import caesar from "./images/caesar.jpg";
import mista from "./images/mista.jpg";
import spring from "./images/spring-mix.jpg";
import alfredo from "./images/alfredo-supremo.jpg";
import pesto from "./images/creamy-pesto.jpg";
import rustico from "./images/pasta-rustico.jpg";
import margherita from "./images/margherita.jpg";
import pepperoni from "./images/pepperoni.jpg";
import sicilian from "./images/sicilian.jpg";

export function buildMenu() {
    let content = document.getElementById('content');

    content.appendChild(buildTabs());
    content.appendChild(buildSalad());
    content.appendChild(buildPasta());
}

function buildSalad() {
    const element = document.createElement('div');
    element.classList.add('menuContainer');

    const title = document.createElement('h2');
    title.innerHTML = "Salads";
    title.classList.add('menuHeader');
    element.appendChild(title);

    const itemRow = document.createElement('div');
    itemRow.classList.add('itemRow');
    element.appendChild(itemRow);

    const imgSrc = [
        caesar,
        mista,
        spring
    ];

    const imgAlt = [
        'caesar salad',
        'mista salad',
        'spring mix salad',
    ]

    const itemNames = [
        'Caesar Classica',
        'Mista',
        'Spring Mix',
    ];

    const itemDescrs = [
        'Romaine Lettuce, Croutons, Romano Cheese, Caesar Dressing',
        'Mixed Greens, Tomatoes, Mushrooms, Black Olives, Croutons, Pepperoncini, Mozzarella, Parmesan, Balsamic Vinaigrette.',
        'Spring Lettuce Mix, Red Onion, Feta Cheese, Golden Raisins, Pine Nuts, Sweet Vinaigrette.',
    ];

    for(let i = 0; i < 3; i++) {
        const item = document.createElement('div');
        item.classList.add('item');

        const itemImg = new Image();
        itemImg.src = imgSrc[i];
        itemImg.alt = imgAlt[i];
        itemImg.classList.add('itemImg');
        item.appendChild(itemImg);

        const itemName = document.createElement('h3');
        itemName.innerHTML = itemNames[i];
        itemName.classList.add('itemName');
        item.appendChild(itemName);

        const itemDescr = document.createElement('p');
        itemDescr.innerHTML = itemDescrs[i];
        itemDescr.classList.add('description');
        item.appendChild(itemDescr);

        itemRow.appendChild(item);
    }

    return element;
}

function buildPasta() {
    const element = document.createElement('div');
    element.classList.add('menuContainer');

    const title = document.createElement('h2');
    title.innerHTML = "Pasta";
    title.classList.add('menuHeader');
    element.appendChild(title);

    const itemRow = document.createElement('div');
    itemRow.classList.add('itemRow');
    element.appendChild(itemRow);

    const imgSrc = [
        alfredo,
        pesto,
        rustico
    ];

    const imgAlt = [
        'alfredo pasta',
        'creamy pesto pasta',
        'marina on penne pasta',
    ]

    const itemNames = [
        'Alfredo Supremo',
        'Creamy Pesto Pasta',
        'Pasta Rustico',
    ];

    const itemDescrs = [
        'White Wine, Garlic, Cream, and Parmesan Cheese. Served on Linguine.',
        'Sundried Tomatoes, Mushrooms, Creamy Pesto Sauce. Served on Fusilli.',
        'Baby Spinach, Ricotta, Garlic, Fresh Marinara and topped with Mozzarella. Served on Penne.',
    ];

    for(let i = 0; i < 3; i++) {
        const item = document.createElement('div');
        item.classList.add('item');

        const itemImg = new Image();
        itemImg.src = imgSrc[i];
        itemImg.alt = imgAlt[i];
        itemImg.classList.add('itemImg');
        item.appendChild(itemImg);

        const itemName = document.createElement('h3');
        itemName.innerHTML = itemNames[i];
        itemName.classList.add('itemName');
        item.appendChild(itemName);

        const itemDescr = document.createElement('p');
        itemDescr.innerHTML = itemDescrs[i];
        itemDescr.classList.add('description');
        item.appendChild(itemDescr);

        itemRow.appendChild(item);
    }

    return element;
}