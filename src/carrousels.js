function previousSlide(e) {
  console.log(e);
}

function _setupDataIndices(carrouselObject) {
  for (let i = 0; i < carrouselObject.slidesArray.length; i += 1) {
    carrouselObject.slidesArray[i].setAttribute('data-index', i);
    carrouselObject.navCirclesArray[i].setAttribute('data-index, i');
  }
}

function _setupNav(carrouselObject) {
  carrouselObject.leftArrow.addEventListener('click', previousSlide);
}

function setupCarrousel(carrouselObject) {
  if(carrouselObject.initialised) return;
  _setupDataIndices(carrouselObject);
  _setupNav(carrouselObject);
}

function newCarrouselObject(slidesArray, navCirclesArray, leftArrow, rightArrow) {
  return {
    slidesArray,
    navCirclesArray,
    leftArrow,
    rightArrow,
    currentSlideIndex: 0,
    initialised: false,
  };
}

export {
  newCarrouselObject,
  setupCarrousel,
};
