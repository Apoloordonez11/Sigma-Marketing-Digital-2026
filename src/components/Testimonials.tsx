import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Autoplay every 5 seconds as requested
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  const activeTest = testimonials[activeIndex];

  return (
    <section
      id="testimonios"
      className="py-24 px-6 relative bg-brand-midnight/20 blueprint-grid overflow-hidden"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-violet/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="text-brand-teal text-xs font-mono font-bold uppercase tracking-[2px] bg-brand-teal/10 px-3 py-1 rounded-full">
            CASOS DE ÉXITO B2B
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mt-4 text-white">
            Agencias que ya crecen con el Sistema Sigma
          </h2>
        </div>

        {/* Carousel Slider */}
        <div className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center">
          
          {/* Slide item */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTest.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full glass-card border border-brand-teal/20 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center"
              id={`testimonial-slide-${activeTest.id}`}
            >
              {/* Image & Metric Badges Column */}
              <div className="flex flex-col items-center text-center gap-3 flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-violet to-brand-teal animate-spin-slow opacity-75 blur-md" />
                  <img
                    src={activeTest.image}
                    alt={activeTest.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-brand-teal relative z-10"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div>
                  <h4 className="font-display font-extrabold text-sm text-white leading-tight">
                    {activeTest.name}
                  </h4>
                  <span className="text-[10px] text-white/50 block font-medium mt-0.5">
                    {activeTest.role}
                  </span>
                  <span className="text-[10px] text-brand-teal font-mono uppercase tracking-wider block">
                    {activeTest.company}
                  </span>
                </div>

                {/* Rating 5 stars */}
                <div className="flex gap-0.5 text-brand-teal mt-1">
                  {Array.from({ length: activeTest.rating }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Quote details Column */}
              <div className="flex-1 flex flex-col justify-between items-start text-center md:text-left">
                <Quote className="w-8 h-8 text-brand-teal/20 self-center md:self-start mb-2" />
                
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light italic mb-6">
                  "{activeTest.quote}"
                </p>

                {/* Core highlight metric badge */}
                <div className="px-4 py-2 rounded-xl bg-brand-teal/15 border border-brand-teal/30 text-brand-teal text-xs sm:text-sm font-mono font-bold flex items-center gap-2 self-center md:self-start shadow-[0_0_15px_rgba(80,219,202,0.1)]">
                  <span className="w-2 h-2 rounded-full bg-brand-teal animate-ping" />
                  RESULTADO CLAVE: {activeTest.metric}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Lateral arrow controls */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 lg:-left-16 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/10 hover:border-brand-teal/40 bg-brand-midnight/60 hover:bg-brand-teal hover:text-brand-midnight transition-all text-white/80 z-20 cursor-pointer hidden md:flex"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 lg:-right-16 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/10 hover:border-brand-teal/40 bg-brand-midnight/60 hover:bg-brand-teal hover:text-brand-midnight transition-all text-white/80 z-20 cursor-pointer hidden md:flex"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel indicators dots / Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex ? 'w-6 bg-brand-teal' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Ir al testimonio ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
