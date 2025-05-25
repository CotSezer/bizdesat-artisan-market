
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import ImageCarousel from "@/components/ImageCarousel";
import SponsorsSection from "@/components/SponsorsSection";

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
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-16">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Elindeki fazlalık,<br />
            <span className="text-[#0046C6]">bir başkasının ihtiyacı</span> olabilir.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Yakında başlıyoruz – ilk siz öğrenin.
          </p>

          {/* Value Propositions */}
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mt-12">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
              <span className="text-lg font-medium text-gray-700">Hızlı listeleme</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
              <span className="text-lg font-medium text-gray-700">Güvenli satış</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#FFD700] rounded-full"></div>
              <span className="text-lg font-medium text-gray-700">Depoyu rahatlat</span>
            </div>
          </div>

          {/* Email Signup Form */}
          <div className="max-w-md mx-auto mt-12">
            <p className="text-lg font-medium text-gray-800 mb-4">
              Haber bültenimize katıl, erken erişimden faydalan.
            </p>
            <form onSubmit={handleEmailSubmit} className="flex gap-3">
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-base border-2 border-gray-200 focus:border-[#0046C6] rounded-lg"
                required
              />
              <Button 
                type="submit"
                className="h-12 px-6 bg-[#0046C6] hover:bg-[#003a9e] text-white font-medium rounded-lg transition-colors"
              >
                Katıl
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="w-full py-16">
        <ImageCarousel />
      </section>

      {/* Sponsors Section */}
      <SponsorsSection />

      {/* Footer */}
      <footer className="w-full py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-gray-600 mb-2">© 2024 Bizdesat. Tüm hakları saklıdır.</p>
          <p className="text-[#0046C6] font-medium text-lg">Elinde kaldı, Bizdesat!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
