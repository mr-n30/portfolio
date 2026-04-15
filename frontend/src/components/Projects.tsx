import { useInView } from '../hooks/useInView';
import { Github, ExternalLink, Terminal, FileText, Code2, BookOpen } from 'lucide-react';

const PROJECTS = [
  {
    icon: Terminal,
    title: 'Recon Automation Toolkit',
    description: 'A modular Go-based recon pipeline that chains subdomain enumeration, DNS resolution, HTTP probing, and screenshot capture. Designed for speed and scale across large bug bounty scopes.',
    stack: ['Go', 'Shell', 'Docker', 'Nuclei'],
    github: 'https://github.com',
    featured: true,
  },
  {
    icon: Code2,
    title: 'Custom Bug Bounty Scripts',
    description: 'A collection of Python and Bash utilities for automating common recon tasks: JS endpoint extraction, parameter discovery, WAF detection, and custom wordlist generation.',
    stack: ['Python', 'Bash', 'Regex', 'API'],
    github: 'https://github.com',
    featured: false,
  },
  {
    icon: BookOpen,
    title: 'Security Research Writeups',
    description: 'Detailed technical writeups of disclosed vulnerabilities, including reproduction steps, impact analysis, and remediation recommendations for real-world targets.',
    stack: ['Markdown', 'Burp Suite', 'CVE', 'CVSS'],
    github: 'https://github.com',
    featured: false,
  },
  {
    icon: FileText,
    title: 'BountyCTRL',
    description: 'A personal bug bounty workflow management app for tracking targets, findings, notes, and submission status. Built as a productivity layer on top of existing platforms.',
    stack: ['TypeScript', 'React', 'Supabase', 'Tailwind'],
    github: 'https://github.com',
    featured: false,
  },
];

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative z-10 py-28 px-6 bg-bg-surface/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="section-divider">/* projects.active */</div>

        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight">Projects</h2>
            <p className="text-text-muted font-mono text-sm mt-2">// selected work</p>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-muted hover:text-text-secondary transition-colors duration-200 font-mono text-xs"
          >
            <Github className="w-3.5 h-3.5" />
            All repos
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`card-hover group rounded-xl border bg-bg-surface p-6 flex flex-col gap-4 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  borderColor: project.featured ? 'rgba(var(--fg), 0.1)' : 'var(--color-bg-border)',
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: project.featured ? 'rgba(var(--fg), 0.07)' : 'rgba(var(--fg), 0.03)',
                      border: `1px solid rgba(var(--fg), ${project.featured ? '0.12' : '0.06'})`,
                    }}
                  >
                    <Icon
                      className="w-4 h-4"
                      strokeWidth={1.5}
                      style={{ color: `rgba(var(--fg), ${project.featured ? '0.6' : '0.3'})` }}
                    />
                  </div>

                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-secondary transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-secondary transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-text-primary font-semibold text-base mb-2 tracking-tight">{project.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="font-mono text-xs px-2 py-0.5 rounded bg-bg-elevated border border-bg-border text-text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
