function toggleHamburgerMenu() {
  var headerNavigationLinksElement = document.getElementById('header-navigation-links');

  if (headerNavigationLinksElement && headerNavigationLinksElement.parentNode) {
    headerNavigationLinksElement.parentNode.classList.toggle('hamburger-menu-expanded');
  }

  event.stopPropagation();
}

function closeHamburgerMenu() {
  var headerNavigationLinksElement = document.getElementById('header-navigation-links');

  if (headerNavigationLinksElement && headerNavigationLinksElement.parentNode) {
    headerNavigationLinksElement.parentNode.classList.remove('hamburger-menu-expanded');
  }
}
