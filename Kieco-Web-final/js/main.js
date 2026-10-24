/* =========================================
   Kieco Exchange - main.js
   Slider, tabs, search, animations, mobile menu, form
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 0. Opening animation: the head script adds "intro-on" only when it should play */
  const intro = document.getElementById("intro");
  if (intro && document.documentElement.classList.contains("intro-on")) {
    let leaveTimer = null;
    let endTimer = null;
    const endIntro = function () {
      clearTimeout(leaveTimer);
      clearTimeout(endTimer);
      document.documentElement.classList.remove("intro-on");
      try { sessionStorage.setItem("kiecoIntroSeen", "1"); } catch (e) { /* storage blocked: it may play again next time */ }
    };
    leaveTimer = setTimeout(function () { intro.classList.add("is-leaving"); }, 3000);
    endTimer = setTimeout(endIntro, 3800);
  }

  /* 1. Hero slider (Swiper) */
  if (typeof Swiper !== "undefined" && document.querySelector(".hero-slider")) {
    new Swiper(".hero-slider", {
      loop: true,
      speed: 650,
      effect: "fade",
      fadeEffect: { crossFade: true },
      autoplay: reduceMotion ? false : {
        delay: 1600,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: ".hero-slider .swiper-pagination",
        clickable: true
      }
    });
  }

  /* 2. Header: shadow on scroll + mobile menu */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = function () {
      header.style.boxShadow = window.scrollY > 10 ? "0 4px 18px rgba(11, 42, 74, 0.08)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  const menuBtn = document.querySelector(".menu-toggle");
  if (header && menuBtn) {
    menuBtn.addEventListener("click", function () {
      const isOpen = header.classList.toggle("nav-open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the menu when a link is tapped
    document.querySelectorAll(".main-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("nav-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* 3. Tabs (rate check and locations) */
  document.querySelectorAll(".tabs").forEach(function (group) {
    const tabs = group.querySelectorAll(".tab");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.classList.toggle("active", t === tab); });
      });
    });
  });

  /* 4. Area chips (locations) */
  document.querySelectorAll(".chips").forEach(function (group) {
    const chips = group.querySelectorAll(".chip");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.toggle("active", c === chip); });
      });
    });
  });

  /* 6b. Currency ticker: steady movement that never pauses, previous / next buttons */
  const tickerTrack = document.getElementById("ticker-track");
  if (tickerTrack) {
    const tickerPrev = document.getElementById("ticker-prev");
    const tickerNext = document.getElementById("ticker-next");
    const tickerSpeed = 100;    // pixels per second while moving on its own (the same on 60 Hz and 120 Hz screens)
    let tickerLast = null;     // time of the previous frame
    let tickerX = 0;           // current position (0 or negative)
    let tickerTarget = null;   // where a button click wants to go
    let tickerPaused = false;
    let tickerDrawn = null;    // last position written to the page

    const tickerGap = function () {
      return parseFloat(getComputedStyle(tickerTrack).columnGap) || 0;
    };
    // the list is written twice, so half of the track is exactly one full list
    const tickerHalf = function () {
      return (tickerTrack.scrollWidth + tickerGap()) / 2;
    };
    const tickerStep = function () {
      const first = tickerTrack.children[0];
      return (first ? first.getBoundingClientRect().width : 0) + tickerGap();
    };
    const tickerWrap = function () {
      const half = tickerHalf();
      if (half <= 0) return;
      while (tickerX <= -half) {
        tickerX += half;
        if (tickerTarget !== null) tickerTarget += half;
      }
      while (tickerX > 0) {
        tickerX -= half;
        if (tickerTarget !== null) tickerTarget -= half;
      }
    };
    const tickerFrame = function (now) {
      const step = tickerLast === null ? 0 : Math.min((now - tickerLast) / 1000, 0.05);   // seconds since the last frame
      tickerLast = now;
      if (tickerTarget !== null) {
        tickerX += (tickerTarget - tickerX) * (1 - Math.pow(0.88, step * 60));
        if (Math.abs(tickerTarget - tickerX) < 0.5) {
          tickerX = tickerTarget;
          tickerTarget = null;
        }
      } else if (!tickerPaused && !reduceMotion) {
        tickerX -= tickerSpeed * step;
      }
      tickerWrap();
      if (tickerX !== tickerDrawn) {
        tickerTrack.style.transform = "translate3d(" + tickerX + "px, 0, 0)";
        tickerDrawn = tickerX;
      }
      requestAnimationFrame(tickerFrame);
    };
    const tickerMove = function (direction) {
      const from = tickerTarget !== null ? tickerTarget : tickerX;
      tickerTarget = from + direction * tickerStep();
    };
    if (tickerPrev) tickerPrev.addEventListener("click", function () { tickerMove(1); });
    if (tickerNext) tickerNext.addEventListener("click", function () { tickerMove(-1); });
    tickerTrack.addEventListener("mouseenter", function () { tickerPaused = true; });
    tickerTrack.addEventListener("mouseleave", function () { tickerPaused = false; });
    requestAnimationFrame(tickerFrame);
  }

  /* 7. Animations (GSAP + ScrollTrigger) */
  if (window.gsap && window.ScrollTrigger && !reduceMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // Headings and intro texts fade up when they enter the screen
    gsap.utils.toArray(".section-intro, h2").forEach(function (el) {
      if (el.closest(".help, .why")) return;   // these panels have their own entrance motion
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger: el, start: "top 88%", once: true }
      });
    });

    // Cards appear one after another inside their group
    const groups = [
      { parent: ".exp-grid", items: ".exp-card" },
      { parent: ".steps", items: ".step" },
      { parent: ".contact-cards", items: ".contact-card" }
    ];
    groups.forEach(function (g) {
      document.querySelectorAll(g.parent).forEach(function (parent) {
        gsap.from(parent.querySelectorAll(g.items), {
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: parent, start: "top 85%", once: true }
        });
      });
    });

    // Numbers count up (for example the branch count)
    document.querySelectorAll("[data-branch-count]").forEach(function (el) {
      const end = parseInt(el.textContent, 10);
      if (isNaN(end)) return;
      const counter = { value: 0 };
      el.textContent = "0";
      gsap.to(counter, {
        value: end,
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: function () { el.textContent = Math.round(counter.value); }
      });
    });
  }

  /* 7b. Panels that open under a button: "Let us help you choose" */
  const openPanel = function (button, panel, focusTarget) {
    button.addEventListener("click", function () {
      const opening = panel.hidden;   // hidden now means it is about to open
      panel.hidden = !opening;
      panel.classList.toggle("is-open", opening);
      button.setAttribute("aria-expanded", String(opening));
      // Scroll so the panel (or the button, when closing) is in view
      requestAnimationFrame(function () {
        const target = opening ? (focusTarget || panel) : button;
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      });
    });
  };
  const helpBtn = document.getElementById("help-open");
  const helpPanel = document.getElementById("help");
  if (helpBtn && helpPanel) openPanel(helpBtn, helpPanel, null);

  /* 7c. "Why choose KIECO": the panel opens; its four items open one at a time; the numbers count up */
  const whyBtn = document.getElementById("why-open");
  const whyPanel = document.getElementById("why");
  const storyBtn = document.getElementById("story-discover");
  const countUp = function (scope) {
    scope.querySelectorAll("[data-to]").forEach(function (el) {
      const end = Number(el.getAttribute("data-to")) || 0;
      if (reduceMotion || end === 0) { el.textContent = String(end); return; }
      const start = performance.now();
      const step = function (now) {
        const p = Math.min(1, (now - start) / 1400);
        el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  };
  const goTo = function (el, block) {
    requestAnimationFrame(function () {
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: block || "start" });
    });
  };
  if (whyBtn && whyPanel) {
    whyBtn.addEventListener("click", function () {
      const opening = whyPanel.hidden;
      whyPanel.hidden = !opening;
      whyPanel.classList.toggle("is-open", opening);
      whyBtn.setAttribute("aria-expanded", String(opening));
      if (opening) {
        countUp(whyPanel);
        goTo(whyPanel, "start");
      } else {
        goTo(whyBtn, "center");
      }
    });
  }
  // "Discover our story" opens the same panel and goes straight to the Kuwait card
  if (storyBtn && whyPanel && whyBtn) {
    storyBtn.addEventListener("click", function () {
      if (whyPanel.hidden) {
        whyPanel.hidden = false;
        whyPanel.classList.add("is-open");
        whyBtn.setAttribute("aria-expanded", "true");
        countUp(whyPanel);
      }
      const kuwait = document.getElementById("kuwait");
      goTo(kuwait || whyPanel, "start");
    });
  }
  // One item open at a time
  document.querySelectorAll(".why-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest(".why-item");
      const opening = !item.classList.contains("is-open");
      document.querySelectorAll(".why-item").forEach(function (other) {
        other.classList.remove("is-open");
        other.querySelector(".why-trigger").setAttribute("aria-expanded", "false");
      });
      if (opening) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* 8. Contact form (validation only, sending is connected later) */
  const form = document.getElementById("contact-form");
  if (form) {
    const statusBox = form.querySelector(".form-status");
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const message = form.querySelector('[name="message"]');
      let error = "";

      if (!name || name.value.trim() === "") {
        error = "الرجاء كتابة الاسم.";
      } else if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        error = "الرجاء كتابة بريد إلكتروني صحيح.";
      } else if (!message || message.value.trim() === "") {
        error = "الرجاء كتابة الرسالة.";
      }

      if (statusBox) {
        statusBox.style.color = error ? "#B42318" : "#1F6FB2";
        statusBox.textContent = error || "شكراً لك، تم استلام رسالتك.";
      }
      if (!error) form.reset();
    });
  }

});