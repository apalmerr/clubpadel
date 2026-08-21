/**
 * Club Pádel Sabor — main interactions
 */
(function () {
  "use strict";

  var CONFIG = {
    whatsapp: "34600000000",
    whatsappMessage: "Hola Club Pádel Sabor (Palma)! Quisiera información / pedir.",
    instagram: "https://www.instagram.com/clubpadelsabor/",
    instagramHandle: "@clubpadelsabor",
    tiktok: "https://www.tiktok.com/@clubpadelsabor",
    cookieKey: "cps_cookie_consent"
  };

  function $(sel, root) {
    try {
      return (root || document).querySelector(sel);
    } catch (e) {
      return null;
    }
  }

  function $$(sel, root) {
    try {
      return Array.prototype.slice.call((root || document).querySelectorAll(sel));
    } catch (e) {
      return [];
    }
  }

  function safe(fn) {
    try {
      return fn();
    } catch (err) {
      if (typeof console !== "undefined" && console.warn) {
        console.warn("[CPS]", err);
      }
      return null;
    }
  }

  function whatsappUrl(text) {
    var msg = encodeURIComponent(text || CONFIG.whatsappMessage);
    return "https://wa.me/" + CONFIG.whatsapp + "?text=" + msg;
  }

  /* ---------- Header / mobile nav ---------- */
  function initHeader() {
    var header = $("#site-header");
    var toggle = $("#nav-toggle");
    var mobileNav = $("#mobile-nav");
    if (!header) return;

    function onScroll() {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toggle && mobileNav) {
      toggle.addEventListener("click", function () {
        var open = !mobileNav.classList.contains("is-open");
        mobileNav.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        var labelKey = open ? "nav.closeMenu" : "nav.openMenu";
        if (window.CPS_I18N) {
          toggle.setAttribute("aria-label", window.CPS_I18N.t(labelKey));
        }
      });

      $$("#mobile-nav a").forEach(function (link) {
        link.addEventListener("click", function () {
          mobileNav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  /* ---------- Hero (static padel photo) ---------- */
  function initHeroVideo() {
    /* Hero uses a local padel court photo — no video dependency. */
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    var items = $$(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---------- Gallery modal ---------- */
  function initGallery() {
    var modal = $("#gallery-modal");
    var modalImg = $("#gallery-modal-img");
    var modalCaption = $("#gallery-modal-caption");
    var closeBtn = $("#gallery-modal-close");
    if (!modal || !modalImg) return;

    function openModal(src, alt) {
      modalImg.src = src;
      modalImg.alt = alt || "";
      if (modalCaption) modalCaption.textContent = alt || "";
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      modalImg.removeAttribute("src");
    }

    $$("[data-gallery-src]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openModal(btn.getAttribute("data-gallery-src"), btn.getAttribute("data-gallery-alt") || "");
      });
      btn.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          openModal(btn.getAttribute("data-gallery-src"), btn.getAttribute("data-gallery-alt") || "");
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", function (ev) {
      if (ev.target === modal) closeModal();
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });
  }

  /* ---------- Digital menu (carta) ---------- */
  function formatPrice(value) {
    try {
      return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: "EUR"
      }).format(value);
    } catch (e) {
      return value.toFixed(2).replace(".", ",") + " €";
    }
  }

  function tagClass(tag) {
    if (tag === "top") return "tag-top";
    if (tag === "veggie") return "tag-veggie";
    if (tag === "recommended") return "tag-recommended";
    return "";
  }

  function tagLabel(tag) {
    if (!window.CPS_I18N) return tag;
    if (tag === "top") return window.CPS_I18N.t("tag.top");
    if (tag === "veggie") return window.CPS_I18N.t("tag.veggie");
    if (tag === "recommended") return window.CPS_I18N.t("tag.recommended");
    return tag;
  }

  function initMenu() {
    var grid = $("#menu-grid");
    if (!grid || !window.CPS_MENU) return;

    var activeCategory = "snacks";
    var query = "";

    function render() {
      var lang = (window.CPS_I18N && window.CPS_I18N.lang) || "es";
      var html = "";
      var shown = 0;

      window.CPS_MENU.forEach(function (dish) {
        if (dish.category !== activeCategory) return;
        var name = (dish.name && dish.name[lang]) || (dish.name && dish.name.es) || "";
        var desc = (dish.desc && dish.desc[lang]) || (dish.desc && dish.desc.es) || "";
        var hay = (name + " " + desc).toLowerCase();
        if (query && hay.indexOf(query) === -1) return;

        shown += 1;
        var tagsHtml = (dish.tags || [])
          .map(function (tag) {
            return (
              '<span class="inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ' +
              tagClass(tag) +
              '">' +
              tagLabel(tag) +
              "</span>"
            );
          })
          .join("");

        html +=
          '<article class="dish-card rounded-2xl p-3 sm:p-4" data-dish-id="' +
          dish.id +
          '">' +
          '<div class="flex items-start gap-3 sm:gap-4">' +
          (dish.image
            ? '<img class="dish-card-img" src="' +
              dish.image +
              '" alt="' +
              name.replace(/"/g, "&quot;") +
              '" loading="lazy" width="104" height="104" />'
            : "") +
          '<div class="min-w-0 flex-1">' +
          '<div class="flex items-start justify-between gap-3">' +
          '<h3 class="font-display text-base font-semibold text-white sm:text-lg">' +
          name +
          "</h3>" +
          '<p class="shrink-0 font-display text-lg font-bold text-lime-400 sm:text-xl">' +
          formatPrice(dish.price) +
          "</p>" +
          "</div>" +
          '<p class="mt-1.5 text-sm leading-relaxed text-slate-400">' +
          desc +
          "</p>" +
          (tagsHtml ? '<div class="mt-3 flex flex-wrap gap-1.5">' + tagsHtml + "</div>" : "") +
          "</div>" +
          "</div>" +
          "</article>";
      });

      if (!shown) {
        var empty = window.CPS_I18N ? window.CPS_I18N.t("carta.empty") : "—";
        html =
          '<p class="col-span-full rounded-2xl border border-dashed border-slate-700 px-4 py-10 text-center text-slate-400">' +
          empty +
          "</p>";
      }

      grid.innerHTML = html;
    }

    $$("[data-menu-tab]").forEach(function (tab) {
      tab.addEventListener("click", function () {
        activeCategory = tab.getAttribute("data-menu-tab") || "snacks";
        $$("[data-menu-tab]").forEach(function (t) {
          var on = t === tab;
          t.classList.toggle("is-active", on);
          t.setAttribute("aria-selected", on ? "true" : "false");
        });
        render();
      });
    });

    var search = $("#menu-search");
    if (search) {
      search.addEventListener("input", function () {
        query = (search.value || "").trim().toLowerCase();
        render();
      });
    }

    document.addEventListener("cps:langchange", render);
    render();
  }

  /* ---------- Cookies ---------- */
  function initCookies() {
    var banner = $("#cookie-banner");
    if (!banner) return;

    var stored = null;
    try {
      stored = localStorage.getItem(CONFIG.cookieKey);
    } catch (e) {
      stored = null;
    }

    if (!stored) {
      requestAnimationFrame(function () {
        banner.classList.add("is-visible");
      });
    }

    function save(value) {
      try {
        localStorage.setItem(CONFIG.cookieKey, value);
      } catch (e) {
        /* ignore */
      }
      banner.classList.remove("is-visible");
    }

    var accept = $("#cookie-accept");
    var reject = $("#cookie-reject");
    if (accept) accept.addEventListener("click", function () {
      save("accepted");
    });
    if (reject) reject.addEventListener("click", function () {
      save("essential");
    });
  }

  /* ---------- WhatsApp + Instagram links ---------- */
  function initWhatsAppLinks() {
    $$("[data-whatsapp]").forEach(function (el) {
      var custom = el.getAttribute("data-whatsapp-msg");
      el.setAttribute("href", whatsappUrl(custom || CONFIG.whatsappMessage));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });
  }

  function initSocialLinks() {
    $$("[data-instagram]").forEach(function (el) {
      el.setAttribute("href", CONFIG.instagram);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });
    $$("[data-tiktok]").forEach(function (el) {
      el.setAttribute("href", CONFIG.tiktok);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });
    $$("[data-instagram-handle]").forEach(function (el) {
      el.textContent = CONFIG.instagramHandle;
    });
  }

  /* ---------- Year ---------- */
  function initYear() {
    $$("[data-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* ---------- Broken image resilience ---------- */
  function initImageFallback() {
    document.addEventListener(
      "error",
      function (ev) {
        var t = ev.target;
        if (!t || t.tagName !== "IMG") return;
        if (t.dataset.fallbackApplied) return;
        t.dataset.fallbackApplied = "1";
        t.src =
          "data:image/svg+xml," +
          encodeURIComponent(
            '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect fill="#1e293b" width="100%" height="100%"/><text x="50%" y="50%" fill="#94a3b8" font-family="sans-serif" font-size="24" text-anchor="middle" dy=".3em">Club Pádel Sabor</text></svg>'
          );
      },
      true
    );
  }

  /* ---------- Boot ---------- */
  function boot() {
    safe(function () {
      if (window.CPS_I18N) {
        window.CPS_I18N.bind();
        window.CPS_I18N.apply(window.CPS_I18N.detect());
      }
    });
    safe(initHeader);
    safe(initHeroVideo);
    safe(initReveal);
    safe(initGallery);
    safe(initMenu);
    safe(initCookies);
    safe(initWhatsAppLinks);
    safe(initSocialLinks);
    safe(initYear);
    safe(initImageFallback);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
