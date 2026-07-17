/* ==========================================================================
   VILLA KARO — CONTENT (V7)
   Alles was Ronny/Mudi ändern könnten liegt hier. HTML nicht anfassen nötig.
   ========================================================================== */

const CONTENT = {

  // ------------------------------------------------------------------------
  //  BILDER (Namen ohne Endung — .jpg + .webp existieren beide in /images)
  // ------------------------------------------------------------------------
  images: {
    hero: {
      '1': 'pool_relax_01',
      '2': 'v2_pool_01',
    },
    villaTour: {
      '1': ['lounge_01', 'sleeping_01', 'kitchen_01', 'bath_01'],
      '2': ['v2_lounge_01', 'v2_sleeping_01', 'v2_kitchen_01', 'v2_bath_01'],
    },
    dayNight: {
      '1': [
        { day: 'pool_relax_02', night: 'pool_relax_night_01' },
        { day: 'lounge_02',     night: 'lounge_night_01'     },
        { day: 'entrance_01',   night: 'entrance_night_01'   },
      ],
      '2': [
        { day: 'v2_pool_01',     night: 'v2_pool_night_01'         },
        { day: 'v2_garden_01',   night: 'v2_garden_evening_01'     },
        { day: 'v2_entrance_01', night: 'v2_entrance_night_01'     },
      ],
    },
    gallery: {
      '1': [
        { name: 'sleeping_01',         span: 'tall', alt: 'Schlafzimmer bei Tag' },
        { name: 'garden_night_01',     span: 'wide', alt: 'Garten bei Nacht' },
        { name: 'pool_night_01',                     alt: 'Pool bei Nacht' },
        { name: 'relax_01',                          alt: 'Entspannung im Grünen' },
        { name: 'sleeping_entrance',                 alt: 'Zugang zum Schlafzimmer' },
        { name: 'entrance_night_02',   span: 'wide', alt: 'Eingang bei Nacht' },
        { name: 'pool_relax_night_03',               alt: 'Poolbereich bei Nacht' },
        { name: 'pool_relax_night_04', span: 'wide', alt: 'Nächtlicher Pool' },
        { name: 'sleeping_02',                       alt: 'Schlafzimmer Detail' },
        { name: 'sleeping_night_01',                 alt: 'Schlafzimmer bei Nacht' },
        { name: 'sleeping_03',                       alt: 'Schlafzimmer Blick' },
        { name: 'sleeping_night_02',                 alt: 'Schlafzimmer bei Nacht' },
        { name: 'sleeping_04',                       alt: 'Schlafzimmer Übersicht' },
      ],
      '2': [
        { name: 'v2_pool_buddha_01',    span: 'tall', alt: 'Pool mit Buddha' },
        { name: 'v2_overview_night_01', span: 'wide', alt: 'Villa 2 bei Nacht' },
        { name: 'v2_pool_02',                         alt: 'Pool Villa 2' },
        { name: 'v2_pool_relax_01',                   alt: 'Poolbereich Villa 2' },
        { name: 'v2_pool_relax_02',                   alt: 'Poolbereich Villa 2' },
        { name: 'v2_lounge_02',         span: 'wide', alt: 'Lounge Villa 2' },
        { name: 'v2_kitchen_02',                      alt: 'Küche Villa 2' },
        { name: 'v2_pool_night_02',     span: 'wide', alt: 'Pool bei Nacht' },
        { name: 'v2_relax_night_01',                  alt: 'Entspannung bei Nacht' },
        { name: 'v2_sleeping_02',                     alt: 'Schlafzimmer Villa 2' },
      ],
    },
  },

  // ------------------------------------------------------------------------
  //  PREISE (IDR + Konvertierungen)
  // ------------------------------------------------------------------------
  rates: {
    villa1: 3000000,
    villa2: 2500000,
    conversions: {
      EUR: { v1: 175, v2: 145 },
      USD: { v1: 190, v2: 160 },
    },
  },

  // ------------------------------------------------------------------------
  //  KONTAKT
  // ------------------------------------------------------------------------
  contact: {
    phone:    '+62 823 4133 9290',
    whatsapp: '+62 823 4133 9290',
    email:    'hello@villa-karo.com',
    owner:    'Mr. Gede Mudiarta',
    address:  'Desa Pemuteran, Buleleng, Bali',
  },

  // ------------------------------------------------------------------------
  //  ÜBERSETZUNGEN — ID fällt automatisch auf EN zurück
  // ------------------------------------------------------------------------
  translations: {

    // ---------- DEUTSCH -----------------------------------------------
    de: {
      nav: { welcome:'Willkommen', villen:'Die Villen', dayNight:'Tag & Nacht', galerie:'Galerie', preise:'Preise', kontakt:'Kontakt' },
      hero: {
        eyebrow: 'Pemuteran · Bali',
        title:   { villa1: 'Villa KaRo 1', villa2: 'Villa KaRo 2' },
        sub:     'Zwei private Poolvillen. Ein stiller Ort. Ihr Bali.',
        cta:     'Villen entdecken',
        scroll:  'Scrollen',
      },
      willkommen: {
        eyebrow: 'Willkommen',
        title:   'Zwei Häuser, ein Ort.',
        lead:    'Zwischen Bergen und Meer, weit weg vom Trubel des Südens, liegen zwei Villen dicht beieinander: Villa KaRo 1 und Villa KaRo 2. Zwei eigene Grundstücke, zwei private Pools, zwei Rückzugsorte — für Paare, die ein anderes Bali suchen.',
      },
      villaAuswahl: {
        eyebrow:  'Die Villen',
        title:    'Wählen Sie Ihr Refugium.',
        intro:    'Villa KaRo 1 und 2 sind Zwillingsvillen — gleiches Konzept, gleicher Standort, gleiche Ausstattung. Der einzige Unterschied: Villa 1 ist eine Idee grösser.',
        features: '1 Schlafzimmer · Pool · Garten',
        perNight: 'pro Nacht',
        cta:      'Details ansehen →',
      },
      villaDetail: {
        eyebrow: 'Ein Rundgang',
        title:   'Vier Räume, ein Gefühl.',
        lead:    'Klassische balinesische Bauweise: Wohnbereich, Küche und Bad sind teilüberdacht — Innenraum und Garten fließen ineinander. Nur das Schlafzimmer im Zentrum ist geschlossen und klimatisiert.',
        rooms: [
          { title: 'Wohnbereich', desc: 'Überdachte Lounge, offen zum Garten — der Übergang zwischen Innen und Außen.' },
          { title: 'Schlafen',    desc: 'Zentral im Haus, klimatisiert, blickgeschützt — Ihr ruhiger Kern.' },
          { title: 'Küche',       desc: 'Teilüberdacht im typischen Bali-Stil — kochen mit dem Garten vor der Nase.' },
          { title: 'Bad',         desc: 'Teilüberdacht, offen ins Grüne — Duschen unter freiem Himmel.' },
        ],
      },
      dayNight: {
        eyebrow: 'Ein Ort, zwei Stimmungen',
        title:   'Tag & Nacht.',
        lead:    'Berühren Sie eine Karte, um die Nacht zu sehen.',
        hint:    'Nacht',
        labels:  { '1': ['Am Pool', 'Wohnbereich', 'Eingang'], '2': ['Am Pool', 'Im Garten', 'Eingang'] },
      },
      erleben: {
        eyebrow: 'Erleben',
        title:   'Bali, wie Sie es sich erträumt haben.',
        lead:    'Pemuteran ist Balis stiller Norden — abseits vom Trubel, nahe an einigen der schönsten Riffe und Rituale der Insel.',
        yoga:    { title: 'Yoga im Garten',    desc: 'Beginnen Sie den Tag mit dem Klang der Vögel — Ihre Matte ist schon ausgerollt.' },
        reef:    { title: 'Menjangan Reef',    desc: 'Schnorcheln und Tauchen an einem der intaktesten Riffe Balis, nur eine Bootsfahrt entfernt.' },
        sunset:  { title: 'Sonnenuntergänge',  desc: 'Der Strand liegt vor der Tür — mit einem Glas Wein in der Hand die Farben wechseln sehen.' },
        spa:     { title: 'In-Villa Spa',      desc: 'Balinesische Massage direkt an Ihrem Pool — auf Wunsch arrangieren wir alles.' },
      },
      galerie: {
        eyebrow: 'Galerie',
        lead:    'Farben, Licht und Ruhe — hier ein Eindruck, wie Ihr Aufenthalt aussehen kann.',
      },
      location: {
        eyebrow: 'Standort',
        title:   'Pemuteran — Balis ruhiger Norden',
        lead:    'Eingebettet zwischen Bergen und Meer, weit weg vom Trubel des Südens. Ein Ort für alle, die ein anderes Bali suchen: langsamer, ehrlicher, tiefer.',
        fact1:   'Minuten zum Strand',
        fact2:   'Minuten zum Menjangan-Riff',
        fact3:   'Fahrt vom Flughafen Denpasar',
      },
      preise: {
        eyebrow:   'Preise',
        lead:      'Alle Preise pro Nacht, inklusive Housekeeping und WiFi.',
        perNight:  'pro Nacht',
        feature1:  '1 Schlafzimmer · Kingsize',
        feature2:  'Privater Pool',
        feature3:  'Tropischer Garten',
        feature4:  'Housekeeping & WiFi',
        details:   'Mindestaufenthalt 3 Nächte. Saisonale Preise auf Anfrage. Wir freuen uns, Ihnen ein persönliches Angebot zu machen.',
        cta:       'Verfügbarkeit anfragen',
      },
      testimonials: {
        eyebrow: 'Stimmen unserer Gäste',
        title:   'Was Gäste erzählen',
        q1: 'Die perfekte Mischung aus Luxus und Ruhe. Wir sind erholt zurückgekommen wie schon lange nicht mehr.',
        a1: 'Anna & Michael · Berlin',
        q2: 'Ein Ort mit Seele. Der Garten allein war die Reise wert — und der Gastgeber ein wunderbarer.',
        a2: 'Julia & Tom · Hamburg',
        q3: 'Wir kommen wieder. So einfach ist das. Pemuteran ist ein Geheimnis, das man kennen sollte.',
        a3: 'Sophie & David · Zürich',
      },
      contact: {
        eyebrow: 'Kontakt',
        title:   'Schreiben Sie uns.',
        lead:    'Anfrage, Verfügbarkeit, Wünsche — Mr. Gede Mudiarta antwortet persönlich, meist innerhalb eines Tages.',
        name: 'Name', email: 'E-Mail', arrival: 'Anreise', departure: 'Abreise',
        villaField: 'Villa', messageLabel: 'Nachricht',
        messagePlaceholder: 'Erzählen Sie uns von Ihrer Reise…',
        submit: 'Anfrage senden',
        eitherOption: 'Egal / Beraten Sie mich',
        bothOption:   'Beide (Familien / Freunde)',
        role: 'Ihr Ansprechpartner vor Ort',
        emailLabel: 'E-Mail', phoneLabel: 'Telefon', addressLabel: 'Adresse',
        formSuccess: 'Danke! Dies ist eine Demo-Seite — Ihre Anfrage würde hier übermittelt werden.',
      },
      footer: {
        tag: '— Zwei private Rückzugsorte in Pemuteran, Bali —',
        ownerLabel: 'Owner:',
        copyright: '© 2026 Villa KaRo · Alle Rechte vorbehalten',
      },
    },

    // ---------- ENGLISH -----------------------------------------------
    en: {
      nav: { welcome:'Welcome', villen:'The Villas', dayNight:'Day & Night', galerie:'Gallery', preise:'Rates', kontakt:'Contact' },
      hero: {
        eyebrow: 'Pemuteran · Bali',
        title:   { villa1: 'Villa KaRo 1', villa2: 'Villa KaRo 2' },
        sub:     'Two private pool villas. One quiet place. Your Bali.',
        cta:     'Discover the villas',
        scroll:  'Scroll',
      },
      willkommen: {
        eyebrow: 'Welcome',
        title:   'Two houses, one place.',
        lead:    'Between mountains and sea, far from the bustle of the south, two villas sit right next to each other: Villa KaRo 1 and Villa KaRo 2. Two separate plots, two private pools, two retreats — for couples looking for a different Bali.',
      },
      villaAuswahl: {
        eyebrow:  'The Villas',
        title:    'Choose your retreat.',
        intro:    'Villa KaRo 1 and 2 are twin villas — same concept, same location, same amenities. The only difference: Villa 1 is a touch more spacious.',
        features: '1 bedroom · Pool · Garden',
        perNight: 'per night',
        cta:      'See details →',
      },
      villaDetail: {
        eyebrow: 'A tour',
        title:   'Four rooms, one feeling.',
        lead:    'Classic Balinese architecture: living area, kitchen and bathroom are partially open-air — interior and garden flow into each other. Only the bedroom at the centre is fully enclosed and air-conditioned.',
        rooms: [
          { title: 'Living area', desc: 'Covered lounge, open to the garden — where inside meets outside.' },
          { title: 'Bedroom',     desc: 'At the heart of the house, air-conditioned, private — your quiet core.' },
          { title: 'Kitchen',     desc: 'Partially open-air in typical Balinese style — cook with the garden right in front of you.' },
          { title: 'Bathroom',    desc: 'Partially open-air, facing the greenery — shower under an open sky.' },
        ],
      },
      dayNight: {
        eyebrow: 'One place, two moods',
        title:   'Day & Night.',
        lead:    'Tap a card to see the night.',
        hint:    'Night',
        labels:  { '1': ['By the pool', 'Living area', 'Entrance'], '2': ['By the pool', 'In the garden', 'Entrance'] },
      },
      erleben: {
        eyebrow: 'Experience',
        title:   'Bali the way you dreamed it.',
        lead:    'Pemuteran is Bali\'s quiet north — away from the crowds, close to some of the most beautiful reefs and rituals of the island.',
        yoga:    { title: 'Yoga in the garden', desc: 'Start the day with the sound of birds — your mat is already rolled out.' },
        reef:    { title: 'Menjangan Reef',     desc: 'Snorkel and dive at one of Bali\'s most intact reefs, just a boat ride away.' },
        sunset:  { title: 'Sunsets',            desc: 'The beach is at your doorstep — watch the colors change with a glass of wine in hand.' },
        spa:     { title: 'In-villa spa',       desc: 'Balinese massage right at your pool — we arrange everything on request.' },
      },
      galerie: {
        eyebrow: 'Gallery',
        lead:    'Colors, light and calm — a glimpse of what your stay could look like.',
      },
      location: {
        eyebrow: 'Location',
        title:   'Pemuteran — Bali\'s quiet north',
        lead:    'Nestled between mountains and sea, far from the bustle of the south. A place for those looking for a different Bali: slower, more honest, deeper.',
        fact1:   'minutes to the beach',
        fact2:   'minutes to Menjangan Reef',
        fact3:   'drive from Denpasar airport',
      },
      preise: {
        eyebrow:   'Rates',
        lead:      'All rates per night, housekeeping and WiFi included.',
        perNight:  'per night',
        feature1:  '1 bedroom · Kingsize',
        feature2:  'Private pool',
        feature3:  'Tropical garden',
        feature4:  'Housekeeping & WiFi',
        details:   'Minimum stay 3 nights. Seasonal rates on request. We\'d be delighted to send you a personal offer.',
        cta:       'Enquire about availability',
      },
      testimonials: {
        eyebrow: 'What guests say',
        title:   'Guest voices',
        q1: 'The perfect mix of luxury and calm. We came back more rested than we\'ve been in years.',
        a1: 'Anna & Michael · Berlin',
        q2: 'A place with soul. The garden alone was worth the trip — and a wonderful host to top it off.',
        a2: 'Julia & Tom · Hamburg',
        q3: 'We\'ll be back. Simple as that. Pemuteran is a secret worth knowing.',
        a3: 'Sophie & David · Zurich',
      },
      contact: {
        eyebrow: 'Contact',
        title:   'Get in touch.',
        lead:    'Enquiries, availability, wishes — Mr. Gede Mudiarta replies personally, usually within a day.',
        name: 'Name', email: 'Email', arrival: 'Arrival', departure: 'Departure',
        villaField: 'Villa', messageLabel: 'Message',
        messagePlaceholder: 'Tell us about your trip…',
        submit: 'Send enquiry',
        eitherOption: 'No preference / Advise me',
        bothOption:   'Both (families / friends)',
        role: 'Your host on site',
        emailLabel: 'Email', phoneLabel: 'Phone', addressLabel: 'Address',
        formSuccess: 'Thank you! This is a demo page — your enquiry would be submitted here.',
      },
      footer: {
        tag: '— Two private retreats in Pemuteran, Bali —',
        ownerLabel: 'Owner:',
        copyright: '© 2026 Villa KaRo · All rights reserved',
      },
    },

    // ---------- INDONESIAN (fällt automatisch auf EN zurück) -----------
    // Sobald echte Übersetzungen vorliegen, hier den Zweig füllen.
    id: {
      // vorerst leer — Fallback auf en
    },
  },
};