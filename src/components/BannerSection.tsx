
const BannerSection = () => {
  const bannerImages = [
    {
      src: "/lovable-uploads/6a646592-f577-4094-b825-0945da5089da.png",
      alt: "Construction materials and supplies"
    },
    {
      src: "/lovable-uploads/0bcaefcc-da4e-46d0-bafb-23223f0e640f.png", 
      alt: "Construction site transaction"
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Construction site with crane"
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Construction workers with materials"
    }
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {bannerImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
