import TopBar from '@/components/TopBar';
import HeroSection from '@/components/HeroSection';
import AmenitiesBento from '@/components/AmenitiesBento';
import DirectConnectSection from '@/components/DirectConnectSection';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F6] text-[#18181B]">
      <TopBar />
      <main className="flex-1">
        <HeroSection />
        <AmenitiesBento />
        <DirectConnectSection />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
