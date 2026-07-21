import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Database, CheckCircle, ArrowRight, Server } from 'lucide-react';
import { searchQueries } from '../data';

export default function GoogleSEO() {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Auto-cycle queries with beautiful typewriter simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = searchQueries[activeQueryIndex].text;

    if (!isDeleting) {
      if (typedText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setTypedText(currentFullText.slice(0, typedText.length + 1));
        }, 60); // typing speed
      } else {
        // Wait at full length, then delete
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3000);
      }
    } else {
      if (typedText.length > 0) {
        timer = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 30); // deleting speed
      } else {
        setIsDeleting(false);
        setActiveQueryIndex((prev) => (prev + 1) % searchQueries.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, activeQueryIndex]);

  const activeQuery = searchQueries[activeQueryIndex];

  return (
    <section
      id="google-seo"
      className="py-24 px-6 relative bg-brand-midnight/20 blueprint-grid overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-violet/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-teal text-xs font-mono font-bold uppercase tracking-[2px] inline-flex items-center gap-2">
            🚀 CAPTACIÓN INBOUND DE ALTO VALOR
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mt-2 text-white">
            SEO + Google: Captación de Alta Intención
          </h2>
          <p className="text-brand-teal mt-4 text-base sm:text-lg font-medium leading-relaxed">
            Cada servicio y cada industria se convierte en una nueva puerta de entrada permanente desde Google.
          </p>
        </div>

        {/* 2 Columns Layout: Mockup Inputs & Connectors vs Google Search Results card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Google search bar typewriter + connections */}
          <div className="flex flex-col gap-6 relative">
            <h3 className="text-sm font-mono font-bold tracking-[2px] text-white/50 uppercase mb-2">
              BÚSQUEDAS DE INTENCIÓN DE COMPRA B2B
            </h3>

            {/* Simulated google search bars */}
            <div className="space-y-4 relative z-10" id="google-search-bars">
              {searchQueries.map((q, idx) => {
                const isActive = idx === activeQueryIndex;
                return (
                  <div
                    key={q.id}
                    onClick={() => {
                      setActiveQueryIndex(idx);
                      setTypedText(q.text);
                      setIsDeleting(false);
                    }}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-3 relative ${
                      isActive
                        ? 'bg-brand-violet/20 border-brand-teal shadow-[0_0_15px_rgba(80,219,202,0.15)]'
                        : 'bg-brand-midnight/40 border-white/5 hover:border-brand-violet/40'
                    }`}
                  >
                    <Search className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-brand-teal' : 'text-white/40'}`} />
                    <span className={`text-xs sm:text-sm font-mono flex-1 truncate ${isActive ? 'text-white' : 'text-white/40'}`}>
                      {isActive ? (
                        <>
                          {typedText}
                          <span className="animate-pulse text-brand-teal">|</span>
                        </>
                      ) : (
                        q.text
                      )}
                    </span>

                    {isActive && (
                      <span className="absolute -right-2 top-1/2 -translate-y-1/2 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Connection visual lines flowing into Server/DB */}
            <div className="flex items-center gap-8 mt-6 justify-center lg:justify-start" id="seo-connection">
              <div className="flex flex-col items-center gap-1">
                <div className="w-[2px] h-10 bg-gradient-to-b from-brand-teal to-brand-violet" />
                <div className="p-4 rounded-2xl bg-brand-violet/20 border border-brand-teal/30 text-brand-teal animate-pulse-glow">
                  <Database className="w-8 h-8" />
                </div>
                <span className="text-[10px] font-mono font-bold text-white/50 mt-1">NÚCLEO SIGMA</span>
              </div>

              <div className="text-left max-w-xs">
                <h4 className="text-xs font-mono font-bold text-brand-teal uppercase tracking-wide">
                  Indexación Continua
                </h4>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  Las búsquedas son captadas e integradas a flujos automáticos de conversión del Ecosistema Sigma.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Google results Mockup card (glassmorphic) & expected results */}
          <motion.div
            key={activeQueryIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
            id="seo-results-card"
          >
            {/* Browser top-bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] font-mono text-white/30 truncate max-w-[200px] sm:max-w-sm">
                https://www.google.com/search?q=sigma+ai
              </span>
            </div>

            {/* Simulated organic Google results listing */}
            <div className="space-y-5 mb-8">
              {activeQuery.results.map((res, i) => (
                <div key={i} className="group cursor-default">
                  <span className="text-xs text-brand-teal font-mono tracking-wide block">
                    sigmaagency.ai › casos
                  </span>
                  <h4 className="text-sm sm:text-base font-display font-semibold text-white group-hover:underline mt-0.5">
                    {res}
                  </h4>
                  <p className="text-xs text-white/60 mt-1 leading-relaxed">
                    Descubre cómo el Sistema de Crecimiento Conectado con IA automatiza tu pauta publicitaria y posicionamiento orgánico.
                  </p>
                </div>
              ))}
            </div>

            {/* Expected Results bullets */}
            <div className="border-t border-white/5 pt-6 mb-8">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[2px] text-brand-teal mb-4">
                RESULTADOS ESPERADOS (CONEXIÓN SIGMA)
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <li className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span>Mayor visibilidad</span>
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span>Tráfico calificado</span>
                </li>
                <li className="flex items-center gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  <span>Leads inbound</span>
                </li>
              </ul>
            </div>

            {/* Dynamic CTA */}
            <div>
              <a
                href="#contacto"
                className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-brand-violet to-brand-teal text-brand-midnight hover:scale-105 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                Descubre tu potencial en Google
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
