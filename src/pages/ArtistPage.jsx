import React, { useState } from 'react';
import { User, Calendar, MapPin, Sparkles, BookOpen, Volume2, ArrowRight } from 'lucide-react';
import { ARTISTS, ARTWORKS } from '../data/museumData';

export default function ArtistPage({ 
  selectedArtistId, 
  setSelectedArtistId, 
  onSelectArtwork, 
  onPlayAudio 
}) {
  const currentArtistId = selectedArtistId || 'kaelen-voss';
  const artist = ARTISTS.find(a => a.id === currentArtistId) || ARTISTS[0];

  const artistWorks = ARTWORKS.filter(a => a.artistId === artist.id);
  const relatedArtists = ARTISTS.filter(a => artist.relatedArtistIds.includes(a.id));

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '8rem' }}>
      {/* 1. ARTIST SELECTOR TAB STRIP */}
      <section style={{
        backgroundColor: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-medium)',
        padding: '0.85rem var(--gutter)',
        overflowX: 'auto'
      }}>
        <div style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center'
        }}>
          <span className="meta-label" style={{ marginRight: '1rem', whiteSpace: 'nowrap' }}>
            SELECT MONOGRAPH:
          </span>
          {ARTISTS.map(a => {
            const isSelected = a.id === artist.id;
            return (
              <button
                key={a.id}
                onClick={() => setSelectedArtistId(a.id)}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: isSelected ? 'var(--bg-primary)' : 'transparent',
                  border: isSelected ? '1px solid var(--accent-gold)' : '1px solid var(--border-hairline)',
                  color: isSelected ? 'var(--accent-gold)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                {a.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. ARTIST MONOGRAPHIC HERO */}
      <section style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-medium)',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)'
      }}>
        <div className="museum-container">
          <div className="grid-editorial-asymmetric">
            {/* Left: Monumental Portrait */}
            <div>
              <div style={{
                position: 'relative',
                maxHeight: '680px',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-hairline)'
              }}>
                <img
                  src={artist.portrait}
                  alt={artist.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '680px',
                    objectFit: 'cover',
                    filter: 'grayscale(100%) contrast(1.1)'
                  }}
                />
              </div>

              {/* Quick Audio Track if applicable */}
              <div style={{
                marginTop: '1.5rem',
                padding: '1.25rem',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8125rem', fontWeight: 600 }}>
                    Studio Acoustic Archive
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    Dialogue on material extraction & spatial form
                  </div>
                </div>
                <button
                  onClick={() => onPlayAudio('track-02')}
                  className="btn-outline"
                  style={{ padding: '0.45rem 0.85rem', fontSize: '0.7rem' }}
                >
                  <Volume2 size={13} /> Listen
                </button>
              </div>
            </div>

            {/* Right: Monograph Title, Origins & Bio */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.75rem' }}>
                MONOGRAPH & CATALOGUE RAISONNÉ
              </span>
              <h1 className="title-monumental" style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {artist.name}
              </h1>
              
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <span>{artist.origin}</span>
                <span>•</span>
                <span>BASED IN {artist.residence.toUpperCase()}</span>
              </div>

              <div style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-surface)',
                borderLeft: '2px solid var(--accent-gold)',
                marginBottom: '2.5rem'
              }}>
                <p style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(1.25rem, 2vw, 1.6rem)',
                  fontStyle: 'italic',
                  lineHeight: 1.45,
                  color: 'var(--text-primary)'
                }}>
                  "{artist.quote}"
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <span className="meta-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
                  Biographical Appraisal
                </span>
                <p style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '1.25rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)'
                }}>
                  {artist.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ARTIST STATEMENT (IN THEIR OWN WORDS) */}
      <section className="section-spacing" style={{ borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-editorial-container">
          <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '1rem' }}>
            PRIMARY SOURCE • ARTIST STATEMENT
          </span>
          <h2 className="title-editorial-lg" style={{ marginBottom: '2rem' }}>
            On the Extraction of Form and Space
          </h2>
          <p className="curatorial-drop-cap" style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: '1.35rem',
            lineHeight: 1.75,
            color: 'var(--text-secondary)'
          }}>
            {artist.statement}
          </p>
        </div>
      </section>

      {/* 4. SELECTED WORKS BY THIS ARTIST */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
                PERMANENT HOLDINGS
              </span>
              <h2 className="title-section">
                Selected Works by {artist.name}
              </h2>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              {artistWorks.length} Masterworks in Museum Noir
            </span>
          </div>

          <div className="grid-gallery-3">
            {artistWorks.map((art) => (
              <div
                key={art.id}
                className="artwork-frame"
                onClick={() => onSelectArtwork(art)}
                style={{ cursor: 'pointer' }}
              >
                <div className="artwork-image-wrapper" style={{ height: '360px' }}>
                  <img
                    src={art.image}
                    alt={art.title}
                    className="artwork-img"
                  />
                </div>
                <div className="museum-plaque">
                  <div className="plaque-title">{art.title}</div>
                  <div className="plaque-artist">{art.year} • {art.category}</div>
                  <div className="plaque-meta">{art.medium}</div>
                  <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="meta-label">{art.location}</span>
                    <span className="btn-text-link" style={{ fontSize: '0.675rem' }}>Inspect →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ARTISTIC TIMELINE & EXHIBITION CHRONOLOGY */}
      <section className="section-spacing" style={{ borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div className="grid-editorial-asymmetric">
            {/* Timeline */}
            <div>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '1rem' }}>
                DEVELOPMENTAL CHRONOLOGY
              </span>
              <h2 className="title-section" style={{ marginBottom: '2.5rem' }}>
                Artistic Milestones
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {artist.timeline.map((item, idx) => (
                  <div key={idx} style={{
                    display: 'grid',
                    gridTemplateColumns: '110px 1fr',
                    gap: '1.5rem',
                    borderBottom: '1px solid var(--border-hairline)',
                    paddingBottom: '1.25rem'
                  }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                      {item.year}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {item.event}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solo Exhibitions History */}
            <div>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '1rem' }}>
                EXHIBITION HISTORY
              </span>
              <h2 className="title-section" style={{ marginBottom: '2.5rem' }}>
                Selected Solo Presentations
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {artist.soloExhibitions.map((ex, idx) => (
                  <div key={idx} style={{
                    padding: '1.5rem',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-hairline)'
                  }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--accent-gold)', marginBottom: '0.35rem' }}>
                      {ex.year}
                    </div>
                    <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {ex.title}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {ex.venue}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RELATED ARTISTS */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="museum-container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
              CURATORIAL DIALOGUES
            </span>
            <h2 className="title-section">
              Related Artists in the Collection
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {relatedArtists.map((rel) => (
              <div
                key={rel.id}
                onClick={() => { setSelectedArtistId(rel.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                style={{
                  padding: '2rem',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-hairline)',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease'
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {rel.name}
                </h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  {rel.origin} • {rel.discipline}
                </div>
                <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  "{rel.quote}"
                </p>
                <span className="btn-text-link" style={{ fontSize: '0.725rem' }}>
                  Open Monograph →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
