import { useInView } from '../hooks/useInView';
import { Calendar } from 'lucide-react';

const EXPERIENCE = [
  {
    role: 'Freelance Security Researcher',
    org: 'Bug Bounty Programs',
    period: '2022 — Present',
    type: 'Bug Bounty',
    description: 'Active researcher across Bugcrowd and HackerOne. Identified and responsibly disclosed vulnerabilities in web applications, APIs, and mobile backends for global companies. Top 500 ranking on Bugcrowd.',
    highlights: ['Web App Security', 'API Security', 'Recon Automation', 'Vulnerability Disclosure'],
  },
  {
    role: 'Independent Developer',
    org: 'Self-Employed',
    period: '2021 — Present',
    type: 'Development',
    description: 'Building tools that solve real problems: recon automation, security utilities, and productivity apps. Focus on backend Go services, TypeScript frontends, and developer-friendly APIs.',
    highlights: ['Go', 'TypeScript', 'React', 'Open Source'],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative z-10 py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="section-divider">/* experience.history */</div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary tracking-tight">Experience</h2>
          <p className="text-text-muted font-mono text-sm mt-2">// work history</p>
        </div>

        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(var(--fg), 0.1), rgba(var(--fg), 0.03), transparent)' }}
          />

          <div className="space-y-8 pl-8">
            {EXPERIENCE.map((exp, i) => (
              <div
                key={exp.role}
                className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div
                  className="absolute -left-8 top-[22px] w-1.5 h-1.5 rounded-full"
                  style={{ transform: 'translateX(-2px)', background: 'rgba(var(--fg), 0.25)', boxShadow: '0 0 8px rgba(var(--fg), 0.1)' }}
                />

                <div className="card-hover rounded-xl border border-bg-border bg-bg-surface p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-text-primary font-semibold text-base tracking-tight">{exp.role}</h3>
                      <p className="font-mono text-sm mt-0.5 text-text-muted">{exp.org}</p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span
                        className="font-mono text-xs px-2.5 py-1 rounded text-text-muted"
                        style={{ border: '1px solid rgba(var(--fg), 0.1)', background: 'rgba(var(--fg), 0.04)' }}
                      >
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-text-muted font-mono text-xs">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span key={h} className="font-mono text-xs px-2 py-0.5 rounded bg-bg-elevated border border-bg-border text-text-muted">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
