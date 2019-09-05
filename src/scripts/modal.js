const modalSelector = 'data-modal';
const contentSelector = 'data-modal-content';
const closeButtonSelector = 'data-modal-close';
const visibleBodyClass = 'modal-overlay';
const modalClass = 'modal';
const modalVisibleClass = 'modal--visible'
const contentClass = 'modal__content';
const contentActiveClass = 'modal__content--active'


export function Modal(modalName) {
  /**
   * Init query selectors
   */
  this.modal = document.querySelector(`[${modalSelector}='${modalName}']`);
  this.contents = this.modal.querySelectorAll(`[${contentSelector}]`)
  this.body = document.querySelector('body');
  this.closeButton = document.querySelector(`[${closeButtonSelector}]`);
  
  this.modalOpen = false;
  
  // Add CSS classes
  this.modal.classList.add(modalClass);
  this.contents.forEach(c => c.classList.add(contentClass));

  // Immediately open modal if needed
  this.handleHashChange();

  // Init event listeners
  this.addEventListeners();
}


Modal.prototype.addEventListeners = function() {
  // Close modal on closeButton click
  this.closeButton.addEventListener('click', () => history.back());

  // Close modal on Esc press
  document.addEventListener("keydown", e => {
    this.modalOpen && e.key === 'Escape' ? history.back() : null
  })

  // Listen to hash change
  window.addEventListener("hashchange", () => this.handleHashChange());
}

/**
 * If hash equals to one of modal contents show modal 
 * and corresponding content
 */
Modal.prototype.handleHashChange = function() {
  const hash = location.hash.split('#')[1];

  const content = [...this.contents].find(c => 
    c.getAttribute(contentSelector) === hash)

  if (content == null) return this.closeModal();

  this.openModal();
  this.showContent(content);
}

Modal.prototype.openModal = function() {
  this.modalOpen = true;
  this.modal.classList.add(modalVisibleClass);
  this.body.classList.add(visibleBodyClass);
}

Modal.prototype.closeModal = function() {
  this.modalOpen = false;
  this.modal.classList.remove(modalVisibleClass);
  this.body.classList.remove(visibleBodyClass);
}

Modal.prototype.showContent = function(content) {
  this.contents.forEach(c => c.classList.remove(contentActiveClass));
  content.classList.add(contentActiveClass)
}