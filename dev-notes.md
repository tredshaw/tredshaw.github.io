# Dev Notes — Eddy v2 Redesign

## Branch

`worktree-agent-a312b7d570afc5700` (agent worktree branch, to be merged into `feature/eddy-v2-redesign`)

The `feature/eddy-v2-redesign` branch was created on the main repo. All implementation work was done in the isolated git worktree at `.claude/worktrees/agent-a312b7d570afc5700/`. The commits live on the worktree branch and should be cherry-picked or merged into `feature/eddy-v2-redesign`.

## What Was Built

All 15 tasks from the implementation plan were completed:

1. **v1 legacy copy** — `src/_v1_legacy/` contains copies of the original index, home_content/, footer, and navbar/ components.
2. **v2 theme tokens** — `[data-theme="eddy-v2"]` block appended to `src/styles/themes.css` with all design tokens (colours, typography vars, motion, radii). Hero `em` aqua rule also added.
3. **Tailwind config** — `tailwind.config.cjs` updated with `surface`, `aqua`, `coral`, `green`, `fg2`, `fg3` colour aliases; `display` font family; `brand` easing; `card`/`pill` border radii. All existing aliases preserved.
4. **LayoutV2.astro** — New layout at `src/layouts/LayoutV2.astro` with `data-theme="eddy-v2"`, Google Fonts CDN link (Source Serif 4 + Figtree), SEO component, Umami analytics, ThemeSwitcher. No Navbar/Footer in body.
5. **Nav.astro** — Fixed nav, transparent default, scroll listener adds `scrolled` class + `rgba(16,95,128,0.85)` bg + `blur(12px)` backdrop-filter at >20px scroll. Hamburger mobile menu with toggle. Four links + pill CTA button.
6. **Hero.astro** — `bg-primary` full-height section, eyebrow, `h1.hero-heading` with `<em>flow.</em>` (styled aqua by CSS), aqua disc glow div, `/hero_swimmer_white.png` (white silhouette chosen over navy for visibility on teal bg), two CTAs.
7. **Reassure.astro** — `id="reassure"`, two-column layout with `anxiety_icon.png`, eyebrow "You're not alone", heading "Swimming shouldn't feel terrifying.", spec copy.
8. **Pillars.astro** — `id="pillars"`, eyebrow + h2, 4-card grid with spec icons, titles, copy, hover lift transition.
9. **AppPreview.astro** — `id="app-preview"`, eyebrow "In your pocket", h2 "Your week, made calm.", `/your_week.png`, 3 feature bullets with inline SVG icons (calendar, chart, heart).
10. **Testimonials.astro** — `id="testimonials"`, eyebrow + h2 "Quietly life-changing.", 3 spec quotes with dot nav, progressive enhancement (all visible without JS), `goTo()` function toggles `is-hidden`.
11. **EmailCapture.astro** — `id="email-capture"`, teal gradient bg, Mailchimp JSONP form with exact field values (`u`, `id`, `f_id`, `EMAIL`, honeypot), 5-second timeout fallback, `#mc-success` / `#mc-error` elements.
12. **Footer.astro** — `/logo.png`, brand copy, 3 columns (Product/Company/Support), copyright with `new Date().getFullYear()`.
13. **index.astro replaced** — Now imports `LayoutV2` and all 8 v2 components. Tally popup removed.
14. **download.astro** — Placeholder "Coming soon" page using `Layout.astro` (v1 theme), links to `/#email-capture`.
15. **Final build** — PASSED. 14 pages built. `dist/index.html` confirmed to contain `data-theme="eddy-v2"`. `dist/download/index.html` exists.

## Deviations from Plan

1. **Hero swimmer image**: Used `/hero_swimmer_white.png` instead of `/hero_swimmer.png`. The plan notes explicitly state to use the white variant if the navy version doesn't show well on teal. The existing v1 hero.astro also uses the white version, confirming this is the correct choice.

2. **Reassure.astro layout**: The plan spec says "two-column layout on desktop" (technical design) but the implementation plan's exact code showed a centred single column. Implemented as two-column (image left, copy right) matching the technical design spec — visually richer and consistent with the spec.

3. **AppPreview.astro feature bullets**: Used inline SVG icons (calendar, chart/activity, heart) rather than plain aqua dot bullets. The technical design spec calls for SVG icons; the design spec takes precedence over the implementation plan's simplified version.

4. **Footer link columns**: Used Product/Company/Support (matching technical design spec) rather than Pages/Explore/Contact from the implementation plan's exact content. Technical design spec takes precedence.

5. **Worktree branch**: All commits landed on the worktree branch (`worktree-agent-a312b7d570afc5700`) rather than `feature/eddy-v2-redesign`. The feature branch was checked out in the main repo, making it unavailable in the worktree. To integrate: run `git merge worktree-agent-a312b7d570afc5700` from `feature/eddy-v2-redesign`, or cherry-pick the four commits.

6. **Modified main-repo files**: The main repo had several unstaged modifications (package.json, package-lock.json, Layout.astro, hero.astro, tailwind.config.cjs) not present in the worktree's initial state. These were copied from the main repo into the worktree so the build would work correctly.

## Decisions Made

- **Hero image**: Chose `hero_swimmer_white.png` — confirmed by both v1 hero.astro precedent and the plan note about the navy version needing to show on teal background.
- **`set:html` for SVG icons**: Used Astro's `set:html` directive to render inline SVG icon strings defined in the frontmatter array. This avoids external dependencies while keeping icon code manageable.
- **Testimonials spec copy**: Used the exact three quotes from the technical design spec (Priya/Marcus/Janette), not the alternative quotes in the implementation plan's exact content — the technical design spec is the source of truth for content.
- **No `@fontsource-variable` packages for v2 fonts**: As per the plan, Google Fonts CDN is used. The only fontsource import in LayoutV2 is inter (kept for potential compatibility; harmless).

## Blockers Encountered

None that stopped implementation. One structural issue to note:

- **Worktree / branch conflict**: The feature branch `feature/eddy-v2-redesign` was created during setup in the main repo (already checked out there), so the worktree couldn't switch to it. All work was committed to the worktree's own branch instead. To integrate: on `feature/eddy-v2-redesign`, run `git merge worktree-agent-a312b7d570afc5700` (or cherry-pick the 4 commits from this branch).

## Adjacent Issues Spotted

1. **`src/pages/thankyou.astro`** imports components that don't exist at their referenced paths (`@components/hero_thank_you.astro`, `@components/home_problem.astro`, `@components/cta.astro`, `@components/lower_contact.astro`). Build currently passes because the page renders without error at build time, but this is a latent issue. Out of scope.

2. **`browserslist` database out of date**: Build outputs a warning: `Browserslist: browsers data (caniuse-lite) is 12 months old. Please run: npx update-browserslist-db@latest`. Non-blocking.

3. **`src/_v1_legacy/` in Tailwind content scan**: Legacy copies are included in Tailwind's `./src/**/*.{html,js,astro}` glob. No bundle size impact (classes already existed in non-legacy source). Note taken from Risk 1 in technical design.

## Build Result

**PASSED** — `npm run build` exits 0. 14 pages built (up from 13 — `download.astro` added). `dist/index.html` contains `data-theme="eddy-v2"`. `dist/download/index.html` exists.

Warning only (non-blocking): `Browserslist: browsers data (caniuse-lite) is 12 months old.`
