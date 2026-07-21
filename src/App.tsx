/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Ecosystem from './components/Ecosystem';
import Funnel from './components/Funnel';
import GoogleSEO from './components/GoogleSEO';
import FlowIA from './components/FlowIA';
import DashboardMockup from './components/DashboardMockup';
import Roadmap from './components/Roadmap';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="bg-[#0F0730] min-h-screen text-white antialiased relative overflow-x-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-[-5%] left-[-10%] w-[600px] h-[600px] bg-[#745EF0] rounded-full filter blur-[120px] opacity-20 pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#50DBCA] rounded-full filter blur-[120px] opacity-10 pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[#745EF0] rounded-full filter blur-[150px] opacity-10 pointer-events-none z-0" />
      <div className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] bg-[#50DBCA] rounded-full filter blur-[150px] opacity-15 pointer-events-none z-0" />

      {/* Navigation Header */}
      <Header />

      <main className="relative z-10">
        {/* SECTION 1: Hero Section */}
        <Hero />

        {/* SECTION 2: Problem vs Solution */}
        <ProblemSolution />

        {/* SECTION 3: El Ecosistema de Crecimiento Conectado */}
        <Ecosystem />

        {/* SECTION 4: Embudo de Growth Marketing */}
        <Funnel />

        {/* SECTION 5: SEO + Google — Captación de Alta Intención */}
        <GoogleSEO />

        {/* SECTION 6: Velocidad y Conversión — El Flujo IA */}
        <FlowIA />

        {/* SECTION 7: Dashboard Ejecutivo — Visibilidad Total */}
        <DashboardMockup />

        {/* SECTION 8: Roadmap 90 días — De Cero a Escala */}
        <Roadmap />

        {/* SECTION 9: Arquitectura de Planes / Pricing */}
        <Pricing />

        {/* SECTION 10: Testimonios / Social Proof */}
        <Testimonials />

        {/* SECTION 11: FAQ / Objeciones */}
        <FAQ />

        {/* SECTION 12: CTA Final + Footer */}
        <FooterCTA />
      </main>
    </div>
  );
}
