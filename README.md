# Modèle de site pour commerce de proximité

Un site vitrine prêt à l'emploi pour boulangerie, fleuriste, café, boutique, salon de coiffure…
Tout est déjà en place (produits, histoire, galerie, avis, horaires avec « ouvert / fermé » en direct,
plan d'accès, bouton d'appel sur téléphone). Il ne reste qu'à mettre **les photos et les textes du commerce**.

## Montrer la démo à un commerçant

Ouvrez le site et utilisez le bouton **« Modèle »** en bas à droite pour passer d'un type de commerce à l'autre.
Lien direct par type :

- `?modele=boulangerie`
- `?modele=fleuriste`
- `?modele=cafe`
- `?modele=boutique`
- `?modele=salon`

## Personnaliser pour un commerce (10 minutes)

1. Copiez tout le dossier et renommez-le (ex. `boulangerie-martin`).
2. Mettez les photos du commerce dans `images/` (JPG, ~1 500 px de large maximum).
3. Ouvrez **`config.js`** — c'est le seul fichier à modifier :
   - nom, phrase d'accroche, textes ;
   - couleurs (`colors`) et police (`font`) ;
   - chaque photo : `photo: 'images/ma-photo.jpg'` (vide = emplacement « Votre photo ici ») ;
   - horaires, adresse, coordonnées GPS (clic droit sur Google Maps → copier les chiffres), téléphone, email ;
   - réseaux sociaux (mettre `''` pour cacher une icône).
4. Passez `demo: true` à **`demo: false`** pour enlever le sélecteur de modèles.
5. Remplissez la page « Mentions légales » (obligatoire en France) avant la mise en ligne.

## Fichiers

| Fichier | Rôle |
|---|---|
| `config.js` | **Contenu du commerce** (à modifier) |
| `presets.js` | Exemples pour la démo (fleuriste, café, boutique, salon) |
| `app.js` | Construit la page — pas besoin d'y toucher |
| `style.css` | Mise en page, s'adapte aux couleurs de `config.js` |
| `index.html` | Squelette de la page |
