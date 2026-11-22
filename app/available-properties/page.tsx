import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import AvailablePropertiesCatalog from '@/components/AvailablePropertiesCatalog';
import DirectConnectSection from '@/components/DirectConnectSection';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';

export const metadata: Metadata = {
  title: 'Available Properties — Aranya Crest Sky Residences',
  description:
    'Browse currently available 3 BHK, 4 BHK, and Penthouse residences at Aranya Crest. Direct developer pricing with instant WhatsApp brochure and Call desk.',
};

export default function AvailablePropertiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#14171A]">
      <TopBar />
      <main className="flex-1">
        <AvailablePropertiesCatalog />
        <DirectConnectSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
