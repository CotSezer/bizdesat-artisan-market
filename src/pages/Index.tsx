
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import ImageCarousel from "@/components/ImageCarousel";
import SponsorsSection from "@/components/SponsorsSection";
import AppMockupsSection from "@/components/AppMockupsSection";
import MobileStickySignup from "@/components/MobileStickySignup";
import AnimatedInput from "@/components/AnimatedInput";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Teşekkürler!",
        description: "E-posta adresiniz başarıyla kaydedildi. Erken erişim için size haber vereceğiz.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <img 
            src="/lovable-uploads/a5e87896-448b-4872-88af-675e0ec083a4.png" 
            alt="Bizdesat Logo" 
            className="h-8 md:h-10"
          />
          {/* Separator line */}
          <div className="w-full h-px bg-[#E0E0E0] mt-6"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-16">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight animate-fade-in">
            Elindeki fazlalık,<br />
            <span className="text-[#FDC41E]">bir başkasının ihtiyacı</span> olabilir.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 font-medium animate-fade-in animation-delay-200">
            Yakında başlıyoruz – ilk siz öğrenin.
          </p>

          {/* Value Propositions */}
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mt-12 animate-fade-in animation-delay-400">
            <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
              <div className="w-3 h-3 bg-[#FDC41E] rounded-full"></div>
              <span className="text-lg font-medium text-gray-700">Hızlı listeleme</span>
            </div>
            <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
              <div className="w-3 h-3 bg-[#FDC41E] rounded-full"></div>
              <span className="text-lg font-medium text-gray-700">Güvenli satış</span>
            </div>
            <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
              <div className="w-3 h-3 bg-[#FDC41E] rounded-full"></div>
              <span className="text-lg font-medium text-gray-700">Depoyu rahatlat</span>
            </div>
          </div>

          {/* Email Signup Form */}
          <div className="max-w-lg mx-auto mt-12 animate-fade-in animation-delay-600">
            <p className="text-lg font-medium text-gray-800 mb-6">
              Haber bültenimize katıl, erken erişimden faydalan.
            </p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
              <AnimatedInput
                type="email"
                placeholder="E-posta adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-14 text-base"
                required
              />
              <Button 
                type="submit"
                className="h-14 px-8 bg-[#0046C6] hover:bg-[#003a9e] hover:scale-105 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:min-w-[160px]"
              >
                Bizdesat'a Katıl
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="w-full py-16 animate-fade-in animation-delay-800">
        <ImageCarousel />
      </section>

      {/* App Mockups Section */}
      <AppMockupsSection />

      {/* Sponsors Section */}
      <SponsorsSection />

      {/* Footer */}
      <footer className="w-full py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-gray-600 mb-2">© 2024 Bizdesat. Tüm hakları saklıdır.</p>
          <p className="text-[#0046C6] font-medium text-lg">Elinde kaldı, Bizdesat!</p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <MobileStickySignup />
    </div>
  );
};

export default Index;
