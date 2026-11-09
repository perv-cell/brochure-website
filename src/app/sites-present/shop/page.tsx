import { Metadata } from 'next';
import  Reveal  from '@/elements/Reveal';
import OpenModalButton from '@/components/OpenModalButton';
import { CheckIcon, CartIcon, PaymentIcon, AnalyticsIcon, SecurityIcon, BoxesIcon, TruckIcon, CheckIconSmall } from '@/components/ShopIcons';

export const metadata: Metadata = {
  title: 'Разработка интернет-магазина под ключ | PerSolution',
  description: 'Создание интернет-магазинов с каталогом, корзиной, онлайн-оплатой и интеграцией с 1С. Запуск под ключ от 80 000 ₽.',
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0f0f19] text-slate-800 dark:text-slate-300">

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-400/10 dark:bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <Reveal direction="up" delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Интернет-магазин, <br className="hidden md:block"/> который продает
            </h1>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
              Полноценный e-commerce инструмент. Удобный каталог, быстрая корзина,
              онлайн-оплата и интеграция с 1С. Все для роста ваших продаж.
            </p>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <OpenModalButton
                text="Заказать магазин"
                className="px-8 py-4 cursor-pointer rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:-translate-y-1 hover:shadow-xl transition-all w-full sm:w-auto"
              />
              <a href="#pricing" className="px-8 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all w-full sm:w-auto">
                Узнать стоимость
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50 dark:bg-[#14141e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Что умеет ваш будущий магазин?</h2>
            <p className="text-slate-500 dark:text-slate-400">Мы внедряем только необходимые инструменты для продаж.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <BoxesIcon />, title: 'Умный каталог', desc: 'Фильтры, сортировка, поиск по характеристикам. Клиент быстро найдет товар.' },
              { icon: <CartIcon />, title: 'Быстрая корзина', desc: 'Оформление заказа в один клик. Интуитивно понятный интерфейс покупки.' },
              { icon: <PaymentIcon />, title: 'Онлайн-оплата', desc: 'Подключение ЮKassa, Тинькофф, CloudPayments или эквайринга банка.' },
              { icon: <AnalyticsIcon />, title: 'Аналитика', desc: 'Сбор статистики по продажам, воронке и поведению клиентов.' }
            ].map((item, i) => (
              <Reveal key={i} direction="up" delay={i * 100}>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 h-full text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Бесшовная интеграция</h2>
            <p className="text-slate-500 dark:text-slate-400">Свяжем магазин с вашими текущими бизнес-процессами.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal direction="right" delay={100}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <TruckIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Службы доставки</h3>
                  <p className="text-slate-600 dark:text-slate-400">Подключим СДЭК, Boxberry, Почту России и Яндекс.Доставку с расчетом стоимости.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <SecurityIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">1С и CRM</h3>
                  <p className="text-slate-600 dark:text-slate-400">Синхронизация товаров, остатков и заказов с 1С, МойСклад или Битрикс24.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={300}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <SearchIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">SEO-маркетинг</h3>
                  <p className="text-slate-600 dark:text-slate-400">Настроим выгрузку товаров в Яндекс.Маркет и Google Merchant Center.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50 dark:bg-[#14141e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Как мы создаем магазины</h2>
            <p className="text-slate-500 dark:text-slate-400">От проектирования до первых продаж.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { step: '01', title: 'Проектирование', desc: 'Разрабатываем структуру каталога и логику покупки' },
              { step: '02', title: 'Дизайн', desc: 'Рисуем удобные карточки товаров и корзину' },
              { step: '03', title: 'Разработка', desc: 'Пишем код, настраиваем фильтры и интеграции' },
              { step: '04', title: 'Запуск', desc: 'Наполняем товарами, тестируем оплату и запускаем' }
            ].map((item, i) => (
              <Reveal key={i} direction="up" delay={i * 100}>
                <div className="relative">
                  <div className="text-6xl font-black text-slate-200 dark:text-slate-800 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 relative z-10 -mt-8">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">Стоимость</h2>

            <div className="rounded-3xl bg-white dark:bg-slate-800/50 border border-cyan-500/30 p-8 md:p-12 shadow-2xl shadow-cyan-500/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl">ВЫБОР КЛИЕНТОВ</div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Интернет-магазин</h3>
              <div className="text-5xl font-black text-cyan-500 mb-8">80 000 ₽</div>

              <ul className="text-left space-y-4 mb-10">
                {[
                  'Индивидуальный дизайн и адаптивность',
                  'Каталог товаров с фильтрами и поиском',
                  'Корзина и оформление заказа',
                  'Подключение онлайн-оплаты (ЮKassa)',
                  'Интеграция с 1С или CRM',
                  'Настройка выгрузки в Яндекс.Маркет',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <CheckIconSmall />
                    {item}
                  </li>
                ))}
              </ul>

              <OpenModalButton
                text="Обсудить проект"
                className="block w-full  cursor-pointer py-4 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:-translate-y-1 hover:shadow-xl transition-all"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-cyan-500 to-sky-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Готовы к запуску продаж?</h2>
            <p className="text-lg md:text-xl text-cyan-50 mb-10 opacity-90">
              Расскажите о ваших товарах, и мы предложим лучшее решение для вашего e-commerce.
            </p>
            <OpenModalButton
              text="Связаться с нами"
              className="inline-block px-10 py-4 cursor-pointer rounded-xl bg-white text-cyan-600 font-bold shadow-lg hover:scale-105 transition-transform"
            />
          </Reveal>
        </div>
      </section>

    </main>
  );
}
