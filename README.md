# Portfolio

Personal portfolio website built with React + Vite. It presents data science,
analytics, and research projects as short case studies rather than a list of
repositories. Each project's code lives in its own separate GitHub repo; this
repo holds only the site, the written case studies, and their figures.

## Running locally

```bash
npm install
npm run dev        # start the dev server (prints a localhost URL)
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

Requires Node 18 or newer.

## Project structure

```
public/
  favicon.svg
  _redirects                     # SPA fallback for Netlify
  resume.pdf                     # ADD THIS — your resume (see below)
  images/projects/               # figures, one folder, referenced from data/projects.js
src/
  main.jsx                       # app entry, sets up the Router
  App.jsx                        # route table
  index.css                      # design tokens + base styles (start here for look & feel)
  data/
    site.js                      # name, bio, skills, education, experience, links
    projects.js                  # the case studies — the file you'll edit most
  components/
    Layout.jsx / Header.jsx / Footer.jsx
    ScrollToTop.jsx              # resets scroll on navigation
    ProjectCard.jsx              # one row in the home-page project list
    Figure.jsx                   # image + caption
  pages/
    Home.jsx                     # intro + project list + focus areas + contact
    ProjectDetail.jsx            # /projects/:slug — renders one case study
    About.jsx
    Resume.jsx
    NotFound.jsx
```

Each component keeps its CSS in a sibling `.css` file that it imports. Class
names are prefixed by component (e.g. `.project-card__title`) so styles don't
collide. There is no CSS framework and no build-time CSS tooling beyond what Vite
does by default.

## Editing content

Almost everything you'll want to change is plain data:

- **Your details** (name, bio, skills, education, jobs, social links): `src/data/site.js`
- **Projects**: `src/data/projects.js`. Copy an existing object in the `projects`
  array and edit its fields. The field guide is in a comment at the top of that
  file. `slug` becomes the URL (`/projects/<slug>`).
- **Figures**: drop image files (SVG or PNG) into `public/images/projects/` and
  reference them from a project's `figures` array as `/images/projects/<file>`.
- **Resume PDF**: put your file at `public/resume.pdf`. The "Download PDF" button
  on the Resume page links to `/resume.pdf`.
- **Look and feel**: the color palette, fonts, spacing scale, and layout widths
  are CSS variables at the top of `src/index.css`. Change them there once.

The sample projects and the bio, experience, and education entries are
placeholder text. Replace them with your own.

## Deploying

Built for a host that serves the repo from the root path (Vercel or Netlify):

- **Vercel**: import the repo; framework preset "Vite" is detected. `vercel.json`
  adds the rewrite so deep links like `/projects/local-voter-turnout` work.
- **Netlify**: build command `npm run build`, publish directory `dist`. The
  `public/_redirects` file handles the SPA fallback.

If you instead host this as a GitHub Pages *project* site (served from
`username.github.io/portfolio/`), set `base: '/portfolio/'` in `vite.config.js`
and use `HashRouter` instead of `BrowserRouter` in `src/main.jsx`, or add a
Pages-specific 404 fallback.
