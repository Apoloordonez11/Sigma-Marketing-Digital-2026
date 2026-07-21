import { Check, X, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { pricingPlans } from '../data';

export default function Pricing() {
  return (
    <section id="planes" className="py-24 px-6 relative bg-brand-midnight/20 blueprint-grid overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-teal text-xs font-mono font-bold uppercase tracking-[2px] bg-brand-teal/10 px-4 py-1.5 rounded-full">
            Identifica tu Perfil de Madurez
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mt-4 text-white">
            Arquitectura de Planes
          </h2>
          <p className="text-white/80 mt-4 text-base sm:text-lg leading-relaxed">
            Sin cobrarte de más por lo que aún no necesitas, y sin quedarnos cortos cuando tu éxito exija más.
          </p>
        </div>

        {/* Pricing Cards Container: Scroll on mobile, 4-column grid on desktop */}
        <div className="relative">
          <div
            className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-x-visible pb-8 lg:pb-0 scroll-smooth snap-x snap-mandatory"
            id="pricing-slider"
          >
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className="flex-shrink-0 w-[290px] sm:w-[320px] lg:w-auto snap-start flex"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`w-full rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    plan.isFeatured
                      ? 'glass-card border-2 border-brand-teal shadow-[0_0_25px_rgba(80,219,202,0.15)]'
                      : 'bg-white/5 backdrop-blur-md border border-white/10 shadow-sm'
                  }`}
                >
                  {/* Recommended rotated Absolute Badge */}
                  {plan.isFeatured && (
                    <span className="absolute top-4 -right-2 bg-brand-teal text-brand-midnight text-[10px] font-mono font-extrabold px-3 py-1 rounded-l-md uppercase tracking-widest shadow-md rotate-3 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {plan.badge}
                    </span>
                  )}

                  <div>
                    {/* Top block */}
                    <div className="mb-6">
                      {!plan.isFeatured && (
                        <span className="text-brand-teal text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-teal/10 px-2.5 py-1 rounded-full">
                          {plan.badge}
                        </span>
                      )}
                      
                      <h3 className="font-display font-extrabold text-2xl tracking-tight text-white mt-3">
                        {plan.name}
                      </h3>
                      
                      <div className="flex items-baseline gap-1 mt-4">
                        <span className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white">
                          {plan.price}
                        </span>
                        {plan.price.includes('$') && (
                          <span className="text-xs font-mono text-white/60 font-medium">/mes</span>
                        )}
                      </div>
                    </div>

                    {/* Sub phrase */}
                    <p className="text-xs text-brand-teal font-semibold leading-relaxed mb-4 border-b border-white/10 pb-4">
                      {plan.phrase}
                    </p>

                    <div className="mb-6">
                      <span className="text-[10px] font-mono font-bold text-white/40 block uppercase mb-1">
                        IDEAL PARA:
                      </span>
                      <p className="text-xs font-medium text-white/90 leading-tight">
                        {plan.idealFor}
                      </p>
                    </div>

                    {/* Features checklist */}
                    <ul className="space-y-3.5 mb-8">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs">
                          {feature.included ? (
                            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                          ) : (
                            <span className="flex-shrink-0 w-4 h-4 rounded-full bg-white/5 text-white/20 border border-white/10 flex items-center justify-center">
                              <X className="w-3 h-3 stroke-[2.5]" />
                            </span>
                          )}
                          <span className={`${feature.included ? 'text-white/90 font-medium' : 'text-white/30 line-through'}`}>
                            {feature.name.split(': ')[0]}
                            {feature.name.includes(':') && (
                              <span className="text-brand-teal font-bold ml-1">
                                {feature.name.split(': ')[1]}
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div>
                    {plan.isFeatured ? (
                      <a
                        href="#contacto"
                        className="w-full text-center py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-violet to-brand-teal text-brand-midnight hover:shadow-lg hover:shadow-brand-teal/20 transition-all block animate-pulse-glow cursor-pointer"
                      >
                        {plan.ctaText}
                      </a>
                    ) : (
                      <a
                        href="#contacto"
                        className="w-full text-center py-3 px-4 rounded-xl font-bold text-sm border border-white/20 text-white hover:bg-brand-teal hover:border-brand-teal hover:text-brand-midnight transition-all block cursor-pointer"
                      >
                        {plan.ctaText}
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Swipe indicator for mobile */}
          <div className="flex justify-center gap-1.5 mt-4 lg:hidden">
            {pricingPlans.map((_, i) => (
              <span key={i} className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-brand-teal' : 'bg-white/20'}`} />
            ))}
          </div>
        </div>

        {/* Note Bottom */}
        <div className="text-center mt-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-white/80 font-medium leading-relaxed">
            💡 Todos los planes incluyen <span className="text-brand-teal font-bold">implementación en 90 días</span>. Sin contratos de permanencia. Cancela cuando quieras.
          </p>
        </div>

      </div>
    </section>
  );
}
