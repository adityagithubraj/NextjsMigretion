import { Metadata } from 'next'
import { HomePageContent } from '@/components/pages/HomePageContent'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mlmunion.in'

export const metadata: Metadata = {
  title: 'MLM Union - Direct Selling Companies and Direct Sellers Directory',
  description: 'Find legitimate MLM companies and connect with direct sellers. Join our network marketing community for business opportunities and industry insights.',
  openGraph: {
    title: 'MLM Union - Direct Selling Companies and Direct Sellers Directory',
    description: 'Find legitimate MLM companies and connect with direct sellers. Join our network marketing community for business opportunities and industry insights.',
    type: 'website',
    url: baseUrl,
    siteName: 'MLM Union',
  },
  twitter: {
    card: 'summary',
    title: 'MLM Union - Direct Selling Companies and Direct Sellers Directory',
    description: 'Find legitimate MLM companies and connect with direct sellers.',
  },
  alternates: { canonical: baseUrl },
  robots: { index: true, follow: true },
}

export default function HomePage() {
  return <HomePageContent />
}

