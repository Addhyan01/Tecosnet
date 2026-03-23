import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { jobs, WA_URL, PHONE_DISPLAY } from '../data';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_CAREER_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const perks = [
  { icon: '🚀', title: 'Real Work from Day 1', desc: 'No tea-fetching internships. You work on real client projects from your first week.' },
  { icon: '📚', title: 'Learn Continuously', desc: 'Free access to all IT courses, tools and resources. We invest in your growth.' },
  { icon: '💸', title: 'Performance Bonuses', desc: 'Bring a client, earn commission. Do great work, get rewarded. Simple.' },
  { icon: '🏡', title: 'Flexible Work', desc: 'Some roles allow remote work. We care about output, not office hours.' },
  { icon: '🤝', title: 'Mentorship', desc: 'Direct access to the founder. Learn entrepreneurship, tech and business together.' },
  { icon: '📄', title: 'Certificate & LOR', desc: 'All interns receive industry certificates and LinkedIn-ready letters of recommendation.' },
];

function ApplyForm({ job, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', experience: '', why: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (window.emailjs) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => window.emailjs.init(EMAILJS_PUBLIC_KEY);
    document.head.appendChild(script);
  }, []);

  const submit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        position: job.title,
        applicant_name: form.name,
        applicant_phone: form.phone,
        applicant_email: form.email || 'Not provided',
        applicant_city: form.city || 'Not specified',
        experience: form.experience || 'Not specified',
        why: form.why,
        time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      });
      setLoading(false);
      setSent(true);
    } catch (err) {
      setLoading(false);
      setError('Something went wrong. Please try WhatsApp instead.');
    }
  };

  const inp = {
    width: '100%', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)',
    borderRadius: 'var(--r-md)', padding: '.8rem 1rem', color: 'var(--text)',
    fontFamily: 'var(--fb)', fontSize: '.9rem', outline: 'none', transition: 'border-color .2s', fontWeight: 300,
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', background: 'rgba(0,0,0,.85)', backdropFilter: 'blur(10px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div style={{ background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: 'var(--r-xl)', padding: '2.5rem', width: '100%', maxWidth: '580px', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: 'none', border: 'none', color: 'var(--text2)', cursor: 'pointer', fontSize: '1.2rem' }}>✕</button>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
            <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 900, fontSize: '1.4rem', color: 'var(--green)', marginBottom: '.5rem' }}>Application Sent!</h3>
            <p style={{ color: 'var(--text2)', fontWeight: 300, fontSize: '.9rem', lineHeight: 1.6 }}>Your application has been emailed to us. We will review it and reach out within 48 hours. Good luck! 🤞</p>
            <button onClick={onClose} className="btn-secondary" style={{ marginTop: '1.5rem' }}>Close</button>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '.7rem', fontWeight: 700, color: job.color, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.4rem' }}>Applying For</div>
              <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 900, fontSize: '1.3rem', color: 'var(--text)', letterSpacing: '-.3px' }}>{job.title}</h3>
              <span style={{ fontSize: '.78rem', color: 'var(--text2)', background: 'var(--surface)', border: '1px solid var(--border)', padding: '.2rem .6rem', borderRadius: '100px' }}>{job.type}</span>
            </div>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '.72rem', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.4rem' }}>Full Name *</label>
                  <input required value={form.name} onChange={e => setForm({...form,name:e.target.value})} placeholder="Your name" style={inp} onFocus={e=>e.target.style.borderColor='rgba(0,229,160,.4)'} onBlur={e=>e.target.style.borderColor='var(--border)'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '.72rem', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.4rem' }}>Phone *</label>
                  <input required value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} placeholder="+91 XXXXX XXXXX" style={inp} onFocus={e=>e.target.style.borderColor='rgba(0,229,160,.4)'} onBlur={e=>e.target.style.borderColor='var(--border)'} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '.72rem', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.4rem' }}>Email</label>
                  <input value={form.email} onChange={e => setForm({...form,email:e.target.value})} placeholder="your@email.com" style={inp} onFocus={e=>e.target.style.borderColor='rgba(0,229,160,.4)'} onBlur={e=>e.target.style.borderColor='var(--border)'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '.72rem', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.4rem' }}>City</label>
                  <input value={form.city} onChange={e => setForm({...form,city:e.target.value})} placeholder="Samastipur, Darbhanga..." style={inp} onFocus={e=>e.target.style.borderColor='rgba(0,229,160,.4)'} onBlur={e=>e.target.style.borderColor='var(--border)'} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '.72rem', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.4rem' }}>Relevant Experience</label>
                <input value={form.experience} onChange={e => setForm({...form,experience:e.target.value})} placeholder="e.g. 1 year React developer, or fresher" style={inp} onFocus={e=>e.target.style.borderColor='rgba(0,229,160,.4)'} onBlur={e=>e.target.style.borderColor='var(--border)'} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '.72rem', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.4rem' }}>Why do you want to join Tecsonet? *</label>
                <textarea required value={form.why} onChange={e => setForm({...form,why:e.target.value})} placeholder="Tell us in 2-3 sentences why you want this role and what you will bring to the team..." rows={3} style={{ ...inp, resize: 'vertical', minHeight: '80px' }} onFocus={e=>e.target.style.borderColor='rgba(0,229,160,.4)'} onBlur={e=>e.target.style.borderColor='var(--border)'} />
              </div>
              <button type="submit" disabled={loading} className="btn-primary" style={{ justifyContent: 'center', marginTop: '.5rem', opacity: loading ? .7 : 1 }}>
                {loading ? 'Sending Application...' : 'Submit Application →'}
              </button>
              {error && (
                <div style={{ background: 'rgba(226,75,74,.1)', border: '1px solid rgba(226,75,74,.3)', borderRadius: 'var(--r-sm)', padding: '.75rem 1rem', fontSize: '.85rem', color: '#f09595', textAlign: 'center' }}>
                  ⚠️ {error}
                  <a href={WA_URL} target="_blank" rel="noreferrer" style={{ color: '#25D366', marginLeft: '.5rem', fontWeight: 600 }}>Try WhatsApp →</a>
                </div>
              )}
              <p style={{ fontSize: '.72rem', color: 'var(--text3)', textAlign: 'center', fontWeight: 300 }}>We review all applications within 48 hours.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function Career() {
  const [selected, setSelected] = useState(null);
  const [applying, setApplying] = useState(null);
  useScrollRevealAll();

  return (
    <div>
      <SEO
        title="Career — Jobs at Tecsonet Solutions Samastipur Bihar"
        description="Join Tecsonet Solutions — Bihar's fastest growing IT company. Open positions: Frontend Developer, Digital Marketing Executive, Business Development, IT Trainer and Internships in Samastipur."
        keywords="IT jobs Samastipur, web developer jobs Bihar, digital marketing jobs Samastipur, IT company jobs Bihar, fresher jobs Samastipur, internship Bihar IT"
        url="/career"
      />
      <div className="page-hero">
        <div className="grid-bg" />
        <div style={{ position: 'absolute', top: '15%', right: '5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(167,139,250,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">Join the Team</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem,6vw,5.5rem)' }}>
            Build Bihar's<br /><span className="g">Digital Future</span>
          </h1>
          <p className="section-sub" style={{ marginTop: '1rem', maxWidth: '540px' }}>
            We are a small but mighty team on a mission to digitize Bihar's economy — one business at a time. Come build something meaningful with us.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            {[['5', 'Open Positions'], ['Bihar', 'Based'], ['Growth', 'Culture']].map(([n, l]) => (
              <div key={l} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '.6rem 1.2rem' }}>
                <span style={{ fontFamily: 'var(--fd)', fontWeight: 900, color: 'var(--green)', fontSize: '1.1rem' }}>{n} </span>
                <span style={{ fontSize: '.82rem', color: 'var(--text2)' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Perks */}
      <section className="section">
        <div className="container">
          <div className="section-tag fade-up" style={{ textAlign: 'center' }}>Why Join Us</div>
          <h2 className="section-title fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>Life at <span className="g">Tecsonet</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.2rem' }}>
            {perks.map((p, i) => (
              <div key={i} className="card fade-up" style={{ padding: '1.8rem', transitionDelay: `${i * .07}s` }}>
                <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '.8rem' }}>{p.icon}</span>
                <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '.95rem', color: 'var(--text)', marginBottom: '.4rem' }}>{p.title}</h3>
                <p style={{ fontSize: '.85rem', color: 'var(--text2)', fontWeight: 300, lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section" style={{ background: 'rgba(0,0,0,.25)' }}>
        <div className="container">
          <div className="section-tag fade-up">Open Positions</div>
          <h2 className="section-title fade-up" style={{ marginBottom: '3rem' }}>We Are Hiring</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {jobs.map((job, i) => (
              <div key={job.id} className="fade-up" style={{ transitionDelay: `${i * .08}s` }}>
                {/* Job header */}
                <div className="card" style={{ padding: '1.8rem', cursor: 'pointer', borderColor: selected === job.id ? job.color + '30' : undefined, background: selected === job.id ? job.color + '06' : undefined }}
                  onClick={() => setSelected(selected === job.id ? null : job.id)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: job.color + '15', border: `1px solid ${job.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--fd)', fontWeight: 900, fontSize: '1rem', color: job.color, flexShrink: 0 }}>
                        {job.title[0]}
                      </div>
                      <div>
                        <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '1.05rem', color: 'var(--text)', marginBottom: '.3rem', letterSpacing: '-.2px' }}>{job.title}</h3>
                        <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
                          {[job.type, job.location, job.experience].map(tag => (
                            <span key={tag} style={{ fontSize: '.72rem', color: 'var(--text2)', background: 'var(--surface)', border: '1px solid var(--border)', padding: '.18rem .55rem', borderRadius: '100px', fontWeight: 500 }}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '.9rem', color: job.color }}>{job.salary}</span>
                      <span style={{ color: 'var(--text3)', transition: 'transform .2s', transform: selected === job.id ? 'rotate(180deg)' : 'none', fontSize: '1.1rem' }}>▾</span>
                    </div>
                  </div>
                </div>

                {/* Expanded detail */}
                {selected === job.id && (
                  <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderTop: 'none', borderRadius: '0 0 var(--r-lg) var(--r-lg)', padding: '2rem' }}>
                    <p style={{ fontSize: '.9rem', color: 'var(--text2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2rem' }}>{job.desc}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '2rem', marginBottom: '2rem' }}>
                      <div>
                        <h4 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '.85rem', color: 'var(--text)', marginBottom: '.8rem', textTransform: 'uppercase', letterSpacing: '.08em' }}>Responsibilities</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                          {job.responsibilities.map(r => <li key={r} style={{ display: 'flex', gap: '.5rem', fontSize: '.85rem', color: 'var(--text2)', fontWeight: 300 }}><span style={{ color: job.color, flexShrink: 0, marginTop: '1px' }}>→</span>{r}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '.85rem', color: 'var(--text)', marginBottom: '.8rem', textTransform: 'uppercase', letterSpacing: '.08em' }}>Requirements</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                          {job.requirements.map(r => <li key={r} style={{ display: 'flex', gap: '.5rem', fontSize: '.85rem', color: 'var(--text2)', fontWeight: 300 }}><span style={{ color: 'var(--green)', flexShrink: 0, marginTop: '1px' }}>✓</span>{r}</li>)}
                        </ul>
                        {job.niceToHave.length > 0 && (
                          <>
                            <h4 style={{ fontFamily: 'var(--fd)', fontWeight: 800, fontSize: '.85rem', color: 'var(--text)', margin: '1.2rem 0 .8rem', textTransform: 'uppercase', letterSpacing: '.08em' }}>Nice to Have</h4>
                            <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
                              {job.niceToHave.map(n => <span key={n} style={{ fontSize: '.75rem', color: 'var(--text2)', background: 'rgba(255,255,255,.04)', border: '1px solid var(--border)', padding: '.2rem .6rem', borderRadius: '100px' }}>{n}</span>)}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <button className="btn-primary" onClick={() => setApplying(job)}>Apply for This Role →</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open application */}
      <section style={{ padding: '5rem 2rem', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💌</div>
          <h2 className="section-title fade-up" style={{ textAlign: 'center' }}>Don't See Your Role?</h2>
          <p className="section-sub fade-up" style={{ textAlign: 'center', margin: '0 auto 2rem' }}>We are always looking for talented, passionate people who believe in Bihar's potential. Send us your CV and tell us how you can help.</p>
          <a href={`${WA_URL}?text=Hi! I want to work with Tecsonet Solutions. Here is my background: `} target="_blank" rel="noreferrer" className="btn-primary fade-up">Send Open Application →</a>
        </div>
      </section>

      {applying && <ApplyForm job={applying} onClose={() => setApplying(null)} />}
    </div>
  );
}
