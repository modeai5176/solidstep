import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Solid Step Flooring | Premium Flooring Solutions in Surrey',
  description: 'Transform your space with premium hardwood, luxury vinyl plank, laminate, tile, carpet, and custom stair installations. Crafted floors designed to elevate your living experience.',
  keywords: ['flooring', 'hardwood', 'vinyl plank', 'laminate', 'tile', 'carpet', 'stairs', 'Surrey', 'Canada', 'luxury flooring'],
  authors: [{ name: 'Solid Step Flooring' }],
  openGraph: {
    title: 'Solid Step Flooring | Premium Flooring Solutions',
    description: 'Crafted floors. Designed to elevate your space.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
