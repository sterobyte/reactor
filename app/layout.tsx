import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Reactor',
  description: 'Quantum sports terminal',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0f141a] text-white font-sans">{children}</body>
    </html>
  )
}
