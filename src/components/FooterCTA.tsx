import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Check, Mail, Phone, MapPin, ArrowRight, Star, Shield, HelpCircle, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function FooterCTA() {
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  
  // Custom contact capture state
  const [contactForm, setContactForm] = useState({
    name: '',
    agencyName: '',
    phone: '',
    message: ''
  });

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.phone) return;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...contactForm })
    })
      .then(() => setFormSubmitted(true))
      .catch((error) => console.error('Netlify form submission error:', error));
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
  };

  return (
    <footer id="contacto" className="relative text-white bg-brand-midnight/40 blueprint-grid pt-24 pb-12 px-6 overflow-hidden">
      
      {/* Visual background blueprint grid overlapping */}
      <div className="absolute inset-0 bg-brand-midnight/20 opacity-40 pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-brand-teal/30 rounded-full blur-xs animate-bounce" />
      <div className="absolute bottom-1/3 right-12 w-3 h-3 bg-brand-teal/40 rounded-full blur-xs animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Massive CTA Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-brand-teal text-xs font-mono font-bold uppercase tracking-[3px] bg-brand-teal/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
            🚀 DA EL SALTO TECNOLÓGICO
          </span>
          
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
            El crecimiento no es un evento.<br />
            <span className="text-brand-teal">Es un sistema.</span>
          </h2>
          
          <p className="text-white/80 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto mb-12">
            Cada inversión genera información. Cada decisión está respaldada por datos.
          </p>

          {/* Interactive Lead Capture Form Block instead of simple placeholder */}
          <div className="w-full max-w-lg mx-auto glass-card border-2 border-brand-teal/20 rounded-3xl p-6 sm:p-8 shadow-[0_0_25px_rgba(80,219,202,0.15)]">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleContactSubmit}
                  className="space-y-4 text-left"
                  name="contact"
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <h3 className="font-display font-bold text-lg text-white mb-4 text-center">
                    Solicita tu Auditoría Estratégica
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono font-bold text-brand-teal uppercase block mb-1">Tu Nombre *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ej. Carlos Mendoza"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-teal"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono font-bold text-brand-teal uppercase block mb-1">Nombre Agencia / Empresa</label>
                      <input
                        type="text"
                        name="agencyName"
                        placeholder="Ej. Logix Solutions"
                        value={contactForm.agencyName}
                        onChange={(e) => setContactForm({ ...contactForm, agencyName: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-teal"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold text-brand-teal uppercase block mb-1">Teléfono WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Ej. +34 600 000 000"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-teal"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono font-bold text-brand-teal uppercase block mb-1">¿Cuál es tu principal cuello de botella?</label>
                    <textarea
                      name="message"
                      rows={2}
                      placeholder="Ej. Inversión alta en pauta, leads de baja calidad..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand-teal resize-none"
                    />
                  </div>

                  {/* Massive Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-violet to-brand-teal text-brand-midnight hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(80,219,202,0.3)] hover:shadow-brand-teal/45 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Agenda tu Diagnóstico Estratégico Gratis</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[10px] text-white/40 text-center leading-relaxed">
                    🔒 Tus datos están 100% protegidos. Al enviar aceptas el tratamiento de datos para coordinar el diagnóstico.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center flex flex-col items-center gap-4"
                >
                  <span className="p-4 rounded-full bg-brand-teal/20 text-brand-teal border border-brand-teal/40">
                    <Check className="w-10 h-10 stroke-[3]" />
                  </span>
                  
                  <h3 className="font-display font-extrabold text-2xl text-white tracking-tight">
                    ¡Diagnóstico Reservado!
                  </h3>
                  
                  <p className="text-sm text-white/80 max-w-xs leading-relaxed">
                    Hola <span className="font-bold text-brand-teal">{contactForm.name}</span>, hemos recibido tu solicitud para <span className="font-bold">{contactForm.agencyName || 'tu negocio'}</span>. 
                    Un especialista comercial te escribirá por WhatsApp a <span className="font-mono text-brand-teal">{contactForm.phone}</span> en menos de 10 minutos.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-8 text-center">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[2px] text-brand-teal uppercase">
              SIGMA AI · Sistema de Crecimiento Conectado
            </span>
          </div>
        </div>

        {/* Footer Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-t border-white/10 pt-16 pb-12 text-left" id="footer-links">
          
          {/* Col 1: Brand details */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 group mb-4">
              <svg
                className="w-9 h-9"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="footer-sigma-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#50DBC2" />
                    <stop offset="50%" stopColor="#745EF0" />
                    <stop offset="100%" stopColor="#3b2d94" />
                  </linearGradient>
                  <linearGradient id="footer-accent-grad" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#50DBC2" />
                    <stop offset="100%" stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>

                {/* Outer futuristic tracking brackets */}
                <path
                  d="M 25 12 A 40 40 0 0 0 25 88"
                  stroke="white"
                  strokeOpacity="0.15"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M 75 12 A 40 40 0 0 1 75 88"
                  stroke="white"
                  strokeOpacity="0.15"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Upper block of Sigma - futuristic ribbon */}
                <path
                  d="M 75 28 H 32 L 54 50"
                  stroke="url(#footer-sigma-grad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Lower block of Sigma - futuristic ribbon */}
                <path
                  d="M 54 50 L 32 72 H 75"
                  stroke="url(#footer-sigma-grad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Floating accent line inside the Sigma to give a 3D overlay */}
                <path
                  d="M 45 50 L 32 63 H 58"
                  stroke="url(#footer-accent-grad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Central glowing core dot representing Connected Data/IA */}
                <circle
                  cx="54"
                  cy="50"
                  r="4.5"
                  fill="#50DBC2"
                />
              </svg>
              <span className="font-display font-black text-2xl tracking-wider text-white transition-all duration-300 group-hover:text-brand-teal">
                SIGMA<span className="text-brand-teal text-xs ml-1 font-mono tracking-normal font-bold">AI</span>
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-white/70 max-w-xs leading-relaxed mb-6">
              "No medimos likes. Medimos crecimiento real." Construyendo máquinas de adquisición conectadas con inteligencia artificial para agencias de alto nivel.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-teal hover:text-brand-midnight text-white/80 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-teal hover:text-brand-midnight text-white/80 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-brand-teal hover:text-brand-midnight text-white/80 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold text-brand-teal uppercase tracking-wider">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#ecosistema" className="hover:text-brand-teal transition-colors">Ecosistema</a></li>
              <li><a href="#embudo" className="hover:text-brand-teal transition-colors">Embudo</a></li>
              <li><a href="#flujo-ia" className="hover:text-brand-teal transition-colors">Flujo IA</a></li>
              <li><a href="#dashboard" className="hover:text-brand-teal transition-colors">Dashboard</a></li>
              <li><a href="#planes" className="hover:text-brand-teal transition-colors">Planes</a></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold text-brand-teal uppercase tracking-wider">
              Contacto Directo
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-white/70">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>contacto@sigmaagency.ai</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>+34 600 999 888</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-teal flex-shrink-0" />
                <span>Av. de la Inteligencia 300, Madrid</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter capture */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-mono font-bold text-brand-teal uppercase tracking-wider">
              Insights de Growth B2B
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Recibe estrategias exclusivas sobre IA, pauta y automatizaciones directamente en tu correo.
            </p>

            <AnimatePresence mode="wait">
              {!newsletterSubmitted ? (
                <motion.form
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleNewsletterSubmit}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Tu email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-teal"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-brand-teal text-brand-midnight rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
                    aria-label="Registrar"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-brand-teal font-medium"
                >
                  ✓ ¡Suscrito con éxito! Gracias por unirte.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Lower footer line */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <span>© 2026 Sigma Agency. Todos los derechos reservados.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-teal transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-brand-teal transition-colors">Política de Privacidad</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
