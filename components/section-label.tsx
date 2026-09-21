export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="h-px w-8 bg-accent" />
      <p
        className={`text-[12px] font-semibold tracking-[0.18em] uppercase ${
          light ? 'text-white/70' : 'text-brand'
        }`}
      >
        {children}
      </p>
    </div>
  )
}
