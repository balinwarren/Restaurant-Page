export function buildHome(content) {
    content.appendChild(buildTabs());
    content.appendChild(buildTitle());
    content.appendChild(buildMsg());
}

export function buildTabs() {
    const element = document.createElement('div');
    element.classList.add('header');

    const homeTab = document.createElement('h3');
    homeTab.classList.add('tab');
    homeTab.innerHTML = 'Home';
    element.appendChild(homeTab);

    const menuTab = document.createElement('h3');
    menuTab.classList.add('tab');
    menuTab.innerHTML = 'Menu';
    element.appendChild(menuTab);

    const contactTab = document.createElement('h3');
    contactTab.classList.add('tab');
    contactTab.innerHTML = 'Contact';
    element.appendChild(contactTab);

    return element;
}

export function buildTitle() {
    const element = document.createElement('div');
    element.classList.add('title');

    const title = document.createElement('h1');
    title.id = 'name';
    title.innerHTML = 'Finto Italiano';
    element.appendChild(title);

    return element;
}

export function buildMsg() {
    const element = document.createElement('div');
    element.classList.add('msg');

    const message = document.createElement('h3');
    message.innerHTML = "'This is America. You already know this isn't authentic why are you asking? Get out. Now.'";
    element.appendChild(message);

    const author = document.createElement('h3');
    author.innerHTML = "-Definitely not the owner";
    element.appendChild(author);

    return element;
}

