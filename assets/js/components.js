/**
 * assets/js/components.js
 * -------------------------------------------------------
 * Charge les composants partagés (header, footer) dans
 * chaque page et gère le menu hamburger mobile.
 * -------------------------------------------------------
 */

(function () {
  'use strict';

  /* ── Chargement du header et du footer ── */

  /**
   * Injecte le contenu d'un fichier HTML dans un élément du DOM.
   * @param {string} url        - Chemin vers le fragment HTML
   * @param {string} targetId   - ID de l'élément cible dans le DOM
   * @param {Function} callback - Fonction appelée après injection
   */
  function loadComponent(url, targetId, callback) {
    const target = document.getElementById(targetId);
    if (!target) return;

    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Erreur lors du chargement de : ' + url);
        }
        return response.text();
      })
      .then(function (html) {
        target.innerHTML = html;
        if (typeof callback === 'function') callback();
      })
      .catch(function (err) {
        console.warn(err.message);
      });
  }

  /* ── Marque le lien actif dans la navigation ── */

  /**
   * Normalise un chemin pour comparer correctement les routes
   * (/, /index.html, /section et /section/index.html).
   * @param {string} pathname
   * @returns {string}
   */
  function normalizePath(pathname) {
    var path = pathname || '/';
    path = path.replace(/\/+/g, '/');
    path = path.replace(/\/$/, '');
    path = path.replace(/\/index\.html$/, '');
    return path || '/';
  }

  /**
   * Compare le chemin courant aux liens de la navbar et ajoute
   * la classe "active" au lien correspondant.
   */
  function setActiveNav() {
    const currentPath = normalizePath(window.location.pathname);
    const links = document.querySelectorAll('.navbar__nav a');

    links.forEach(function (link) {
      var linkPath = normalizePath(new URL(link.href).pathname);
      if (linkPath === currentPath || (linkPath !== '/' && currentPath.startsWith(linkPath + '/'))) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ── Menu hamburger mobile ── */

  /**
   * Active / désactive le menu de navigation sur mobile.
   */
  function initMobileMenu() {
    const toggle = document.querySelector('.navbar__toggle');
    const nav    = document.querySelector('.navbar__nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    /* Ferme le menu quand on clique sur un lien */
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }

  /* ── Déclenchement au chargement du DOM ── */
  document.addEventListener('DOMContentLoaded', function () {

    /* Chemin de base vers les includes (racine du site) */
    const base = '/includes/';

    /* Chargement du header */
    loadComponent(base + 'header.html', 'site-header', function () {
      setActiveNav();
      initMobileMenu();
    });

    /* Chargement du footer */
    loadComponent(base + 'footer.html', 'site-footer');
  });

})();
