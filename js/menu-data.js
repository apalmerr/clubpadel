/**
 * Digital menu data — Club Pádel Sabor (Palma)
 * Names/descriptions per language; prices in EUR; dish photos.
 */
(function (global) {
  "use strict";

  var MENU = [
    {
      id: "nachos",
      category: "snacks",
      price: 8.5,
      tags: ["top"],
      image: "/assets/images/dishes/nachos.jpg",
      name: {
        es: "Nachos Club",
        ca: "Nachos Club",
        en: "Club Nachos",
        de: "Club-Nachos"
      },
      desc: {
        es: "Totopos, guacamole, cheddar fundido, jalapeños y pico de gallo.",
        ca: "Totopos, guacamole, cheddar fos, jalapeños i pico de gallo.",
        en: "Tortilla chips, guacamole, melted cheddar, jalapeños and pico de gallo.",
        de: "Tortilla-Chips, Guacamole, Cheddar, Jalapeños und Pico de Gallo."
      }
    },
    {
      id: "croquetas",
      category: "snacks",
      price: 7.9,
      tags: ["recommended"],
      image: "/assets/images/dishes/croquetas.jpg",
      name: {
        es: "Croquetas de jamón",
        ca: "Croquetes de pernil",
        en: "Ham croquettes",
        de: "Schinken-Kroketten"
      },
      desc: {
        es: "6 uds. cremosas, rebozado crujiente. Ideal para compartir.",
        ca: "6 unitats cremoses, arrebossat cruixent. Ideal per compartir.",
        en: "6 creamy croquettes with a crisp coating. Built for sharing.",
        de: "6 cremige Kroketten mit knuspriger Panade. Ideal zum Teilen."
      }
    },
    {
      id: "tabla",
      category: "snacks",
      price: 14.5,
      tags: ["top"],
      image: "/assets/images/dishes/tabla.jpg",
      name: {
        es: "Tabla Ibérica",
        ca: "Taula Ibèrica",
        en: "Iberian board",
        de: "Iberische Platte"
      },
      desc: {
        es: "Jamón, chorizo, queso curado, pan con tomate y aceitunas.",
        ca: "Pernil, xoriço, formatge curat, pa amb tomàquet i olives.",
        en: "Cured ham, chorizo, aged cheese, pan con tomate and olives.",
        de: "Schinken, Chorizo, gereifter Käse, Pan con Tomate und Oliven."
      }
    },
    {
      id: "patatas",
      category: "snacks",
      price: 6.5,
      tags: ["veggie"],
      image: "/assets/images/dishes/patatas.jpg",
      name: {
        es: "Patatas bravas Sabor",
        ca: "Patates braves Sabor",
        en: "Sabor bravas",
        de: "Sabor Bravas"
      },
      desc: {
        es: "Patatas crujientes con alioli y salsa brava del club.",
        ca: "Patates cruixents amb allioli i salsa brava del club.",
        en: "Crispy potatoes with aioli and the club's brava sauce.",
        de: "Knusprige Kartoffeln mit Aioli und der Club-Brava-Sauce."
      }
    },
    {
      id: "edamame",
      category: "snacks",
      price: 5.5,
      tags: ["veggie"],
      image: "/assets/images/dishes/edamame.jpg",
      name: {
        es: "Edamame con sal marina",
        ca: "Edamame amb sal marina",
        en: "Edamame with sea salt",
        de: "Edamame mit Meersalz"
      },
      desc: {
        es: "Al vapor, toque de lima y pimentón ahumado.",
        ca: "Al vapor, toc de llima i pebre vermell fumat.",
        en: "Steamed with lime and smoked paprika.",
        de: "Gedämpft mit Limette und geräuchertem Paprika."
      }
    },
    {
      id: "smash",
      category: "burgers",
      price: 12.9,
      tags: ["top", "recommended"],
      image: "/assets/images/dishes/smash.jpg",
      name: {
        es: "Smash Burger Doble",
        ca: "Smash Burger Doble",
        en: "Double Smash Burger",
        de: "Double Smash Burger"
      },
      desc: {
        es: "Dos smash de vacuno, cheddar, cebolla crispy y salsa secreta.",
        ca: "Dos smash de vedella, cheddar, ceba crispy i salsa secreta.",
        en: "Two beef smash patties, cheddar, crispy onion and secret sauce.",
        de: "Zwei Beef-Smash-Patties, Cheddar, Crispy Onion und Geheimsoße."
      }
    },
    {
      id: "padel-burger",
      category: "burgers",
      price: 13.5,
      tags: ["top"],
      image: "/assets/images/dishes/padel-burger.jpg",
      name: {
        es: "Burger Pista",
        ca: "Burger Pista",
        en: "Court Burger",
        de: "Court Burger"
      },
      desc: {
        es: "Vacuno 180g, bacon, huevo, queso y salsa chipotle.",
        ca: "Vedella 180g, bacon, ou, formatge i salsa chipotle.",
        en: "180g beef, bacon, egg, cheese and chipotle sauce.",
        de: "180g Rind, Bacon, Ei, Käse und Chipotle-Sauce."
      }
    },
    {
      id: "veggie-burger",
      category: "burgers",
      price: 12.5,
      tags: ["veggie", "recommended"],
      image: "/assets/images/dishes/veggie-burger.jpg",
      name: {
        es: "Burger Veggie Verde",
        ca: "Burger Veggie Verd",
        en: "Green Veggie Burger",
        de: "Grüner Veggie-Burger"
      },
      desc: {
        es: "Patty vegetal, aguacate, rúcula y mayo de hierbas.",
        ca: "Patty vegetal, alvocat, rúcula i maionesa d'herbes.",
        en: "Plant patty, avocado, rocket and herb mayo.",
        de: "Pflanzen-Patty, Avocado, Rucola und Kräuter-Mayo."
      }
    },
    {
      id: "bocata-calamares",
      category: "burgers",
      price: 11.5,
      tags: [],
      image: "/assets/images/dishes/bocata-calamares.jpg",
      name: {
        es: "Bocata de calamares",
        ca: "Bocata de calamars",
        en: "Squid sandwich",
        de: "Tintenfisch-Sandwich"
      },
      desc: {
        es: "Calamares a la andaluza, alioli y pan crujiente.",
        ca: "Calamars a l'andalusa, allioli i pa cruixent.",
        en: "Andalusian-style squid, aioli and crusty bread.",
        de: "Tintenfisch andalusisch, Aioli und knuspriges Brot."
      }
    },
    {
      id: "bocata-pollo",
      category: "burgers",
      price: 10.9,
      tags: ["recommended"],
      image: "/assets/images/dishes/bocata-pollo.jpg",
      name: {
        es: "Bocata pollo crispy",
        ca: "Bocata pollastre crispy",
        en: "Crispy chicken sandwich",
        de: "Crispy-Chicken-Sandwich"
      },
      desc: {
        es: "Pollo empanado, coleslaw y salsa honey-mustard.",
        ca: "Pollastre arrebossat, coleslaw i salsa honey-mustard.",
        en: "Breaded chicken, coleslaw and honey-mustard sauce.",
        de: "Paniertes Hähnchen, Coleslaw und Honig-Senf-Sauce."
      }
    },
    {
      id: "agua",
      category: "drinks",
      price: 2.2,
      tags: [],
      image: "/assets/images/dishes/agua.jpg",
      name: {
        es: "Agua mineral",
        ca: "Aigua mineral",
        en: "Mineral water",
        de: "Mineralwasser"
      },
      desc: {
        es: "33cl / 50cl · con o sin gas.",
        ca: "33cl / 50cl · amb o sense gas.",
        en: "33cl / 50cl · still or sparkling.",
        de: "33cl / 50cl · still oder sprudelnd."
      }
    },
    {
      id: "cerveza",
      category: "drinks",
      price: 2.8,
      tags: ["top"],
      image: "/assets/images/dishes/cerveza.jpg",
      name: {
        es: "Cerveza de barril",
        ca: "Cervesa de barril",
        en: "Draft beer",
        de: "Fassbier"
      },
      desc: {
        es: "Caña o jarra. Pregunta por la selección del día.",
        ca: "Canya o gerra. Pregunta per la selecció del dia.",
        en: "Small or large pour. Ask for today's selection.",
        de: "Kleine oder große Maß. Frag nach der Tagesauswahl."
      }
    },
    {
      id: "tinto",
      category: "drinks",
      price: 3.5,
      tags: [],
      image: "/assets/images/dishes/tinto.jpg",
      name: {
        es: "Tinto de verano",
        ca: "Vi negre d'estiu",
        en: "Tinto de verano",
        de: "Tinto de verano"
      },
      desc: {
        es: "Clásico, con limón y hielo. Perfecto en terraza.",
        ca: "Clàssic, amb llimona i gel. Perfecte a la terrassa.",
        en: "Classic with lemon and ice. Perfect on the terrace.",
        de: "Klassiker mit Zitrone und Eis. Perfekt auf der Terrasse."
      }
    },
    {
      id: "mocktail",
      category: "drinks",
      price: 5.5,
      tags: ["veggie", "recommended"],
      image: "/assets/images/dishes/mocktail.jpg",
      name: {
        es: "Mocktail Smash",
        ca: "Mocktail Smash",
        en: "Smash Mocktail",
        de: "Smash Mocktail"
      },
      desc: {
        es: "Lima, menta, ginger beer y un toque de hierbabuena.",
        ca: "Llima, menta, ginger beer i un toc de herba-sana.",
        en: "Lime, mint, ginger beer and a hint of spearmint.",
        de: "Limette, Minze, Ginger Beer und ein Hauch Spearmint."
      }
    },
    {
      id: "cafe",
      category: "drinks",
      price: 1.8,
      tags: [],
      image: "/assets/images/dishes/cafe.jpg",
      name: {
        es: "Café / Infusión",
        ca: "Cafè / Infusió",
        en: "Coffee / Tea",
        de: "Kaffee / Tee"
      },
      desc: {
        es: "Espresso, americano, cortado o selección de tés.",
        ca: "Espresso, americà, tallat o selecció de tes.",
        en: "Espresso, americano, cortado or tea selection.",
        de: "Espresso, Americano, Cortado oder Teeauswahl."
      }
    },
    {
      id: "brownie",
      category: "desserts",
      price: 5.9,
      tags: ["top"],
      image: "/assets/images/dishes/brownie.jpg",
      name: {
        es: "Brownie con helado",
        ca: "Brownie amb gelat",
        en: "Brownie with ice cream",
        de: "Brownie mit Eis"
      },
      desc: {
        es: "Chocolate intenso, nueces y bola de vainilla.",
        ca: "Xocolata intensa, nous i bola de vainilla.",
        en: "Rich chocolate, walnuts and a scoop of vanilla.",
        de: "Intensiver Schokolade, Nüsse und Vanilleeis."
      }
    },
    {
      id: "tarta",
      category: "desserts",
      price: 5.5,
      tags: ["recommended"],
      image: "/assets/images/dishes/tarta.jpg",
      name: {
        es: "Tarta de queso",
        ca: "Pastís de formatge",
        en: "Cheesecake",
        de: "Käsekuchen"
      },
      desc: {
        es: "Cremosa, base de galleta y coulis de frutos rojos.",
        ca: "Cremosa, base de galeta i coulis de fruits vermells.",
        en: "Creamy, biscuit base and berry coulis.",
        de: "Cremig, Keks-Boden und Beeren-Coulis."
      }
    },
    {
      id: "fruta",
      category: "desserts",
      price: 4.5,
      tags: ["veggie"],
      image: "/assets/images/dishes/fruta.jpg",
      name: {
        es: "Fruta de temporada",
        ca: "Fruita de temporada",
        en: "Seasonal fruit",
        de: "Saisonales Obst"
      },
      desc: {
        es: "Selección fresca del día. Ligera y perfecta post-partido.",
        ca: "Selecció fresca del dia. Lleugera i perfecta post-partit.",
        en: "Fresh daily selection. Light and perfect post-match.",
        de: "Frische Tagesauswahl. Leicht und perfekt nach dem Match."
      }
    }
  ];

  global.CPS_MENU = MENU;
})(typeof window !== "undefined" ? window : this);
