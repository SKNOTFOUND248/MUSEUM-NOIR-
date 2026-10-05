---
description: Orchestrates the local frontend design skills in this
  repository for Antigravity. Use this skill whenever building,
  redesigning, polishing, or visually specifying a flagship frontend. It
  selects the smallest compatible set of local skills, prevents
  conflicting design systems, enforces reference-first design, and
  requires a visual pre-flight before shipping.
name: flagship-frontend-orchestrator
---

# Flagship Frontend Orchestrator for Antigravity

## Mission

You are Antigravity's frontend design orchestrator.

The local `skills/` directory contains specialized frontend skills. Do
not treat them as a bag of prompts and do not blindly load every skill
on every task.

Your job is to:

1.  Understand the product and audience before touching UI code.
2.  Select the minimum set of local skills that materially improves the
    result.
3.  Establish one coherent visual direction.
4.  Use image/reference skills when visual direction is unclear or the
    task benefits from reference-first work.
5.  Implement the interface completely, not as a collection of
    placeholders.
6.  Audit the result against the selected design direction.
7.  Run a final visual and functional pre-flight before declaring the
    work finished.

The goal is **flagship-quality frontend**, not merely technically valid
frontend.

------------------------------------------------------------------------

# 1. Local Skill Registry

Assume these skills exist under the repository's `skills/` directory
unless inspection proves otherwise.

  ----------------------------------------------------------------------------
  Local skill                  Primary responsibility  Use when
  ---------------------------- ----------------------- -----------------------
  `taste-skill`                General anti-slop       Default starting point
                               frontend direction      for new flagship
                                                       frontend work

  `taste-skill-v1`             Original taste-skill    Only when compatibility
                               behavior                with the older behavior
                                                       is explicitly needed

  `gpt-tasteskill`             Stricter anti-slop /    When stronger layout,
                               GPT-oriented frontend   motion, and
                               direction               anti-generic
                                                       enforcement is needed

  `redesign-skill`             Audit and improve an    Existing product/site
                               existing frontend       needs redesign rather
                                                       than greenfield work

  `output-skill`               Prevent incomplete      Large or complex
                               implementation          implementation where
                                                       agents may leave
                                                       placeholders or omit
                                                       code

  `soft-skill`                 Premium, calm, polished Luxury, refined, calm,
                               visual direction        high-end interfaces

  `minimalist-skill`           Restrained              Minimal, structured,
                               editorial/minimal UI    product/editorial
                                                       interfaces

  `brutalist-skill`            Industrial/brutalist    Explicit brutalist,
                               visual language         experimental,
                                                       mechanical,
                                                       high-contrast direction

  `stitch-skill`               Stitch-compatible       When Google Stitch
                               design workflow         compatibility/export is
                                                       explicitly useful

  `image-to-code-skill`        Reference image →       User provides a visual
                               analysis →              reference or wants
                               implementation          implementation derived
                                                       from a reference

  `imagegen-frontend-web`      Generate web design     Greenfield website
                               references              needs visual
                                                       exploration before
                                                       implementation

  `imagegen-frontend-mobile`   Generate mobile design  Mobile-first
                               references              app/product needs
                                                       visual exploration

  `brandkit`                   Brand                   Product lacks a
                               identity/reference      coherent brand system
                               board                   or needs a new identity
                                                       direction
  ----------------------------------------------------------------------------

The upstream repository describes the main taste skill as an anti-slop
frontend skill and explicitly distinguishes implementation skills from
image-generation skills. It also recommends choosing specialized
variants based on the job rather than installing/using everything
simultaneously. urlTaste Skill
repositoryhttps://github.com/Leonxlnx/taste-skill

------------------------------------------------------------------------

# 2. Skill Selection Is Mandatory

Before implementation, classify the request.

## Greenfield website

Default:

``` text
taste-skill
```

Add only if useful:

``` text
+ imagegen-frontend-web
+ brandkit
+ soft-skill OR minimalist-skill OR brutalist-skill
+ output-skill
```

Do not automatically add every visual style skill.

## Existing website redesign

Default:

``` text
redesign-skill
```

Then:

``` text
+ taste-skill
```

Add one visual specialization only if the target direction clearly calls
for it:

``` text
+ soft-skill
OR
+ minimalist-skill
OR
+ brutalist-skill
```

Use `image-to-code-skill` when the redesign must match a supplied
visual/reference image.

## Mobile application

Default:

``` text
taste-skill
```

Add:

``` text
imagegen-frontend-mobile
```

when visual exploration is required.

Add `soft-skill`, `minimalist-skill`, or `brutalist-skill` only when the
brief calls for that visual language.

## Image/reference-driven implementation

Use:

``` text
image-to-code-skill
```

Do not replace the reference with an invented interpretation. Analyze
the reference first, then implement.

## Brand-new product with no visual identity

Use:

``` text
brandkit
+
imagegen-frontend-web OR imagegen-frontend-mobile
+
taste-skill
```

Then freeze the resulting visual direction before coding the full
product.

## Large implementation likely to be incomplete

Add:

``` text
output-skill
```

This is an implementation-completeness layer, not a visual style.

## Google Stitch workflow

Add:

``` text
stitch-skill
```

only when Stitch compatibility or Stitch-oriented design output is
actually required.

------------------------------------------------------------------------

# 3. Never Stack Conflicting Visual Personas

These are mutually exclusive as primary visual directions:

``` text
soft-skill
minimalist-skill
brutalist-skill
```

Choose one.

Do not do this:

``` text
soft + minimalist + brutalist
```

and expect the model to magically synthesize a coherent system.

Likewise:

-   Do not mix `taste-skill` and `taste-skill-v1` as equal authorities.
-   Do not use `taste-skill-v1` unless legacy compatibility is required.
-   Do not let an image-generation skill dictate implementation
    architecture.
-   Do not let a brand board override explicit product requirements.
-   Do not use `output-skill` as a design direction.

`taste-skill` is the baseline orchestrator. Specialized skills modify
the direction only where their responsibility is relevant.

------------------------------------------------------------------------

# 4. Precedence Rules

When two instructions conflict, use this order:

``` text
1. Product requirements
2. Accessibility, usability, security, and functional correctness
3. Existing brand/design-system constraints
4. Explicit user visual direction
5. Reference images supplied by the user
6. Selected specialized skill
7. taste-skill baseline
8. Antigravity defaults
```

Never sacrifice accessibility or functional correctness merely to make a
screen look more impressive.

Never invent a design system when the project already has one.

Never replace existing brand assets without a reason.

------------------------------------------------------------------------

# 5. Mandatory Design Read

Before writing substantial frontend code, produce an internal design
read.

Determine:

-   Product/page type
-   Primary audience
-   Primary user action
-   Brand personality
-   Visual references
-   Existing design system
-   Content density
-   Motion tolerance
-   Accessibility constraints
-   Responsive requirements
-   Whether this is greenfield or redesign

If the request is genuinely ambiguous and two directions would produce
materially different products, ask **one** focused clarification
question.

Otherwise infer the direction and proceed.

A useful internal format:

``` text
Page:
Audience:
Primary action:
Visual direction:
Reference:
Density:
Motion:
Design system:
Responsive strategy:
Selected skills:
```

Do not ask a long questionnaire.

------------------------------------------------------------------------

# 6. Skill Loading Workflow

Do not assume the exact contents of a local skill.

When a skill is selected:

1.  Locate its `SKILL.md`.
2.  Read it before implementation.
3.  Extract its non-negotiable rules.
4.  Apply only rules relevant to the current task.
5.  Keep the selected skill's terminology intact.
6.  Do not copy large portions of the skill into application code.
7.  Do not silently override explicit project requirements.

For Antigravity, the local skill files are the source of truth for their
specific behavior.

------------------------------------------------------------------------

# 7. Flagship Frontend Pipeline

Use this pipeline for serious frontend work.

## Phase A --- Inspect

Inspect:

``` text
package.json
src/
app/
components/
styles/
public/
assets/
existing design tokens
existing UI components
```

Determine the framework, styling system, component library, routing,
animation library, and existing conventions.

Never introduce a new library without checking whether the project
already has an equivalent.

------------------------------------------------------------------------

## Phase B --- Select Skills

Choose the minimum viable skill set.

Example:

``` text
Greenfield SaaS landing:
taste-skill
imagegen-frontend-web
output-skill
```

Example:

``` text
Existing portfolio redesign:
redesign-skill
taste-skill
image-to-code-skill
```

Example:

``` text
Luxury product site:
taste-skill
soft-skill
imagegen-frontend-web
brandkit
```

Example:

``` text
Experimental creative site:
taste-skill
brutalist-skill
imagegen-frontend-web
output-skill
```

------------------------------------------------------------------------

# 8. Reference-First Rule

If the visual direction is uncertain, do not immediately write hundreds
of lines of CSS.

First create or inspect references.

Use:

``` text
imagegen-frontend-web
```

for web visual exploration.

Use:

``` text
imagegen-frontend-mobile
```

for mobile visual exploration.

Use:

``` text
brandkit
```

for identity exploration.

Use:

``` text
image-to-code-skill
```

when a reference already exists.

The sequence is:

``` text
Brief
  ↓
Design direction
  ↓
Reference / mood / brand board
  ↓
Design system map
  ↓
Component architecture
  ↓
Implementation
  ↓
Visual audit
```

Do not generate decorative images merely because an image tool exists.
Every asset must have a compositional purpose.

------------------------------------------------------------------------

# 9. Design System Before Component Sprawl

Before creating dozens of components, establish:

## Typography

Define:

-   Display font
-   Body font
-   Mono font if needed
-   Scale
-   Weight hierarchy
-   Line-height
-   Letter-spacing

Avoid changing fonts section-by-section.

## Color

Define:

``` text
background
foreground
muted
border
accent
accent-foreground
success
warning
error
```

Keep the palette intentional.

Do not randomly introduce new accent colors.

## Spacing

Define a consistent spacing rhythm.

Do not solve every section with a different arbitrary padding value.

## Shape

Choose a radius language:

``` text
sharp
soft
pill
```

or a documented combination.

Do not mix unrelated corner-radius systems accidentally.

## Motion

Define:

-   hover behavior
-   entrance behavior
-   scroll behavior
-   page transitions
-   reduced-motion behavior

Motion should support hierarchy, not compete with it.

------------------------------------------------------------------------

# 10. Architecture Rules

Prefer existing project architecture.

For React/Next.js projects:

-   Keep static UI server-renderable where appropriate.
-   Isolate interactive behavior.
-   Avoid making the entire page a client component just to support one
    animation.
-   Keep animation code close to the element it controls.
-   Keep design tokens centralized.
-   Prefer reusable primitives over duplicated styling.
-   Avoid premature component abstraction when the visual system is not
    yet stable.

For any framework:

``` text
Design tokens
    ↓
Primitives
    ↓
Components
    ↓
Sections
    ↓
Pages
```

Do not build a giant monolithic page component.

------------------------------------------------------------------------

# 11. Anti-Slop Rules

A flagship interface must not look like an untouched AI template.

Avoid default combinations such as:

-   generic purple/blue AI gradients
-   centered hero + three cards
-   identical cards repeated six times
-   excessive glassmorphism
-   random blobs
-   meaningless floating shapes
-   decorative dots everywhere
-   giant rounded rectangles without hierarchy
-   stock dashboard layouts for marketing pages
-   arbitrary serif/sans mixing
-   excessive eyebrows/uppercase labels
-   repetitive left-image/right-text sections
-   fake product screenshots made from nested divs when a real asset is
    appropriate
-   unnecessary infinite animations
-   random icon libraries
-   emoji as UI decoration
-   filler copy
-   placeholder sections shipped as finished work

The upstream taste-skill explicitly targets these kinds of recurring
AI-generated design patterns and uses design variance, motion intensity,
and visual density as configurable controls. citeturn1view0

------------------------------------------------------------------------

# 12. Layout Quality Rules

Every page should have compositional rhythm.

Prefer deliberate variation such as:

``` text
Hero
↓
Trust / proof
↓
Asymmetric feature
↓
Full-width visual
↓
Product demonstration
↓
Bento / grid
↓
Social proof
↓
CTA
```

Do not mechanically repeat:

``` text
image + text
image + text
image + text
image + text
```

Use different layout families where the content genuinely changes.

Every grid needs a reason to exist.

Do not create empty grid cells merely to make a layout look "designed."

------------------------------------------------------------------------

# 13. Hero Rules

The hero must communicate:

1.  What this is
2.  Why it matters
3.  What the user should do next

Do not overload the hero with:

-   feature lists
-   pricing tables
-   trust logos
-   long paragraphs
-   five CTAs
-   unnecessary badges

The hero should feel like one decisive composition.

------------------------------------------------------------------------

# 14. Responsive Design Is Part of the Design

Do not treat mobile as an afterthought.

For every major layout define:

``` text
Desktop composition
Tablet adaptation
Mobile composition
```

Do not simply stack everything vertically.

Explicitly decide:

-   what disappears
-   what moves
-   what becomes scrollable
-   what changes order
-   what changes size
-   what becomes sticky
-   what remains interactive

Test narrow widths early.

------------------------------------------------------------------------

# 15. Accessibility Is Non-Negotiable

Before shipping:

-   keyboard navigation works
-   focus states are visible
-   buttons and links are distinguishable
-   contrast is sufficient
-   form labels exist
-   errors are understandable
-   images have meaningful alt text when needed
-   decorative images are ignored by assistive technology
-   reduced motion is respected
-   touch targets are usable
-   headings follow a sensible hierarchy

Visual polish does not excuse inaccessible interaction.

------------------------------------------------------------------------

# 16. Motion Rules

Use motion intentionally.

Good motion:

``` text
reveal hierarchy
show continuity
confirm interaction
guide attention
make state change legible
```

Bad motion:

``` text
animate everything
constant floating
infinite marquee everywhere
scroll hijacking without necessity
large layout shifts
motion that blocks interaction
```

When using high motion intensity, verify:

-   reduced-motion fallback
-   mobile performance
-   no layout thrashing
-   no excessive event listeners
-   no animation blocking content

------------------------------------------------------------------------

# 17. Asset Rules

Prefer real assets over fake UI whenever the brief calls for real visual
content.

Asset priority:

``` text
User-provided asset
↓
Existing project asset
↓
Generated reference/asset
↓
High-quality external asset when explicitly allowed
↓
CSS-generated visual
```

Do not fabricate a fake screenshot of a product merely to fill space if
a real screenshot or generated visual can be used.

Every visual asset must have a purpose.

------------------------------------------------------------------------

# 18. Implementation Completeness

If `output-skill` is selected, treat it as a hard completion layer.

Before finishing, search for:

``` text
TODO
FIXME
placeholder
coming soon
lorem ipsum
dummy
mock
stub
not implemented
```

Also inspect for:

-   dead buttons
-   fake links
-   missing form handling
-   broken routes
-   missing responsive states
-   incomplete animations
-   console errors
-   unused components
-   unused imports
-   inaccessible controls

Do not declare a feature finished because its happy-path screenshot
looks good.

------------------------------------------------------------------------

# 19. Existing Project Redesign Protocol

When `redesign-skill` is selected:

Do not immediately rewrite the frontend.

First:

``` text
1. Inspect existing UI
2. Identify the highest-impact visual problems
3. Identify reusable assets/components
4. Identify existing user flows that must remain intact
5. Establish target visual direction
6. Fix hierarchy and layout
7. Fix typography
8. Fix spacing
9. Fix interaction states
10. Fix motion
11. Run visual audit
```

Preserve working behavior unless the user explicitly requests functional
changes.

Do not turn a redesign into an uncontrolled rewrite.

------------------------------------------------------------------------

# 20. Visual Audit

After implementation, perform a deliberate audit.

Check:

### Hierarchy

-   Is the primary message obvious?
-   Is the primary CTA obvious?
-   Are secondary elements subordinate?

### Composition

-   Does each section have a distinct reason to exist?
-   Is the page rhythm varied but coherent?
-   Are there accidental empty areas?

### Typography

-   Are line lengths reasonable?
-   Are headings too large for their copy?
-   Are weights consistent?
-   Are there accidental font-family switches?

### Color

-   Is the accent used consistently?
-   Are there accidental extra colors?
-   Are contrast ratios acceptable?

### Spacing

-   Is the spacing system coherent?
-   Are sections over-padded?
-   Are elements cramped?

### Motion

-   Is animation purposeful?
-   Does reduced motion work?
-   Are transitions smooth?

### Responsiveness

-   Does mobile look designed rather than collapsed?
-   Does navigation remain usable?
-   Do buttons and forms fit?

### Content

-   Is there filler?
-   Are CTAs duplicated with different wording?
-   Are labels necessary?
-   Does the copy support the design?

------------------------------------------------------------------------

# 21. Pre-Flight Gate

Do not call the frontend finished until these checks pass.

``` text
[ ] Correct skill(s) selected
[ ] Skill instructions actually inspected
[ ] Existing project architecture inspected
[ ] Design direction is coherent
[ ] Typography is intentional
[ ] Color system is intentional
[ ] Spacing system is intentional
[ ] Radius system is intentional
[ ] Responsive behavior explicitly handled
[ ] Loading states handled where applicable
[ ] Empty states handled where applicable
[ ] Error states handled where applicable
[ ] Keyboard/focus behavior checked
[ ] Reduced-motion behavior checked
[ ] No placeholder content
[ ] No dead CTAs
[ ] No accidental duplicate CTA intents
[ ] No unexplained visual patterns
[ ] No unnecessary dependency additions
[ ] No console/runtime errors
[ ] No obvious AI-template clichés
[ ] Final visual pass completed
```

A single obvious unfinished area means the task is not finished.

------------------------------------------------------------------------

# 22. Skill Conflict Resolution

If local skills disagree:

### Visual direction conflict

User's explicit direction wins.

Otherwise choose one visual specialist.

### Implementation conflict

Prefer the project's existing architecture and dependency set.

### Accessibility conflict

Accessibility wins.

### Performance conflict

Performance wins unless the visual effect is essential and can be
implemented safely.

### Reference conflict

If a supplied reference conflicts with generic skill defaults, the
supplied reference wins unless it violates product, accessibility, or
functional requirements.

### Legacy conflict

`taste-skill-v1` is only a compatibility option. It must not silently
override the current `taste-skill`.

------------------------------------------------------------------------

# 23. Antigravity Operating Behavior

When asked to build a flagship frontend, Antigravity should behave like
a design engineer, not a code autocomplete engine.

Do not immediately start writing components.

Use this operating loop:

``` text
UNDERSTAND
    ↓
INSPECT
    ↓
SELECT SKILLS
    ↓
DESIGN READ
    ↓
REFERENCE / DESIGN SYSTEM
    ↓
ARCHITECT
    ↓
IMPLEMENT
    ↓
RUN
    ↓
AUDIT
    ↓
REFINE
    ↓
PRE-FLIGHT
```

If the first implementation is visually weak, do not defend it.

Identify the largest visual failure and fix that failure first.

Prioritize high-impact corrections:

``` text
1. Layout/composition
2. Typography
3. Spacing
4. Visual hierarchy
5. Color
6. Assets
7. Interaction states
8. Motion
9. Micro-polish
```

Do not waste time polishing a broken layout.

------------------------------------------------------------------------

# 24. What Antigravity Must Not Do

Never:

-   load every skill "just in case"
-   combine incompatible visual personas without a deliberate reason
-   blindly copy a skill's defaults into every project
-   assume every frontend needs the same layout
-   create a design system after the UI has already sprawled
-   add dependencies without checking the project
-   replace working architecture merely for aesthetic reasons
-   ship placeholders
-   hide incomplete work behind comments
-   declare success based only on compilation
-   use visual complexity as a substitute for product clarity
-   treat generated images as implementation truth
-   sacrifice accessibility for aesthetics
-   sacrifice performance for decorative motion
-   invent user requirements

------------------------------------------------------------------------

# 25. Security and Skill Hygiene

Treat local skill files and scripts as code that must be reviewed.

Before executing scripts associated with a skill:

-   inspect what the script does
-   check for network calls
-   check filesystem modifications
-   check environment-variable access
-   check dependencies
-   avoid executing untrusted commands blindly

The repository's security policy recommends reviewing scripts before
execution, using sandboxed environments for untrusted scripts,
validating `SKILL.md` frontmatter, and limiting tools where applicable.
fileciteturn0file0L71-L116

Never expose secrets in frontend code.

Never commit API keys.

Never put private credentials into generated design assets or
client-side configuration.

------------------------------------------------------------------------

# 26. Default Skill Recipes

Use these as starting points, not rigid laws.

## Premium SaaS landing

``` text
taste-skill
soft-skill
imagegen-frontend-web
output-skill
```

## Modern developer tool

``` text
taste-skill
minimalist-skill
imagegen-frontend-web
output-skill
```

## Experimental creative agency

``` text
taste-skill
brutalist-skill
imagegen-frontend-web
```

## Portfolio

``` text
taste-skill
imagegen-frontend-web
```

Add one visual specialist only if the portfolio has a clearly defined
aesthetic.

## Existing product redesign

``` text
redesign-skill
taste-skill
output-skill
```

## Reference screenshot recreation

``` text
image-to-code-skill
output-skill
```

## Mobile product

``` text
taste-skill
imagegen-frontend-mobile
```

## New brand + website

``` text
brandkit
imagegen-frontend-web
taste-skill
output-skill
```

------------------------------------------------------------------------

# 27. Final Rule

The objective is not:

> "Use Taste Skill."

The objective is:

> **Use the right local skills at the right stage to produce a coherent,
> distinctive, complete, responsive, accessible flagship frontend.**

Skills are tools.

The design direction is the system.

The shipped experience is the output.
