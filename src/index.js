import _ from 'lodash';
import './style.css';
import doge from './doge.png';

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    var myDoge = new Image();
    myDoge.src = doge;
    element.appendChild(myDoge);
    return element;
}

document.body.appendChild(component());