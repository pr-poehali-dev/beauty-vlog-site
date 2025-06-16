import Navigation from "@/components/Navigation";

const Creativity = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20 bg-gradient-to-br from-academia-brown via-academia-dark-green to-academia-brown">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-playfair font-bold text-academia-cream mb-6">
            Интеллектуальное творчество
          </h1>
          <p className="text-xl text-academia-cream/80 leading-relaxed font-crimson">
            Здесь рождаются идеи, переплетаются мысли и создается философия
            познания через эстетику знания.
          </p>
        </div>
      </section>

      <section className="py-20 bg-academia-dark-green">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop"
                alt="Философия познания"
                className="rounded-lg shadow-lg border border-academia-gold/30"
              />
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-bold text-academia-cream mb-6">
                Философия познания
              </h2>
              <p className="text-academia-cream/80 leading-relaxed mb-6 font-crimson">
                Для меня интеллектуальное творчество — это диалог с вечностью,
                где каждая прочитанная страница открывает новые горизонты
                понимания.
              </p>
              <p className="text-academia-cream/80 leading-relaxed font-crimson">
                В тишине библиотечных залов рождаются самые глубокие мысли, а
                при свете свечей оживают древние истины.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creativity;
