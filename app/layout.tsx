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
    title: "Joseph's Portfolio",
    description:
        'The personal portfolio of Joseph Maltese, a Computer Science student at McMaster University in Hamilton, Ontario',
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
        <head>
            {/* Disable automatic telephone number detection on mobile browsers */}
            <meta name="format-detection" content="telephone=no" />
        </head>
        <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        </body>
        </html>
    )
}
