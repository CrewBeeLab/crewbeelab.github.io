export const designSystem = {
  layout: {
    section: 'section-container',
    darkSection: 'bg-ink text-paper py-24 md:py-32 lg:py-48 px-6',
    centeredNarrowSection: 'relative mx-auto max-w-[900px] px-6 py-24 md:py-28 lg:py-32'
  },
  surface: {
    card: 'card-paper p-8 md:p-10 flex flex-col items-start text-left relative overflow-hidden group',
    compactCard: 'card-paper bg-surface p-6 md:p-8',
    darkCard: 'bg-white/[0.035] border border-white/10 p-6 md:p-8 shadow-2xl shadow-black/10',
    codePanel: 'bg-[#1a1a1a] p-8 md:p-12 lg:p-16 border border-white/5 shadow-2xl relative overflow-x-auto overflow-y-hidden group md:rounded-lg',
    glassPanel: 'relative border border-ink/8 bg-paper/75 backdrop-blur-md p-6 md:p-8 lg:p-10 shadow-2xl shadow-ink/5'
  },
  typography: {
    badge: 'inline-block text-[10px] uppercase font-sans font-bold tracking-[0.2em] text-honey mb-4 md:mb-6',
    eyebrow: 'text-[10px] font-bold uppercase tracking-[0.22em] text-honey',
    index: 'text-[10px] font-bold text-honey block tracking-[0.2em] font-sans',
    cardTitle: 'text-xl md:text-2xl mb-3 md:mb-4 italic font-serif leading-tight',
    cardText: 'text-ink/60 font-serif leading-relaxed text-base md:text-lg'
  },
  effect: {
    cardHoneyGlow: 'absolute top-0 right-0 w-24 h-24 bg-honey/5 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-150 duration-700',
    darkAmbientGlow: 'absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_0%,rgba(217,155,43,0.18),transparent_30%),radial-gradient(circle_at_85%_70%,rgba(255,255,255,0.06),transparent_28%)]',
    warmAmbientGlow: 'absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(217,155,43,0.10),transparent_28%),radial-gradient(circle_at_90%_50%,rgba(21,18,15,0.05),transparent_32%)] pointer-events-none'
  }
} as const;

export type DesignSystem = typeof designSystem;
