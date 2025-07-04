import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Serena Blake, PsyD - Clinical Psychologist in Los Angeles',
  description: 'Licensed clinical psychologist offering anxiety treatment, relationship counseling, and trauma recovery in Los Angeles. In-person and virtual sessions available.',
  keywords: 'psychologist, therapy, anxiety, relationships, trauma, Los Angeles, virtual therapy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}