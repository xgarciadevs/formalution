import { Metadata } from 'next'
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://xdg6227.github.io/formalution'),
  title: 'Formalution',
  description: 'Create & share custom forms between your friends, students & groups!',
  keywords: ['forms', 'formalution', 'help', 'students', 'teachers', 'groups', 'services', 'free'],
  themeColor: '#5D3FD3',
  viewport: {width: 'device-width',initialScale: 1,maximumScale: 1},
  openGraph: {
    title: 'Formalution',
    description: 'Create & share custom forms between your friends, students & groups!',
    url: 'https://xdg6227.github.io/formalution',
    siteName: 'xgarciadevs',
    images: [{ url: 'https://xdg6227.github.io/formalution/images/formalution.png', alt: '' }],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formalution',
    description: 'Create & share custom forms between your friends, students & groups!',
    site: '@formalution',
    creator: '@itsnightcrown',
    images: ['https://xdg6227.github.io/formalution/images/formalution.png'],
  },
  icons: {
    icon: 'https://xdg6227.github.io/formalution/images/favicon.ico',
    shortcut: 'https://xdg6227.github.io/formalution/images/favicon.ico',
    apple: 'https://xdg6227.github.io/formalution/images/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
