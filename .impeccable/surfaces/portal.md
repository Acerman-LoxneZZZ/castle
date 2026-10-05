# Through the arch

Mode: Experience. Local extension of the established Castle surface.

User authorized the recommended scroll-through arch episode after the existing gallery. The latest refinement removes its visible heading and instruction, then adds the separate continuation gallery before the closing statement. Keep the hero, first gallery photos, controls, backgrounds, typography and cursor-static behavior unchanged. The pre-portal version was saved on GitHub at b50671041aba97cbbfdf16b713ebedd235e43e73. No GitHub push for this continuation without a new user request.

First viewport: a full-bleed photographic Gothic stone gateway, with a genuine transparent opening framing the approved Alpine landscape. No visible title or scroll instruction during the flight; the latest afterword appears afterward. Keep the screen-reader-only heading “Проход через каменную арку” and visible linked landscape credit. No cards, extra buttons or commercial claims.

Signature interaction: one sticky screen, natural reversible scroll. The foreground arch enlarges around the opening while the mountain landscape moves gently at a different depth. Stone leaves the viewport; the panorama becomes unobstructed before the continuation gallery. No pointer response, scroll lock, blur or geometric approximation of the portal.

Implementation: CSS transforms/opacity driven by existing requestAnimationFrame scheduler; native alpha PNG, separate photographic landscape, semantic heading and descriptive image alternative. Reduced motion presents a stationary landscape reading screen with visible afterword and hidden decorative arch. Preserve attribution and responsive controls. Generated gateway is a fictional atmospheric image inspired by supplied stonework, not a historical reconstruction.

Quality bar: continuous photographic edges, clear opening on desktop and mobile, no duplicated title, no text collisions or horizontal overflow; all old gallery navigation remains usable. Original asset generation prompt and source provenance must ship with project.

Latest implementation: visible `.portal-copy` and its exit animation are removed. The stage retains native alpha foreground, descriptive landscape alternative, an `aria-labelledby` connection to the screen-reader-only heading, and the persistent photographer/license links. The afterword adds a reading tail without changing the original flight geometry. Reduced motion disables both image transforms, hides the decorative arch and uses an automatic-height section with a relative reading stage of at least `100svh`.


## After-flight text refinement
User requests an authored Russian text after the flight through the gateway, backed up to GitHub first (37fd44e). The arch starts without visible copy. After the original travel distance (1800px desktop,1250px mobile), a centered afterword appears over the Alpine landscape: “За порогом — другая тишина.” plus “Оставьте спешку по эту сторону стен. Впереди — горы, вода и замки, к которым ведёт любопытство.” No historical claims.
Focal moment: stone clears the screen, then the reading screen appears; continuity preserves original flight speed and reversibility. Feedback/controls remain inherited; budget one opacity and 20px translation, no dependency. Add a 1000px desktop/850px mobile reading tail; reveal spans 420px after an 80px delay. Credit stays above the shade. Reduced motion provides a stationary landscape reading screen without the decorative gateway. No additional GitHub push for the new text without instruction.

Implemented total extra scroll run: 2800px desktop and 2100px at max-width:480px. `--portal-travel-run` keeps the original 1800px/1250px flight calculations separate from the reading tail. The existing scheduler sets `reveal=ease(clamp((portalDistance-portalTravelRun-80)/420))`, opacity to reveal and translation to `(1-reveal)*20px`; the afterword stays inert below .98 reveal. Reading copy holds at full opacity until the sticky section ends and reverses naturally with scroll.

Reading composition: full-stage `rgba(9,22,17,.58)` forest wash; centered Georgia heading at `clamp(44px,5.5vw,80px)` with 1.08 leading and -.03em tracking, 42px on mobile. Arial body is 18px/1.65, maximum width 550px and top margin 30px; mobile uses 16px/1.6 and 24px margin, omitting the paragraph's manual line break. Stage padding is 100px 24px desktop, 90px 24px mobile. Permanent source/license credit is layered above the wash. No new images, dependency or reusable design tokens.
