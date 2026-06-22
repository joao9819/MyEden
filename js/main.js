(function () {
  "use strict";

  var data = window.__CLINICA__ || {};
  var brand = data.brand || {};
  var contact = data.contact || {};
  var messages = data.messages || {};

  function safe(fn, name) {
    try {
      fn();
    } catch (error) {
      window.console && window.console.warn && window.console.warn("Init falhou:", name, error);
    }
  }

  function qs(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function qsa(selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  }

  function text(selector, value, scope) {
    if (!value) return;
    qsa(selector, scope).forEach(function (node) {
      node.textContent = value;
    });
  }

  function waUrl(message) {
    var number = (contact.whatsappNumber || "5516999999999").replace(/\D/g, "");
    return "https://wa.me/" + number + "?text=" + encodeURIComponent(message || messages.general || "");
  }

  function stars(count) {
    var n = Math.max(1, Math.min(5, Number(count) || 5));
    return "★★★★★".slice(0, n);
  }

  function hideSplash() {
    var splash = qs("#splash");
    if (!splash) return;
    splash.classList.add("is-hidden");
    window.setTimeout(function () {
      if (splash && splash.parentNode) splash.parentNode.removeChild(splash);
    }, 700);
  }

  function initSplash() {
    window.setTimeout(hideSplash, 2600);
    window.addEventListener("load", function () {
      window.setTimeout(hideSplash, 1800);
    });
  }

  function applyManifest() {
    if (brand.title) document.title = brand.title;

    text("[data-brand-name]", brand.name);
    text("[data-profession]", brand.profession);
    text("[data-register]", brand.register);
    text("[data-experience]", brand.experience);
    text("[data-address]", contact.address);
    text("[data-hours]", contact.hours);
    text("[data-phone-link]", contact.displayPhone);
    text("[data-instagram]", contact.instagramHandle);

    var side = qs(".side-rail span");
    if (side && brand.sideRail) side.textContent = brand.sideRail;

    var instagramUrl = contact.instagramUrl || "#";
    qsa("[data-instagram]").forEach(function (node) {
      node.setAttribute("href", instagramUrl);
    });

    qsa("[data-phone-link]").forEach(function (node) {
      node.setAttribute("href", "tel:+" + (contact.whatsappNumber || "").replace(/\D/g, ""));
    });

    var google = qs("[data-google-link]");
    if (google && brand.googleProfileUrl) google.setAttribute("href", brand.googleProfileUrl);

    var map = qs("[data-map]");
    if (map && contact.mapQuery) {
      map.setAttribute(
        "src",
        "https://www.google.com/maps?q=" + encodeURIComponent(contact.mapQuery) + "&output=embed"
      );
    }

    qsa("[data-wa='general']").forEach(function (node) {
      node.setAttribute("href", waUrl(messages.general));
    });
  }

  function updateServices() {
    (data.services || []).forEach(function (service) {
      var card = qs('[data-service-card="' + service.id + '"]');
      if (!card) return;

      text(".service-card__tag", service.tag, card);
      text("h3", service.name, card);
      text(".service-card__problem", service.problem, card);
      text(".service-card__solution", service.solution, card);
      if (service.medicalNote) {
        text("[data-service-medical]", service.medicalNote, card);
      }

      var image = qs("[data-service-image]", card);
      if (image) {
        if (service.image) image.setAttribute("src", service.image);
        if (service.imageAlt) image.setAttribute("alt", service.imageAlt);
        image.addEventListener(
          "error",
          function () {
            var fallback = image.getAttribute("data-service-fallback");
            if (fallback) image.setAttribute("src", fallback);
          },
          { once: true }
        );
      }

      var cta = qs("[data-wa-service]", card);
      if (cta) {
        var label = service.whatsappLabel || service.name;
        var msg =
          service.whatsappMessage ||
          (messages.servicePrefix || "Olá! Gostaria de agendar uma avaliação de") + " " + label + ".";
        cta.setAttribute("href", waUrl(msg));
        cta.setAttribute("data-wa-service", service.name);
      }
    });
  }

  function mountReviews() {
    var target = qs("[data-reviews]");
    if (!target || target.children.length > 0) return;

    (data.reviews || []).slice(0, 4).forEach(function (review) {
      var card = document.createElement("article");
      card.className = "review-card reveal";
      card.innerHTML =
        '<div class="stars" aria-hidden="true">' +
        stars(review.rating) +
        "</div>" +
        "<blockquote>" +
        escapeHtml(review.text || "") +
        "</blockquote>" +
        "<footer>" +
        escapeHtml(review.name || "Cliente") +
        " · " +
        escapeHtml(review.source || "Google") +
        "</footer>";
      target.appendChild(card);
    });
  }

  function mountGallery() {
    qsa("[data-gallery]").forEach(function (target) {
      if (target.children.length > 0) return;
      var category = target.getAttribute("data-gallery");
      var items = (data.gallery || []).filter(function (item) {
        return item.category === category && item.consentimento === true;
      });

      if (!items.length) {
        var empty = document.createElement("div");
        empty.className = "gallery-empty";
        empty.textContent = "Em breve, novos registros de resultados.";
        target.appendChild(empty);
        return;
      }

      items.forEach(function (item) {
        var card = document.createElement("article");
        card.className = "gallery-card";
        card.innerHTML =
          '<img src="' +
          encodeURI(item.image || "") +
          '" alt="' +
          escapeAttr(item.alt || item.title || "") +
          '" loading="lazy">' +
          '<div class="gallery-card__body"><h4>' +
          escapeHtml(item.title || "") +
          "</h4><p>" +
          escapeHtml(item.caption || "Resultados variam conforme cada caso.") +
          "</p></div>";
        target.appendChild(card);
      });
    });
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, "&#096;");
  }

  function initMenu() {
    var toggle = qs("[data-menu-toggle]");
    var nav = qs("[data-nav]");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var open = !document.body.classList.contains("menu-open");
      document.body.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });

    qsa("a", nav).forEach(function (link) {
      link.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  function initHeader() {
    var header = qs("[data-header]");
    if (!header) return;
    var update = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 16);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initFab() {
    var fab = qs("[data-fab]");
    if (!fab) return;
    window.setTimeout(function () {
      fab.classList.add("is-visible");
    }, 5000);
  }

  function initReveals() {
    var items = qsa(".reveal, .service-card");
    if (!items.length) return;

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px 14% 0px" }
      );

      items.forEach(function (item) {
        observer.observe(item);
      });
    } else {
      items.forEach(function (item) {
        item.classList.add("is-visible");
      });
    }

    window.setTimeout(function () {
      items.forEach(function (item) {
        item.classList.add("is-visible");
      });
    }, 3200);
  }

  function initGsapEnhancement() {
    if (!window.gsap || !window.ScrollTrigger || window.gsap.__isFallback) return;
    window.gsap.registerPlugin(window.ScrollTrigger);
    window.gsap.utils.toArray(".section__head").forEach(function (node) {
      node.classList.add("is-visible");
      window.gsap.from(node, {
        y: 18,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        clearProps: "transform,opacity",
        scrollTrigger: {
          trigger: node,
          start: "top 92%",
          once: true
        }
      });
    });
  }

  safe(initSplash, "splash");
  safe(applyManifest, "manifest");
  safe(updateServices, "services");
  safe(mountReviews, "reviews");
  safe(mountGallery, "gallery");
  safe(initMenu, "menu");
  safe(initHeader, "header");
  safe(initFab, "fab");
  safe(initReveals, "reveals");
  safe(initGsapEnhancement, "gsap");
})();
