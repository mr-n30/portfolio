import { ArrowRight, Mail, Github } from 'lucide-react';
import Terminal from './Terminal';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 45% at 50% 35%, var(--radial-glow) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-9">
            <div
              className="opacity-0 animate-fade-up"
              style={{ animationFillMode: 'forwards' }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-7"
                style={{ borderColor: 'rgba(var(--fg), 0.1)', background: 'rgba(var(--fg), 0.03)' }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'rgba(var(--fg), 0.5)', boxShadow: '0 0 6px rgba(var(--fg), 0.3)' }}
                />
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'rgba(var(--fg), 0.4)' }}>
                  Available for work
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight">
                Your{' '}
                <span className="glow-text">Name</span>
              </h1>
            </div>

            <div
              className="opacity-0 animate-fade-up delay-200"
              style={{ animationFillMode: 'forwards' }}
            >
              <p className="font-mono text-sm tracking-wide" style={{ color: 'rgba(var(--fg), 0.3)' }}>
                Cybersecurity Researcher
                <span className="mx-2.5" style={{ color: 'rgba(var(--fg), 0.15)' }}>·</span>
                Bug Bounty Hunter
                <span className="mx-2.5" style={{ color: 'rgba(var(--fg), 0.15)' }}>·</span>
                Developer
              </p>
            </div>

            <div
              className="opacity-0 animate-fade-up delay-300"
              style={{ animationFillMode: 'forwards' }}
            >
              <p className="text-text-secondary leading-relaxed text-base max-w-md">
                Top 500 on Bugcrowd. I identify, exploit, and report real-world
                vulnerabilities. I also build tools to automate recon and security
                workflows.
              </p>
            </div>

            <div
              className="flex flex-wrap gap-3 opacity-0 animate-fade-up delay-400"
              style={{ animationFillMode: 'forwards' }}
            >
              <a href="#projects" className="btn-primary flex items-center gap-2">
                View Work
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href="#contact" className="btn-secondary flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                Contact Me
              </a>
            </div>

            <div
              className="flex items-center gap-6 opacity-0 animate-fade-up delay-500"
              style={{ animationFillMode: 'forwards' }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-muted hover:text-text-secondary transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono text-xs">github.com/yourname</span>
              </a>
              <div className="w-px h-3.5 bg-bg-border" />
              <div className="font-mono text-xs text-text-muted">
                <span className="text-text-secondary">500+</span> bugs filed
              </div>
            </div>
          </div>

          <div
            className="opacity-0 animate-fade-up delay-600 lg:flex lg:justify-end"
            style={{ animationFillMode: 'forwards' }}
          >
            <Terminal />
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <span className="font-mono text-xs text-text-muted tracking-widest uppercase">scroll</span>
          <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, var(--color-text-muted), transparent)' }} />
        </div>
      </div>
    </section>
  );
}
