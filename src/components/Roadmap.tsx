import { motion } from 'motion/react';
import { Rocket, BarChart2, TrendingUp, Check, ArrowRight } from 'lucide-react';
import { roadmapSteps } from '../data';

const iconMap: { [key: string]: any } = {
  Rocket,
  BarChart2,
  TrendingUp,
};

export default function Roadmap() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: custom * 0.25,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section id="roadmap" className="py-24 px-6 relative bg-brand-midnight/20 blueprint-grid overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-teal text-xs font-mono font-bold uppercase tracking-[2px] bg-brand-teal/10 px-3 py-1 rounded-full">
            METODOLOGÍA COMPROBADA
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mt-4 text-white">
            Roadmap a 90 Días: De Cero a Escala
          </h2>
          <p className="text-white/80 mt-4 text-base sm:text-lg leading-relaxed">
            Nuestra hoja de ruta progresiva para estructurar, refinar y acelerar tus flujos de adquisición corporativa.
          </p>
        </div>

        {/* 3 Columns Progressive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch relative" id="roadmap-grid">
          
          {roadmapSteps.map((step, idx) => {
            const Icon = iconMap[step.icon];
            const isFeatured = step.status === 'escala';
            
            return (
              <div key={step.id} className="relative flex">
                <motion.div
                  custom={idx}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  className={`w-full p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden glass-card ${
                    isFeatured
                      ? 'border-2 border-brand-teal shadow-[0_0_25px_rgba(80,219,202,0.15)] min-h-[460px]'
                      : 'border border-white/10 hover:border-white/20 min-h-[420px]'
                  }`}
                >
                  {/* Subtle index background number */}
                  <div
                    className={`absolute right-4 top-2 font-display font-black text-8xl leading-none select-none pointer-events-none opacity-10 ${
                      isFeatured ? 'text-brand-teal' : 'text-brand-violet'
                    }`}
                  >
                    {step.id}
                  </div>

                  <div>
                    {/* Header: Icon + Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <span
                        className={`p-3.5 rounded-2xl border ${
                          isFeatured
                            ? 'bg-brand-teal/10 text-brand-teal border-brand-teal/20'
                            : 'bg-brand-violet/10 text-brand-violet border-brand-violet/20'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </span>
                      <div>
                        <span className={`text-[10px] font-mono font-bold tracking-wider uppercase block ${isFeatured ? 'text-brand-teal' : 'text-brand-violet'}`}>
                          ETAPA {step.id}
                        </span>
                        <h3 className="font-display font-extrabold text-xl tracking-tight leading-none mt-1">
                          {step.title.includes(': ') ? step.title.split(': ')[1] : step.title}
                        </h3>
                      </div>
                    </div>

                    <p className={`text-sm font-semibold mb-6 ${isFeatured ? 'text-brand-teal/90' : 'text-brand-violet'}`}>
                      {step.subtitle}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-4">
                      {step.list.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-3">
                          <span className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                            isFeatured ? 'bg-brand-teal/10 text-brand-teal' : 'bg-brand-violet/10 text-brand-violet'
                          }`}>
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span className="text-xs sm:text-sm leading-relaxed text-white/80">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-4 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-between">
                    <span className={isFeatured ? 'text-brand-teal' : 'text-white/50'}>
                      {isFeatured ? '📈 ACCELERATION ZONE' : '⚙️ PREPARATION ZONE'}
                    </span>
                    <span className={isFeatured ? 'text-brand-teal/55' : 'text-brand-violet/60'}>
                      {String(step.id).replace(/^0+/, '') === '1' && 'DÍAS 1-30'}
                      {String(step.id).replace(/^0+/, '') === '2' && 'DÍAS 31-60'}
                      {String(step.id).replace(/^0+/, '') === '3' && 'DÍAS 61-90'}
                    </span>
                  </div>
                </motion.div>

                {/* Connection arrows on desktop */}
                {idx < roadmapSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-6 -translate-y-1/2 z-20 pointer-events-none hidden lg:block text-brand-teal">
                    <motion.div
                      animate={{ x: [-5, 5, -5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <ArrowRight className="w-6 h-6 text-brand-teal/70 stroke-[2]" />
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
