import React, { useState, useEffect } from 'react';
import { X, Check, Calendar, Clock, User, QrCode, Shield, Download, Printer } from 'lucide-react';
import { TICKETS_DATA, MUSEUM_INFO } from '../data/museumData';

export default function TicketBookingModal({ onClose }) {
  const [selectedTier, setSelectedTier] = useState(TICKETS_DATA[0].id);
  const [quantity, setQuantity] = useState(2);
  const [selectedDate, setSelectedDate] = useState('2026-10-24');
  const [selectedTime, setSelectedTime] = useState('14:30');
  const [visitorName, setVisitorName] = useState('A. Moreau');
  const [visitorEmail, setVisitorEmail] = useState('a.moreau@arch-atelier.ch');
  const [isCompleted, setIsCompleted] = useState(false);
  const [passNumber, setPassNumber] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const activeTier = TICKETS_DATA.find(t => t.id === selectedTier) || TICKETS_DATA[0];
  const totalPrice = activeTier.price * quantity;

  const timeSlots = [
    "10:30 (Morning Zenith)",
    "12:00 (Solar Solstice Peak)",
    "14:30 (Curatorial Walk)",
    "16:30 (Afternoon Shadows)",
    "18:30 (Twilight Atmosphere)",
    "20:00 (Nocturne Soundscape)"
  ];

  const handleCompleteBooking = (e) => {
    e.preventDefault();
    const randomCode = 'MN-' + Math.floor(100000 + Math.random() * 900000);
    setPassNumber(randomCode);
    setIsCompleted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Reserve Museum Noir Passes"
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto'
      }}
    >
      <div style={{
        maxWidth: '840px',
        width: '100%',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-medium)',
        boxShadow: '0 25px 60px -15px rgba(0,0,0,0.9)',
        position: 'relative',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem 2rem',
          borderBottom: '1px solid var(--border-hairline)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'var(--bg-primary)'
        }}>
          <div>
            <span className="meta-label" style={{ color: 'var(--accent-gold)' }}>
              MUSEUM NOIR • ADMISSION & VERNISSAGE PASSES
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              marginTop: '0.2rem'
            }}>
              Pass Reservation
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close ticket booking modal"
            style={{
              padding: '0.5rem',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-hairline)'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Area */}
        <div style={{ padding: '2rem', overflowY: 'auto', flex: 1 }}>
          {!isCompleted ? (
            <form onSubmit={handleCompleteBooking}>
              {/* Step 1: Select Tier */}
              <div style={{ marginBottom: '2rem' }}>
                <span className="meta-label" style={{ display: 'block', marginBottom: '1rem' }}>
                  01. Select Admission Category
                </span>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1rem'
                }}>
                  {TICKETS_DATA.map((tier) => {
                    const isSelected = selectedTier === tier.id;
                    return (
                      <div
                        key={tier.id}
                        onClick={() => setSelectedTier(tier.id)}
                        style={{
                          padding: '1.25rem',
                          backgroundColor: isSelected ? 'var(--bg-subtle)' : 'var(--bg-primary)',
                          border: isSelected ? '1px solid var(--accent-gold)' : '1px solid var(--border-hairline)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          position: 'relative'
                        }}
                      >
                        {tier.isPopular && (
                          <span style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '12px',
                            backgroundColor: 'var(--accent-gold)',
                            color: '#070707',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.625rem',
                            fontWeight: 700,
                            padding: '0.15rem 0.5rem',
                            textTransform: 'uppercase'
                          }}>
                            Recommended
                          </span>
                        )}
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'baseline',
                          marginBottom: '0.5rem'
                        }}>
                          <div style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '0.9rem',
                            fontWeight: 700
                          }}>
                            {tier.name}
                          </div>
                          <div style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            color: 'var(--accent-gold)'
                          }}>
                            €{tier.price}
                          </div>
                        </div>
                        <p style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.45,
                          marginBottom: '0.75rem'
                        }}>
                          {tier.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Date & Time & Guests */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
              }}>
                <div>
                  <label className="meta-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    02. Date of Entry
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    min="2026-10-15"
                    max="2027-04-30"
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-medium)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem'
                    }}
                  />
                </div>

                <div>
                  <label className="meta-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    03. Time Slot / Atmosphere
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-medium)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem'
                    }}
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="meta-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    04. Number of Passes
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      style={{
                        padding: '0.75rem 1.25rem',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-medium)',
                        color: 'var(--text-primary)'
                      }}
                    >-</button>
                    <div style={{
                      flex: 1,
                      textAlign: 'center',
                      padding: '0.75rem',
                      backgroundColor: 'var(--bg-primary)',
                      borderTop: '1px solid var(--border-medium)',
                      borderBottom: '1px solid var(--border-medium)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem'
                    }}>
                      {quantity} {quantity === 1 ? 'Pass' : 'Passes'}
                    </div>
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.min(10, quantity + 1))}
                      style={{
                        padding: '0.75rem 1.25rem',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-medium)',
                        color: 'var(--text-primary)'
                      }}
                    >+</button>
                  </div>
                </div>
              </div>

              {/* Step 3: Visitor Details & Summary */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2rem'
              }}>
                <div>
                  <label className="meta-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Primary Passholder Name
                  </label>
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-medium)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8125rem'
                    }}
                  />
                </div>

                <div>
                  <label className="meta-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Dispatch Email
                  </label>
                  <input
                    type="email"
                    value={visitorEmail}
                    onChange={(e) => setVisitorEmail(e.target.value)}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-medium)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8125rem'
                    }}
                  />
                </div>
              </div>

              {/* Order Calculation & Confirmation Button */}
              <div style={{
                borderTop: '1px solid var(--border-hairline)',
                paddingTop: '1.5rem',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1.5rem'
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    TOTAL ADMISSION DUE (INCL. TAX & ARCHIVAL LEVY)
                  </div>
                  <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '2rem', color: 'var(--accent-gold)' }}>
                    €{totalPrice}.00 EUR
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-noir"
                  style={{ padding: '1rem 2.5rem', fontSize: '0.85rem' }}
                >
                  Generate Official Pass →
                </button>
              </div>
            </form>
          ) : (
            /* Digital Museum Pass View */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: '100%',
                maxWidth: '560px',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--accent-gold)',
                padding: '2.5rem',
                position: 'relative',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.9)'
              }}>
                {/* Museum Top Crest */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: '1.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase'
                    }}>
                      MUSEUM NOIR
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.675rem',
                      color: 'var(--text-muted)'
                    }}>
                      OFFICIAL DIGITAL ADMISSION DOCUMENT
                    </div>
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--accent-gold)',
                    fontWeight: 700
                  }}>
                    {passNumber}
                  </div>
                </div>

                {/* Pass Details Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1.25rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  marginBottom: '1.75rem'
                }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block' }}>PASSHOLDER:</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{visitorName}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block' }}>TIER:</span>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>{activeTier.name}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block' }}>DATE:</span>
                    <span style={{ color: 'var(--text-primary)' }}>{selectedDate}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block' }}>TIME / ATMOSPHERE:</span>
                    <span style={{ color: 'var(--text-primary)' }}>{selectedTime}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block' }}>PASS COUNT:</span>
                    <span style={{ color: 'var(--text-primary)' }}>{quantity} Adults</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block' }}>LOCATION:</span>
                    <span style={{ color: 'var(--text-primary)' }}>440 Quai Noir</span>
                  </div>
                </div>

                {/* Architectural QR Code & Access Badge */}
                <div style={{
                  borderTop: '1px dashed var(--border-medium)',
                  paddingTop: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: 'var(--text-primary)'
                    }}>
                      Valid for all 6 Gallery Halls
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.675rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.2rem'
                    }}>
                      Includes Crypt & North Atrium Access
                    </div>
                  </div>

                  {/* Stylized Dark QR Matrix */}
                  <div style={{
                    padding: '0.5rem',
                    backgroundColor: '#f5f4f0',
                    color: '#070707',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <QrCode size={48} />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <button
                  onClick={handlePrint}
                  className="btn-noir"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Printer size={16} /> Print / Save Pass
                </button>
                <button
                  onClick={onClose}
                  className="btn-outline"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
