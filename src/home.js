export function buildHome() {
    let content = document.getElementById('content');

    content.appendChild(buildTabs());
    content.appendChild(buildTitle());
    content.appendChild(buildMsg());
    content.appendChild(buildHours());

    console.log('built home');
}

export function buildTabs() {
    const element = document.createElement('div');
    element.classList.add('header');

    const homeTab = document.createElement('h3');
    homeTab.classList.add('tab');
    homeTab.classList.add('active');
    homeTab.innerHTML = 'Home';
    homeTab.addEventListener('click', resetDOM);
    homeTab.addEventListener('click', buildHome);
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

function buildTitle() {
    const element = document.createElement('div');
    element.classList.add('title');

    const title = document.createElement('h1');
    title.id = 'name';
    title.innerHTML = 'Finto Italiano';
    element.appendChild(title);

    return element;
}

function buildMsg() {
    const element = document.createElement('div');
    element.classList.add('msg');

    const message = document.createElement('h3');
    message.innerHTML = "'This is America. Obviously it ain't authentic whaddo I look like?'";
    element.appendChild(message);

    const author = document.createElement('h3');
    author.innerHTML = "-Definitely not the owner";
    element.appendChild(author);

    return element;
}

function buildHours() {
    const element = document.createElement('div');
    element.classList.add('hours');

    const header = document.createElement('h3');
    header.innerHTML = 'Hours';
    element.appendChild(header);

    const monday = document.createElement('h3');
    monday.innerHTML = 'MON: 11AM-9PM';
    element.appendChild(monday);

    const tuesday = document.createElement('h3');
    tuesday.innerHTML = 'TUES: 11AM-9PM';
    element.appendChild(tuesday);

    const wednesday = document.createElement('h3');
    wednesday.innerHTML = 'WED: 11AM-9PM';
    element.appendChild(wednesday);

    const thursday = document.createElement('h3');
    thursday.innerHTML = 'THURS: CLOSED';
    element.appendChild(thursday);

    const friday = document.createElement('h3');
    friday.innerHTML = 'FRI: 11AM-10PM';
    element.appendChild(friday);

    const saturday = document.createElement('h3');
    saturday.innerHTML = 'SAT: 11AM-10PM';
    element.appendChild(saturday);

    const sunday = document.createElement('h3');
    sunday.innerHTML = 'SUN: 1PM-10PM';
    element.appendChild(sunday);

    return element;
}

function resetDOM() {
    let content = document.getElementById('content');

    while(content.firstChild) {
        content.removeChild(content.lastChild);
    }

    console.log('reset executed');
}