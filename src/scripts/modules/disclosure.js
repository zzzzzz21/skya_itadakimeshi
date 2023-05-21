export default class Disclosure {
  /**
   * @param {HTMLElement} element
   */
  constructor(element) {
    this.root = element;
    this.button = this.root.querySelector('.js-disclosure__button');
    this.content = this.root.querySelector('.js-disclosure__content');
    this.controlledElment = false;
    const id = this.button.getAttribute('aria-controls');

    if (id) {
      this.controlledElment = this.root.querySelector(`#${id}`);
    }
  }

  // 初期設定
  init() {
    this.button.setAttribute('aria-expanded', 'false');
    this.hideContent();
    this.button.addEventListener('click', this.onClick.bind(this));
  }

  // 要素を表示
  showContent() {
    if (this.controlledElment) {
      this.controlledElment.style.display = 'block';
    }
  }

  // 要素を非表示
  hideContent() {
    if (this.controlledElment) {
      this.controlledElment.style.display = 'none';
    }
  }

  // 要素の表示・非表示を切り替え
  toggleExpand() {
    if (this.button.getAttribute('aria-expanded') === 'true') {
      this.button.setAttribute('aria-expanded', 'false');
      this.hideContent();
    } else {
      this.button.setAttribute('aria-expanded', 'true');
      this.showContent();
    }
  }

  // クリックイベント
  onClick() {
    this.toggleExpand();
  }
}
