# Dossier images

Ce dossier contient les médias utilisés par le portfolio.

## Fichiers actuellement présents

- `avatar.jpg` — photo de profil
- `Framatome-logo.png`
- `Dassault-logo.png`
- `TSE-logo.png`
- `Inspire-logo.png`
- `Xpert-logo.png`

## Bonnes pratiques

- Utiliser des noms explicites et stables (`societe-logo.png`, `avatar.jpg`)
- Conserver une casse cohérente sur tout le dépôt
- Référencer les images avec des chemins absolus depuis la racine :
	`/assets/images/<fichier>`
- Renseigner un attribut `alt` descriptif dans le HTML
- Activer `loading="lazy"` pour les images non critiques

## Formats recommandés

- Logos : `png` (fond transparent si nécessaire)
- Photos : `jpg`
- Taille optimisée pour le web (poids maîtrisé)
