import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import DirectConnectSection from '@/components/DirectConnectSection';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';

export const metadata: Metadata = {
  title: 'Contact Direct Sales Desk — Aranya Crest Sky Residences',
  description:
    'Connect directly with the Aranya Crest Developer Desk on WhatsApp or Call. Zero forms, zero brokerage, instant floor plans and site visit booking.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#14171A]">
      <TopBar />
      <main className="flex-1">
        <DirectConnectSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
