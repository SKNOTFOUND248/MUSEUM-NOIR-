import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Volume2, Share2, Check, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { ARTWORKS } from '../data/museumData';

export default function ArtworkModal({ 
  artwork, 
  onClose, 
  onPlayAudio, 
  onSelectArtist,
  onNavigateArtwork
}) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isCopied, setIsCopied] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryText, setInquiryText] = useState('');
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNavigateArtwork) onNavigateArtwork(1);
      if (e.key === 'ArrowLeft' && onNavigateArtwork) onNavigateArtwork(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNavigateArtwork]);

  if (!artwork) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const handleZoom = (delta) => {
    setZoomLevel(prev => Math.min(Math.max(1, prev + delta), 2.5));
  };

  const handleSendInquiry = (e) => {
    e.preventDefault();
    setInquirySent(true);
    setTimeout(() => {
      setShowInquiryForm(false);
      setInquirySent(false);
      setInquiryText('');
    }, 2800);
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-label={artwork.title}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(5, 5, 5, 0.95)',
        backdropFilter: 'blur(16px)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {/* Top Header Controls */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.25rem var(--gutter)',
        borderBottom: '1px solid var(--border-hairline)',
        backgroundColor: 'var(--bg-primary)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span className="meta-label">
            MUSEUM NOIR ARCHIVAL INSPECTION
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--accent-gold)'
          }}>
            ACCESSION: {artwork.accessionNumber}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {onNavigateArtwork && (
            <div style={{ display: 'flex', gap: '0.5rem', marginRight: '0.5rem' }}>
              <button
                onClick={() => onNavigateArtwork(-1)}
                aria-label="Previous artwork"
                style={{
                  padding: '0.4rem 0.6rem',
                  border: '1px solid var(--border-hairline)',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-secondary)'
                }}
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={() => onNavigateArtwork(1)}
                aria-label="Next artwork"
                style={{
                  padding: '0.4rem 0.6rem',
                  border: '1px solid var(--border-hairline)',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-secondary)'
                }}
              >
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          <button
            onClick={handleShare}
            aria-label="Share artwork link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.45rem 0.75rem',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-hairline)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)'
            }}
          >
            {isCopied ? <Check size={14} color="#4ade80" /> : <Share2 size={14} />}
            <span>{isCopied ? "Link Copied" : "Cite Work"}</span>
          </button>

          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-hairline)',
              color: 'var(--text-primary)'
            }}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Content Area: Split View (Image Inspector + Curatorial Details) */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr',
        overflowY: 'auto'
      }} className="artwork-modal-grid">
        {/* Left / Center: High-Res Artwork Visualizer */}
        <div style={{
          backgroundColor: '#050505',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '2rem',
          minHeight: '420px',
          overflow: 'hidden'
        }}>
          {/* Zoom & Inspection Controls */}
          <div style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: '1.5rem',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(14, 14, 14, 0.85)',
            backdropFilter: 'blur(8px)',
            padding: '0.4rem 0.6rem',
            border: '1px solid var(--border-hairline)'
          }}>
            <button 
              onClick={() => handleZoom(0.3)} 
              aria-label="Zoom in"
              style={{ color: 'var(--text-secondary)', padding: '0.25rem' }}
            >
              <ZoomIn size={16} />
            </button>
            <button 
              onClick={() => handleZoom(-0.3)} 
              aria-label="Zoom out"
              style={{ color: 'var(--text-secondary)', padding: '0.25rem' }}
            >
              <ZoomOut size={16} />
            </button>
            <button 
              onClick={() => setZoomLevel(1)} 
              aria-label="Reset zoom"
              style={{ color: 'var(--text-secondary)', padding: '0.25rem' }}
            >
              <RotateCcw size={16} />
            </button>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginLeft: '0.35rem' }}>
              {Math.round(zoomLevel * 100)}%
            </span>
          </div>

          <div style={{
            maxWidth: '90%',
            maxHeight: '75vh',
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: `scale(${zoomLevel})`,
            cursor: zoomLevel > 1 ? 'grab' : 'default'
          }}>
            <img
              src={artwork.image}
              alt={artwork.title}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                boxShadow: '0 25px 60px -15px rgba(0,0,0,0.9)',
                border: '1px solid rgba(255,255,255,0.06)'
              }}
            />
          </div>
        </div>

        {/* Right: Curatorial & Archival Dossier */}
        <div style={{
          backgroundColor: 'var(--bg-surface)',
          borderLeft: '1px solid var(--border-hairline)',
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          overflowY: 'auto'
        }}>
          <div style={{ maxWidth: '640px' }}>
            {/* Category & Gallery Location */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <span className="meta-label" style={{ color: 'var(--accent-gold)' }}>
                {artwork.category} • {artwork.era}
              </span>
              <span className="meta-label">
                {artwork.location}
              </span>
            </div>

            {/* Title & Artist */}
            <h1 style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              marginBottom: '0.5rem',
              color: 'var(--text-primary)'
            }}>
              {artwork.title}
            </h1>

            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <button
                onClick={() => {
                  onClose();
                  if (onSelectArtist) onSelectArtist(artwork.artistId);
                }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: 'var(--accent-gold)',
                  borderBottom: '1px solid var(--accent-gold-muted)',
                  paddingBottom: '0.1rem'
                }}
              >
                {artwork.artist}
              </button>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                ({artwork.year})
              </span>
            </div>

            {/* Audio Guide Quick Trigger */}
            {artwork.audioTrackId && (
              <button
                onClick={() => onPlayAudio(artwork.audioTrackId)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--accent-gold-muted)',
                  marginBottom: '2rem',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-gold-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-gold)'
                  }}>
                    <Volume2 size={16} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8125rem', fontWeight: 600 }}>
                      Listen to Curatorial Commentary
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      Narrated commentary & spatial acoustic resonance
                    </div>
                  </div>
                </div>
                <span className="btn-text-link" style={{ fontSize: '0.7rem' }}>Play Track →</span>
              </button>
            )}

            {/* Technical Metadata Table */}
            <div style={{
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--border-hairline)',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <span className="meta-label" style={{ display: 'block', marginBottom: '1rem' }}>
                Technical & Material Ledger
              </span>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: '0.75rem 1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.775rem'
              }}>
                <span style={{ color: 'var(--text-muted)' }}>MEDIUM:</span>
                <span style={{ color: 'var(--text-primary)' }}>{artwork.medium}</span>

                <span style={{ color: 'var(--text-muted)' }}>DIMENSIONS:</span>
                <span style={{ color: 'var(--text-primary)' }}>{artwork.dimensions}</span>

                <span style={{ color: 'var(--text-muted)' }}>ACCESSION:</span>
                <span style={{ color: 'var(--accent-gold)' }}>{artwork.accessionNumber}</span>

                <span style={{ color: 'var(--text-muted)' }}>GALLERY:</span>
                <span style={{ color: 'var(--text-primary)' }}>{artwork.location}</span>
              </div>
            </div>

            {/* Curatorial Essay / Notes */}
            <div style={{ marginBottom: '2rem' }}>
              <span className="meta-label" style={{ display: 'block', marginBottom: '0.75rem' }}>
                Curatorial Analysis
              </span>
              <p style={{
                fontFamily: 'var(--font-editorial)',
                fontSize: '1.15rem',
                lineHeight: 1.6,
                color: 'var(--text-secondary)'
              }}>
                {artwork.curatorialNotes}
              </p>
            </div>

            {/* Provenance */}
            <div style={{
              borderTop: '1px solid var(--border-hairline)',
              paddingTop: '1.5rem',
              marginBottom: '2.5rem'
            }}>
              <span className="meta-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                Provenance & Acquisition
              </span>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.775rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {artwork.provenance}
              </p>
            </div>

            {/* Inquire / Loan / Academic Research Form */}
            <div style={{
              borderTop: '1px solid var(--border-hairline)',
              paddingTop: '1.5rem'
            }}>
              {!showInquiryForm ? (
                <button
                  onClick={() => setShowInquiryForm(true)}
                  className="btn-outline"
                  style={{ width: '100%', fontSize: '0.75rem' }}
                >
                  <BookOpen size={14} />
                  Request Curatorial Dossier / Loan Research
                </button>
              ) : (
                <form onSubmit={handleSendInquiry} style={{
                  backgroundColor: 'var(--bg-primary)',
                  padding: '1.25rem',
                  border: '1px solid var(--border-medium)'
                }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    Institutional & Research Inquiry
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Direct inquiry to Dr. Elena Vane (Senior Curator of Spatial Practices) for research, publication rights, or exhibition loans.
                  </p>
                  
                  {inquirySent ? (
                    <div style={{
                      padding: '0.75rem',
                      backgroundColor: 'var(--accent-gold-muted)',
                      color: 'var(--accent-gold)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <Check size={16} /> Inquiry logged in Curatorial Archive (Ref #INQ-8821).
                    </div>
                  ) : (
                    <>
                      <textarea
                        rows={3}
                        value={inquiryText}
                        onChange={(e) => setInquiryText(e.target.value)}
                        placeholder="State academic institution, publication purpose, or curatorial loan context..."
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          backgroundColor: 'var(--bg-surface)',
                          border: '1px solid var(--border-hairline)',
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.8125rem',
                          marginBottom: '0.75rem',
                          resize: 'vertical'
                        }}
                      />
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button type="submit" className="btn-noir" style={{ flex: 1, padding: '0.65rem' }}>
                          Transmit Inquiry
                        </button>
                        <button 
                          type="button" 
                          onClick={() => setShowInquiryForm(false)} 
                          className="btn-outline" 
                          style={{ padding: '0.65rem 1rem' }}
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .artwork-modal-grid {
            grid-template-columns: 1.25fr 0.75fr !important;
          }
        }
      `}</style>
    </div>
  );
}
