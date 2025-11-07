import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Skills, Timeline, Projects, Achievements, Contact } from './components/Sections';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.setProperty('--bg', '#001F3F');
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--bg', '#f7fafc');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-[#001F3F] text-white selection:bg-cyan-300/30">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="py-8 text-center text-white/60">© {new Date().getFullYear()} Pragya Soni. All rights reserved.</footer>
    </div>
  );
}
