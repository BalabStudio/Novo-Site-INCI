import CoworkingHero from "@/components/CoworkingHero";
import CoworkingIntro from "@/components/CoworkingIntro";
import CoworkingVisual from "@/components/CoworkingVisual";
import CoworkingBenefits from "@/components/CoworkingBenefits";
import CoworkingHighlight from "@/components/CoworkingHighlight";
import CoworkingStructure from "@/components/CoworkingStructure";
import CoworkingManifesto from "@/components/CoworkingManifesto";
import CoworkingCta from "@/components/CoworkingCta";
import Footer from "@/components/Footer";

export default function CoworkingPage() {
  return (
    <div className="bg-white overflow-hidden">
      <style>{`body::after{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");background-size:256px 256px;opacity:0.035;pointer-events:none;z-index:9998;mix-blend-mode:overlay}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:0.01ms!important;animation-iteration-count:1!important;transition-duration:0.01ms!important;scroll-behavior:auto!important}[data-reveal],.will-reveal{opacity:1!important;transform:none!important;clip-path:none!important;filter:none!important}}`}</style>
      <main className="flex flex-col items-center gap-4 md:gap-8 py-3 md:px-6">
        <CoworkingHero />
        <CoworkingIntro />
        <CoworkingVisual />
        <CoworkingBenefits />
        <CoworkingHighlight />
        <CoworkingStructure />
        <CoworkingManifesto />
        <CoworkingCta />
        <Footer />
      </main>
    </div>
  );
}
