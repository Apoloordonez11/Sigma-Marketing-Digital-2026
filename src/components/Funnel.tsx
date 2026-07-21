import { useState } from 'react';
import { motion } from 'motion/react';
import { Magnet, RefreshCw, FileText, Users, ChevronRight, HelpCircle } from 'lucide-react';
import { funnelStages, growthLevers } from '../data';

const iconMap: { [key: string]: any } = {
  Magnet,
  RefreshCw,
  FileText,
  Users,
};

export default function Funnel() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section id="embudo" className="py-24 px-6 relative bg-brand-midnight/20 blueprint-grid overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-teal text-xs font-mono font-bold uppercase tracking-[2px] bg-brand-teal/10 px-3 py-1 rounded-full">
            SISTEMA DE VENTAS EFICIENTE
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mt-4 text-white">
            El Embudo de Growth Marketing
          </h2>
          <p className="text-white/80 mt-4 text-base sm:text-lg leading-relaxed">
            Un flujo continuo que transforma clics en relaciones recurrentes a largo plazo. Haz clic o pasa el cursor sobre cada etapa para ver los indicadores comerciales clave.
          </p>
        </div>

        {/* Funnel Chevron Diagram */}
        <div className="mb-20">
          {/* Desktop Funnel Layout (Horizontal Chevron Chain) */}
          <div className="hidden lg:flex items-stretch justify-between gap-1 select-none" id="funnel-desktop">
            {funnelStages.map((stage, idx) => (
              <div key={stage.id} className="relative flex-1 group">
                <motion.div
                  onMouseEnter={() => setActiveStage(stage.id)}
                  onMouseLeave={() => setActiveStage(null)}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="h-32 p-4 cursor-pointer relative transition-all flex flex-col justify-between overflow-hidden shadow-lg border border-white/10"
                  style={{
                    backgroundColor: stage.color,
                    // Draw a chevron style shape using CSS clip-path
                    clipPath: idx === 0 
                      ? 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                      : idx === funnelStages.length - 1
                      ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 10% 50%)'
                      : 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%)',
                    paddingLeft: idx === 0 ? '1rem' : '1.75rem',
                    color: idx < 4 ? '#0F0730' : '#FFFFFF'
                  }}
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-75">
                      Fase 0{stage.id}
                    </span>
                    <h3 className="font-display font-bold text-base leading-tight mt-1">
                      {stage.label}
                    </h3>
                  </div>

                  <div className="flex justify-between items-end">
                    <span className="text-xs font-mono font-bold bg-white/25 px-1.5 py-0.5 rounded">
                      {stage.conversionRate}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wide opacity-80">
                      {stage.kpi}
                    </span>
                  </div>
                </motion.div>

                {/* Interactive KPI details card on hover */}
                {activeStage === stage.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 glass-card text-white p-4 rounded-xl shadow-xl border border-brand-teal/30 z-30"
                  >
                    <span className="text-brand-teal text-[10px] font-mono uppercase font-bold tracking-wider">
                      KPI: {stage.kpi}
                    </span>
                    <p className="text-xs text-white/95 mt-2 leading-relaxed">
                      {stage.description}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Funnel Layout (Vertical Stack) */}
          <div className="lg:hidden flex flex-col gap-3" id="funnel-mobile">
            {funnelStages.map((stage, idx) => (
              <div
                key={stage.id}
                onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
                className="p-5 rounded-2xl cursor-pointer flex flex-col gap-3 shadow-sm border border-white/10 transition-all"
                style={{ backgroundColor: stage.color, color: idx < 4 ? '#0F0730' : '#FFFFFF' }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold opacity-75">0{stage.id}</span>
                    <h3 className="font-display font-bold text-base">{stage.label}</h3>
                  </div>
                  <span className="text-xs font-mono font-bold bg-white/25 px-2 py-0.5 rounded">
                    Conv: {stage.conversionRate}
                  </span>
                </div>

                {activeStage === stage.id ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="border-t border-black/5 pt-3"
                  >
                    <p className="text-xs font-mono uppercase tracking-wider font-bold mb-1 opacity-80">
                      KPI: {stage.kpi}
                    </p>
                    <p className="text-xs leading-relaxed opacity-95">
                      {stage.description}
                    </p>
                  </motion.div>
                ) : (
                  <div className="text-[10px] font-mono opacity-60 flex items-center gap-1">
                    <span>💡 Toca para expandir indicadores clave</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Growth Levers Title */}
        <div className="border-t border-white/10 pt-16 mb-10 text-center md:text-left">
          <h3 className="font-display font-extrabold text-2xl tracking-tight text-white">
            Palancas de Crecimiento Conectado
          </h3>
          <p className="text-white/60 text-sm mt-1">
            Componentes estratégicos que inyectan velocidad en cada etapa del embudo.
          </p>
        </div>

        {/* Growth Levers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="growth-levers">
          {growthLevers.map((lever, idx) => {
            const Icon = iconMap[lever.icon];
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(116, 94, 240, 0.15)' }}
                className="bg-white/5 backdrop-blur-md border border-white/10 border-l-4 border-l-brand-teal rounded-r-2xl p-6 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 rounded-xl bg-white/5 text-brand-teal border border-white/10 group-hover:bg-brand-teal group-hover:text-brand-midnight transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-brand-teal bg-brand-teal/15 px-2.5 py-1 rounded-full">
                      {lever.badge}
                    </span>
                  </div>

                  <h4 className="font-display font-extrabold text-base text-white mb-2 tracking-tight">
                    {lever.title}
                  </h4>
                  <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
                    {lever.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1 text-[11px] font-mono text-brand-teal font-bold group-hover:text-white transition-colors">
                  <span>ACTIVAR PALANCA</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
