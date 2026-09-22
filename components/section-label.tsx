export function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p
      className={`mb-4 text-[11px] font-bold tracking-[0.18em] uppercase ${
        light ? 'text-accent' : 'text-accent'
      }`}
    >
      {children}
    </p>
  )
}
