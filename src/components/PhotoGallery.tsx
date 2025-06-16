const PhotoGallery = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=400&fit=crop",
      alt: "Утренний свет",
    },
    {
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=300&fit=crop",
      alt: "Кофе и книга",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=500&fit=crop",
      alt: "Минимализм",
    },
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      alt: "Растения",
    },
    {
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=400&fit=crop",
      alt: "Текстуры",
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
      alt: "Простота",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cormorant font-bold text-gray-800 mb-4">
            Моменты красоты
          </h2>
          <p className="text-gray-600 text-lg">
            Фотографии из повседневной жизни, которые вдохновляют
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                index % 3 === 0 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-medium">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
