import type { Metadata, Viewport } from 'next'
import { Geist, Fraunces, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Motion } from '@/components/motion'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://azizullahkhan16.github.io'),
  title: 'Azizullah Khan',
  authors: [{ name: 'Azizullah Khan', url: 'https://azizullahkhan16.github.io' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const fontClass = `${geist.variable} ${fraunces.variable} ${jetbrainsMono.variable}`
  return (
    <html lang="en" suppressHydrationWarning className={fontClass}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Motion />
        </ThemeProvider>
      </body>
    </html>
  )
}
