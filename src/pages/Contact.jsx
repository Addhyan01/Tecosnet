import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { PHONE_DISPLAY, EMAIL, ADDRESS, WA_URL } from '../data';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

// EmailJS config
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const faqs = [
  { q: 'Kitne din mein website ban jaayegi?', a: 'Most basic websites (3–5 pages) are delivered in 3–5 days. Business websites with more pages take 7–10 days. E-commerce and custom projects take 2–4 weeks. We always give you a clear timeline before starting.' },
  { q: 'Payment kab karna hoga?', a: 'We work on a simple 50-50 model. 50% payment when we start the project, and 50% when the website is delivered and you are 100% satisfied. No upfront payment for first-time clients in Samastipur.' },
  { q: 'Kya domain aur hosting bhi aap handle karte ho?', a: 'Yes! We can handle domain registration, hosting setup and everything end-to-end. You just need to make the payment. Or if you prefer, we guide you to buy it yourself and we set it up for free.' },
  { q: 'Kya website mobile pe bhi acha dikhega?', a: 'Absolutely. Every website we build is mobile-first. We test on Android phones, iPhones, tablets and laptops before delivery. 70%+ of your customers will visit on mobile — we make sure it works perfectly.' },
  { q: 'Website banana ke baad kya support milega?', a: 'All packages include at least 3 months of free support. If something breaks, we fix it. If you need small updates, we do them. After 3 months, we offer affordable annual maintenance contracts.' },
  { q: 'Kya aap Samastipur se bahar ke clients ke saath bhi kaam karte ho?', a: 'Yes! We work with clients across Bihar and all over India. Our team is based in Samastipur but we work remotely with businesses in Patna, Darbhanga, Muzaffarpur, Delhi, Mumbai and beyond. Everything is handled online.' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', city: '', service: '', budget: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  useScrollRevealAll();

  // Load EmailJS script
  useEffect(() => {
    if (window.emailjs) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => window.emailjs.init(EMAILJS_PUBLIC_KEY);
    document.head.appendChild(script);
  }, []);

  const inp = { width: '100%', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '.85rem 1rem', color: 'var(--text)', fontFamily: 'var(--fb)', fontSize: '.9rem', outline: 'none', transition: 'border-color .2s', fontWeight: 300 };

  const submit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: form.name,
        phone: form.phone,
        city: form.city || 'Not specified',
        service: form.service || 'Not specified',
        budget: form.budget || 'Not specified',
        message: form.message || '—',
        time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      });
      setLoading(false);
      setSent(true);
    } catch (err) {
      setLoading(false);
      setError('Something went wrong. Please try WhatsApp instead.');
    }
  };

  return (
    <div>
      <SEO
        title="Contact Us — Free IT Consultation Samastipur Bihar"
        description="Contact Tecsonet Solutions for free IT consultation. Website development, app development, digital marketing in Bihar. WhatsApp: +91 82713 38020. Located in Samastipur, Bihar."
        keywords="contact IT company Bihar, website development consultation Samastipur, free IT consultation Bihar, Tecsonet Solutions contact, WhatsApp IT company Bihar"
        url="/contact"
      />
      <div className="page-hero">
        <div className="grid-bg" />
        <div style={{ position: 'absolute', top: '5%', right: '10%', width: '550px', height: '550px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,229,160,.07) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag">Contact Us</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem,6vw,5.5rem)' }}>
            Let's Build<br /><span className="g">Something Together</span>
          </h1>
          <p className="section-sub" style={{ marginTop: '1rem' }}>Free consultation. No pressure. Reply within hours.</p>
        </div>
      </div>

      {/* Main contact */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '5rem', alignItems: 'start' }} className="contact-grid">
            {/* Left */}
            <div>
              <div className="section-tag fade-up">Get in Touch</div>
              <h2 style={{ fontFamily: 'var(--fd)', fontWeight: 900, fontSize: '2rem', letterSpacing: '-1px', marginBottom: '2rem', color: 'var(--text)' }} className="fade-up">We're Always<br />Available</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2.5rem' }} className="fade-up">
                {[
                  { icon: '📍', t: 'Office', v: ADDRESS },
                  { icon: '📞', t: 'Call / WhatsApp', v: PHONE_DISPLAY },
                  { icon: '✉️', t: 'Email', v: EMAIL },
                  { icon: '🕐', t: 'Working Hours', v: 'Mon–Sat, 9:00 AM – 7:00 PM' },
                  { icon: '⚡', t: 'WhatsApp Response', v: 'Usually within 1–2 hours' },
                ].map(c => (
                  <div key={c.t} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', flexShrink: 0, background: 'rgba(0,229,160,.06)', border: '1px solid rgba(0,229,160,.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>{c.icon}</div>
                    <div>
                      <div style={{ fontSize: '.72rem', color: 'var(--text3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.2rem' }}>{c.t}</div>
                      <div style={{ fontSize: '.9rem', color: 'var(--text)', fontWeight: 400 }}>{c.v}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a href={`${WA_URL}?text=Hello Tecsonet Solutions! I want to discuss a project.`} target="_blank" rel="noreferrer" className="fade-up" style={{
                display: 'flex', alignItems: 'center', gap: '.75rem',
                background: '#25D366', color: '#fff', padding: '1rem 1.5rem', borderRadius: '14px',
                textDecoration: 'none', fontWeight: 700, fontSize: '.95rem', fontFamily: 'var(--fd)',
                transition: 'all .2s',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,.3)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp Now
              </a>
            </div>

            {/* Right form */}
            <div className="fade-up" style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,var(--green),var(--blue),var(--purple))' }} />
              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🚀</div>
                  <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 900, fontSize: '1.6rem', color: 'var(--green)', letterSpacing: '-1px', marginBottom: '.5rem' }}>Enquiry Sent!</h3>
                  <p style={{ color: 'var(--text2)', fontWeight: 300, fontSize: '.9rem', lineHeight: 1.7 }}>Your enquiry has been sent to our email. We will contact you within 2 hours. Thank you! 🙏</p>
                  <button onClick={() => setSent(false)} className="btn-secondary" style={{ marginTop: '1.5rem' }}>Send Another Message</button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: 'var(--fd)', fontWeight: 900, fontSize: '1.4rem', color: 'var(--text)', letterSpacing: '-0.5px', marginBottom: '.5rem' }}>Get a Free Quote</h3>
                  <p style={{ fontSize: '.85rem', color: 'var(--text2)', fontWeight: 300, marginBottom: '1.8rem' }}>Fill this form and we'll send you a custom quote via WhatsApp within 2 hours.</p>
                  <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two">
                      <div>
                        <label style={{ display: 'block', fontSize: '.7rem', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.4rem' }}>Name *</label>
                        <input required value={form.name} onChange={e => setForm({...form,name:e.target.value})} placeholder="Aapka naam" style={inp} onFocus={e=>e.target.style.borderColor='rgba(0,229,160,.4)'} onBlur={e=>e.target.style.borderColor='var(--border)'} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '.7rem', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.4rem' }}>Phone *</label>
                        <input required value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} placeholder="+91 XXXXX XXXXX" style={inp} onFocus={e=>e.target.style.borderColor='rgba(0,229,160,.4)'} onBlur={e=>e.target.style.borderColor='var(--border)'} />
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-two">
                      <div>
                        <label style={{ display: 'block', fontSize: '.7rem', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.4rem' }}>City</label>
                        <input value={form.city} onChange={e => setForm({...form,city:e.target.value})} placeholder="Samastipur..." style={inp} onFocus={e=>e.target.style.borderColor='rgba(0,229,160,.4)'} onBlur={e=>e.target.style.borderColor='var(--border)'} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '.7rem', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.4rem' }}>Service Needed</label>
                        <select value={form.service} onChange={e => setForm({...form,service:e.target.value})} style={{ ...inp, color: form.service ? 'var(--text)' : 'var(--text3)' }}>
                          <option value="">Select service</option>
                          <option>Website Development</option>
                          <option>Mobile App Development</option>
                          <option>Digital Marketing</option>
                          <option>IT Training</option>
                          <option>Google Business Setup</option>
                          <option>Data Entry / BPO</option>
                          <option>Custom Project</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '.7rem', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.4rem' }}>Budget Range</label>
                      <select value={form.budget} onChange={e => setForm({...form,budget:e.target.value})} style={{ ...inp, color: form.budget ? 'var(--text)' : 'var(--text3)' }}>
                        <option value="">Select budget</option>
                        <option>Under ₹5,000</option>
                        <option>₹5,000 – ₹15,000</option>
                        <option>₹15,000 – ₹50,000</option>
                        <option>₹50,000 – ₹1,00,000</option>
                        <option>Above ₹1,00,000</option>
                        <option>Not sure — need advice</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '.7rem', fontWeight: 700, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '.4rem' }}>Tell Us More</label>
                      <textarea value={form.message} onChange={e => setForm({...form,message:e.target.value})} placeholder="Describe your project or requirement. The more detail you give, the better quote we can give you..." rows={4} style={{ ...inp, resize: 'vertical', minHeight: '100px' }} onFocus={e=>e.target.style.borderColor='rgba(0,229,160,.4)'} onBlur={e=>e.target.style.borderColor='var(--border)'} />
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary" style={{ justifyContent: 'center', opacity: loading ? .7 : 1 }}>
                      {loading ? 'Sending...' : 'Send Enquiry →'}
                    </button>
                    {error && (
                      <div style={{ background: 'rgba(226,75,74,.1)', border: '1px solid rgba(226,75,74,.3)', borderRadius: 'var(--r-sm)', padding: '.75rem 1rem', fontSize: '.85rem', color: '#f09595', textAlign: 'center' }}>
                        ⚠️ {error}
                        <a href={WA_URL} target="_blank" rel="noreferrer" style={{ color: '#25D366', marginLeft: '.5rem', fontWeight: 600 }}>Try WhatsApp instead →</a>
                      </div>
                    )}
                    <p style={{ fontSize: '.72rem', color: 'var(--text3)', textAlign: 'center', fontWeight: 300 }}>Free consultation • No hidden charges • Reply within 2 hours</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'rgba(0,0,0,.25)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-tag fade-up" style={{ textAlign: 'center' }}>FAQ</div>
          <h2 className="section-title fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>Common Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
            {faqs.map((f, i) => (
              <div key={i} className="card fade-up" style={{ transitionDelay: `${i * .06}s`, overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                  width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                  padding: '1.3rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem',
                  textAlign: 'left',
                }}>
                  <span style={{ fontFamily: 'var(--fd)', fontWeight: 700, fontSize: '.95rem', color: 'var(--text)' }}>{f.q}</span>
                  <span style={{ color: 'var(--green)', fontSize: '1.1rem', flexShrink: 0, transition: 'transform .2s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 1.5rem 1.3rem', fontSize: '.88rem', color: 'var(--text2)', fontWeight: 300, lineHeight: 1.75, borderTop: '1px solid var(--border)' }}>
                    <div style={{ paddingTop: '1rem' }}>{f.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          .contact-grid{grid-template-columns:1fr!important;gap:3rem!important}
          .form-two{grid-template-columns:1fr!important}
        }
      `}</style>
    </div>
  );
}
