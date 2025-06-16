const PhotoGallery = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      alt: "Древние фолианты",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      alt: "Свечи и манускрипты",
    },
    {
      src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=500&fit=crop",
      alt: "Готическая архитектура",
    },
    {
      src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=300&fit=crop",
      alt: "Старинные инструменты",
    },
    {
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      alt: "Библиотечные залы",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      alt: "Ученые труды",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-academia-brown to-academia-dark-green">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-academia-cream mb-4">
            Галерея знаний
          </h2>
          <p className="text-academia-cream/80 text-lg font-crimson">
            Визуальная поэзия академической эстетики
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-academia-gold/30 ${
                index % 3 === 0 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-academia-brown/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-academia-cream opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-medium font-crimson">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
