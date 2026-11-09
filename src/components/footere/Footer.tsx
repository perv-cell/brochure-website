'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaTelegram } from "react-icons/fa";
import { validateForm, ValidationErrors } from '@/elements/validators/validator';
import '@/components/footere/footer.css';

function Footer() {
  const [status, setStatus] = useState<'idle' | 'success' | 'loading' | 'error' | 'finish'>('idle');
  const [isClosing, setIsClosing] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [errorMessage, setErrorMessage] = useState('');
  const [year] = useState(() => {
    if (typeof window === 'undefined') return null;
    return new Date().getFullYear();
  });

  const handleCloseSuccess = () => {
    setIsClosing(true);
    setTimeout(() => {
      setStatus('finish');
      setIsClosing(false);
    }, 400);
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidationErrors({});
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: (formData.get('name') as string) || '',
      email: (formData.get('email') as string) || '',
      number: (formData.get('number') as string) || '',
      message: (formData.get('message') as string) || 'Без сообщения',
    };

    const { isValid, errors } = validateForm(data);
    if (!isValid) {
      setValidationErrors(errors);
      setStatus('error');
      setErrorMessage('Пожалуйста, исправьте ошибки в форме.');
    } else {
      setStatus('loading');
      setErrorMessage('');
      try {
        const response = await fetch('/api/sendon/tg', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        const response2 = await fetch('api/sendon/email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify(data)
        })

        const result = await response.json();
        const result2 = await response2.json();

        setTimeout(() => {
          if (response.ok && response2.ok) {
            setStatus('success');
          }
        }, 2000);

        if (response.ok && response2.ok ) {
          setErrorMessage('');
        } else {
          setStatus('error');
          setErrorMessage(result.error || result2.error || 'Что-то пошло не так');
        }
      } catch (error) {
        console.error('Ошибка сети:', error);
        setStatus('error');
        setErrorMessage('Ошибка соединения. Проверьте интернет.');
      }
    }
  };

  return (
    <section
      className="relative bg-cover bg-no-repeat text-black dark:text-white md:bg-fixed"
      style={{ backgroundImage: 'url("/navphoto2.jpg")' }}
    >
      <div className="absolute inset-0 pointer-events-none bg-white/80 dark:bg-black dark:opacity-80" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-wrap justify-between gap-12">

          <div className="flex-1 min-w-[280px]">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Свяжитесь с нами
            </h2>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl"><FaTelegram /></span>
                <a
                  href={process.env.NEXT_PUBLIC_TELEGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition-colors"
                >
                  Наш телеграм
                </a>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <a
                  href={"tel:"+process.env.NEXT_PUBLIC_CONTACT_NUMBER}
                  className="text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition-colors"
                >
                  {process.env.NEXT_PUBLIC_CONTACT_NUMBER}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl">✉️</span>
                <a
                  href="mailto:hello@example.com"
                  className="text-slate-700 dark:text-slate-300 hover:text-cyan-500 transition-colors"
                >
                  {process.env.NEXT_PUBLIC_EMAIL}
                </a>
              </div>
            </div>
          </div>

          {status !== 'finish' && (
            <div className="flex-1 relative min-w-[320px] max-w-[560px]">

              {status === 'success' && (
                <div className={`absolute inset-0 z-30 bg-white/95 dark:bg-[#0f0f11]/95 flex flex-col items-center justify-center rounded-lg
                  ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Заявка отправлена!</h3>
                  <p className="text-slate-500 dark:text-slate-400">Скоро с вами свяжутся</p>
                  <button
                    onClick={handleCloseSuccess}
                    className="
                      group relative inline-flex items-center justify-center gap-2
                      px-8 py-3 mt-4
                      bg-gradient-to-br from-cyan-400 to-sky-500
                      hover:from-cyan-500 hover:to-sky-600
                      text-white font-semibold rounded-xl
                      shadow-lg shadow-cyan-500/30
                      transition-all duration-300 ease-out
                      hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/50
                      active:scale-95 active:translate-y-0
                      cursor-pointer overflow-hidden
                    "
                  >
                    <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-shimmer"></span>
                    <span className="relative z-10">Буду ждать</span>
                    <svg
                      className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              )}

              {status === 'loading' && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/70 dark:bg-black/50 backdrop-blur-md rounded-lg">
                  <div aria-label="Hamster running in a metal wheel" role="img" className="wheel-and-hamster">
                    <div className="wheel"></div>
                    <div className="hamster">
                      <div className="hamster__body">
                        <div className="hamster__head">
                          <div className="hamster__ear"></div>
                          <div className="hamster__eye"></div>
                          <div className="hamster__nose"></div>
                        </div>
                        <div className="hamster__limb hamster__limb--fr"></div>
                        <div className="hamster__limb hamster__limb--fl"></div>
                        <div className="hamster__limb hamster__limb--br"></div>
                        <div className="hamster__limb hamster__limb--bl"></div>
                        <div className="hamster__tail"></div>
                      </div>
                    </div>
                    <div className="spoke"></div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    required
                    className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all
                      ${validationErrors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-600 focus:ring-cyan-500'}`}
                  />
                  {validationErrors.name && (
                    <span className="text-sm text-red-500">{validationErrors.name}</span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Ваша почта"
                    required
                    className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all
                      ${validationErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-600 focus:ring-cyan-500'}`}
                  />
                  {validationErrors.email && (
                    <span className="text-sm text-red-500">{validationErrors.email}</span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Хочу эксклюзивный интернет-магазин..."
                    className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-transparent resize-none transition-all
                      ${validationErrors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 dark:border-slate-600 focus:ring-cyan-500'}`}
                  />
                  {validationErrors.message && (
                    <span className="text-sm text-red-500">{validationErrors.message}</span>
                  )}
                </div>
                <input
                  type="text"
                  name="bot"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {errorMessage && (
                  <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg border border-red-200 dark:border-red-800/50">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="cursor-pointer w-full px-6 py-3 rounded-lg bg-gradient-to-br from-cyan-400 to-sky-500 dark:from-cyan-600 dark:to-sky-700 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Отправка...' : 'Отправить запрос'}
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-sm text-center md:text-left">
            <p className="mb-1">© {year} PerSolution. Все права защищены.</p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              {process.env.NEXT_PUBLIC_LEGAL_STATUS} {process.env.NEXT_PUBLIC_LEGAL_NAME} • ИНН: {process.env.NEXT_PUBLIC_LEGAL_INN}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/privacy-policy" className="hover:text-cyan-500 transition-colors underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">
              Политика конфиденциальности
            </Link>
            <Link href="/privacy-policy#consent" className="hover:text-cyan-500 transition-colors underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">
              Согласие на обработку данных
            </Link>
            <Link href="/offer" className="hover:text-cyan-500 transition-colors underline decoration-slate-300 dark:decoration-slate-700 underline-offset-4">
              Публичная оферта
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
