import { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { useTheme } from '../contexts/ThemeContext';
import { Mail, Github, Send, ArrowRight } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

const SOCIAL_LINKS = [
  { icon: Mail, label: 'Email', value: 'root@hexnull.io', href: 'mailto:root@hexnull.io' },
  { icon: Github, label: 'GitHub', value: 'github.com/mr-n30', href: 'https://github.com/mr-n30' },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setCaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token) setCaptchaError(false);
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative z-10 py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="section-divider">/* contact.init */</div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className={`space-y-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <h2 className="text-3xl font-bold text-text-primary tracking-tight mb-3">Get in Touch</h2>
              <p className="text-text-secondary leading-relaxed">
                Have a target you'd like assessed? Looking for a security researcher to join your program?
                Want to collaborate on a tool? I'm open to conversations.
              </p>
            </div>

            <div className="space-y-2.5">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-bg-border bg-bg-surface hover:bg-bg-elevated group transition-all duration-200"
                    style={{ transition: 'border-color 0.2s ease, background-color 0.2s ease' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(var(--fg), 0.15)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = ''; }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(var(--fg), 0.04)', border: '1px solid rgba(var(--fg), 0.07)' }}
                    >
                      <Icon className="w-3.5 h-3.5 text-text-muted" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-text-muted font-mono mb-0.5">{link.label}</div>
                      <div className="text-sm text-text-secondary font-mono group-hover:text-text-primary transition-colors truncate">
                        {link.value}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-text-secondary group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
                  </a>
                );
              })}
            </div>

            <div
              className="rounded-xl border border-bg-border p-4"
              style={{ background: 'var(--color-terminal-bg)' }}
            >
              <div className="font-mono text-xs space-y-1.5">
                <div>
                  <span style={{ color: 'rgba(var(--fg), 0.2)' }}>$</span>{' '}
                  <span className="text-text-muted">ping</span>{' '}
                  <span className="text-text-secondary">root@hexnull.io</span>
                </div>
                <div>
                  <span style={{ color: 'rgba(var(--fg), 0.2)' }}>$</span>
                  <span className="text-text-muted"> response_time: </span>
                  <span className="text-text-secondary">{'<'} 24h</span>
                </div>
                <div>
                  <span style={{ color: 'rgba(var(--fg), 0.2)' }}>$</span>
                  <span className="text-text-muted"> preferred: </span>
                  <span className="text-text-secondary">email | github</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {sent ? (
              <div
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 rounded-xl border border-bg-border"
                style={{ background: 'rgba(var(--fg), 0.02)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'rgba(var(--fg), 0.06)', border: '1px solid rgba(var(--fg), 0.1)' }}
                >
                  <Send className="w-5 h-5 text-text-secondary" />
                </div>
                <h3 className="text-text-primary font-semibold text-lg mb-2">Message sent</h3>
                <p className="text-text-secondary text-sm font-mono">
                  I'll get back to you within 24 hours. (Note: This is a demo form, so no actual messages are sent.)
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 font-mono text-xs text-text-muted hover:text-text-secondary transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-text-muted mb-2 uppercase tracking-wider">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-bg-surface border border-bg-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted font-mono focus:outline-none transition-all duration-200"
                    style={{ caretColor: 'var(--color-text-primary)' }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(var(--fg), 0.25)'; }}
                    onBlur={(e) => { e.target.style.borderColor = ''; }}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-text-muted mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-bg-surface border border-bg-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted font-mono focus:outline-none transition-all duration-200"
                    style={{ caretColor: 'var(--color-text-primary)' }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(var(--fg), 0.25)'; }}
                    onBlur={(e) => { e.target.style.borderColor = ''; }}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-text-muted mb-2 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What's on your mind?"
                    className="w-full bg-bg-surface border border-bg-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted font-mono focus:outline-none transition-all duration-200 resize-none"
                    style={{ caretColor: 'var(--color-text-primary)' }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(var(--fg), 0.25)'; }}
                    onBlur={(e) => { e.target.style.borderColor = ''; }}
                  />
                </div>

                <div>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={handleCaptchaChange}
                    theme={isDark ? 'dark' : 'light'}
                    size="normal"
                  />
                  {captchaError && (
                    <p className="mt-2 font-mono text-xs" style={{ color: 'rgba(var(--fg), 0.4)' }}>
                      Please complete the verification above.
                    </p>
                  )}
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="w-3.5 h-3.5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
