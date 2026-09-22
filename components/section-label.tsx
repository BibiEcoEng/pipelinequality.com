export function SectionLabel({
  children,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return <p className='pq-index mb-4'>{children}</p>
}
