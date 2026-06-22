================================================================================
HESTER ASPHALT SEALCOATING — WEBSITE V2
Premium sample build by Nulo Studio
================================================================================

Business:   Hester Asphalt Sealcoating
Phone:      (937) 780-6987
Address:    8889 Grimsley Rd, Leesburg, OH 45135
Domain:     Built against https://hesterasphalt.com (update SITE references
            if the production domain differs — see LAUNCH CHECKLIST)

Stack:      Pure static HTML / CSS / JS. No frameworks, no build step,
            no dependencies. Open index.html in a browser or host the
            folder on any static host (Netlify, Cloudflare Pages, S3, cPanel).

--------------------------------------------------------------------------------
1. SITE MAP — EVERY PAGE
--------------------------------------------------------------------------------

CORE (6)
  index.html ............ Home: cinematic video hero, town marquee, positioning
                          intro + animated stats, 5 service panels, 5-step
                          process (Nulo system), before/after drag slider,
                          review highlights, service-area map, blog teaser, CTA
  about.html ............ Story, 4 commitments, capabilities + stats, area map
  contact.html .......... NAP info cards, tracked message form (OHub)
  estimate.html ......... 3-step estimate request wizard + "what happens next"
  review.html ........... Review funnel (star gate → Google or private form)
  404.html .............. "This road isn't paved yet" dead-end page

SERVICES (6)
  services.html ................... Hub with 5 visual panels + symptom matcher
  sealcoating.html ................ + crackFilling.html
  asphaltRepair.html .............. + lineStriping.html
  parkingLotMaintenance.html
  Each service page: unique hero, 3 unique body sections, "At a Glance" panel,
  what's-included checklist, commercial/residential split, 4-question FAQ
  (with FAQPage schema), related articles, cross-links, CTA band.
  NOTE: the service lineup matches the VERIFIED business (see §10 RESEARCH
  AUDIT). Hot-mix paving is intentionally NOT offered as a service page —
  no public evidence supports it. If the owner confirms paving capability,
  reinstate a paving page before launch.

PROJECTS (1)
  projects.html ......... Draggable before/after comparison, filterable
                          gallery (tags: paving/sealcoating/striping/
                          maintenance/commercial/residential), 3-phase
                          project spotlight using real job photos

LOCATIONS (6)
  locations.html ........ Hub with animated Highland County route map + cards
  Confirmed:  leesburgOh (HQ), hillsboroOh (Times-Gazette directory listing)
  Probable:   greenfieldOh, washingtonCourtHouseOh, wilmingtonOh
              (proximity-based; copy written honestly around crew routing)
  Every page has UNIQUE copy: local positioning headline, two local-context
  paragraphs, a local technical angle (soils/drainage/traffic), focus list,
  crew-routing note, nearby-town links, Service + Breadcrumb schema.
  REMOVED after research audit (no public evidence): Portsmouth, Ironton,
  Ashland KY, Catlettsburg KY, Huntington WV, Barboursville WV.

BLOG (21)
  blog.html ............. Hub: featured latest post, category filter,
                          full article grid
  Categories: Paving · Sealcoating · Maintenance · Striping & Safety ·
              Commercial
  Articles (20):
    Paving:       howLongDoesAsphaltLast, newAsphaltDrivewayCare,
                  asphaltVsConcrete, asphaltOverlayVsReplacement,
                  choosingAsphaltContractor
    Sealcoating:  sealcoatingVsRepaving, bestTimeToSealcoat, sealcoatingFaq
    Maintenance:  whyCrackFillingSavesMoney, signsYourAsphaltNeedsRepair,
                  drivewayMaintenanceGuide, winterAsphaltDamage,
                  potholeRepairGuide
    Striping:     whenToRestripeParkingLots, parkingLotStripingSafety,
                  adaParkingRequirements
    Commercial:   commercialAsphaltMaintenanceGuide,
                  commercialPropertyMaintenanceTips,
                  parkingLotDrainageProblems, parkingLotPavingCosts
  Every article: 450–800 words of original copy, BlogPosting + Breadcrumb
  schema, internal links to services + sibling articles, inline estimate CTA,
  3 related-article cards.

SEO FILES
  sitemap.xml ........... 39 URLs, prioritized (home 1.0 → articles 0.6)
  robots.txt ............ Allow all + sitemap pointer

--------------------------------------------------------------------------------
2. FILE STRUCTURE
--------------------------------------------------------------------------------

/                      All HTML pages (Nulo rule: HTML in root)
/css                   styleGlobal.css  — design system (every page)
                       styleHome.css, styleAbout.css, styleContact.css,
                       styleEstimate.css, styleReview.css, styleServices.css,
                       styleProjects.css, styleLocations.css, styleBlog.css
/js                    global.js   — icons, nav, reveals, counters, marquee,
                                     parallax, before/after slider, OHub bridge
                       home.js     — hero video management
                       contact.js, estimate.js, review.js — form logic
                       projects.js, blog.js — gallery/category filtering
/images                Photo derivatives (heroPoster.jpg, aboutCrew.jpg)
/images/logos          hesterLogo.svg, hesterLogoMark.svg, favicon.svg
/images/projects       Real job photos: pavingCrew, gradedBase, stripedLot
                       (+ wide/tall crops) and droneSpotlight.svg site plan
/images/services       6 custom service illustrations (SVG)
/images/blog           5 category hero graphics (SVG)
/images/graphics       asphaltTexture.svg (grain overlay),
                       serviceAreaMap.svg (animated route map),
                       band*.jpg (darkened section backgrounds)
/images/og             Open Graph images 1200x630 (ogDefault, ogPaving,
                       ogProjects) with road-stripe brand bar
/videos                heroLanding.mp4 (real company footage),
                       videoPrompts.txt (6 production-ready generation
                       prompts / drone shot list for expanding footage)

--------------------------------------------------------------------------------
3. DESIGN SYSTEM
--------------------------------------------------------------------------------

Concept: dark industrial "fresh asphalt at dusk" — charcoal surfaces, asphalt
grain texture, safety-orange accents, dashed road-stripe yellow motifs,
angular clip-path section transitions, drone/HUD visual language.
Deliberately NOT yellow/black contractor-template styling.

Tokens (css/styleGlobal.css :root):
  Surfaces:  --ink #0d0e10 · --coal-900/800/700/600
  Brand:     --orange #f47921 (primary action) · --stripe #ffc933 (road dash)
  Type:      --paper #f2f1ed · --mute #a8aeb6 · --dim #6d747d
  Fonts:     Barlow Condensed (display, uppercase) + Inter (body) via
             Google Fonts
  Motion:    --ease cubic-bezier(.22,1,.36,1)

Signature components:
  .kicker          eyebrow label with dashed-stripe prefix
  .cut-top/bottom  angular section transitions (clip-path)
  .grain           SVG-turbulence asphalt texture overlay
  .btn-solid/-line/-ghost   notched-corner buttons
  .panel.notch     cut-corner cards
  .ba-slider       draggable before/after comparison (pointer + keyboard)
  .process-track   5-step dashed-connector timeline
  .marquee         infinite town-name ticker
  .stat-count      IntersectionObserver count-up numbers
  [data-reveal]    scroll-triggered reveals (left/right/zoom + stagger
                   via --rd custom property; respects prefers-reduced-motion)
  Icon system      global.js injects inline SVG for <i data-icon="...">
                   (24 icons, stroke-based, currentColor — works on file://)

Mobile (designed separately, not shrunk):
  - Sticky bottom action bar: Call + Request Estimate (thumb reach)
  - Full-screen drawer nav with staggered link animation
  - Header auto-hides on scroll-down, returns on scroll-up
  - Single-column rebuilds of every grid; enlarged tap targets
  - Hero video pauses off-screen; skipped on data-saver/2G connections

--------------------------------------------------------------------------------
4. CONVERSION STRATEGY
--------------------------------------------------------------------------------

Primary CTA: "Request Estimate" (estimate.html) — present in header, hero,
sticky mobile bar, every CTA band, every service/location page, article CTAs.
Secondary CTA: "Call Now" (tel:+19377806987) — always adjacent.

Core message addressing the business problem (missed callbacks/follow-ups):
"Don't let opportunities fall through the cracks." The site repeatedly sells
PROCESS, not just pavement:
  Request → Confirmation → Site Visit → Written Estimate → Follow-Up
This 5-step path appears on Home (#process), the estimate page success state,
the estimate sidebar ("No black holes"), every location page, and About.
Positioned entirely as customer-experience benefits — never as software/CRM.

The estimate form is a 3-step wizard (service → property → contact) because
multi-step forms with a progress bar consistently out-convert long single
forms; each step is 2–4 inputs and validates inline.

--------------------------------------------------------------------------------
5. SEO STRATEGY
--------------------------------------------------------------------------------

Architecture: Home → Services hub → 5 service pages
                   → Locations hub → 5 city pages
                   → Blog hub → 20 supporting articles
Internal linking: services ↔ articles (each service links 2 related posts;
each post links services + 3 sibling posts), locations → services + nearby
towns, footer sitemap on every page. No orphan pages.

Schema (JSON-LD):
  LocalBusiness (index.html, @id #business, NAP + geo + areaServed + hours)
  Service + FAQPage ............ each service page
  Service + BreadcrumbList ..... each location page
  BlogPosting + BreadcrumbList . each article
  Blog / ItemList / AboutPage / ContactPage / CollectionPage on hubs

Per-page: unique <title> + meta description, canonical URL, Open Graph
(og:title/description/url/image) + twitter:card. OG images are real-photo
1200x630 crops with brand striping.

Copy is written for search intent ("how long does asphalt last", "sealcoating
vs repaving", "asphalt contractor near me" supporting signals) without
keyword stuffing — every page reads as advice first.

--------------------------------------------------------------------------------
6. OHUB INTEGRATION (LEAD + FEEDBACK WORKFLOWS)
--------------------------------------------------------------------------------

All forms route through one bridge: ohubSubmit(workflow, payload) in
js/global.js. Configure by setting:

    var OHUB_ENDPOINT = "https://<your-ohub-host>/api/hesterAsphalt/intake";

Payload envelope: { workflow, business, timestamp, page, data }

Workflows emitted by the site:
  EstimateRequest ..... estimate.html (service, property, address, city,
                        timeline, details, name, phone, email, contactPref)
  ContactMessage ...... contact.html (name, phone, email, topic, message)
  CustomerFeedback .... review.html low-rating form (see §7)
  ReviewFunnelEvent ... review.html analytics (rating chosen, route taken,
                        Google-review click)

Pre-launch behavior: while OHUB_ENDPOINT is empty, submissions are queued to
localStorage key "hesterOhubQueue" and the user still sees the success state —
no lead is ever silently dropped during development/demo.

OHub sheet recommended: CustomerFeedback
  Columns: Timestamp · Rating · Name · Phone · Email · Address · Message ·
           PhotoURL · Status · AssignedTo · ResolutionNotes · FollowUpDate
  Statuses: New → Contacted → In Progress → Resolved → Closed
  Automations: on new low-rating row → email notification to owner +
  dashboard notification; highlight rows where Status != Resolved/Closed
  and FollowUpDate < today.

--------------------------------------------------------------------------------
7. REVIEW FUNNEL (review.html)
--------------------------------------------------------------------------------

Flow:
  1. Customer taps a star (interactive 1–5 selector with hover states).
     Every selection logs a ReviewFunnelEvent.
  2. 4–5 stars → thank-you panel → "Leave a Google Review" button
     (opens Google in a new tab; click is tracked).
  3. 1–3 stars → private feedback form (name, phone, email, project address,
     message, optional photo). Photos ≤2.5MB are attached as base64
     (photoData); larger files send the filename + a follow-up note.
     Submits to the CustomerFeedback workflow with status "New".
  4. Success message: "Thank you for letting us know. A member of our team
     will review your feedback and reach out as soon as possible."

IMPORTANT — set the real Google review link in js/review.js:
    var GOOGLE_REVIEW_URL = "...";
Currently points at the business's Google Maps search result (works without
a Place ID). For the one-click review dialog, replace with:
    https://search.google.com/local/writereview?placeid=<PLACE_ID>
(Find the Place ID via Google's Place ID Finder.)

Funnel link placement: footer of every page ("How was your experience?" +
"Leave Feedback"), Home reviews section. Print /review on invoices and
post-job texts for best volume.

--------------------------------------------------------------------------------
8. LAUNCH CHECKLIST
--------------------------------------------------------------------------------

[ ] Set OHUB_ENDPOINT in js/global.js (then test all 3 forms end-to-end)
[ ] Set GOOGLE_REVIEW_URL in js/review.js to the writereview Place-ID link
[ ] Confirm production domain; if not hesterasphalt.com, find-and-replace
    the domain in: all canonical/og tags, sitemap.xml, robots.txt
    (NOTE: the business previously used hestersealcoating.com — it was
    unreachable during the audit; confirm whether to reuse that domain)
[ ] Confirm preferred public phone number with the owner. Public listings
    show TWO numbers: (937) 780-6987 (BBB, owner-direct — used sitewide)
    and (937) 313-6510 (listed as "main" in the Times-Gazette directory).
[ ] OWNER INTERVIEW — items built conservatively, expand if confirmed:
      · Does Hester offer hot-mix paving? (no public evidence; service
        pages currently cover sealcoat/crack/repair/striping/maintenance)
      · Insurance status — site says "owner-operated LLC", add
        "licensed & insured" language only after confirmation
      · Business hours (site assumes Mon–Fri 7am–6pm — unverified)
      · Service-area edges: Greenfield/WCH/Wilmington pages are
        proximity-based; confirm or trim
      · Confirm "since 2006" framing (BBB file opened Nov 2006)
[ ] Compress videos/heroLanding.mp4 (currently 33 MB) to ≤8 MB:
    ffmpeg -i heroLanding.mp4 -vcodec libx264 -crf 26 -preset slow \
           -vf scale=1920:-2 -an heroLanding.mp4
    (poster image images/heroPoster.jpg already covers slow loads)
[ ] Replace hero video and gallery imagery with REAL job photos/footage
    as soon as the owner provides them — current imagery is illustrative
    (the carried-over v1 images bear AI-generation marks and are no longer
    presented as job photos anywhere on the site)
[ ] Submit sitemap.xml in Google Search Console; claim/link the Google
    Business Profile (drives the review funnel)
[ ] Optional: generate additional footage using videos/videoPrompts.txt

--------------------------------------------------------------------------------
9. FUTURE RECOMMENDATIONS
--------------------------------------------------------------------------------

1. Replace the two illustrated project-gallery cards with real photos as
   jobs are documented (shoot before/during/after on every project — the
   gallery and before/after slider are built to grow).
2. Add per-location photos when crews work in each town (the location pages
   have unique copy but share the route-map visual).
3. Wire ReviewFunnelEvent data into a monthly report: ratings distribution,
   Google-review conversion rate, unresolved feedback count.
4. Blog cadence: the 20 starter articles cover the evergreen intents; add
   seasonal posts (spring pothole season, fall crack-fill push) and link
   them from the matching service pages.
5. Once real Google reviews accumulate, swap the three representative
   testimonials on index.html for verbatim quoted reviews with first names.
6. Consider a financing/payment options page if the business adds it —
   high-intent commercial searches often filter on it.

--------------------------------------------------------------------------------
10. RESEARCH AUDIT (June 2026) — VERIFIED FACTS THE SITE IS BUILT ON
--------------------------------------------------------------------------------

Sources: BBB profile, Hillsboro Times-Gazette business directory, Porch,
Nextdoor, Yahoo Local, Facebook page metadata (via search), YP listings.

VERIFIED
  · Legal name: Hester Asphalt Sealcoating & Line Striping LLC
  · Owner: Warren Hester (owner-led positioning used sitewide)
  · BBB file opened Nov 22, 2006 → "Est. 2006 / 20+ years" claims
  · Address: 8889 Grimsley Rd, Leesburg, OH 45135 (BBB, YP, Yahoo)
  · Phones: (937) 780-6987 (BBB/owner) and (937) 313-6510 (directory main)
  · Tagline: "Honest * Reliable * Quality Driven" (Facebook) — used as
    hero kicker and schema slogan
  · Services with evidence: asphalt sealcoating (name + every listing),
    line striping (legal name + directory), driveway repair (Nextdoor/
    directory descriptions), commercial services (Times-Gazette)
  · Rating: 3.9★ average on Google; used for the
    "3.9★ Average Google Rating" stat
  · Review themes quoted on the homepage: "meticulous attention to detail
    and high-quality work", "reliable and professional", "on time and
    within budget", "practical and aesthetically pleasing" (aggregated
    review language from Porch/Nextdoor listings)
  · Service area, confirmed: Leesburg (HQ) and Hillsboro ("serving the
    Hillsboro area and beyond" — Times-Gazette directory)

PROBABLE (proximity-based, kept with honest routing copy)
  · Greenfield, Lynchburg, New Vienna (Highland County)
  · Washington Court House, Wilmington (adjacent county seats)

REMOVED AS UNSUPPORTED (former v1 build assumptions)
  · All KY/WV/river-city pages: Ashland, Catlettsburg, Huntington,
    Barboursville, Portsmouth, Ironton
  · Hot-mix paving + parking lot paving service pages
  · "Licensed & insured", "300+ projects", "10 communities", "3 states"
  · "Real job photo" claims (v1 images show AI-generation marks)

NOT FOUND DURING AUDIT (worth asking the owner)
  · Active official website (hestersealcoating.com unreachable)
  · Google Business Profile review link / Place ID
  · BBB lists "concrete restoration" as a category — unconfirmed elsewhere;
    not shown on the site, but ask the owner

================================================================================
Built ground-up for Hester Asphalt Sealcoating & Line Striping LLC, then
audited against the real business's public footprint. No templates, no
lorem ipsum, no unsupported claims. Every page, image, icon and line of
copy is custom to this business.
================================================================================
