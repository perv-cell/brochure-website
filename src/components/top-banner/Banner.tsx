'use client';
import { useState } from 'react';
import Reveal from '@/elements/Reveal';
import Typewriter from '@/elements/Typewriter';



function Banner() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitForm = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === 'loading') return;

    const form = e.currentTarget;

    setStatus('loading');
    setErrorMessage('');

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: (formData.get('message') as string) || 'Без сообщения'
    };

    try {
      const response = await fetch('/api/sendon/tg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');

        // Очищаем форму ТОЛЬКО через 5 секунд, когда уберем экран успеха
        setTimeout(() => {
          form.reset(); // Очищаем поля
          setStatus('idle'); // Возвращаем кнопку в исходное состояние
        }, 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Что-то пошло не так');
      }
    } catch (error) {
      console.error('Ошибка сети:', error);
      setStatus('error');
      setErrorMessage('Ошибка соединения. Проверьте интернет.');
    }
  };

  const typewriterTexts = [
    "Создаем не просто сайты, а работающие инструменты. Доверьте нам идею, и мы воплотим ее в качественный продукт.",
    "Берем на себя все технические вопросы. Гарантируем прозрачную разработку и надежную поддержку после запуска.",
    "Превращаем смелые идеи в удобные интернет-ресурсы. Создаем сайты, которые привлекают клиентов и запоминаются."
  ];

  return (
    <section id="banner" className="relative bg-cover bg-center bg-fixed pt-10 bg-no-repeat text-black dark:text-white"
      style={{ backgroundImage: 'url("/navphoto2.jpg")' }}>

      <div className="absolute inset-0 bg-white/80 pointer-events-none dark:bg-black dark:opacity-80"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-8">
        <div className="flex flex-wrap justify-center pb-10 gap-10 text-slate-900 dark:text-white">

          <div className="relative cursor-text select-text flex-1 min-w-[300px] max-w-[600px] mr-3.5">
            <Reveal direction="left" duration={1000} delay={300} className="min-w-[300px] max-w-[600px]">
              <div className="mx-3.5 glow-white-strong dark:glow-purple-strong">
                <h1 className="text-4xl font-bold md:text-5xl leading-tight tracking-tight mb-8">
                  Разработка сайтов любой сложности
                </h1>
                <Typewriter
                  texts={typewriterTexts}
                  className='text-2xl font-bold leading-relaxed mb-8'
                  typingSpeed={50}
                  deletingSpeed={20}
                  pauseDuration={3000}
                />
              </div>
            </Reveal>
          </div>

          <Reveal duration={1000} direction="down" delay={300} className="flex-1 min-w-[300px] max-w-[600px]">
            <div className="flex-1 min-w-[300px] rounded-xl bg-slate-100 dark:bg-slate-800 mr-4 ml-4 p-6 md:p-8 relative">

              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-6">
                Свяжитесь со мной
              </h2>

              {status === 'success' && (
                <div className="absolute inset-0 z-20 bg-slate-100 dark:bg-slate-800 rounded-xl flex flex-col items-center justify-center p-6 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Заявка отправлена!</h3>
                  <p className="text-slate-500 dark:text-slate-400">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              )}

              <form onSubmit={handleSubmitForm} className="flex flex-col gap-3">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Имя
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Иван Иванов"
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="ivan@example.com"
                    required
                    disabled={status === 'loading'}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full px-6 mt-2 py-3 cursor-pointer rounded-lg text-white font-semibold shadow-lg transition-all flex justify-center items-center gap-2
                    ${status === 'loading'
                      ? 'bg-slate-400 dark:bg-slate-600 cursor-not-allowed'
                      : 'bg-gradient-to-br from-cyan-400 to-sky-500 dark:from-cyan-600 dark:to-sky-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/50'
                    }`}
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Отправка...
                    </>
                  ) : (
                    'Отправить'
                  )}
                </button>


                {status === 'error' && (
                  <div className="p-2 bg-red-100 text-red-700 rounded-lg text-sm text-center">
                    {errorMessage}
                  </div>
                )}

                <div className="mt-4 flex items-start gap-2 justify-center px-2">
                  <svg className="cursor-pointer w-4 h-4 text-cyan-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                  <span className="text-sm text-slate-500 dark:text-slate-400 text-left leading-relaxed max-w-[400px]">
                    Нажимая кнопку Отправить, вы соглашаетесь с{' '}
                    <a href="/privacy" className="underline hover:text-cyan-500 transition-colors">политикой конфиденциальности</a>.
                  </span>
                </div>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

export default Banner;
