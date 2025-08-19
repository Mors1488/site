import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

// === Мини-настройки под тебя ===
const BUSINESS = {
  name: "Быстрые Запчасти",
  cities: ["Самара", "Тольятти", "Ягодное"],
  phone: "+7-900-000-00-00",
  whatsapp: "+79000000000", // в формате без + для wa.me
  slogan: "Доставка сегодня или завтра",
  ipInfo: {
    legalName: "ИП Иванов И.И.", // подставь ИП друга
    inn: "7700000000",
    ogrnip: "320000000000000",
  },
};

// Пример ассортимента для проверки спроса. Меняй под себя.
const ALL_PRODUCTS = [
  {
    id: "BP-01",
    title: "Тормозные колодки передние",
    models: ["Chery Tiggo 7", "Geely Coolray", "Haval Jolion"],
    status: "В наличии",
    price: 1900,
    img: "https://placehold.co/400x260?text=%D0%9A%D0%BE%D0%BB%D0%BE%D0%B4%D0%BA%D0%B8",
  },
  {
    id: "FLT-02",
    title: "Фильтр масляный",
    models: ["Haval F7", "Changan CS35", "Exeed LX"],
    status: "Под заказ",
    price: 450,
    img: "https://placehold.co/400x260?text=%D0%A4%D0%B8%D0%BB%D1%8C%D1%82%D1%80",
  },
  {
    id: "IGN-03",
    title: "Свеча зажигания (комплект 4 шт)",
    models: ["Geely Atlas Pro", "Chery Tiggo 4"],
    status: "В наличии",
    price: 1600,
    img: "https://placehold.co/400x260?text=%D0%A1%D0%B2%D0%B5%D1%87%D0%B8",
  },
  {
    id: "STB-04",
    title: "Стойка стабилизатора",
    models: ["Haval Jolion", "Geely Coolray"],
    status: "Под заказ",
    price: 1300,
    img: "https://placehold.co/400x260?text=%D0%A1%D1%82%D0%BE%D0%B9%D0%BA%D0%B0",
  },
  {
    id: "Belt-05",
    title: "Ремень ГРМ комплект",
    models: ["Chery Tiggo 2", "Lifan X60"],
    status: "Под заказ",
    price: 4200,
    img: "https://placehold.co/400x260?text=%D0%A0%D0%B5%D0%BC%D0%B5%D0%BD%D1%8C+%D0%93%D0%A0%D0%9C",
  },
];

function whatsappLink(text) {
  const url = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;
  return url;
}

function Header({ city, setCity }) {
  return (
    <header className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold">{BUSINESS.name}</span>
          <span className="hidden sm:inline text-sm text-gray-500">{BUSINESS.slogan}</span>
        </div>
        <div className="flex items-center gap-3">
          <select
            className="border rounded-xl px-3 py-2 text-sm"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            aria-label="Город доставки"
          >
            {BUSINESS.cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="text-sm px-3 py-2 rounded-xl border hover:bg-gray-50"
          >
            {BUSINESS.phone}
          </a>
          <a
            href={whatsappLink("Здравствуйте! Хочу уточнить наличие и сроки доставки.")}
            className="text-sm px-3 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold leading-tight"
          >
            Запчасти на китайские авто в Самаре и Тольятти
          </motion.h1>
          <p className="mt-3 text-gray-600">
            Работаем по принципу: <strong>быстро и по делу</strong>. Проверяем спрос: оставьте заявку — ответим в течение 10–30 минут и сообщим наличие.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsappLink("Нужна консультация по запчастям. Город: ")}
              className="px-4 py-2 rounded-2xl bg-black text-white hover:opacity-90"
            >
              Написать в WhatsApp
            </a>
            <a
              href="#request"
              className="px-4 py-2 rounded-2xl border hover:bg-gray-50"
            >
              Оставить заявку
            </a>
          </div>
          <ul className="mt-6 text-sm text-gray-600 space-y-1">
            <li>• Доставка сегодня/завтра по Самаре, Тольятти, Ягодному</li>
            <li>• Оригиналы и качественные аналоги</li>
            <li>• Работаем с СТО, таксопарками и частными клиентами</li>
          </ul>
        </div>
        <div className="relative">
          <img
            alt="Склад запчастей"
            className="w-full h-64 sm:h-80 object-cover rounded-3xl shadow"
            src="https://placehold.co/800x500?text=%D0%97%D0%B0%D0%BF%D1%87%D0%B0%D1%81%D1%82%D0%B8"
          />
          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow p-4">
            <div className="text-sm">Среднее время ответа</div>
            <div className="text-2xl font-bold">10–30 мин</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ p, city }) {
  const whatsText = `Интересует ${p.title} (${p.id}) для моделей: ${p.models.join(", ")}. Город: ${city}. Подскажите наличие и срок доставки.`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border shadow-sm overflow-hidden bg-white flex flex-col"
    >
      <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-snug">{p.title}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${
            p.status === "В наличии" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
          }`}>
            {p.status}
          </span>
        </div>
        <div className="text-sm text-gray-600 mt-1">Модели: {p.models.join(", ")}</div>
        <div className="mt-3 font-bold text-lg">от {p.price.toLocaleString()} ₽</div>
        <div className="mt-4 flex gap-2">
          <a
            href={whatsappLink(whatsText)}
            className="px-3 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 text-sm"
          >
            Узнать наличие
          </a>
          <a
            href={`mailto:orders@example.com?subject=${encodeURIComponent("Запрос: "+p.title+" ("+p.id+")")}&body=${encodeURIComponent(whatsText)}`}
            className="px-3 py-2 rounded-xl border hover:bg-gray-50 text-sm"
          >
            На почту
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function Catalog({ city }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter((p) =>
      p.title.toLowerCase().includes(q) ||
      p.models.join(" ").toLowerCase().includes(q) ||
      p.id.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section id="catalog" className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold">Популярные позиции</h2>
          <p className="text-gray-600 text-sm">Выберите деталь и отправьте быстрый запрос в 1 клик.</p>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск по названию, модели или артикулу"
          className="border rounded-xl px-3 py-2 w-full max-w-md"
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} p={p} city={city} />
        ))}
      </div>
    </section>
  );
}

function RequestBlock({ city }) {
  const [form, setForm] = useState({ name: "", phone: "", model: "", part: "", comment: "" });
  const canSend = form.phone && (form.model || form.part);
  const waText = `Заявка с сайта\nИмя: ${form.name}\nТелефон: ${form.phone}\nГород: ${city}\nМодель авто: ${form.model}\nЗапчасть: ${form.part}\nКомментарий: ${form.comment}`;

  return (
    <section id="request" className="bg-gray-50 border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Нет нужной детали в каталоге?</h2>
          <p className="text-gray-600 mt-2">Оставьте быстрый запрос — подберём аналог и сообщим сроки доставки.</p>
          <ul className="mt-4 text-sm text-gray-600 space-y-1">
            <li>• Ответ за 10–30 минут</li>
            <li>• Доставка по Самаре/Тольятти/Ягодному сегодня-завтра</li>
            <li>• Работаем с СТО, таксопарками и частниками</li>
          </ul>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-white rounded-2xl p-4 border shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-3">
            <input className="border rounded-xl px-3 py-2" placeholder="Имя"
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className="border rounded-xl px-3 py-2" placeholder="Телефон*"
              value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <input className="border rounded-xl px-3 py-2 sm:col-span-2" placeholder="Модель авто (марка, год)"
              value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} />
            <input className="border rounded-xl px-3 py-2 sm:col-span-2" placeholder="Какая запчасть нужна"
              value={form.part} onChange={(e) => setForm({ ...form, part: e.target.value })} />
            <textarea className="border rounded-xl px-3 py-2 sm:col-span-2" placeholder="Комментарий"
              rows={3}
              value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} />
          </div>
          <div className="mt-4 flex gap-3">
            <a
              href={whatsappLink(waText)}
              className={`px-4 py-2 rounded-2xl text-white ${canSend ? "bg-green-600 hover:bg-green-700" : "bg-gray-300 pointer-events-none"}`}
            >
              Отправить в WhatsApp
            </a>
            <a
              href={`mailto:orders@example.com?subject=${encodeURIComponent("Заявка с сайта")}&body=${encodeURIComponent(waText)}`}
              className="px-4 py-2 rounded-2xl border hover:bg-gray-50"
            >
              Отправить на e-mail
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-2">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 py-8 grid sm:grid-cols-2 gap-4 items-center">
        <div className="text-sm text-gray-600">
          <div className="font-semibold">{BUSINESS.ipInfo.legalName}</div>
          <div>ИНН: {BUSINESS.ipInfo.inn} • ОГРНИП: {BUSINESS.ipInfo.ogrnip}</div>
          <div>Тел.: {BUSINESS.phone}</div>
        </div>
        <div className="text-sm text-gray-500 sm:text-right">
          © {new Date().getFullYear()} {BUSINESS.name}. Все права защищены.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [city, setCity] = useState(BUSINESS.cities[0]);
  return (
    <div className="min-h-screen flex flex-col">
      <Header city={city} setCity={setCity} />
      <Hero />
      <Catalog city={city} />
      <RequestBlock city={city} />
      <Footer />
    </div>
  );
}
