import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedVideos from "@/components/FeaturedVideos";
import PhotoGallery from "@/components/PhotoGallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedVideos />
      <PhotoGallery />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-cormorant font-bold mb-4">
            Красота Дня
          </h3>
          <p className="text-gray-400 mb-6">
            Находим прекрасное в обыкновенном каждый день
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              YouTube
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            ></a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
