import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = { title: 'Malek Al Bikawi — Designing ideas into apps.', description: 'Portfolio of Malek Al Bikawi, a Grade 12 student exploring Swift, iOS, AI and creative technology.' }
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html> }
