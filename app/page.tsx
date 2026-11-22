import TopBar from '@/components/TopBar';
import HeroSection from '@/components/HeroSection';
import AmenitiesBento from '@/components/AmenitiesBento';
import DirectConnectSection from '@/components/DirectConnectSection';
import Footer from '@/components/Footer';
import MobileStickyBar from '@/components/MobileStickyBar';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F6F2] text-[#14171A]">
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
