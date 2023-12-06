const checkbox = document.querySelector('#checkbox');
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  checkbox.setAttribute('checked', true);
}
// eslint-disable-next-line no-unused-vars
checkbox.addEventListener('change', function handleCheckboxChange(event) {
  if (this.checked) {
    document.body.classList.remove('is-light-mode');
    document.body.classList.add('is-dark-mode');
  } else {
    document.body.classList.remove('is-dark-mode');
    document.body.classList.add('is-light-mode');
  }
});