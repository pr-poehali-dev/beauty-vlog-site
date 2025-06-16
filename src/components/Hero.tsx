import { useState, useEffect } from "react";

const Hero = () => {
  const quotes = [
    "Красота скрывается в самых обычных моментах",
    "Каждый день дарит нам маленькие чудеса",
    "В простоте кроется истинная элегантность",
    "Жизнь прекрасна в своей повседневности",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-yellow-50 to-purple-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-cormorant font-bold text-gray-800 mb-8 animate-fade-in">
          Красота
          <span className="block text-stone-500">Повседневности</span>
        </h1>

        <div className="h-16 flex items-center justify-center mb-12">
          <p
            key={currentQuote}
            className="text-xl md:text-2xl text-gray-600 font-light animate-fade-in italic"
          >
            "{quotes[currentQuote]}"
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all hover:scale-105 font-medium">
            Смотреть видео
          </button>
          <button className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition-all hover:scale-105 font-medium">
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
