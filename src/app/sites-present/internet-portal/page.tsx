import { Metadata } from 'next';
import  Reveal  from '@/elements/Reveal';
import OpenModalButton from '@/components/OpenModalButton';
import { CheckIcon, ServerIcon, ShieldIcon, UsersCogIcon, NetworkIcon, LayerIcon, LockIcon, ChartIcon, CheckIconSmall } from '@/components/PortalIcons';

export const metadata: Metadata = {
  title: 'Разработка интернет-порталов и веб-систем | PerSolution',
  description: 'Создание сложных интернет-порталов, B2B-платформ и личных кабинетов. Высокие нагрузки, безопасность, роли пользователей. Стоимость от 150 000 ₽.',
};

export default function InternetPortalPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0f0f19] text-slate-800 dark:text-slate-300">

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-400/10 dark:bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <Reveal direction="up" delay={100}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Интернет-портал <br className="hidden md:block"/> для масштабных задач
            </h1>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
              Сложные веб-системы, B2B-платформы и корпоративные порталы.
              Высокая нагрузка, разграничение прав доступа и безупречная безопасность.
            </p>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <OpenModalButton
                text="Обсудить портал"
                className="px-8 py-4 cursor-pointer rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:-translate-y-1 hover:shadow-xl transition-all w-full sm:w-auto"
              />
              <a href="#pricing" className="px-8 py-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all w-full sm:w-auto">
                Узнать стоимость
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* УНИКАЛЬНЫЙ БЛОК ДЛЯ ПОРТАЛА: Технологичность и безопасность */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-[#14141e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Архитектура уровня Enterprise</h2>
            <p className="text-slate-500 dark:text-slate-400">Мы строим системы, которые готовы к росту и защищены от угроз.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ServerIcon />, title: 'Высокие нагрузки', desc: 'Оптимизация запросов к БД, кэширование и готовность к тысячам пользователей онлайн.' },
              { icon: <ShieldIcon />, title: 'Безопасность', desc: 'Защита от SQL-инъекций, XSS, CSRF. Шифрование данных и безопасная авторизация.' },
              { icon: <UsersCogIcon />, title: 'Роли и доступы', desc: 'Гибкая система прав: администраторы, менеджеры, клиенты. Личные кабинеты.' },
              { icon: <NetworkIcon />, title: 'Внешние API', desc: 'Интеграция с платежными шлюзами, CRM, ERP-системами и сторонними сервисами.' }
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

      {/* МОДУЛЬНОСТЬ И АНАЛИТИКА */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Модульная система и аналитика</h2>
            <p className="text-slate-500 dark:text-slate-400">Легко расширяйте функционал и отслеживайте показатели.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal direction="right" delay={100}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <LayerIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Модульная разработка</h3>
                  <p className="text-slate-600 dark:text-slate-400">Портал собирается из независимых блоков. Легко добавить новый раздел или функцию без переписывания всего сайта.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={200}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <ChartIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Панель аналитики</h3>
                  <p className="text-slate-600 dark:text-slate-400">Административная панель с графиками активности, отчетами по продажам и сбором статистики в реальном времени.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={300}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <LockIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Защищенные платежи</h3>
                  <p className="text-slate-600 dark:text-slate-400">Интеграция с банковскими эквайрингами (ЮKassa, Тинькофф) по стандартам PCI DSS. Безопасность транзакций.</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={400}>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                  <CheckIcon />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">SEO для тысяч страниц</h3>
                  <p className="text-slate-600 dark:text-slate-400">Грамотная ЧПУ-маршрутизация, генерация Sitemap и микроразметка для больших каталогов и баз знаний.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-slate-50 dark:bg-[#14141e]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Этапы создания портала</h2>
            <p className="text-slate-500 dark:text-slate-400">Сложный процесс, разбитый на понятные шаги.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
            {[
              { step: '01', title: 'Аналитика', desc: 'Бизнес-анализ, ТЗ, проектирование БД' },
              { step: '02', title: 'UX/UI', desc: 'Прототипы, пользовательские сценарии, дизайн' },
              { step: '03', title: 'Backend', desc: 'Серверная часть, API, база данных' },
              { step: '04', title: 'Frontend', desc: 'Клиентская часть, интерфейс, интеграции' },
              { step: '05', title: 'Тесты', desc: 'Нагрузочное тестирование, запуск, обучение' }
            ].map((item, i) => (
              <Reveal key={i} direction="up" delay={i * 100}>
                <div className="relative">
                  <div className="text-5xl font-black text-slate-200 dark:text-slate-800 mb-4">{item.step}</div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 relative z-10 -mt-6">{item.title}</h3>
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
              <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl">ENTERPRISE</div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Интернет-портал</h3>
              <div className="text-5xl font-black text-cyan-500 mb-8">от 150 000 ₽</div>

              <ul className="text-left space-y-4 mb-10">
                {[
                  'Проектирование архитектуры и БД',
                  'Личные кабинеты с разными ролями',
                  'Система управления контентом (CMS)',
                  'Интеграция с внешними системами (1С, CRM, API)',
                  'Нагрузочное тестирование',
                  'Базовая защита и SSL-сертификат',
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Готовы к цифровой трансформации?</h2>
            <p className="text-lg md:text-xl text-cyan-50 mb-10 opacity-90">
              Обсудим ваш проект и предложим архитектуру, которая решит задачи вашего бизнеса.
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
