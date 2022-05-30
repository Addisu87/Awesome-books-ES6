/* Single Page Application */
const gotoPage = (link) => {
  const links = document.querySelectorAll('.nav-a');
  links.forEach((lk) => {
    if (
      link.getAttribute('href') === lk.getAttribute('href')
      && !link.classList.contains('highlight-link')
    ) {
      document
        .getElementById(lk.getAttribute('href').replace('#', ''))
        .classList.toggle('show-section');
      lk.classList.toggle('highlight-link');
    } else if (
      link.getAttribute('href') !== lk.getAttribute('href')
      && lk.classList.contains('highlight-link')
    ) {
      document
        .getElementById(lk.getAttribute('href').replace('#', ''))
        .classList.toggle('show-section');
      lk.classList.toggle('highlight-link');
    }
  });
};

export default gotoPage;
