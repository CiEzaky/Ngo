# Nurturing Nest Children Ministry Uganda: homepage prototype

Static site (HTML, CSS, JS). No build step, no dependencies, no tracking, no payments.

## Run locally
1. Open `index.html` in a browser, or
2. `python3 -m http.server 8000` in this folder, then visit http://localhost:8000

## Customise
- **Colours / fonts:** the `:root` block at the top of `styles.css`.
- **Content:** search `index.html` for `class="ph"`. Every `[bracketed]` item is a placeholder. Replace it and remove the `ph` class.
- **Programmes / updates:** duplicate or delete an `<article class="card">`.
- **Imagery:** the hero is an original SVG. If you add photos, use only images you own or that carry a licence allowing this use (record the source and licence), add meaningful `alt` text, and **never publish identifiable children without written consent from a parent or guardian** and ministry approval. Prefer images of activities, hands, places or illustrations.
- **Remove the prototype banner** (`.banner`) and footer disclaimer when going live.
- Confirm the exact Google Maps listing with the ministry, then fill in the address and map link. Update the JSON-LD block with confirmed URL and phone.

## Connecting the form (required before going live)
The form currently validates in the browser only and sends nothing. To receive enquiries:
1. Choose a form service (e.g. Formspree, Netlify Forms) or your own backend.
2. Add `action`/`method` or a `fetch` call in `script.js`.
3. Add a privacy notice and consent line: what you collect, why, who sees it, how long you keep it. Check Uganda's Data Protection and Privacy Act, 2019.
4. Do not ask for information about children.

## Deploy (free options)
- **Netlify:** drag the folder onto app.netlify.com/drop.
- **GitHub Pages:** push to a repo, then Settings → Pages → deploy from `main` / root.
- **Cloudflare Pages:** connect the repo; build command empty, output directory `/`.
Then point a domain at it and use HTTPS (all three provide it).

## Before launch checklist
- [ ] All placeholders replaced with ministry-approved text
- [ ] Safeguarding / privacy policies linked
- [ ] Form connected and tested, or replaced with a plain email/phone contact
- [ ] Image licences recorded; consent on file for any people shown
- [ ] Tested on a small phone and with keyboard-only navigation
