import './style.css'
import { buildHome } from './home';

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

buildHome(content);