'use client';

import Reveal from '@/elements/Reveal';
import Link from 'next/link';

export default function ServicesClient() {
  return (
    <>
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Выбирай свой уровень</h2>
            <p className="text-center text-slate-500 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
              Прозрачные тарифы. Никаких скрытых квестов или платных DLC. Только чистый результат.
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">

            <Reveal direction="up" delay={100} duration={600}>
              <Link href="/sites-present/business-card" className="block group cursor-pointer">
                <div className="card-premium">
                  <div className="card-premium__shine pointer-events-none"></div>
                  <div className="card-premium__glow pointer-events-none"></div>
                  <div className="card-premium__content">
                    <div className="card-premium__badge">Стартовый буст</div>
                    <div className="card-premium__image">🚀</div>
                    <div className="card-premium__text">
                      <p className="card-premium__title">Сайт-визитка</p>
                      <p className="card-premium__description">Быстрый старт для тех, кто только выходит на арену.</p>
                    </div>
                    <div className="card-premium__footer">
                      <div className="card-premium__price">10 000 ₽</div>
                      <div className="card-premium__button">
                        <svg height="16" width="16" viewBox="0 0 24 24">
                          <path strokeWidth="2" stroke="currentColor" d="M4 12H20M12 4V20" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

            <Reveal direction="up" delay={200} duration={600}>
              <Link href="/sites-present/company-website" className="block group cursor-pointer">
                <div className="card-premium">
                  <div className="card-premium__shine pointer-events-none"></div>
                  <div className="card-premium__glow pointer-events-none"></div>
                  <div className="card-premium__content">
                    <div className="card-premium__image">🛡️</div>
                    <div className="card-premium__text">
                      <p className="card-premium__title">Сайт компании</p>
                      <p className="card-premium__description">Прокачка вашего представительства в сети до уровня Pro.</p>
                    </div>
                    <div className="card-premium__footer">
                      <div className="card-premium__price">20 000 ₽</div>
                      <div className="card-premium__button">
                        <svg height="16" width="16" viewBox="0 0 24 24">
                          <path strokeWidth="2" stroke="currentColor" d="M4 12H20M12 4V20" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

            <Reveal direction="up" delay={300} duration={600}>
              <div className="relative lg:scale-110 z-20">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-[24px] blur opacity-40 group-hover:opacity-70 transition duration-500 pointer-events-none"></div>

                <Link href="/sites-present/shop" className="block group relative cursor-pointer">
                  <div className="card-premium relative border-2 border-cyan-400/50 dark:border-cyan-500/50">
                    <div className="card-premium__shine pointer-events-none"></div>
                    <div className="card-premium__glow pointer-events-none"></div>
                    <div className="card-premium__content">
                      <div className="card-premium__badge">Meta Tier</div>
                      <div className="card-premium__image">💰</div>
                      <div className="card-premium__text">
                        <p className="card-premium__title">Магазин</p>
                        <p className="card-premium__description">Полная монетизация. Превращаем посетителей в фанатов.</p>
                      </div>
                      <div className="card-premium__footer">
                        <div className="card-premium__price">80 000 ₽</div>
                        <div className="card-premium__button bg-gradient-to-br from-cyan-400 to-sky-500">
                          <svg height="16" width="16" viewBox="0 0 24 24">
                            <path strokeWidth="2" stroke="currentColor" d="M4 12H20M12 4V20" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Reveal>

            <Reveal direction="up" delay={400} duration={600}>
              <Link href="/sites-present/internet-portal" className="block group cursor-pointer">
                <div className="card-premium">
                  <div className="card-premium__shine pointer-events-none"></div>
                  <div className="card-premium__glow pointer-events-none"></div>
                  <div className="card-premium__content">
                    <div className="card-premium__image">🏰</div>
                    <div className="card-premium__text">
                      <p className="card-premium__title">Интернет-портал</p>
                      <p className="card-premium__description">Финальный босс для крупных компаний и масштабных идей.</p>
                    </div>
                    <div className="card-premium__footer">
                      <div className="card-premium__price">150 000 ₽</div>
                      <div className="card-premium__button">
                        <svg height="16" width="16" viewBox="0 0 24 24">
                          <path strokeWidth="2" stroke="currentColor" d="M4 12H20M12 4V20" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  );
}
