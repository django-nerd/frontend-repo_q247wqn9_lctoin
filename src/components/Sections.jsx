import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Award, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {
      threshold: 0.2,
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isIntersecting;
}

export function About() {
  const ref = useRef(null);
  const visible = useOnScreen(ref);

  return (
    <section id="about" ref={ref} className="relative py-20 bg-gradient-to-b from-transparent to-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <p className={`mt-4 text-white/80 leading-relaxed transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          I am Pragya Soni, a passionate Software Engineer and AI & Machine Learning enthusiast focused on building thoughtful, data-driven products. I love translating complex ideas into elegant systems—combining clean engineering with human-centered design. My goal is to leverage AI responsibly to create tools that are accessible, intuitive, and impactful.
        </p>
      </div>
    </section>
  );
}

export function Skills() {
  const ref = useRef(null);
  const visible = useOnScreen(ref);

  const techSkills = [
    { name: 'Python', level: 85 },
    { name: 'C++', level: 75 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'Machine Learning', level: 70 },
  ];

  const softSkills = ['Leadership', 'Communication', 'Problem Solving', 'Teamwork'];

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Skills</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {techSkills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm text-white/80">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#4ECDC4] to-[#007BFF] rounded-full transition-all duration-1000"
                    style={{ width: visible ? `${s.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 content-start">
            {softSkills.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/90 text-sm hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 transition transform"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Timeline() {
  const items = [
    {
      title: 'B.Tech in Artificial Intelligence & Machine Learning',
      org: '2024 – 2028',
      place: 'Rajasthan Technical University (RTU)',
      desc: 'Pursuing a strong foundation in AI, ML, and computer science fundamentals with hands-on projects.',
    },
    {
      title: 'Software Engineering Intern',
      org: 'Previous Internship',
      place: 'Remote',
      desc: 'Contributed to features, collaborated in agile teams, and delivered reliable components.',
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-white/5 to-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Education & Experience</h2>
        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 h-full w-px bg-white/10" />
          <div className="space-y-8">
            {items.map((it, idx) => (
              <div key={idx} className="relative grid sm:grid-cols-2 gap-6 items-start">
                <div className={`sm:col-start-1 ${idx % 2 === 0 ? 'sm:pr-10' : 'sm:col-start-2 sm:pl-10'}`}>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition">
                    <h3 className="text-white font-semibold">{it.title}</h3>
                    <p className="text-sm text-white/70 mt-1">{it.org} • {it.place}</p>
                    <p className="text-white/80 mt-3">{it.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const filters = ['All', 'AI/ML', 'Web'];
  const [active, setActive] = useState('All');

  const projects = [
    {
      title: 'Intelligent Recommender',
      desc: 'Content-based and collaborative filtering system for personalized suggestions.',
      tech: ['Python', 'Pandas', 'Scikit-learn'],
      type: 'AI/ML',
      github: '#',
      live: '#',
    },
    {
      title: 'Real-time Object Detection',
      desc: 'YOLO-based pipeline with webcam inference and performance tuning.',
      tech: ['Python', 'OpenCV', 'PyTorch'],
      type: 'AI/ML',
      github: '#',
      live: '#',
    },
    {
      title: 'Portfolio Engine',
      desc: 'Fast, accessible personal site with dark/light mode and animated interactions.',
      tech: ['React', 'Tailwind'],
      type: 'Web',
      github: '#',
      live: '#',
    },
    {
      title: 'Chatbot Assistant',
      desc: 'Conversational interface with retrieval-augmented responses.',
      tech: ['Python', 'TensorFlow'],
      type: 'AI/ML',
      github: '#',
      live: '#',
    },
  ];

  const filtered = projects.filter((p) => active === 'All' || p.type === active);

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-3 py-1.5 rounded-full text-sm border transition ${active === f ? 'bg-white/20 border-white/30 text-white' : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:shadow-xl hover:shadow-cyan-500/15 transition transform hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4ECDC4]/0 to-[#007BFF]/0 group-hover:from-[#4ECDC4]/10 group-hover:to-[#007BFF]/10 pointer-events-none" />
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/75 text-sm">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a href={p.github} className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white">
                  <Github size={16} /> GitHub
                </a>
                <a href={p.live} className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white">
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  const items = [
    { title: 'Smart India Hackathon (SIH) — Winner', icon: <Award className="text-yellow-300" size={18} /> },
    { title: 'PDST — Professional Diploma in Software Technology', icon: <Award className="text-cyan-300" size={18} /> },
    { title: 'NCC Certificate — Discipline & Service', icon: <Award className="text-pink-300" size={18} /> },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-transparent to-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Achievements</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/15"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/0 pointer-events-none" />
              <div className="flex items-center gap-3 text-white">
                {it.icon}
                <p className="font-medium">{it.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white/85"><Mail size={18}/> <span>pragyasoni@example.com</span></div>
            <div className="flex items-center gap-3 text-white/85"><Phone size={18}/> <span>+91 00000 00000</span></div>
            <div className="flex items-center gap-3 text-white/85"><MapPin size={18}/> <span>Jaipur, Rajasthan, India</span></div>
            <div className="flex items-center gap-3 text-white/85"><Linkedin size={18}/> <a href="#" className="hover:text-white">linkedin.com/in/pragya-soni</a></div>
            <div className="flex items-center gap-3 text-white/85"><Github size={18}/> <a href="#" className="hover:text-white">github.com/pragya-soni</a></div>
          </div>

          <form className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]" placeholder="Name" />
            <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]" placeholder="Email" />
            <input className="sm:col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]" placeholder="Subject" />
            <textarea rows={5} className="sm:col-span-2 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]" placeholder="Message" />
            <button className="sm:col-span-2 inline-flex justify-center items-center gap-2 rounded-lg bg-[#007BFF] hover:bg-[#0068d6] px-5 py-3 text-white font-medium transition shadow-lg shadow-blue-500/25">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
