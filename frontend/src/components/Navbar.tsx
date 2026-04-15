import { useState, useEffect } from 'react';
import { Shield, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-xl border-b border-bg-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <Shield
            className="w-4 h-4 text-text-muted group-hover:text-text-secondary transition-colors duration-300"
            strokeWidth={1.5}
          />
          <span className="font-mono text-sm font-medium text-text-secondary tracking-wide group-hover:text-text-primary transition-colors duration-300">
            sec<span className="text-text-muted">researcher</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-text-muted hover:text-text-primary tracking-widest uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-xs px-4 py-2 border border-bg-border text-text-muted rounded hover:border-text-muted hover:text-text-primary transition-all duration-200 tracking-wide"
          >
            Hire Me
          </a>
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg border border-bg-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-text-muted transition-all duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg border border-bg-border flex items-center justify-center text-text-muted hover:text-text-primary transition-all duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
          <button
            className="text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-bg-surface border-t border-bg-border px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
