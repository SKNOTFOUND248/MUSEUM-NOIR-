import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Volume2, MapPin, Calendar, User, Eye, Sparkles, BookOpen } from 'lucide-react';
import { EXHIBITIONS, ARTWORKS, ARTISTS } from '../data/museumData';

export default function ExhibitionPage({ 
  setCurrentPage, 
  onSelectArtwork, 
  onSelectArtist, 
  onPlayAudio, 
  onOpenTickets 
}) {
  const [activeSectionTab, setActiveSectionTab] = useState(0);

  const exhibition = EXHIBITIONS.find(e => e.id === 'after-the-silence') || EXHIBITIONS[0];
  const exhibitionArtworks = ARTWORKS.filter(a => a.featuredInExhibition === 'after-the-silence');
  const participatingArtists = ARTISTS.filter(a => exhibition.participatingArtistIds.includes(a.id));

  return (
    <main>
      {/* 1. EXHIBITION HERO HEADER */}
      <section style={{
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-medium)',
        paddingTop: 'clamp(3rem, 6vw, 5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)'
      }}>
        <div className="museum-container">
          {/* Breadcrumb & Live Meta */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)' }}>
              <span>EXHIBITION 01 • FLAGSHIP</span>
              <span>/</span>
              <span style={{ color: 'var(--text-secondary)' }}>GALLERIES 1–4, ATRIUM & CRYPT</span>
            </div>

            <div style={{ color: 'var(--text-secondary)' }}>
              {exhibition.dates}
            </div>
          </div>

          {/* Exhibition Title & Subtitle */}
          <div style={{ maxWidth: '1080px', marginBottom: '3rem' }}>
            <h1 className="title-monumental" style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
              {exhibition.title}
            </h1>
            <p style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.25,
              fontWeight: 300
            }}>
              {exhibition.subtitle}
            </p>
          </div>

          {/* Curatorial Header Info Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            borderTop: '1px solid var(--border-hairline)',
            borderBottom: '1px solid var(--border-hairline)',
            padding: '1.5rem 0',
            marginBottom: '3.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem'
          }}>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block' }}>CURATORS:</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{exhibition.curators.join(' & ')}</span>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block' }}>DURATION:</span>
              <span style={{ color: 'var(--text-primary)' }}>{exhibition.dates}</span>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block' }}>LOCATION:</span>
              <span style={{ color: 'var(--text-primary)' }}>{exhibition.location}</span>
            </div>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block' }}>ADMISSION:</span>
              <span style={{ color: 'var(--accent-gold)' }}>Included with Day Pass</span>
            </div>
          </div>

          {/* Large Hero Artwork Banner */}
          <div className="artwork-frame" onClick={() => onSelectArtwork(exhibitionArtworks[1] || exhibitionArtworks[0])} style={{ cursor: 'pointer' }}>
            <div className="artwork-image-wrapper" style={{ height: 'clamp(420px, 60vh, 720px)' }}>
              <img
                src={exhibition.heroImage}
                alt="Exhibition Installation View"
                className="artwork-img"
              />
            </div>
            <div className="museum-plaque" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div className="plaque-title">Sylvie Chen — Vessel of Suspended Luminescence (Ring in Ash)</div>
                <div className="plaque-meta">North Atrium Level 1 • Aerospace Titanium, Phosphor Ring, Volcanic Sand (2026)</div>
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); onPlayAudio('track-03'); }}
                className="btn-outline"
                style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
              >
                <Volume2 size={14} /> Listen to Sylvie Chen (05:02)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXHIBITION INTRODUCTION & CURATORIAL ESSAY */}
      <section className="section-spacing" style={{ borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-editorial-container">
          <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '1rem' }}>
            CURATORIAL DISPATCH
          </span>
          <h2 className="title-editorial-lg" style={{ marginBottom: '1.5rem' }}>
            {exhibition.essay.headline}
          </h2>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
            ESSAY BY {exhibition.essay.author.toUpperCase()}
          </div>

          {/* Curatorial Essay Content */}
          <div style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: '1.3rem',
            lineHeight: 1.75,
            color: 'var(--text-secondary)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            <p className="curatorial-drop-cap">
              {exhibition.essay.paragraphs[0]}
            </p>
            <p>
              {exhibition.essay.paragraphs[1]}
            </p>
            <p>
              {exhibition.essay.paragraphs[2]}
            </p>
            <p>
              {exhibition.essay.paragraphs[3]}
            </p>
          </div>

          {/* Pullquote */}
          <div style={{
            margin: '4rem 0',
            padding: '2.5rem',
            borderLeft: '2px solid var(--accent-gold)',
            backgroundColor: 'var(--bg-surface)'
          }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
              lineHeight: 1.25,
              color: 'var(--text-primary)',
              fontStyle: 'italic',
              marginBottom: '1rem'
            }}>
              "The work does not seek to depict absence; it constructs a space where the listener's own presence becomes audible."
            </p>
            <span className="meta-label">— Dr. Elena Vane, Curatorial Notes on Monolithic Space</span>
          </div>
        </div>
      </section>

      {/* 3. FOUR SPATIAL CHAMBERS / FLOORPLAN WALKTHROUGH */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
                SPATIAL CHOREOGRAPHY
              </span>
              <h2 className="title-section">
                Exhibition Chambers & Gallery Sequence
              </h2>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Descent from Level 1 to Level -2 Crypt
            </span>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', marginBottom: '2.5rem', paddingBottom: '0.5rem' }}>
            {exhibition.sections.map((sec, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSectionTab(idx)}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: activeSectionTab === idx ? 'var(--bg-primary)' : 'transparent',
                  border: activeSectionTab === idx ? '1px solid var(--accent-gold)' : '1px solid var(--border-hairline)',
                  color: activeSectionTab === idx ? 'var(--accent-gold)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                {sec.title}
              </button>
            ))}
          </div>

          {/* Active Chamber Card */}
          <div style={{
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--border-hairline)',
            padding: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
                {exhibition.sections[activeSectionTab].room}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: '2.25rem',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                {exhibition.sections[activeSectionTab].title}
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                {exhibition.sections[activeSectionTab].description}
              </p>
              <button
                onClick={() => onPlayAudio('track-01')}
                className="btn-outline"
                style={{ fontSize: '0.75rem' }}
              >
                <Volume2 size={14} /> Play Chamber Acoustics Audio
              </button>
            </div>

            <div style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-hairline)',
              padding: '2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              lineHeight: 1.8
            }}>
              <div style={{ color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '0.75rem' }}>
                CHAMBER SPECIFICATIONS
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-hairline)', padding: '0.4rem 0' }}>
                <span style={{ color: 'var(--text-muted)' }}>CEILING HEIGHT:</span>
                <span>12.4 Meters</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-hairline)', padding: '0.4rem 0' }}>
                <span style={{ color: 'var(--text-muted)' }}>LIGHTING:</span>
                <span>Natural Zenithal Skylight + 1800K Phosphor</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-hairline)', padding: '0.4rem 0' }}>
                <span style={{ color: 'var(--text-muted)' }}>ACOUSTIC REVERB:</span>
                <span>0.84 Seconds (Anechoic Basalt)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ARTWORK GRID IN THIS EXHIBITION */}
      <section className="section-spacing" style={{ borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
                EXHIBITION WORKS
              </span>
              <h2 className="title-section">
                Commissioned Artworks & Sculptures
              </h2>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              Click artwork to inspect curatorial details
            </span>
          </div>

          <div className="grid-gallery-3">
            {exhibitionArtworks.map((art) => (
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
                  <div className="plaque-artist">{art.artist} ({art.year})</div>
                  <div className="plaque-meta">{art.medium}</div>
                  <div style={{ marginTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="meta-label" style={{ color: 'var(--accent-gold)' }}>{art.location}</span>
                    <span className="btn-text-link" style={{ fontSize: '0.675rem' }}>Inspect →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PARTICIPATING ARTISTS IN THIS EXHIBITION */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
              EXHIBITION ROSTER
            </span>
            <h2 className="title-section">
              Participating Artists
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {participatingArtists.map((artist) => (
              <div
                key={artist.id}
                onClick={() => { onSelectArtist(artist.id); setCurrentPage('artist'); }}
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-hairline)',
                  padding: '2rem',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s ease'
                }}
              >
                <div style={{ height: '180px', marginBottom: '1.5rem', overflow: 'hidden' }}>
                  <img
                    src={artist.portrait}
                    alt={artist.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }}
                  />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                  {artist.name}
                </h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  {artist.origin}
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  {artist.discipline}
                </p>
                <span className="btn-text-link" style={{ fontSize: '0.725rem' }}>
                  View Artist Monograph →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EXHIBITION NAVIGATION & CTA */}
      <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <div>
              <span className="meta-label">PREVIOUS EXHIBITION</span>
              <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                CHROMA / DRIFT: The Dissolution of Pure Surface
              </div>
            </div>

            <button
              onClick={onOpenTickets}
              className="btn-noir"
            >
              Reserve Tickets for After The Silence →
            </button>

            <div style={{ textAlign: 'right' }}>
              <span className="meta-label">NEXT FORTHCOMING EXHIBITION</span>
              <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '0.25rem' }}>
                STRUCTURES OF DISSENT: Monolithic Brutalism
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
