import './style.css'
import { buildHome } from './home';
import { buildMenu } from './menu';

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

buildMenu();