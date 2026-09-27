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
  metadataBase: new URL('https://azizullahkhan16.github.io'),
  title: 'Azizullah Khan · AI Infrastructure Engineer',
  description:
    'Software Engineer, Infrastructure at Data Science Dojo. I build and run the platform behind LLM applications (networking, observability, multi-tenant billing) and publish reproducible measurement studies on systems performance.',
  keywords: [
    'AI infrastructure',
    'LLM infrastructure',
    'ML systems',
    'platform engineering',
    'Kubernetes',
    'Azure',
    'observability',
    'performance measurement',
  ],
  authors: [{ name: 'Azizullah Khan', url: 'https://azizullahkhan16.github.io' }],
  alternates: { canonical: 'https://azizullahkhan16.github.io' },
  openGraph: {
    type: 'website',
    url: 'https://azizullahkhan16.github.io',
    siteName: 'Azizullah Khan',
    title: 'Azizullah Khan · AI Infrastructure Engineer',
    description:
      'I build and run the platform behind LLM applications, and publish reproducible measurement studies on systems performance.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Azizullah Khan. Powering the AI you use, from behind the scenes.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azizullah Khan · AI Infrastructure Engineer',
    description:
      'I build and run the platform behind LLM applications, and publish reproducible measurement studies on systems performance.',
    images: ['/og.png'],
  },
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
