!function(){"use strict";var t,e,n={9:function(t,e){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==n(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,"string");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===n(r)?r:String(r)),i)}var r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.root=e,this.button=this.root.querySelector(".js-disclosure__button"),this.content=this.root.querySelector(".js-disclosure__content"),this.controlledElment=!1;var n=this.button.getAttribute("aria-controls");console.log(n),n&&(this.controlledElment=document.getElementById(n))}var e,n;return e=t,(n=[{key:"init",value:function(){this.button.setAttribute("aria-expanded","false"),this.hideContent(),this.button.addEventListener("click",this.onClick.bind(this))}},{key:"showContent",value:function(){this.controlledElment&&(this.controlledElment.style.display="block")}},{key:"hideContent",value:function(){this.controlledElment&&(this.controlledElment.style.display="none")}},{key:"toggleExpand",value:function(){"true"===this.button.getAttribute("aria-expanded")?(this.button.setAttribute("aria-expanded","false"),this.hideContent()):(this.button.setAttribute("aria-expanded","true"),this.showContent())}},{key:"onClick",value:function(){this.toggleExpand()}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.default=i}},o={};e=(t=function t(e){var i=o[e];if(void 0!==i)return i.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,t),r.exports}(9))&&t.__esModule?t:{default:t},document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".js-disclosure").forEach((function(t){new e.default(t).init()}))}))}();