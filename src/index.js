import { setElementAsDropdown } from './dropdowns';

import { newCarrouselObject } from './carrousels';

const allDropdowns = Array.from(document.querySelectorAll('.dropdown-label'));
const allDropdownContents = Array.from(document.querySelectorAll('.dropdown-contents'));

for (let i = 0; i < allDropdowns.length; i += 1) {
  setElementAsDropdown(allDropdowns[i], allDropdownContents[i]);
}

const carrouselSlides = Array.from(document.querySelectorAll('.slide'));
const navCircles = Array.from(document.querySelectorAll('.carrousel-nav li'));
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

const carrousel = newCarrouselObject(carrouselSlides, navCircles, leftArrow, rightArrow);
carrousel.setupCarrousel();
console.log(carrousel);
