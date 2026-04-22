/**
 * Brush & Broom LLP - Centralized Components
 * This file manages the header, footer, and global styles across all pages
 * Update this file to instantly reflect changes across the entire website
 */

class BrushBroomComponents {
  constructor() {
    this.init();
  }

  init() {
    this.injectHeader();
    this.injectFooter();
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
    header.innerHTML = `
      <div class="container nav-wrap">
        <a href="/" class="brand"><img src="/assets/images/header-logo.png" alt="Brush &amp; Broom LLP Logo" /></a>
        <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="Toggle navigation">Menu</button>
        <nav id="site-nav" class="nav" aria-label="Primary">
          <a href="/#services">Services</a>
          <a href="/about">About</a>
          <a href="/areas-we-serve">Areas</a>
          <a href="/community-care">Community Care</a>
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
          <div class="footer-brand">Brush <span>&amp;</span> Broom LLP</div>
          <p>Dustin and Brittany, a husband-and-wife team, provide Seattle and Eastside residential and commercial cleaning. We offer clear quotes, solid work, and honest communication.</p>
        </div>
        <div>
          <div class="footer-title">Contact</div>
          <p><a href="tel:206-571-5568">206-571-5568</a></p>
          <p style="margin-top:8px;"><a href="mailto:seabnbllp@brushnbroom.com">seabnbllp@brushnbroom.com</a></p>
        </div>
        <div>
          <div class="footer-title">Links</div>
          <div class="footer-links">
            <a href="/#services">Services</a>
            <a href="/about">About Us</a>
            <a href="/areas-we-serve">Areas We Serve</a>
            <a href="/community-care">Community Care</a>
            <a href="/#quote">Get a Quote</a>
            <a href="/routine-deep-maintenance-cleaning-bellevue-seattle">House Cleaning Seattle</a>
            <a href="/deep-cleaning-seattle">Deep Cleaning Seattle</a>
            <a href="/move-in-move-out-bellevue-seattle">Move-Out Cleaning Seattle</a>
            <a href="/post-construction-cleaning-seattle">Post-Construction Cleaning</a>
            <a href="/vacation-rental-cleaning-seattle">Vacation Rental Cleaning</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom"><p>&copy; 2026 Brush &amp; Broom LLP. All rights reserved.</p></div>
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
