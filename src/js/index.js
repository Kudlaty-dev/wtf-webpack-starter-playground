import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 123 🚀')

const toggl = function() {
    const navbar = document.querySelector('.navigation__toggl--js');
    navbar.classList.toggle('hide');
    const topmargin = document.querySelector('.body').classList.toggle('topmargin')
}
const button = document.querySelector('.navigation__button--js');
button.addEventListener("click", toggl);

import moment from 'moment';
console.log(moment().startOf('day').fromNow());


    
    /*addEventListener('click', console.log('click'));

console.log(button)*/