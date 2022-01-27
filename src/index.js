import { headerLoad } from './pageload';
import { renderHomePage } from './home';
import { renderMenuPage } from './menu';
import { contactPage, renderContactPage } from './contact';
import { footer } from './footer';

const switchTabs = (() => {
  const homeTab = document.querySelector('.home-container');
  const menuTab = document.querySelector('.menu-container');
  const contactTab = document.querySelector('.contact-container');
  const homeButton = document.querySelector('#homeB');
  const menuButton = document.querySelector('#menuB');
  const contactButton = document.querySelector('#contactB');

  homeButton.addEventListener('click', () => {
    menuTab.classList.add('empty');
    contactTab.classList.add('empty');
    homeTab.classList.remove('empty');
  });
  menuButton.addEventListener('click', () => {
    homeTab.classList.add('empty');
    contactTab.classList.add('empty');
    menuTab.classList.remove('empty');
  });
  contactButton.addEventListener('click', () => {
    menuTab.classList.add('empty');
    homeTab.classList.add('empty');
    contactTab.classList.remove('empty');
  });

  menuTab.classList.add('empty');
  contactTab.classList.add('empty');

  console.log(homeButton);
})();
