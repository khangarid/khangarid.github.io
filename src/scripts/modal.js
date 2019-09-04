const modalSelector = 'data-modal';
const contentSelector = 'data-modal-content';
const triggerSelector = 'data-modal-trigger';
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
  this.triggers = document.querySelectorAll(`[${triggerSelector}=${modalName}]`);
  this.body = document.querySelector('body');
  this.closeButton = document.querySelector(`[${closeButtonSelector}]`);

  /**
   * Add CSS classes
   */
  this.modal.classList.add(modalClass);
  this.contents.forEach(c => c.classList.add(contentClass));

  /**
   * Listen to trigger clicks
   */
  this.triggers.forEach(el => 
    el.addEventListener('click', (e) => this.handleTriggerClick(e))
  );

  /**
   * Toggle modal on closeButton click
   */
  this.closeButton.addEventListener('click', (e) => this.toggleModal(e))

  /**
   * Toggle modal on trigger click
   */
  this.handleTriggerClick = (e) => {
    const target = e.target
      .closest(`[${triggerSelector}]`)
      .getAttribute('href');

    this.toggleModal();
    this.showContent(target);
  }


  /**
   * Toggles modal and shows target content
   */
  this.toggleModal = () => {
    this.modal.classList.toggle(modalVisibleClass);
    this.body.classList.toggle(visibleBodyClass);
  }

  this.showContent = (contentName) => {
    this.contents.forEach(content => {
      const name = content.getAttribute(contentSelector);

      `#${name}` === contentName
        ? content.classList.add(contentActiveClass)
        : content.classList.remove(contentActiveClass)
    })
  }
}