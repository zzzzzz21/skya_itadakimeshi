import Disclosure from "./modules/disclosure";
import MicroModal from 'micromodal';




document.addEventListener("DOMContentLoaded", function () {
  MicroModal.init({
    disableScroll: true,
  });

  document.querySelectorAll('.js-disclosure').forEach((element) => {
    const disclosure = new Disclosure(element);
    disclosure.init();
  });
});
