import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata = {
  metadataBase: new URL('https://www.edlacalgorithm.com'),
  title: {
    default: 'EDLAC Algorithm | Intelligent Systems for Sales, Operations, and Growth',
    template: '%s | EDLAC Algorithm'
  },
  description:
    'EDLAC Algorithm builds AI automation systems, enterprise software, and renewable energy infrastructure for ambitious organizations.',
  openGraph: {
    title: 'EDLAC Algorithm',
    description:
      'We build intelligent systems that automate sales, operations, and growth.',
    type: 'website',
    url: 'https://www.edlacalgorithm.com',
    siteName: 'EDLAC Algorithm'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDLAC Algorithm',
    description:
      'Technology partner for AI automation, software implementation, and renewable energy execution.'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-radial-lux">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
