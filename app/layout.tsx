import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ANTIDOOM – Kill the Doom Scroll',
  description:
    'Take back control of your time with ANTIDOOM, the Chrome extension that blocks distracting websites and helps you focus on what actually matters.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
