'use client'
import Link from 'next/link';
import { Playball } from 'next/font/google';


const playball = Playball({ weight: '400', subsets: ['latin'] });

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0f0f11] px-6 py-20 overflow-hidden relative selection:bg-cyan-500/30">

      {/* Фоновый шум (текстура) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">

        {/* ЛЕВАЯ ЧАСТЬ: Сердце и надпись */}
        <div className="relative flex items-center justify-center">

          {/* Рукописная надпись "Thank you" */}
          <span className={`${playball.className} absolute -left-12 md:-left-24 -top-12 md:-top-16 text-4xl md:text-6xl text-white/90 rotate-[-10deg] z-20`}>
            Thank you
          </span>

          {/* Светящееся сердце (нарисовано через CSS) */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-pulse-slow">
            {/* Внутреннее свечение (градиент) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#0f0f11] rounded-full blur-xl opacity-80"></div>

            {/* Само сердце */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 512 512" className="w-full h-full drop-shadow-[0_0_60px_rgba(59,130,246,0.3)]">
                <defs>
                  <radialGradient id="heartGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                    <stop offset="40%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="80%" stopColor="#1e1b4b" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#0f0f11" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <path
                  fill="url(#heartGlow)"
                  d="M256 472.1l-30.4-27.7C123.6 354.6 51.2 288.8 51.2 208.6 51.2 143 102.6 91.6 168.2 91.6c37.1 0 72.6 17.3 95.8 45.9 23.2-28.6 58.7-45.9 95.8-45.9 65.6 0 117 51.4 117 117 0 80.2-72.4 146-174.4 235.8L256 472.1z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Текст */}
        <div className="text-center md:text-left max-w-md">
          <p className="text-[#4ade80] font-bold tracking-widest uppercase text-sm md:text-base mb-3">
            Мы свяжемся с вами в ближайшее время
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Спасибо за заявку!
          </h1>

          <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
            Наша команда специалистов уже начала работу над вашим запросом.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Вернуться на главную
          </Link>
        </div>

      </div>
    </main>
  );
}
