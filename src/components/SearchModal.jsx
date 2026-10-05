import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, BookOpen, User, Image, Calendar } from 'lucide-react';
import { ARTWORKS, ARTISTS, EXHIBITIONS } from '../data/museumData';

export default function SearchModal({ 
  onClose, 
  onSelectArtwork, 
  onSelectArtist, 
  onSelectExhibition 
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const cleanQuery = query.toLowerCase().trim();

  const filteredArtworks = cleanQuery ? ARTWORKS.filter(a => 
    a.title.toLowerCase().includes(cleanQuery) ||
    a.artist.toLowerCase().includes(cleanQuery) ||
    a.medium.toLowerCase().includes(cleanQuery) ||
    a.category.toLowerCase().includes(cleanQuery) ||
    a.curatorialNotes.toLowerCase().includes(cleanQuery)
  ) : [];

  const filteredArtists = cleanQuery ? ARTISTS.filter(ar => 
    ar.name.toLowerCase().includes(cleanQuery) ||
    ar.discipline.toLowerCase().includes(cleanQuery) ||
    ar.origin.toLowerCase().includes(cleanQuery) ||
    ar.bio.toLowerCase().includes(cleanQuery)
  ) : [];

  const filteredExhibitions = cleanQuery ? EXHIBITIONS.filter(ex => 
    ex.title.toLowerCase().includes(cleanQuery) ||
    ex.subtitle.toLowerCase().includes(cleanQuery) ||
    ex.statement.toLowerCase().includes(cleanQuery)
  ) : [];

  const hasResults = filteredArtworks.length > 0 || filteredArtists.length > 0 || filteredExhibitions.length > 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search Collection and Archives"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(5, 5, 5, 0.94)',
        backdropFilter: 'blur(16px)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 'clamp(2rem, 8vh, 6rem) var(--gutter)'
      }}
    >
      <div style={{
        maxWidth: '720px',
        width: '100%',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-medium)',
        boxShadow: '0 25px 60px -15px rgba(0,0,0,0.9)',
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '80vh',
        overflow: 'hidden'
      }}>
        {/* Search Input Bar */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--border-hairline)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          backgroundColor: 'var(--bg-primary)'
        }}>
          <Search size={20} color="var(--accent-gold)" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search artworks, artists, mediums, curatorial essays..."
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.1rem',
              outline: 'none'
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            style={{
              padding: '0.4rem',
              color: 'var(--text-secondary)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Results Area */}
        <div style={{ padding: '1.5rem', overflowY: 'auto', flex: 1 }}>
          {!cleanQuery ? (
            <div>
              <span className="meta-label" style={{ display: 'block', marginBottom: '1rem' }}>
                Curatorial Quick Searches
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {["Kaelen Voss", "Monolith XII", "After The Silence", "Spatial Light", "Basalt", "Sylvie Chen", "Subterranean Crypt", "Brutalist Concrete"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    style={{
                      padding: '0.45rem 0.85rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-hairline)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : !hasResults ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <p style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.35rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                No archival records match "{query}"
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Try searching for specific mediums like "Basalt", "Titanium", or artist names like "Voss" or "Chen".
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Artworks Matches */}
              {filteredArtworks.length > 0 && (
                <div>
                  <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.75rem' }}>
                    Artworks ({filteredArtworks.length})
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {filteredArtworks.map((art) => (
                      <div
                        key={art.id}
                        onClick={() => { onClose(); onSelectArtwork(art); }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.75rem 1rem',
                          backgroundColor: 'var(--bg-primary)',
                          border: '1px solid var(--border-hairline)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <img
                            src={art.image}
                            alt=""
                            style={{ width: '42px', height: '42px', objectFit: 'cover' }}
                          />
                          <div>
                            <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                              {art.title}
                            </div>
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                              {art.artist} • {art.year} • {art.category}
                            </div>
                          </div>
                        </div>
                        <ArrowRight size={16} color="var(--text-muted)" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Artists Matches */}
              {filteredArtists.length > 0 && (
                <div>
                  <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.75rem' }}>
                    Artists ({filteredArtists.length})
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {filteredArtists.map((artist) => (
                      <div
                        key={artist.id}
                        onClick={() => { onClose(); onSelectArtist(artist.id); }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.75rem 1rem',
                          backgroundColor: 'var(--bg-primary)',
                          border: '1px solid var(--border-hairline)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div>
                          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 600 }}>
                            {artist.name}
                          </div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                            {artist.origin} • {artist.discipline}
                          </div>
                        </div>
                        <span className="btn-text-link" style={{ fontSize: '0.7rem' }}>View Monograph →</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Exhibitions Matches */}
              {filteredExhibitions.length > 0 && (
                <div>
                  <span className="meta-label" style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.75rem' }}>
                    Exhibitions ({filteredExhibitions.length})
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {filteredExhibitions.map((ex) => (
                      <div
                        key={ex.id}
                        onClick={() => { onClose(); onSelectExhibition(ex.id); }}
                        style={{
                          padding: '0.85rem 1rem',
                          backgroundColor: 'var(--bg-primary)',
                          border: '1px solid var(--border-hairline)',
                          cursor: 'pointer'
                        }}
                      >
                        <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                          {ex.title}: {ex.subtitle}
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-gold)' }}>
                          {ex.dates} • {ex.location}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div style={{
          padding: '0.75rem 1.5rem',
          borderTop: '1px solid var(--border-hairline)',
          backgroundColor: 'var(--bg-primary)',
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.675rem',
          color: 'var(--text-muted)'
        }}>
          <span>MUSEUM NOIR ARCHIVAL CATALOGUE</span>
          <span>PRESS ESC TO CLOSE</span>
        </div>
      </div>
    </div>
  );
}
