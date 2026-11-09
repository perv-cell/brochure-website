import { Metadata } from 'next';
import  Reveal  from '@/elements/Reveal';
import OpenModalButton from '@/components/OpenModalButton';
import { CheckIcon, BuildingIcon, ChartIcon, CogsIcon, UsersIcon, CheckIconSmall } from '@/components/CompanyIcons';

export const metadata: Metadata = {
  title: 'Заказать корпоративный сайт компании | PerSolution',
  description: 'Разработка корпоративных сайтов для бизнеса. Многостраничность, интеграция с CRM, защита данных, корпоративный стиль. Стоимость от 20 000 ₽.',
};

export default function CompanyWebsitePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0f0f19] text-slate-800 dark:text-slate-300">

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-400/10 dark:bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <Reveal direction="up" delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Корпоративный сайт <br className="hidden md:block"/> для серьезного бизнеса
            </h1>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
              Представьте свою компанию в лучшем свете. Многостраничный сайт с каталогом услуг,
              историей компании, командой и интеграцией с CRM для отдела продаж.
            </p>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <OpenModalButton
                text="Заказать сайт"
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Почему компаниям нужен свой сайт?</h2>
            <p className="text-slate-500 dark:text-slate-400">Сайт — это ваш главный цифровой офис, который работает 24/7.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Доверие клиентов', desc: 'Солидный сайт повышает доверие к компании и выделяет вас среди конкурентов.' },
              { title: 'Презентация услуг', desc: 'Подробно расскажите о продуктах, ценах и преимуществах вашей компании.' },
              { title: 'Сбор заявок', desc: 'Интеграция с CRM позволяет получать и обрабатывать лиды напрямую с сайта.' }
            ].map((item, i) => (
              <Reveal key={i} direction="up" delay={i * 100}>
                <div className="p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 h-full">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-6">
                    <CheckIcon />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Что входит в корпоративный сайт?</h2>
            <p className="text-slate-500 dark:text-slate-400">Полноценный инструмент для привлечения и удержания клиентов.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal direction="right" delay={100}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <BuildingIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Многостраничность</h3>
                  <p className="text-slate-600 dark:text-slate-400">Главная, О компании, Услуги, Проекты, Блог, Контакты — всё для полноценного представления.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={100}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <UsersIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Стиль бренда</h3>
                  <p className="text-slate-600 dark:text-slate-400">Используем ваш логотип, фирменные цвета и шрифты для создания узнаваемого образа.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <ChartIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Интеграция с CRM</h3>
                  <p className="text-slate-600 dark:text-slate-400">Подключим amoCRM, Bitrix24 или другую систему, чтобы ни одна заявка не потерялась.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={200}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <CogsIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Удобная админка</h3>
                  <p className="text-slate-600 dark:text-slate-400">Сможете сами менять тексты, добавлять вакансии и новости без программиста.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50 dark:bg-[#14141e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Как мы работаем</h2>
            <p className="text-slate-500 dark:text-slate-400">Процесс создания корпоративного сайта.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { step: '01', title: 'Анализ', desc: 'Изучаем вашу сферу, конкурентов и целевую аудиторию' },
              { step: '02', title: 'Прототип', desc: 'Создаем структуру всех страниц и логику переходов' },
              { step: '03', title: 'Дизайн', desc: 'Разрабатываем визуальный стиль и утверждаем макеты' },
              { step: '04', title: 'Разработка', desc: 'Верстаем, программируем и наполняем контентом' }
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
              <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl">ОПТИМАЛЬНО</div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Корпоративный сайт</h3>
              <div className="text-5xl font-black text-cyan-500 mb-8">20 000 ₽</div>

              <ul className="text-left space-y-4 mb-10">
                {[
                  'Индивидуальный дизайн (до 5-7 страниц)',
                  'Адаптивность под все устройства',
                  'Форма обратной связи и карта',
                  'Базовое SEO (мета-теги, структура)',
                  'Установка на хостинг и настройка домена',
                  'Обучение работе с админкой',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <CheckIconSmall />
                    {item}
                  </li>
                ))}
              </ul>

              <OpenModalButton
                text="Обсудить проект"
                className="block w-full cursor-pointer py-4 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:-translate-y-1 hover:shadow-xl transition-all"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-cyan-500 to-sky-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ваш бизнес заслуживает лучшего</h2>
            <p className="text-lg md:text-xl text-cyan-50 mb-10 opacity-90">
              Давайте обсудим ваш проект. Оставьте заявку, и мы предложим решение под ваши задачи.
            </p>
            <OpenModalButton
              text="Связаться с нами"
              className="inline-block cursor-pointer px-10 py-4 rounded-xl bg-white text-cyan-600 font-bold shadow-lg hover:scale-105 transition-transform"
            />
          </Reveal>
        </div>
      </section>

    </main>
  );
}
