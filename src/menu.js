import { buildTabs } from "./home";

export function buildMenu() {
    let content = document.getElementById('content');

    content.appendChild(buildTabs());
    content.appendChild(buildSalad());
}

function buildSalad() {
    const element = document.createElement('div');
    element.classList.add('menuContainer');

    const title = document.createElement('h2');
    title.innerHTML = "Salads";
    title.classList.add('menuHeader');
    element.appendChild(title);

    const itemGrid = document.createElement('div');
    itemGrid.classList.add('itemGrid');
    element.appendChild(itemGrid);

    const imgSrc = [
        './images/caesar.jpg',
        './images/mista.jpg',
        './images/spring-mix.jpg'
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

        const itemImg = document.createElement('Img');
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

        itemGrid.appendChild(item);
    }

    return element;
}