import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { services, WA_URL } from '../data';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import SEO from '../components/SEO';

export default function Services() {
  const [active, setActive] = useState(services[0].id);
  const loc = useLocation();
  useScrollRevealAll();

  useEffect(() => {
    const hash = loc.hash.replace('#', '');
    if (hash && services.find(s => s.id === hash)) {
      setActive(hash);
      setTimeout(() => document.getElementById('service-detail')?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }, [loc.hash]);

  const svc = services.find(s => s.id === active);

  return (
    <div>
      <SEO
        title="IT Services — Website, App, Digital Marketing, Training"
        description="Complete IT services in Bihar — website development from ₹3,000, mobile app development, Facebook & Google ads, IT training courses, Google Business setup and data entry BPO. Serving Samastipur, Darbhanga, Muzaffarpur."
        keywords="website development Samastipur, mobile app development Bihar, digital marketing Darbhanga, IT training Samastipur, Google Business setup Bihar, BPO data entry Bihar"
        url="/services"
      />
      <div className="page-hero">
        <div className="grid-bg" />
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,229,160,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">Our Services</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem,6vw,5.5rem)' }}>
            Everything Your<br /><span className="g">Business Needs</span>
          </h1>
          <p className="section-sub" style={{ marginTop: '1rem' }}>6 services. Every budget. One reliable team in Samastipur.</p>
        </div>
      </div>

      {/* Service Tabs */}
      <section className="section">
        <div className="container">
          {/* Tab Nav */}
          <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', marginBottom: '3rem', padding: '1rem', background: 'var(--surface)', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)' }}>
            {services.map(s => (
              <button key={s.id} onClick={() => setActive(s.id)} style={{
                background: active === s.id ? s.color : 'transparent',
                color: active === s.id ? '#060608' : 'var(--text2)',
                border: active === s.id ? 'none' : '1px solid var(--border)',
                padding: '.55rem 1.1rem', borderRadius: '100px',
                cursor: 'pointer', fontSize: '.82rem', fontWeight: 700,
                fontFamily: 'var(--fd)', transition: 'all .2s', letterSpacing: '-.01em',
              }}>
                {s.icon} {s.title}
              </button>
            ))}
          </div>

          {/* Service Detail */}
          <div id="service-detail" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'start' }} className="svc-grid">
            {/* Left */}
            <div>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem', color: svc.color }}>{svc.icon}</div>
              <div style={{ fontSize: '.72rem', fontWeight: 700, color: svc.color, letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '.75rem' }}>{svc.title}</div>
              <h2 style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1, color: 'var(--text)', marginBottom: '1rem' }}>{svc.tagline}</h2>
              <div style={{ fontSize: '.95rem', color: 'var(--text2)', lineHeight: 1.85, fontWeight: 300, marginBottom: '2rem', whiteSpace: 'pre-line' }}>{svc.full}</div>

              <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '1rem', marginBottom: '1rem', color: 'var(--text)' }}>What's Included</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.6rem', marginBottom: '2rem' }}>
                {svc.features.map(f => (
                  <div key={f} style={{ display: 'flex', gap: '.6rem', alignItems: 'flex-start' }}>
                    <span style={{ color: svc.color, fontSize: '.9rem', marginTop: '1px', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '.85rem', color: 'var(--text2)', fontWeight: 300 }}>{f}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href={`${WA_URL}?text=Hello! I am interested in ${encodeURIComponent(svc.title)}.`} target="_blank" rel="noreferrer" className="btn-primary">Get This Service →</a>
                <Link to="/contact" className="btn-secondary">Free Consultation</Link>
              </div>
            </div>

            {/* Right - Packages */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '1rem', color: 'var(--text)', marginBottom: '.5rem' }}>Pricing Packages</h3>
              {svc.packages.map((p, i) => (
                <div key={i} style={{
                  background: i === 1 ? 'rgba(0,229,160,.04)' : 'var(--surface)',
                  border: `1px solid ${i === 1 ? svc.color + '30' : 'var(--border)'}`,
                  borderRadius: 'var(--r-lg)', padding: '1.5rem',
                  position: 'relative', overflow: 'hidden',
                }}>
                  {i === 1 && <div style={{ position: 'absolute', top: '.75rem', right: '.75rem', background: svc.color, color: '#060608', fontSize: '.65rem', fontWeight: 800, padding: '.2rem .6rem', borderRadius: '100px', fontFamily: 'var(--fd)' }}>POPULAR</div>}
                  <div style={{ fontFamily: 'var(--fd)', fontWeight: 900, fontSize: '1.6rem', color: svc.color, letterSpacing: '-1px', marginBottom: '.2rem' }}>{p.price}</div>
                  <div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '.95rem', color: 'var(--text)', marginBottom: '.3rem' }}>{p.name}</div>
                  <div style={{ fontSize: '.82rem', color: 'var(--text2)', marginBottom: '1rem', fontWeight: 300 }}>{p.desc}</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
                    {p.includes.map(inc => (
                      <li key={inc} style={{ display: 'flex', gap: '.5rem', alignItems: 'flex-start' }}>
                        <span style={{ color: svc.color, fontSize: '.8rem', marginTop: '2px', flexShrink: 0 }}>◆</span>
                        <span style={{ fontSize: '.82rem', color: 'var(--text2)', fontWeight: 300 }}>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p style={{ fontSize: '.78rem', color: 'var(--text3)', textAlign: 'center', fontWeight: 300 }}>All prices negotiable for Samastipur businesses. WhatsApp us for custom quote.</p>
            </div>
          </div>
        </div>
      </section>

      {/* All services quick grid */}
      <section className="section" style={{ background: 'rgba(0,0,0,.25)', paddingTop: '0' }}>
        <div className="container">
          <h2 className="section-title fade-up" style={{ marginBottom: '2rem' }}>All Services at a Glance</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '.8rem' }}>
            {services.map(s => (
              <button key={s.id} onClick={() => { setActive(s.id); document.getElementById('service-detail')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="card fade-up" style={{ padding: '1.5rem', textAlign: 'left', background: active === s.id ? s.color + '10' : undefined, border: active === s.id ? `1px solid ${s.color}30` : undefined, cursor: 'pointer', width: '100%' }}>
                <div style={{ fontSize: '1.5rem', color: s.color, marginBottom: '.8rem' }}>{s.icon}</div>
                <div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '.9rem', color: 'var(--text)', marginBottom: '.3rem' }}>{s.title}</div>
                <div style={{ fontSize: '.78rem', color: s.color, fontWeight: 700 }}>{s.packages[0].price}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <style>{`.svc-grid{@media(max-width:768px){grid-template-columns:1fr!important;gap:3rem!important}}`}</style>
      <style>{`@media(max-width:768px){.svc-grid{grid-template-columns:1fr!important;gap:2rem!important}}`}</style>
    </div>
  );
}
