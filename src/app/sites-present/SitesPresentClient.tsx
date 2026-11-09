'use client';

import Link from 'next/link';
import Reveal from '@/elements/Reveal';

const sitesData = [
  {
    id: 'business-card',
    title: 'Сайт-визитка',
    subtitle: 'Быстрый старт',
    desc: 'Идеален для фрилансеров, специалистов и небольших услуг. Коротко о вас, ваших преимуществах и кнопка для связи.',
    icon: '🚀',
    price: 'от 10 000 ₽',
    features: ['1 страница', 'Быстрая загрузка', 'Адаптивность']
  },
  {
    id: 'company-website',
    title: 'Сайт компании',
    subtitle: 'Солидный образ',
    desc: 'Представительство бренда в сети. Показывает масштаб, рассказывает об услугах и формирует доверие клиентов.',
    icon: '🛡️',
    price: 'от 20 000 ₽',
    features: ['До 10 страниц', 'Каталог услуг', 'Форма связи']
  },
  {
    id: 'shop',
    title: 'Интернет-магазин',
    subtitle: 'Прямые продажи',
    desc: 'Полноценный e-commerce. С каталогом товаров, корзиной, онлайн-оплатой и личным кабинетом покупателя.',
    icon: '💰',
    price: 'от 80 000 ₽',
    features: ['Корзина', 'Оплата онлайн', 'Интеграция CRM'],
    isPopular: true
  },
  {
    id: 'internet-portal',
    title: 'Интернет-портал',
    subtitle: 'Сложные системы',
    desc: 'Для крупных компаний и медиа. Личные кабинеты, базы данных, высокая нагрузка и сложная бизнес-логика.',
    icon: '🏰',
    price: 'от 150 000 ₽',
    features: ['Личные кабинеты', 'База данных', 'Высокая нагрузка']
  }
];

export default function SitesPresentClient() {
  return (
    <section className="py-10 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sitesData.map((site, index) => (
          <Reveal key={site.id} direction="up" delay={index * 100} duration={600}>
            <Link
              href={`/sites-present/${site.id}`}
              className={`group block relative h-full p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
                ${site.isPopular
                  ? 'bg-slate-900 dark:bg-[#161618] text-white border-2 border-cyan-500 shadow-xl shadow-cyan-500/20'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
                }
              `}
            >
              {site.isPopular && (
                <div className="absolute -top-4 right-8 px-4 py-1 bg-gradient-to-r from-cyan-400 to-sky-500 text-white text-sm font-bold rounded-full">
                  Хит продаж
                </div>
              )}

              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-sm font-bold tracking-wider uppercase mb-2 text-cyan-500">
                    {site.subtitle}
                  </div>
                  <h3 className={`text-3xl font-bold ${site.isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {site.title}
                  </h3>
                </div>
                <div className="text-5xl opacity-80 group-hover:scale-110 transition-transform">
                  {site.icon}
                </div>
              </div>

              <p className={`mb-8 ${site.isPopular ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
                {site.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {site.features.map(feature => (
                  <span key={feature} className={`text-xs px-3 py-1 rounded-full font-medium
                    ${site.isPopular
                      ? 'bg-white/10 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}>
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-opacity-20 border-current">
                <div className="text-2xl font-bold">
                  {site.price}
                </div>
                <div className="flex items-center gap-2 font-semibold text-cyan-500 group-hover:gap-3 transition-all">
                  Подробнее
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal direction="up" delay={400}>
        <div className="mt-20 text-center bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold mb-4">Не знаете, что выбрать?</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto">
            Оставьте заявку, и мы бесплатно проконсультируем вас, исходя из ваших задач и бюджета.
          </p>
          <Link
            href="/services#contact"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 transition-all"
          >
            Получить консультацию
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
