# Brush & Broom LLP - Seattle Cleaning & Painting

A professional website for Brush & Broom LLP, a family-run Seattle-based cleaning and painting company specializing in house cleaning, move-out cleaning, interior painting, and exterior painting services.

## Overview

This is a static website built with HTML, CSS, and JavaScript. The site features a modern "Pacific Northwest Craftsman" design system with responsive layouts and smooth scroll animations.

## Project Structure

```
brushbroom/
├── index.html                                          # Homepage
├── about.html                                          # About us page
├── areas-we-serve.html                                # Service areas page
├── interior-exterior-house-painting-bellevue-seattle.html  # Painting services page
├── move-in-move-out-bellevue-seattle.html            # Move-out cleaning services page
├── routine-deep-maintenance-cleaning-bellevue-seattle.html # Routine cleaning services page
├── thank-you.html                                      # Form submission confirmation page
├── styles.css                                          # Global stylesheet
├── sitemap.xml                                         # XML sitemap for search engines
├── robots.txt                                          # Search engine crawler instructions
└── README.md                                           # This file
```

## Features

- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Smooth Animations**: Scroll-triggered fade-up animations for visual engagement
- **Form Integration**: Contact form powered by Formspree for quote requests
- **SEO Optimized**: Proper meta tags, structured data (JSON-LD), and XML sitemap
- **Accessibility**: Semantic HTML and ARIA labels for screen readers
- **Modern Typography**: Custom fonts (DM Serif Display and DM Sans) from Google Fonts

## Design System

### Color Palette
- **Forest Green**: `#1a3c2a` (primary brand color)
- **Amber**: `#d4943a` (accent color)
- **Charcoal**: `#2c2a26` (text color)
- **Cream**: `#f5f0e8` (background color)

### Typography
- **Headings**: DM Serif Display
- **Body**: DM Sans

## Services Offered

1. **House Cleaning**: Regular, deep, and reset cleaning services
2. **Move-Out Cleaning**: Turnover cleaning for renters and landlords
3. **Interior Painting**: Wall painting, trim work, and full-room repaints
4. **Exterior Painting**: Curb appeal and home protection services

## Contact Information

- **Phone**: (206) 571-1092
- **Email**: seabnbllp@icloud.com
- **Service Area**: Seattle and the Eastside

## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Bnbllp/brushnbroom.git
   cd brushnbroom
   ```

2. Open `index.html` in your web browser or use a local server:
   ```bash
   python3 -m http.server 8000
   # Then navigate to http://localhost:8000
   ```

### Deployment

This is a static website and can be deployed to any static hosting service such as:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront

Ensure the `CNAME` file is configured correctly for custom domain deployment.

## File Descriptions

### HTML Files
- **index.html**: Main landing page with hero section, services overview, process explanation, FAQ, and contact form
- **about.html**: Company story, team members, and core values
- **areas-we-serve.html**: Service area map and neighborhood listings
- **Service Pages**: Detailed pages for each service offering with specific information and CTAs

### CSS
- **styles.css**: Centralized stylesheet containing all design system styles, responsive breakpoints, and animations

### JavaScript
JavaScript functionality is embedded directly in HTML files for mobile navigation toggle, sticky header behavior, scroll animations, and form interactions.

### SEO & Configuration
- **sitemap.xml**: XML sitemap listing all pages for search engine crawling
- **robots.txt**: Instructions for search engine bots
- **CNAME**: Custom domain configuration file

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- External CSS file for better caching
- Optimized images hosted on CDN (Cloudfront)
- Minimal JavaScript for fast page load
- Responsive images and lazy loading ready

## Maintenance

### Adding New Pages
1. Create a new HTML file with the same structure as existing pages
2. Ensure it links to `/styles.css`
3. Update `sitemap.xml` with the new page URL
4. Update navigation links across all pages

### Updating Styles
All styles are centralized in `styles.css`. Make changes there and they will apply across all pages.

### Form Submissions
The contact form uses Formspree. Submissions are sent to the configured email address. To change the form endpoint, update the `action` attribute in the form tag.

## Future Enhancements

- Add blog section for home maintenance tips
- Implement photo gallery for before/after comparisons
- Add online booking system
- Implement customer testimonials section
- Add team member profiles with photos

## License

This project is proprietary to Brush & Broom LLP.

## Support

For issues or questions about the website, please contact:
- Email: seabnbllp@icloud.com
- Phone: (206) 571-1092

---

**Last Updated**: March 25, 2026
