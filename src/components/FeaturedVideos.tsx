const FeaturedVideos = () => {
  const videos = [
    {
      id: 1,
      title: "Древние тексты при свечах",
      description: "Изучение манускриптов в уединении старинной библиотеки",
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      duration: "12:34",
    },
    {
      id: 2,
      title: "Архитектура знаний",
      description: "Готические залы университетов и их влияние на разум",
      thumbnail:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      duration: "8:45",
    },
    {
      id: 3,
      title: "Философия в сумерках",
      description: "Размышления о вечном в тишине вечерней библиотеки",
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      duration: "15:20",
    },
  ];

  return (
    <section className="py-20 bg-academia-dark-green">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-academia-cream mb-4">
            Избранные лекции
          </h2>
          <p className="text-academia-cream/80 text-lg max-w-2xl mx-auto font-crimson">
            Коллекция интеллектуальных размышлений и академических открытий
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer bg-academia-brown rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-academia-gold/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-academia-brown/40 group-hover:bg-academia-brown/20 transition-all" />
                <div className="absolute bottom-4 right-4 bg-academia-brown/90 text-academia-gold px-2 py-1 rounded text-sm font-crimson">
                  {video.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-academia-gold/90 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-academia-brown border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-academia-cream mb-2">
                  {video.title}
                </h3>
                <p className="text-academia-cream/70 leading-relaxed font-crimson">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
