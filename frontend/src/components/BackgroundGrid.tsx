export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 55% at 50% -5%, var(--radial-glow) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-80"
        style={{ background: 'linear-gradient(to top, var(--color-bg) 0%, transparent 100%)' }}
      />
    </div>
  );
}
