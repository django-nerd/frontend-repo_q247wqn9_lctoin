import Spline from '@splinetool/react-spline';
import { Download, FolderOpen } from 'lucide-react';

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow">
            Pragya Soni
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-white/80">
            Software Engineer • AI & Machine Learning Enthusiast
          </p>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Crafting intelligent, human-centered solutions at the horizon of data and design.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleScroll('projects')}
              className="inline-flex items-center gap-2 rounded-full bg-[#007BFF] hover:bg-[#0068d6] text-white px-5 py-2.5 shadow-lg shadow-blue-500/30 transition-transform hover:-translate-y-0.5"
            >
              <FolderOpen size={18} /> View My Work
            </button>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 transition-transform hover:-translate-y-0.5"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
