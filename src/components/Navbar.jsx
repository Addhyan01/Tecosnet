import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WA_URL } from '../data';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Career', path: '/career' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 900);
  const loc = useLocation();

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 20);
    const r = () => setMobile(window.innerWidth < 900);
    window.addEventListener('scroll', s);
    window.addEventListener('resize', r);
    return () => { window.removeEventListener('scroll', s); window.removeEventListener('resize', r); };
  }, []);

  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [loc.pathname]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: '68px', display: 'flex', alignItems: 'center',
        padding: '0 2rem', justifyContent: 'space-between',
        transition: 'all .3s',
        ...(scrolled ? {
          background: 'rgba(6,6,8,.92)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,.06)',
        } : {}),
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
          <div style={{
            width: '32px', height: '32px',
            background: 'linear-gradient(135deg, #00e5a0, #4f8ef7)',
            borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', fontWeight: 900, color: '#060608',
            fontFamily: 'var(--fd)',
          }}>T</div>
          <span style={{ fontFamily: 'var(--fd)', fontWeight: 900, fontSize: '1.25rem', letterSpacing: '-.5px', color: 'var(--text)' }}>
            tecs<span style={{ color: 'var(--green)' }}>o</span>net
          </span>
        </Link>

        {/* Desktop links */}
        {!mobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map(l => (
              <Link key={l.path} to={l.path} style={{
                textDecoration: 'none', fontSize: '.85rem', fontWeight: 500,
                color: loc.pathname === l.path ? 'var(--green)' : 'var(--text2)',
                transition: 'color .2s', letterSpacing: '.01em',
                borderBottom: loc.pathname === l.path ? '1px solid var(--green)' : '1px solid transparent',
                paddingBottom: '2px',
              }}
              onMouseEnter={e => { if (loc.pathname !== l.path) e.target.style.color = 'var(--text)'; }}
              onMouseLeave={e => { if (loc.pathname !== l.path) e.target.style.color = 'var(--text2)'; }}>
                {l.label}
              </Link>
            ))}
            <a href={WA_URL} target="_blank" rel="noreferrer" style={{
              background: 'var(--green)', color: '#060608',
              padding: '.5rem 1.2rem', borderRadius: '100px',
              textDecoration: 'none', fontSize: '.82rem', fontWeight: 700,
              fontFamily: 'var(--fd)', transition: 'all .2s', letterSpacing: '-.01em',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,229,160,.3)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
              Get Started →
            </a>
          </div>
        )}

        {/* Hamburger */}
        {mobile && (
          <button onClick={() => setOpen(!open)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px',
          }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '2px',
                background: 'var(--text)', borderRadius: '2px',
                transition: 'all .3s',
                ...(open && i === 0 ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}),
                ...(open && i === 1 ? { opacity: 0 } : {}),
                ...(open && i === 2 ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}),
              }} />
            ))}
          </button>
        )}
      </nav>

      {/* Mobile menu */}
      {mobile && open && (
        <div style={{
          position: 'fixed', top: '68px', left: 0, right: 0, bottom: 0,
          background: 'rgba(6,6,8,.98)', backdropFilter: 'blur(24px)',
          zIndex: 199, padding: '2rem', display: 'flex', flexDirection: 'column', gap: '.5rem',
          overflowY: 'auto',
        }}>
          {navLinks.map(l => (
            <Link key={l.path} to={l.path} style={{
              display: 'block', padding: '1.1rem 0',
              borderBottom: '1px solid rgba(255,255,255,.05)',
              textDecoration: 'none', fontSize: '1.2rem', fontWeight: 700,
              fontFamily: 'var(--fd)',
              color: loc.pathname === l.path ? 'var(--green)' : 'var(--text2)',
              letterSpacing: '-.3px',
            }}>
              {l.label}
            </Link>
          ))}
          <a href={WA_URL} target="_blank" rel="noreferrer" style={{
            display: 'block', marginTop: '1.5rem', background: 'var(--green)',
            color: '#060608', padding: '1rem', borderRadius: '14px',
            textDecoration: 'none', fontSize: '1rem', fontWeight: 800,
            fontFamily: 'var(--fd)', textAlign: 'center',
          }}>
            Chat on WhatsApp →
          </a>
        </div>
      )}
    </>
  );
}
