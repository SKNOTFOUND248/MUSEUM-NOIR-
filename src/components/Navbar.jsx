import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Search, Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { MUSEUM_INFO } from '../data/museumData';

export default function Navbar({ 
  currentPage, 
  setCurrentPage, 
  onOpenSearch, 
  onOpenTickets,
  isAmbientPlaying, 
  onToggleAmbient,
  theme,
  onToggleTheme
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'exhibition', label: 'After The Silence' },
    { id: 'collection', label: 'Collection' },
    { id: 'artist', label: 'Artists' },
    { id: 'visit', label: 'Visit & Tickets' },
    { id: 'about', label: 'About' }
  ];

  const handleNav = (id) => {
    setCurrentPage(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Archival Header Bar */}
      <div style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-hairline)',
        padding: '0.45rem var(--gutter)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.725rem',
        color: 'var(--text-secondary)',
        letterSpacing: '0.06em',
        textTransform: 'uppercase'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#4ade80',
              display: 'inline-block'
            }}></span>
            {MUSEUM_INFO.liveStatus.message}
          </span>
          <span style={{ opacity: 0.4, display: 'none', md: 'inline' }}>|</span>
          <span style={{ display: 'none', md: 'inline' }} className="hide-on-mobile">
            {MUSEUM_INFO.address}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <button 
            onClick={onToggleAmbient}
            aria-label="Toggle Museum Ambient Acoustics"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: isAmbientPlaying ? 'var(--accent-gold)' : 'var(--text-secondary)',
              transition: 'color 0.2s ease'
            }}
          >
            {isAmbientPlaying ? <Volume2 size={13} /> : <VolumeX size={13} />}
            <span style={{ display: 'none', sm: 'inline' }}>
              {isAmbientPlaying ? "Acoustic Field: Active" : "Acoustic Field"}
            </span>
          </button>

          <span style={{ opacity: 0.4 }}>|</span>

          <button
            onClick={onToggleTheme}
            aria-label="Toggle Gallery Atmosphere"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'var(--text-secondary)'
            }}
          >
            {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
            <span style={{ display: 'none', sm: 'inline' }}>
              {theme === 'dark' ? "Daylight" : "Noir"}
            </span>
          </button>
        </div>
      </div>

      {/* Main Museum Navigation Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 900,
        backgroundColor: isScrolled ? 'rgba(8, 8, 8, 0.94)' : 'var(--bg-primary)',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-medium)' : '1px solid var(--border-hairline)',
        transition: 'all 0.35s ease'
      }}>
        <div style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '1.1rem var(--gutter)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Museum Logotype */}
          <a 
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNav('home'); }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              lineHeight: 1
            }}
          >
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem',
              letterSpacing: '0.04em',
              fontWeight: 400,
              color: 'var(--text-primary)',
              textTransform: 'uppercase'
            }}>
              MUSEUM NOIR
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.625rem',
              letterSpacing: '0.14em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              marginTop: '0.2rem'
            }}>
              Zurich / Paris • Est. 1984
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav style={{
            display: 'none',
            gap: '2.25rem',
            alignItems: 'center'
          }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8125rem',
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    position: 'relative',
                    paddingBottom: '0.25rem',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '1.5px',
                      backgroundColor: 'var(--accent-gold)'
                    }} />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions & Mobile Menu Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={onOpenSearch}
              aria-label="Search Archives and Collection"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 0.85rem',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-hairline)',
                color: 'var(--text-secondary)',
                fontSize: '0.775rem',
                fontFamily: 'var(--font-mono)',
                transition: 'all 0.2s ease'
              }}
            >
              <Search size={14} />
              <span style={{ display: 'none', sm: 'inline' }}>Search</span>
              <kbd style={{
                fontSize: '0.65rem',
                padding: '0.1rem 0.35rem',
                backgroundColor: 'var(--bg-subtle)',
                border: '1px solid var(--border-hairline)',
                color: 'var(--text-muted)'
              }}>⌘K</kbd>
            </button>

            <button
              onClick={onOpenTickets}
              className="btn-noir"
              style={{
                padding: '0.65rem 1.35rem',
                fontSize: '0.75rem',
                display: 'none',
                sm: 'inline-flex'
              }}
            >
              Reserve Passes
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-hairline)',
                backgroundColor: 'var(--bg-surface)'
              }}
              className="mobile-menu-btn"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Curatorial Mobile / Overlay Drawer */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'var(--bg-primary)',
          zIndex: 950,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2.5rem var(--gutter)',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}>
              MUSEUM NOIR
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              style={{
                padding: '0.5rem',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-hairline)'
              }}
            >
              <X size={24} />
            </button>
          </div>

          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            margin: '3rem 0'
          }}>
            {navLinks.map((link, idx) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '1.5rem',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid var(--border-hairline)'
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--accent-gold)'
                }}>
                  0{idx + 1}
                </span>
                <span style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: '2.25rem',
                  color: currentPage === link.id ? 'var(--accent-gold)' : 'var(--text-primary)'
                }}>
                  {link.label}
                </span>
              </button>
            ))}
          </nav>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            borderTop: '1px solid var(--border-hairline)',
            paddingTop: '1.5rem'
          }}>
            <button
              onClick={() => { setIsMenuOpen(false); onOpenTickets(); }}
              className="btn-noir"
              style={{ width: '100%', padding: '1rem' }}
            >
              Reserve Exhibition Passes
            </button>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>440 Quai Noir, CH-8005</span>
              <span>10:00 — 21:00</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 899px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: inline-flex !important; }
        }
        @media (max-width: 640px) {
          .hide-on-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
