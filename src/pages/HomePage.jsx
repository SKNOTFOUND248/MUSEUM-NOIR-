import React from 'react';
import { ArrowRight, ArrowDown, Volume2, Calendar, MapPin, Sparkles, Clock, Eye } from 'lucide-react';
import { EXHIBITIONS, ARTISTS, ARTWORKS, PUBLIC_PROGRAMS, MUSEUM_INFO } from '../data/museumData';

export default function HomePage({ 
  setCurrentPage, 
  onSelectArtwork, 
  onSelectArtist, 
  onOpenTickets,
  onPlayAudio 
}) {
  const currentExhibition = EXHIBITIONS.find(e => e.isCurrent) || EXHIBITIONS[0];
  const heroArtwork = ARTWORKS.find(a => a.featuredInHero) || ARTWORKS[0];
  const featuredArtists = ARTISTS.slice(0, 3);
  const selectedCollection = ARTWORKS.slice(1, 6);

  return (
    <main>
      {/* 1. HERO: Full-Viewport Opening Composition */}
      <section style={{
        position: 'relative',
        minHeight: 'calc(100vh - 85px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(2rem, 5vw, 4rem) var(--gutter)',
        overflow: 'hidden',
        borderBottom: '1px solid var(--border-medium)'
      }}>
        {/* Full-Bleed Artwork Backdrop with Architectural Gradients */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0.62,
          filter: 'contrast(1.15) brightness(0.85)'
        }}>
          <img
            src={heroArtwork.image}
            alt={heroArtwork.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
          {/* Subtle architectural vignette overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(180deg, rgba(7,7,7,0.7) 0%, rgba(7,7,7,0.2) 40%, rgba(7,7,7,0.92) 100%)'
          }} />
        </div>

        {/* Hero Top Identity Header */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.4rem' }}>
              FLAGSHIP INAUGURAL EXHIBITION • OCT 2026 — MAR 2027
            </span>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--text-primary)',
              letterSpacing: '0.06em'
            }}>
              GALLERIES 01–04 • NORTH ATRIUM • CRYPT
            </div>
          </div>

          <button
            onClick={() => onPlayAudio('track-01')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.6rem 1.1rem',
              backgroundColor: 'rgba(14, 14, 14, 0.75)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--border-medium)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-primary)'
            }}
          >
            <Volume2 size={15} color="var(--accent-gold)" />
            <span>Audio Guide: Hall Acoustics (03:42)</span>
          </button>
        </div>

        {/* Hero Center Monumental Title & Artwork Label */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          margin: 'auto 0',
          padding: '2.5rem 0'
        }}>
          <h1 className="title-monumental" style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            MUSEUM<br />
            NOIR
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <p style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(1.35rem, 2.5vw, 2.1rem)',
              lineHeight: 1.35,
              color: 'var(--text-primary)',
              maxWidth: '620px'
            }}>
              An international institution dedicated to monolithic sculpture, spatial darkness, generative light, and radical architectural curation.
            </p>

            {/* Quick Hero Plaque */}
            <div 
              onClick={() => onSelectArtwork(heroArtwork)}
              style={{
                backgroundColor: 'rgba(14, 14, 14, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--border-hairline)',
                padding: '1.25rem 1.5rem',
                maxWidth: '380px',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                <span className="meta-label" style={{ color: 'var(--accent-gold)' }}>FEATURED ANCHOR WORK</span>
                <Eye size={14} color="var(--text-muted)" />
              </div>
              <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                {heroArtwork.title}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-secondary)' }}>
                {heroArtwork.artist} • {heroArtwork.year} • {heroArtwork.location}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Footer Bar: Current Exhibition CTA & Quick Stats */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          borderTop: '1px solid var(--border-hairline)',
          paddingTop: '1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <button
              onClick={() => setCurrentPage('exhibition')}
              className="btn-noir"
            >
              Enter Flagship Exhibition: {currentExhibition.title} →
            </button>
            <button
              onClick={onOpenTickets}
              className="btn-outline"
            >
              Reserve Passes
            </button>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-secondary)'
          }}>
            <div>OPEN TODAY: 10:00 – 21:00</div>
            <div style={{ display: 'none', md: 'block' }}>ZURICH / PARIS CORRIDOR</div>
          </div>
        </div>
      </section>

      {/* 2. CURRENT EXHIBITION SPOTLIGHT: "AFTER THE SILENCE" */}
      <section className="section-spacing" style={{ borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
                CURRENT PRINCIPAL EXHIBITION
              </span>
              <h2 className="title-section">
                AFTER THE SILENCE
              </h2>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              OCT 14, 2026 — MAR 28, 2027
            </div>
          </div>

          {/* Asymmetric Curatorial Composition */}
          <div className="grid-editorial-asymmetric">
            {/* Left: Monumental Installation View */}
            <div className="artwork-frame" onClick={() => setCurrentPage('exhibition')} style={{ cursor: 'pointer' }}>
              <div className="artwork-image-wrapper" style={{ height: '560px' }}>
                <img
                  src={currentExhibition.heroImage}
                  alt={currentExhibition.title}
                  className="artwork-img"
                />
              </div>
              <div className="museum-plaque">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div className="plaque-title">Sylvie Chen — Vessel of Suspended Luminescence</div>
                  <span className="meta-label">North Atrium Installation</span>
                </div>
                <div className="plaque-meta">
                  Aerospace Titanium, Custom Optical Phosphor Ring • 2026
                </div>
              </div>
            </div>

            {/* Right: Curatorial Thesis & Details */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="meta-label" style={{ display: 'block', marginBottom: '1rem' }}>
                  Curators: {currentExhibition.curators.join(' & ')}
                </span>
                <p style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.45rem, 2.2vw, 1.85rem)',
                  lineHeight: 1.45,
                  color: 'var(--text-primary)',
                  marginBottom: '2rem'
                }}>
                  "Silence is not absence; it is a dense, resonant physical material that occupies space with the weight of geological time."
                </p>
                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: '2.5rem'
                }}>
                  {currentExhibition.statement}
                </p>

                {/* Exhibition Chambers List */}
                <div style={{
                  borderTop: '1px solid var(--border-hairline)',
                  paddingTop: '1.5rem',
                  marginBottom: '2.5rem'
                }}>
                  <span className="meta-label" style={{ display: 'block', marginBottom: '1rem' }}>
                    Curatorial Spatial Sequence
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {currentExhibition.sections.map((sec, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0.6rem 0',
                        borderBottom: '1px solid var(--border-hairline)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.775rem'
                      }}>
                        <span style={{ color: 'var(--text-primary)' }}>{sec.title}</span>
                        <span style={{ color: 'var(--text-muted)' }}>{sec.room}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => setCurrentPage('exhibition')}
                  className="btn-noir"
                  style={{ width: '100%' }}
                >
                  Explore Complete Exhibition & Curatorial Essay →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ARTISTS: Architectural Monographs */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
                MONOGRAPHIC FOCUS
              </span>
              <h2 className="title-section">
                Featured Artists
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('artist')}
              className="btn-text-link"
            >
              View Full Artists Roster (5 Masters) →
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem'
          }}>
            {featuredArtists.map((artist) => (
              <div 
                key={artist.id}
                onClick={() => { onSelectArtist(artist.id); setCurrentPage('artist'); }}
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-hairline)',
                  cursor: 'pointer',
                  transition: 'border-color 0.25s ease'
                }}
              >
                <div style={{ height: '380px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={artist.portrait}
                    alt={artist.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(100%) contrast(1.1)',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(7,7,7,0.85)',
                    padding: '0.35rem 0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--accent-gold)'
                  }}>
                    {artist.origin}
                  </div>
                </div>

                <div style={{ padding: '2rem' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem'
                  }}>
                    {artist.name}
                  </h3>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1.25rem'
                  }}>
                    {artist.discipline}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    lineHeight: 1.45,
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem'
                  }}>
                    "{artist.quote}"
                  </p>
                  <span className="btn-text-link" style={{ fontSize: '0.75rem' }}>
                    View Monograph & Works →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MUSEUM STATEMENT: Architectural Manifesto */}
      <section className="section-spacing" style={{ borderBottom: '1px solid var(--border-medium)', position: 'relative' }}>
        <div className="museum-editorial-container">
          <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '1.5rem', textAlign: 'center' }}>
            MUSEUM NOIR MANIFESTO • ARCHITECTURE & SILENCE
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
            textAlign: 'center',
            lineHeight: 1.05,
            marginBottom: '3.5rem',
            textTransform: 'uppercase'
          }}>
            "We reject the sterile white cube in favor of tectonic mass, raking daylight, and acoustic stillness."
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)'
          }}>
            <p>
              Founded in 1984 within an abandoned subterranean customs bunker, Museum Noir was constructed on a foundational principle: contemporary art does not require neutral insulation. It demands physical resonance with the geological and architectural envelope that holds it.
            </p>
            <p>
              Designed with rough-sawn Alpine pine formwork and dark basalt aggregates, our galleries absorb ambient city noise. In these chambers, artworks by Kaelen Voss, Sylvie Chen, and Mateo Althaus operate as acoustic and spatial anchors, pulling visitors out of digital velocity into deep contemplation.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button
              onClick={() => setCurrentPage('about')}
              className="btn-outline"
            >
              Read Full Architectural History & Curatorial Charter →
            </button>
          </div>
        </div>
      </section>

      {/* 5. SELECTED COLLECTION: Curatorial Asymmetric Mosaic */}
      <section className="section-spacing" style={{ borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
                PERMANENT HOLDINGS
              </span>
              <h2 className="title-section">
                Selected Works from the Collection
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('collection')}
              className="btn-text-link"
            >
              Browse Complete Catalogue (30+ Masterworks) →
            </button>
          </div>

          {/* Mosaic Grid */}
          <div className="grid-asymmetric-mosaic">
            {selectedCollection.map((art, idx) => {
              const colClass = idx === 0 ? 'mosaic-col-7' : idx === 1 ? 'mosaic-col-5' : idx === 2 ? 'mosaic-col-4' : idx === 3 ? 'mosaic-col-4' : 'mosaic-col-4';
              return (
                <div
                  key={art.id}
                  className={`${colClass} artwork-frame`}
                  onClick={() => onSelectArtwork(art)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="artwork-image-wrapper" style={{ height: idx < 2 ? '440px' : '340px' }}>
                    <img
                      src={art.image}
                      alt={art.title}
                      className="artwork-img"
                    />
                  </div>
                  <div className="museum-plaque">
                    <div className="plaque-title">{art.title}</div>
                    <div className="plaque-artist">{art.artist}</div>
                    <div className="plaque-meta">{art.medium} • {art.year}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. UPCOMING EXHIBITIONS & PUBLIC PROGRAM */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem'
          }}>
            {/* Upcoming Exhibitions */}
            <div>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.75rem' }}>
                FORTHCOMING SEASONS
              </span>
              <h2 className="title-section" style={{ marginBottom: '2.5rem' }}>
                Upcoming Exhibitions
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {EXHIBITIONS.filter(e => !e.isCurrent).map((ex) => (
                  <div
                    key={ex.id}
                    style={{
                      padding: '1.75rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-hairline)'
                    }}
                  >
                    <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.4rem' }}>
                      {ex.dates}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-editorial)',
                      fontSize: '1.65rem',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem'
                    }}>
                      {ex.title}: {ex.subtitle}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {ex.statement}
                    </p>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-muted)' }}>
                      Curators: {ex.curators.join(' & ')} • {ex.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Public Symposia & Nocturnes */}
            <div>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.75rem' }}>
                PUBLIC DISPATCH & SYMPOSIA
              </span>
              <h2 className="title-section" style={{ marginBottom: '2.5rem' }}>
                Public Programs
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {PUBLIC_PROGRAMS.map((prog) => (
                  <div
                    key={prog.id}
                    style={{
                      padding: '1.5rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-hairline)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.4rem' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                        {prog.date} • {prog.time}
                      </span>
                      <span className="meta-label">{prog.status}</span>
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      marginBottom: '0.5rem'
                    }}>
                      {prog.title}
                    </h3>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '0.75rem' }}>
                      {prog.description}
                    </p>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      Location: {prog.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VISIT INFORMATION SNAPSHOT & FINAL CTA */}
      <section className="section-spacing" style={{ position: 'relative' }}>
        <div className="museum-container">
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-medium)',
            padding: 'clamp(3rem, 6vw, 5.5rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '1rem' }}>
                PLAN YOUR CONTEMPLATIVE JOURNEY
              </span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                lineHeight: 1.1,
                textTransform: 'uppercase',
                marginBottom: '1.5rem'
              }}>
                Experience Museum Noir
              </h2>
              <p style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: '1.25rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
                marginBottom: '2rem'
              }}>
                Pre-booking is recommended for guaranteed entry to the Subterranean Crypt and Flagship Exhibition halls.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={onOpenTickets}
                  className="btn-noir"
                  style={{ padding: '1rem 2rem' }}
                >
                  Reserve Passes Online →
                </button>
                <button
                  onClick={() => setCurrentPage('visit')}
                  className="btn-outline"
                >
                  Visitor Guide & Transit
                </button>
              </div>
            </div>

            {/* Practical Table */}
            <div style={{
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-hairline)',
              padding: '2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              lineHeight: 1.8
            }}>
              <div style={{ color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '0.75rem' }}>
                ESSENTIAL VISITOR INFORMATION
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-hairline)', padding: '0.4rem 0' }}>
                <span style={{ color: 'var(--text-muted)' }}>LOCATION:</span>
                <span>440 Quai Noir, Port District</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-hairline)', padding: '0.4rem 0' }}>
                <span style={{ color: 'var(--text-muted)' }}>OPEN TODAY:</span>
                <span>10:00 – 21:00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-hairline)', padding: '0.4rem 0' }}>
                <span style={{ color: 'var(--text-muted)' }}>ADMISSION:</span>
                <span>€22 General / €14 Concession</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0' }}>
                <span style={{ color: 'var(--text-muted)' }}>TRANSIT:</span>
                <span>Metro Line 9 (L'Ombre) / Quai Noir Ferry</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
