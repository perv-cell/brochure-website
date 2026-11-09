import { Metadata } from 'next';
import  Reveal  from '@/elements/Reveal';
import ScrollToContact from '@/components/ScrollToContact';
import { CheckIcon, CodeIcon, MobileIcon, RocketIcon, SearchIcon, CheckIconSmall } from '@/components/LandingIcons';
import OpenModalButton from '@/components/OpenModalButton'
export const metadata: Metadata = {
  title: 'Заказать сайт-визитку под ключ | PerSolution',
  description: 'Разработка современных сайтов-визиток для экспертов и бизнеса. Уникальный дизайн, адаптивность, SEO-настройка. Стоимость от 10 000 ₽.',
};

export default function BusinessCardPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0f0f19] text-slate-800 dark:text-slate-300">

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-400/10 dark:bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <Reveal direction="up" delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Сайт-визитка, <br className="hidden md:block"/> который работает за вас
            </h1>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
              Идеальное решение для экспертов, фрилансеров и небольших компаний.
              Расскажите о себе красиво, получайте заявки и экономьте бюджет.
            </p>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ScrollToContact />
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Кому нужен сайт-визитка?</h2>
            <p className="text-slate-500 dark:text-slate-400">Если вы узнали себя в одном из пунктов — вам точно к нам.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Фрилансерам и экспертам', desc: 'Фотографам, дизайнерам, репетиторам. Нужно портфолио для соцсетей.' },
              { title: 'Начинающим бизнесменам', desc: 'Нужно заявить о себе в интернете без огромных бюджетов.' },
              { title: 'Специалистам (B2B)', desc: 'Юристам, бухгалтерам, врачам. Чтобы клиенты могли найти вас.' }
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Что входит в сайт-визитку?</h2>
            <p className="text-slate-500 dark:text-slate-400">Мы делаем всё под ключ, вам не нужно ни о чем думать.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal direction="right" delay={100}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <CodeIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Уникальный дизайн</h3>
                  <p className="text-slate-600 dark:text-slate-400">Никаких шаблонов. Мы рисуем дизайн под ваш бренд, стиль и сферу деятельности.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={100}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <MobileIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Адаптивная верстка</h3>
                  <p className="text-slate-600 dark:text-slate-400">Сайт идеально выглядит на компьютерах, планшетах и смартфонах.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <RocketIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Высокая скорость</h3>
                  <p className="text-slate-600 dark:text-slate-400">Сайт грузится моментально. Это важно для удержания клиентов.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={200}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <SearchIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">SEO-оптимизация</h3>
                  <p className="text-slate-600 dark:text-slate-400">Настраиваем базовое SEO, чтобы вас находили в поиске.</p>
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
            <p className="text-slate-500 dark:text-slate-400">Прозрачный процесс от идеи до запуска.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { step: '01', title: 'Брифинг', desc: 'Обсуждаем ваши цели, пожелания и собираем материалы' },
              { step: '02', title: 'Прототип', desc: 'Согласовываем структуру сайта и расположение блоков' },
              { step: '03', title: 'Дизайн', desc: 'Рисуем визуальный стиль, утверждаем цвета и шрифты' },
              { step: '04', title: 'Запуск', desc: 'Верстаем, программируем, наполняем и переносим на хостинг' }
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
              <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl">ХИТ ПРОДАЖ</div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Сайт-визитка под ключ</h3>
              <div className="text-5xl font-black text-cyan-500 mb-8">10 000 ₽</div>

              <ul className="text-left space-y-4 mb-10">
                {[
                  'Уникальный дизайн (1 страница)',
                  'Адаптивность под все устройства',
                  'Настройка формы обратной связи',
                  'Базовое SEO и подключение аналитики',
                  'Домен и хостинг (помощь в настройке)',
                  'Обучение работе с сайтом',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <CheckIconSmall />
                    {item}
                  </li>
                ))}
              </ul>

              <a href="/#footer" className="block w-full py-4 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:-translate-y-1 hover:shadow-xl transition-all">
                Обсудить проект
              </a>
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
