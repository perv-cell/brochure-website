import SitesPresentClient from './SitesPresentClient';
import Reveal from '@/elements/Reveal';

export const metadata = {
  title: 'Виды сайтов: от визитки до портала | PerSolution',
  description: 'Разбираем 4 типа сайтов: визитки, корпоративные сайты, интернет-магазины и порталы. Какой подойдет вашему бизнесу?',
};

export default function SitesPresentPage() {
  return (
    <main className="bg-slate-50 dark:bg-[#0f0f11] text-slate-900 dark:text-slate-300 transition-colors duration-300">

      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <Reveal direction="up" duration={800}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-500 font-semibold text-sm mb-6 border border-cyan-500/20">
            Выбери свой формат
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
            Какой сайт нужен <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500">
              именно вам?
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Не все сайты одинаковы. Ознакомьтесь с форматами, чтобы понять, какой инструмент принесет максимальную пользу вашему бизнесу.
          </p>
        </Reveal>
      </section>

      <SitesPresentClient />

      <section className="py-12 px-6 pb-24">
        <div className="max-w-4xl mx-auto text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-10">
          <h2 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-4">Как выбрать тип сайта для бизнеса?</h2>
          <p>
            Выбор зависит от ваших целей. Если вам нужно просто рассказать о себе и дать контакты — подойдет сайт-визитка. Для солидного представительства компании с описанием услуг нужен корпоративный сайт. Если вы планируете продавать товары онлайн — вам нужен интернет-магазин. А для масштабных проектов с личными кабинетами, базами данных и сложной логикой создаются интернет-порталы. В PerSolution мы поможем подобрать оптимальное решение под ваш бюджет и задачи.
          </p>
        </div>
      </section>

    </main>
  );
}
