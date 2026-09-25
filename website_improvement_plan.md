# 🗂️ Sarshij Karn Portfolio — Full Audit & Improvement Plan

> Analysed: `index.html` (1479 lines), `main.js`, `script.js`, `micro-interactions.js`,
> `three-enhanced.js`, `webgl.js`, `vite.config.js`, `package.json`, all CSS files.

---

## 🔴 Priority 1 — Bugs / Quick Wins (implement first, biggest payoff)

### 1. Duplicate Three.js Renderer (Critical Bug)
**Problem:** Both `webgl.js` AND `three-enhanced.js` create a `new THREE.WebGLRenderer` on the **same** `#webgl-canvas` element. Only one is used, but the other still allocates a full GPU context.  
**Fix:** Remove `webgl.js` entirely — `three-enhanced.js` already supersedes it with better particles and geometry.

```
main.js → remove import of webgl.js (if any)
Delete assets/js/webgl.js
```

### 2. Duplicate GSAP CDN + Module Import (Wastes bandwidth)
**Problem:** In `index.html` lines 131–137, GSAP is loaded **twice** — once from CDN via `<script>` tags AND once via `import gsap from 'gsap'` in `script.js` (bundled by Vite). That's two copies of GSAP running at the same time.  
**Fix:** Remove the CDN `<script>` tags for gsap.min.js and ScrollTrigger.min.js from `index.html`.

### 3. `lenis` Still in `package.json` + `vite.config.js`
**Problem:** Lenis was removed from JS but it's still a `dependency` in `package.json` and has a `manualChunks` entry in `vite.config.js`. It will still be bundled.  
**Fix:** 
- Remove `"lenis": "^1.3.23"` from `package.json` dependencies
- Remove the lenis manualChunks line from `vite.config.js`
- Run `npm uninstall lenis`

### 4. `vanilla-tilt.min.js` CDN Script (Loaded but unused)
**Problem:** `index.html` loads `vanilla-tilt.min.js` from CDN on every page load, but VanillaTilt was replaced by custom CSS/GSAP hover effects. It's dead weight (~8KB parsed JS).  
**Fix:** Remove the `<script>` tag for vanilla-tilt from `index.html`.

### 5. Project Title Text Bug
**Problem:** Line 674 — project name starts with a hyphen: `"-BERT-Powered-Resume-Screener"`. Looks like a copy-paste artifact from the GitHub repo URL slug.  
**Fix:** Change to `"BERT-Powered Resume Screener"`.

---

## 🟡 Priority 2 — Performance

### 6. `webgl.js` Has No `antialias` Guard on Mobile
Even though the file is a duplicate (see #1), if it stays it renders with `antialias: true` on ALL devices — very expensive on mid-range phones. `three-enhanced.js` already uses `!this.isLowPerf` to control this, so removing `webgl.js` solves this too.

### 7. Three.js Particle Count on Desktop Is Still High
`three-enhanced.js` uses 400 particles on desktop. After removing bloom, this is fine, but you could drop to 250 on "medium" devices (1024–1440px) as a middle tier to target mid-range laptops.

### 8. `smartbot.js` Is Always Loaded Eagerly (18KB)
**Problem:** `smartbot.js` (18KB) is imported synchronously in `main.js` — it runs before the page is interactive.  
**Fix:** Dynamically import it like Three.js:
```js
// In main.js — defer smartbot like three-enhanced
window.addEventListener('load', () => {
  import('./assets/js/smartbot.js');
});
```

### 9. Inline CSS on `#webgl-canvas`
Line 157: `style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -20; pointer-events: none;"` — move this to `glassmorphism.css` so it's cached and not re-parsed on every paint.

### 10. Two PDFs in `/assets` Root
`assets/Sarshij-Karn-Resume.pdf` (301KB) and `assets/resume (1).pdf` (193KB) — the second one appears to be an old copy. Delete `resume (1).pdf` to save bandwidth.

---

## 🟢 Priority 3 — Content / UX Improvements

### 11. Skills Section — Add Proficiency Levels
The skills cards just list items as plain text. Adding a **visual proficiency bar** or **tag badges** (Beginner / Intermediate / Advanced) makes it far more readable for recruiters.

### 12. Projects Section — Missing Tech Stack Tags
None of the project cards show what tech was used (Python, React, etc.). Add small pill badges under each description like:
```
[Python] [MediaPipe] [DeepSORT]
```
These are also great for SEO keyword density.

### 13. No "Certifications" Section
You have Cybersecurity, AI/ML, and Electronics listed as skills — but no certification or achievement section. Even if you don't have formal certs yet, you could add:
- Courses completed (Coursera, YouTube, etc.)
- CTF participations
- Hackathons

### 14. Blog / Articles Section
As a tech content creator (YouTube mentioned in schema), adding a "Writings" or "Blog" section — even just 2–3 article cards linking to Medium/dev.to posts — dramatically increases time-on-page and SEO authority.

### 15. "Open to Work" / Availability Badge
A simple **green pulsing dot** + "Available for Freelance" badge near your name or in the sidebar would signal availability to recruiters immediately.

### 16. Project Cards Are Too Dense on Mobile
On the screenshot shown, 2-column project cards at `text-[10px]` are extremely hard to read on small phones. Consider 1-column on phones `< 480px` with a horizontal scroll carousel on small devices.

### 17. About Section — Stats Could Be More Impactful
Currently: GPA, Grade XII, Batch, Location. Consider replacing "Batch" with something more impressive like "Projects Built", "GitHub Stars", or "Certifications".

---

## 🔵 Priority 4 — SEO & Discoverability

### 18. Sitemap Missing Dynamic Pages
`public/sitemap.xml` only has one URL (`/`). If you have project sub-pages or a blog, add them. Also ensure the sitemap `<lastmod>` date is updated on each build.

### 19. OG Image Is Your Profile Photo (Not Ideal)
`og:image` points to `me.webp` (30KB). The ideal OG image is a **1200×630px** branded banner with your name, title, and a dark/tech background. This is what shows when you share your link on LinkedIn, WhatsApp, Twitter — currently it just shows your portrait.  
**Fix:** Create a dedicated `og-banner.webp` image.

### 20. Missing `alt` on the Hero Body Image
Line 376: `<img src="assets/img/HomepageFix.webp" alt="Sarshij Karn">` — the alt text should be more descriptive: `alt="Sarshij Karn, Electronics and AI Engineer"`.

### 21. `data-lenis-prevent` Attribute on Sidebar
Line 172: `data-lenis-prevent` is still on the `<aside id="sidebar">`. Since Lenis is removed, this attribute is dead. Not harmful, just cleanup.

---

## 🟣 Priority 5 — Design Polish

### 22. Add a "Currently Learning" Ticker
A subtle scrolling ticker or blinking terminal line at the bottom of the About section:
```
> Currently studying: VLSI Design, OWASP Top 10, Transformer Architecture_
```
This adds life and shows you're actively learning.

### 23. Keyboard Shortcut for Sidebar
Add `Ctrl+/` or `K` as a keyboard shortcut to open the sidebar/nav. Developers love this.

### 24. Page Transition Between Sections
When navigating anchor links, add a very subtle CSS fade-in on each section entering the viewport. Currently sections just appear — a 0.15s opacity fade would feel premium.

### 25. Footer Is Missing
There is no proper footer. Add a minimal footer with:
- Copyright line
- "Built by Sarshij Karn with ❤️"
- Quick nav links
- Back to top

---

## 📊 Priority Summary Table

| # | Item | Effort | Impact |
|---|------|--------|--------|
| 1 | Remove duplicate `webgl.js` renderer | 5 min | 🔴 High (GPU) |
| 2 | Remove duplicate GSAP CDN scripts | 5 min | 🔴 High (parse time) |
| 3 | Uninstall Lenis from package.json | 5 min | 🟡 Medium |
| 4 | Remove vanilla-tilt CDN | 2 min | 🟡 Medium |
| 5 | Fix project title hyphen | 1 min | 🟢 Low |
| 8 | Lazy-load smartbot.js | 10 min | 🟡 Medium |
| 11 | Skill proficiency bars | 30 min | 🟢 Medium UX |
| 12 | Tech stack tags on projects | 20 min | 🟢 Medium UX+SEO |
| 13 | Certifications section | 1 hr | 🟢 High content |
| 19 | OG banner image | 30 min | 🟡 Medium SEO |
| 25 | Footer | 30 min | 🟢 Completeness |

---

> 💡 **Recommended immediate actions (in order):**
> 1. Remove duplicate GSAP CDN scripts (`index.html` lines 130–137)
> 2. Remove `webgl.js` 
> 3. `npm uninstall lenis` and clean `vite.config.js`
> 4. Remove vanilla-tilt CDN script
> 5. Create a proper OG banner image
