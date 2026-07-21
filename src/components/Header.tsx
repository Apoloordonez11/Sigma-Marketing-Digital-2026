import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ecosistema', href: '#ecosistema' },
    { name: 'Embudo', href: '#embudo' },
    { name: 'Flujo IA', href: '#flujo-ia' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Plan de 90 Días', href: '#roadmap' },
    { name: 'Planes', href: '#planes' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-midnight/90 backdrop-blur-md border-b border-brand-teal/20 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Stylized Σ */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none" id="header-logo">
          <svg
            className="w-9 h-9"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="header-sigma-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#50DBC2" />
                <stop offset="50%" stopColor="#745EF0" />
                <stop offset="100%" stopColor="#3b2d94" />
              </linearGradient>
              <linearGradient id="header-accent-grad" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#50DBC2" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>

            {/* Outer futuristic tracking brackets */}
            <motion.path
              d="M 25 12 A 40 40 0 0 0 25 88"
              stroke="white"
              strokeOpacity="0.15"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.path
              d="M 75 12 A 40 40 0 0 1 75 88"
              stroke="white"
              strokeOpacity="0.15"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Upper block of Sigma - futuristic ribbon */}
            <motion.path
              d="M 75 28 H 32 L 54 50"
              stroke="url(#header-sigma-grad)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Lower block of Sigma - futuristic ribbon */}
            <motion.path
              d="M 54 50 L 32 72 H 75"
              stroke="url(#header-sigma-grad)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />

            {/* Floating accent line inside the Sigma to give a 3D overlay */}
            <motion.path
              d="M 45 50 L 32 63 H 58"
              stroke="url(#header-accent-grad)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />

            {/* Central glowing core dot representing Connected Data/IA */}
            <motion.circle
              cx="54"
              cy="50"
              r="4.5"
              fill="#50DBC2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
            />
          </svg>
          <span className="font-display font-black text-2xl tracking-wider text-white transition-all duration-300 group-hover:text-brand-teal">
            SIGMA<span className="text-brand-teal text-xs ml-1 font-mono tracking-normal font-bold">AI</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-brand-teal font-medium text-sm transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-teal after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#contacto"
            className="px-5 py-2.5 rounded-full text-sm font-semibold sigma-gradient text-brand-midnight hover:scale-105 transition-all duration-300 flex items-center gap-2 group shadow-md hover:shadow-brand-violet/20"
            id="header-cta"
          >
            Diagnóstico Gratis
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-brand-teal p-2 focus:outline-none"
          aria-label="Abrir menú"
          id="mobile-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Sidebar overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-brand-midnight border-b border-brand-teal/25 shadow-2xl py-6 px-6 flex flex-col gap-5 lg:hidden"
            id="mobile-nav-panel"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/90 hover:text-brand-teal font-medium text-base py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-xl font-bold sigma-gradient text-brand-midnight mt-2 flex items-center justify-center gap-2"
            >
              Agenda tu Diagnóstico Gratis
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
