# Gallery continuation

Mode: Experience. Local extension of the existing photographic journey. User requests no visible title/instruction on the arch, then three more internet photographs appearing over one another from right to left. Preserve the original gallery and all hero behavior. No GitHub push after the arch backup without a new user request.

## Direction contract
THESIS: Continue the photographic passage with a second independent overlapping gallery; no side-by-side strip.
OWN-WORLD: Preserve forest, paper, sharp portrait frame and existing serif captions and navigation.
STORY: Exit the open gateway and discover Hohenzollern, Mont-Saint-Michel and Segovia with independent photographic backgrounds and linked credits.
FIRST VIEWPORT: A wide valley behind Hohenzollern; portrait frame right of center, unobtrusive heading left, counter right, navigation bottom. Mobile uses the established centered arrangement.
FORM: Assigned local extension, code-led; no new world, tournament or seed required. Incoming photos and backgrounds cover predecessors from right to left; only the selected caption is visible. Scroll remains natural and reversible.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Implemented surface

`#more-castles` follows `#passage` and precedes the footer. Its independent `.chapter-stage` is sticky at `100svh`, with `2800px` extra scroll distance (`2400px` at widths up to `480px`). The established responsive frame and controls are reused; the desktop heading maximum width is `27vw`, removed at widths up to `900px`. The heading reads “Путешествие продолжается”.

Order: Гогенцоллерн (Баден-Вюртемберг, Германия), Мон-Сен-Мишель (Нормандия, Франция), Алькасар Сеговии (Сеговия, Испания). Mont-Saint-Michel is a fortified island with an abbey; captions use its place name and location rather than a castle classification.

The shared `makeGallery`/`paintGallery` code gives each gallery separate frames, backgrounds, active state, counter, credit visibility, arrows, indicators and live region. Incoming images cover predecessors from right to left in one clipped portrait viewport, with synchronized background wipes. Only the selected caption is visible; its translation cancels its frame's movement. Scroll remains reversible, and controls navigate through the section's own scroll geometry. Keyboard arrows select the gallery at the current scroll position; horizontal swipes retain the established thresholds.

Foreground/background pairs: `hohenzollern-foreground.jpg` / `hohenzollern-background.jpg`, `mont-saint-michel-foreground.jpg` / `mont-saint-michel-background.jpg`, `segovia-foreground.jpg` / `segovia-background.jpg`. Six Wikimedia photographs are resized for delivery, cropped through CSS and recorded with source, author, license, dimensions and crop position in `dist/assets/sources.json`. Visible foreground and selected-background credits link to the individual source and license pages. No generated imagery is added by this extension.

Accessibility: descriptive Russian alternatives and labels, separate polite live region, `aria-current` on the active indicator, disabled endpoint arrows and inherited focus outlines. Inactive frames use `inert` and `aria-hidden`; the continuation gallery is inert outside its scroll vicinity. Decorative backgrounds stay hidden from assistive technology. Reduced motion disables CSS transitions, uses immediate control navigation and discrete rounded frame selection; the continuation keeps its natural scroll section. The portal is one static screen with an accessible heading and credit, with no visible title/instruction.

Documentation is narrowly merged into `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json` and both surface records. Incumbent tokens and primitive component previews remain intact.
