import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Database, Cpu, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { pillars } from '../data';

// Map icon names to Lucide icons
const iconMap: { [key: string]: any } = {
  Compass,
  Database,
  Cpu,
  TrendingUp,
  Award,
};

export default function Hero() {
  const words = ['agencia', 'negocio', 'empresa', 'marca personal', 'hotel', 'multinacional'];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Setup 15 random particles for beautiful background noise
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-transparent text-white flex items-center justify-center pt-28 pb-20 px-6 overflow-hidden blueprint-grid"
    >
      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-brand-teal/25"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Ambient glowing orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-violet/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Tagline / Superior Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8 px-5 py-2 bg-brand-violet/15 border border-brand-violet/40 text-brand-teal text-xs font-mono font-bold uppercase tracking-[2px] rounded-full inline-flex items-center gap-2 shadow-[0_0_15px_rgba(116,94,240,0.1)] hover:border-brand-teal/50 transition-all cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            SISTEMA DE CRECIMIENTO CONECTADO
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight max-w-4xl mb-6 text-gradient"
          >
            Transformamos tu{' '}
            <span className="inline-flex relative text-brand-teal select-none min-w-[150px] sm:min-w-[200px] md:min-w-[240px] justify-center text-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="inline-block"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{' '}
            en un ecosistema escalable de servicios digitales
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/90 font-light max-w-3xl mb-12 leading-relaxed"
          >
            Más clientes. Más proyectos. Resultados medibles.
            <br />
            <span className="font-semibold text-brand-teal">No vendemos likes.</span> Construimos máquinas de crecimiento.
          </motion.p>

          {/* Pillars */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-4xl bg-brand-midnight/60 backdrop-blur-sm border border-brand-teal/10 rounded-2xl py-6 px-4 md:px-8 mb-12 flex flex-wrap justify-center items-center gap-4 md:gap-2 shadow-[0_8px_32px_0_rgba(15,7,48,0.5)]"
          >
            {pillars.map((pillar, idx) => {
              const IconComponent = iconMap[pillar.icon];
              return (
                <div key={pillar.id} className="flex items-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 group cursor-default">
                    {IconComponent && (
                      <IconComponent className="w-4 h-4 text-brand-teal group-hover:text-brand-violet transition-colors duration-300" />
                    )}
                    <span className="text-xs font-mono font-bold tracking-[2px] text-white/90 group-hover:text-brand-teal transition-colors">
                      {pillar.name}
                    </span>
                  </div>
                  {idx < pillars.length - 1 && (
                    <span className="hidden md:block h-6 w-[1px] bg-brand-teal/30 mx-3" />
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8 w-full justify-center"
          >
            <a
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base bg-gradient-to-r from-brand-violet to-brand-teal text-brand-midnight shadow-lg hover:shadow-brand-teal/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              Agenda tu Diagnóstico Estratégico Gratis
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>

            <a
              href="#planes"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base border border-brand-violet text-brand-teal hover:bg-brand-violet hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              Ver Arquitectura de Planes
            </a>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            variants={itemVariants}
            className="text-white/60 text-sm font-medium flex items-center gap-2"
          >
            <span>⚡</span> Implementación en 90 días <span className="text-brand-teal">|</span> De Cero a Escala
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
