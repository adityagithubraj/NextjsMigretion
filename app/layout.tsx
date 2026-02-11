import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '@/contexts/AuthContext'
import { SidebarProvider } from '@/contexts/SidebarContext'
import { LayoutShell } from '@/components/LayoutShell'
import { ScrollToTop } from '@/components/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'MLM Union - Network Marketing Platform',
    template: '%s | MLM Union'
  },
  description: 'Join the largest network marketing community. Find MLM companies, connect with direct sellers, and grow your business.',
  keywords: ['MLM', 'Network Marketing', 'Direct Selling', 'MLM Companies'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mlmunion.in',
    siteName: 'MLM Union',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <SidebarProvider>
            <div className="min-h-screen bg-gray-50 flex flex-col">
              <ScrollToTop />
              <LayoutShell>{children}</LayoutShell>
            </div>
            <Toaster position="top-right" />
          </SidebarProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

