import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ArtworkModal from './components/ArtworkModal';
import AudioGuideBar from './components/AudioGuideBar';
import TicketBookingModal from './components/TicketBookingModal';
import SearchModal from './components/SearchModal';

import HomePage from './pages/HomePage';
import ExhibitionPage from './pages/ExhibitionPage';
import CollectionPage from './pages/CollectionPage';
import ArtistPage from './pages/ArtistPage';
import VisitPage from './pages/VisitPage';
import AboutPage from './pages/AboutPage';

import { ARTWORKS, AUDIO_GUIDE_TRACKS } from './data/museumData';
import { soundEngine } from './utils/audioSynth';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [selectedArtistId, setSelectedArtistId] = useState('kaelen-voss');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isTicketsOpen, setIsTicketsOpen] = useState(false);

  // Audio Guide & Ambient States
  const [currentAudioTrackId, setCurrentAudioTrackId] = useState('track-01');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);

  // Theme State ('dark' | 'light')
  const [theme, setTheme] = useState('dark');

  // Handle URL hash sync
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'exhibition', 'collection', 'artist', 'visit', 'about'].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    if (window.location.hash) {
      handleHashChange();
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync hash when page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Theme toggle
  const handleToggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  };

  // Audio Engine controls
  const handlePlayAudio = (trackId) => {
    setCurrentAudioTrackId(trackId);
    setIsAudioPlaying(true);
    const track = AUDIO_GUIDE_TRACKS.find(t => t.id === trackId);
    if (track) {
      soundEngine.playDrone(track.audioFrequency || 110);
      soundEngine.speakTranscript(track.transcript, () => {
        setIsAudioPlaying(false);
        soundEngine.stopDrone();
      });
    }
  };

  const handleTogglePlay = () => {
    if (isAudioPlaying) {
      setIsAudioPlaying(false);
      soundEngine.stopSpeech();
      soundEngine.stopDrone();
    } else {
      handlePlayAudio(currentAudioTrackId || 'track-01');
    }
  };

  const handleToggleAmbient = () => {
    if (isAmbientPlaying) {
      soundEngine.stopDrone();
      setIsAmbientPlaying(false);
    } else {
      soundEngine.playDrone(95);
      setIsAmbientPlaying(true);
    }
  };

  // Modal navigation (next/previous artwork)
  const handleNavigateArtwork = (delta) => {
    if (!selectedArtwork) return;
    const currentIndex = ARTWORKS.findIndex(a => a.id === selectedArtwork.id);
    const nextIndex = (currentIndex + delta + ARTWORKS.length) % ARTWORKS.length;
    setSelectedArtwork(ARTWORKS[nextIndex]);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Subtle Noise Grain Texture */}
      <div className="museum-noise-overlay" />

      {/* Primary Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenTickets={() => setIsTicketsOpen(true)}
        isAmbientPlaying={isAmbientPlaying}
        onToggleAmbient={handleToggleAmbient}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Page Routing */}
      {currentPage === 'home' && (
        <HomePage
          setCurrentPage={handlePageChange}
          onSelectArtwork={setSelectedArtwork}
          onSelectArtist={(id) => { setSelectedArtistId(id); handlePageChange('artist'); }}
          onOpenTickets={() => setIsTicketsOpen(true)}
          onPlayAudio={handlePlayAudio}
        />
      )}

      {currentPage === 'exhibition' && (
        <ExhibitionPage
          setCurrentPage={handlePageChange}
          onSelectArtwork={setSelectedArtwork}
          onSelectArtist={(id) => { setSelectedArtistId(id); handlePageChange('artist'); }}
          onPlayAudio={handlePlayAudio}
          onOpenTickets={() => setIsTicketsOpen(true)}
        />
      )}

      {currentPage === 'collection' && (
        <CollectionPage
          onSelectArtwork={setSelectedArtwork}
          onSelectArtist={(id) => { setSelectedArtistId(id); handlePageChange('artist'); }}
        />
      )}

      {currentPage === 'artist' && (
        <ArtistPage
          selectedArtistId={selectedArtistId}
          setSelectedArtistId={setSelectedArtistId}
          onSelectArtwork={setSelectedArtwork}
          onPlayAudio={handlePlayAudio}
        />
      )}

      {currentPage === 'visit' && (
        <VisitPage
          onOpenTickets={() => setIsTicketsOpen(true)}
          setCurrentPage={handlePageChange}
        />
      )}

      {currentPage === 'about' && (
        <AboutPage
          onOpenTickets={() => setIsTicketsOpen(true)}
        />
      )}

      {/* Master Footer */}
      <Footer
        setCurrentPage={handlePageChange}
        onOpenTickets={() => setIsTicketsOpen(true)}
      />

      {/* Floating Audio Guide Mini-Player */}
      {currentAudioTrackId && (
        <AudioGuideBar
          currentTrackId={currentAudioTrackId}
          isPlaying={isAudioPlaying}
          onTogglePlay={handleTogglePlay}
          onSelectTrack={handlePlayAudio}
          onClose={() => {
            setIsAudioPlaying(false);
            soundEngine.stopSpeech();
            soundEngine.stopDrone();
            setCurrentAudioTrackId(null);
          }}
        />
      )}

      {/* Artwork Inspection Modal */}
      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          onPlayAudio={handlePlayAudio}
          onSelectArtist={(id) => { setSelectedArtistId(id); handlePageChange('artist'); }}
          onNavigateArtwork={handleNavigateArtwork}
        />
      )}

      {/* Instant Search Index Modal */}
      {isSearchOpen && (
        <SearchModal
          onClose={() => setIsSearchOpen(false)}
          onSelectArtwork={setSelectedArtwork}
          onSelectArtist={(id) => { setSelectedArtistId(id); handlePageChange('artist'); }}
          onSelectExhibition={(id) => { handlePageChange('exhibition'); }}
        />
      )}

      {/* Ticket Reservation & Pass Generator Modal */}
      {isTicketsOpen && (
        <TicketBookingModal
          onClose={() => setIsTicketsOpen(false)}
        />
      )}
    </div>
  );
}
