import { useInView } from '../hooks/useInView';
import { Trophy, Shield, Target, Zap } from 'lucide-react';

const ACHIEVEMENTS = [
  { icon: Trophy, value: 'Top 500', label: 'Bugcrowd Ranking', sub: 'Global researcher leaderboard' },
  { icon: Target, value: '50+', label: 'Valid Vulnerabilities', sub: 'Across real-world targets' },
  { icon: Shield, value: 'High', label: 'Impact Findings', sub: 'Critical & high severity bugs' },
  { icon: Zap, value: '2+ yrs', label: 'Bug Bounty', sub: 'Active recon & exploitation' },
];

export default function Achievements() {
  const { ref, inView } = useInView();

  return (
    <section
      id="achievements"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative z-10 py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="section-divider">/* achievements.log */</div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary tracking-tight">Achievements</h2>
          <p className="text-text-muted font-mono text-sm mt-2">// track record</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`card-hover rounded-xl border border-bg-border bg-bg-surface p-6 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: 'rgba(var(--fg), 0.04)', border: '1px solid rgba(var(--fg), 0.07)' }}
                >
                  <Icon className="w-4 h-4 text-text-muted" strokeWidth={1.5} />
                </div>
                <div className="text-2xl font-bold text-text-primary font-mono mb-1.5 tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-medium text-text-secondary mb-1">{item.label}</div>
                <div className="text-xs text-text-muted font-mono">{item.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
