import { setElementAsDropdown } from './dropdowns';

const allDropdowns = Array.from(document.querySelectorAll('.dropdown'));
const allDropdownContents = Array.from(document.querySelectorAll('.dropdown-contents'));

for (let i = 0; i < allDropdowns.length; i += 1) {
  setElementAsDropdown(allDropdowns[i], allDropdownContents[i]);
}
