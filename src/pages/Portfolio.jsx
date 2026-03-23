import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { WA_URL } from '../data';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

const categories = ['All', 'Website', 'Mobile App', 'E-Commerce', 'Education', 'Healthcare'];

const projects = [
  { cat: 'Website', title: 'Kirana Store — Online Presence', desc: 'Complete digital transformation for a 30-year-old kirana store in Samastipur. Google Business setup, WhatsApp catalogue, and a beautiful website that shows daily offers.', stack: ['HTML', 'CSS', 'WhatsApp API', 'Google Business'], color: '#00e5a0', emoji: '🛒', result: '40+ new customers in month 1', status: 'Demo' },
  { cat: 'Education', title: 'Coaching Institute Portal', desc: 'Full web portal for a coaching institute — online admission form, fee payment via Razorpay, batch schedules, student login, and notice board.', stack: ['React', 'Node.js', 'Razorpay', 'Firebase'], color: '#4f8ef7', emoji: '🎓', result: '150+ admissions via website', status: 'Demo' },
  { cat: 'Healthcare', title: 'Clinic Appointment System', desc: 'Doctor\'s clinic website with online appointment booking, patient history form, WhatsApp confirmation, and Google Calendar sync.', stack: ['React', 'Node.js', 'Google Calendar', 'WhatsApp'], color: '#a78bfa', emoji: '🏥', result: '60% reduction in phone calls', status: 'Demo' },
  { cat: 'Website', title: 'Property Dealer Listing Site', desc: 'Real estate listing website for a Samastipur property dealer — property photos, price filters, location on Google Maps, and lead generation form.', stack: ['React', 'Google Maps', 'EmailJS'], color: '#f59e0b', emoji: '🏘️', result: '25+ leads per month', status: 'Coming Soon' },
  { cat: 'E-Commerce', title: 'Clothing Store — WooCommerce', desc: 'Full e-commerce website for a women\'s clothing shop — product catalogue with photos, size selection, WhatsApp checkout, and home delivery tracking.', stack: ['WordPress', 'WooCommerce', 'WhatsApp'], color: '#ec4899', emoji: '👗', result: '₹50,000+ online orders', status: 'Coming Soon' },
  { cat: 'Mobile App', title: 'Student Learning App', desc: 'Mobile app for a coaching institute — video lectures, PDF notes, live tests, results, and teacher-student chat. Available on Android.', stack: ['React Native', 'Firebase', 'Video API'], color: '#06b6d4', emoji: '📱', result: '200+ active students', status: 'Coming Soon' },
  { cat: 'Website', title: 'Restaurant Menu Website', desc: 'Digital menu with QR code for a local dhaba — customers scan QR code at table, view menu, and order via WhatsApp. No app needed.', stack: ['React', 'WhatsApp API', 'QR Code'], color: '#00e5a0', emoji: '🍛', result: '30% faster order processing', status: 'Demo' },
  { cat: 'Education', title: 'School Management System', desc: 'Complete school management portal — student records, attendance, fee collection, parent login, exam results, and teacher communication.', stack: ['React', 'Node.js', 'MySQL', 'Razorpay'], color: '#4f8ef7', emoji: '🏫', result: 'Used by 500+ students', status: 'Coming Soon' },
  { cat: 'Mobile App', title: 'Grocery Delivery App', desc: 'Hyperlocal grocery ordering app for a local store — browse products, add to cart, pay online, track delivery on map. Android app.', stack: ['React Native', 'Node.js', 'Google Maps', 'Razorpay'], color: '#f59e0b', emoji: '🛵', result: '100+ daily orders', status: 'Coming Soon' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [hovered, setHovered] = useState(null);
  useScrollRevealAll();

  const filtered = filter === 'All' ? projects : projects.filter(p => p.cat === filter);

  return (
    <div>
      <SEO
        title="Portfolio — Website, App & Digital Projects for Bihar Businesses"
        description="See what Tecsonet Solutions has built — e-commerce stores, coaching portals, clinic booking systems, property listings and more for businesses across Bihar. Real projects, real results."
        keywords="IT portfolio Bihar, website examples Samastipur, app development portfolio Bihar, coaching website Bihar, clinic website Bihar"
        url="/portfolio"
      />
      <div className="page-hero">
        <div className="grid-bg" />
        <div style={{ position: 'absolute', top: '10%', left: '50%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(79,142,247,.06) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">Our Work</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem,6vw,5.5rem)' }}>
            What We've<br /><span className="g">Built for Bihar</span>
          </h1>
          <p className="section-sub" style={{ marginTop: '1rem' }}>Real projects. Real results. Built for real Bihar businesses.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Filter */}
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)} style={{
                background: filter === c ? 'var(--green)' : 'var(--surface)',
                color: filter === c ? '#060608' : 'var(--text2)',
                border: filter === c ? 'none' : '1px solid var(--border)',
                padding: '.5rem 1.1rem', borderRadius: '100px',
                cursor: 'pointer', fontSize: '.82rem', fontWeight: 700,
                fontFamily: 'var(--fd)', transition: 'all .2s',
              }}>{c}</button>
            ))}
          </div>

          {/* Projects grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '1.2rem' }}>
            {filtered.map((p, i) => (
              <div key={i} className="card fade-up"
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
                style={{ overflow: 'hidden', transitionDelay: `${i * .06}s`, borderColor: hovered === i ? p.color + '35' : undefined }}>
                {/* Image area */}
                <div style={{ height: '160px', background: `linear-gradient(135deg, ${p.color}12, ${p.color}06)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', position: 'relative', borderBottom: '1px solid var(--border)' }}>
                  {p.emoji}
                  <span style={{ position: 'absolute', top: '1rem', right: '1rem', fontSize: '.68rem', fontWeight: 700, color: p.status === 'Demo' ? '#00e5a0' : 'var(--text3)', background: p.status === 'Demo' ? 'rgba(0,229,160,.1)' : 'var(--surface)', border: `1px solid ${p.status === 'Demo' ? 'rgba(0,229,160,.25)' : 'var(--border)'}`, padding: '.22rem .6rem', borderRadius: '100px', letterSpacing: '.05em' }}>
                    {p.status}
                  </span>
                </div>
                {/* Body */}
                <div style={{ padding: '1.5rem' }}>
                  <span style={{ fontSize: '.68rem', fontWeight: 700, color: p.color, letterSpacing: '.1em', textTransform: 'uppercase' }}>{p.cat}</span>
                  <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '1rem', color: 'var(--text)', margin: '.4rem 0 .6rem', letterSpacing: '-.2px' }}>{p.title}</h3>
                  <p style={{ fontSize: '.84rem', color: 'var(--text2)', lineHeight: 1.65, fontWeight: 300, marginBottom: '1rem' }}>{p.desc}</p>
                  {/* Result badge */}
                  <div style={{ background: 'rgba(0,229,160,.06)', border: '1px solid rgba(0,229,160,.15)', borderRadius: 'var(--r-sm)', padding: '.5rem .75rem', marginBottom: '1rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--green)', fontSize: '.85rem' }}>📈</span>
                    <span style={{ fontSize: '.8rem', color: 'var(--green)', fontWeight: 600 }}>{p.result}</span>
                  </div>
                  {/* Stack tags */}
                  <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
                    {p.stack.map(t => <span key={t} style={{ fontSize: '.7rem', color: 'var(--text3)', background: 'var(--surface)', border: '1px solid var(--border)', padding: '.18rem .55rem', borderRadius: '100px' }}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(0,0,0,.25)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title fade-up" style={{ textAlign: 'center' }}>Ready to Build<br /><span className="g">Your Project?</span></h2>
          <p className="section-sub fade-up" style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>Tell us what you need — we will give you a free quote within 24 hours.</p>
          <div className="fade-up" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-primary">Start Your Project →</a>
            <Link to="/contact" className="btn-secondary">Get Free Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
