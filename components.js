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
    this.setupChatWidgetPolish();
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
          <a href="/">Home</a>
          <a href="/about.html">About</a>
          <a href="/areas-we-serve.html">Areas</a>
          <a href="/community-care.html">Community Care</a>
          <a href="/" class="btn btn-amber">Get a Quote</a>
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
            <a href="/">Home</a>
            <a href="/about.html">About Us</a>
            <a href="/areas-we-serve.html">Areas We Serve</a>
            <a href="/community-care.html">Community Care</a>
            <div style="margin-top: 10px; opacity: 0.5; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">Our Specialties</div>
            <a href="/routine-deep-maintenance-cleaning-bellevue-seattle.html">House Cleaning Seattle</a>
            <a href="/deep-cleaning-seattle.html">Deep Cleaning Seattle</a>
            <a href="/move-in-move-out-bellevue-seattle.html">Move-Out Cleaning Seattle</a>
            <a href="/post-construction-cleaning-seattle.html">Post-Construction Cleaning</a>
            <a href="/vacation-rental-cleaning-seattle.html">Vacation Rental Cleaning</a>
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
   * Keep the third-party chat helper from visually overwhelming the site.
   * The widget is injected asynchronously with generated class names, so these
   * overrides target stable class-name fragments and re-apply when the DOM changes.
   */
  setupChatWidgetPolish() {
    const styleId = 'brush-broom-chat-polish';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        [class*="artibot-wrapper"] [class*="artibot-chatwindow-wrapper"] {
          width: min(380px, calc(100vw - 32px)) !important;
          max-width: calc(100vw - 32px) !important;
          height: min(620px, calc(100vh - 112px)) !important;
          max-height: calc(100vh - 112px) !important;
          right: 16px !important;
          left: auto !important;
          bottom: 88px !important;
          border-radius: 18px !important;
          overflow: hidden !important;
          box-shadow: 0 22px 55px rgba(15, 36, 25, 0.32) !important;
          z-index: 999 !important;
        }

        [class*="artibot-wrapper"] [class*="artibot-chatwindow-iframe"] {
          border-radius: 18px !important;
          background: var(--forest) !important;
        }

        [class*="artibot-wrapper"] [class*="artibot-launcher-bubble"] {
          display: none !important;
        }

        [class*="artibot-wrapper"] [class*="artibot-launcher"] {
          right: 18px !important;
          bottom: 18px !important;
          width: 58px !important;
          height: 58px !important;
          background: var(--amber) !important;
          border: 2px solid rgba(255, 255, 255, 0.86) !important;
          box-shadow: 0 12px 30px rgba(15, 36, 25, 0.28) !important;
          z-index: 1001 !important;
        }

        [class*="artibot-wrapper"] [class*="artibot-launcher"] svg,
        [class*="artibot-wrapper"] [class*="artibot-closer"] svg {
          fill: var(--forest-dark) !important;
          stroke: var(--forest-dark) !important;
        }

        [class*="artibot-wrapper"] [class*="artibot-closer"] {
          top: 12px !important;
          right: 12px !important;
          background: rgba(249, 247, 242, 0.94) !important;
          border-radius: 999px !important;
          box-shadow: 0 6px 16px rgba(15, 36, 25, 0.22) !important;
          z-index: 1002 !important;
        }

        @media (max-width: 700px) {
          [class*="artibot-wrapper"] [class*="artibot-chatwindow-wrapper"] {
            width: calc(100vw - 24px) !important;
            height: min(70vh, 560px) !important;
            right: 12px !important;
            bottom: 84px !important;
          }
        }
      `;
      document.head.appendChild(style);
    }

    let visitorOpenedChat = false;

    const polish = () => {
      const launcher = document.querySelector('[class*="artibot-launcher"]');
      const chatWindow = document.querySelector('[class*="artibot-chatwindow-wrapper"]');

      if (launcher && !launcher.dataset.brushBroomBound) {
        launcher.dataset.brushBroomBound = 'true';
        launcher.setAttribute('aria-label', 'Open chat helper');
        launcher.addEventListener('click', () => {
          visitorOpenedChat = true;
        }, { capture: true });
      }

      if (chatWindow) {
        chatWindow.style.setProperty('width', 'min(380px, calc(100vw - 32px))', 'important');
        chatWindow.style.setProperty('max-width', 'calc(100vw - 32px)', 'important');
        chatWindow.style.setProperty('height', 'min(620px, calc(100vh - 112px))', 'important');
        chatWindow.style.setProperty('max-height', 'calc(100vh - 112px)', 'important');
        chatWindow.style.setProperty('right', '16px', 'important');
        chatWindow.style.setProperty('left', 'auto', 'important');
        chatWindow.style.setProperty('bottom', '88px', 'important');
        chatWindow.style.setProperty('border-radius', '18px', 'important');
        chatWindow.style.setProperty('overflow', 'hidden', 'important');
        chatWindow.style.setProperty('box-shadow', '0 22px 55px rgba(15, 36, 25, 0.32)', 'important');
        chatWindow.style.setProperty('z-index', '999', 'important');
      }
    };

    const closeInitialChatIfExpanded = () => {
      if (visitorOpenedChat) return false;
      const closer = document.querySelector('[class*="artibot-closer"]');
      const chatWindow = document.querySelector('[class*="artibot-chatwindow-wrapper"]');
      if (closer && chatWindow && chatWindow.getBoundingClientRect().width > 0) {
        closer.click();
        return true;
      }
      return false;
    };

    polish();
    setTimeout(polish, 500);
    setTimeout(polish, 1500);

    let closeAttempts = 0;
    const initialCloseTimer = setInterval(() => {
      closeAttempts += 1;
      polish();
      if (closeInitialChatIfExpanded() || closeAttempts >= 14 || visitorOpenedChat) {
        clearInterval(initialCloseTimer);
      }
    }, 700);

    const observer = new MutationObserver(polish);
    observer.observe(document.body, { childList: true, subtree: true });
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
