# Marvel C. Chinedozie · Personal website

## Files

```
MyWebsite/
├── index.html                        page structure
├── Marvel_Chiednzoie_Lebenslauf.pdf  your CV (the "Download CV" buttons link here)
├── css/style.css                     design (neural cosmos theme)
├── js/content.js                     ALL text, links, skills, experience, certificates
├── js/main.js                        logic: animations, EN/DE switch, GitHub, terminal
└── assets/profile.jpg, favicon.png   photo from your CV
```

## Preview
Double-click `index.html` to open it in your browser.

## Editing
Everything you'd normally change is in `js/content.js`:
- **Socials**: fill in `url` for X or YouTube to show them (empty = hidden).
- **Projects**: add entries to `projects: [...]`. Your public GitHub repos are also loaded live from `Marvelchinedozie`.
- **New CV**: replace the PDF and update `cv:` if the filename changes.
- Text uses `{ en: "...", de: "..." }` for both languages.

## Features
- Animated neural-cosmos background (reacts to the mouse)
- English / German toggle (remembers the choice)
- Interactive skills constellation
- Live GitHub repositories and stats
- Career/education timeline with filters
- Certificates, languages, interests (Photography links to Instagram)
- Contact: copy email, form that opens your mail app
- Hidden terminal: press ` (backtick) and type `help`

## Going online (free)
- **GitHub Pages**: create a repo named `marvelchinedozie.github.io`, upload the contents of this folder, and the site will be at https://marvelchinedozie.github.io
- **Netlify**: drag this folder onto https://app.netlify.com/drop

Note: the CV PDF includes your phone number and home address. If you'd rather keep those private, upload a version without them before going online.
