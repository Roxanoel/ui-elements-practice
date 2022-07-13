import './styles.css';

function setElementAsDropdown(hoverElement, dropdownToShow) {
  hoverElement.addEventListener('mouseenter', () => {
    hoverElement.classList.add('selected');
    dropdownToShow.classList.remove('hidden');
  });

  dropdownToShow.addEventListener('mouseleave', () => {
    dropdownToShow.classList.add('hidden');
    hoverElement.classList.remove('selected');
  });
}

// #region EXPORTS
export {
  // eslint-disable-next-line import/prefer-default-export
  setElementAsDropdown,
};
// #endregion
