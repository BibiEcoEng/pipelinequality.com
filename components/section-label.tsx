export function SectionLabel({
  index,
  children,
}: {
  index?: string
  children: React.ReactNode
}) {
  return (
    <p className='pq-index mb-4'>
      {index ? `${index} — ${children}` : children}
    </p>
  )
}
