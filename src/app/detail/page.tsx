import Reveal from '@/elements/Reveal';
import ServicesClient from '@/app/detail/ServiceClient';
import Link from 'next/link';
import RevivesSlider from '@/components/slider/RevivesSlider';
import OpenModalButton from '@/components/OpenModalButton';
export const metadata = {
  title: 'Услуги и тарифы на разработку сайтов | PerSolution',
  description: 'Создаем сайты, которые приносят прибыль. Разработка лендингов, корпоративных сайтов и интернет-магазинов под ключ. Узнайте стоимость и сроки.',
};

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 dark:bg-[#0f0f11] text-slate-900 dark:text-slate-300 transition-colors duration-300">

      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <Reveal direction="up" duration={800}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-500 font-semibold text-sm mb-6 border border-cyan-500/20">
            PerSolution — твой апгрейд в цифровом мире
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
            Создаем сайты, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500">
              которые приносят прибыль
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Хватит быть в тени конкурентов. Мы прокачиваем ваш бизнес до максимума, превращая обычные страницы в мощные машины продаж.
          </p>
        </Reveal>
      </section>
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800">
        <Reveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему выбирают <span className="text-cyan-500">PerSolution</span>?
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal direction="up" delay={100}>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 h-full">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Скорость и буст</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Мы не тянем время. Запускаем проекты в кратчайшие сроки без потери качества. Ваш бизнес начнет работать в сети, пока конкуренты еще верстают макеты.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 h-full">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Только хедшоты</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Мы не делаем «сайты ради сайтов». Наши проекты заточены под конкретные цели: конверсия, продажи, лиды. Каждый элемент работает на ваш результат.
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 h-full">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Гарантия и поддержка</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Не бросаем после сдачи. Поддерживаем, обновляем и защищаем ваш сайт. Вы получаете не просто подрядчика, а надежную команду в вашем тылу.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 bg-white dark:bg-[#14141e]">
        <div className="max-w-4xl mx-auto">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Как проходит работа</h2>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal direction="left" delay={100}>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center shrink-0">1</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Брифинг и прокачка смыслов</h4>
                  <p className="text-slate-600 dark:text-slate-400">Погружаемся в ваш бизнес, изучаем конкурентов и находим то, что выделит вас на фоне остальных.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={200}>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center shrink-0">2</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Дизайн и архитектура</h4>
                  <p className="text-slate-600 dark:text-slate-400">Рисуем интерфейс, который приятно смотреть, и удобно использовать. Собираем логику, которая ведет к покупке.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={300}>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center shrink-0">3</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Разработка и код</h4>
                  <p className="text-slate-600 dark:text-slate-400">Пишем чистый код. Настраиваем скорость загрузки, чтобы сайт летал, а не тормозил на каждом шаге.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={400}>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-cyan-500 text-white font-bold flex items-center justify-center shrink-0">4</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Запуск и прокачка SEO</h4>
                  <p className="text-slate-600 dark:text-slate-400">Выводим сайт в интернет. Настраиваем метрики и начинаем приводить на него целевых клиентов из поиска.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <Reveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
        </Reveal>

        <div className="flex flex-col gap-4">
          <details className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 cursor-pointer">
            <summary className="text-lg font-semibold list-none flex justify-between items-center">
              Сколько времени займет разработка сайта?
              <span className="transition-transform group-open:rotate-180 text-cyan-500">
                <svg fill="none" className="w-5 h-5" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Все зависит от сложности проекта. Лендинг делаем за 2-3 недели, корпоративный сайт — 4-6 недель, а интернет-магазин может занять от 1.5 до 2 месяцев. Мы всегда фиксируем сроки в договоре.
            </p>
          </details>

          <details className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 cursor-pointer">
            <summary className="text-lg font-semibold list-none flex justify-between items-center">
              Что входит в стоимость?
              <span className="transition-transform group-open:rotate-180 text-cyan-500">
                <svg fill="none" className="w-5 h-5" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              В стоимость входят: аналитика ниши, прототипирование, уникальный дизайн, адаптивная верстка (под телефоны и ПК), базовое SEO и техническая поддержка на первый месяц.
            </p>
          </details>

          <details className="group bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 cursor-pointer">
            <summary className="text-lg font-semibold list-none flex justify-between items-center">
              Вы делаете сайты на конструкторах?
              <span className="transition-transform group-open:rotate-180 text-cyan-500">
                <svg fill="none" className="w-5 h-5" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </span>
            </summary>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Нет, мы пишем код с нуля на современных технологиях (React, Next.js). Это дает максимальную скорость загрузки, гибкость и безопасность. Конструкторы (вроде Tilda) мы не используем.
            </p>
          </details>
        </div>
      </section>

      <section className="py-12 px-6 pb-24">
        <div className="max-w-5xl mx-auto text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-10">
          <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-4">Разработка сайтов под ключ в PerSolution</h2>
          <p className="mb-4">
            Если вам нужен надежный сайт для бизнеса, который будет приносить клиентов, то команда PerSolution — это то, что вам нужно. Мы специализируемся на создании коммерческих сайтов, лендингов и интернет-магазинов. Наш подход отличается от работы обычных веб-студий: мы не просто делаем красивую картинку, мы анализируем вашу целевую аудиторию и превращаем посетителей в покупателей.
          </p>
          <p>
            Заказать разработку сайта в PerSolution означает получить современный цифровой продукт, оптимизированный под поисковые системы (SEO) и готовый к масштабированию. Мы гарантируем прозрачные условия работы, фиксированные сроки и полную поддержку после запуска проекта. Создайте свое преимущество в интернете вместе с нами.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
         <ServicesClient />
        <Reveal direction="up">
          <div className="bg-gradient-to-br from-cyan-500 to-sky-600 rounded-3xl p-10 md:p-16 text-white shadow-2xl shadow-cyan-500/20 relative overflow-hidden">

            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-black mb-2">10+</div>
                <div className="text-cyan-100 font-medium text-lg">Успешных запусков</div>
                <p className="text-sm text-cyan-50/80 mt-2">Сайты, которые уже приносят прибыль своим владельцам.</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-black mb-2">3 года</div>
                <div className="text-cyan-100 font-medium text-lg">Опыта в разработке</div>
                <p className="text-sm text-cyan-50/80 mt-2">Оттачиваем мастерство на реальных задачах бизнеса.</p>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-black mb-2">99%</div>
                <div className="text-cyan-100 font-medium text-lg">Довольных клиентов</div>
                <p className="text-sm text-cyan-50/80 mt-2">Потому что мы ценим ваше время и деньги.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-20 px-6 bg-slate-100 dark:bg-[#0a0a0c] border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши гарантии</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal direction="left" delay={100}>
              <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-500 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Фиксированная смета</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Цена, которую мы озвучили на старте, не изменится в процессе. Все дополнительные хотелки — только по вашему согласию.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-500 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Соблюдение сроков</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Мы закладываем время с запасом. Если сроки сорваны по нашей вине — вы получаете скидку или бесплатные доработки.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={300}>
              <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-500 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Пожизненная поддержка</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">После сдачи проекта мы не пропадаем. Поможем с хостингом, доменом и мелкими правками, чтобы сайт жил долго.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={400}>
              <div className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-500 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Прокачка до результата</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Мы не считаем проект завершенным, пока он не начнет приносить вам заявки. Анализируем, улучшаем и доводим до ума.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <Reveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Отзывы наших клиентов</h2>
          <p className="text-center text-slate-500 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            Реальные истории тех, кто уже прокачал свой бизнес с PerSolution.
          </p>
        </Reveal>
        <RevivesSlider/>
      </section>

      <section className="py-20 px-6 bg-white dark:bg-[#14141e] border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto">
          <Reveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Что в итоге получает ваш бизнес?</h2>
              <p className="text-slate-500 dark:text-slate-400">Не просто файлы на диске, а готовый инструмент для заработка.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Reveal direction="right" delay={100}>
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-500 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-medium">Быстрый сайт (Google PageSpeed 90+)</span>
              </div>
            </Reveal>

            <Reveal direction="left" delay={150}>
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-500 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-medium">Адаптив под все устройства</span>
              </div>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-500 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-medium">Настроенная SEO-оптимизация</span>
              </div>
            </Reveal>

            <Reveal direction="left" delay={250}>
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-500 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-medium">Понятная админ-панель</span>
              </div>
            </Reveal>

            <Reveal direction="right" delay={300}>
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-500 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-medium">Интеграция с CRM и мессенджерами</span>
              </div>
            </Reveal>

            <Reveal direction="left" delay={350}>
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-500 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-medium">Исходники и права на владение</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal direction="up">
            <div className="bg-[#0f0f11] dark:bg-[#161618] rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden border border-slate-800 shadow-2xl">


              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-cyan-500/20 blur-[100px] pointer-events-none"></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                  Твой конкурент <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500">
                    уже это делает
                  </span>
                </h2>

                <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                  Пока ты думаешь, кто-то другой забирает твоих клиентов в интернете.
                  Давай обсудим твой проект и прокачаем твой бизнес. Это бесплатно и ни к чему не обязывает.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                  <OpenModalButton
                    text="Обсудить проект"
                    className="w-full cursor-pointer sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 text-white font-bold text-lg shadow-xl shadow-cyan-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
                  />

                  <a href={process.env.NEXT_PUBLIC_TELEGRAM_LINK} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all text-lg">
                    Написать в Telegram
                  </a>
                </div>

                <p className="mt-6 text-sm text-slate-500">
                  Ответим в течение 15 минут в рабочее время.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
