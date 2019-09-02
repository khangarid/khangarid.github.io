const modalSelector = 'data-modal';
const contentSelector = 'data-modal-content';
const triggerSelector = 'data-modal-trigger';
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
  this.triggers = document.querySelectorAll(`[${triggerSelector}=${modalName}]`);
  this.body = document.querySelector('body');

  /**
   * Add CSS classes
   */
  this.modal.classList.add(modalClass);
  this.contents.classList.add(contentClass);

  /**
   * Listen to trigger clicks
   */
  this.triggers.forEach(el => 
    el.addEventListener('click', (e) => this.handleTriggerClick(e))
  );

  /**
   * Toggle modal on trigger click
   */
  this.handleTriggerClick = (e) => {
    const target = e.target
      .closest(`[${triggerSelector}]`)
      .getAttribute('href');

    this.toggle(target);
  }

  /**
   * Toggles modal and shows target content
   */
  this.toggle = (contentName) => {
    this.modal.classList.toggle(modalVisibleClass);
    this.body.classList.toggle(visibleBodyClass);

    this.contents.forEach(content => {
      const name = content.getAttribute(contentSelector);

      `#${name}` === contentName
        ? content.classList.add(contentActiveClass)
        : content.classList.remove(contentActiveClass)
    })
  }
}