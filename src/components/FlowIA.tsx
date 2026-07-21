import { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, CheckSquare, TrendingUp, AlertCircle, Sparkles, User, HelpCircle, ChevronRight, Zap } from 'lucide-react';
import { timelineSteps } from '../data';

export default function FlowIA() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const benefits = [
    {
      title: 'Menor tiempo de respuesta',
      description: 'El primer contacto toma segundos, evitando que el lead busque alternativas en la competencia.',
      icon: Clock,
    },
    {
      title: 'Cero tareas manuales repetitivas',
      description: 'Tu equipo de ventas ya no pierde tiempo llamando a contactos fantasmas o no calificados.',
      icon: CheckSquare,
    },
    {
      title: 'Mayor conversión por atención inmediata',
      description: 'La inmediatez en B2B multiplica por 4 la tasa de agendamiento y cierre de contratos.',
      icon: TrendingUp,
    },
  ];

  // Helper to color steps as requested
  const getStepColor = (id: number) => {
    if (id <= 3) return 'bg-brand-violet/25 text-white border-brand-violet/40 hover:bg-brand-violet/35'; // Automatización
    if (id <= 6) return 'bg-brand-teal/20 text-white border-brand-teal/40 hover:bg-brand-teal/30'; // Humano + Tecnología
    return 'bg-brand-violet/25 text-white border-brand-violet/40 hover:bg-brand-violet/35'; // Cierre y mejora
  };

  return (
    <section id="flujo-ia" className="py-24 px-6 relative bg-brand-midnight/20 blueprint-grid overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-teal text-xs font-mono font-bold uppercase tracking-[2px] bg-brand-teal/10 px-3 py-1 rounded-full">
            VELOCIDAD Y EFICACIA CON IA
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mt-4 text-white">
            Velocidad y Conversión: El Flujo IA
          </h2>
          <p className="text-white/80 mt-4 text-base sm:text-lg leading-relaxed">
            Handoff inteligente entre la automatización y la experiencia humana para acortar tu ciclo de ventas.
          </p>
        </div>

        {/* Timeline Path Block */}
        <div className="relative mb-20">
          
          {/* Horizontal Desktop Grid of Steps */}
          <div className="hidden xl:grid grid-cols-8 gap-4 items-stretch relative" id="flow-desktop-grid">
            
            {timelineSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                whileHover={{ y: -6 }}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                className={`p-4 rounded-2xl border flex flex-col justify-between transition-all duration-300 relative cursor-pointer shadow-lg backdrop-blur-md ${getStepColor(
                  step.id
                )}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-extrabold opacity-75">
                      Paso 0{step.id}
                    </span>
                    {step.type === 'auto' && <Zap className="w-3.5 h-3.5 text-brand-teal animate-pulse" />}
                    {step.type === 'human' && <User className="w-3.5 h-3.5 text-brand-teal" />}
                    {step.type === 'feedback' && <Sparkles className="w-3.5 h-3.5 text-brand-teal" />}
                  </div>

                  <h3 className="font-display font-bold text-sm tracking-tight leading-snug">
                    {step.label}
                  </h3>
                </div>

                <div className="mt-4">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wide opacity-80 block">
                    {step.type === 'auto' && 'AUTOMATIZACIÓN'}
                    {step.type === 'human' && 'HUMANO + TEC'}
                    {step.type === 'feedback' && 'MEJORA CONTINUA'}
                  </span>
                </div>

                {/* Draw connection arrows */}
                {idx < timelineSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-3 -translate-y-1/2 z-20 pointer-events-none hidden xl:block text-brand-teal">
                    <ChevronRight className="w-5 h-5 text-white/30 stroke-[3]" />
                  </div>
                )}

                {/* SMART HANDOFF ALERT (Between Pre-calificación IA and Ejecutivo Comercial) */}
                {step.id === 3 && (
                  <div className="absolute -right-3 top-1/4 -translate-y-1/2 z-30 pointer-events-none xl:block hidden">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="p-1.5 rounded-full bg-red-500 text-white shadow-lg border border-white flex items-center justify-center cursor-help"
                      title="Handoff Inteligente: Alerta enviada a ventas"
                    >
                      <AlertCircle className="w-4.5 h-4.5" />
                    </motion.div>
                  </div>
                )}

                {/* Detail card tooltip */}
                {activeStep === step.id && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 glass-card text-white p-3 rounded-xl shadow-xl border border-brand-teal/30 z-30 text-xs">
                    <p className="leading-relaxed">{step.description}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile and Tablet Timeline Layout */}
          <div className="xl:hidden flex flex-col gap-4" id="flow-mobile-list">
            {timelineSteps.map((step, idx) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer shadow-md backdrop-blur-md ${getStepColor(
                  step.id
                )}`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-extrabold opacity-75">0{step.id}</span>
                    <h3 className="font-display font-bold text-base">{step.label}</h3>
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded">
                    {step.type === 'auto' && 'AUTOMATIZACIÓN'}
                    {step.type === 'human' && 'HUMANO + TEC'}
                    {step.type === 'feedback' && 'MEJORA'}
                  </span>
                </div>

                {activeStep === step.id ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="mt-3 border-t border-current/10 pt-3 text-xs leading-relaxed"
                  >
                    {step.description}
                  </motion.div>
                ) : (
                  <div className="text-[10px] font-mono opacity-70 mt-1">
                    💡 Toca para ver la descripción de esta etapa
                  </div>
                )}

                {/* Notificación en mobile */}
                {step.id === 3 && (
                  <div className="mt-3 flex items-center gap-2 p-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg text-xs font-semibold">
                    <AlertCircle className="w-4 h-4 animate-bounce" />
                    <span>Handoff Inteligente: Alerta instantánea enviada al Ejecutivo Comercial</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits cards layout */}
        <div className="border-t border-white/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="flow-benefits">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col gap-4 hover:shadow-lg transition-all duration-300"
                >
                  <span className="p-3 rounded-2xl bg-brand-teal/10 text-brand-teal w-fit border border-brand-teal/20">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="font-display font-bold text-lg text-white leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
