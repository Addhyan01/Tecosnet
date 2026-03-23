import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services, testimonials, stats, WA_URL } from '../data';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import SEO from '../components/SEO';

const words = ['Websites', 'Mobile Apps', 'Digital Marketing', 'IT Training', 'Online Growth'];

function MarqueeTicker() {
  const items = ['Website Development', 'Mobile Apps', 'Digital Marketing', 'IT Training', 'Google Business', 'Data Entry & BPO', 'SEO', 'E-Commerce', 'App Development', 'Social Media'];
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '.8rem 0', margin: '3rem 0 0', background: 'rgba(0,229,160,.03)' }}>
      <div style={{ display: 'flex', gap: '3rem', animation: 'marquee 20s linear infinite', width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ fontSize: '.78rem', fontWeight: 700, color: 'var(--text3)', letterSpacing: '.12em', textTransform: 'uppercase', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {item}
            <span style={{ color: 'var(--green)', fontSize: '1rem' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [wi, setWi] = useState(0);
  const [vis, setVis] = useState(true);
  useScrollRevealAll();

  useEffect(() => {
    const t = setInterval(() => {
      setVis(false);
      setTimeout(() => { setWi(i => (i + 1) % words.length); setVis(true); }, 350);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <SEO
        title="Bihar Ki Best IT Company — Website, App, Digital Marketing"
        description="Tecsonet Solutions — Samastipur, Bihar ki sabse trusted IT company. Website development from ₹3,000, mobile apps, digital marketing, IT training. Free consultation available."
        keywords="IT company Samastipur, website development Bihar, website banana Bihar, app development Samastipur, digital marketing Bihar, IT training Samastipur, Google Business Bihar"
        url="/"
      />
      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '8rem 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-15%', right: '-5%', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,229,160,.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,142,247,.05) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="grid-bg" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '800px' }}>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', background: 'rgba(0,229,160,.06)', border: '1px solid rgba(0,229,160,.2)', padding: '.4rem 1rem', borderRadius: '100px', marginBottom: '2rem', alignSelf: 'flex-start', animation: 'fadeUp .6s ease both' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: '.75rem', color: 'var(--green)', fontWeight: 700, letterSpacing: '.06em' }}>SAMASTIPUR, BIHAR — INDIA'S NEXT IT HUB</span>
            </div>

            {/* H1 */}
            <h1 style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(3.2rem,8vw,7rem)', fontWeight: 900, lineHeight: .93, letterSpacing: '-4px', marginBottom: '1.5rem', animation: 'fadeUp .7s .1s ease both' }}>
              <span style={{ display: 'block' }}>Bihar Ki</span>
              <span style={{ display: 'block' }}>Best</span>
              <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,.2)' }}>IT Company</span>
              <span style={{ display: 'block', background: 'linear-gradient(90deg,var(--green),var(--blue))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', transition: 'opacity .35s', opacity: vis ? 1 : 0 }}>{words[wi]}</span>
            </h1>

            <p style={{ fontSize: 'clamp(1rem,2vw,1.2rem)', color: 'var(--text2)', lineHeight: 1.75, fontWeight: 300, maxWidth: '560px', marginBottom: '3rem', animation: 'fadeUp .7s .2s ease both' }}>
              We transform local businesses, schools, hospitals and coaching institutes across Bihar
              into powerful digital brands. Premium quality. Bihar budgets. Real results.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem', animation: 'fadeUp .7s .3s ease both' }}>
              <Link to="/contact" className="btn-primary">Start Your Project →</Link>
              <Link to="/services" className="btn-secondary">Explore Services</Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem', paddingTop: '3rem', borderTop: '1px solid var(--border)', animation: 'fadeUp .7s .4s ease both' }} className="hero-stats">
              {stats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'var(--fd)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 900, color: 'var(--green)', letterSpacing: '-1px' }}>{s.num}</div>
                  <div style={{ fontSize: '.8rem', color: 'var(--text3)', marginTop: '.2rem', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <MarqueeTicker /> */}
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section" style={{ background: 'rgba(0,0,0,.25)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div className="section-tag fade-up">What We Do</div>
              <h2 className="section-title fade-up">Services Built<br /><span className="g">for Bihar</span></h2>
            </div>
            <Link to="/services" className="btn-secondary fade-up" style={{ alignSelf: 'flex-end' }}>View All Services →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1rem' }}>
            {services.map((s, i) => (
              <Link key={s.id} to={`/services#${s.id}`} className="card fade-up" style={{ padding: '1.8rem', textDecoration: 'none', display: 'block', transitionDelay: `${i * .06}s` }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '1rem', color: s.color }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text)', marginBottom: '.5rem', letterSpacing: '-.2px' }}>{s.title}</h3>
                <p style={{ fontSize: '.85rem', color: 'var(--text2)', lineHeight: 1.65, fontWeight: 300, marginBottom: '1rem' }}>{s.short}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '.8rem', color: s.color, fontWeight: 700, fontFamily: 'var(--fd)' }}>{s.packages[0].price}</span>
                  <span style={{ fontSize: '.78rem', color: 'var(--text3)', fontWeight: 500 }}>{s.deliveryDays}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US STRIP */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="why-grid">
            <div>
              <div className="section-tag fade-up">Why Choose Us</div>
              <h2 className="section-title fade-up">Local Heart,<br /><span className="g">Global Standards</span></h2>
              <p className="section-sub fade-up" style={{ marginBottom: '2.5rem' }}>
                We are from Samastipur. We know Bihar's businesses, Bihar's customers, and Bihar's challenges better than any outsider agency ever could. That local understanding — combined with world-class technical skills — is what makes us different.
              </p>
              {[
                { icon: '⚡', t: 'Fastest Delivery in Bihar', d: 'Most websites delivered in 3–7 days. No delays, no excuses.' },
                { icon: '💰', t: 'Prices for Local Budgets', d: 'Professional websites from ₹3,000 — quality that costs ₹30,000 in Delhi.' },
                { icon: '🤝', t: 'Lifelong Support', d: 'Call us anytime. WhatsApp us on Sunday. We are always here.' },
                { icon: '🏆', t: 'Results-Focused', d: 'We measure success by your growth — not just deliveries.' },
              ].map((r, i) => (
                <div key={i} className="fade-up" style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem', transitionDelay: `${i * .08}s` }}>
                  <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>{r.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--fd)', fontWeight: 700, fontSize: '.95rem', marginBottom: '.25rem' }}>{r.t}</div>
                    <div style={{ fontSize: '.85rem', color: 'var(--text2)', fontWeight: 300, lineHeight: 1.6 }}>{r.d}</div>
                  </div>
                </div>
              ))}
              <Link to="/about" className="btn-secondary fade-up" style={{ marginTop: '1rem' }}>Read Our Story →</Link>
            </div>
            <div className="fade-up" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,var(--green),var(--blue))' }} />
              <div style={{ fontFamily: 'var(--fd)', fontSize: '.7rem', fontWeight: 700, color: 'var(--text2)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '2rem' }}>Special Launch Offer</div>
              <div style={{ fontFamily: 'var(--fd)', fontSize: '2.5rem', fontWeight: 900, color: 'var(--green)', letterSpacing: '-2px', marginBottom: '.5rem' }}>First Website<br />FREE*</div>
              <p style={{ fontSize: '.9rem', color: 'var(--text2)', fontWeight: 300, lineHeight: 1.7, marginBottom: '1.5rem' }}>
                For the first 10 businesses in Samastipur — get your complete business website built for FREE. You only pay for domain (₹700) and hosting (₹1,200/year).
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem', marginBottom: '2rem' }}>
                {['Professional 5-page website', 'Mobile responsive design', 'WhatsApp button + Google Maps', 'Basic SEO setup', '3 months free support'].map(f => (
                  <div key={f} style={{ display: 'flex', gap: '.6rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--green)', fontSize: '.9rem' }}>✓</span>
                    <span style={{ fontSize: '.85rem', color: 'var(--text2)', fontWeight: 300 }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Claim Free Website →</a>
              <p style={{ fontSize: '.72rem', color: 'var(--text3)', textAlign: 'center', marginTop: '.75rem' }}>*Only 10 spots. First come, first served.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: 'rgba(0,0,0,.3)' }}>
        <div className="container">
          <div className="section-tag fade-up" style={{ textAlign: 'center' }}>Client Stories</div>
          <h2 className="section-title fade-up" style={{ textAlign: 'center' }}>What Our Clients Say</h2>
          <p className="section-sub fade-up" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>Real businesses, real results, real relationships from across Bihar.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} className="card fade-up" style={{ padding: '2rem', transitionDelay: `${i * .1}s` }}>
                <div style={{ fontSize: '2rem', color: t.color, marginBottom: '1rem', fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</div>
                <p style={{ fontSize: '.9rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem', fontStyle: 'italic' }}>{t.text}</p>
                <div style={{ display: 'flex', gap: '.8rem', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: t.color + '20', border: `1px solid ${t.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--fd)', fontWeight: 900, fontSize: '.9rem', color: t.color, flexShrink: 0 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--fd)', fontWeight: 700, fontSize: '.9rem' }}>{t.name}</div>
                    <div style={{ fontSize: '.78rem', color: 'var(--text3)', fontWeight: 300 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ padding: '5rem 2rem', background: 'linear-gradient(135deg, rgba(0,229,160,.08), rgba(79,142,247,.08))', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title fade-up" style={{ textAlign: 'center' }}>Ready to Go Digital?</h2>
          <p className="section-sub fade-up" style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>Join hundreds of Bihar businesses that are growing online. Free consultation — no pressure, no obligation.</p>
          <div className="fade-up" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us Now
            </a>
            <Link to="/contact" className="btn-secondary">Get Free Quote →</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          .hero-stats{grid-template-columns:repeat(2,1fr)!important}
          .why-grid{grid-template-columns:1fr!important;gap:3rem!important}
        }
        @media(max-width:480px){.hero-stats{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>
    </div>
  );
}
