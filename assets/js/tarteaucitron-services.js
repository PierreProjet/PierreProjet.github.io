/* ============================================================
   Tarteaucitron Custom Services Configuration
   Configure uniquement Google Tag Manager et Analytics
   ============================================================ */

(function() {
  // Attendre que tarteaucitron soit chargé
  if (typeof tarteaucitron === 'undefined') {
    console.warn('Tarteaucitron not loaded');
    return;
  }

  // Configuration personnalisée pour Google Tag Manager
  tarteaucitron.services.gtm = {
    "key": "gtm",
    "type": "analytic",
    "name": "Google Tag Manager",
    "uri": "https://www.google.com/policies/privacy/",
    "needConsent": true,
    "cookies": ['_ga', '_gat', '_gid'],
    "js": function() {
      // GTM déjà chargé dans le head
    },
    "fallback": function() {
      // Aucun fallback
    }
  };

  // Configuration personnalisée pour Google Analytics
  tarteaucitron.services.googleanalytics = {
    "key": "googleanalytics",
    "type": "analytic",
    "name": "Google Analytics",
    "uri": "https://www.google.com/policies/privacy/",
    "needConsent": true,
    "cookies": ['_ga', '_gat', '_gid', '_gac_'],
    "js": function() {
      // Analytics chargé via GTM
    },
    "fallback": function() {
      // Aucun fallback
    }
  };

  // Initialiser les services avec consentement
  if (typeof tarteaucitron.job !== 'undefined') {
    tarteaucitron.job.push('gtm');
    tarteaucitron.job.push('googleanalytics');
  }
})();
