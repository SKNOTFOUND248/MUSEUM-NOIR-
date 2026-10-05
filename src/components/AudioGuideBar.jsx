import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, X, ChevronUp, ChevronDown, Headphones } from 'lucide-react';
import { AUDIO_GUIDE_TRACKS } from '../data/museumData';
import { soundEngine } from '../utils/audioSynth';

export default function AudioGuideBar({ 
  currentTrackId, 
  isPlaying, 
  onTogglePlay, 
  onSelectTrack,
  onClose 
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [progress, setProgress] = useState(0);

  const track = AUDIO_GUIDE_TRACKS.find(t => t.id === currentTrackId) || AUDIO_GUIDE_TRACKS[0];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 0.5;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNextTrack = () => {
    const currentIndex = AUDIO_GUIDE_TRACKS.findIndex(t => t.id === track.id);
    const nextIndex = (currentIndex + 1) % AUDIO_GUIDE_TRACKS.length;
    onSelectTrack(AUDIO_GUIDE_TRACKS[nextIndex].id);
  };

  const handlePrevTrack = () => {
    const currentIndex = AUDIO_GUIDE_TRACKS.findIndex(t => t.id === track.id);
    const prevIndex = (currentIndex - 1 + AUDIO_GUIDE_TRACKS.length) % AUDIO_GUIDE_TRACKS.length;
    onSelectTrack(AUDIO_GUIDE_TRACKS[prevIndex].id);
  };

  if (!currentTrackId) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '1.25rem',
      right: '1.25rem',
      zIndex: 850,
      maxWidth: isExpanded ? '520px' : '420px',
      width: 'calc(100vw - 2.5rem)',
      backgroundColor: 'var(--bg-surface)',
      border: '1px solid var(--border-medium)',
      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.85)',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      {/* Top Progress Line */}
      <div style={{
        width: '100%',
        height: '2px',
        backgroundColor: 'var(--border-hairline)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: `${progress}%`,
          backgroundColor: 'var(--accent-gold)',
          transition: 'width 0.5s linear'
        }} />
      </div>

      {/* Main Mini-Bar Header */}
      <div style={{
        padding: '0.85rem 1.15rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem'
      }}>
        {/* Track Info & Waveform */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          flex: 1,
          overflow: 'hidden'
        }}>
          <div style={{
            width: '34px',
            height: '34px',
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--border-hairline)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-gold)',
            flexShrink: 0
          }}>
            <Headphones size={16} />
          </div>

          <div style={{ overflow: 'hidden' }}>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {track.title}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.675rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span>{track.speaker.split(',')[0]}</span>
              <span>•</span>
              <span style={{ color: 'var(--accent-gold)' }}>{track.room}</span>
            </div>
          </div>
        </div>

        {/* Playback Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
          {isPlaying && (
            <div className="audio-waveform-bars" style={{ marginRight: '0.5rem' }}>
              <span className="audio-bar"></span>
              <span className="audio-bar"></span>
              <span className="audio-bar"></span>
              <span className="audio-bar"></span>
              <span className="audio-bar"></span>
            </div>
          )}

          <button
            onClick={handlePrevTrack}
            aria-label="Previous track"
            style={{
              padding: '0.35rem',
              color: 'var(--text-secondary)'
            }}
          >
            <SkipBack size={14} />
          </button>

          <button
            onClick={onTogglePlay}
            aria-label={isPlaying ? "Pause audio guide" : "Play audio guide"}
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: 'var(--text-primary)',
              color: 'var(--text-inverse)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} style={{ marginLeft: '2px' }} />}
          </button>

          <button
            onClick={handleNextTrack}
            aria-label="Next track"
            style={{
              padding: '0.35rem',
              color: 'var(--text-secondary)'
            }}
          >
            <SkipForward size={14} />
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="Toggle transcript"
            style={{
              padding: '0.35rem',
              color: 'var(--text-secondary)',
              marginLeft: '0.25rem'
            }}
          >
            {isExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </button>

          <button
            onClick={onClose}
            aria-label="Dismiss audio player"
            style={{
              padding: '0.35rem',
              color: 'var(--text-muted)'
            }}
          >
            <X size={15} />
          </button>
        </div>
      </div>

      {/* Expanded Transcript Drawer */}
      {isExpanded && (
        <div style={{
          padding: '1.25rem',
          backgroundColor: 'var(--bg-primary)',
          borderTop: '1px solid var(--border-hairline)',
          maxHeight: '260px',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
            <span className="meta-label" style={{ color: 'var(--accent-gold)' }}>
              Curatorial Commentary Transcript
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              Duration: {track.duration}
            </span>
          </div>

          <p style={{
            fontFamily: 'var(--font-editorial)',
            fontSize: '1.05rem',
            lineHeight: 1.55,
            color: 'var(--text-secondary)',
            marginBottom: '1rem'
          }}>
            "{track.transcript}"
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--border-hairline)',
            paddingTop: '0.75rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)'
          }}>
            <span>SPEAKER: {track.speaker}</span>
            <span>GALLERY: {track.room}</span>
          </div>
        </div>
      )}
    </div>
  );
}
