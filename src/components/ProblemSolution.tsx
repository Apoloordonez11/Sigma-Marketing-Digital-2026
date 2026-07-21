import { motion } from 'motion/react';
import { X, Check, Handshake, TrendingUp, EyeOff, ThumbsDown, UserCheck } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    'Métricas de vanidad sin impacto en revenue',
    'Campañas aisladas sin sistema conectado',
    'Reportes confusos que no explican el ROI',
    'Dependencia de una sola plataforma publicitaria'
  ];

  const solutions = [
    'Métricas ligadas a revenue real y contratos firmados',
    'Ecosistema conectado de canales de adquisición',
    'Dashboard ejecutivo con decisiones 100% basadas en datos',
    'Diversificación inteligente: Google, SEO, Meta, WhatsApp, IA'
  ];

  return (
    <section
      id="problem-solution"
      className="py-24 px-6 relative bg-brand-midnight/20 blueprint-grid overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="text-brand-teal text-xs font-mono font-bold uppercase tracking-[2px] bg-brand-teal/10 px-3 py-1 rounded-full">
            EL ENFOQUE ESTRATÉGICO
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mt-4 text-white">
            ¿Por qué la mayoría del marketing falla?
          </h2>
        </div>

        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-stretch relative" id="problems-grid">
          
          {/* THE OLD WAY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              {/* Badges / Icons */}
              <div className="flex gap-3 mb-6">
                <span className="p-3 rounded-2xl bg-red-950/40 text-red-400 border border-red-900/30">
                  <ThumbsDown className="w-6 h-6" />
                </span>
                <span className="p-3 rounded-2xl bg-red-950/40 text-red-400 border border-red-900/30">
                  <EyeOff className="w-6 h-6" />
                </span>
              </div>

              <span className="text-red-400 text-xs font-mono font-bold uppercase tracking-[2px]">
                THE OLD WAY (EL CAMINO TRADICIONAL)
              </span>
              <h3 className="font-display font-bold text-2xl mt-2 mb-4 text-white">
                El marketing tradicional promete clics y seguidores
              </h3>
              <p className="text-red-400/90 font-medium mb-8 text-sm sm:text-base">
                Eso no paga las facturas.
              </p>

              {/* Problems List */}
              <ul className="space-y-4">
                {problems.map((prob, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-950/60 text-red-400 border border-red-900/40 flex items-center justify-center text-xs font-bold">
                      <X className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-white/70 text-sm sm:text-base leading-relaxed">
                      {prob}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-white/5 pt-6 text-xs text-white/40 font-mono">
              ❌ MARKETING AISLADO • ROI NEGATIVO • INCERTIDUMBRE
            </div>
          </motion.div>

          {/* DIVISOR CENTRAL (Only visible on lg screens) */}
          <div className="hidden lg:flex flex-col items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-full py-12 pointer-events-none">
            <div className="h-full w-[2px] bg-gradient-to-b from-brand-violet to-brand-teal opacity-50" />
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-violet to-brand-teal text-white flex items-center justify-center shadow-md border-2 border-brand-midnight font-bold"
            >
              →
            </motion.div>
            <div className="h-full w-[2px] bg-gradient-to-b from-brand-teal to-brand-violet opacity-50" />
          </div>

          {/* THE SIGMA WAY */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="glass-card border-2 border-brand-teal/30 rounded-3xl p-8 sm:p-10 shadow-[0_0_25px_rgba(80,219,202,0.15)] flex flex-col justify-between relative overflow-hidden"
          >
            {/* Glowing decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-violet/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Good icons */}
              <div className="flex gap-3 mb-6">
                <span className="p-3 rounded-2xl bg-brand-violet/20 text-brand-teal border border-brand-teal/20">
                  <Handshake className="w-6 h-6" />
                </span>
                <span className="p-3 rounded-2xl bg-brand-violet/20 text-brand-teal border border-brand-teal/20">
                  <UserCheck className="w-6 h-6" />
                </span>
                <span className="p-3 rounded-2xl bg-brand-violet/20 text-brand-teal border border-brand-teal/20">
                  <TrendingUp className="w-6 h-6" />
                </span>
              </div>

              <span className="text-brand-teal text-xs font-mono font-bold uppercase tracking-[2px] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                THE SIGMA WAY (NUESTRO SISTEMA)
              </span>
              <h3 className="font-display font-extrabold text-2xl mt-2 mb-4 text-gradient">
                Nosotros buscamos más contratos firmados
              </h3>
              <p className="text-brand-teal font-medium mb-8 text-sm sm:text-base">
                Una agencia vale más cuando su reputación y sus resultados financieros crecen al mismo tiempo.
              </p>

              {/* Solutions List */}
              <ul className="space-y-4">
                {solutions.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-teal/10 text-brand-teal border border-brand-teal/30 flex items-center justify-center text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-white/90 text-sm sm:text-base leading-relaxed">
                      {sol}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-white/5 pt-6 text-xs text-brand-teal font-mono flex items-center gap-2 relative z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-ping" />
              SISTEMA INTEGRAL • ADQUISICIÓN PREDECIBLE • DECISIONES CON DATOS
            </div>
          </motion.div>

        </div>

        {/* Banner Inferior */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 rounded-2xl p-6 sm:p-8 sigma-gradient text-brand-midnight text-center shadow-lg relative overflow-hidden glow-mint"
          id="problems-banner"
        >
          {/* subtle animated overlay pattern */}
          <div className="absolute inset-0 bg-white/5 blueprint-bg opacity-30" />
          <p className="font-display font-bold text-lg sm:text-xl md:text-2xl relative z-10 tracking-tight leading-snug">
            Sigma Agency no vende servicios aislados.
            <br />
            Construye relaciones de valor a largo plazo respaldadas por ROI.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
