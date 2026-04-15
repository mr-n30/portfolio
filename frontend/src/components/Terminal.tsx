import { useTypingEffect } from '../hooks/useTypingEffect';

export default function Terminal() {
  const { completedLines, currentTyping, isDone } = useTypingEffect(800);

  return (
    <div
      className="w-full max-w-md rounded-xl overflow-hidden border animate-glow-pulse"
      style={{ background: 'var(--color-terminal-bg)', borderColor: 'var(--color-terminal-border)' }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ background: 'var(--color-terminal-header)', borderColor: 'var(--color-terminal-border)' }}
      >
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(var(--fg), 0.1)' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(var(--fg), 0.1)' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(var(--fg), 0.1)' }} />
        <span className="ml-2 font-mono text-xs" style={{ color: 'rgba(var(--fg), 0.2)' }}>
          ~/portfolio — zsh
        </span>
      </div>

      <div className="p-5 font-mono text-sm space-y-1 min-h-[180px]">
        <div className="text-xs mb-3.5">
          <span style={{ color: 'rgba(var(--fg), 0.5)' }}>root@exploit.dev</span>
          <span style={{ color: 'rgba(var(--fg), 0.2)' }}>:~$ ./init-profile.sh</span>
        </div>

        {completedLines.map((line, i) => (
          <div key={i} className="text-xs leading-relaxed" style={{ color: 'rgba(var(--fg), 0.5)' }}>
            {line}
          </div>
        ))}

        {!isDone && (
          <div className="text-xs leading-relaxed flex items-center" style={{ color: 'rgba(var(--fg), 0.5)' }}>
            {currentTyping}
            <span className="terminal-cursor ml-0.5" />
          </div>
        )}

        {isDone && (
          <div className="text-xs leading-relaxed flex items-center mt-1" style={{ color: 'rgba(var(--fg), 0.3)' }}>
            <span>root@exploit.dev:~$ </span>
            <span className="terminal-cursor ml-0.5" />
          </div>
        )}
      </div>
    </div>
  );
}
