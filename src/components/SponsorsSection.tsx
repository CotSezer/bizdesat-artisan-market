
import { useEffect, useRef } from "react";

const SponsorsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Placeholder sponsor logos with realistic company names
  const sponsors = [
    { name: "TechBuild", logo: "TB" },
    { name: "InnoConstruct", logo: "IC" },
    { name: "BuildTech Solutions", logo: "BTS" },
    { name: "Modern Yapı", logo: "MY" },
    { name: "Digital İnşaat", logo: "Dİ" },
    { name: "Smart Building", logo: "SB" },
    { name: "Eco Materials", logo: "EM" },
    { name: "Future Build", logo: "FB" }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  // Double the sponsors array for seamless infinite scroll
  const doubledSponsors = [...sponsors, ...sponsors];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          Bizi Destekleyenler
        </h2>
        
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-8 md:gap-12 overflow-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {doubledSponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <div className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#0046C6] to-[#003a9e] rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl mx-auto mb-2">
                    {sponsor.logo}
                  </div>
                  <p className="text-xs md:text-sm font-medium text-gray-700">
                    {sponsor.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
