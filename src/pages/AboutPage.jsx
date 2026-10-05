import React from 'react';
import { Shield, Sparkles, Building, Award, HeartHandshake, BookOpen } from 'lucide-react';
import { PHILOSOPHY_SECTIONS, LEADERSHIP_TEAM, MUSEUM_INFO } from '../data/museumData';

export default function AboutPage({ onOpenTickets }) {
  return (
    <main style={{ minHeight: '100vh', paddingBottom: '8rem' }}>
      {/* 1. EDITORIAL ABOUT HERO */}
      <section style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-medium)',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)'
      }}>
        <div className="museum-container">
          <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.75rem' }}>
            INSTITUTIONAL CHARTER & ARCHITECTURAL FOUNDATION
          </span>
          <h1 className="title-monumental" style={{ color: 'var(--text-primary)', marginBottom: '2rem' }}>
            The Institution
          </h1>

          <p style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: 'clamp(1.4rem, 2.8vw, 2.25rem)',
            lineHeight: 1.4,
            color: 'var(--text-secondary)',
            maxWidth: '960px'
          }}>
            MUSEUM NOIR was conceived not merely as a repository for art objects, but as a consecrated architectural space where geological weight, silence, and human perception converge.
          </p>
        </div>
      </section>

      {/* 2. ARCHITECTURAL EXPLORATION & MONUMENTAL BUILDING */}
      <section className="section-spacing" style={{ borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div className="grid-editorial-asymmetric">
            {/* Building Image */}
            <div className="artwork-frame">
              <div className="artwork-image-wrapper" style={{ height: '560px' }}>
                <img
                  src="/assets/images/museum-architecture.jpg"
                  alt="Museum Noir Architecture at Twilight"
                  className="artwork-img"
                />
              </div>
              <div className="museum-plaque">
                <div className="plaque-title">The Monolithic Pavilion at Twilight</div>
                <div className="plaque-meta">Voss & Moreau Atelier d'Architecture • Poured Basaltic Concrete, Black Glass & Water Basin (2026)</div>
              </div>
            </div>

            {/* Architectural Narrative */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.75rem' }}>
                THE ARCHITECTURE
              </span>
              <h2 className="title-section" style={{ marginBottom: '1.5rem' }}>
                A Vessel of Light and Concrete
              </h2>
              <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Designed by the Swiss architectural atelier Voss & Moreau, the building is constructed from board-formed concrete mixed with dark basaltic sand.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                The galleries feature no parallel surfaces, preventing flutter echoes and creating an ultra-quiet acoustic field. Deep geometric apertures funnel raking natural sunlight into the central atrium, shifting the mood of the museum continuously from morning zenith to twilight nocturne.
              </p>
              <div style={{
                borderTop: '1px solid var(--border-hairline)',
                paddingTop: '1.25rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6
              }}>
                TOTAL GALLERY AREA: 8,400 m² • 6 EXHIBITION HALLS • SUBTERRANEAN ACOUSTIC CRYPT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE FOUR PHILOSOPHICAL PILLARS */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div style={{ marginBottom: '4rem' }}>
            <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
              CURATORIAL ETHICS
            </span>
            <h2 className="title-section">
              The Four Principles of Museum Noir
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem'
          }}>
            {PHILOSOPHY_SECTIONS.map((sec) => (
              <div
                key={sec.num}
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-hairline)',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.5rem',
                    color: 'var(--accent-gold)',
                    fontWeight: 700,
                    marginBottom: '1.25rem'
                  }}>
                    {sec.num}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    marginBottom: '1rem'
                  }}>
                    {sec.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65
                  }}>
                    {sec.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP & CURATORIAL BOARD */}
      <section className="section-spacing" style={{ borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div style={{ marginBottom: '3.5rem' }}>
            <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
              GOVERNANCE & CURATORIAL FELLOWS
            </span>
            <h2 className="title-section">
              Leadership & Curators
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem'
          }}>
            {LEADERSHIP_TEAM.map((member, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-hairline)',
                  padding: '2rem'
                }}
              >
                <div style={{ height: '220px', marginBottom: '1.5rem', overflow: 'hidden' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)' }}
                  />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                  {member.name}
                </h3>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.725rem', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
                  {member.role}
                </div>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PATRONS, FOUNDATION & ACADEMIC PARTNERS */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="museum-editorial-container" style={{ textAlign: 'center' }}>
          <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '1rem' }}>
            INSTITUTIONAL ALLIANCES
          </span>
          <h2 className="title-section" style={{ marginBottom: '2rem' }}>
            Academic & Foundation Partners
          </h2>
          <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '3rem' }}>
            Museum Noir operates as a non-profit cultural foundation supported by the Swiss Confederation, the Hans & Maya Noir Foundation, and international university fellowships.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--text-muted)'
          }}>
            <span>• PRO HELVETIA ARTS COUNCIL</span>
            <span>• ETH ZÜRICH SPATIAL LAB</span>
            <span>• ECOLE NATIONALE SUPÉRIEURE DES BEAUX-ARTS</span>
            <span>• ICOM INTERNATIONAL COMMITTEE</span>
          </div>
        </div>
      </section>
    </main>
  );
}
