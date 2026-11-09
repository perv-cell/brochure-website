'use client';

export default function ScrollToContact() {
  const handleScroll = () => {
    const el = document.getElementById('footer');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="px-8 py-4 rounded-xl cursor-pointer bg-gradient-to-br from-cyan-400 to-sky-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:-translate-y-1 hover:shadow-xl transition-all w-full sm:w-auto"
    >
      Заказать визитку
    </button>
  );
}
