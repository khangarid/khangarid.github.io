!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);function o(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var r="data-modal",a="data-modal-content",i="data-modal-close",c="modal",s="modal__content";function l(t){this.modal=document.querySelector("[".concat(r,"='").concat(t,"']")),this.contents=this.modal.querySelectorAll("[".concat(a,"]")),this.body=document.querySelector("body"),this.closeButton=document.querySelector("[".concat(i,"]")),this.modalOpen=!1,this.modal.classList.add(c),this.contents.forEach(function(t){return t.classList.add(s)}),this.handleHashChange(),this.addEventListeners()}l.prototype.addEventListeners=function(){var t=this;this.closeButton.addEventListener("click",function(){return history.back()}),document.addEventListener("keydown",function(e){t.modalOpen&&"Escape"===e.key&&history.back()}),window.addEventListener("hashchange",function(){return t.handleHashChange()})},l.prototype.handleHashChange=function(){var t=location.hash.split("#")[1],e=o(this.contents).find(function(e){return e.getAttribute(a)===t});if(null==e)return this.closeModal();this.openModal(),this.showContent(e)},l.prototype.openModal=function(){this.modalOpen=!0,this.modal.classList.add("modal--visible"),this.body.classList.add("modal-overlay")},l.prototype.closeModal=function(){this.modalOpen=!1,this.modal.classList.remove("modal--visible"),this.body.classList.remove("modal-overlay")},l.prototype.showContent=function(t){this.contents.forEach(function(t){return t.classList.remove("modal__content--active")}),t.classList.add("modal__content--active")},new l("projects")}]);
//# sourceMappingURL=bundle.js.map