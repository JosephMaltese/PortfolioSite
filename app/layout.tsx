import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-cormorant',
    display: 'swap',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Joseph Maltese — Software Engineer',
    description:
        'Personal portfolio of Joseph Maltese, a Software Engineer and McMaster University Computer Science student based in Hamilton, Ontario.',
    generator: 'v0.app',
}

export const viewport: Viewport = {
    colorScheme: 'light',
    themeColor: '#efeadd',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${cormorant.variable} ${inter.variable} bg-background`}>
        <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        </body>
        </html>
    )
}
