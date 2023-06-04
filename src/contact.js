import { buildTabs } from "./home";
import { applyTabListeners, resetDOM } from "./index";

export function buildContact() {
    resetDOM();

    let content = document.getElementById('content');

    content.appendChild(buildTabs());
    content.appendChild(buildForm());
    applyTabListeners();

    console.log("built contact")
}

function buildForm() {
    const element = document.createElement('div');
    element.classList.add('formContainer');

    const form = document.createElement('form');
    form.classList.add('formContainer');
    
    const label = document.createElement('label');
    label.innerHTML = "Contact Us:";
    label.for = 'contactBox';
    form.appendChild(label);

    const textArea = document.createElement('textarea');
    textArea.id = 'contactBox';
    textArea.name = 'contactBox';
    textArea.rows = '8';
    textArea.cols = '100';
    textArea.placeholder = "Don't bother filling this out. It don't go no where. We don't care. Complain on yelp, we won't read it there neither."
    form.appendChild(textArea);

    const submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.value = 'Submit';
    form.appendChild(submitBtn);

    element.appendChild(form);

    return element;
}