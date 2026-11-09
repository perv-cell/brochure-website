'use client'
import { useState } from "react";
import Reveal from "@/elements/Reveal";
import Typewriter from "@/elements/Typewriter";

export default function RevivesSlider() {
  const reviewsData = [
    {
      id: 1,
      name: 'Анна Смирнова',
      role: 'Владелец кофейни «Утро»',
      text: 'Заказывали сайт-визитку с меню и картой. Сделали очень быстро, за 5 дней! Очень понравилось, что дизайн подстроили под наши фирменные цвета. Теперь гости часто заходят с сайта.',
      img: 'https://i.pravatar.cc/150?img=32'
    },
    {
      id: 2,
      name: 'Дмитрий Козлов',
      role: 'Частный мастер по ремонту',
      text: 'Мне нужна была простая страничка с портфолио и кнопкой для связи в WhatsApp. Сделали всё четко. Цена адекватная, объяснили, как потом самому менять фото работ.',
      img: 'https://i.pravatar.cc/150?img=11'
    },
    {
      id: 3,
      name: 'Елена Морозова',
      role: 'Основатель студии маникюра',
      text: 'Хотела уйти от инстаграма* и сделать свой сайт с записью онлайн. Ребята реализовали интеграцию с календарем. Клиенты пишут, что записываться так стало намного удобнее!',
      img: 'https://i.pravatar.cc/150?img=47'
    },
    {
      id: 4,
      name: 'Максим Иванов',
      role: 'Владелец магазина автозапчастей',
      text: 'Заказывал интернет-магазин. Сначала боялся, что будет сложно разобраться в управлении. Но админка оказалась понятной, даже мой менеджер разобрался без инструкций. Спасибо!',
      img: 'https://i.pravatar.cc/150?img=12'
    },
    {
      id: 5,
      name: 'Ольга Петрова',
      role: 'Фотограф',
      text: 'Сделали красивый сайт-портфолио. Очень понравилось, как аккуратно оформили галерею — фотографии грузятся быстро, качество не теряется. Коллеги уже спрашивают, кто делал.',
      img: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 6,
      name: 'Сергей Волков',
      role: 'Директор пекарни «Хлебное место»',
      text: 'Обновляли старый сайт. Ребята перенесли всё на новый движок, ничего не потерялось. Сайт стал гораздо быстрее работать. Отдельное спасибо за терпение к нашим правкам!',
      img: 'https://i.pravatar.cc/150?img=13'
    },
    {
      id: 7,
      name: 'Наталья Соколова',
      role: 'Организатор праздников',
      text: 'Обратилась за лендингом под рекламу. Заявки пошли уже на второй день после запуска. Всё сделали в срок, перед сдачей провели тесты на телефонах. Очень довольна результатом.',
      img: 'https://i.pravatar.cc/150?img=9'
    },
    {
      id: 8,
      name: 'Павел Новиков',
      role: 'Владелец автосервиса',
      text: 'Понравилось, что не навязывали лишних услуг. Сказал бюджет — сделали ровно то, что нужно было за эти деньги. Сайт работает, клиенты звонят. Буду обращаться ещё.',
      img: 'https://i.pravatar.cc/150?img=15'
    },
    {
      id: 9,
      name: 'Ирина Кузнецова',
      role: 'Руководитель детского центра',
      text: 'Делали сайт для нашего клуба. Очень помогли с текстами — сами мы не могли нормально описать занятия. Родители хвалят, что теперь вся информация собрана в одном месте.',
      img: 'https://i.pravatar.cc/150?img=20'
    },
    {
      id: 10,
      name: 'Алексей Семенов',
      role: 'Владелец доставки еды',
      text: 'Сайт нужен был срочно, к открытию. Уложились в очень жесткие сроки, работали даже в выходные. Сейчас доставка работает через сайт, все стабильно. Рекомендую!',
      img: 'https://i.pravatar.cc/150?img=59'
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  const nextSlide = () => {
    if (currentIndex < reviewsData.length - reviewsPerPage) {
      setCurrentIndex(currentIndex + 2);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 2);
    }
  };

  const typewrites = ["Более 10 компаний доверили нам свой бизнес в интернете.","Мы гордимся тем, что клиенты возвращаются к нам с новыми проектами.","Мы не просто делаем сайты, мы создаем инструменты, которым доверяют." ]
  return (
    <div id="reviews" className="relative py-24 px-6 bg-slate-50 dark:bg-[#14141e] transition-colors duration-300 overflow-hidden">

      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-400/5 dark:bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">

          <Reveal direction="down" duration={800}>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Отзывы
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-sky-500 mx-auto mt-6 rounded-full"></div>
          </Reveal>

          <Reveal direction="up" delay={200} duration={800}>
            <div className="mt-10 min-h-[60px] flex items-center justify-center">
              <Typewriter
                className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto"
                texts={typewrites}
                typingSpeed={60}
                deletingSpeed={20}
                pauseDuration={3500}
              />
            </div>
          </Reveal>

        </div>

        <div className="relative">

          <div className="overflow-hidden px-4 -mx-4 py-8">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-8"
              style={{ transform: `translateX(-${currentIndex * (100 / reviewsPerPage)}%)` }}
            >
              {reviewsData.map((review) => (
                <div
                  key={review.id}
                  className="w-full md:w-[calc(33.333%-21px)] shrink-0"
                >
                  <div className="group relative flex flex-col justify-between h-full p-8 rounded-2xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 hover:border-cyan-400/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 min-h-[320px]">

                    <div className="absolute top-6 right-6 text-6xl text-slate-200 dark:text-slate-700/50 font-serif leading-none opacity-50 group-hover:text-cyan-400/20 transition-colors">"</div>

                    <div className="relative z-10">
                      <div className="flex gap-1 text-amber-400 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        ))}
                      </div>

                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                        "{review.text}"
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/30" />
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">{review.name}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-12 h-12 cursor-pointer flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            <div className="flex gap-2">
              {[...Array(reviewsData.length - reviewsPerPage + 1)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 cursor-pointer rounded-full transition-colors ${currentIndex === idx ? 'bg-cyan-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= reviewsData.length - reviewsPerPage}
              className="w-12 h-12 cursor-pointer flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-cyan-500 hover:border-cyan-500 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
