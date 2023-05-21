export default class FloatingImage {
  /**
   * @param {HTMLElement} element
   */
  constructor(element) {
    this.root = element;
    this.spacer = this.root.querySelector('.js-floating-image__spacer');
    this.image = this.root.querySelector('.js-floating-image__image');
  }

  init() {
    this.calc();
    // window.addEventListener('resize', this.resize.bind(this));
  }

  calc() {
    this.elementHeight = this.root.offsetHeight;
    this.imageHeight = this.image.offsetHeight;
    const diff = this.elementHeight - this.imageHeight;
    this.spacer.style.height = `${diff}px`;
  }

  // resize() {
  //   this.calc();
  // }
}
