const FeaturedVideos = () => {
  const videos = [
    {
      id: 1,
      title: "Утренний кофе как ритуал",
      description: "Находим красоту в простых утренних моментах",
      thumbnail:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
      duration: "5:24",
    },
    {
      id: 2,
      title: "Свет в окне",
      description: "Как естественный свет преображает пространство",
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      duration: "8:15",
    },
    {
      id: 3,
      title: "Цветы на подоконнике",
      description: "Маленький сад в городской квартире",
      thumbnail:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      duration: "6:42",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cormorant font-bold text-gray-800 mb-4">
            Избранные видео
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Коллекция моментов, которые вдохновляют находить прекрасное в
            обыкновенном
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-purple-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-cormorant font-semibold text-gray-800 mb-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
