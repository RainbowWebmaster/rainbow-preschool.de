function toggleHamburgerMenu(e) {
  var headerNavigationLinksElement = document.getElementById('header-navigation-links');

  if (headerNavigationLinksElement && headerNavigationLinksElement.parentNode && headerNavigationLinksElement === e.target) {
    headerNavigationLinksElement.parentNode.classList.toggle('hamburger-menu-expanded');
  }
}

function closeHamburgerMenu(e) {
  var headerNavigationLinksElement = document.getElementById('header-navigation-links');

  if (headerNavigationLinksElement && headerNavigationLinksElement.parentNode && headerNavigationLinksElement !== e.target) {
    headerNavigationLinksElement.parentNode.classList.remove('hamburger-menu-expanded');
  }
}
