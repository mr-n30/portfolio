import { useInView } from '../hooks/useInView';

const SKILL_CATEGORIES = [
  {
    title: 'Web App Security',
    code: 'web.sec',
    skills: ['XSS', 'CSRF', 'IDOR', 'SSTI', 'Auth Bypass', 'SQL Injection', 'SSRF', 'XXE'],
  },
  {
    title: 'Bug Bounty',
    code: 'bounty.method',
    skills: ['Attack Surface Mapping', 'Recon Automation', 'Subdomain Enum', 'JS Analysis', 'Scope Analysis', 'Impact Chaining'],
  },
  {
    title: 'Tools & Recon',
    code: 'tools.recon',
    skills: ['Burp Suite', 'Nuclei', 'Subfinder', 'Amass', 'FFuf', 'httpx', 'Shodan', 'Waybackurls'],
  },
  {
    title: 'Development',
    code: 'dev.stack',
    skills: ['Go', 'Python', 'JavaScript', 'TypeScript', 'Bash', 'React', 'REST APIs', 'Docker'],
  },
  {
    title: 'API Security',
    code: 'api.sec',
    skills: ['GraphQL Injection', 'JWT Attacks', 'OAuth Flaws', 'Rate Limiting', 'Mass Assignment', 'Broken Object Auth'],
  },
  {
    title: 'Custom Tooling',
    code: 'tooling.custom',
    skills: ['Recon Pipelines', 'Alert Systems', 'Wordlist Gen', 'Payload Crafting', 'Auto Reporter', 'API Wrappers'],
  },
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative z-10 py-28 px-6 bg-bg-surface/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="section-divider">/* skills.matrix */</div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary tracking-tight">
            Skills
          </h2>
          <p className="text-text-muted font-mono text-sm mt-2">// technical expertise</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className={`card-hover rounded-lg border border-bg-border bg-bg-surface p-5 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-text-primary font-semibold text-sm">{cat.title}</h3>
                <span className="font-mono text-xs text-accent/60">{cat.code}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2 py-1 rounded bg-bg-elevated border border-bg-border text-text-secondary hover:border-white/20 hover:text-white/70 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
