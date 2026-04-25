# Portfolio — Pierre Mertz

Site vitrine professionnel orienté ingénierie électronique, télécommunications et systèmes embarqués.

## Objectif

Présenter de manière claire et crédible :

- le parcours académique,
- l'expérience professionnelle,
- les projets techniques,
- les compétences transversales (Soft Skills),
- les coordonnées de contact.

## Stack technique

- HTML5 sémantique
- CSS3 (fichier unique centralisé)
- JavaScript vanilla (sans framework)
- Déploiement statique via GitHub Pages

## Architecture du site

```text
.
├── index.html
├── parcours/
│   └── index.html
├── experience/
│   └── index.html
├── projets/
│   └── index.html
├── soft-skills/
│   └── index.html
├── contact/
│   └── index.html
├── includes/
│   ├── header.html
│   └── footer.html
└── assets/
	├── css/
	│   └── style.css
	├── js/
	│   └── components.js
	└── images/
		└── ...
```

## Composants partagés

Le header et le footer sont centralisés dans :

- `includes/header.html`
- `includes/footer.html`

Ils sont injectés dynamiquement dans chaque page par :

- `assets/js/components.js`

Ce script gère aussi :

- le lien actif de navigation,
- le menu hamburger mobile.

## Pages et navigation

Navigation principale :

- Accueil
- Parcours académique
- Expérience pro
- Projets
- Soft Skills
- Me contacter

Chaque page possède :

- un `title` cohérent avec l'intitulé de section,
- une `meta description` dédiée,
- un point d'injection `#site-header` et `#site-footer`.

## Lancer le site en local

Option Python (recommandée) :

```bash
python -m http.server 8000
```

Puis ouvrir :

- `http://localhost:8000`

Pourquoi un serveur local ?

Le chargement des includes repose sur `fetch` (`components.js`), qui ne fonctionne pas correctement en ouvrant les fichiers en `file://`.

## Standards de qualité appliqués

- HTML valide et sémantique (titres, sections, rôles ARIA utiles)
- Navigation cohérente entre toutes les pages
- Commentaires techniques maintenus uniquement quand ils apportent une valeur
- Pas de logique dupliquée pour le header/footer
- CSS centralisé et variables de thème dans `style.css`
- JavaScript défensif (vérifications d'existence des éléments DOM)

## Politique de commentaires

Les commentaires suivent ces règles :

- expliquer l'intention, pas l'évidence,
- rester courts et factuels,
- être mis à jour lors de chaque évolution,
- éviter les commentaires morts (code commenté non utilisé).

## Workflow Git recommandé

### Nommage de branches

- `feature/<sujet>`
- `fix/<sujet>`
- `docs/<sujet>`

### Format de commit

Format conseillé :

```text
type(scope): message
```

Exemples :

- `feat(nav): add soft skills entry in shared header/footer`
- `fix(home): close unclosed paragraph tag`
- `docs(readme): document architecture and quality standards`

Types utiles : `feat`, `fix`, `docs`, `refactor`, `style`, `chore`.

### Checklist avant push

- Vérifier la navigation sur desktop et mobile
- Contrôler les titres d'onglet (`title`) de toutes les pages
- Vérifier les liens internes stratégiques (header/footer/boutons CTA)
- Contrôler les erreurs d'édition dans l'IDE
- Relire les commentaires modifiés

## Déploiement GitHub Pages

Ce dépôt est prêt pour un déploiement statique.

- Branche de publication : `main` (ou branche dédiée Pages)
- Racine de publication : `/`
- Fichiers d'entrée : `index.html` et les sous-dossiers `*/index.html`

## Contact

- Site : `https://pierreprojet.github.io`
- E-mail : `mertzpierre.pro@gmail.com`