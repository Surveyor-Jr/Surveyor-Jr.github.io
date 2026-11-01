# Kumbirai Nicholas Matingo — Personal portfolio

A custom, responsive Bootstrap portfolio for GitHub Pages. Built with plain HTML, CSS and JavaScript; no installation, build system, API keys or backend are required.

## Preview

Open `index.html` in a browser, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Keep `index.html`, `.nojekyll` and `assets/` at the root of `Surveyor-Jr.github.io`.
2. Commit and push the reviewed files to the branch used by GitHub Pages.
3. In the repository's Pages settings, use the root of that branch. The portfolio has no build step.
4. Visit `https://surveyor-jr.github.io/` after deployment completes.

This version has been prepared locally. No GitHub push or public deployment was performed.

## Edit the website

- `index.html`: biography, projects, sources, publications, experience and contact links.
- `assets/css/site.css`: custom theme, spacing, typography and responsive layouts.
- `assets/js/site.js`: mobile menu, project filters, active navigation and footer year.
- `assets/css/fonts.css` and `assets/fonts/`: locally hosted Montserrat.
- `assets/images/`: resized WebP derivatives of supplied photographs. The original photographs are untouched. Three additional prepared images (`lesotho`, `speaking`, `community`) support future editing; `community` is currently used in the open-data project.

Project cards use `data-category="health"`, `systems` or `community`. Add matching filter buttons if adding a new category. All projects remain visible without JavaScript; native HTML disclosures still work. The mobile navigation also remains available without JavaScript.

## Design and accessibility

Warm white, charcoal and a muted olive accent; Montserrat; editorial typography and documentary photographs. Semantic sections, image descriptions, visible keyboard focus, a skip link, reduced-motion support, and filter status announcements are included. Contact opens the visitor's email client; there is no non-functional submission form. Images below the introduction are lazy-loaded.

## Content maintenance

Public claims link to original sources in context. `SOURCES.md` records the editorial provenance and items worth confirming before publishing. Career details are drawn from the supplied portfolio and the user's professional context. Future research interests are described as interests, not an awarded doctoral position.

## Licenses

The original repository's GNU GPL v3 LICENSE is retained. Bootstrap retains its MIT license header, with its license in `assets/vendor/BOOTSTRAP-LICENSE.txt`. Montserrat is distributed under the SIL Open Font License in `assets/fonts/OFL.txt`. Photographs and personal content retain their owners' rights; the source-code license does not purport to grant rights to third-party photographs or media.
