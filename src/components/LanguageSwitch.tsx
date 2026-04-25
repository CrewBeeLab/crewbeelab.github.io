export const LanguageSwitch = ({ label, ariaLabel, onClick }: { label: string; ariaLabel: string; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="px-3 py-2 border border-ink/10 rounded-full text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-ink/50 hover:text-ink hover:bg-surface transition-colors"
    aria-label={ariaLabel}
    aria-pressed="false"
  >
    {label}
  </button>
);
