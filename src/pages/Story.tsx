import Navigation from "@/components/Navigation";

const Story = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-cormorant font-bold text-gray-800 mb-6">
            Моя история
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Путешествие к пониманию того, что красота живёт в простых вещах
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 leading-relaxed mb-8">
              Всё началось с простого наблюдения: как утренний свет падает на
              кухонный стол, создавая игру теней от чашки кофе. В тот момент я
              поняла, что красота не требует особых декораций или дорогих
              аксессуаров.
            </p>

            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop"
                alt="Путь к творчеству"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              Сегодня мой канал — это дневник открытий. Здесь я делюсь
              моментами, которые заставляют остановиться и улыбнуться. Это может
              быть танец пыли в солнечном луче, или то, как дождевые капли
              создают узоры на окне.
            </p>

            <blockquote className="border-l-4 border-purple-300 pl-6 italic text-gray-700 my-8">
              "Красота — это не то, что мы добавляем к жизни, а то, что мы в ней
              замечаем."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
