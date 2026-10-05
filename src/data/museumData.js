// MUSEUM NOIR — Comprehensive Curatorial Data & Archival Registry

export const MUSEUM_INFO = {
  name: "MUSEUM NOIR",
  subtitle: "Contemporary Art & Monolithic Space",
  city: "Zurich / Paris Cultural Corridor",
  address: "440 Quai Noir, Port District, CH-8005",
  foundingYear: 1984,
  architect: "Voss & Moreau Atelier d'Architecture",
  director: "Dr. Catherine de Saint-Germain",
  chiefCurator: "Dr. Elena Vane",
  contact: {
    email: "curatorial@museumnoir.org",
    press: "press@museumnoir.org",
    patrons: "foundation@museumnoir.org",
    phone: "+41 44 892 01 00"
  },
  hours: {
    weekday: "10:00 – 20:00",
    thursday: "10:00 – 22:00 (Nocturne)",
    weekend: "10:00 – 21:00",
    monday: "Closed for conservation"
  },
  liveStatus: {
    isOpen: true,
    message: "Galleries Open • Today until 21:00",
    nextTour: "15:30 — Curatorial Walk with Dr. Vane"
  }
};

export const EXHIBITIONS = [
  {
    id: "after-the-silence",
    isCurrent: true,
    isFlagship: true,
    title: "AFTER THE SILENCE",
    subtitle: "Architectures of Void, Memory, and Monolithic Matter",
    dates: "OCT 14, 2026 — MAR 28, 2027",
    curators: ["Dr. Elena Vane", "Mikhail Soren"],
    location: "Galleries 1–4, North Atrium & Subterranean Crypt",
    heroImage: "/assets/images/exhibition-silence.jpg",
    secondaryHeroImage: "/assets/images/hero-monolith.jpg",
    statement: "AFTER THE SILENCE gathers monumental interventions, spatial darkness, and geological stillness to interrogate how memory persists in post-industrial voids. Across fifteen newly commissioned monoliths and light installations, the exhibition positions silence not as absence, but as a dense, resonant physical material.",
    essay: {
      headline: "The Poetics of Absence: Monoliths, Light, and Post-Industrial Stillness",
      author: "Dr. Elena Vane, Senior Curator of Spatial Practices",
      paragraphs: [
        "In our contemporary condition of perpetual acoustic and visual velocity, silence is no longer an ambient condition—it has become a radical, embattled territory. 'AFTER THE SILENCE' investigates what remains when the relentless chatter of computational modernity is suspended in favor of tectonic mass and zenithal light.",
        "The works gathered here do not ask the viewer to interpret symbols; they demand physical confrontation. When Kaelen Voss splits an eleven-ton block of raw Swiss granite and lines the rift with cold patinated bronze, the resulting vacuum is not empty. It acts as an acoustic chamber for the viewer's own somatic pulse.",
        "Sylvie Chen's suspended kinetic luminescence in the North Atrium completes this dialectic. Suspended twelve meters above a raked bed of volcanic sand, the titanium ring breathes in sixty-second intervals—a luminous lung measuring the slow tempo of geological time against the ephemeral scale of human perception.",
        "By structuring the exhibition across four descending chambers, the curatorial trajectory mimics a geological descent: moving from the raking daylight of the upper halls into the absolute subterranean darkness of the museum crypt, where works rely solely on luminescence, thermal radiation, and low-frequency resonant sound."
      ]
    },
    sections: [
      {
        title: "I. Tectonic Fractures",
        room: "Gallery 01 (Grand Hall)",
        description: "Monolithic extractions and stone rifts that explore structural rupture and weight."
      },
      {
        title: "II. Luminal Voids",
        room: "North Atrium (Level 1)",
        description: "Suspended kinetic light, atmospheric density, and gravitational luminescence."
      },
      {
        title: "III. Oxidized Memory",
        room: "Galleries 02 & 03",
        description: "Corroded steel, carbon pigments, and the temporal degradation of matter."
      },
      {
        title: "IV. Subterranean Resonance",
        room: "The Crypt (Level -2)",
        description: "Infrasonic acoustic sculptures and total sensory darkness."
      }
    ],
    participatingArtistIds: ["kaelen-voss", "sylvie-chen", "mateo-althaus", "aria-thorne", "renzo-castiglione"],
    audioGuideTrackId: "track-01",
    prevExhibition: {
      id: "chroma-drift",
      title: "CHROMA / DRIFT: The Dissolution of Pure Surface"
    },
    nextExhibition: {
      id: "structures-of-dissent",
      title: "STRUCTURES OF DISSENT: Monolithic Brutalism in the Post-Digital Age"
    }
  },
  {
    id: "chroma-drift",
    isCurrent: false,
    isFlagship: false,
    title: "CHROMA / DRIFT",
    subtitle: "The Dissolution of Pure Surface",
    dates: "APR 16 — AUG 29, 2027",
    curators: ["Sylvie Chen", "Gaston Mercier"],
    location: "Galleries 5 & 6, East Wing",
    heroImage: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=85",
    statement: "An immersive exploration of monochromatic saturation, deep indigo, carbon blacks, and light-absorbing nanostructured pigments.",
    participatingArtistIds: ["sylvie-chen", "aria-thorne"]
  },
  {
    id: "structures-of-dissent",
    isCurrent: false,
    isFlagship: false,
    title: "STRUCTURES OF DISSENT",
    subtitle: "Monolithic Brutalism in the Post-Digital Age",
    dates: "SEP 18, 2027 — FEB 20, 2028",
    curators: ["Prof. Marcus Vance", "Dr. Elena Vane"],
    location: "South Atrium & Sculpture Terrace",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    statement: "Re-examining architectural brutalism through massive poured concrete, unyielding geometries, and resistant materials.",
    participatingArtistIds: ["mateo-althaus", "kaelen-voss"]
  }
];

export const ARTISTS = [
  {
    id: "kaelen-voss",
    name: "Kaelen Voss",
    origin: "Zurich, Switzerland (b. 1974)",
    residence: "Berlin & Milan",
    discipline: "Monolithic Sculpture / Spatial Mass",
    portrait: "/assets/images/artist-kaelen-voss.jpg",
    quote: "Stone is not inert; it is frozen time waiting for light to complete its silence.",
    bio: "Kaelen Voss is internationally celebrated for his monumental stone, raw iron, and basalt monoliths. Trained initially as a stonemason in the Alpine quarries of Ticino before studying spatial theory at the Berlin University of the Arts, Voss treats mass not as a barrier, but as a lens through which empty space becomes palpable. His work has been exhibited at the Venice Biennale, Kunsthalle Basel, and the Palais de Tokyo.",
    statement: "My practice begins with geological extraction. When we quarry stone, we are reading millions of years of compressed pressure and climatic shift. By introducing precision architectural fissures and patinated metal inlays into raw megaliths, I aim to create an encounter where human temporal scale collides with geological patience.",
    timeline: [
      { year: "1974", event: "Born in Zurich to an architectural drafts family" },
      { year: "1994–1998", event: "Apprenticeship in granite quarrying and classical stone carving in San Bernardino, Grisons" },
      { year: "1999–2003", event: "Studied Spatial Art & Sculpture under Rebecca Horn, UdK Berlin" },
      { year: "2011", event: "Awarded the Swiss Grand Award for Art for 'Monolith VII'" },
      { year: "2019", event: "Venice Biennale Swiss Pavilion Solo Presentation ('The Quiet Quarry')" },
      { year: "2026", event: "Commissioned for MUSEUM NOIR Flagship Atrium Installation" }
    ],
    soloExhibitions: [
      { year: "2026", title: "After the Silence", venue: "Museum Noir, Zurich/Paris" },
      { year: "2024", title: "The Weight of Horizon", venue: "Fondazione Prada, Milan" },
      { year: "2021", title: "Basalt and Ash", venue: "Kunsthalle Basel" },
      { year: "2018", title: "Tectonic Fissures", venue: "Dia Beacon, New York" }
    ],
    relatedArtistIds: ["mateo-althaus", "aria-thorne", "sylvie-chen"]
  },
  {
    id: "sylvie-chen",
    name: "Sylvie Chen",
    origin: "Taipei, Taiwan (b. 1981)",
    residence: "Paris & Taipei",
    discipline: "Spatial Light / Luminal Kinetics",
    portrait: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    quote: "Darkness is not the absence of light; it is the medium through which light gains substance.",
    bio: "Sylvie Chen investigates the perceptual boundary between illumination and shadow. Utilizing custom optical glass, aerospace titanium, and slowly modulating phosphor lasers, her spatial installations envelop viewers in atmospheric fields that challenge spatial orientation and temporal perception.",
    statement: "I do not construct objects; I tune atmospheres. Light in my installations acts like water or vapor—it pools in corners, falls through structural voids, and evaporates over time, leaving the viewer alone with their own perceptual apparatus.",
    timeline: [
      { year: "1981", event: "Born in Taipei" },
      { year: "2004", event: "MFA in Optoelectronics and Media Art, ENSBA Paris" },
      { year: "2015", event: "Prix Marcel Duchamp Nominee" },
      { year: "2023", event: "Permanent installation at Centre Pompidou-Metz" },
      { year: "2026", event: "Lead Luminal Artist, 'After The Silence' at Museum Noir" }
    ],
    soloExhibitions: [
      { year: "2026", title: "Vessels of Light", venue: "Museum Noir" },
      { year: "2023", title: "Zero Lux", venue: "Tokyo Metropolitan Teien Museum" },
      { year: "2020", title: "The Luminous Void", venue: "Phaeno Science Centre, Wolfsburg" }
    ],
    relatedArtistIds: ["kaelen-voss", "renzo-castiglione"]
  },
  {
    id: "mateo-althaus",
    name: "Mateo Althaus",
    origin: "Vienna, Austria (b. 1968)",
    residence: "Vienna & London",
    discipline: "Brutalist Cast & Aggregated Concrete",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=85",
    quote: "Concrete is the petrified memory of our industrial optimism.",
    bio: "Mateo Althaus casts ultra-dense architectural components from post-industrial slag, pulverized marble, and Portland cement. His monumental works explore tectonic gravity, architectural decay, and civilizational remnants.",
    statement: "My works are fragments of an architecture that was never built, or perhaps already demolished. I pour concrete with high moisture and ash content so the surfaces retain the scars of their hydration.",
    timeline: [
      { year: "1968", event: "Born in Vienna" },
      { year: "1992", event: "Graduated Academy of Fine Arts Vienna" },
      { year: "2008", event: "Golden Lion for Best Architecture Pavilion, Venice" },
      { year: "2026", event: "Commission for Museum Noir South Terrace" }
    ],
    soloExhibitions: [
      { year: "2025", title: "Aggregates of Ash", venue: "Secession Vienna" },
      { year: "2022", title: "The Brutalist Memory", venue: "Tate Modern Tanks, London" }
    ],
    relatedArtistIds: ["kaelen-voss", "aria-thorne"]
  },
  {
    id: "aria-thorne",
    name: "Aria Thorne",
    origin: "Sheffield, United Kingdom (b. 1985)",
    residence: "London & Kyoto",
    discipline: "Deep Mineral Pigments / Oxidized Ferrous Panels",
    portrait: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85",
    quote: "Rust is the fire that consumes without flame.",
    bio: "Aria Thorne develops large-format monochromatic panels using oxidized steel powders, crushed lapis, soot, and bone-tar binders. Her work engages with industrial entropy and the sublime alchemy of chemical decay.",
    statement: "I coat raw sheets of steel with acids and let the weather of coastal England sculpt the surface over four seasons. I am an observer and facilitator of natural oxidization rather than a painter.",
    timeline: [
      { year: "1985", event: "Born in Sheffield" },
      { year: "2009", event: "MA Royal College of Art, London" },
      { year: "2018", event: "Kyoto Art Center Residency in Urushi Lacquer & Pigment" },
      { year: "2026", event: "Installation at Museum Noir" }
    ],
    soloExhibitions: [
      { year: "2024", title: "Ferrous Strata", venue: "Whitechapel Gallery, London" },
      { year: "2021", title: "Oxidized Horizon", venue: "National Museum of Modern Art, Tokyo" }
    ],
    relatedArtistIds: ["sylvie-chen", "mateo-althaus"]
  },
  {
    id: "renzo-castiglione",
    name: "Renzo Castiglione",
    origin: "Bologna, Italy (b. 1978)",
    residence: "Rome & Marseille",
    discipline: "Kinetic Acoustic Sculptures & Resonant Void",
    portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85",
    quote: "A room without sound is never silent; it is simply listening to its own geometry.",
    bio: "Renzo Castiglione creates large mechanical and acoustic installations where low-frequency infrasound and tuned steel rods vibrate in resonance with museum gallery architecture.",
    statement: "I tune rooms like cellos. The mass of the concrete walls and the volume of air inside become the vibrating body of the sculpture.",
    timeline: [
      { year: "1978", event: "Born in Bologna" },
      { year: "2002", event: "Conservatorio di Milano in Electroacoustic Composition" },
      { year: "2026", event: "Crypt Acoustic Intervention, Museum Noir" }
    ],
    soloExhibitions: [
      { year: "2025", title: "Infrasonic Chambers", venue: "IRCAM / Centre Pompidou, Paris" },
      { year: "2022", title: "The Singing Monolith", venue: "MAXXI Rome" }
    ],
    relatedArtistIds: ["kaelen-voss", "sylvie-chen"]
  }
];

export const ARTWORKS = [
  {
    id: "monolith-xii-black-horizon",
    title: "Monolith XII (The Black Horizon)",
    artist: "Kaelen Voss",
    artistId: "kaelen-voss",
    year: 2026,
    medium: "Raw Alpine Granite, Cast Patinated Bronze, Basalt Dust",
    dimensions: "440 × 195 × 120 cm (Weight: 11,400 kg)",
    location: "Grand Hall (Gallery 01)",
    accessionNumber: "MN-2026-001-SC",
    image: "/assets/images/hero-monolith.jpg",
    aspectRatio: "16/9",
    category: "Monolithic Sculpture",
    era: "Contemporary (2020s)",
    featuredInHero: true,
    featuredInExhibition: "after-the-silence",
    curatorialNotes: "Quarried from the deep strata of San Bernardino in the Swiss Alps, Monolith XII stands as the centerpiece of Museum Noir's permanent collection. The central fissure, lined with cold patinated bronze, aligns precisely with the museum's solar skylight at the winter solstice.",
    provenance: "Commissioned directly by the Museum Noir Acquisitions Committee, Zurich (2026).",
    audioTrackId: "track-02",
    highlights: ["Permanent Collection Anchor", "Solar-Aligned Fissure", "Museum Noir Commission"]
  },
  {
    id: "suspended-ring-ash",
    title: "Vessel of Suspended Luminescence (Ring in Ash)",
    artist: "Sylvie Chen",
    artistId: "sylvie-chen",
    year: 2026,
    medium: "Aerospace Titanium, Custom Optical Phosphor Ring, Raked Volcanic Sand",
    dimensions: "Ring Ø 580 cm, Installation area: 1,200 sq meters",
    location: "North Atrium (Level 1)",
    accessionNumber: "MN-2026-004-LT",
    image: "/assets/images/exhibition-silence.jpg",
    aspectRatio: "16/9",
    category: "Spatial Light",
    era: "Contemporary (2020s)",
    featuredInHero: false,
    featuredInExhibition: "after-the-silence",
    curatorialNotes: "Suspended by four precision micro-cables, this eight-hundred-kilogram titanium ring emits a low-frequency pulse of 1800K warm luminous flux. Beneath it, a raked sea of black volcanic ash from Mount Etna absorbs sound, creating an anechoic contemplative zone.",
    provenance: "Created in situ for the inaugural exhibition 'After The Silence' (2026).",
    audioTrackId: "track-03",
    highlights: ["Interactive Luminal Pulse", "Anechoic Volcanic Ground", "Commissioned 2026"]
  },
  {
    id: "tectonic-mass-iv",
    title: "Tectonic Mass IV (Study in Inverted Gravity)",
    artist: "Mateo Althaus",
    artistId: "mateo-althaus",
    year: 2024,
    medium: "Ultra-dense Post-Industrial Slag Concrete, Rebar, Pulverized Carrara Marble",
    dimensions: "320 × 280 × 160 cm",
    location: "Gallery 02 (East Wing)",
    accessionNumber: "MN-2024-019-BC",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "4/3",
    category: "Brutalist Cast",
    era: "Contemporary (2020s)",
    featuredInHero: false,
    featuredInExhibition: "after-the-silence",
    curatorialNotes: "Althaus explores the visual weight of concrete suspended in tension. The jagged fractures expose the crystalline aggregate within, echoing seismic ruptures in Alpine geology.",
    provenance: "Acquired from Galerie Thaddaeus Ropac, Paris (2024). Gift of the Hans & Maya Noir Foundation.",
    audioTrackId: "track-01",
    highlights: ["Seismic Aggregate", "Structural Brutalism"]
  },
  {
    id: "ferrous-void-09",
    title: "Ferrous Void No. 09 (Oxidized Nocturne)",
    artist: "Aria Thorne",
    artistId: "aria-thorne",
    year: 2025,
    medium: "Acid-etched Corten Steel, Natural Soot, Bone-Tar Binder on Baltic Birch",
    dimensions: "260 × 200 cm (Diptych)",
    location: "Gallery 03 (North Wall)",
    accessionNumber: "MN-2025-032-PA",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "3/4",
    category: "Oxidized Pigment",
    era: "Contemporary (2020s)",
    featuredInHero: false,
    featuredInExhibition: "after-the-silence",
    curatorialNotes: "Thorne exposed these panels to the salty sea gales of the Northumbrian coast for eleven months before arresting the oxidation process with cold beeswax and raw bone-tar.",
    provenance: "Acquisition grant from the British Contemporary Arts Council & Museum Noir (2025).",
    audioTrackId: "track-02",
    highlights: ["Natural Weathering", "Textured Rust Relief"]
  },
  {
    id: "resonant-crypt-monolith",
    title: "Resonant Chamber (Low-Frequency Void)",
    artist: "Renzo Castiglione",
    artistId: "renzo-castiglione",
    year: 2026,
    medium: "Cast Iron Acoustic Bells, Infrasonic Transducers, Dampened Basalt Plinth",
    dimensions: "Variable (Subterranean Crypt Installation)",
    location: "The Crypt (Level -2)",
    accessionNumber: "MN-2026-009-AC",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "16/9",
    category: "Kinetic Void",
    era: "Contemporary (2020s)",
    featuredInHero: false,
    featuredInExhibition: "after-the-silence",
    curatorialNotes: "Emitting an imperceptible 19 Hz sub-bass oscillation, this installation vibrates the chest cavities of visitors, producing a sensation of architectural weight and subterranean pressure.",
    provenance: "Permanent site-specific installation, Museum Noir Crypt (2026).",
    audioTrackId: "track-01",
    highlights: ["Site-Specific Crypt Work", "Infrasonic Resonance"]
  },
  {
    id: "study-inverted-dome",
    title: "Study for an Inverted Dome (Dark Basalt)",
    artist: "Kaelen Voss",
    artistId: "kaelen-voss",
    year: 2023,
    medium: "Carved Obsidian & Polished Swedish Black Granite",
    dimensions: "185 × 185 × 90 cm",
    location: "Gallery 01 (South Alcove)",
    accessionNumber: "MN-2023-014-SC",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "1/1",
    category: "Monolithic Sculpture",
    era: "Contemporary (2020s)",
    featuredInHero: false,
    featuredInExhibition: null,
    curatorialNotes: "A hollow hemispherical basin carved with micrometer precision. When filled with water, it acts as a mirror capturing the skylight while swallowing all light beneath its meniscus.",
    provenance: "Gift of the Artist to Museum Noir on the occasion of the New Wing Dedication (2023).",
    audioTrackId: "track-04",
    highlights: ["Obsidian Reflection", "Zero Meniscus"]
  },
  {
    id: "luminal-column-viii",
    title: "Luminal Column VIII (Interference Pattern)",
    artist: "Sylvie Chen",
    artistId: "sylvie-chen",
    year: 2025,
    medium: "Laminated Dichroic Quartz, Collimated Laser Diode, Nitrogen Atmosphere",
    dimensions: "380 × 45 × 45 cm",
    location: "East Gallery Corridor",
    accessionNumber: "MN-2025-021-LT",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "9/16",
    category: "Spatial Light",
    era: "Contemporary (2020s)",
    featuredInHero: false,
    featuredInExhibition: "chroma-drift",
    curatorialNotes: "A razor-thin vertical blade of monochrome violet light passing through a column of pure quartz crystal, fracturing into infinite microscopic wave-fronts.",
    provenance: "Acquired at Art Basel Unlimited (2025).",
    audioTrackId: "track-03",
    highlights: ["Dichroic Interference", "Architectural Scale"]
  },
  {
    id: "strata-of-lead-mercury",
    title: "Strata of Lead and Cinnabar",
    artist: "Aria Thorne",
    artistId: "aria-thorne",
    year: 2022,
    medium: "Rolled Sheet Lead, Synthetic Cinnabar Pigment, Beeswax, Steel Screws",
    dimensions: "210 × 170 × 12 cm",
    location: "Gallery 04 (Archive Wing)",
    accessionNumber: "MN-2022-007-PA",
    image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "3/4",
    category: "Oxidized Pigment",
    era: "Contemporary (2020s)",
    featuredInHero: false,
    featuredInExhibition: null,
    curatorialNotes: "The sheer weight of lead—exceeding 300 kilograms—causes the canvas support to sag by design, creating horizontal ripples across the scarlet cinnabar strata.",
    provenance: "Private collection, Zurich. Acquired 2022 by Museum Noir Foundation.",
    audioTrackId: "track-02",
    highlights: ["Structural Sag", "Alchemical Materials"]
  },
  {
    id: "brutalist-totem-02",
    title: "Brutalist Totem 02 (Monolith of Demolition)",
    artist: "Mateo Althaus",
    artistId: "mateo-althaus",
    year: 2021,
    medium: "Crushed Concrete from Deconstructed Cooling Towers, High-Tension Cables",
    dimensions: "510 × 110 × 90 cm",
    location: "Sculpture Courtyard (Exterior)",
    accessionNumber: "MN-2021-041-BC",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "4/5",
    category: "Brutalist Cast",
    era: "Contemporary (2020s)",
    featuredInHero: false,
    featuredInExhibition: "structures-of-dissent",
    curatorialNotes: "Constructed entirely from the recycled detritus of the decommissioned Mühleberg Nuclear Power Plant, this towering totem stands exposed to weather in the museum courtyard.",
    provenance: "Site-specific commission by Canton of Zurich & Museum Noir (2021).",
    audioTrackId: "track-04",
    highlights: ["Nuclear Demolition Concrete", "Outdoor Monolith"]
  },
  {
    id: "shadow-as-mass-vault",
    title: "Shadow as Mass (Crypt Spatial Arch)",
    artist: "Kaelen Voss",
    artistId: "kaelen-voss",
    year: 2025,
    medium: "Honed Belgian Black Marble, Inlaid Tungsten Rods",
    dimensions: "290 × 240 × 80 cm",
    location: "Gallery 01 (East Hall)",
    accessionNumber: "MN-2025-018-SC",
    image: "https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "4/3",
    category: "Monolithic Sculpture",
    era: "Contemporary (2020s)",
    featuredInHero: false,
    featuredInExhibition: "after-the-silence",
    curatorialNotes: "Belgian black marble is renowned for having no visible grain. When carved into this hyperbolic paraboloid, the sculpture appears as a physical hole cut into the ambient air.",
    provenance: "Acquisition made possible through the Dr. Catherine de Saint-Germain Curatorial Discretionary Fund.",
    audioTrackId: "track-02",
    highlights: ["Hyperbolic Curve", "Grainless Black Marble"]
  },
  {
    id: "luminous-echo-zenith",
    title: "Luminous Echo at Zenith (Field 07)",
    artist: "Sylvie Chen",
    artistId: "sylvie-chen",
    year: 2026,
    medium: "Bespoke Prismatic Glass, Polarized LED Matrix, Dark Quartz Sand",
    dimensions: "600 × 300 × 40 cm",
    location: "South Gallery Mezzanine",
    accessionNumber: "MN-2026-011-LT",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "16/9",
    category: "Spatial Light",
    era: "Contemporary (2020s)",
    featuredInHero: false,
    featuredInExhibition: "after-the-silence",
    curatorialNotes: "A field of floor-level prismatic crystal tiles that project subtle, shimmering ripples onto the monumental concrete ceiling twelve meters above.",
    provenance: "Museum Noir Collection (2026).",
    audioTrackId: "track-03",
    highlights: ["Ceiling Projection", "Prismatic Quartz"]
  },
  {
    id: "monolith-arch-silence",
    title: "The Architecture of Silence (Study in Raw Poured Basalt)",
    artist: "Mateo Althaus",
    artistId: "mateo-althaus",
    year: 2023,
    medium: "Poured Basaltic Lava Concrete, Weathered Pine Formwork Impressions",
    dimensions: "340 × 160 × 60 cm",
    location: "Atrium Vestibule",
    accessionNumber: "MN-2023-088-BC",
    image: "/assets/images/museum-architecture.jpg",
    aspectRatio: "16/9",
    category: "Brutalist Cast",
    era: "Contemporary (2020s)",
    featuredInHero: false,
    featuredInExhibition: "after-the-silence",
    curatorialNotes: "The wooden grain of the rough-sawn Swiss pine boards remains indelibly stamped into the solidified dark basalt cement, capturing an ephemeral craft process in permanent mineral form.",
    provenance: "Purchased from the Artist's Studio, Vienna (2023).",
    audioTrackId: "track-04",
    highlights: ["Wood-Grained Concrete", "Vestibule Portal"]
  }
];

export const AUDIO_GUIDE_TRACKS = [
  {
    id: "track-01",
    title: "Prelude: The Acoustics of Raw Concrete & Void",
    speaker: "Dr. Elena Vane, Senior Curator",
    duration: "03:42",
    transcript: "Welcome to Museum Noir. As you cross the threshold into the Grand Atrium, observe how the acoustic reverberation changes. Architect Jacques Voss designed these twenty-meter concrete walls without parallel planes, causing ambient city sound to dissolve into a heavy, textured stillness. The works you are about to encounter do not compete with this architecture; they are its resonant instruments.",
    audioFrequency: 110, // for WebAudio ambient drone
    room: "North Atrium & Grand Hall"
  },
  {
    id: "track-02",
    title: "Monolith XII: Geological Weight vs. Solar Alignment",
    speaker: "Kaelen Voss, Artist in Residence",
    duration: "04:18",
    transcript: "When I discovered this eleven-ton block in the San Bernardino quarry, it was resting in total subterranean darkness. By slicing it open with a diamond wire and lining that wound with cold patinated bronze, I wanted to capture the precise angle of winter sunlight. When you stand before it at noon, the bronze reflects a blade of gold into the concrete shadow.",
    audioFrequency: 85,
    room: "Gallery 01"
  },
  {
    id: "track-03",
    title: "Suspended Ring: Temporal Rhythms in Light",
    speaker: "Sylvie Chen, Luminal Artist",
    duration: "05:02",
    transcript: "Notice how the ring breathes. The illumination does not flicker or strobe; it expands and recedes over a sixty-second cycle, which matches the resting heart rate of a calm human body. The black sand beneath absorbs any stray reflection, creating the illusion that this titanium circle floats in an infinite celestial vacuum.",
    audioFrequency: 140,
    room: "North Atrium (Level 1)"
  },
  {
    id: "track-04",
    title: "Architecture & Philosophy: The Brutalist Vessel",
    speaker: "Dr. Catherine de Saint-Germain, Museum Director",
    duration: "06:15",
    transcript: "Founded in 1984 in what was once a subterranean customs vault, Museum Noir was reimagined in 2026 as a cultural temple to radical contemporary art. We reject the sterile white-cube model in favor of dark basalt, raw timber, and zenithal daylight, creating an experience where art feels extracted directly from the earth.",
    audioFrequency: 95,
    room: "Atrium Vestibule"
  }
];

export const PUBLIC_PROGRAMS = [
  {
    id: "ev-01",
    date: "THU, OCT 29",
    time: "20:00 — 23:00",
    title: "Nocturne IX: Subterranean Frequencies & Basalt Acoustics",
    category: "Performance & Sound",
    location: "The Crypt (Level -2)",
    status: "Limited Passes",
    description: "An evening of live modular synthesizer compositions and acoustic bell resonance performed by Renzo Castiglione within the resonant concrete vaults."
  },
  {
    id: "ev-02",
    date: "SAT, NOV 14",
    time: "16:00 — 18:00",
    title: "Curatorial Symposium: 'Silence After Industry'",
    category: "Symposium & Keynote",
    location: "Auditorium Noir & Live Stream",
    status: "Open Registration",
    description: "Keynote lectures by Dr. Elena Vane and Prof. Marcus Vance on the role of monolithic mass in an era of algorithmic dematerialization."
  },
  {
    id: "ev-03",
    date: "SUN, DEC 06",
    time: "14:00 — 15:30",
    title: "Artist Walkthrough with Kaelen Voss",
    category: "Curatorial Walk",
    location: "Galleries 1 & 2",
    status: "Patron Priority",
    description: "A rare private guided dialogue through 'After The Silence' led by sculptor Kaelen Voss, discussing stone extraction ethics and spatial acoustics."
  }
];

export const TICKETS_DATA = [
  {
    id: "t-general",
    name: "General Museum Admission",
    price: 22,
    currency: "CHF / EUR",
    description: "Full access to all 6 exhibition galleries, North Atrium installations, and permanent collection.",
    includes: ["Permanent Collection Access", "Flagship Exhibition: 'After The Silence'", "Free Audio Guide Digital Pass", "Wardrobe & Locker Storage"]
  },
  {
    id: "t-vernissage",
    name: "Vernissage & Patron Pass",
    price: 45,
    currency: "CHF / EUR",
    isPopular: true,
    description: "Priority expedited entry, admission to Subterranean Crypt sound performances, and complimentary catalogue monograph.",
    includes: ["Priority VIP No-Queue Entry", "Access to Subterranean Sound Crypt", "Hardcover Exhibition Monograph (Worth €35)", "Glass of Pinot Noir at Café Noir", "Unlimited re-entry for 48 hours"]
  },
  {
    id: "t-concession",
    name: "Student / Artist / Concession",
    price: 14,
    currency: "CHF / EUR",
    description: "Available for students, accredited artists, museum professionals (ICOM), and visitors under 26.",
    includes: ["Full Museum Access", "Requires Valid Student/Artist ID on Arrival", "Audio Guide Pass Included"]
  },
  {
    id: "t-guided",
    name: "Curatorial Private Tour Pass",
    price: 65,
    currency: "CHF / EUR",
    description: "Intimate 90-minute tour led by an Assistant Curator (maximum 10 participants).",
    includes: ["90-minute Curatorial Walkthrough", "Access to Conservation Studio & Archives", "Champagne reception in Patron Lounge", "Permanent Museum Noir Membership for 3 months"]
  }
];

export const PHILOSOPHY_SECTIONS = [
  {
    num: "01",
    title: "Architecture as Silence",
    body: "We reject the sterile, bleached 'white cube' that dominated 20th-century museum theory. Museum Noir is built of heavy, light-absorbing basalt and board-formed concrete. Here, the building does not disappear; it forms a resonant geological crucible that gives weight and consequence to the artwork it cradles."
  },
  {
    num: "02",
    title: "The Primacy of Somatic Presence",
    body: "In a world overwhelmed by frictionless digital images on handheld glass screens, our curatorial mandate champions works of physical friction, acoustic depth, and monumental scale. Art must be encountered with the entire body—through the skin, the ears, and the lungs."
  },
  {
    num: "03",
    title: "Ethical Geological Stewardship",
    body: "All mineral, stone, and metallic matter commissioned for Museum Noir is sourced from ethical European quarries operating under regenerative environmental pacts. Every kilogram of stone extracted is tracked in our permanent ledger."
  },
  {
    num: "04",
    title: "The Museum as Sanctuary",
    body: "Museum Noir operates with deliberate acoustic dampening throughout all galleries. We prohibit flash photography, automated tour loudspeakers, and commercial signage. The museum is a civic sanctuary for contemplation, research, and radical aesthetic encounter."
  }
];

export const LEADERSHIP_TEAM = [
  {
    name: "Dr. Catherine de Saint-Germain",
    role: "President & Museum Director",
    bio: "Former Director of Curatorial Affairs at Centre Pompidou, Dr. de Saint-Germain has directed Museum Noir's architectural expansion since 2018.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=85"
  },
  {
    name: "Dr. Elena Vane",
    role: "Senior Curator of Spatial Practices",
    bio: "Art historian and theorist specializing in post-minimalist sculpture, land art, and European brutalism. Author of 'The Heavy Horizon' (MIT Press).",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85"
  },
  {
    name: "Mikhail Soren",
    role: "Curator of Luminal & Kinetic Art",
    bio: "Architect and digital arts theorist, overseeing the museum's generative commissions and acoustic crypt interventions.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=85"
  },
  {
    name: "Dr. Anouk Weber",
    role: "Head of Conservation & Material Sciences",
    bio: "Specialist in petrographic analysis, mineral pigment stabilization, and non-destructive bronze preservation.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=85"
  }
];
