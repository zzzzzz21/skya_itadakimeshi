import Disclosure from "./modules/disclosure";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.js-disclosure').forEach((element) => {
    const disclosure = new Disclosure(element);
    disclosure.init();
  });
});
