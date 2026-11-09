'use client';

import { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaSearch } from 'react-icons/fa';
import { useScrollTo } from '@/hooks/useScroll';
import ModalForm from '@/components/modelform/modelForm';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { searchData } from '@/lib/searchData';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<typeof searchData>([]);

  const scrollTo = useScrollTo();
  const router = useRouter();
  const pathname = usePathname();

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setSearchQuery('');
    setSuggestions([]);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchQuery(value);

      if (value.trim().length > 1) {
        const lowerValue = value.toLowerCase();
        const filtered = searchData.filter((item) =>
          item.title.toLowerCase().includes(lowerValue) ||
          item.keywords.some((k) => k.toLowerCase().includes(lowerValue))
        ).slice(0, 5);
        setSuggestions(filtered);
      } else {
        setSuggestions([]);
      }
    };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    if (pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        scrollTo(id);
      }
    } else {
      router.push('/');

      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          scrollTo(id);
        }
      }, 100);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const links = [
    { href: 'banner', label: 'Главная' },
    { href: 'about', label: 'О нас' },
    { href: 'advantage', label: 'Преимущество' },
    { href: 'services', label: 'Услуги' },
    { href: 'reviews', label: 'Отзывы' },
  ];

  return (
    <>
      <nav
        className={`
          relative sticky top-0 z-50 w-full max-w-full
          border-b backdrop-blur-md
          transition-all duration-300
          bg-white/95 border-slate-200
          dark:bg-[#0f0f19]/95 dark:border-white/10
          ${scrolled ? 'shadow-lg' : ''}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">

          <Link
            href="/"
            aria-label="PerSolution"
            className="inline-block transition-all cursor-pointer duration-200 hover:scale-105 shrink-0"
          >
            <div className="inline-flex items-center gap-3 rounded-xl px-4 py-2.5 shadow-md
              bg-white border border-slate-200
              dark:bg-slate-900 dark:border-slate-700">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg
                bg-gradient-to-br from-cyan-400 to-sky-500
                text-white font-mono text-sm shrink-0 shadow-md shadow-cyan-500/30">
                {'</>'}
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg tracking-tight
                  text-slate-900 dark:text-white">
                  PerSolution
                </span>
                <span className="text-[10px] whitespace-nowrap
                  text-slate-500 dark:text-slate-400">
                  Архитектура безупречных идей
                </span>
              </div>
            </div>
          </Link>

          <button
            onClick={toggleMenu}
            aria-label="Меню"
            className="md:hidden flex flex-col gap-[5px] p-2 z-50 bg-transparent border-0 cursor-pointer"
          >
            <span className={`block w-[26px] h-[2px] rounded transition-all duration-300
              bg-slate-900 dark:bg-white
              ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-[26px] h-[2px] rounded transition-all duration-300
              bg-slate-900 dark:bg-white
              ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[26px] h-[2px] rounded transition-all duration-300
              bg-slate-900 dark:bg-white
              ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>

          <ul className={`
            flex items-center gap-2 list-none m-0 p-0
            max-md:fixed max-md:top-0 max-md:right-0 max-md:h-screen max-md:w-[70%] max-md:max-w-[320px]
            max-md:flex-col max-md:justify-center max-md:gap-6 max-md:p-8
            max-md:shadow-[-10px_0_30px_rgba(0,0,0,0.15)]
            max-md:transition-transform max-md:duration-500 max-md:ease-[cubic-bezier(0.4,0,0.2,1)]
            max-md:bg-white/98
            dark:max-md:bg-[#14141e]/98 dark:max-md:backdrop-blur-xl
            ${isOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'}
          `}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={`/#${href}`}
                  onClick={(e) => handleNavClick(e, href)}
                  className="relative inline-block px-4 py-2 rounded-lg pointer-events cursor-pointer bg-transparent text-[0.95rem] font-medium
                  no-underline transition-all duration-200
                  max-md:w-full max-md:text-center max-md:text-lg
                  text-slate-600 dark:text-slate-400
                  hover:text-slate-900 dark:hover:text-white
                  hover:bg-slate-100 dark:hover:bg-white/5"
                >
                  {label}
                </Link>
              </li>
            ))}

            <li>
              <button
                onClick={toggleTheme}
                aria-label="Сменить тему"
                className="flex items-center justify-center p-2 rounded-lg text-lg bg-transparent border-0 cursor-pointer transition-all duration-200
                text-slate-600 dark:text-slate-400
                hover:text-slate-900 dark:hover:text-white
                hover:bg-slate-100 dark:hover:bg-white/5"
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </li>

            <li>
              <button
                onClick={toggleSearch}
                aria-label="Поиск"
                className={`flex items-center justify-center p-2 rounded-lg text-lg bg-transparent border-0 cursor-pointer transition-all duration-200
                ${searchOpen ? 'text-cyan-500 bg-cyan-50 dark:bg-cyan-900/20' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'}`}
              >
                <FaSearch />
              </button>
            </li>

            <li className="max-md:w-full">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block px-5 py-2 rounded-lg text-[0.95rem] font-medium no-underline
                text-white bg-gradient-to-br from-cyan-400 to-sky-500
                dark:from-cyan-500 dark:to-sky-600
                cursor-pointer shadow-lg shadow-cyan-500/30
                hover:-translate-y-0.5
                hover:shadow-xl hover:shadow-cyan-500/50
                transition-all duration-200
                max-md:w-full max-md:text-center"
              >
                Оставить заявку
              </button>
            </li>
          </ul>
        </div>

        {searchOpen && (
          <div className="absolute top-[calc(100%+8px)] right-6 w-full max-w-[540px] z-50 animate-slide-in-top">
            <div className="bg-white/95 dark:bg-[#14141e]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 dark:border-white/10 overflow-hidden">

              <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 p-2 pl-4 border-b border-slate-100 dark:border-white/5">
                <FaSearch className="text-slate-400 dark:text-slate-500" size={18} />
                <input
                  type="text"
                  placeholder="Найти на сайте..."
                  autoFocus
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 py-2 text-[0.95rem]"
                />
                <button type="submit" className="px-4 py-2 bg-gradient-to-br from-cyan-400 to-sky-500 text-white font-medium text-sm rounded-xl shadow-md hover:-translate-y-0.5 transition-all cursor-pointer">
                  Искать
                </button>
              </form>

              {suggestions.length > 0 && (
                <div className="max-h-[300px] overflow-y-auto">
                  {suggestions.map((item) => (
                    <Link
                      key={item.url}
                      href={item.url}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="flex flex-col px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors border-b border-slate-100 dark:border-white/5 last:border-0"
                    >
                      <span className="font-semibold text-slate-900 dark:text-white text-sm">{item.title}</span>
                      <span className="text-xs text-slate-500 truncate">{item.description}</span>
                    </Link>
                  ))}
                </div>
              )}

              {searchQuery.length > 1 && suggestions.length === 0 && (
                <div className="px-4 py-6 text-sm text-slate-500 text-center">
                  По запросу «{searchQuery}» ничего не найдено.
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Navbar;
