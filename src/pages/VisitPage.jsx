import React, { useState } from 'react';
import { MapPin, Clock, Ticket, Accessibility, Compass, Coffee, Book, Mail, Phone, ShieldCheck, ArrowRight, Check } from 'lucide-react';
import { MUSEUM_INFO, TICKETS_DATA, EXHIBITIONS } from '../data/museumData';

export default function VisitPage({ onOpenTickets, setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('hours'); // 'hours' | 'transit' | 'accessibility' | 'amenities'

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '8rem' }}>
      {/* 1. EDITORIAL VISIT HERO */}
      <section style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-medium)',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)'
      }}>
        <div className="museum-container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.75rem' }}>
                SANCTUARY PROTOCOL & VISITATION
              </span>
              <h1 className="title-monumental" style={{ color: 'var(--text-primary)' }}>
                Plan Your Visit
              </h1>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button
                onClick={onOpenTickets}
                className="btn-noir"
                style={{ padding: '1.1rem 2.5rem' }}
              >
                Reserve Admission Passes →
              </button>
            </div>
          </div>

          <p style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: 'clamp(1.35rem, 2.5vw, 2rem)',
            lineHeight: 1.45,
            color: 'var(--text-secondary)',
            maxWidth: '920px'
          }}>
            Museum Noir is located in the Port District along the waterfront basin. To preserve acoustic stillness and atmospheric intimacy, tickets are issued for timed-entry intervals.
          </p>
        </div>
      </section>

      {/* 2. HOURS & LOCATION MATRIX */}
      <section className="section-spacing" style={{ borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem'
          }}>
            {/* Hours Block */}
            <div style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-medium)',
              padding: '2.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <Clock size={20} color="var(--accent-gold)" />
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  Opening Hours
                </h2>
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '0.6rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>TUESDAY — SUNDAY</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{MUSEUM_INFO.hours.weekday}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-gold)' }}>THURSDAY NOCTURNE</span>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>{MUSEUM_INFO.hours.thursday}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-hairline)', paddingBottom: '0.6rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>WEEKEND</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{MUSEUM_INFO.hours.weekend}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                  <span>MONDAY</span>
                  <span>Closed for Conservation</span>
                </div>
              </div>

              <div style={{
                marginTop: '2rem',
                padding: '1rem',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-hairline)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)'
              }}>
                * Last gallery admission is 45 minutes prior to building closure.
              </div>
            </div>

            {/* Location & Interactive Architectural Map */}
            <div style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-medium)',
              padding: '2.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <MapPin size={20} color="var(--accent-gold)" />
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  Location & Campus
                </h2>
              </div>

              <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                {MUSEUM_INFO.address}<br />
                Port District / Cultural Basin
              </p>

              {/* Stylized Architectural Floorplan / Map Preview */}
              <div style={{
                height: '180px',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-hairline)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '1.5rem'
              }}>
                <svg width="100%" height="100%" viewBox="0 0 400 180" style={{ opacity: 0.7 }}>
                  <line x1="0" y1="40" x2="400" y2="40" stroke="#222" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="0" y1="90" x2="400" y2="90" stroke="#333" strokeWidth="1" />
                  <line x1="0" y1="140" x2="400" y2="140" stroke="#222" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="120" y1="0" x2="120" y2="180" stroke="#222" strokeWidth="1" />
                  <line x1="280" y1="0" x2="280" y2="180" stroke="#222" strokeWidth="1" />
                  <rect x="150" y="55" width="100" height="70" fill="#141414" stroke="#c7a363" strokeWidth="1.5" />
                  <text x="200" y="95" fill="#f5f4f0" fontSize="9" fontFamily="monospace" textAnchor="middle">MUSEUM NOIR</text>
                  <text x="200" y="110" fill="#c7a363" fontSize="7" fontFamily="monospace" textAnchor="middle">GRAND ATRIUM</text>
                  <circle cx="200" cy="55" r="3" fill="#c7a363" />
                </svg>
                <div style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.675rem',
                  color: 'var(--accent-gold)'
                }}>
                  COORDINATES: 47.3769° N, 8.5417° E
                </div>
              </div>

              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Directly accessible via Quai Noir Pedestrian Promenade and Ferry Pier 3.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TICKETS & ADMISSION TIERS */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
                TARIFFS & ADMISSION
              </span>
              <h2 className="title-section">
                Ticket Categories & Passes
              </h2>
            </div>
            <button onClick={onOpenTickets} className="btn-noir">
              Book Online Now →
            </button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {TICKETS_DATA.map((tier) => (
              <div
                key={tier.id}
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: tier.isPopular ? '1px solid var(--accent-gold)' : '1px solid var(--border-hairline)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  {tier.isPopular && (
                    <span style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '16px',
                      backgroundColor: 'var(--accent-gold)',
                      color: '#070707',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.625rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      textTransform: 'uppercase'
                    }}>
                      Patron Selection
                    </span>
                  )}
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                    {tier.name}
                  </h3>
                  <div style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: '2.5rem',
                    color: 'var(--accent-gold)',
                    marginBottom: '1rem'
                  }}>
                    €{tier.price} <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>EUR</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                    {tier.description}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '1rem', marginBottom: '2rem' }}>
                    <span className="meta-label" style={{ display: 'block', marginBottom: '0.75rem' }}>INCLUSIONS:</span>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.775rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                      {tier.includes.map((inc, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Check size={12} color="var(--accent-gold)" /> {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={onOpenTickets}
                  className={tier.isPopular ? "btn-noir" : "btn-outline"}
                  style={{ width: '100%', fontSize: '0.75rem' }}
                >
                  Select This Pass
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRANSIT, ACCESSIBILITY & AMENITIES */}
      <section className="section-spacing" style={{ borderBottom: '1px solid var(--border-medium)' }}>
        <div className="museum-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem'
          }}>
            {/* Transit & Directions */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Compass size={20} color="var(--accent-gold)" />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700 }}>
                  Transit & Arrival
                </h3>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-secondary)' }}>
                <div>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>METRO:</span>
                  Line 9, Station "L'Ombre" (3-minute walk through the sculpture plaza).
                </div>
                <div>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>WATER TAXI / FERRY:</span>
                  Port Basin Line F, Pier 3 (Quai Noir Maritime Terminal).
                </div>
                <div>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>PARKING:</span>
                  Underground automated garage available at 420 Quai Noir (EV charging bays equipped).
                </div>
              </div>
            </div>

            {/* Accessibility Accommodations */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Accessibility size={20} color="var(--accent-gold)" />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700 }}>
                  Accessibility Protocol
                </h3>
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                <p>
                  • Step-free wheelchair access throughout all 6 exhibition galleries, Atrium, and Subterranean Crypt via hydraulic elevators.
                </p>
                <p>
                  • Sensory Calm Hours: Every Wednesday 10:00 – 12:00 with reduced lighting and muted acoustic soundscapes.
                </p>
                <p>
                  • Tactile models and braille curatorial guides available free of charge at the Visitor Reception desk.
                </p>
                <p>
                  • Certified service animals are welcome throughout the museum.
                </p>
              </div>
            </div>

            {/* Café Noir & Bookstore */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <Coffee size={20} color="var(--accent-gold)" />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700 }}>
                  Café Noir & Bookstore
                </h3>
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                <p>
                  <strong style={{ color: 'var(--text-primary)' }}>Café Noir:</strong> Organic single-origin espresso, Alpine herb infusions, and natural biodynamic wines overlooking the reflecting water basin.
                </p>
                <p>
                  <strong style={{ color: 'var(--text-primary)' }}>Bookstore:</strong> Rare architectural monographs, limited edition artist prints, and the official Museum Noir Curatorial Catalogue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
