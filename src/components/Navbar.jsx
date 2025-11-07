import { useEffect, useState } from 'react';
import { Moon, Sun, Menu } from 'lucide-react';

export default function Navbar({ isDark, setIsDark }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'timeline', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/10 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="text-white font-semibold tracking-wide hover:opacity-90 transition-opacity">
            Pragya Soni
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-white/80 hover:text-white transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle theme"
              onClick={() => setIsDark((v) => !v)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="text-left text-white/80 hover:text-white py-2"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
