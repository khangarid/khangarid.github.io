(function() {
  const triggerSelector = '[data-modal-trigger]';

  const triggers = document.querySelectorAll(triggerSelector);

  /**
   * Listen to click events
   */
  triggers.forEach(el => el.addEventListener('click', e => handleClick(e)));

  function handleClick(e) {
    const el = e.target.closest(triggerSelector);
    const target = el.dataset.modalTrigger;
    const modalEl = document.querySelector(`[data-modal='${target}']`)
    modalEl.classList.add('modal--visible')
  }
})();