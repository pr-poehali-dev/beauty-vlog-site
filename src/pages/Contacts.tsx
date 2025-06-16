import Navigation from "@/components/Navigation";

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 to-green-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-cormorant font-bold text-gray-800 mb-6">
            Контакты
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Давайте вместе находить красоту в повседневности
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-cormorant font-bold text-gray-800 mb-8">
                Свяжитесь со мной
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    📺
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">YouTube</h3>
                    <p className="text-gray-600">@красота-дня</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    📷
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Instagram</h3>
                    <p className="text-gray-600">@everyday_beauty</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">hello@красота-дня.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Поделитесь своими мыслями о красоте повседневности..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
