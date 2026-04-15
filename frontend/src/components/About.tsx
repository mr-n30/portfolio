import { useInView } from '../hooks/useInView';
import { CheckCircle } from 'lucide-react';

const STATUS_ITEMS = [
  { label: 'Recon', detail: 'subdomain enum, passive intel, attack surface mapping' },
  { label: 'Exploitation', detail: 'XSS, IDOR, SSRF, auth bypass, SSTI, CSRF' },
  { label: 'Reporting', detail: 'CVSS scoring, PoC writeups, impact analysis' },
  { label: 'Tooling', detail: 'custom automation, Go/Python scripts, API wrappers' },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative z-10 py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="section-divider">/* about.researcher */</div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div
            className={`space-y-6 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl font-bold text-text-primary tracking-tight">About</h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I'm a security researcher focused on offensive techniques and
                real-world vulnerability discovery. My work spans web application
                security, API attack surfaces, and custom tooling built to scale
                reconnaissance workflows.
              </p>
              <p>
                With an offensive security mindset, I approach targets the way
                attackers do — methodically mapping attack surfaces, chaining low
                severity findings into critical impact bugs, and documenting every
                step with precision.
              </p>
              <p>
                Outside of bug bounty, I build developer tools, automation scripts,
                and lightweight security utilities. I care about code quality as much
                as I care about finding the next high-severity vulnerability.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {['Offensive Security', 'Bug Bounty', 'Tool Builder', 'Open Source'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded border border-bg-border text-text-muted bg-bg-surface hover:text-text-secondary transition-all duration-200"
                  style={{ transition: 'border-color 0.2s ease, color 0.2s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(var(--fg), 0.2)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = ''; }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div
              className="rounded-xl border overflow-hidden"
              style={{ background: 'var(--color-terminal-bg)', borderColor: 'var(--color-terminal-border)' }}
            >
              <div
                className="flex items-center gap-2 px-4 py-3 border-b"
                style={{ background: 'var(--color-terminal-header)', borderColor: 'var(--color-terminal-border)' }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(var(--fg), 0.2)' }} />
                <span className="font-mono text-xs" style={{ color: 'rgba(var(--fg), 0.25)' }}>skill_matrix.sh</span>
              </div>

              <div className="p-5 space-y-4 font-mono text-sm">
                {STATUS_ITEMS.map((item, i) => (
                  <div key={item.label} className="flex items-start gap-3" style={{ transitionDelay: `${i * 100 + 400}ms` }}>
                    <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                      <CheckCircle
                        className="w-3.5 h-3.5 flex-shrink-0"
                        strokeWidth={1.5}
                        style={{ color: 'rgba(var(--fg), 0.3)' }}
                      />
                      <span className="text-xs" style={{ color: 'rgba(var(--fg), 0.3)' }}>[ OK ]</span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold" style={{ color: 'rgba(var(--fg), 0.7)' }}>{item.label}</span>
                      <p className="text-xs mt-0.5 leading-relaxed" style={{ color: 'rgba(var(--fg), 0.25)' }}>{item.detail}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-3 border-t" style={{ borderColor: 'var(--color-terminal-border)' }}>
                  <span className="text-xs" style={{ color: 'rgba(var(--fg), 0.2)' }}>root@exploit.dev:~$ </span>
                  <span className="terminal-cursor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
