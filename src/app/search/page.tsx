'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { searchData } from '@/lib/searchData';
import { useState, useEffect, Suspense } from 'react';

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<typeof searchData>([]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();

    const filtered = searchData.filter((item) => {
      return (
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery))
      );
    });

    setResults(filtered);
  }, [query]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 min-h-[70vh]">
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-cyan-500 hover:text-cyan-600 transition-colors mb-6">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          На главную
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Результаты поиска: <span className="text-cyan-500">«{query}»</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Найдено страниц: {results.length}
        </p>
      </div>

      {results.length === 0 && query && (
        <div className="bg-slate-50 dark:bg-slate-800/50 p-10 rounded-2xl text-center border border-slate-200 dark:border-slate-700">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Ничего не найдено</h2>
          <p className="text-slate-500 dark:text-slate-400">
            По запросу «{query}» ничего нет. Попробуйте изменить формулировку или посмотрите наши услуги.
          </p>
          <Link href="/#services" className="inline-block mt-6 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
            Перейти к услугам
          </Link>
        </div>
      )}

      <div className="flex flex-col gap-4">
        {results.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className="group block p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors mb-2">
              {item.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              {item.description}
            </p>
            <div className="flex items-center text-sm text-cyan-500 font-medium">
              Перейти <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0f0f11]">
      <Suspense fallback={<div className="text-center py-20 text-slate-500">Загрузка поиска...</div>}>
        <SearchContent />
      </Suspense>
    </main>
  );
}
