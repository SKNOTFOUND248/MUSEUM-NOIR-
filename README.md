<div align="center">

# M U S E U M &nbsp; N O I R

### *Contemporary Art & Monolithic Space*

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Design System](https://img.shields.io/badge/Design%20System-Curatorial%20Editorial-c7a363?style=flat-square)](#design-philosophy)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AAA-4ade80?style=flat-square)](#accessibility--standards)
[![License](https://img.shields.io/badge/License-MIT-white?style=flat-square)](LICENSE)

<br />

<p align="center">
  <b>An international contemporary art institution dedicated to monolithic sculpture, spatial silence, generative light, and radical architectural curation.</b>
  <br />
  <i>Zurich / Paris Cultural Corridor • Founded 1984</i>
</p>

---

</div>

<br />

## 🏛️ Spatial Concept & Aesthetic Philosophy

**MUSEUM NOIR** rejects the sterile, bleached "white cube" paradigm that dominated 20th-century museum theory. The digital experience is engineered around architectural mass, deliberate macro-whitespace, extreme typographic contrast, and reverence for physical matter.

```
       ┌────────────────────────────────────────────────────────┐
       │                 M U S E U M   N O I R                  │
       │   "Silence is not absence; it is a dense, resonant     │
       │    physical material with the weight of deep time."    │
       └───────────────────────────┬────────────────────────────┘
                                   │
         ┌─────────────────────────┼─────────────────────────┐
         ▼                         ▼                         ▼
  [ 01. MASS ]              [ 02. LIGHT ]             [ 03. VOID ]
  Raw Alpine Granite        Collimated Lasers         Infrasonic Resonance
  Post-Industrial Slag      1800K Phosphor Rings      Subterranean Crypts
```

---

## ✨ Flagship Pages & Features

### 1. **Home — Monumental Hero & Curatorial Highlights**
- **Full-Viewport Opening Composition:** Anchor display of *Monolith XII (The Black Horizon)* by Kaelen Voss with solar-aligned skylight lighting.
- **Flagship Exhibition Teaser:** Overview of *AFTER THE SILENCE* with spatial chamber sequence.
- **Master Monograph Previews:** Featuring Kaelen Voss, Sylvie Chen, and Mateo Althaus.
- **Public Dispatches & Symposia:** Nocturne performances, curatorial walks, and live hours.

### 2. **Exhibition — *AFTER THE SILENCE***
- **Dedicated Curatorial Page:** Curated by Dr. Elena Vane & Mikhail Soren.
- **Curatorial Essay:** *"The Poetics of Absence: Monoliths, Light, and Post-Industrial Stillness"* with drop caps and pull quotes.
- **Four Spatial Chambers Walkthrough:**
  1. *I. Tectonic Fractures* (Gallery 01)
  2. *II. Luminal Voids* (North Atrium)
  3. *III. Oxidized Memory* (Galleries 02 & 03)
  4. *IV. Subterranean Resonance* (The Crypt)
- **Commissioned Artwork Grid:** Deep accession ledger with high-res modal inspection.

### 3. **The Collection — Archival Index & Registry**
- **Multi-Faceted Curatorial Filtering:**
  - Filter by Artist (*Kaelen Voss, Sylvie Chen, Mateo Althaus, Aria Thorne, Renzo Castiglione*)
  - Filter by Medium / Category (*Monolithic Sculpture, Spatial Light, Brutalist Cast, Oxidized Pigment, Kinetic Void*)
  - Live instantaneous text search across catalogue records.
- **Triple Display Viewers:**
  - *Editorial Asymmetric Mosaic*
  - *3-Column Masonry Grid*
  - *Archival Registry Table* (Accession ID, medium, dimensions, location)

### 4. **Artist Monographs**
- **Master Roster:** In-depth profiles for resident sculptors and light artists.
- **Monographic Dossier:** Studio portraiture, primary-source artist statements, developmental career timelines, and solo exhibition histories.

### 5. **Visit & Sanctuary Guidelines**
- **Sanctuary Hours & Real-Time Status:** Live status ticker, Thursday Nocturne hours, and campus coordinates.
- **Interactive Campus Map:** Stylized architectural SVG blueprint.
- **Interactive Ticket Booking Engine:** Select date, time slot, and guest count to generate an official digital admission pass with scannable QR matrix.
- **Accessibility & Amenities:** Sensory Calm Hours, tactile guides, wheelchair access, Café Noir, and bookstore monographs.

### 6. **About the Institution**
- **Architectural Vessel:** Designed by Voss & Moreau Atelier; board-formed concrete and raking zenithal light.
- **The Four Principles:** *Architecture as Silence*, *Primacy of Somatic Presence*, *Ethical Geological Stewardship*, and *The Museum as Sanctuary*.
- **Curatorial Leadership:** Biographies of Museum President Dr. Catherine de Saint-Germain, Senior Curator Dr. Elena Vane, and Head of Conservation Dr. Anouk Weber.

---

## 🎧 Interactive Audio & Technical Systems

- **Web Audio Ambient Acoustic Engine (`src/utils/audioSynth.js`):**
  Synthesizes warm harmonic drones and low-frequency resonance modeling the acoustic reverb of the Grand Atrium, paired with spoken curatorial commentary tracks.
- **Curatorial Artwork Inspector (`src/components/ArtworkModal.jsx`):**
  Interactive zoom controls (`100%` to `250%`), citation copying, keyboard navigation (Left/Right arrows, ESC), and academic loan inquiry dispatch.
- **Search Matrix (`src/components/SearchModal.jsx`):**
  Instant access via `⌘K` / `Ctrl+K` across artworks, artists, exhibitions, and curatorial texts.
- **Atmosphere Switcher:**
  Toggle between **Noir Dark** (obsidian carbon and warm amber gold) and **Gallery Daylight** (warm raw limestone and charcoal).

---

## 🎨 Typographic Architecture & Palette

```css
/* Master Typography Hierarchy */
--font-display:   'Italiana', 'Playfair Display', serif;   /* Monumental Titles */
--font-editorial: 'Cormorant Garamond', serif;             /* Curatorial Essays */
--font-heading:   'Syne', 'Plus Jakarta Sans', sans-serif; /* Modernist Structure */
--font-body:      'Plus Jakarta Sans', sans-serif;         /* Swiss Body Text */
--font-mono:      'JetBrains Mono', monospace;             /* Accession & Ledgers */

/* Palette */
--bg-primary:     #070707; /* Noir Canvas */
--bg-surface:     #0e0e0e; /* Monolithic Plinth */
--text-primary:   #f5f4f0; /* Museum Bone */
--accent-gold:    #c7a363; /* Tectonic Ochre */
--accent-terra:   #c34b38; /* Oxidized Cinnabar */
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

```bash
# Clone the repository
git clone https://github.com/SKNOTFOUND248/MUSEUM-NOIR-.git

# Navigate to project directory
cd MUSEUM-NOIR-

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **`http://localhost:5173`** in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📂 Repository Structure

```
├── public/
│   └── assets/images/           # Curated hero artworks, monoliths, & architecture
├── src/
│   ├── components/
│   │   ├── ArtworkModal.jsx      # High-res zoom & curatorial notes inspector
│   │   ├── AudioGuideBar.jsx     # Ambient sound engine & transcript drawer
│   │   ├── Footer.jsx            # Architectural footer & curatorial dispatch
│   │   ├── Navbar.jsx            # Minimal header, live status, & atmosphere toggle
│   │   ├── SearchModal.jsx       # Instant search index (⌘K / Ctrl+K)
│   │   └── TicketBookingModal.jsx# Pass generator with QR code
│   ├── data/
│   │   └── museumData.js         # Curatorial & archival museum database
│   ├── pages/
│   │   ├── AboutPage.jsx         # Architectural history & philosophy
│   │   ├── ArtistPage.jsx        # Monographic artist profiles & timeline
│   │   ├── CollectionPage.jsx    # Filterable catalogue & archival registry
│   │   ├── ExhibitionPage.jsx    # Flagship "After The Silence" exhibition
│   │   ├── HomePage.jsx          # Full-viewport hero & curated sections
│   │   └── VisitPage.jsx         # Hours, tariffs, transit & accessibility
│   ├── styles/
│   │   └── index.css             # Bespoke museum editorial design system
│   ├── utils/
│   │   └── audioSynth.js         # Web Audio ambient acoustic engine
│   ├── App.jsx                   # Master orchestrator & routing
│   └── main.jsx                  # React entry point
├── index.html                    # Luxury typography & meta headers
└── vite.config.js                # Vite build configuration
```

---

## ⚖️ Curatorial Ethics & Compliance

- **Accessibility:** Fully accessible semantic HTML5 structure, ARIA dialog trapping, keyboard navigation, and full support for `prefers-reduced-motion`.
- **Geological Stewardship:** All mineral and stone materials referenced in Museum Noir exhibitions are sourced under European ethical quarrying pacts.
- **Accreditation:** Compliant with ICOM and Pro Helvetia digital museum curation frameworks.

---

<div align="center">
  <sub>© 1984–2026 MUSEUM NOIR FOUNDATION. ALL RIGHTS RESERVED.</sub>
</div>
