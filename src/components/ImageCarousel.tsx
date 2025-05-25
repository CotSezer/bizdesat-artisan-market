import { useState, useEffect } from "react";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/lovable-uploads/76fabbc0-c904-40a2-861e-8a1a04118bbf.png",
      title: "Akıllı İnşaat Malzemeleri",
      description: "Fazla malzemelerinizi değerlendirin, sürdürülebilir inşaat destekleyin"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      title: "Dijital Platform",
      description: "Modern teknoloji ile kolay alım-satım deneyimi"
    },
    {
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      title: "Güvenli İşlemler",
      description: "Doğrulanmış satıcılar ve güvenli ödeme sistemi"
    },
    {
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop",
      title: "Geniş Ürün Yelpazesi",
      description: "Çelik, beton, ahşap ve daha fazlası tek platformda"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#FDC41E] to-[#e6b01a]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-gray-900">
                <h3 className="text-2xl md:text-4xl font-bold mb-4">{slide.title}</h3>
                <p className="text-lg md:text-xl opacity-90">{slide.description}</p>
              </div>
              <div className="w-full md:w-1/2 h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#0046C6]" : "bg-gray-600/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
