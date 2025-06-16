import Navigation from "@/components/Navigation";

const Story = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20 bg-gradient-to-br from-academia-brown via-academia-dark-green to-academia-brown">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-playfair font-bold text-academia-cream mb-6">
            Путь к знанию
          </h1>
          <p className="text-xl text-academia-cream/80 leading-relaxed font-crimson">
            История о том, как любовь к книгам превратилась в философию жизни
          </p>
        </div>
      </section>

      <section className="py-20 bg-academia-dark-green">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg mx-auto">
            <p className="text-academia-cream/80 leading-relaxed mb-8 font-crimson text-lg">
              Всё началось в старой университетской библиотеке, где запах
              древних книг смешивался с тишиной познания. В тот момент я поняла,
              что истинная красота скрывается в мудрости веков, заключенной в
              пожелтевших страницах.
            </p>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=500&fit=crop"
                alt="Путь к мудрости"
                className="rounded-lg shadow-lg w-full border border-academia-gold/30"
              />
            </div>

            <p className="text-academia-cream/80 leading-relaxed mb-8 font-crimson text-lg">
              Сегодня этот канал — дневник интеллектуальных открытий. Здесь я
              делюсь моментами, когда разум соприкасается с вечным: будь то игра
              света на страницах старинного фолианта или философские размышления
              в полумраке кабинета.
            </p>

            <blockquote className="border-l-4 border-academia-gold pl-6 italic text-academia-cream/90 my-8 font-crimson text-lg">
              "Знание — это не то, что мы приобретаем, а то, что мы становимся."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
