// Web Audio API ambient resonant sound engine for Museum Noir
class MuseumSoundEngine {
  constructor() {
    this.ctx = null;
    this.droneGain = null;
    this.filter = null;
    this.isPlaying = false;
    this.currentTrackId = null;
    this.oscillators = [];
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playDrone(baseFreq = 110) {
    try {
      this.init();
      if (!this.ctx) return;
      this.stopDrone();

      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 3);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);
      filter.Q.setValueAtTime(4, this.ctx.currentTime);

      // Create fundamental + harmonic overtone oscillators for organic warmth
      const freqs = [baseFreq * 0.5, baseFreq, baseFreq * 1.5, baseFreq * 2];
      const types = ['sine', 'sine', 'triangle', 'sine'];

      this.oscillators = freqs.map((f, i) => {
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        osc.type = types[i] || 'sine';
        osc.frequency.setValueAtTime(f + (Math.random() * 0.4 - 0.2), this.ctx.currentTime);
        
        // Gentle LFO for subtle breathing movement
        const lfo = this.ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.1 + i * 0.05, this.ctx.currentTime);
        const lfoGain = this.ctx.createGain();
        lfoGain.gain.setValueAtTime(2.0, this.ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.25 / (i + 1), this.ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(filter);
        osc.start();
        return { osc, lfo };
      });

      filter.connect(masterGain);
      masterGain.connect(this.ctx.destination);

      this.droneGain = masterGain;
      this.filter = filter;
      this.isPlaying = true;
    } catch (e) {
      console.warn("Audio synthesis note:", e);
    }
  }

  stopDrone() {
    if (this.droneGain && this.ctx) {
      try {
        this.droneGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
        setTimeout(() => {
          this.oscillators.forEach(({ osc, lfo }) => {
            try {
              osc.stop();
              lfo.stop();
            } catch (_) {}
          });
          this.oscillators = [];
          this.isPlaying = false;
        }, 1300);
      } catch (_) {
        this.isPlaying = false;
      }
    } else {
      this.isPlaying = false;
    }
  }

  speakTranscript(text, onEnd) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.88; // deliberate, calm museum pacing
      utterance.pitch = 0.95; // deep, warm voice
      
      const voices = window.speechSynthesis.getVoices();
      // Try to find a refined natural voice
      const preferredVoice = voices.find(v => 
        (v.name.includes('Natural') || v.name.includes('Serena') || v.name.includes('Daniel') || v.name.includes('Oliver') || v.name.includes('Google UK English') || v.lang.startsWith('en'))
      );
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onend = () => {
        if (onEnd) onEnd();
      };
      utterance.onerror = () => {
        if (onEnd) onEnd();
      };

      window.speechSynthesis.speak(utterance);
    }
  }

  stopSpeech() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }
}

export const soundEngine = new MuseumSoundEngine();
