import React from 'react';
import { Link } from 'react-router-dom';
import { PHONE_DISPLAY, EMAIL, ADDRESS, WA_URL } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'rgba(0,0,0,.6)', borderTop: '1px solid var(--border)', padding: '5rem 2rem 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ fontFamily: 'var(--fd)', fontWeight: 900, fontSize: '1.8rem', letterSpacing: '-1px', marginBottom: '1rem' }}>
              tecs<span style={{ color: 'var(--green)' }}>o</span>net
              <span style={{ display: 'block', fontSize: '.7rem', fontWeight: 600, color: 'var(--text3)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: '.2rem' }}>SOLUTIONS</span>
            </div>
            <p style={{ fontSize: '.85rem', color: 'var(--text3)', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.5rem', maxWidth: '240px' }}>
              Bihar's most trusted IT company — turning local businesses into digital powerhouses since 2026.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
              {[
                { icon: '📍', val: ADDRESS },
                { icon: '📞', val: PHONE_DISPLAY },
                { icon: '✉️', val: EMAIL },
              ].map(c => (
                <div key={c.val} style={{ display: 'flex', gap: '.6rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '.9rem' }}>{c.icon}</span>
                  <span style={{ fontSize: '.8rem', color: 'var(--text2)', fontWeight: 300 }}>{c.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '.7rem', fontWeight: 700, color: 'var(--text2)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
              {['Website Development','Mobile App Dev','Digital Marketing','IT Training','Google Business','Data Entry & BPO'].map(s => (
                <li key={s}><Link to="/services" style={{ color: 'var(--text3)', textDecoration: 'none', fontSize: '.85rem', fontWeight: 300, transition: 'color .2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--green)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text3)'}>{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: '.7rem', fontWeight: 700, color: 'var(--text2)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
              {[['Home','/'],['About','/about'],['Portfolio','/portfolio'],['Career','/career'],['Contact','/contact']].map(([l,p]) => (
                <li key={p}><Link to={p} style={{ color: 'var(--text3)', textDecoration: 'none', fontSize: '.85rem', fontWeight: 300, transition: 'color .2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--green)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text3)'}>{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 style={{ fontSize: '.7rem', fontWeight: 700, color: 'var(--text2)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>Start Today</h4>
            <p style={{ fontSize: '.85rem', color: 'var(--text3)', lineHeight: 1.6, fontWeight: 300, marginBottom: '1.2rem' }}>
              Ready to take your business online? Let's talk — free consultation, no commitment.
            </p>
            <a href={WA_URL} target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '.5rem',
              background: '#25D366', color: '#fff',
              padding: '.65rem 1.2rem', borderRadius: '100px',
              textDecoration: 'none', fontSize: '.82rem', fontWeight: 700,
              fontFamily: 'var(--fd)', transition: 'all .2s',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,.3)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <span style={{ fontSize: '.78rem', color: 'var(--text3)', fontWeight: 300 }}>© {year} Tecsonet Solutions. All rights reserved.</span>
          <span style={{ fontSize: '.78rem', color: 'var(--text3)', fontWeight: 300 }}>Built with ❤️ in Bihar 🇮🇳</span>
        </div>
      </div>
    </footer>
  );
}
