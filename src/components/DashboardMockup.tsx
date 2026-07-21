import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { UserCheck, FileText, Users, TrendingUp, DollarSign, MousePointerClick, ArrowRight, Activity } from 'lucide-react';
import { dashboardMetrics } from '../data';

// Map icon names to Lucide icons
const iconMap: { [key: string]: any } = {
  UserCheck,
  FileSend: FileText,
  Users,
  TrendingUp,
  DollarSign,
  MousePointerClick,
};

// Custom animated counter component
function Counter({ value, duration = 2000, suffix = '' }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const totalFrames = Math.round(duration / 16); // 60fps roughly
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const currentVal = end * (progress * (2 - progress));

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(currentVal);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value, duration, inView]);

  return (
    <span ref={ref} className="font-display font-extrabold">
      {suffix === '%' ? count.toFixed(1) : value.toString().includes('.') ? count.toFixed(2) : Math.round(count).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function DashboardMockup() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="dashboard"
      className="py-24 px-6 relative bg-brand-midnight/20 blueprint-grid overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/2 -left-40 w-96 h-96 bg-brand-violet/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text copy */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-brand-teal text-xs font-mono font-bold uppercase tracking-[2px] inline-flex items-center gap-2 mb-4 bg-brand-teal/10 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              SISTEMA DE MANDO EJECUTIVO
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-white mb-6">
              Visibilidad Total: Dashboard Ejecutivo
            </h2>
            <p className="text-white/80 text-base sm:text-lg font-light leading-relaxed mb-6">
              Cada indicador te permite saber exactamente dónde invertir, qué optimizar y cómo escalar con un riesgo mínimo.
            </p>
            <div className="p-4 bg-brand-violet/15 border-l-4 border-brand-teal rounded-r-xl mb-8">
              <p className="font-display font-bold text-brand-teal text-base tracking-tight">
                Decisiones basadas 100% en datos.
              </p>
            </div>

            <a
              href="#contacto"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm sm:text-base bg-gradient-to-r from-brand-violet to-brand-teal text-brand-midnight shadow-lg hover:shadow-brand-teal/20 hover:scale-105 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              Quiero ver mi Dashboard
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </a>
          </div>

          {/* Right Column: Isometric tablet mockup dashboard */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 10, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="w-full bg-brand-midnight/60 border border-brand-teal/20 rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(116,94,240,0.25)] relative overflow-hidden glass-card"
              id="dashboard-mockup"
            >
              {/* Tablet screen reflection effect */}
              <div className="absolute top-0 left-0 w-full h-[120%] bg-gradient-to-br from-white/5 via-transparent to-transparent -translate-y-1/2 pointer-events-none" />

              {/* Tablet Top Header control */}
              <div className="flex items-center justify-between border-b border-brand-teal/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-brand-teal uppercase font-bold flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-brand-teal animate-pulse" />
                    SIGMA COMMAND HUB • LIVE DATA
                  </span>
                </div>
                <span className="text-[10px] font-mono text-white/50 bg-brand-violet/20 border border-brand-violet/40 px-2 py-0.5 rounded">
                  90 DAYS PLAN ACTIVE
                </span>
              </div>

              {/* Widgets Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {dashboardMetrics.map((metric, idx) => {
                  const Icon = iconMap[metric.icon] || UserCheck;
                  return (
                    <div
                      key={metric.id}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-teal/30 transition-all duration-300 relative overflow-hidden group shadow-md flex flex-col justify-between min-h-[120px] backdrop-blur-md"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-white/60 text-xs font-medium tracking-tight">
                          {metric.label}
                        </span>
                        <span className="p-1.5 rounded-lg bg-brand-violet/10 text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-midnight transition-colors">
                          <Icon className="w-4 h-4" />
                        </span>
                      </div>

                      <div>
                        <div className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-white">
                          {metric.id === 'cpa' && <span className="text-brand-teal text-xl mr-0.5">$</span>}
                          {inView ? (
                            <Counter value={metric.value} suffix={metric.suffix} />
                          ) : (
                            <span>0</span>
                          )}
                        </div>

                        {/* Mini sparklines/charts indicators based on widget */}
                        <div className="mt-3 flex items-center justify-between">
                          <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${metric.trend.startsWith('+') ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                            {metric.trend}
                          </span>

                          {/* Quick Custom SVG line charts inside widget */}
                          <svg className="w-12 h-4 overflow-visible" viewBox="0 0 50 15">
                            {metric.id === 'leads' && (
                              <path
                                d="M 0 10 L 10 12 L 20 8 L 30 11 L 40 4 L 50 2"
                                fill="none"
                                stroke="#50DBCA"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            )}
                            {metric.id === 'proposals' && (
                              <rect x="2" y="4" width="6" height="11" fill="#745EF0" opacity="0.8" rx="1" />
                            )}
                            {metric.id === 'proposals' && (
                              <rect x="12" y="7" width="6" height="8" fill="#745EF0" opacity="0.8" rx="1" />
                            )}
                            {metric.id === 'proposals' && (
                              <rect x="22" y="2" width="6" height="13" fill="#50DBCA" rx="1" />
                            )}
                            {metric.id === 'conversion' && (
                              <path
                                d="M 0 12 L 15 12 L 30 6 L 45 4 L 50 3"
                                fill="none"
                                stroke="#745EF0"
                                strokeWidth="2"
                                strokeLinecap="round"
                              />
                            )}
                            {metric.id === 'cpa' && (
                              <path
                                d="M 0 2 L 15 4 L 30 9 L 45 12 L 50 14"
                                fill="none"
                                stroke="#ef4444"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            )}
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
