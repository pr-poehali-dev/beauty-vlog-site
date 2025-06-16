import { useState, useEffect } from "react";

const Hero = () => {
  const quotes = [
    "Знание — единственное богатство, которое растет, когда им делятся",
    "В каждой книге скрыта вселенная ждущих открытий",
    "Мудрость приходит не с возрастом, а с желанием учиться",
    "Библиотека — это храм человеческого духа",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-academia-brown via-academia-dark-green to-academia-brown">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-academia-cream mb-8 animate-fade-in">
          Академия
          <span className="block text-academia-gold">Знаний</span>
        </h1>

        <div className="h-16 flex items-center justify-center mb-12">
          <p
            key={currentQuote}
            className="text-xl md:text-2xl text-academia-cream font-light animate-fade-in italic font-crimson"
          >
            "{quotes[currentQuote]}"
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-academia-gold text-academia-brown rounded-full hover:bg-academia-cream transition-all hover:scale-105 font-medium font-crimson">
            Исследовать
          </button>
          <button className="px-8 py-3 border-2 border-academia-gold text-academia-cream rounded-full hover:bg-academia-gold hover:text-academia-brown transition-all hover:scale-105 font-medium font-crimson">
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
