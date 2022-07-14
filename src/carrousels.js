function newCarrouselObject(slidesArray, navCirclesArray, leftArrow, rightArrow) {
  return {
    slidesArray,
    navCirclesArray,
    leftArrow,
    rightArrow,
    currentSlideIndex: 0,
    initialised: false,

    nextSlide() {
      if (this.currentSlideIndex < this.slidesArray.length - 1) {
        this.currentSlideIndex += 1;
      } else {
        this.currentSlideIndex = 0;
      }
      return this.currentSlideIndex;
    },
    previousSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex -= 1;
      } else {
        this.currentSlideIndex = this.slidesArray.length - 1;
      }
    },
    getSlideByIndex(index) {
      this.currentSlideIndex = index;
    },
    loadCurrentSlide() {
      for (let i = 0; i < this.slidesArray.length; i += 1) {
        if (+(slidesArray[i].dataset.index) === this.currentSlideIndex) {
          slidesArray[i].classList.remove('hidden');
          navCirclesArray[i].classList.add('selected');
        } else {
          slidesArray[i].classList.add('hidden');
          navCirclesArray[i].classList.remove('selected');
        }
      }
    },
    startTimer() {
      setInterval(() => {
        this.nextSlide();
        this.loadCurrentSlide();
      }, 5000);
    },
    setupCarrousel() {
      if (this.initialised) return;
      for (let i = 0; i < this.slidesArray.length; i += 1) {
        this.slidesArray[i].setAttribute('data-index', i);
        this.navCirclesArray[i].setAttribute('data-index', i);
      }
      this.loadCurrentSlide();
      this.leftArrow.addEventListener('click', () => {
        this.previousSlide();
        this.loadCurrentSlide();
      });
      this.rightArrow.addEventListener('click', () => {
        this.nextSlide();
        this.loadCurrentSlide();
      });
      navCirclesArray.forEach((circle) => {
        circle.addEventListener('click', (e) => {
          this.getSlideByIndex(+e.target.dataset.index);
          this.loadCurrentSlide();
        });
      });
      this.startTimer();
      this.initialised = true;
    },

  };
}

export {
  // eslint-disable-next-line import/prefer-default-export
  newCarrouselObject,
};
