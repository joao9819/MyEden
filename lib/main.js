(function () {
  "use strict";

  var data = window.__MYEDEN__ || {};
  var brand = data.brand || {};
  var revealObserver = null;

  function safe(fn, name) {
    try {
      fn();
    } catch (error) {
      if (window.console && console.warn) {
        console.warn("[My Éden] " + name, error);
      }
    }
  }

  function qs(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function qsa(selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  }

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function waUrl(message) {
    var configured = String(brand.whatsappNumber || "55XXXXXXXXXXX");
    var digits = configured.replace(/\D/g, "");
    var number = digits.length >= 12 ? digits : configured;
    return "https://wa.me/" + number + "?text=" + encodeURIComponent(message || (data.whatsappMessages && data.whatsappMessages.general) || "Olá! Vim pelo site e gostaria de agendar.");
  }

  function stars(count) {
    var total = Math.max(1, Math.min(5, Number(count) || 5));
    return "★★★★★".slice(0, total);
  }

  function icon(name) {
    var icons = {
      skin: '<svg class="treatment-card__icon" viewBox="0 0 96 96" aria-hidden="true"><path d="M48 12 C65 26 75 42 75 58 A27 27 0 0 1 21 58 C21 42 31 26 48 12Z"/><path d="M35 56 C42 63 54 63 61 56"/><path d="M34 42 C39 39 44 39 49 42"/><path d="M54 42 C59 39 64 39 69 42"/><path d="M48 24 C43 34 42 45 47 53"/></svg>',
      body: '<svg class="treatment-card__icon" viewBox="0 0 96 96" aria-hidden="true"><path d="M47 13 C39 23 36 36 39 49 C42 61 35 70 27 78"/><path d="M51 13 C61 25 63 37 57 50 C51 62 57 70 68 80"/><path d="M31 35 C40 41 57 41 66 35"/><path d="M33 62 C43 67 54 67 64 62"/></svg>',
      botox: '<svg class="treatment-card__icon" viewBox="0 0 96 96" aria-hidden="true"><path d="M35 18 L61 18 L61 48 C61 60 53 70 48 77 C43 70 35 60 35 48Z"/><path d="M30 18 L66 18"/><path d="M48 77 L48 88"/><path d="M38 88 L58 88"/><path d="M41 34 L55 34"/><path d="M41 46 L55 46"/></svg>',
      measure: '<svg class="treatment-card__icon" viewBox="0 0 96 96" aria-hidden="true"><path d="M21 60 C25 35 71 35 75 60 C78 78 18 78 21 60Z"/><path d="M30 57 L30 66"/><path d="M39 53 L39 66"/><path d="M48 51 L48 66"/><path d="M57 53 L57 66"/><path d="M66 57 L66 66"/><path d="M35 28 C43 21 54 21 62 28"/></svg>',
      drainage: '<svg class="treatment-card__icon" viewBox="0 0 96 96" aria-hidden="true"><path d="M49 12 C41 28 34 38 34 51 A15 15 0 0 0 64 51 C64 38 56 28 49 12Z"/><path d="M27 64 C37 73 59 73 69 64"/><path d="M22 76 C36 86 62 86 76 76"/><path d="M48 35 C44 42 44 50 49 56"/></svg>',
      hands: '<svg class="treatment-card__icon" viewBox="0 0 96 96" aria-hidden="true"><path d="M33 46 L33 24 C33 20 39 20 39 24 L39 45"/><path d="M39 45 L39 18 C39 14 45 14 45 18 L45 44"/><path d="M45 44 L45 16 C45 12 51 12 51 16 L51 45"/><path d="M51 45 L51 22 C51 18 57 18 57 22 L57 54"/><path d="M33 46 C28 42 23 45 26 51 L34 67 C39 78 56 78 61 66 L65 56 C68 49 60 46 57 54"/><path d="M27 27 C24 21 25 15 30 10"/><path d="M68 30 C75 25 78 18 77 11"/></svg>'
    };
    return icons[name] || icons.skin;
  }

  function initSplash() {
    var splash = qs("#splash");
    if (!splash) return;
    window.setTimeout(function () {
      splash.classList.add("is-hidden");
    }, 4550);
  }

  function initNavigation() {
    var toggle = qs("[data-nav-toggle]");
    var nav = qs("#mainNav");
    if (!toggle || !nav) return;

    function setOpen(open) {
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    }

    toggle.addEventListener("click", function () {
      setOpen(!document.body.classList.contains("nav-open"));
    });

    qsa("a", nav).forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });
  }

  function initBindings() {
    var bindings = {
      googleRating: brand.googleRating,
      googleReviews: brand.googleReviews,
      address: brand.address,
      hours: brand.hours,
      responsibleName: brand.responsibleName,
      responsibleRegistry: brand.responsibleRegistry
    };

    qsa("[data-bind]").forEach(function (node) {
      var key = node.getAttribute("data-bind");
      if (bindings[key] != null) node.textContent = bindings[key];
    });

    qsa("[data-instagram]").forEach(function (node) {
      node.href = brand.instagramUrl || "https://www.instagram.com/myedenrp/";
      node.textContent = brand.instagram || "@myedenrp";
    });

    qsa("[data-google-profile]").forEach(function (node) {
      if (brand.googleProfileUrl && brand.googleProfileUrl !== "#") {
        node.href = brand.googleProfileUrl;
      } else {
        node.removeAttribute("target");
      }
    });

    var side = qs(".side-signature");
    if (side && brand.sideSignature) side.textContent = brand.sideSignature;

    var map = qs("[data-map-frame]");
    if (map && brand.mapsEmbedUrl) map.src = brand.mapsEmbedUrl;
  }

  function initWhatsAppLinks() {
    qsa("[data-whatsapp]").forEach(function (node) {
      var message = node.getAttribute("data-message") || (data.whatsappMessages && data.whatsappMessages.general);
      node.href = waUrl(message);
      node.rel = "noopener";
    });
  }

  function renderTreatments() {
    var target = qs("#treatmentCards");
    if (!target || target.children.length > 0) return;

    var treatments = Array.isArray(data.treatments) ? data.treatments : [];
    if (!treatments.length) return;

    target.innerHTML = treatments.map(function (item) {
      return [
        '<article class="treatment-card" id="' + esc(item.id) + '">',
        icon(item.icon),
        '<span class="treatment-card__family">' + esc(item.family) + '</span>',
        '<h3>' + esc(item.name) + '</h3>',
        '<p><strong>' + esc(item.benefit) + '</strong> ' + esc(item.description) + '</p>',
        '<a href="' + esc(waUrl(item.whatsappText)) + '" aria-label="Agendar ' + esc(item.name) + ' pelo WhatsApp">Agendar pelo WhatsApp →</a>',
        '</article>'
      ].join("");
    }).join("");

    var section = target.closest(".treatments-section");
    if (section) section.classList.add("is-enhanced");
  }

  function renderReviews() {
    var target = qs("#reviewCards");
    if (!target || target.children.length > 0) return;

    var reviews = (Array.isArray(data.reviews) ? data.reviews : []).filter(function (review) {
      return review && review.active !== false && review.text && review.text.indexOf("Cole aqui") === -1;
    });

    if (!reviews.length) {
      target.innerHTML = [
        '<article class="review-card"><span class="stars" aria-hidden="true">★★★★★</span><p>As avaliações reais do Google entram aqui assim que nota, textos e autorização de uso forem confirmados.</p><strong>Google</strong></article>',
        '<article class="review-card"><span class="stars" aria-hidden="true">★★★★★</span><p>A seção está pronta para receber depoimentos reais, preservando o sentido original e sem promessa de resultado.</p><strong>Reputação confirmada</strong></article>',
        '<article class="review-card"><span class="stars" aria-hidden="true">★★★★★</span><p>Depoimentos reais ajudam a mostrar acolhimento, pontualidade e cuidado sem transformar experiência individual em promessa.</p><strong>My Éden</strong></article>'
      ].join("");
    } else {
      target.innerHTML = reviews.slice(0, 4).map(function (review) {
        return [
          '<article class="review-card">',
          '<span class="stars" aria-hidden="true">' + esc(stars(review.rating)) + '</span>',
          '<p>“' + esc(review.text) + '”</p>',
          '<strong>' + esc(review.name || review.initial || "Cliente Google") + '</strong>',
          '</article>'
        ].join("");
      }).join("");
    }

    var section = target.closest(".social-section");
    if (section) section.classList.add("is-enhanced");
  }

  function renderGallery() {
    var target = qs("#galleryGrid");
    if (!target || target.children.length > 0) return;

    var items = (Array.isArray(data.gallery) ? data.gallery : []).filter(function (item) {
      return item && item.active !== false && item.consentimento === true && item.placeholder !== true && item.image;
    });

    if (!items.length) {
      target.innerHTML = [
        '<article class="gallery-placeholder"><span>Facial</span><strong>Foto autorizada em breve</strong></article>',
        '<article class="gallery-placeholder"><span>Corporal</span><strong>Foto autorizada em breve</strong></article>',
        '<article class="gallery-placeholder"><span>Mãos</span><strong>Foto autorizada em breve</strong></article>'
      ].join("");
    } else {
      target.innerHTML = items.map(function (item) {
        return [
          '<figure class="gallery-item">',
          '<img loading="lazy" src="' + esc(item.image) + '" alt="' + esc(item.alt || item.title || item.category) + '">',
          '<figcaption><span>' + esc(item.category || "Resultado") + '</span><strong>' + esc(item.title || "Resultado autorizado") + '</strong></figcaption>',
          '</figure>'
        ].join("");
      }).join("");
    }

    var section = target.closest(".results-section");
    if (section) section.classList.add("is-enhanced");
  }

  function initReveals() {
    var targets = qsa(".reveal, .treatment-card, .review-card, .gallery-item");
    if (!targets.length) return;

    function show(node) {
      node.classList.remove("is-hidden");
      node.classList.add("is-visible");
    }

    if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            show(entry.target);
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05, rootMargin: "0px 0px -4% 0px" });

      targets.forEach(function (node) {
        node.classList.add("is-hidden");
        var rect = node.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          show(node);
        } else {
          revealObserver.observe(node);
        }
      });
    } else {
      targets.forEach(show);
    }

    window.setTimeout(function () {
      targets.forEach(show);
    }, 6000);
  }

  function initGsap() {
    if (!window.gsap || !window.ScrollTrigger) return;
    window.gsap.registerPlugin(window.ScrollTrigger);

    window.gsap.to(".botanic-corner--left", {
      y: 24,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    window.gsap.to(".botanic-corner--right", {
      y: -18,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }

  function initFab() {
    var fab = qs("[data-fab]");
    if (!fab) return;
    window.setTimeout(function () {
      fab.classList.add("is-visible");
    }, 5000);
  }

  safe(initSplash, "splash");
  safe(initNavigation, "navigation");
  safe(initBindings, "bindings");
  safe(initWhatsAppLinks, "whatsapp");
  safe(renderTreatments, "treatments");
  safe(renderReviews, "reviews");
  safe(renderGallery, "gallery");
  safe(initReveals, "reveals");
  safe(initGsap, "gsap");
  safe(initFab, "fab");
})();
