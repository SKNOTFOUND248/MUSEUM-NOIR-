import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { MUSEUM_INFO } from '../data/museumData';

export default function Footer({ setCurrentPage, onOpenTickets }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [zurichTime, setZurichTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/Zurich',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        setZurichTime(formatted);
      } catch (_) {
        setZurichTime('22:20:48');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
    }
  };

  const handleNav = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-medium)',
      paddingTop: 'clamp(4rem, 8vw, 7rem)',
      paddingBottom: '3rem',
      position: 'relative'
    }}>
      <div className="museum-container">
        {/* Upper Manifesto & Dispatch Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          marginBottom: '5rem'
        }}>
          {/* Column 1: Museum Identity & Mission */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2.5rem',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              MUSEUM NOIR
            </div>
            <p style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: '1.25rem',
              lineHeight: 1.5,
              color: 'var(--text-secondary)',
              maxWidth: '480px',
              marginBottom: '2rem'
            }}>
              "Art is not an ornament for civilization; it is the geological excavation of our deepest collective silence."
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.775rem',
              color: 'var(--accent-gold)'
            }}>
              <Clock size={15} />
              <span>ZURICH / PARIS LOCAL TIME: {zurichTime} CET</span>
            </div>
          </div>

          {/* Column 2: The Curatorial Dispatch */}
          <div>
            <span className="meta-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
              Publications & Dispatches
            </span>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.35rem',
              fontWeight: 600,
              marginBottom: '0.75rem'
            }}>
              The Curatorial Ledger
            </h3>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              lineHeight: 1.6
            }}>
              Quarterly critical essays, monograph announcements, and invitations to vernissages directly from the Curatorial Board.
            </p>

            {isSubscribed ? (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem',
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border-hairline)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--accent-gold)'
              }}>
                <CheckCircle2 size={18} />
                <span>You are inscribed in the Curatorial Ledger.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@institution.org"
                  required
                  style={{
                    flex: 1,
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-medium)',
                    borderRight: 'none',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8125rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  className="btn-noir"
                  style={{ padding: '0.85rem 1.5rem', fontSize: '0.75rem' }}
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        <hr className="hairline-divider" style={{ marginBottom: '4rem' }} />

        {/* Middle Navigation & Information Matrix */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2.5rem',
          marginBottom: '5rem'
        }}>
          {/* Section: Visit */}
          <div>
            <span className="meta-label" style={{ display: 'block', marginBottom: '1.25rem' }}>
              01 • Access & Visit
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><button onClick={() => handleNav('visit')} style={{ color: 'var(--text-secondary)' }}>Hours & Admissions</button></li>
              <li><button onClick={() => handleNav('visit')} style={{ color: 'var(--text-secondary)' }}>Directions & Transit</button></li>
              <li><button onClick={() => handleNav('visit')} style={{ color: 'var(--text-secondary)' }}>Accessibility Protocol</button></li>
              <li><button onClick={() => handleNav('visit')} style={{ color: 'var(--text-secondary)' }}>Café Noir & Bookstore</button></li>
              <li><button onClick={onOpenTickets} style={{ color: 'var(--accent-gold)' }}>Reserve Day Passes →</button></li>
            </ul>
          </div>

          {/* Section: Program */}
          <div>
            <span className="meta-label" style={{ display: 'block', marginBottom: '1.25rem' }}>
              02 • Program
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><button onClick={() => handleNav('exhibition')} style={{ color: 'var(--text-secondary)' }}>Current: After The Silence</button></li>
              <li><button onClick={() => handleNav('collection')} style={{ color: 'var(--text-secondary)' }}>Permanent Collection</button></li>
              <li><button onClick={() => handleNav('artist')} style={{ color: 'var(--text-secondary)' }}>Artist Monographs</button></li>
              <li><button onClick={() => handleNav('home')} style={{ color: 'var(--text-secondary)' }}>Public Symposia</button></li>
              <li><button onClick={() => handleNav('about')} style={{ color: 'var(--text-secondary)' }}>Acoustic Crypt Series</button></li>
            </ul>
          </div>

          {/* Section: Institution */}
          <div>
            <span className="meta-label" style={{ display: 'block', marginBottom: '1.25rem' }}>
              03 • Institution
            </span>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><button onClick={() => handleNav('about')} style={{ color: 'var(--text-secondary)' }}>Architectural History</button></li>
              <li><button onClick={() => handleNav('about')} style={{ color: 'var(--text-secondary)' }}>Curatorial Board</button></li>
              <li><button onClick={() => handleNav('about')} style={{ color: 'var(--text-secondary)' }}>Conservation Studio</button></li>
              <li><button onClick={() => handleNav('about')} style={{ color: 'var(--text-secondary)' }}>Patrons & Benefactors</button></li>
              <li><button onClick={() => handleNav('about')} style={{ color: 'var(--text-secondary)' }}>Press & Monograph Rights</button></li>
            </ul>
          </div>

          {/* Section: Location & Hours */}
          <div>
            <span className="meta-label" style={{ display: 'block', marginBottom: '1.25rem' }}>
              04 • Sanctuary Hours
            </span>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <div>TUE — SUN: 10:00 – 20:00</div>
              <div>THURSDAY: 10:00 – 22:00 (Nocturne)</div>
              <div>MONDAY: Closed for Conservation</div>
              <div style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                440 Quai Noir, Port District<br />CH-8005 Zurich / Paris
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Giant Monumental Typography & Legal */}
        <div style={{
          borderTop: '1px solid var(--border-hairline)',
          paddingTop: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 14vw, 13rem)',
            lineHeight: 0.82,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            color: 'var(--border-hairline)',
            userSelect: 'none',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
          }}>
            MUSEUM NOIR
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.725rem',
            color: 'var(--text-muted)'
          }}>
            <div>
              © 1984–2026 MUSEUM NOIR FOUNDATION. ALL RIGHTS RESERVED.
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <span>ACCREDITED BY ICOM & PRO HELVETIA</span>
              <span>ETHICAL GEOLOGICAL STEWARDSHIP</span>
              <span>WCAG 2.1 AAA COMPLIANT</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
