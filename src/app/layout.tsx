import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const viewport = {
  themeColor: '#7c3aed',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Interactive B2B ROI Calculator',
  description: 'Calculate the hidden potential in your current funnel with our Interactive B2B ROI Calculator.',
  manifest: '/roi_calculation_website/manifest.json',
  icons: {
    icon: [
      { url: '/roi_calculation_website/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/roi_calculation_website/icon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/roi_calculation_website/icon.png',
    apple: [
      { url: '/roi_calculation_website/icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/roi_calculation_website/icon.png',
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ROI Calculator',
  },
  openGraph: {
    title: 'Interactive B2B ROI Calculator',
    description: 'Calculate the hidden potential in your current funnel with our Interactive B2B ROI Calculator.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive B2B ROI Calculator',
    description: 'Calculate the hidden potential in your current funnel with our Interactive B2B ROI Calculator.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
