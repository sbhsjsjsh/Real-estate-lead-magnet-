import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import AmenitiesBento from '@/components/AmenitiesBento';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';

export const metadata: Metadata = {
  title: 'Amenities — Aranya Crest Sky Residences',
  description:
    'Explore the 42,000 sq. ft. residents-only clubhouse, heated infinity pool, 4-acre vehicle-free park, and MERV-14 clean-air architecture at Aranya Crest.',
};

export default function AmenitiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#14171A]">
      <TopBar />
      <main className="flex-1">
        <AmenitiesBento />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
