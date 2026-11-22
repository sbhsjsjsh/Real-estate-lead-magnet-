import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aranya Crest — Luxury 3 & 4 BHK Sky Residences | Direct Developer Desk',
  description:
    'RERA-approved 3 & 4 BHK sky residences on Golf Course Extension Road, Gurugram starting at ₹3.45 Cr. Get floor plans, price sheet, and site visit slots instantly on WhatsApp or Call.',
  openGraph: {
    title: 'Aranya Crest — Luxury 3 & 4 BHK Sky Residences',
    description:
      'Private 3 & 4 BHK sky residences surrounded by 4 acres of central greens. Zero brokerage direct developer pricing. Instant brochure on WhatsApp.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aranya Crest — Luxury 3 & 4 BHK Sky Residences',
    description:
      'Private 3 & 4 BHK sky residences surrounded by 4 acres of central greens. Zero brokerage direct developer pricing.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F7F6F2',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable}`}
    >
      <body
        suppressHydrationWarning
        className="bg-[#F7F6F2] text-[#14171A] font-sans antialiased selection:bg-[#0E6F4E]/15 selection:text-[#0E6F4E] overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
