import React, { useState, useMemo } from 'react';
import { Search, Filter, Grid, Columns, List, RotateCcw, Volume2, Eye } from 'lucide-react';
import { ARTWORKS, ARTISTS } from '../data/museumData';

export default function CollectionPage({ onSelectArtwork, onSelectArtist }) {
  const [selectedArtist, setSelectedArtist] = useState('all');
  const [selectedMedium, setSelectedMedium] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [layoutMode, setLayoutMode] = useState('editorial'); // 'editorial' | 'masonry' | 'table'

  const mediumsList = [
    'all',
    'Monolithic Sculpture',
    'Spatial Light',
    'Brutalist Cast',
    'Oxidized Pigment',
    'Kinetic Void'
  ];

  const categoriesList = [
    'all',
    'Monolithic Sculpture',
    'Spatial Light',
    'Brutalist Cast',
    'Oxidized Pigment',
    'Kinetic Void'
  ];

  const filteredArtworks = useMemo(() => {
    return ARTWORKS.filter(art => {
      if (selectedArtist !== 'all' && art.artistId !== selectedArtist) return false;
      if (selectedMedium !== 'all' && art.category !== selectedMedium) return false;
      if (selectedCategory !== 'all' && art.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const match = art.title.toLowerCase().includes(q) ||
          art.artist.toLowerCase().includes(q) ||
          art.medium.toLowerCase().includes(q) ||
          art.accessionNumber.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    });
  }, [selectedArtist, selectedMedium, selectedCategory, searchQuery]);

  const resetFilters = () => {
    setSelectedArtist('all');
    setSelectedMedium('all');
    setSelectedCategory('all');
    setSearchQuery('');
  };

  const isFiltered = selectedArtist !== 'all' || selectedMedium !== 'all' || selectedCategory !== 'all' || searchQuery !== '';

  return (
    <main style={{ minHeight: '100vh', paddingBottom: '8rem' }}>
      {/* 1. EDITORIAL HEADER & ARCHIVAL MANIFESTO */}
      <section style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-medium)',
        paddingTop: 'clamp(4rem, 8vw, 7rem)',
        paddingBottom: 'clamp(3rem, 5vw, 4.5rem)'
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
                PERMANENT INVENTORY & ARCHIVES • EST. 1984
              </span>
              <h1 className="title-monumental" style={{ color: 'var(--text-primary)' }}>
                The Collection
              </h1>
            </div>

            <div style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-hairline)',
              padding: '1.5rem',
              maxWidth: '320px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              lineHeight: 1.7
            }}>
              <div style={{ color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '0.5rem' }}>
                COLLECTION INVENTORY METRICS
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>CATALOGUED WORKS:</span>
                <span>{ARTWORKS.length} Masterworks</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>ON PUBLIC DISPLAY:</span>
                <span>100% in Zurich/Paris</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>MATCHING QUERY:</span>
                <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>{filteredArtworks.length} Works</span>
              </div>
            </div>
          </div>

          <p style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: 'clamp(1.35rem, 2.4vw, 1.85rem)',
            lineHeight: 1.45,
            color: 'var(--text-secondary)',
            maxWidth: '920px'
          }}>
            The permanent collection of Museum Noir gathers works that interrogate materiality, post-industrial mass, tectonic gravity, and optical void. Every accession represents a definitive intervention in the history of spatial art.
          </p>
        </div>
      </section>

      {/* 2. FILTER & CURATORIAL CONTROLS BAR */}
      <section style={{
        position: 'sticky',
        top: '65px',
        zIndex: 800,
        backgroundColor: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-medium)',
        padding: '1rem var(--gutter)',
        backdropFilter: 'blur(12px)'
      }}>
        <div style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Filter Dropdowns */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {/* Search Input */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 0.85rem',
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-hairline)',
              minWidth: '220px'
            }}>
              <Search size={14} color="var(--text-muted)" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search collection..."
                style={{
                  border: 'none',
                  background: 'none',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  outline: 'none',
                  width: '100%'
                }}
              />
            </div>

            {/* Artist Filter */}
            <select
              value={selectedArtist}
              onChange={(e) => setSelectedArtist(e.target.value)}
              style={{
                padding: '0.45rem 0.85rem',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-hairline)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem'
              }}
            >
              <option value="all">All Artists ({ARTISTS.length})</option>
              {ARTISTS.map(a => (
                <option key={a.id} value={a.id}>{a.name}</option>
              ))}
            </select>

            {/* Medium / Category Filter */}
            <select
              value={selectedMedium}
              onChange={(e) => setSelectedMedium(e.target.value)}
              style={{
                padding: '0.45rem 0.85rem',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-hairline)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem'
              }}
            >
              <option value="all">All Mediums & Categories</option>
              {categoriesList.filter(c => c !== 'all').map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            {isFiltered && (
              <button
                onClick={resetFilters}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.725rem',
                  color: 'var(--accent-gold)',
                  padding: '0.45rem 0.75rem',
                  border: '1px solid var(--accent-gold-muted)'
                }}
              >
                <RotateCcw size={12} /> Reset
              </button>
            )}
          </div>

          {/* Layout Switchers */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <span className="meta-label" style={{ marginRight: '0.5rem', display: 'none', sm: 'inline' }}>LAYOUT:</span>
            <button
              onClick={() => setLayoutMode('editorial')}
              aria-label="Editorial Asymmetric Grid"
              style={{
                padding: '0.45rem 0.65rem',
                backgroundColor: layoutMode === 'editorial' ? 'var(--bg-primary)' : 'transparent',
                border: layoutMode === 'editorial' ? '1px solid var(--border-strong)' : '1px solid var(--border-hairline)',
                color: layoutMode === 'editorial' ? 'var(--accent-gold)' : 'var(--text-muted)'
              }}
            >
              <Grid size={15} />
            </button>
            <button
              onClick={() => setLayoutMode('masonry')}
              aria-label="Masonry 3-column view"
              style={{
                padding: '0.45rem 0.65rem',
                backgroundColor: layoutMode === 'masonry' ? 'var(--bg-primary)' : 'transparent',
                border: layoutMode === 'masonry' ? '1px solid var(--border-strong)' : '1px solid var(--border-hairline)',
                color: layoutMode === 'masonry' ? 'var(--accent-gold)' : 'var(--text-muted)'
              }}
            >
              <Columns size={15} />
            </button>
            <button
              onClick={() => setLayoutMode('table')}
              aria-label="Archival Registry Table"
              style={{
                padding: '0.45rem 0.65rem',
                backgroundColor: layoutMode === 'table' ? 'var(--bg-primary)' : 'transparent',
                border: layoutMode === 'table' ? '1px solid var(--border-strong)' : '1px solid var(--border-hairline)',
                color: layoutMode === 'table' ? 'var(--accent-gold)' : 'var(--text-muted)'
              }}
            >
              <List size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. ARTWORKS DISPLAY */}
      <section style={{ paddingTop: '3.5rem' }}>
        <div className="museum-container">
          {filteredArtworks.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '6rem 2rem',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-hairline)'
            }}>
              <h2 style={{ fontFamily: 'var(--font-editorial)', fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                No artworks match the current curatorial filter.
              </h2>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                Try clearing active filters to browse the complete permanent collection.
              </p>
              <button onClick={resetFilters} className="btn-noir">
                Reset All Filters
              </button>
            </div>
          ) : layoutMode === 'editorial' ? (
            /* Layout A: Curatorial Asymmetric Mosaic */
            <div className="grid-asymmetric-mosaic">
              {filteredArtworks.map((art, idx) => {
                const isLarge = idx % 5 === 0;
                const isMedium = idx % 5 === 1 || idx % 5 === 2;
                const colClass = isLarge ? 'mosaic-col-8' : isMedium ? 'mosaic-col-4' : 'mosaic-col-6';
                const height = isLarge ? '520px' : isMedium ? '380px' : '440px';

                return (
                  <div
                    key={art.id}
                    className={`${colClass} artwork-frame`}
                    onClick={() => onSelectArtwork(art)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="artwork-image-wrapper" style={{ height }}>
                      <img
                        src={art.image}
                        alt={art.title}
                        className="artwork-img"
                      />
                    </div>
                    <div className="museum-plaque">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <div className="plaque-title">{art.title}</div>
                        <span className="meta-label" style={{ color: 'var(--accent-gold)' }}>{art.accessionNumber}</span>
                      </div>
                      <div className="plaque-artist">{art.artist} ({art.year})</div>
                      <div className="plaque-meta">{art.medium}</div>
                      <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        <span>{art.location}</span>
                        <span className="btn-text-link" style={{ fontSize: '0.675rem' }}>Inspect Work →</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : layoutMode === 'masonry' ? (
            /* Layout B: 3-Column Standard Gallery */
            <div className="grid-gallery-3">
              {filteredArtworks.map((art) => (
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
                    <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="meta-label">{art.category}</span>
                      <span className="btn-text-link" style={{ fontSize: '0.675rem' }}>Inspect →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Layout C: Archival Registry Table */
            <div style={{
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-medium)',
              overflowX: 'auto'
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.775rem',
                textAlign: 'left'
              }}>
                <thead>
                  <tr style={{
                    borderBottom: '1px solid var(--border-medium)',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-muted)'
                  }}>
                    <th style={{ padding: '1rem 1.25rem' }}>ACCESSION</th>
                    <th style={{ padding: '1rem 1.25rem' }}>WORK TITLE</th>
                    <th style={{ padding: '1rem 1.25rem' }}>ARTIST</th>
                    <th style={{ padding: '1rem 1.25rem' }}>YEAR</th>
                    <th style={{ padding: '1rem 1.25rem' }}>MEDIUM</th>
                    <th style={{ padding: '1rem 1.25rem' }}>GALLERY LOCATION</th>
                    <th style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredArtworks.map((art) => (
                    <tr
                      key={art.id}
                      onClick={() => onSelectArtwork(art)}
                      style={{
                        borderBottom: '1px solid var(--border-hairline)',
                        cursor: 'pointer',
                        transition: 'background-color 0.15s ease'
                      }}
                      className="table-row-hover"
                    >
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--accent-gold)' }}>{art.accessionNumber}</td>
                      <td style={{ padding: '1rem 1.25rem', fontFamily: 'var(--font-editorial)', fontSize: '1.05rem', color: 'var(--text-primary)' }}>{art.title}</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-primary)', fontWeight: 600 }}>{art.artist}</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>{art.year}</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-secondary)' }}>{art.medium}</td>
                      <td style={{ padding: '1rem 1.25rem', color: 'var(--text-muted)' }}>{art.location}</td>
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                        <span className="btn-text-link" style={{ fontSize: '0.7rem' }}>Inspect →</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .table-row-hover:hover {
          background-color: var(--bg-primary) !important;
        }
      `}</style>
    </main>
  );
}
