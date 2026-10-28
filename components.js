(function () {
  if (location.protocol === "http:" && /(^|\.)brushnbroom\.com$/.test(location.hostname)) {
    location.replace("https://" + location.host + location.pathname + location.search + location.hash);
    return;
  }
  if (location.hostname && location.pathname === "/index.html") {
    location.replace("/" + location.search + location.hash);
  }
})();

/**
 * Brush & Broom LLP - Centralized Components
 * This file manages the header, footer, and global styles across all pages
 * Update this file to instantly reflect changes across the entire website
 */

// Washington L&I construction contractor registration (CC01 General).
// Update here and the footer trust line changes on every page.
const BNB_CONTRACTOR_REG = 'CC BRUSHBL742OP';
const BNB_LNI_VERIFY_URL = 'https://secure.lni.wa.gov/verify/';
// Phone used by the sticky mobile call bar (same number shown across the site).
const BNB_PHONE = '206-571-5568';
// Google Business Profile review link (from the profile's "Ask for reviews" share link).
// Leave empty to hide the footer review button.
const BNB_GOOGLE_REVIEW_URL = 'https://g.page/r/CczrjqYCPIx3EBM/review';
// Social profiles shown in the footer "Find us on" row. Leave a URL empty to hide that button.
const BNB_FACEBOOK_URL = 'https://www.facebook.com/Seabnbllp/';
const BNB_NEXTDOOR_URL = 'https://nextdoor.com/pages/brush-and-broom-llp-walla-walla-wa/';

// Small inline icons (no external requests)
const BNB_ICONS = {
  star: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path fill="currentColor" d="M13.5 21v-7.5h2.53l.38-2.94H13.5V8.69c0-.85.24-1.43 1.46-1.43h1.56V4.63A20.9 20.9 0 0 0 14.25 4.5c-2.25 0-3.79 1.37-3.79 3.89v2.17H7.92v2.94h2.54V21z"/></svg>',
  home: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 3.2 2.5 11h2.7v9.3h5.3v-6h3v6h5.3V11h2.7z"/></svg>'
};

function bnbSocialLinks() {
  const links = [
    BNB_GOOGLE_REVIEW_URL && { href: BNB_GOOGLE_REVIEW_URL, icon: BNB_ICONS.star, label: 'Google Reviews' },
    BNB_FACEBOOK_URL && { href: BNB_FACEBOOK_URL, icon: BNB_ICONS.facebook, label: 'Facebook' },
    BNB_NEXTDOOR_URL && { href: BNB_NEXTDOOR_URL, icon: BNB_ICONS.home, label: 'Nextdoor' }
  ].filter(Boolean);
  return links.map(l => `<a class="social-btn" href="${l.href}" target="_blank" rel="noopener">${l.icon}<span>${l.label}</span></a>`).join('');
}

class BrushBroomComponents {
  constructor() {
    this.init();
  }

  init() {
    this.injectHeader();
    this.injectFooter();
    this.injectMobileCallBar();
    this.setupNavigation();
    this.setupScrollEffects();
  }

  /**
   * Inject the header and navigation into the page
   */
  injectHeader() {
    const header = document.createElement('header');
    header.className = 'header';
    header.id = 'site-header';
    // Pages without a dark hero behind the header get a solid navy header
    if (!document.querySelector('.hero, .page-hero')) {
      header.classList.add('header-solid');
      document.body.classList.add('has-solid-header');
    }
    header.innerHTML = `
      <a class="skip-link" href="#main-content">Skip to content</a>
      <div class="container nav-wrap">
        <a href="/" class="brand"><img src="/assets/images/logo-dark-bg-header.png" alt="Brush & Broom LLP Logo" width="71" height="50" /></a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle navigation">Menu</button>
        <nav id="site-nav" class="nav" aria-label="Primary">
          <a href="/">Home</a>
          <a href="/#cleaning">Cleaning</a>
          <a href="/#painting">Painting</a>
          <a href="/handyman-mount-vernon.html">Handyman</a>
          <a href="/flooring-mount-vernon.html">Flooring</a>
          <a href="/about.html">About</a>
          <a href="/areas-we-serve.html">Areas</a>
          <a href="/community-care.html">Community</a>
          <a href="/#quote" class="btn btn-amber">Get a Quote</a>
        </nav>
      </div>
    `;
    
    // Insert header at the beginning of the body
    const body = document.body;
    body.insertBefore(header, body.firstChild);
  }

  /**
   * Inject the footer into the page
   */
  injectFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
      <div class="container footer-grid">
        <div>
          <div class="footer-brand">Brush <span>&</span> Broom LLP</div>
          <p>Dustin and Brittany clean, paint, repair, and install floors for homes and small businesses in Mount Vernon, Burlington, Sedro-Woolley, Anacortes, La Conner, and Stanwood. Clear quotes, and the same people for both.</p>
          ${BNB_GOOGLE_REVIEW_URL ? `<p style="margin-top:18px;"><a class="btn btn-review" href="${BNB_GOOGLE_REVIEW_URL}" target="_blank" rel="noopener">Review us on Google</a></p>` : ''}
          <div class="footer-social">
            <div class="footer-title">Find us on</div>
            <div class="social-row">${bnbSocialLinks()}</div>
          </div>
        </div>
        <div>
          <div class="footer-title">Contact</div>
          <p><a href="tel:206-571-5568">206-571-5568</a></p>
          <p style="margin-top:8px;"><a href="mailto:seabnbllp@brushnbroom.com">seabnbllp@brushnbroom.com</a></p>
          <div class="footer-trust">
            <p class="footer-trust-badge">Licensed, Bonded &amp; Insured</p>
            <p>WA Contractor Reg. #${BNB_CONTRACTOR_REG}</p>
            <p><a href="${BNB_LNI_VERIFY_URL}" target="_blank" rel="noopener">Verify with WA L&amp;I</a></p>
          </div>
        </div>
        <div>
          <div class="footer-title">Links</div>
          <div class="footer-links">
            <a href="/">Home</a>
            <a href="/about.html">About Us</a>
            <a href="/areas-we-serve.html">Areas We Serve</a>
            <a href="/community-care.html">Community Care</a>
            <a href="/gallery.html">Before &amp; After Gallery</a>
            ${BNB_GOOGLE_REVIEW_URL ? `<a href="${BNB_GOOGLE_REVIEW_URL}" target="_blank" rel="noopener">Review us on Google</a>` : ''}
            <a href="/privacy.html">Privacy</a>
            <div style="margin-top: 10px; opacity: 0.5; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">Our Specialties</div>
            <a href="/routine-house-cleaning-mount-vernon.html">House Cleaning Mount Vernon</a>
            <a href="/deep-cleaning-mount-vernon.html">Deep Cleaning Mount Vernon</a>
            <a href="/move-in-move-out-mount-vernon.html">Move-Out Cleaning Mount Vernon</a>
            <a href="/post-construction-cleaning-mount-vernon.html">Post-Construction Cleaning</a>
            <a href="/vacation-rental-cleaning-mount-vernon.html">Vacation Rental Cleaning</a>
            <a href="/residential-painting-mount-vernon.html">Residential Painting</a>
            <a href="/interior-exterior-painting-mount-vernon.html">Interior/Exterior Painting</a>
            <a href="/handyman-mount-vernon.html">Handyman Services</a>
            <a href="/flooring-mount-vernon.html">LVP &amp; Laminate Flooring</a>
            <a href="/gutter-cleaning-mount-vernon.html">Gutter Cleaning</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom"><p>&copy; 2026 Brush & Broom LLP. All rights reserved.</p></div>
    `;
    
    // Append footer at the end of the body (before scripts)
    const scripts = document.querySelectorAll('body > script');
    if (scripts.length > 0) {
      scripts[0].parentNode.insertBefore(footer, scripts[0]);
    } else {
      document.body.appendChild(footer);
    }
  }

  /**
   * Sticky Call + Quote bar shown only on small screens (see .mobile-cta in styles.css)
   */
  injectMobileCallBar() {
    if (document.querySelector('.mobile-cta')) return;
    const bar = document.createElement('div');
    bar.className = 'mobile-cta';
    bar.innerHTML = `
      <a href="tel:${BNB_PHONE}" class="mobile-cta-call" aria-label="Call Brush and Broom at ${BNB_PHONE}">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Call
      </a>
      <a href="/#quote" class="mobile-cta-quote">Free Quote</a>
    `;
    document.body.appendChild(bar);
    document.body.classList.add('has-mobile-cta');
  }

  /**
   * Setup mobile navigation toggle and link behavior
   */
  setupNavigation() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Close' : 'Menu';
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      });
    });
  }

  /**
   * Setup scroll effects for header and fade-up animations
   */
  setupScrollEffects() {
    const header = document.getElementById('site-header');
    if (header) {
      window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 20);
      }, { passive: true });
    }

    // Fade-up animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
}

// Initialize components when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new BrushBroomComponents();
  });
} else {
  new BrushBroomComponents();
}

/**
 * Lead tracking (GA4, tag G-LJJPV8T9HN loaded in each page's <head>).
 * Sends: click_to_call (tel:), click_text (sms:), click_email (mailto:),
 * social_click (Google reviews / Facebook / Nextdoor), and generate_lead
 * when the Formspree quote form is submitted (after browser validation passes).
 * Every call is guarded so a missing or blocked gtag never breaks links or the form.
 */
(function () {
  function bnbTrack(name, params) {
    try {
      if (typeof window.gtag !== 'function') return;
      window.gtag('event', name, Object.assign({
        page_path: location.pathname,
        page_title: document.title,
        transport_type: 'beacon'
      }, params || {}));
    } catch (e) { /* never block the click or submit */ }
  }
  window.bnbTrack = bnbTrack;

  function socialNetwork(href) {
    if (/g\.page\/|google\.com\/(maps|search)|business\.google/i.test(href)) return 'google_reviews';
    if (/facebook\.com/i.test(href)) return 'facebook';
    if (/nextdoor\.com/i.test(href)) return 'nextdoor';
    if (/yelp\.com/i.test(href)) return 'yelp';
    return '';
  }

  function linkLocation(a) {
    if (a.closest('.mobile-cta')) return 'mobile_call_bar';
    if (a.closest('footer')) return 'footer';
    if (a.closest('header')) return 'header';
    return 'content';
  }

  document.addEventListener('click', function (ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest('a[href]') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var common = { link_url: href, link_text: (a.textContent || '').trim().slice(0, 100), link_location: linkLocation(a) };
    if (/^tel:/i.test(href)) {
      bnbTrack('click_to_call', common);
    } else if (/^sms:/i.test(href)) {
      bnbTrack('click_text', common);
    } else if (/^mailto:/i.test(href)) {
      bnbTrack('click_email', common);
    } else {
      var net = socialNetwork(href);
      if (net) bnbTrack('social_click', Object.assign({ social_network: net }, common));
    }
  }, true);

  // Quote form posts natively to Formspree. 'submit' only fires once the browser's
  // required-field validation passes; we skip honeypot (bot) submissions.
  document.addEventListener('submit', function (ev) {
    var form = ev.target;
    if (!form || !form.matches || !form.matches('form.quote-form, form[action*="formspree.io"]')) return;
    var hp = form.querySelector('[name="_gotcha"]');
    if (hp && hp.value) return;
    var need = form.querySelector('[name="need"]');
    var service = form.querySelector('[name="service"]');
    bnbTrack('generate_lead', {
      form_id: form.id || 'quote-form',
      lead_source: 'quote_form',
      service_need: need ? need.value : '',
      service_detail: service ? service.value : ''
    });
  }, true);

  // Track 404 hits so old/broken links show up in GA4 (404.html sets data-page="404").
  if (document.body && document.body.getAttribute('data-page') === '404') {
    bnbTrack('page_not_found', { page_location: location.href, page_referrer: document.referrer });
  }
})();
