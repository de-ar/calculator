# AGENTS.md

## What this repo is

A single-page JavaScript calculator (`index.html` + `assets/`). No build step, no package manager, no tests, no linter, no formatter, no CI. Pure static site.

## Run it

Open `index.html` directly in a browser, or serve the directory with any static server (e.g. `python3 -m http.server`). That's the entire verification loop — there is nothing to build or install.

## Structure

- `index.html` — entry point. A stack of `<div>`s (id `#frame-top-wrap`, `#frame-top-left-wrap`, `#button-*` etc.) layered with `<img>` slices from `assets/images/`, plus two `<input class="display">` fields (`#screen`, `#result`).
- `assets/css/app.css` — styles. Layout relies on large negative `margin-top` values to stack the image slices; touching one offset cascades.
- `assets/js/app.js` — calculator logic. Exposes globals `appendDigit`, `pressAdd`, `pressSubtract`, `pressMultiply`, `pressDivide`, `pressPoint`, `evaluate`, `clearScreen` — wired via inline `onclick` attributes in `index.html`.
- `assets/images/` — PNG slices of a real calculator (sourced from a 2017 web image, see `calculator-reference.jpg`).
  - `frame-top.png`, `frame-top-left.png`, `frame-upper-right.png`, `screen-bottom.png`, `off-decoration.png`, `frame-filler-1..8.png` — decorative casing slices (no click handler).
  - `button-0.png` … `button-9.png` — digit button face images.
  - `button-add.png`, `button-subtract.png`, `button-multiply.png`, `button-divide.png`, `button-clear.png`, `button-equals.png`, `button-point.png` — operator button face images.
  - `calculator-reference.jpg` — the original 2017 reference image (also linked from `README.md`).
  - `source-inspiration.png` — the unsourced image this project was modeled on (kept for historical context; not used by the UI).
- `assets/fonts/digital-7.regular.ttf` — `Digital-7` font, used by `.display` only.

## Gotchas

- **`eval()` in `evaluate()`** (`assets/js/app.js:39`) runs whatever is in `#screen`. Fine for a local toy, dangerous if input ever comes from outside the buttons.
- **Layout is fragile.** The button grid is positioned by manual negative margins in `app.css`, not a real layout. Visual changes mean recalculating offsets, not just adding CSS.
- **`index.html` is the only map from element id to image file.** Every `<img src>` resolves a role name (`button-7.png`, `frame-top-left.png`, etc.); renaming an image file means updating `index.html` too, and there's no compile-time warning.
- **No `.gitignore`.** Don't add `node_modules/` etc. — there is no toolchain to produce artifacts.
- **`var` and inline `onclick`.** The code is intentionally old-style ES5; keep consistent unless refactoring the whole file.

## Git

- Remote: `git@github.com:de-ar/calculator.git`
- Default branch on remote: `master`; local working branch: `v1`. Use `v1` for new work unless told otherwise.
- No conventional-commit / PR-template conventions are configured.
