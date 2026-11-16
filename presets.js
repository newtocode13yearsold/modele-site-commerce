/* ==========================================================================
   PRESETS.JS — modèles d'exemple pour la DÉMO uniquement.
   Ils servent à montrer le site à différents commerces (bouton « Modèle »
   en bas de page, ou lien direct : index.html?modele=fleuriste).
   Pour le site final d'un commerçant, on modifie config.js, pas ce fichier.
   ========================================================================== */

window.PRESETS = {

  fleuriste: {
    id: 'fleuriste', menuLabel: 'Fleuriste',
    type: 'Artisan fleuriste', name: 'L’Atelier des Fleurs', logo: '',
    colors: { primary: '#3f5e45', accent: '#e39a8c', paper: '#f7f5ef', ink: '#1f2a22' },
    font: 'Playfair Display',
    tagline: 'Des bouquets qui racontent quelque chose.',
    intro: 'Fleurs de saison, compositions sur mesure et plantes d’intérieur. On vous conseille pour chaque occasion, du petit merci au grand jour.',
    heroPhoto: '', heroPhotoLabel: 'Photo principale : un bouquet signature',
    rating: { score: '4,8', count: 96, source: 'Google' },
    highlights: [
      { icon: 'flower', title: 'Fleurs de saison', text: 'Au plus près des producteurs français.' },
      { icon: 'truck', title: 'Livraison locale', text: 'Le jour même, commandé avant 14 h.' },
      { icon: 'sparkles', title: 'Sur mesure', text: 'Mariages, deuils, événements d’entreprise.' }
    ],
    products: {
      navLabel: 'Créations', title: 'Nos créations', subtitle: 'Chaque bouquet est unique : les prix indiquent un point de départ.',
      items: [
        { name: 'Bouquet du moment', desc: 'Composé selon l’arrivage du matin.', price: 'dès 25 €', tag: 'Best-seller', photo: '' },
        { name: 'Bouquet champêtre', desc: 'Fleurs des champs, esprit jardin anglais.', price: 'dès 35 €', tag: '', photo: '' },
        { name: 'Roses françaises', desc: 'La botte de 12, cultivées dans le Var.', price: '42 €', tag: '', photo: '' },
        { name: 'Plantes d’intérieur', desc: 'Faciles à vivre, rempotées avec soin.', price: 'dès 15 €', tag: '', photo: '' },
        { name: 'Fleurs séchées', desc: 'Des compositions qui durent toute l’année.', price: 'dès 29 €', tag: 'Nouveau', photo: '' },
        { name: 'Mariage & cérémonie', desc: 'Bouquet de mariée, déco de table, arche.', price: 'Sur devis', tag: 'Commande', photo: '' }
      ]
    },
    about: {
      title: 'Une passion qui fleurit',
      text: [
        'Après dix ans dans de grandes maisons parisiennes, Claire a ouvert son atelier en 2015 avec une idée simple : des fleurs de saison, choisies avec soin, et des bouquets qui ne ressemblent à aucun autre.',
        'Chaque matin, elle sélectionne les plus belles tiges chez des producteurs français pour composer des créations naturelles et généreuses.'
      ],
      signature: 'Claire, fleuriste', since: '2015', sinceLabel: 'de bouquets faits main',
      photo: '', photoLabel: 'Photo : la fleuriste en train de composer'
    },
    gallery: {
      title: 'L’atelier en images', subtitle: 'Un aperçu de nos dernières compositions.',
      items: [
        { photo: '', label: 'Un bouquet de mariée' }, { photo: '', label: 'La devanture' },
        { photo: '', label: 'Un détail de fleur' }, { photo: '', label: 'L’atelier' },
        { photo: '', label: 'Une décoration de table' }, { photo: '', label: 'Les plantes' }
      ]
    },
    reviews: {
      title: 'Ce que disent nos clients',
      items: [
        { name: 'Julie R.', stars: 5, text: 'Claire a réalisé toutes les fleurs de notre mariage. Tout le monde nous en parle encore !' },
        { name: 'Marc D.', stars: 5, text: 'Livré en deux heures pour un anniversaire oublié… Merci, vous m’avez sauvé.' },
        { name: 'Anne-Sophie T.', stars: 5, text: 'Des bouquets originaux et qui tiennent longtemps. Conseils toujours justes.' }
      ]
    },
    hours: {
      lun: [], mar: [['09:30', '19:00']], mer: [['09:30', '19:00']], jeu: [['09:30', '19:00']],
      ven: [['09:30', '19:30']], sam: [['09:00', '19:30']], dim: [['09:30', '13:00']]
    },
    hoursNote: 'Ouvertures exceptionnelles pour la Saint-Valentin et la fête des mères.',
    address: '4 place de l’Église', city: '60200 Votre ville', coords: [49.4179, 2.8261],
    phone: '03 44 00 00 01', email: 'contact@atelier-des-fleurs.fr',
    socials: { instagram: '#', facebook: '#' },
    cta: { title: 'Un événement à fleurir ?', text: 'Mariage, baptême, réception : prenons le temps d’en parler, devis gratuit sous 48 h.', button: 'Appeler l’atelier' }
  },

  cafe: {
    id: 'cafe', menuLabel: 'Café · Restaurant',
    type: 'Café · Bistrot', name: 'Le Comptoir', logo: '',
    colors: { primary: '#3b2620', accent: '#d07b45', paper: '#f6f0e8', ink: '#241712' },
    font: 'Fraunces',
    tagline: 'Café de spécialité & cuisine du marché.',
    intro: 'Un lieu chaleureux pour un espresso le matin, un déjeuner de produits frais le midi ou une pâtisserie maison l’après-midi.',
    heroPhoto: '', heroPhotoLabel: 'Photo principale : la salle ou une tasse en gros plan',
    rating: { score: '4,7', count: 214, source: 'Google' },
    highlights: [
      { icon: 'coffee', title: 'Torréfié localement', text: 'Nos grains viennent d’un torréfacteur de la région.' },
      { icon: 'leaf', title: 'Cuisine du marché', text: 'Une ardoise qui change chaque semaine.' },
      { icon: 'heart', title: 'Desserts maison', text: 'Cookies, cheesecakes et tartes du jour.' }
    ],
    products: {
      navLabel: 'La carte', title: 'À la carte', subtitle: 'Quelques classiques. L’ardoise du jour est à découvrir sur place.',
      items: [
        { name: 'Flat white', desc: 'Double espresso et lait micro-moussé.', price: '3,80 €', tag: 'Best-seller', photo: '' },
        { name: 'Brunch du dimanche', desc: 'Œufs, pain au levain, granola, jus pressé.', price: '22 €', tag: 'Le week-end', photo: '' },
        { name: 'Plat du jour', desc: 'Produits du marché, entrée + plat ou plat + dessert.', price: '16 €', tag: '', photo: '' },
        { name: 'Croque du Comptoir', desc: 'Jambon à l’os, comté 18 mois, salade.', price: '12 €', tag: '', photo: '' },
        { name: 'Cheesecake maison', desc: 'Coulis de fruits rouges, biscuit spéculoos.', price: '5,50 €', tag: '', photo: '' },
        { name: 'Privatisation', desc: 'Anniversaires, réunions, apéritifs jusqu’à 40 personnes.', price: 'Sur devis', tag: 'Groupes', photo: '' }
      ]
    },
    about: {
      title: 'Le café du quartier',
      text: [
        'Le Comptoir, c’est l’envie de deux amis de créer l’endroit où ils auraient aimé passer leurs matinées : du bon café, une cuisine simple et sincère, et une ambiance où l’on se sent chez soi.',
        'Ici, tout est préparé chaque jour en cuisine avec des produits de saison et des fournisseurs que l’on connaît par leur prénom.'
      ],
      signature: 'Léa & Thomas', since: '2019', sinceLabel: 'de cafés servis avec le sourire',
      photo: '', photoLabel: 'Photo : le comptoir et l’équipe'
    },
    gallery: {
      title: 'Ambiance', subtitle: 'Venez comme vous êtes.',
      items: [
        { photo: '', label: 'La salle' }, { photo: '', label: 'Le latte art' },
        { photo: '', label: 'Un plat du jour' }, { photo: '', label: 'La terrasse' },
        { photo: '', label: 'Les pâtisseries' }, { photo: '', label: 'Le brunch' }
      ]
    },
    reviews: {
      title: 'Nos habitués en parlent',
      items: [
        { name: 'Nina P.', stars: 5, text: 'Le meilleur café de la ville et un brunch à tomber. On y revient chaque dimanche.' },
        { name: 'Olivier G.', stars: 5, text: 'Plat du jour généreux, service rapide le midi, parfait pour une pause déjeuner.' },
        { name: 'Camille F.', stars: 4, text: 'Endroit cosy pour travailler, wifi rapide et cookies dangereux !' }
      ]
    },
    hours: {
      lun: [['08:00', '18:00']], mar: [['08:00', '18:00']], mer: [['08:00', '18:00']], jeu: [['08:00', '18:00']],
      ven: [['08:00', '22:00']], sam: [['09:00', '22:00']], dim: [['09:30', '15:00']]
    },
    hoursNote: 'Cuisine ouverte de 12 h à 14 h 30. Réservation conseillée le week-end.',
    address: '27 rue de la République', city: '60200 Votre ville', coords: [49.4179, 2.8261],
    phone: '03 44 00 00 02', email: 'salut@le-comptoir.fr',
    socials: { instagram: '#', facebook: '#' },
    cta: { title: 'On vous garde une table ?', text: 'Réservez par téléphone, ou passez simplement : il y a toujours une place au comptoir.', button: 'Réserver une table' }
  },

  boutique: {
    id: 'boutique', menuLabel: 'Boutique · Mode',
    type: 'Concept store · Mode & déco', name: 'Atelier Nord', logo: '',
    colors: { primary: '#1e1e20', accent: '#c4573a', paper: '#f4f2ee', ink: '#18181a' },
    font: 'Space Grotesk',
    tagline: 'Des pièces choisies, faites pour durer.',
    intro: 'Vêtements, accessoires et objets de créateurs européens. Une sélection courte, des matières nobles et des conseils sincères.',
    heroPhoto: '', heroPhotoLabel: 'Photo principale : la boutique ou une pièce de la collection',
    rating: { score: '4,9', count: 73, source: 'Google' },
    highlights: [
      { icon: 'award', title: 'Créateurs sélectionnés', text: 'Des marques éthiques et indépendantes.' },
      { icon: 'gift', title: 'Emballage cadeau offert', text: 'Et carte cadeau disponible en boutique.' },
      { icon: 'bag', title: 'Retours faciles', text: 'Échange ou avoir sous 30 jours.' }
    ],
    products: {
      navLabel: 'Collection', title: 'La sélection du moment', subtitle: 'Nouvelle collection chaque saison, en quantités limitées.',
      items: [
        { name: 'Pull en laine mérinos', desc: 'Tricoté au Portugal, coupe ample.', price: '119 €', tag: 'Nouveau', photo: '' },
        { name: 'Sac cabas en cuir', desc: 'Cuir tannage végétal, fait main.', price: '185 €', tag: 'Best-seller', photo: '' },
        { name: 'Chemise en lin', desc: 'Lin lavé français, cinq coloris.', price: '89 €', tag: '', photo: '' },
        { name: 'Bougie parfumée', desc: 'Cire végétale, notes de figuier.', price: '34 €', tag: '', photo: '' },
        { name: 'Céramiques', desc: 'Tasses et bols façonnés par une potière locale.', price: 'dès 22 €', tag: '', photo: '' },
        { name: 'Carte cadeau', desc: 'Le montant de votre choix, valable un an.', price: 'dès 20 €', tag: 'Cadeau', photo: '' }
      ]
    },
    about: {
      title: 'Moins, mais mieux',
      text: [
        'Atelier Nord est né d’une conviction : on n’a pas besoin de beaucoup de choses, mais de bonnes choses. Chaque pièce est choisie pour sa qualité, son histoire et sa capacité à traverser les saisons.',
        'Nous travaillons en direct avec une vingtaine de créateurs, que nous rencontrons et dont nous connaissons les ateliers.'
      ],
      signature: 'Inès, fondatrice', since: '2020', sinceLabel: 'de belles trouvailles',
      photo: '', photoLabel: 'Photo : l’intérieur de la boutique'
    },
    gallery: {
      title: 'Le lookbook', subtitle: 'Inspirations de la saison.',
      items: [
        { photo: '', label: 'Une tenue portée' }, { photo: '', label: 'La vitrine' },
        { photo: '', label: 'Un accessoire en détail' }, { photo: '', label: 'Le coin déco' },
        { photo: '', label: 'Les matières' }, { photo: '', label: 'Une nouvelle pièce' }
      ]
    },
    reviews: {
      title: 'Ils nous font confiance',
      items: [
        { name: 'Élodie V.', stars: 5, text: 'Une boutique pleine de goût, et des conseils vraiment honnêtes. Je ne repars jamais les mains vides.' },
        { name: 'Paul A.', stars: 5, text: 'Parfait pour trouver un cadeau original. L’emballage est superbe.' },
        { name: 'Sarah K.', stars: 5, text: 'Des vêtements de qualité qui durent. On sent la passion derrière chaque pièce.' }
      ]
    },
    hours: {
      lun: [], mar: [['10:00', '19:00']], mer: [['10:00', '19:00']], jeu: [['10:00', '19:00']],
      ven: [['10:00', '19:00']], sam: [['10:00', '19:30']], dim: []
    },
    hoursNote: 'Ouvert les dimanches de décembre.',
    address: '8 rue des Arts', city: '60200 Votre ville', coords: [49.4179, 2.8261],
    phone: '03 44 00 00 03', email: 'hello@atelier-nord.fr',
    socials: { instagram: '#', facebook: '#' },
    cta: { title: 'Besoin d’une idée cadeau ?', text: 'Dites-nous pour qui, on vous prépare une sélection et un joli paquet.', button: 'Appeler la boutique' }
  },

  salon: {
    id: 'salon', menuLabel: 'Coiffure · Beauté',
    type: 'Salon de coiffure · Barbier', name: 'Salon Lumière', logo: '',
    colors: { primary: '#5a3559', accent: '#d8a36a', paper: '#f8f4f2', ink: '#25182a' },
    font: 'Playfair Display',
    tagline: 'Prenez le temps de prendre soin de vous.',
    intro: 'Coupe, couleur, soins et barbe dans un salon calme et lumineux. Des produits naturels et une équipe à l’écoute.',
    heroPhoto: '', heroPhotoLabel: 'Photo principale : le salon ou une coiffure réalisée',
    rating: { score: '4,9', count: 187, source: 'Google' },
    highlights: [
      { icon: 'leaf', title: 'Produits naturels', text: 'Colorations végétales et soins sans sulfates.' },
      { icon: 'clock', title: 'Rendez-vous rapide', text: 'Souvent une place dans la semaine.' },
      { icon: 'scissors', title: 'Équipe experte', text: 'Quatre coiffeurs formés aux dernières tendances.' }
    ],
    products: {
      navLabel: 'Prestations', title: 'Nos prestations', subtitle: 'Tarifs indicatifs, selon la longueur et le type de cheveux.',
      items: [
        { name: 'Coupe femme', desc: 'Shampoing, coupe, brushing.', price: 'dès 38 €', tag: '', photo: '' },
        { name: 'Coupe homme', desc: 'Shampoing, coupe, coiffage.', price: '24 €', tag: 'Best-seller', photo: '' },
        { name: 'Couleur végétale', desc: 'Pigments naturels, brillance et douceur.', price: 'dès 55 €', tag: 'Naturel', photo: '' },
        { name: 'Balayage', desc: 'Effet soleil sur mesure, patine incluse.', price: 'dès 85 €', tag: '', photo: '' },
        { name: 'Taille de barbe', desc: 'Serviette chaude, rasoir, huile de soin.', price: '18 €', tag: '', photo: '' },
        { name: 'Coiffure de mariage', desc: 'Essai + jour J, à domicile possible.', price: 'Sur devis', tag: 'Événement', photo: '' }
      ]
    },
    about: {
      title: 'Bienvenue au salon',
      text: [
        'Salon Lumière, c’est un lieu pensé comme une parenthèse : de la lumière naturelle, de la musique douce, un café offert et une équipe qui prend le temps de vous écouter avant de toucher aux ciseaux.',
        'Nous nous formons chaque année aux nouvelles techniques et privilégions des produits respectueux de vos cheveux et de la planète.'
      ],
      signature: 'Nadia & l’équipe', since: '2011', sinceLabel: 'à prendre soin de vous',
      photo: '', photoLabel: 'Photo : l’équipe dans le salon'
    },
    gallery: {
      title: 'Nos réalisations', subtitle: 'Avant, après, et tout ce qu’il y a entre les deux.',
      items: [
        { photo: '', label: 'Un balayage réalisé' }, { photo: '', label: 'Le salon' },
        { photo: '', label: 'Une coupe homme' }, { photo: '', label: 'Les bacs à shampoing' },
        { photo: '', label: 'Une coiffure de mariée' }, { photo: '', label: 'Les produits' }
      ]
    },
    reviews: {
      title: 'Avis de nos clients',
      items: [
        { name: 'Laura M.', stars: 5, text: 'Enfin une coiffeuse qui écoute ! Mon balayage est exactement ce que je voulais.' },
        { name: 'Yanis C.', stars: 5, text: 'Coupe et barbe impeccables, ambiance détendue. Mon nouveau barbier.' },
        { name: 'Brigitte H.', stars: 5, text: 'Salon très propre, équipe adorable et couleur végétale magnifique.' }
      ]
    },
    hours: {
      lun: [], mar: [['09:00', '19:00']], mer: [['09:00', '19:00']], jeu: [['09:00', '20:00']],
      ven: [['09:00', '19:00']], sam: [['08:30', '17:00']], dim: []
    },
    hoursNote: 'Uniquement sur rendez-vous le jeudi soir.',
    address: '15 avenue de la Gare', city: '60200 Votre ville', coords: [49.4179, 2.8261],
    phone: '03 44 00 00 04', email: 'rdv@salon-lumiere.fr',
    socials: { instagram: '#', facebook: '#' },
    cta: { title: 'Envie de changement ?', text: 'Appelez-nous pour prendre rendez-vous, ou pour un diagnostic gratuit de vos cheveux.', button: 'Prendre rendez-vous' }
  }
};
