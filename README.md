# Brush & Broom LLP — brushnbroom.com

The primary production website for Brush & Broom LLP, a family-run Seattle-area cleaning company. Deployed via GitHub Pages at **[brushnbroom.com](https://brushnbroom.com)**.

## Project Structure

```
brush nbroom/
├── index.html                                                   # Homepage
├── about.html                                                   # About us
├── areas-we-serve.html                                          # Service areas
├── community-care.html                                          # Community care program
├── deep-cleaning-seattle.html                                   # Deep cleaning service page
├── move-in-move-out-bellevue-seattle.html                       # Move-in/out cleaning
├── post-construction-cleaning-seattle.html                      # Post-construction cleaning
├── routine-deep-maintenance-cleaning-bellevue-seattle.html      # Routine cleaning
├── vacation-rental-cleaning-seattle.html                        # Vacation rental cleaning
├── thank-you.html                                               # Form confirmation page
├── styles.css                                                   # Global stylesheet
├── components.js                                                # Shared nav/footer components
├── ai-assistant.js                                              # AI chat assistant
├── sitemap.xml                                                  # XML sitemap (.html URLs)
├── robots.txt                                                   # Crawler instructions
├── _config.yml                                                  # GitHub Pages / Jekyll config
├── .htaccess                                                    # Apache config (not used on GH Pages)
├── .nojekyll                                                    # Disables Jekyll processing
├── CNAME                                                        # Custom domain: brushnbroom.com
└── assets/                                                      # Images and static assets
```

## Important: GitHub Pages & URLs

GitHub Pages **does not process `.htaccess`** — it uses nginx, not Apache. Clean URL rewrites defined in `.htaccess` are ignored. All sitemap URLs and canonical tags use `.html` extensions (e.g. `/about.html`, `/deep-cleaning-seattle.html`) to match the actual served files. Do not change these to extensionless URLs unless the hosting platform supports rewrites.

## Design System

### Color Palette
- **College Navy**: `#002244` — primary brand color
- **Action Green**: `#69BE28` — accent color
- **Wolf Gray**: `#A5ACAF` — optional neutral accent
- **Charcoal**: `#2c2a26` — text color
- **Cream**: `#f5f0e8` — background color

### Typography
- **Headings**: DM Serif Display (Google Fonts)
- **Body**: DM Sans (Google Fonts)

## Services

- Routine & deep house cleaning
- Move-in / move-out cleaning
- Post-construction cleaning
- Vacation rental cleaning
- Community care program

## Contact

- **Phone**: 206-571-5568
- **Email**: seabnbllp@brushnbroom.com
- **Service Area**: Seattle, Bellevue, and the Eastside

## Local Development

```bash
git clone https://github.com/bnbllp/brushnbroom.git
cd brushnbroom
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Maintenance

### Adding New Pages
1. Create the new `.html` file following the existing page structure
2. Link to `styles.css` and include `components.js` for shared nav/footer
3. Add a `<link rel="canonical">` tag pointing to `https://brushnbroom.com/your-page.html`
4. Add the page to `sitemap.xml` using the `.html` URL
5. Update navigation links in all other pages as needed

### Sitemap
The sitemap lives at `https://brushnbroom.com/sitemap.xml` and is referenced in `robots.txt`. All URLs must end in `.html` (or `/` for the homepage). Do not use extensionless URLs — they will 404 on GitHub Pages.

### Form Submissions
The contact form uses Formspree. To update the endpoint, change the `action` attribute on the `<form>` tag in `index.html`.

### JavaScript
- `components.js` — injects shared nav and footer HTML across all pages
- `ai-assistant.js` — powers the on-page AI chat widget

## Relationship to brushandbroomllp.com

The repo `bnbllp/brushandbroomllp.com` (hosted at `brushandbroomllp.com`) contains redirect stubs only. Every page there performs a `meta refresh` to the corresponding page on this site and includes a canonical tag pointing here. That repo exists solely to redirect legacy traffic — all real content lives in this repository.

## Browser Support

- Chrome, Firefox, Safari, Edge (latest)
- iOS Safari, Chrome Mobile

---

**Last Updated**: April 24, 2026
