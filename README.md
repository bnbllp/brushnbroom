# Brush & Broom LLP — brushnbroom.com

The primary production website for Brush & Broom LLP, a family-run Mount Vernon-area cleaning company. Deployed via GitHub Pages at **[brushnbroom.com](https://brushnbroom.com)**.

## Project Structure

```
brush nbroom/
├── index.html                                                   # Homepage
├── about.html                                                   # About us
├── areas-we-serve.html                                          # Service areas
├── community-care.html                                          # Community care program
├── deep-cleaning-mount-vernon.html                                   # Deep cleaning service page
├── move-in-move-out-mount-vernon.html                       # Move-in/out cleaning
├── post-construction-cleaning-mount-vernon.html                      # Post-construction cleaning
├── routine-house-cleaning-mount-vernon.html      # Routine cleaning
├── vacation-rental-cleaning-mount-vernon.html                        # Vacation rental cleaning
├── thank-you.html                                               # Form confirmation page
├── privacy.html                                                 # Privacy note
├── 404.html                                                     # Branded missing-page
├── styles.css                                                   # Global stylesheet
├── components.js                                                # Shared nav/footer components
├── sitemap.xml                                                  # XML sitemap (.html URLs)
├── robots.txt                                                   # Crawler instructions
├── _config.yml                                                  # GitHub Pages / Jekyll config
├── .htaccess                                                    # Apache config (not used on GH Pages)
├── .nojekyll                                                    # Disables Jekyll processing
├── CNAME                                                        # Custom domain: brushnbroom.com
└── assets/                                                      # Images and static assets
```

## Important: GitHub Pages & URLs

GitHub Pages **does not process `.htaccess`** — it uses nginx, not Apache. Clean URL rewrites defined in `.htaccess` are ignored. All sitemap URLs and canonical tags use `.html` extensions (e.g. `/about.html`, `/deep-cleaning-mount-vernon.html`) to match the actual served files. Do not change these to extensionless URLs unless the hosting platform supports rewrites.

## Design System

### Color Palette
- **Forest**: `#1A3C2A` — primary brand color
- **Amber**: `#C5A059` — button and accent color
- **Amber text**: `#7A5E2A` — gold used as text on cream (passes contrast)
- **Charcoal**: `#242424` — text color
- **Cream**: `#F9F7F2` — background color

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
- **Service Area**: Mount Vernon and surrounding areas

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
The contact form uses Formspree (`https://formspree.io/f/mykbgkbn`). It accepts an optional photo upload, includes a `_gotcha` honeypot, and links to `privacy.html`. The homepage and thank-you page both say we reply within one business day.

### JavaScript
- `components.js` — injects the shared nav and footer, a skip link, and upgrades `http://` visits on brushnbroom.com to HTTPS

### Images
Hero and service photos live in `assets/images/` as compressed WebP. Do not hotlink the old CloudFront URLs; those objects return Access Denied. Phone originals and unused stock files were removed so the homepage stays light.

### HTTPS
GitHub Pages ignores `.htaccess`. `https://www.brushnbroom.com` already redirects to the canonical site, `https://brushnbroom.com`. Plain `http://brushnbroom.com` was still returning 200 as of September 2026. Force HTTPS in Cloudflare if you want that closed: SSL/TLS → Edge Certificates → Always Use HTTPS, then HSTS.

`brushandbroomllp.com` is retired on purpose. New clients use brushnbroom.com. Do not restore the old domain.

## Relationship to brushandbroomllp.com

The repo `bnbllp/brushandbroomllp.com` is an unused leftover of redirect stubs. It is not part of the live site. All content lives in this repository.

## Browser Support

- Chrome, Firefox, Safari, Edge (latest)
- iOS Safari, Chrome Mobile

---

**Last Updated**: September 22, 2026
