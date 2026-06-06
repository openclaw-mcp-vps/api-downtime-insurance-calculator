import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Downtime Insurance Calculator',
  description: 'Calculate SLA credits and insurance claims automatically. Monitor API uptime, track financial impact, and generate claim documentation.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d525585b-6313-40f1-b012-790b35c64b99"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
