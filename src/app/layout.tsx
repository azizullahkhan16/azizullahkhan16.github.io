import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Azizullah Khan — Software Engineer, ML Systems',
  description:
    'Software engineer building the network, observability, and multi-tenant billing layers of an LLM platform at Data Science Dojo.',
  keywords: ['ML Systems', 'LLM Infrastructure', 'Cloud Infrastructure', 'Azure'],
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
