'use client';
import Link from 'next/link';
import '@/components/modelform/modelForm.css';
import { useState, useEffect } from 'react';
import { validateForm, ValidationErrors } from '@/elements/validators/validator'
import { createPortal } from 'react-dom';

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalForm({ isOpen, onClose }: ModalFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState<ValidationErrors>({});


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;


  const handleClickBid = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'loading') return;
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
      setFormErrors(errors);
      setStatus('error');
      setErrorMessage('Пожалуйста, исправьте ошибки в форме.');
      return;
    }
    setFormErrors({});
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
        if (response.ok && result2.ok) {
          setStatus("success")
        }
      },2000)

      if (response.ok) {
        setTimeout(() => {
          form.reset();
          setStatus('idle');
          onClose();
        }, 6000);
      } else {
        setStatus('error');
        setErrorMessage(result.error || result2.error || 'Что-то пошло не так');
      }
    } catch (error) {
      console.error('Ошибка сети:', error);
      setStatus('error');
      setErrorMessage('Ошибка соединения. Проверьте интернет.');
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

      <div
        className="absolute inset-0 bg-white/60 dark:bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />


      <div className="relative w-full max-w-[500px] min-h-[600px] max-h-[90vh] bg-white dark:bg-[#0f0f11] p-8 md:p-12 shadow-2xl animate-slide-in flex flex-col overflow-y-auto">

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 cursor-pointer hover:text-black dark:hover:text-white transition-colors z-50"
          aria-label="Закрыть"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-10">Отправить заявку</h2>


        {status === 'loading' && (
          <div className="absolute inset-0 z-30 bg-white/90 dark:bg-[#0f0f11]/90 flex flex-col items-center justify-center rounded-lg">
            <svg
              aria-label="loader"
              role="img"
              height="80px"
              width="80px"
              viewBox="0 0 56 56"
              className="loader"
            >

              <clipPath id="sand-mound-top">
                <path d="M 14.613 13.087 C 15.814 12.059 19.3 8.039 20.3 6.539 C 21.5 4.789 21.5 2.039 21.5 2.039 L 3 2.039 C 3 2.039 3 4.789 4.2 6.539 C 5.2 8.039 8.686 12.059 9.887 13.087 C 11 14.039 12.25 14.039 12.25 14.039 C 12.25 14.039 13.5 14.039 14.613 13.087 Z" className="loader__sand-mound-top" />
              </clipPath>
              <clipPath id="sand-mound-bottom">
                <path d="M 14.613 20.452 C 15.814 21.48 19.3 25.5 20.3 27 C 21.5 28.75 21.5 31.5 21.5 31.5 L 3 31.5 C 3 31.5 3 28.75 4.2 27 C 5.2 25.5 8.686 21.48 9.887 20.452 C 11 19.5 12.25 19.5 12.25 19.5 C 12.25 19.5 13.5 19.5 14.613 20.452 Z" className="loader__sand-mound-bottom" />
              </clipPath>
              <g transform="translate(2,2)">
                <g transform="rotate(-90,26,26)" strokeLinecap="round" strokeDashoffset="153.94" strokeDasharray="153.94 153.94" stroke="hsl(0,0%,100%)" fill="none">
                  <circle transform="rotate(0,26,26)" r="24.5" cy="26" cx="26" strokeWidth="2.5" className="loader__motion-thick" />
                  <circle transform="rotate(90,26,26)" r="24.5" cy="26" cx="26" strokeWidth="1.75" className="loader__motion-medium" />
                  <circle transform="rotate(180,26,26)" r="24.5" cy="26" cx="26" strokeWidth="1" className="loader__motion-thin" />
                </g>
                <g transform="translate(13.75,9.25)" className="loader__model">
                  <path d="M 1.5 2 L 23 2 C 23 2 22.5 8.5 19 12 C 16 15.5 13.5 13.5 13.5 16.75 C 13.5 20 16 18 19 21.5 C 22.5 25 23 31.5 23 31.5 L 1.5 31.5 C 1.5 31.5 2 25 5.5 21.5 C 8.5 18 11 20 11 16.75 C 11 13.5 8.5 15.5 5.5 12 C 2 8.5 1.5 2 1.5 2 Z" fill="hsl(var(--hue),90%,85%)" />
                  <g strokeLinecap="round" stroke="hsl(35,90%,90%)">
                    <line y2="20.75" x2="12" y1="15.75" x1="12" strokeDasharray="0.25 33.75" strokeWidth="1" className="loader__sand-grain-left" />
                    <line y2="21.75" x2="12.5" y1="16.75" x1="12.5" strokeDasharray="0.25 33.75" strokeWidth="1" className="loader__sand-grain-right" />
                    <line y2="31.5" x2="12.25" y1="18" x1="12.25" strokeDasharray="0.5 107.5" strokeWidth="1" className="loader__sand-drop" />
                    <line y2="31.5" x2="12.25" y1="14.75" x1="12.25" strokeDasharray="54 54" strokeWidth="1.5" className="loader__sand-fill" />
                    <line y2="31.5" x2="12" y1="16" x1="12" strokeDasharray="1 107" strokeWidth="1" stroke="hsl(35,90%,83%)" className="loader__sand-line-left" />
                    <line y2="31.5" x2="12.5" y1="16" x1="12.5" strokeDasharray="12 96" strokeWidth="1" stroke="hsl(35,90%,83%)" className="loader__sand-line-right" />
                    <g strokeWidth="0" fill="hsl(35,90%,90%)">
                      <path d="M 12.25 15 L 15.392 13.486 C 21.737 11.168 22.5 2 22.5 2 L 2 2.013 C 2 2.013 2.753 11.046 9.009 13.438 L 12.25 15 Z" clipPath="url(#sand-mound-top)" />
                      <path d="M 12.25 18.5 L 15.392 20.014 C 21.737 22.332 22.5 31.5 22.5 31.5 L 2 31.487 C 2 31.487 2.753 22.454 9.009 20.062 Z" clipPath="url(#sand-mound-bottom)" />
                    </g>
                  </g>
                  <rect height="2" width="24.5" fill="hsl(var(--hue),90%,50%)" />
                  <rect height="1" width="19.5" y="0.5" x="2.5" ry="0.5" rx="0.5" fill="hsl(var(--hue),90%,57.5%)" />
                  <rect height="2" width="24.5" y="31.5" fill="hsl(var(--hue),90%,50%)" />
                  <rect height="1" width="19.5" y="32" x="2.5" ry="0.5" rx="0.5" fill="hsl(var(--hue),90%,57.5%)" />
                </g>
              </g>
            </svg>
            <h3 className="mt-6 text-slate-900 dark:text-white text-xl font-medium">Запрос обрабатывается...</h3>
          </div>
        )}
      {status === 'success' && (
          <div className="absolute inset-0 z-30 bg-white/95 dark:bg-[#0f0f11]/95 flex flex-col items-center justify-center rounded-lg">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Заявка отправлена!</h3>
            <p className="text-slate-500 dark:text-slate-400">Мы свяжемся с вами скоро.</p>
          </div>
        )}

      <form onSubmit={handleClickBid} className="flex flex-col gap-8 flex-grow relative">

        <div className="relative">
          <label htmlFor="modal-name" className="block text-sm text-[#3b82f6] mb-2">Имя</label>
          <input
            id="modal-name"
            name="name"
            required
            type="text"
            className={`w-full bg-transparent border-b pb-2 text-slate-900 dark:text-white focus:outline-none transition-colors
              ${formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-[#3b82f6]/50 focus:border-[#3b82f6]'}
            `}
          />
          {formErrors.name && (
            <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
          )}
        </div>


        <div className="relative">
          <label htmlFor="modal-tel" className="block text-sm text-[#3b82f6] mb-2">Тел</label>
          <input
            id="modal-tel"
            name="number"
            required
            type="tel"
            placeholder="+7 (___) ___-__-__"
            className={`w-full bg-transparent border-b pb-2 text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none transition-colors
              ${formErrors.number ? 'border-red-500 focus:border-red-500' : 'border-[#3b82f6]/50 focus:border-[#3b82f6]'}
            `}
          />
          {formErrors.number && (
            <p className="text-red-500 text-xs mt-1">{formErrors.number}</p>
          )}
        </div>


        <div className="relative">
          <label htmlFor="modal-email" className="block text-sm text-[#3b82f6] mb-2">E-mail</label>
          <input
            id="modal-email"
            name="email"
            type="email"
            className={`w-full bg-transparent border-b pb-2 text-slate-900 dark:text-white focus:outline-none transition-colors
              ${formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-[#3b82f6]/50 focus:border-[#3b82f6]'}
            `}
          />
          {formErrors.email && (
            <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
          )}
        </div>

        <div className="relative">
          <label htmlFor="modal-message" className="block text-sm text-[#3b82f6] mb-2">Комментарии</label>
          <textarea
            id="modal-message"
            name="message"
            rows={2}
            className="w-full bg-transparent border-b border-[#3b82f6]/50 pb-2 text-slate-900 dark:text-white focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
          ></textarea>
        </div>

        <input
          type="text"
          name="bot"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="mt-auto pt-6">

          {status === 'error' && (
            <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg border border-red-200 dark:border-red-800/50">
              {errorMessage}
            </div>
          )}

          <p className="text-xs text-slate-500 dark:text-gray-400 mb-6 leading-relaxed">
            Нажимая кнопку, вы соглашаетесь с{' '}
            <Link href="/offer" onClick={onClose} className="text-green-500 hover:underline">
              Публичной офертой
            </Link>
            , даете{' '}
            <Link href="/privacy-policy#consent" onClick={onClose} className="text-green-500 hover:underline">
              согласие на обработку персональных данных
            </Link>{' '}
            в соответствии с{' '}
            <Link href="/privacy-policy" onClick={onClose} className="text-green-500 hover:underline">
              Политикой конфиденциальности
            </Link>
            .
          </p>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full hover:-translate-y-1 transition-all cursor-pointer flex items-center justify-between
              bg-slate-200 dark:bg-[#1f1f23] hover:bg-slate-300 dark:hover:bg-[#2a2a30]
              border border-transparent dark:border-white/5 text-slate-900 dark:text-white py-4 px-6 group
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Отправить</span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </form>
      </div>
    </div>,
    document.body
  );
}
