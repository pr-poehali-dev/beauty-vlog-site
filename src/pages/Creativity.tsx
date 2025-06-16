import Navigation from "@/components/Navigation";

const Creativity = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20 bg-gradient-to-br from-yellow-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-cormorant font-bold text-gray-800 mb-6">
            Творчество
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Здесь собраны мои творческие проекты, эксперименты со светом,
            композицией и поиски красоты в неожиданных местах.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1452827073306-6e6e661baf57?w=600&h=400&fit=crop"
                alt="Творческий процесс"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-cormorant font-bold text-gray-800 mb-6">
                Философия творчества
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Для меня творчество — это способ показать миру, что красота
                окружает нас повсюду. Важно лишь научиться её замечать и
                делиться этим открытием с другими.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Каждое видео, каждая фотография — это приглашение остановиться и
                увидеть волшебство в том, что мы считаем обыденным.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creativity;
