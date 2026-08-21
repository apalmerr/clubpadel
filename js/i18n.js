/**
 * Club Pádel Sabor — i18n (es | ca | en | de)
 * Preference persisted in localStorage under "cps_lang".
 */
(function (global) {
  "use strict";

  var STORAGE_KEY = "cps_lang";
  var SUPPORTED = ["es", "ca", "en", "de"];
  var DEFAULT_LANG = "es";

  var translations = {
    es: {
      "meta.title": "Club Pádel Sabor — Bar & Restaurante",
      "meta.description":
        "Bar y restaurante del Club Pádel Sabor. Tapas, burgers, ambiente deportivo y carta digital. Reserva o pide por WhatsApp.",
      "meta.cartaTitle": "Carta Digital — Club Pádel Sabor",
      "meta.cartaDescription":
        "Consulta la carta digital del bar Club Pádel Sabor: para picar, burgers, bebidas y postres.",
      "nav.home": "Inicio",
      "nav.experience": "Experiencia",
      "nav.gallery": "Galería",
      "nav.hours": "Horarios",
      "nav.menu": "Carta",
      "nav.contact": "Contacto",
      "nav.qrMenu": "Ver Carta QR",
      "nav.openMenu": "Abrir menú",
      "nav.closeMenu": "Cerrar menú",
      "brand.tag": "Bar",
      "hero.kicker": "Bar · Restaurante · Club de pádel",
      "hero.title": "Juega. Come. Disfruta.",
      "hero.subtitle":
        "El sabor del club: tapas, burgers y buen ambiente tras cada partido.",
      "hero.ctaMenu": "Ver Carta Digital",
      "hero.ctaWhatsapp": "Contacto / WhatsApp",
      "exp.kicker": "La experiencia",
      "exp.title": "Más que un bar de club",
      "exp.subtitle":
        "Cocina cercana, producto fresco y un espacio pensado para celebrar cada punto ganado.",
      "exp.tapas.title": "Tapas & Para picar",
      "exp.tapas.text":
        "Raciones para compartir entre partidos: croquetas, nachos, tablas y clasicos con toque del club.",
      "exp.burgers.title": "Burgers & Bocatas",
      "exp.burgers.text":
        "Hamburguesas jugosas y bocatas generosos, ideales despues de un tie-break.",
      "exp.ambiance.title": "Ambiente de pista",
      "exp.ambiance.text":
        "Terraza, partidos en pantalla y esa energia que solo se respira en un club de padel.",
      "gallery.kicker": "Galería",
      "gallery.title": "Platos y ambiente",
      "gallery.subtitle": "Un vistazo a lo que te espera en Club Padel Sabor.",
      "gallery.open": "Ampliar imagen",
      "gallery.close": "Cerrar",
      "hours.kicker": "Planifica tu visita",
      "hours.title": "Horarios & Ubicación",
      "hours.kitchen": "Horario de cocina",
      "hours.weekdays": "Lunes a Viernes",
      "hours.weekdaysTime": "12:00 – 23:00",
      "hours.weekend": "Sábado y Domingo",
      "hours.weekendTime": "11:00 – 00:00",
      "hours.note": "Cocina caliente hasta 45 min antes del cierre.",
      "hours.map": "Cómo llegar",
      "hours.address": "Calle del Club, 1 · 08000 Barcelona",
      "footer.tagline": "Bar & restaurante del club. Sabor tras cada set.",
      "footer.social": "Síguenos",
      "footer.legal": "Legal",
      "footer.privacy": "Privacidad",
      "footer.cookies": "Cookies",
      "footer.legalNotice": "Aviso legal",
      "footer.rights": "Todos los derechos reservados.",
      "cookie.message":
        "Usamos cookies propias esenciales y, si aceptas, analiticas para mejorar la web. Consulta la",
      "cookie.policy": "politica de cookies",
      "cookie.accept": "Aceptar",
      "cookie.reject": "Solo esenciales",
      "carta.back": "Volver",
      "carta.title": "Carta Padel Sabor",
      "carta.search": "Buscar plato…",
      "carta.empty": "No hay platos con ese filtro.",
      "carta.tab.snacks": "Para Picar",
      "carta.tab.burgers": "Burgers & Bocatas",
      "carta.tab.drinks": "Bebidas",
      "carta.tab.desserts": "Postres",
      "carta.fab": "Pedir por WhatsApp",
      "carta.priceFrom": "desde",
      "tag.top": "Top",
      "tag.veggie": "Veggie",
      "tag.recommended": "Recomendado",
      "error404.title": "¡Te has salido de la pista!",
      "error404.text": "Esta página no existe. Vuelve al club y sigue disfrutando.",
      "error404.cta": "Volver al inicio",
      "legal.privacyTitle": "Política de Privacidad",
      "legal.cookiesTitle": "Política de Cookies",
      "legal.noticeTitle": "Aviso Legal",
      "legal.updated": "Última actualización:",
      "legal.backHome": "Volver al inicio"
    },
    ca: {
      "meta.title": "Club Pàdel Sabor — Bar & Restaurant",
      "meta.description":
        "Bar i restaurant del Club Pàdel Sabor. Tapes, burgers, ambient esportiu i carta digital. Reserva o demana per WhatsApp.",
      "meta.cartaTitle": "Carta Digital — Club Pàdel Sabor",
      "meta.cartaDescription":
        "Consulta la carta digital del bar Club Pàdel Sabor: per picar, burgers, begudes i postres.",
      "nav.home": "Inici",
      "nav.experience": "Experiència",
      "nav.gallery": "Galeria",
      "nav.hours": "Horaris",
      "nav.menu": "Carta",
      "nav.contact": "Contacte",
      "nav.qrMenu": "Veure Carta QR",
      "nav.openMenu": "Obrir menú",
      "nav.closeMenu": "Tancar menú",
      "brand.tag": "Bar",
      "hero.kicker": "Bar · Restaurant · Club de pàdel",
      "hero.title": "Juga. Menja. Gaudeix.",
      "hero.subtitle":
        "El sabor del club: tapes, burgers i bon ambient després de cada partit.",
      "hero.ctaMenu": "Veure Carta Digital",
      "hero.ctaWhatsapp": "Contacte / WhatsApp",
      "exp.kicker": "L'experiència",
      "exp.title": "Més que un bar de club",
      "exp.subtitle":
        "Cuina propera, producte fresc i un espai pensat per celebrar cada punt guanyat.",
      "exp.tapas.title": "Tapes & Per picar",
      "exp.tapas.text":
        "Racions per compartir entre partits: croquetes, nachos, taules i clàssics amb toc del club.",
      "exp.burgers.title": "Burgers & Bocates",
      "exp.burgers.text":
        "Hamburgueses sucoses i bocates generosos, ideals després d'un tie-break.",
      "exp.ambiance.title": "Ambient de pista",
      "exp.ambiance.text":
        "Terrassa, partits a la pantalla i aquesta energia que només es respira en un club de pàdel.",
      "gallery.kicker": "Galeria",
      "gallery.title": "Plats i ambient",
      "gallery.subtitle": "Una ullada al que t'espera al Club Pàdel Sabor.",
      "gallery.open": "Ampliar imatge",
      "gallery.close": "Tancar",
      "hours.kicker": "Planifica la visita",
      "hours.title": "Horaris & Ubicació",
      "hours.kitchen": "Horari de cuina",
      "hours.weekdays": "Dilluns a Divendres",
      "hours.weekdaysTime": "12:00 – 23:00",
      "hours.weekend": "Dissabte i Diumenge",
      "hours.weekendTime": "11:00 – 00:00",
      "hours.note": "Cuina calenta fins 45 min abans del tancament.",
      "hours.map": "Com arribar",
      "hours.address": "Carrer del Club, 1 · 08000 Barcelona",
      "footer.tagline": "Bar & restaurant del club. Sabor després de cada set.",
      "footer.social": "Segueix-nos",
      "footer.legal": "Legal",
      "footer.privacy": "Privacitat",
      "footer.cookies": "Cookies",
      "footer.legalNotice": "Avís legal",
      "footer.rights": "Tots els drets reservats.",
      "cookie.message":
        "Fem servir cookies pròpies essencials i, si acceptes, analítiques per millorar la web. Consulta la",
      "cookie.policy": "política de cookies",
      "cookie.accept": "Acceptar",
      "cookie.reject": "Només essencials",
      "carta.back": "Tornar",
      "carta.title": "Carta Pàdel Sabor",
      "carta.search": "Cercar plat…",
      "carta.empty": "No hi ha plats amb aquest filtre.",
      "carta.tab.snacks": "Per Picar",
      "carta.tab.burgers": "Burgers & Bocates",
      "carta.tab.drinks": "Begudes",
      "carta.tab.desserts": "Postres",
      "carta.fab": "Demanar per WhatsApp",
      "carta.priceFrom": "des de",
      "tag.top": "Top",
      "tag.veggie": "Veggie",
      "tag.recommended": "Recomanat",
      "error404.title": "T'has sortit de la pista!",
      "error404.text": "Aquesta pàgina no existeix. Torna al club i continua gaudint.",
      "error404.cta": "Tornar a l'inici",
      "legal.privacyTitle": "Política de Privacitat",
      "legal.cookiesTitle": "Política de Cookies",
      "legal.noticeTitle": "Avís Legal",
      "legal.updated": "Última actualització:",
      "legal.backHome": "Tornar a l'inici"
    },
    en: {
      "meta.title": "Club Pádel Sabor — Bar & Restaurant",
      "meta.description":
        "Bar and restaurant at Club Pádel Sabor. Tapas, burgers, sporty vibe and digital menu. Book or order via WhatsApp.",
      "meta.cartaTitle": "Digital Menu — Club Pádel Sabor",
      "meta.cartaDescription":
        "Browse the Club Pádel Sabor digital menu: snacks, burgers, drinks and desserts.",
      "nav.home": "Home",
      "nav.experience": "Experience",
      "nav.gallery": "Gallery",
      "nav.hours": "Hours",
      "nav.menu": "Menu",
      "nav.contact": "Contact",
      "nav.qrMenu": "View QR Menu",
      "nav.openMenu": "Open menu",
      "nav.closeMenu": "Close menu",
      "brand.tag": "Bar",
      "hero.kicker": "Bar · Restaurant · Padel club",
      "hero.title": "Play. Eat. Enjoy.",
      "hero.subtitle":
        "Club flavour: tapas, burgers and great vibes after every match.",
      "hero.ctaMenu": "View Digital Menu",
      "hero.ctaWhatsapp": "Contact / WhatsApp",
      "exp.kicker": "The experience",
      "exp.title": "More than a club bar",
      "exp.subtitle":
        "Homely cooking, fresh produce and a space made to celebrate every winning point.",
      "exp.tapas.title": "Tapas & Snacks",
      "exp.tapas.text":
        "Sharing plates between matches: croquettes, nachos, boards and club classics.",
      "exp.burgers.title": "Burgers & Sandwiches",
      "exp.burgers.text":
        "Juicy burgers and generous sandwiches — perfect after a tie-break.",
      "exp.ambiance.title": "Court atmosphere",
      "exp.ambiance.text":
        "Terrace, matches on screen and that energy you only feel at a padel club.",
      "gallery.kicker": "Gallery",
      "gallery.title": "Food & vibe",
      "gallery.subtitle": "A glimpse of what awaits at Club Pádel Sabor.",
      "gallery.open": "Enlarge image",
      "gallery.close": "Close",
      "hours.kicker": "Plan your visit",
      "hours.title": "Hours & Location",
      "hours.kitchen": "Kitchen hours",
      "hours.weekdays": "Monday to Friday",
      "hours.weekdaysTime": "12:00 – 23:00",
      "hours.weekend": "Saturday & Sunday",
      "hours.weekendTime": "11:00 – 00:00",
      "hours.note": "Hot kitchen closes 45 minutes before closing time.",
      "hours.map": "How to get here",
      "hours.address": "Calle del Club, 1 · 08000 Barcelona",
      "footer.tagline": "The club bar & restaurant. Flavour after every set.",
      "footer.social": "Follow us",
      "footer.legal": "Legal",
      "footer.privacy": "Privacy",
      "footer.cookies": "Cookies",
      "footer.legalNotice": "Legal notice",
      "footer.rights": "All rights reserved.",
      "cookie.message":
        "We use essential first-party cookies and, if you accept, analytics to improve the site. See our",
      "cookie.policy": "cookie policy",
      "cookie.accept": "Accept",
      "cookie.reject": "Essential only",
      "carta.back": "Back",
      "carta.title": "Pádel Sabor Menu",
      "carta.search": "Search dish…",
      "carta.empty": "No dishes match that filter.",
      "carta.tab.snacks": "Snacks",
      "carta.tab.burgers": "Burgers & Sandwiches",
      "carta.tab.drinks": "Drinks",
      "carta.tab.desserts": "Desserts",
      "carta.fab": "Order on WhatsApp",
      "carta.priceFrom": "from",
      "tag.top": "Top",
      "tag.veggie": "Veggie",
      "tag.recommended": "Recommended",
      "error404.title": "You've left the court!",
      "error404.text": "This page doesn't exist. Head back to the club and keep enjoying.",
      "error404.cta": "Back to home",
      "legal.privacyTitle": "Privacy Policy",
      "legal.cookiesTitle": "Cookie Policy",
      "legal.noticeTitle": "Legal Notice",
      "legal.updated": "Last updated:",
      "legal.backHome": "Back to home"
    },
    de: {
      "meta.title": "Club Pádel Sabor — Bar & Restaurant",
      "meta.description":
        "Bar und Restaurant im Club Pádel Sabor. Tapas, Burger, sportliche Atmosphäre und digitale Speisekarte. Reservieren oder per WhatsApp bestellen.",
      "meta.cartaTitle": "Digitale Speisekarte — Club Pádel Sabor",
      "meta.cartaDescription":
        "Digitale Speisekarte der Bar Club Pádel Sabor: Snacks, Burger, Getränke und Desserts.",
      "nav.home": "Start",
      "nav.experience": "Erlebnis",
      "nav.gallery": "Galerie",
      "nav.hours": "Zeiten",
      "nav.menu": "Karte",
      "nav.contact": "Kontakt",
      "nav.qrMenu": "QR-Karte ansehen",
      "nav.openMenu": "Menü öffnen",
      "nav.closeMenu": "Menü schließen",
      "brand.tag": "Bar",
      "hero.kicker": "Bar · Restaurant · Padelclub",
      "hero.title": "Spielen. Essen. Genießen.",
      "hero.subtitle":
        "Clubgeschmack: Tapas, Burger und gute Stimmung nach jedem Match.",
      "hero.ctaMenu": "Digitale Karte ansehen",
      "hero.ctaWhatsapp": "Kontakt / WhatsApp",
      "exp.kicker": "Das Erlebnis",
      "exp.title": "Mehr als eine Clubbar",
      "exp.subtitle":
        "Heimatliche Küche, frische Produkte und ein Ort zum Feiern jedes gewonnenen Punkts.",
      "exp.tapas.title": "Tapas & Snacks",
      "exp.tapas.text":
        "Portionen zum Teilen zwischen Matches: Kroketten, Nachos, Bretter und Club-Klassiker.",
      "exp.burgers.title": "Burger & Sandwiches",
      "exp.burgers.text":
        "Saftige Burger und großzügige Sandwiches — ideal nach einem Tie-Break.",
      "exp.ambiance.title": "Platzatmosphäre",
      "exp.ambiance.text":
        "Terrasse, Matches auf dem Screen und die Energie, die man nur in einem Padelclub spürt.",
      "gallery.kicker": "Galerie",
      "gallery.title": "Gerichte & Ambiente",
      "gallery.subtitle": "Ein Einblick in das, was dich im Club Pádel Sabor erwartet.",
      "gallery.open": "Bild vergrößern",
      "gallery.close": "Schließen",
      "hours.kicker": "Besuch planen",
      "hours.title": "Öffnungszeiten & Lage",
      "hours.kitchen": "Küchenzeiten",
      "hours.weekdays": "Montag bis Freitag",
      "hours.weekdaysTime": "12:00 – 23:00",
      "hours.weekend": "Samstag & Sonntag",
      "hours.weekendTime": "11:00 – 00:00",
      "hours.note": "Heiße Küche bis 45 Min. vor Schließung.",
      "hours.map": "Anfahrt",
      "hours.address": "Calle del Club, 1 · 08000 Barcelona",
      "footer.tagline": "Bar & Restaurant des Clubs. Geschmack nach jedem Satz.",
      "footer.social": "Folge uns",
      "footer.legal": "Rechtliches",
      "footer.privacy": "Datenschutz",
      "footer.cookies": "Cookies",
      "footer.legalNotice": "Impressum",
      "footer.rights": "Alle Rechte vorbehalten.",
      "cookie.message":
        "Wir verwenden essentielle First-Party-Cookies und, falls Sie zustimmen, Analyse-Cookies. Siehe unsere",
      "cookie.policy": "Cookie-Richtlinie",
      "cookie.accept": "Akzeptieren",
      "cookie.reject": "Nur essenziell",
      "carta.back": "Zurück",
      "carta.title": "Speisekarte Pádel Sabor",
      "carta.search": "Gericht suchen…",
      "carta.empty": "Keine Gerichte für diesen Filter.",
      "carta.tab.snacks": "Zum Teilen",
      "carta.tab.burgers": "Burger & Sandwiches",
      "carta.tab.drinks": "Getränke",
      "carta.tab.desserts": "Desserts",
      "carta.fab": "Per WhatsApp bestellen",
      "carta.priceFrom": "ab",
      "tag.top": "Top",
      "tag.veggie": "Veggie",
      "tag.recommended": "Empfohlen",
      "error404.title": "Du bist vom Platz gelaufen!",
      "error404.text": "Diese Seite existiert nicht. Zurück zum Club und weiter genießen.",
      "error404.cta": "Zur Startseite",
      "legal.privacyTitle": "Datenschutzerklärung",
      "legal.cookiesTitle": "Cookie-Richtlinie",
      "legal.noticeTitle": "Impressum",
      "legal.updated": "Zuletzt aktualisiert:",
      "legal.backHome": "Zur Startseite"
    }
  };

  function detectLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) {
      /* localStorage may be blocked */
    }
    var nav = (navigator.language || navigator.userLanguage || "es").slice(0, 2).toLowerCase();
    if (SUPPORTED.indexOf(nav) !== -1) return nav;
    return DEFAULT_LANG;
  }

  function t(key, lang) {
    var L = lang || global.CPS_I18N.lang;
    var pack = translations[L] || translations[DEFAULT_LANG];
    if (pack[key] != null) return pack[key];
    if (translations[DEFAULT_LANG][key] != null) return translations[DEFAULT_LANG][key];
    return key;
  }

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    global.CPS_I18N.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }

    document.documentElement.lang = lang;

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      if (!key) continue;
      var attr = el.getAttribute("data-i18n-attr");
      var value = t(key, lang);
      if (attr) {
        el.setAttribute(attr, value);
      } else {
        el.textContent = value;
      }
    }

    var placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    for (var j = 0; j < placeholders.length; j++) {
      var ph = placeholders[j];
      ph.setAttribute("placeholder", t(ph.getAttribute("data-i18n-placeholder"), lang));
    }

    var titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) {
      document.title = t(titleEl.getAttribute("data-i18n"), lang);
    } else {
      var metaTitleKey = document.body && document.body.getAttribute("data-meta-title-key");
      if (metaTitleKey) document.title = t(metaTitleKey, lang);
    }

    var metaDesc = document.querySelector('meta[name="description"][data-i18n]');
    if (metaDesc) {
      metaDesc.setAttribute("content", t(metaDesc.getAttribute("data-i18n"), lang));
    }

    var buttons = document.querySelectorAll("[data-lang]");
    for (var k = 0; k < buttons.length; k++) {
      var btn = buttons[k];
      var active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    }

    try {
      document.dispatchEvent(
        new CustomEvent("cps:langchange", { detail: { lang: lang } })
      );
    } catch (err) {
      /* older browsers */
    }
  }

  function bindSelectors(root) {
    var scope = root || document;
    var buttons = scope.querySelectorAll("[data-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (ev) {
        var code = ev.currentTarget.getAttribute("data-lang");
        if (code) apply(code);
      });
    }
  }

  global.CPS_I18N = {
    lang: DEFAULT_LANG,
    supported: SUPPORTED,
    translations: translations,
    t: t,
    apply: apply,
    detect: detectLang,
    bind: bindSelectors,
    STORAGE_KEY: STORAGE_KEY
  };
})(typeof window !== "undefined" ? window : this);
