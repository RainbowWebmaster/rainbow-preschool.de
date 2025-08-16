function toggleHamburgerMenu() {
  const headerNavigationLinksElement = document.getElementById('header-navigation-links');

  if (headerNavigationLinksElement && headerNavigationLinksElement.parentNode) {
    headerNavigationLinksElement.parentNode.classList.toggle('hamburger-menu-expanded');
  }

  event.stopPropagation();
}

function closeHamburgerMenu() {
  const headerNavigationLinksElement = document.getElementById('header-navigation-links');

  if (headerNavigationLinksElement && headerNavigationLinksElement.parentNode) {
    headerNavigationLinksElement.parentNode.classList.remove('hamburger-menu-expanded');
  }
}

(function () {
  const bodyContentElement = document.getElementById('content');
  if (bodyContentElement) {
    bodyContentElement.addEventListener(
      "click",
      closeHamburgerMenu,
      false,
    );
  }
  
  const headerNavigationLinksElement = document.getElementById('header-navigation-links');
  if (headerNavigationLinksElement) {
    headerNavigationLinksElement.addEventListener(
      "click",
      function () {
        event.stopPropagation();
      },
      false,
    );
  }
})();
