import Reveal from '../elements/Reveal';
import './page.css'
import RevivesSlider from '@/components/slider/RevivesSlider';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonModelForm } from '@/components/buttons/buttons';
export default function Home() {

  return (
      <div className='font-display'>
          <div id="about" className=' bg-white/70 dark:bg-black/95 dark:text-white transition-all '>
            <div className='flex flex-wrap justify-center items-center  gap-8'>
          <Reveal
            direction='left'
            delay={500}
            duration={800}
            className='max-w-full min-w-[300px] max-w-[600px]'
          >
            <Image
              src="/home1.jpg"
              alt="about"
              width={600}
              height={400}
              className="min-w-[300px] max-w-[600px] pt-10 rounded-2xl h-auto object-cover"
            />
          </Reveal>
          <Reveal
            direction='right'
            delay={500}
            duration={800}
          >
          <div className='flex flex-col gap-8 text-center items-center min-w-[300px] max-w-[600px]'>
            <h1 className='text-4xl text-center'>
              <span className='text-5xl px-8' >Наша главная задача - сделать ваш бизнес в интернете уникальным.</span>
            </h1>
            <p className='text-2xl px-4'>
              Для нас нет сложных задач. Мы разрабатываем не просто интернет-ресурсы для бизнеса, а создаем уникальные сайты и порталы, которые максимально удовлетворяют потребности любого, даже самого требовательного, пользователя.
            </p>
            <Link
              href='/detail'
              className="
                inline-block text-center text-white font-black rounded-[5px] cursor-pointer
                px-[3.3em] py-[1em] text-[16px]
                bg-gradient-to-b from-[#4687fc] to-[#3f5efb]
                border-b-2 border-[#4687fc]
                shadow-[rgba(63,94,251,0.2)_0px_40px_29px_0px]
                will-change-transform
                transition-all duration-300

                [transform:perspective(200px)_rotateX(15deg)]
                hover:[transform:perspective(180deg)_rotateX(30deg)_translateY(2px)]
                active:[transform:perspective(170px)_rotateX(36deg)_translateY(5px)]
              "
            >
              Подробнее
            </Link>
            </div>
          </Reveal>
        </div>
        <div id="advantage" className="flex flex-col py-20  bg-white/70 dark:bg-black/95 dark:text-white transition-all">

          <div className="flex flex-col gap-8 justify-center items-center pb-40 text-center">
            <Reveal direction="left" duration={800} delay={400}>
              <h1 className="text-4xl font-bold">
                <span>Превращаем самые невероятные идеи в реальность</span>
              </h1>
            </Reveal>
            <Reveal direction="right" duration={1000} delay={400}>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                <span>Если вы еще не знаете чего хотите, то мы придумаем все за вас!</span>
              </p>
            </Reveal>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10 max-w-7xl mx-auto">

            <Reveal direction="left" duration={800}>
              <div className="p-4 md:p-0">
                <Image
                  src="/home2.jpg"
                  alt="advantage"
                  width={450}
                  height={300}
                  className="rounded-2xl w-full max-w-[450px] h-auto object-cover shadow-lg"
                />
              </div>
            </Reveal>

            <div className="flex-1 min-w-[300px] grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">

              <Reveal direction="up" delay={200}>
                <div className="flex flex-row gap-4">
                  <div className="text-3xl text-slate-400 shrink-0">📄</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Уникальный подход</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Мы подходим к идеям разработки с самых необычных сторон, что позволяет удивлять будущих пользователей.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={400}>
                <div className="flex flex-row gap-4">
                  <div className="text-3xl text-slate-400 shrink-0">💳</div> {/* Иконка */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Монетизация</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Правильный дизайн быстро приводит потенциальных клиентов к покупке, поэтому наша команда уделяет этому самую важную роль.
                    </p>
                  </div>
                </div>
            </Reveal>

              <Reveal direction="up" delay={600}>
                <div className="flex flex-row gap-4">
                  <div className="text-3xl text-slate-400 shrink-0">🛒</div> {/* Иконка */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Повышение функционала</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Разработанные нами проекты всегда готовы к дополнительным расширениям функционала. За счет гибкости разработки, мы в кратчайшие добавим новые модули и решения.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={800}>
                <div className="flex flex-row gap-4">
                  <div className="text-3xl text-slate-400 shrink-0">👥</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Оптимизация процессов</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Весь оборот и отчетность по клиентам будут доступны в специальной системе userBox, которая разработана нашей командой для оптимизации процессов работы с клиентами.
                    </p>
                  </div>
                </div>
              </Reveal>

            </div>
          </div>

        <div className="mt-40 mb-20 flex flex-wrap justify-start items-start gap-10 max-w-7xl mx-auto">
          <div className='flex flex-col items-start gap-8 min-w-[300px] max-w-[600px]'>
            <Reveal direction='left'><h1 className='text-5xl font-bold'> Качественный сайт в разумные сроки</h1></Reveal>
            <Reveal  direction='right'><p className='text-gray-500 text-xl min-w-[400px] max-w-[500px]'>За счёт оптимизации внутренних процессов, многие работы по разработке сайта выполняются параллельно. Это позволяет нам сократить время выкладки сайта, не увеличивая при этом итоговую цену.</p></Reveal>
            <Reveal direction='left'><p className='text-gray-500 text-xl min-w-[400px] max-w-[500px]'>Стоимость разработки сайта считается исходя из необходимого функционала и трудозатрат. При ограниченном бюджете есть возможность упростить некоторые этапы или изменить перечень функционала. </p></Reveal>
              <Reveal direction='down'>
                <Link href='/detail' className="animated-button mt-6">
                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>

                <span className="text">Подробнее</span>

                <span className="circle"></span>

                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
                </Link>
              </Reveal>
          </div>
            <div className='p-4 md:p-0'>
              <Reveal  direction='right'>
                <Image
                  src="/home3.png"
                  alt="idea"
                  width={550}
                  height={400}
                  className="border rounded-2xl object-cover h-auto w-full max-w-[550px]"
                />
              </Reveal>
          </div>
        </div>

      <section className="relative bg-cover bg-center bg-fixed pt-10 bg-no-repeat text-black dark:text-white"
        style={{ backgroundImage: 'url("/navphoto2.jpg")' }}>
          <div className='absolute inset-0 bg-white/90 dark:bg-black/90'></div>
          <div className='relative flex flex-col items-center gap-10 my-10 '>
          <Reveal direction='right'>
          <h1 className='text-5xl fontfont-bold'>
            Хотите узнать, как развить свой бизнес?
                </h1>
          </Reveal>
          <Reveal direction='left'>
          <p className='text-2xl'>
            Свяжитесь с нами и мы расскажем о том, что подойдет именно для вашего бизнеса и какие инструменты мы будем использовать.
                </p>
              </Reveal>
          <Reveal direction='up'>
            <ButtonModelForm/>
          </Reveal>
        </div>
          </section>


      <div id="services" className="relative py-24 px-6 bg-white/70 dark:bg-[#0f0f19] transition-colors duration-300 overflow-hidden">

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
              <div className="text-center mb-20">
                 <Reveal direction='down'>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Услуги
                  </h2>
                 </Reveal>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto mt-6 rounded-full"></div>
            <Reveal direction='up'>
            <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Выберите подходящий тариф. Все проекты разрабатываются с душой и вниманием к деталям.
                  </p>
            </Reveal>
          </div>

          <div className="flex flex-wrap cursor-pointer justify-center items-center gap-8 lg:gap-12">

            <Reveal direction="up" delay={100} duration={600}>
              <Link href='/sites-present/business-card' className="block group">
                <div className="card-premium">
                  <div className="card-premium__shine pointer-events-none"></div>
                  <div className="card-premium__glow pointer-events-none"></div>
                  <div className="card-premium__content">
                    <div className="card-premium__badge">ХИТ</div>
                    <div className="card-premium__image">👥</div>
                    <div className="card-premium__text">
                      <p className="card-premium__title">Сайт-визитка</p>
                      <p className="card-premium__description">1 страница, эксклюзивный дизайн</p>
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
              <Link href='/sites-present/company-website' className="block group">
                <div className="card-premium">
                  <div className="card-premium__shine pointer-events-none"></div>
                  <div className="card-premium__glow pointer-events-none"></div>
                  <div className="card-premium__content">
                    <div className="card-premium__image">👥</div>
                    <div className="card-premium__text">
                      <p className="card-premium__title">Сайт компании</p>
                      <p className="card-premium__description">до 10 страниц, адаптивная верстка</p>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-[24px] blur opacity-40 hover:opacity-70 transition duration-500 pointer-events-none"></div>

                <Link href='/sites-present/shop' className="block group relative">
                  <div className="card-premium relative border-2 border-cyan-400/50 dark:border-cyan-500/50">
                    <div className="card-premium__shine pointer-events-none"></div>
                    <div className="card-premium__glow pointer-events-none"></div>
                    <div className="card-premium__content">
                      <div className="card-premium__badge">Выбор клиентов</div>
                      <div className="card-premium__image">🚀</div>
                      <div className="card-premium__text">
                        <p className="card-premium__title">Магазин</p>
                        <p className="card-premium__description">Маркетинг решения, userBox, интеграции</p>
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
              <Link href='/sites-present/internet-portal' className="block group">
                <div className="card-premium">
                  <div className="card-premium__shine pointer-events-none"></div>
                  <div className="card-premium__glow pointer-events-none"></div>
                  <div className="card-premium__content">
                    <div className="card-premium__image">👥</div>
                    <div className="card-premium__text">
                      <p className="card-premium__title">Интернет-портал</p>
                      <p className="card-premium__description">Полная оптимизация и маркетинг</p>
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
                <RevivesSlider />
          </div>
        </div>
        </div>
    </div>
  </div>
</div>

  );
}
