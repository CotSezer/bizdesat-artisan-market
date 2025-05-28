
const AppMockupsSection = () => {
  const mockups = [{
    title: "Ana Sayfa",
    description: "Kolay navigasyon ve hızlı arama",
    type: "homepage"
  }, {
    title: "Ürün Listesi",
    description: "Detaylı filtreleme ve karşılaştırma",
    type: "listing"
  }, {
    title: "Kategori Görünümü",
    description: "Organize edilmiş malzeme kategorileri",
    type: "categories"
  }, {
    title: "Satış Süreci",
    description: "Hızlı ve güvenli işlem tamamlama",
    type: "sales"
  }];
  
  return <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Yakında Bizdesat Uygulaması
          </h2>
          <p className="text-lg text-gray-600">
            Modern ve kullanıcı dostu arayüzümüzle inşaat malzemesi alım-satımı çok kolay
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockups.map((mockup, index) => <div key={mockup.type} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{
          animationDelay: `${index * 200}ms`
        }}>
              {/* Mockup placeholder */}
              <div className="w-full h-64 bg-gradient-to-br from-[#0046C6]/10 to-[#FFD700]/20 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                {mockup.type === "homepage" ? <img src="/lovable-uploads/f103d22e-caba-45b4-9af6-19c541cee6a2.png" alt="Ana Sayfa - Robot ile İnşaat Malzemeleri" className="w-full h-full rounded-xl object-cover" /> : mockup.type === "listing" ? <img src="/lovable-uploads/f424dbf8-99c7-42b4-8fe4-857b53bcddd6.png" alt="Satış Onaylandı - Robot ve Müşteri" className="w-full h-full rounded-xl object-cover" /> : mockup.type === "categories" ? <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=400&h=300&q=80" alt="İnşaat Şantiyesi Görünümü" className="w-full h-full object-cover rounded-xl" /> : <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=400&h=300&q=80" alt="İnşaat Çalışmaları" className="w-full h-full object-cover rounded-xl" />}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {mockup.title}
              </h3>
              <p className="text-gray-600">
                {mockup.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};

export default AppMockupsSection;
