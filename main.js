function toggleHamburgerMenu() {
  var headerNavigationLinksElement = document.getElementById('header-navigation-links');

  if (headerNavigationLinksElement && headerNavigationLinksElement.parentNode && headerNavigationLinksElement.parentNode === event.target.parentNode) {
    headerNavigationLinksElement.parentNode.classList.toggle('hamburger-menu-expanded');
  }
}

function closeHamburgerMenu() {
  var headerNavigationLinksElement = document.getElementById('header-navigation-links');

  if (headerNavigationLinksElement && headerNavigationLinksElement.parentNode && headerNavigationLinksElement !== event.target) {
    headerNavigationLinksElement.parentNode.classList.remove('hamburger-menu-expanded');
  }
}
