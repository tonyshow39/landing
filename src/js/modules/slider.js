export default class Slider {
  slide = 0;
  offset = 0;

  constructor(settings) {
    const sliderWrap = document.getElementById(settings.id);
    (this.slider = sliderWrap.querySelector(".slider")),
      (this.prev = sliderWrap.querySelector(".prev")),
      (this.next = sliderWrap.querySelector(".next")),
      (this.slidesCount = this.slider.querySelectorAll(".slide")?.length);
    this.slideWidth = settings.slideWidth;
    this.gap = settings.gap;
    this.prevSlideBtn();
    this.nextSlideBtn();
  }

  // Меняем позицию слайдера
  changeSlide(btn) {
    if (btn === "next" && this.slide + 1 < this.slidesCount) {
      this.slide++;
      this.offset = (this.slideWidth + this.gap) * -this.slide;
    } else if (btn === "prev" && this.slide > 0) {
      this.slide--;
      this.offset = (this.slideWidth + this.gap) * -this.slide;
    }

    this.slider.style.left = `${this.offset}px`;
  }

  // Перелистываем слайдер к ледующему слайду
  nextSlideBtn() {
    this.next.addEventListener("click", () => {
      this.changeSlide("next");
      if (this.slide + 1 === this.slidesCount) {
        this.next.classList.add("disable");
      }
      this.changeBtnDisable(this.prev);
    });
  }

  // Перелистываем слайдер к предидущему слайду
  prevSlideBtn() {
    this.prev.addEventListener("click", () => {
      this.changeSlide("prev");
      if (this.slide === 0) {
        this.prev.classList.add("disable");
      }
      this.changeBtnDisable(this.next);
    });
  }

  // Разблокировка кнопок слайдера
  changeBtnDisable(btn) {
    if (btn.matches(".disable")) {
      btn.classList.remove("disable");
    }
  }
}
