---
name: "Castle — Камень и время"
description: "Cinematic castle photography with oversized cream typography, a split hero and an overlapping gallery."
colors:
  forest: "#172b25"
  paper: "#fdf1e1"
  ink: "#111b16"
  paper-hover: "#fff"
  paper-note: "#fdf1e1b3"
  paper-indicator: "#fdf1e168"
  gallery-note: "#fdf1e1c9"
  header-divider: "#fdf1e16b"
  footer-divider: "#fdf1e144"
  header-surface: "rgba(13,23,19,.45)"
  stage-sky: "#78b7df"
  hero-sky: "#5799df"
  scrollbar: "#acae91"
typography:
  display:
    fontFamily: '"Ogg Medium", Georgia, serif'
    fontSize: "clamp(100px,17vw,260px)"
    fontWeight: 500
    lineHeight: 0.78
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Georgia, serif"
    fontSize: "26px"
    fontWeight: 400
    lineHeight: 1.2
  title:
    fontFamily: "Georgia, serif"
    fontSize: "clamp(24px,2.4vw,36px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-.03em"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "14px"
    lineHeight: 1.4
  intro:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "20px"
    lineHeight: 1.35
  label:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "12px"
    letterSpacing: ".06em"
  counter:
    fontFamily: '"Ogg Medium", Georgia, serif'
    fontSize: "34px"
    fontWeight: 500
    lineHeight: 1
  closing:
    fontFamily: "Georgia, serif"
    fontSize: "clamp(36px,5.5vw,80px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-.03em"
rounded:
  frame: "0px"
  pill: "50px"
  indicator: "3px"
spacing:
  caption: "16px"
  caption-copy: "8px"
  caption-credit: "9px"
  control-gap: "10px"
  desktop-gutter: "40px"
  tablet-gutter: "24px"
  mobile-gutter: "20px"
components:
  hero-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  hero-tag-hover:
    backgroundColor: "{colors.paper-hover}"
  gallery-frame:
    rounded: "{rounded.frame}"
    width: "min(36vw,560px)"
    height: "min(62vh,650px)"
  gallery-caption:
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    height: "112px"
    padding: "16px 2px 0"
  gallery-credit:
    textColor: "{colors.paper-note}"
  gallery-indicator:
    backgroundColor: "{colors.paper-indicator}"
    rounded: "{rounded.indicator}"
    width: "3px"
    height: "38px"
  gallery-indicator-active:
    backgroundColor: "{colors.paper}"
---

# Design System: Castle — Камень и время

## Overview

**Creative North Star: "Камень и время"**

The user's pinned Mostar and Saisei references establish oversized cream Ogg lettering, cinematic photography and scroll choreography. The high-resolution supplied castle opens the page; its transparent foreground separates into left and right tower halves to reveal a gallery of other real castles. This records the implemented direction and the user's requested refinement.

The mood stays quiet, spacious and cinematic. Forest surfaces, warm paper lettering and Russian editorial copy surround photographic fields. Three sourced photographs—Нойшванштайн, Эйлен-Донан and Шильон—form the gallery. Each incoming portrait image slides over the preceding image inside one shared frame while its matching full-screen background wipes into view.

**Key Characteristics:**

- Oversized serif display type on full-screen photography.
- A transparent castle foreground splitting outward into two halves.
- Sharp-cornered overlapping gallery frames and synchronized background wipes.
- Visible photo attribution and equivalent scroll, keyboard, button and swipe navigation.

## Colors

The palette pairs dark forest and ink with warm paper. Frontmatter owns the reusable color values; photographic overlays remain in component CSS and sidecar motion/depth guidance.

### Primary

- **Forest:** page canvas and closing section, carrying photographic greens into the interface.
- **Paper:** titles, navigation, controls, caption copy and filled hero tags.

### Neutral

- **Ink:** text inside paper tags.
- **Paper Hover:** brighter hero-tag hover state.
- **Paper Note:** source credits and the counter separator.
- **Paper Indicator:** inactive progress marks.
- **Gallery Note:** peripheral scroll instruction.
- **Header Surface / Header Divider:** translucent gallery navigation and its fine dividing line.
- **Footer Divider:** closing section separator.
- **Stage Sky / Hero Sky:** blue base layers behind the photographic hero.
- **Scrollbar:** muted scrollbar thumb.

**The Landscape Background Rule.** Preserve the existing foreground castle photos. Pair them, in order, with separate approved landscapes: Alpsee, Loch Duich at sunset and Lake Geneva from Chillon. Advance the foreground overlap and background wipe together; show one linked background photographer/license credit beneath the gallery controls.

## Typography

**Display Font:** Ogg Medium, with Georgia and serif fallbacks; remotely loaded at weight (500) with `font-display: swap`.

**Russian Headings:** Georgia. **Body and Navigation:** Arial, Helvetica, sans-serif. Ogg supplies the Latin title, wordmark and counter; Georgia carries Russian editorial headings; Arial keeps controls and source credits legible.

### Hierarchy

- **Display:** uppercase hero title with tight tracking and compressed leading. Logo uses the same family at (28px) with unit leading.
- **Headline:** gallery section heading, using the frontmatter headline role.
- **Title:** real castle names, using the frontmatter title role.
- **Body:** caption locations and supporting controls. Source credits are (12px) with (1.4) leading.
- **Intro:** centered two-line introductory copy in `min(560px,90%)`.
- **Label:** peripheral hero annotations. Gallery note uses (11px), (.06em) tracking and (1.5) leading.
- **Counter:** Ogg with tabular numerals.
- **Closing:** large Georgia statement with italic emphasis.

**The Typeface Role Rule.** Preserve Ogg for the Latin display signature, Georgia for Russian editorial headings and Arial for interface copy.

## Layout

The fixed header uses three columns (`1fr auto 1fr`), padding (30px 40px) and gap (32px). The hero and gallery share one sticky `100svh` stage inside a scroll region of `calc(100svh + 4200px)`. The hero run is (1400px); the remaining (2800px) advances the gallery. Hero title starts at (16%) and intro copy sits (17%) from the bottom.

At aspect ratios of (4/3) and wider, use the outpainted (1983 × 793px) panorama `castle-wide.png` and aligned `castle-wide-cutout.png`. The photograph fills the viewport with sharp photographic scenery at both outer edges. All three layers share cover sizing and bottom alignment; the wide panorama keeps the full arch and tower crowns visible on standard desktop windows. Do not add edge fades, masks or gradient padding. Intro copy sits (18%) above the bottom. Narrower layouts retain the original supplied photograph and its cutout via responsive picture sources.

Desktop foreground image size is `min(36vw,560px)` by `min(62vh,650px)`, followed by a (112px) caption. Its clipped viewport starts at (15%) from the top and centers at (56%) across the page. The gallery heading and counter sit at (15%), against opposing (40px) gutters. Arrows and indicators sit (38px) from the bottom. Frames are absolutely stacked in this single viewport; incoming frames cover preceding ones.

At (900px) and below, header gutters become (24px), navigation contracts, the explore label hides and peripheral gallery notes disappear. Image size becomes (52vw × 54vh), viewport starts at (22%) and centers at (55%); heading and counter move to (13%). Hero title becomes (20vw) at (20%) from the top.

At (480px) and below, the header uses two columns with (20px) gutters, hides its last navigation item and explore button, and uses a (26px) wordmark. The scroll region becomes `calc(100svh + 3500px)` with an (1100px) hero run. The hero photographic world is (79%) high with horizontal bounds extended by (36%) on each side. Hero title uses (22vw), intro (18px), and smaller tags. Gallery images become (76vw × 43vh), centered at (50%) with viewport top (27%); heading is at (14%) and counter at (19%). Controls center below the image: indicators (12%) and arrows (6%) from the bottom.

Short landscape viewports (height at most 620px, width at least 650px) use a (34vw × 53vh) image, viewport top (17%), smaller typography and (20px) bottom control offsets. Preserve enough room for the image, caption, attribution and controls together.

The arch episode is a separate full-bleed section between gallery and footer. Its sticky stage is (`100svh`) inside `calc(100svh + 1800px)`; at (480px) and below, the additional scroll run is (1250px). Both photographic layers cover the stage. Landscape crop is (`50% 55%`), with scale origin (`50% 60%`); the arch scale origin is (`50% 65%`). Copy sits (13%) from the bottom within (40px) gutters, reduced to (24px) at (900px) and (20px) at (480px). On mobile, copy rises to a (15%) bottom offset. Attribution uses (24px) gutters and bottom offset, changing to (20px) gutters and a (22px) bottom offset on mobile. Reduced motion shortens the entire section to (`100svh`) and displays a static arch, landscape and copy.

## Elevation & Depth

The interface has no raised cards or box shadows. Full-bleed photography, dim gradient overlays, castle alpha cutout, hero scaling and synchronized gallery wipes provide depth. Intro text uses `0 2px 18px #0008` as a contrast shadow. Caption background is `linear-gradient(180deg,rgba(12,23,17,.92),rgba(12,23,17,.72))`.

Scroll drives scene scale from (1) to (1.22), title exit, source-photo fade and tower separation. Transparent left/right halves clip at (50%) and move outward by up to (75vw), each rising by (16vh). Gallery incoming images slide from (100%) horizontal offset to (0), covering preceding images while those drift left by up to (7%). Matching background layers wipe from the right using `clip-path` with the same eased incoming progress.

The hero is stationary when the cursor moves. Do not add pointer-following parallax. Reduced-motion mode removes transitions and hero transforms, uses immediate navigation and discrete gallery selection. Scroll-derived opacity changes remain.

## Shapes

Gallery images are sharp-cornered photographic rectangles with responsive proportions. Hero links use (50px) pill radii. Indicators are (3px) vertical strokes with (3px) radii inside generous button targets. Navigation and arrows use open text and thin line icons. The hero alpha cutout preserves the castle silhouette; clipping creates left and right halves without adding a surrounding shape.

**The Shared Frame Rule.** Keep all gallery images in one clipped viewport with a common size and a (112px) caption region. Incoming imagery covers the previous image.
Captions stay anchored below the shared image viewport. Show only the selected castle's caption, counteracting its parent frame's movement; titles, locations and credits must never overlap during transitions.

## Components

### Hero Tags

Paper fill, ink text, desktop padding (12px 24px). Hover brightens the fill and raises the pill (3px) over (.2s). Mobile padding becomes (11px 18px) and type (14px). Горы, Остров and Озеро select their corresponding real castle.

### Navigation

Logo left, Russian navigation center, explore action right. Hover draws a (1px) underline over (.3s); the explore arrow moves diagonally. Gallery header surface/divider transition over (.4s). Preserve mobile visibility rules and focus treatment.

### Split Hero

Use `castle-hd.png`, the supplied (2048 × 1536px) source photo, and `castle-cutout.png`, its transparent foreground. Fade from the full photograph to matching cutout halves, then move both halves outward and upward. Keep identical image sizing, object position and transform origin (`50% 65%`) across the three layers so the handoff remains aligned.

### Gallery Frames and Backgrounds

Use the three sourced real castles in their implemented order. Foreground castle photos remain unchanged; separate landscape backgrounds use complementary `object-position` crops. Frames stack by index; the next slides across the preceding frame, and its background wipes into view. Captions name the castle, its location and linked photographer/license attribution. Preserve visible credit links and `dist/assets/sources.json` provenance.

### Gallery Controls

Indicator targets are (28px × 44px), with (38px) strokes scaling from (.58) to (1) over (.35s); mobile targets/strokes are (36px)/(30px) high. Arrow buttons have (44px) minimum height, (34px) spacing and (3px) directional hover movement over (.25s). Disabled endpoint arrows use (.3) opacity. Scroll, keyboard arrows, buttons and horizontal swipes select the same three castles.

### Through the Arch

Use the native generated (1536 × 1024px) `portal-arch.png` alpha foreground over the existing approved `alpsee-background.jpg`. The foreground is a fictional Gothic masonry wall inspired by the supplied stonework, with a genuine transparent opening; retain its photographic texture and alpha rather than substituting a geometric mask. Full-bleed imagery carries the depth, with no frame or additional controls. A contrast overlay uses `linear-gradient(180deg,rgba(8,16,12,.26),transparent 40%,rgba(9,22,17,.65))`.

The cream heading “Сквозь арку.” uses Georgia (400), `clamp(44px,6vw,88px)` with (1.05) leading and (-.03em) tracking. At (900px) and below, use `clamp(44px,8vw,72px)`; at (480px) and below, use (44px). Supporting scroll copy uses Arial (14px) with (1.4) leading and an (18px) top margin. The permanent photographer/license credit uses Arial (12px), (1.4) leading and paper text; links underline on hover and retain the existing focus outline. Keep the semantic heading and descriptive landscape alternative; the decorative arch is hidden from assistive technology.

Reuse the existing animation-frame scheduler and (.15) scroll interpolation. Let `passage` be clamped scroll progress through the extra section run, `ease(v)=v*v*(3-2*v)`, and `travel=ease(clamp((passage-.06)/.84))`. Scale the arch from (1) to (5.2) using `1 + travel*4.2` and the landscape from (1.12) to (1) using `1.12 - travel*.12`. The title exits during the first (25%) of the run: opacity is `1-ease(clamp(passage/.25))` and vertical translation reaches (-48px). Reversing scroll reverses this passage. Apply transform hints only near the section; there is no pointer-driven movement or scroll lock. Reduced motion disables both image transforms, keeps copy at full opacity without translation and uses the static single-screen layout described above. Preserve `.impeccable/asset-prompts/portal-arch.txt` and `dist/assets/sources.json` as the prompt and provenance records.

### Focus and Accessibility

Links and buttons use a (2px) paper focus outline with (6px) offset. Keep descriptive Russian labels, the polite current-castle announcement and `aria-current` on the selected indicator. Inactive frames use `inert` and `aria-hidden`; the gallery remains inert before it appears. Reduced motion is part of the implemented behavior.

## Do's and Don'ts

### Do:

- **Do** preserve the pinned reference direction, cream typography and spacious photography.
- **Do** use the supplied high-resolution castle and aligned transparent halves for the opening.
- **Do** use other real sourced castles with visible photo credits in the gallery.
- **Do** synchronize foreground overlap with each matching background wipe.
- **Do** preserve Russian copy, focus visibility, equivalent controls and responsive/reduced-motion behavior.

### Don't:

- **Don't** restore the old gallery of repeated crops from the supplied hero photo.
- **Don't** turn the gallery into a side-by-side strip or round its photographic frames.
- **Don't** invent historical claims, castle identities or photo provenance.
- **Don't** replace the pinned direction with an unrelated visual identity or raised cards.
