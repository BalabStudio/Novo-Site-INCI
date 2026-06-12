import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import NumbersSection from "@/components/NumbersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <main className="flex flex-col items-center gap-10 md:gap-16 py-3 md:px-6">
        <HeroSection />
        <BrandsSection />
        <NumbersSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </div>
  );
}
