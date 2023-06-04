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
    content.appendChild(buildMenuRow('Salads', saladImgSrc, saladImgAlt, saladItemNames, saladItemDescrs));
    content.appendChild(buildMenuRow('Pasta', pastaImgSrc, pastaImgAlt, pastaItemNames, pastaItemDescrs));
    content.appendChild(buildMenuRow('Pizza', pizzaImgSrc, pizzaImgAlt, pizzaItemNames, pizzaItemDescrs));
}

function buildMenuRow(category, src, alt, names, descriptions) {
    const element = document.createElement('div');
    element.classList.add('menuContainer');

    const title = document.createElement('h2');
    title.innerHTML = category;
    title.classList.add('menuHeader');
    element.appendChild(title);

    const itemRow = document.createElement('div');
    itemRow.classList.add('itemRow');
    element.appendChild(itemRow);

    for(let i = 0; i < 3; i++) {
        const item = document.createElement('div');
        item.classList.add('item');

        const itemImg = new Image();
        itemImg.src = src[i];
        itemImg.alt = alt[i];
        itemImg.classList.add('itemImg');
        item.appendChild(itemImg);

        const itemName = document.createElement('h3');
        itemName.innerHTML = names[i];
        itemName.classList.add('itemName');
        item.appendChild(itemName);

        const itemDescr = document.createElement('p');
        itemDescr.innerHTML = descriptions[i];
        itemDescr.classList.add('description');
        item.appendChild(itemDescr);

        itemRow.appendChild(item);
    }

    return element;
}

const saladImgSrc = [
    caesar,
    mista,
    spring
];

const saladImgAlt = [
    'caesar salad',
    'mista salad',
    'spring mix salad',
]

const saladItemNames = [
    'Caesar Classica',
    'Mista',
    'Spring Mix',
];

const saladItemDescrs = [
    'Romaine Lettuce, Croutons, Romano Cheese, Caesar Dressing',
    'Mixed Greens, Tomatoes, Mushrooms, Black Olives, Croutons, Pepperoncini, Mozzarella, Parmesan, Balsamic Vinaigrette.',
    'Spring Lettuce Mix, Red Onion, Feta Cheese, Golden Raisins, Pine Nuts, Sweet Vinaigrette.',
];

const pastaImgSrc = [
    alfredo,
    pesto,
    rustico
];

const pastaImgAlt = [
    'alfredo pasta',
    'creamy pesto pasta',
    'marina on penne pasta',
]

const pastaItemNames = [
    'Alfredo Supremo',
    'Creamy Pesto Pasta',
    'Pasta Rustico',
];

const pastaItemDescrs = [
    'White Wine, Garlic, Cream, and Parmesan Cheese. Served on Linguine.',
    'Sundried Tomatoes, Mushrooms, Creamy Pesto Sauce. Served on Fusilli.',
    'Baby Spinach, Ricotta, Garlic, Fresh Marinara and topped with Mozzarella. Served on Penne.',
];

const pizzaImgSrc = [
    margherita,
    pepperoni,
    sicilian
];

const pizzaImgAlt = [
    'pizza with fresh tomato',
    'pizza with pepperoni',
    'pizza with 3 meats',
]

const pizzaItemNames = [
    'Margherita',
    'Pepperoni',
    'Sicilian',
];

const pizzaItemDescrs = [
    'Marinara Sauce, Mozzarella, Tomatoes, Fresh Basil, Roasted Garlic.',
    'Marinara Sauce, Mozzarella, Pepperoni and Oregano.',
    'Italian Sausage, Spicy Capicola Ham, Salami, Fresh Basil, Fresh Oregano, Mozzarella Cheese, Provolone Cheese, Marinara Sauce.',
];