import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-bg-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-text-muted" strokeWidth={1.5} />
          <span className="font-mono text-xs text-text-muted">
            sec<span style={{ opacity: 0.6 }}>researcher</span>
          </span>
        </div>
        <div className="font-mono text-xs text-text-muted">
          // exploit.dev — built with precision
        </div>
        <div className="font-mono text-xs text-text-muted">
          {new Date().getFullYear()} — All rights reserved
        </div>
      </div>
    </footer>
  );
}
