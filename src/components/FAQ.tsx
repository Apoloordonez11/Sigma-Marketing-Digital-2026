import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';
import { faqList } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 px-6 relative bg-brand-midnight/20 blueprint-grid overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="text-brand-teal text-xs font-mono font-bold uppercase tracking-[2px] bg-brand-teal/10 px-3 py-1 rounded-full">
            RESOLVEMOS TUS DUDAS
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mt-4 text-white">
            Preguntas Frecuentes
          </h2>
          <p className="text-white/80 mt-3 text-sm sm:text-base">
            Todo lo que necesitas saber sobre el "SIGMA AI: Sistema de Crecimiento Conectado".
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-container">
          {faqList.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`transition-all duration-300 rounded-2xl overflow-hidden ${
                  isOpen
                    ? 'border-brand-teal/30 border-l-4 border-l-brand-teal bg-white/10 backdrop-blur-md shadow-md'
                    : 'border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10'
                }`}
              >
                {/* Trigger head */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${faq.id}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`p-1.5 rounded-lg flex-shrink-0 ${isOpen ? 'bg-brand-teal/10 text-brand-teal' : 'bg-white/5 text-white/40 border border-white/5'}`}>
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-tight leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <span className={`transition-transform duration-300 flex-shrink-0 ${isOpen ? 'text-brand-teal rotate-90' : 'text-white/40'}`}>
                    <ChevronRight className="w-5 h-5" />
                  </span>
                </button>

                {/* Animated content body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-6 pt-0 border-t border-white/5 text-xs sm:text-sm text-white/75 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
