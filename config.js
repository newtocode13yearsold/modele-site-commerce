/* ==========================================================================
   CONFIG.JS — LE SEUL FICHIER À MODIFIER POUR UN NOUVEAU COMMERCE
   --------------------------------------------------------------------------
   • Les textes : remplacez-les entre les guillemets.
   • Les photos : mettez le fichier dans le dossier images/ puis écrivez
     son chemin, ex. photo: 'images/vitrine.jpg'. Laissé vide ('') = un
     emplacement « Votre photo ici » s'affiche à la place.
   • demo: true  → affiche le sélecteur de modèles (pour montrer aux commerçants)
     demo: false → site final du commerçant, sans sélecteur.
   ========================================================================== */

window.SITE = {
  demo: true,

  id: 'boulangerie',            // nom court du modèle (sert au lien ?modele=…)
  menuLabel: 'Boulangerie',     // nom dans le sélecteur de démo

  // ---- Identité --------------------------------------------------------
  type: 'Boulangerie · Pâtisserie artisanale',
  name: 'Maison Dupont',
  logo: '',                     // ex. 'images/logo.png' (vide = initiales)
  colors: {
    primary: '#7a4426',         // couleur principale (boutons, titres)
    accent:  '#e0a63a',         // couleur d'accent (détails, étoiles)
    paper:   '#fbf6ef',         // fond de page
    ink:     '#2b1f17'          // couleur du texte
  },
  font: 'Fraunces',             // 'Fraunces', 'Playfair Display' ou 'Space Grotesk'

  // ---- Haut de page ----------------------------------------------------
  tagline: 'Le bon pain du quartier, cuit chaque matin.',
  intro: 'Baguettes au levain, viennoiseries pur beurre et gâteaux de saison, préparés sur place par notre équipe depuis plus de 30 ans.',
  heroPhoto: '',
  heroPhotoLabel: 'Photo principale : la vitrine ou le produit phare',
  rating: { score: '4,9', count: 128, source: 'Google' },   // mettre null pour cacher

  // ---- 3 points forts --------------------------------------------------
  // icônes possibles : wheat, clock, heart, leaf, star, award, gift, sparkles,
  //                    coffee, flower, scissors, bag, truck
  highlights: [
    { icon: 'wheat', title: 'Farines locales', text: 'Blé cultivé et moulu à moins de 50 km d’ici.' },
    { icon: 'clock', title: 'Fournées toute la journée', text: 'Du pain chaud à 7 h, 11 h et 17 h.' },
    { icon: 'heart', title: '100 % fait maison', text: 'Tout est préparé sur place, du levain aux crèmes.' }
  ],

  // ---- Produits / services ---------------------------------------------
  products: {
    navLabel: 'Produits',
    title: 'Nos incontournables',
    subtitle: 'Un aperçu de ce qui vous attend en boutique. La carte change avec les saisons.',
    items: [
      { name: 'Baguette tradition', desc: 'Levain naturel, croûte dorée et mie alvéolée.', price: '1,30 €', tag: 'Best-seller', photo: '' },
      { name: 'Croissant pur beurre', desc: 'Feuilletage maison, beurre AOP Charentes.', price: '1,40 €', tag: '', photo: '' },
      { name: 'Pain de campagne', desc: 'Seigle et blé, se garde toute la semaine.', price: '4,20 €', tag: '', photo: '' },
      { name: 'Tarte aux fruits', desc: 'Fruits de saison sur crème pâtissière vanille.', price: '3,80 €', tag: 'De saison', photo: '' },
      { name: 'Éclair au chocolat', desc: 'Pâte à choux et crème au chocolat noir 64 %.', price: '3,20 €', tag: '', photo: '' },
      { name: 'Gâteaux sur commande', desc: 'Anniversaires, mariages, baptêmes : parlons-en.', price: 'Sur devis', tag: 'Commande', photo: '' }
    ]
  },

  // ---- À propos --------------------------------------------------------
  about: {
    title: 'Notre histoire',
    text: [
      'Tout a commencé en 1992, avec un four à bois et une recette de pain héritée du grand-père. Trente ans plus tard, on pétrit toujours à la main, chaque nuit, pour que la première baguette sorte à 7 h.',
      'Notre équipe de six artisans travaille avec des producteurs de la région : farine, œufs, lait et fruits viennent tous de moins de 50 km.'
    ],
    signature: 'Jean & Marie Dupont',
    since: '1992',
    sinceLabel: 'au cœur du quartier',
    photo: '',
    photoLabel: 'Photo : l’équipe ou l’artisan au travail'
  },

  // ---- Galerie (6 photos) ----------------------------------------------
  gallery: {
    title: 'En images',
    subtitle: 'Le fournil, la boutique et nos créations.',
    items: [
      { photo: '', label: 'Le fournil' },
      { photo: '', label: 'La vitrine' },
      { photo: '', label: 'Un produit en gros plan' },
      { photo: '', label: 'L’intérieur de la boutique' },
      { photo: '', label: 'Le façonnage' },
      { photo: '', label: 'Une création de fête' }
    ]
  },

  // ---- Avis clients ----------------------------------------------------
  reviews: {
    title: 'Ils en parlent mieux que nous',
    items: [
      { name: 'Sophie L.', stars: 5, text: 'La meilleure baguette du coin, et toujours un sourire au comptoir. On fait le détour exprès !' },
      { name: 'Karim B.', stars: 5, text: 'Notre gâteau de mariage était magnifique et délicieux. Merci pour vos conseils.' },
      { name: 'Hélène M.', stars: 5, text: 'Les croissants du dimanche sont devenus un rituel familial. Une adresse précieuse.' }
    ]
  },

  // ---- Horaires (format 24 h, [] = fermé) ------------------------------
  hours: {
    lun: [],
    mar: [['07:00', '13:00'], ['15:00', '19:30']],
    mer: [['07:00', '13:00'], ['15:00', '19:30']],
    jeu: [['07:00', '13:00'], ['15:00', '19:30']],
    ven: [['07:00', '13:00'], ['15:00', '19:30']],
    sam: [['07:00', '19:30']],
    dim: [['07:00', '13:00']]
  },
  hoursNote: 'Ouvert la plupart des jours fériés, le matin.',

  // ---- Adresse & contact -----------------------------------------------
  address: '12 rue du Marché',
  city: '60200 Votre ville',
  coords: [49.4179, 2.8261],    // latitude, longitude (clic droit sur Google Maps)
  phone: '03 44 00 00 00',
  email: 'bonjour@votre-commerce.fr',
  socials: { instagram: '#', facebook: '#' },   // '' pour cacher

  // ---- Bandeau final ---------------------------------------------------
  cta: {
    title: 'Une commande pour un événement ?',
    text: 'Pièces montées, plateaux salés, commandes de fêtes : appelez-nous 48 h à l’avance et on s’occupe de tout.',
    button: 'Appeler la boutique'
  }
};
