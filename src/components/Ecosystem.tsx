import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, TrendingUp, Target, MessageSquare, Database, Cpu, HelpCircle } from 'lucide-react';
import { ecosystemNodes } from '../data';

// Map icon names to Lucide icons
const iconMap: { [key: string]: any } = {
  Search,
  TrendingUp,
  Target,
  MessageSquare,
};

export default function Ecosystem() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Connection line stroke animation
  const lineTransition = {
    strokeDashoffset: [0, -40],
    transition: {
      strokeDashoffset: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'linear',
      },
    },
  };

  return (
    <section
      id="ecosistema"
      className="py-24 px-6 relative bg-brand-midnight/20 blueprint-grid overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-violet/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-teal text-xs font-mono font-bold uppercase tracking-[2px] inline-flex items-center gap-2 bg-brand-teal/10 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            ARQUITECTURA DE DATOS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mt-4 text-white">
            El Ecosistema de Crecimiento Conectado
          </h2>
          <p className="text-white/80 mt-4 text-base sm:text-lg leading-relaxed">
            Cuando canales, datos, IA y automatización trabajan juntos, dejas de depender de campañas aisladas y comienzas a crecer como una máquina predecible.
          </p>
        </div>

        {/* Interactive Diagram Block */}
        <div className="relative min-h-[500px] flex items-center justify-center py-8">
          
          {/* Connecting SVG lines (Background of nodes) */}
          <svg className="absolute inset-0 w-full h-full hidden md:block select-none pointer-events-none" style={{ minHeight: '500px' }}>
            <defs>
              <linearGradient id="grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#50DBCA" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#745EF0" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="grad-right" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#745EF0" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#50DBCA" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Google Ads -> Central (Flowing IN) */}
            <line x1="15%" y1="25%" x2="50%" y2="50%" stroke="url(#grad-left)" strokeWidth="3" />
            <motion.line
              x1="15%" y1="25%" x2="50%" y2="50%"
              stroke="#50DBCA" strokeWidth="3" strokeDasharray="10 15"
              animate={{ strokeDashoffset: [0, -50] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
            />

            {/* SEO B2B -> Central (Flowing IN) */}
            <line x1="15%" y1="75%" x2="50%" y2="50%" stroke="url(#grad-left)" strokeWidth="3" />
            <motion.line
              x1="15%" y1="75%" x2="50%" y2="50%"
              stroke="#50DBCA" strokeWidth="3" strokeDasharray="10 15"
              animate={{ strokeDashoffset: [0, -50] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
            />

            {/* Central -> Meta Ads (Flowing OUT) */}
            <line x1="50%" y1="50%" x2="85%" y2="25%" stroke="url(#grad-right)" strokeWidth="3" />
            <motion.line
              x1="50%" y1="50%" x2="85%" y2="25%"
              stroke="#50DBCA" strokeWidth="3" strokeDasharray="10 15"
              animate={{ strokeDashoffset: [0, 50] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
            />

            {/* Central -> WhatsApp IA (Flowing OUT) */}
            <line x1="50%" y1="50%" x2="85%" y2="75%" stroke="url(#grad-right)" strokeWidth="3" />
            <motion.line
              x1="50%" y1="50%" x2="85%" y2="75%"
              stroke="#50DBCA" strokeWidth="3" strokeDasharray="10 15"
              animate={{ strokeDashoffset: [0, 50] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
            />
          </svg>

          {/* Grid Layout of Nodes */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
            
            {/* Left Column (Inputs / Inbound) */}
            <div className="flex flex-col gap-10 md:items-end">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[3px] text-brand-teal border-b border-brand-teal/20 pb-2 md:text-right w-full">
                Captación Inbound
              </h4>
              {ecosystemNodes
                .filter((node) => node.position === 'left')
                .map((node) => {
                  const Icon = iconMap[node.icon];
                  return (
                    <motion.div
                      key={node.id}
                      whileHover={{ scale: 1.05 }}
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                      className={`w-full max-w-xs p-5 rounded-2xl transition-all border cursor-pointer relative glass-card shadow-md ${
                        activeNode === node.id
                          ? 'bg-white/10 border-brand-teal glow-border-teal'
                          : 'bg-white/5 border-white/10 hover:border-brand-teal/40'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2 justify-start md:justify-end md:flex-row-reverse">
                        <span className={`p-2.5 rounded-xl ${activeNode === node.id ? 'bg-brand-teal text-brand-midnight animate-pulse' : 'bg-brand-violet/10 text-brand-teal border border-brand-violet/20'}`}>
                          <Icon className="w-5 h-5" />
                        </span>
                        <h3 className="font-display font-bold text-sm tracking-wide text-white">
                          {node.label}
                        </h3>
                      </div>
                      <p className="text-xs text-white/70 md:text-right leading-relaxed">
                        {node.description}
                      </p>

                      {/* Tooltip detail */}
                      {activeNode === node.id && (
                        <div className="absolute top-full left-0 mt-2 bg-brand-teal text-brand-midnight p-3 rounded-lg text-xs font-semibold z-20 shadow-lg border border-white/20">
                          ⚡ Flujo constante de alta intención hacia tu CRM.
                        </div>
                      )}
                    </motion.div>
                  );
                })}
            </div>

            {/* Central Node (Core Engine) */}
            <div className="flex flex-col items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(116, 94, 240, 0.3)',
                    '0 0 35px rgba(80, 219, 202, 0.5)',
                    '0 0 20px rgba(116, 94, 240, 0.3)',
                  ],
                }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                onMouseEnter={() => setActiveNode('central')}
                onMouseLeave={() => setActiveNode(null)}
                className="w-48 h-48 rounded-full bg-gradient-to-tr from-brand-violet to-brand-teal p-[3px] flex items-center justify-center relative cursor-pointer"
              >
                <div className="w-full h-full rounded-full bg-[#0F0730]/95 flex flex-col items-center justify-center text-center p-4">
                  <Database className="w-10 h-10 text-brand-teal mb-2 animate-bounce" />
                  <span className="font-display font-extrabold text-base tracking-wide text-white leading-tight">
                    SIGMA AGENCY
                  </span>
                  <span className="text-[10px] font-mono text-brand-teal mt-1 tracking-wider uppercase">
                    & CRM INTEGRADO
                  </span>
                </div>

                {/* Micro badge indicator */}
                <span className="absolute -top-2 right-2 bg-brand-teal text-brand-midnight text-[9px] font-mono font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
                  SISTEMA SIGMA
                </span>
              </motion.div>

              {/* Central Tooltip Info */}
              <div className="text-center mt-6 min-h-[30px]">
                <p className="text-xs font-mono text-brand-teal/80">
                  {activeNode === 'central'
                    ? '⚡ Sincronización bidireccional en tiempo real con algoritmos de IA.'
                    : 'Pasa el cursor sobre los nodos para auditar el flujo'}
                </p>
              </div>
            </div>

            {/* Right Column (Conversion & Automation) */}
            <div className="flex flex-col gap-10 items-start">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[3px] text-brand-teal border-b border-brand-teal/20 pb-2 w-full">
                Conversión & Conversación
              </h4>
              {ecosystemNodes
                .filter((node) => node.position === 'right')
                .map((node) => {
                  const Icon = iconMap[node.icon];
                  return (
                    <motion.div
                      key={node.id}
                      whileHover={{ scale: 1.05 }}
                      onMouseEnter={() => setActiveNode(node.id)}
                      onMouseLeave={() => setActiveNode(null)}
                      className={`w-full max-w-xs p-5 rounded-2xl transition-all border cursor-pointer relative glass-card shadow-md ${
                        activeNode === node.id
                          ? 'bg-white/10 border-brand-teal glow-border-teal'
                          : 'bg-white/5 border-white/10 hover:border-brand-teal/40'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`p-2.5 rounded-xl ${activeNode === node.id ? 'bg-brand-teal text-brand-midnight animate-pulse' : 'bg-brand-violet/10 text-brand-teal border border-brand-violet/20'}`}>
                          <Icon className="w-5 h-5" />
                        </span>
                        <h3 className="font-display font-bold text-sm tracking-wide text-white">
                          {node.label}
                        </h3>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {node.description}
                      </p>

                      {/* Tooltip detail */}
                      {activeNode === node.id && (
                        <div className="absolute top-full left-0 mt-2 bg-brand-teal text-brand-midnight p-3 rounded-lg text-xs font-semibold z-20 shadow-lg border border-white/20">
                          ⚡ Automatizaciones y re-segmentación hiper-veloz.
                        </div>
                      )}
                    </motion.div>
                  );
                })}
            </div>

          </div>
        </div>

        {/* Base Tecnológica (Progress bars connected to all) */}
        <div className="mt-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8" id="tech-base-bars">
          <h4 className="text-xs font-mono font-bold tracking-[2px] text-brand-teal uppercase mb-6 flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            Cimiento del Ecosistema: Automatización e Inteligencia Comercial
          </h4>

          <div className="space-y-6">
            {/* IA Bar */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono font-bold mb-2">
                <span className="text-white">IA (Inteligencia Artificial & Automatización de Flujos)</span>
                <span className="text-brand-teal">95% AUTOMATIZADO</span>
              </div>
              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '95%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-brand-violet to-brand-teal"
                />
              </div>
            </div>

            {/* BI Bar */}
            <div>
              <div className="flex justify-between items-center text-xs font-mono font-bold mb-2">
                <span className="text-white">BI (Business Intelligence & Toma de Decisiones)</span>
                <span className="text-brand-teal">100% RESPALDADO EN DATOS</span>
              </div>
              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-brand-violet to-brand-teal"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
