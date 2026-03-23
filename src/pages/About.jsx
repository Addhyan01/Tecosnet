import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { WA_URL } from '../data';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

const timeline = [
  { year: '2026', title: 'Tecsonet is Born', desc: 'Founded in Samastipur with one laptop, one idea: Bihar\'s businesses deserve better digital services.' },
  { year: 'Month 1', title: 'First Client', desc: 'Built our first website for a local shop owner who had never been online. He got 40+ enquiries in month one.' },
  { year: 'Month 3', title: 'First Team Member', desc: 'Hired our first intern from a local college. Now they run client social media independently.' },
  { year: 'Month 6', title: 'Training Institute Launched', desc: 'Started IT training for local youth. First batch of 12 students, 10 got jobs within 3 months of completing the course.' },
  { year: 'Year 1', title: 'The Journey Continues', desc: 'Serving businesses across Samastipur, Darbhanga, Muzaffarpur and beyond. Growing every day.' },
];

const values = [
  { icon: '🎯', title: 'Results First', desc: 'We are not satisfied until your business sees real growth. Deliverables are just the beginning — results are the goal.' },
  { icon: '🤲', title: 'Bihar at Heart', desc: 'Every rupee you spend with us goes back into the Bihar economy. We are building Bihar, one digital business at a time.' },
  { icon: '🔍', title: 'Radical Transparency', desc: 'No hidden fees, no jargon, no excuses. You will always know exactly what we are doing and why.' },
  { icon: '📈', title: 'Long-term Partnership', desc: 'We don\'t want one-time clients. We want businesses we grow with for years. Your success is our reputation.' },
];

export default function About() {
  useScrollRevealAll();
  return (
    <div>
      <SEO
        title="About Us — Bihar Ki IT Company ki Kahani"
        description="Tecsonet Solutions ki story — Samastipur se shuru hua ek sapna jo Bihar ke har business ko digital banana chahta hai. Jaaniye humari mission, values aur journey ke baare mein."
        keywords="about Tecsonet Solutions, IT company Samastipur story, Bihar IT company founder, digital Bihar mission"
        url="/about"
      />
      <div className="page-hero">
        <div className="grid-bg" />
        <div style={{ position: 'absolute', top: '10%', left: '60%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(79,142,247,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">Our Story</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem,6vw,5.5rem)' }}>
            Born in Bihar,<br /><span className="g">Built for Bihar</span>
          </h1>
          <p className="section-sub" style={{ marginTop: '1rem', maxWidth: '560px' }}>
            We started with one laptop and one belief — that local businesses in Bihar deserve the same digital tools as companies in Mumbai or Bangalore. That belief drives everything we do.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
            <div>
              <div className="section-tag fade-up">Our Mission</div>
              <h2 className="section-title fade-up">Why We Started<br /><span className="g">Tecsonet</span></h2>
              <div className="fade-up" style={{ fontSize: '.95rem', color: 'var(--text2)', lineHeight: 1.85, fontWeight: 300 }}>
                <p style={{ marginBottom: '1.2rem' }}>
                  I grew up in Samastipur. I watched talented local businesses — family shops run for generations, passionate coaching institute teachers, dedicated doctors — struggle to reach customers because they had no online presence.
                </p>
                <p style={{ marginBottom: '1.2rem' }}>
                  Meanwhile, fancy agencies from big cities were charging ₹50,000–1,00,000 for websites that any local business could never afford. The gap was unfair and unnecessary.
                </p>
                <p style={{ marginBottom: '1.2rem' }}>
                  So I decided to fix it. Tecsonet Solutions was built to give every local business in Bihar — no matter how small — access to professional, affordable and effective digital services.
                </p>
                <p style={{ color: 'var(--green)', fontWeight: 500 }}>
                  We are not here to sell you a website. We are here to grow your business.
                </p>
              </div>
            </div>
            <div className="fade-up">
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,var(--green),var(--blue),var(--purple))' }} />
                <div style={{ fontFamily: 'var(--fd)', fontSize: '4rem', fontWeight: 900, color: 'var(--green)', lineHeight: 1, marginBottom: '.5rem' }}>₹429</div>
                <div style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '.5rem' }}>That's how we started</div>
                <p style={{ fontSize: '.85rem', color: 'var(--text2)', fontWeight: 300, lineHeight: 1.7, marginBottom: '2rem' }}>With ₹429 for a domain, a free Vercel account, one laptop, and a lot of determination — we built Tecsonet Solutions from scratch. No investors, no big budget, just skills and a mission.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  {[['0 → ∞','Clients limit'],['₹0','Outside investment'],['100%','Self-funded'],['Bihar','Our only market']].map(([n,l]) => (
                    <div key={l}>
                      <div style={{ fontFamily: 'var(--fd)', fontSize: '1.5rem', fontWeight: 900, color: 'var(--green)' }}>{n}</div>
                      <div style={{ fontSize: '.78rem', color: 'var(--text3)', fontWeight: 300 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'rgba(0,0,0,.25)' }}>
        <div className="container">
          <div className="section-tag fade-up" style={{ textAlign: 'center' }}>What We Stand For</div>
          <h2 className="section-title fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.2rem' }}>
            {values.map((v, i) => (
              <div key={i} className="card fade-up" style={{ padding: '2rem', transitionDelay: `${i * .08}s` }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>{v.icon}</span>
                <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text)', marginBottom: '.5rem' }}>{v.title}</h3>
                <p style={{ fontSize: '.87rem', color: 'var(--text2)', lineHeight: 1.7, fontWeight: 300 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-tag fade-up">Our Journey</div>
          <h2 className="section-title fade-up" style={{ marginBottom: '3.5rem' }}>How We Got Here</h2>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '100px', top: 0, bottom: 0, width: '1px', background: 'var(--border)' }} />
            {timeline.map((t, i) => (
              <div key={i} className="fade-up" style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', transitionDelay: `${i * .1}s` }}>
                <div style={{ width: '80px', flexShrink: 0, textAlign: 'right' }}>
                  <span style={{ fontSize: '.78rem', fontWeight: 700, color: 'var(--green)', fontFamily: 'var(--fd)' }}>{t.year}</span>
                </div>
                <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
                  <div style={{ position: 'absolute', left: '-8px', top: '4px', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--green)', border: '3px solid var(--bg)', zIndex: 1 }} />
                  <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '1rem', color: 'var(--text)', marginBottom: '.35rem' }}>{t.title}</h3>
                  <p style={{ fontSize: '.87rem', color: 'var(--text2)', fontWeight: 300, lineHeight: 1.7 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 2rem', background: 'linear-gradient(135deg,rgba(0,229,160,.06),rgba(79,142,247,.06))', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title fade-up" style={{ textAlign: 'center' }}>Want to Be Part<br /><span className="g">of This Story?</span></h2>
          <p className="section-sub fade-up" style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>Whether you're a business owner, a student, or someone who believes in Bihar — we'd love to work with you.</p>
          <div className="fade-up" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-primary">Start a Project →</a>
            <Link to="/career" className="btn-secondary">Join Our Team</Link>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:3rem!important}}`}</style>
    </div>
  );
}
