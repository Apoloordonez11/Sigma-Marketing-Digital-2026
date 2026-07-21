import {
  Pillar,
  EcosystemNode,
  FunnelStage,
  GrowthLever,
  SearchQuery,
  TimelineStep,
  DashboardMetric,
  RoadmapStep,
  PricingPlan,
  Testimonial,
  FAQItem
} from './types';

export const pillars: Pillar[] = [
  { id: '1', name: 'ESTRATEGIA', icon: 'Compass' },
  { id: '2', name: 'DATOS', icon: 'Database' },
  { id: '3', name: 'IA', icon: 'Cpu' },
  { id: '4', name: 'GROWTH', icon: 'TrendingUp' },
  { id: '5', name: 'RESULTADOS', icon: 'Award' }
];

export const ecosystemNodes: EcosystemNode[] = [
  {
    id: 'google',
    label: 'GOOGLE ADS',
    icon: 'Search',
    description: 'Anuncios de búsqueda y display dirigidos a leads con intención de compra inmediata.',
    position: 'left'
  },
  {
    id: 'seo',
    label: 'SEO B2B',
    icon: 'TrendingUp',
    description: 'Posicionamiento orgánico duradero para las búsquedas clave de tu sector.',
    position: 'left'
  },
  {
    id: 'meta',
    label: 'META ADS',
    icon: 'Target',
    description: 'Campañas hiper-segmentadas en Instagram y Facebook enfocadas en tomadores de decisión.',
    position: 'right'
  },
  {
    id: 'whatsapp',
    label: 'WHATSAPP IA',
    icon: 'MessageSquare',
    description: 'Respuestas instantáneas y pre-calificación inteligente de prospectos vía chat.',
    position: 'right'
  }
];

export const funnelStages: FunnelStage[] = [
  {
    id: 1,
    label: 'Publicidad',
    conversionRate: '100%',
    kpi: 'Alcance y CTR',
    description: 'Tráfico frío captado a través de Google Ads y Meta Ads de alta intención.',
    color: '#E8E8E8'
  },
  {
    id: 2,
    label: 'Leads',
    conversionRate: '40%',
    kpi: 'CPA y Registro',
    description: 'Prospectos interesados que ingresan sus datos buscando una solución.',
    color: '#CBC2FB'
  },
  {
    id: 3,
    label: 'Propuestas',
    conversionRate: '25%',
    kpi: 'Tasa de Calificación',
    description: 'Reuniones de diagnóstico y envío de ofertas comerciales a medida.',
    color: '#AE9DF8'
  },
  {
    id: 4,
    label: 'Clientes',
    conversionRate: '15%',
    kpi: 'Tasa de Cierre',
    description: 'Contratos firmados y onboarding en el ecosistema Sigma.',
    color: '#9179F5'
  },
  {
    id: 5,
    label: 'Proyectos',
    conversionRate: '95%',
    kpi: 'Cumplimiento de KPIs',
    description: 'Ejecución técnica y entrega con estándares de alta calidad.',
    color: '#745EF0'
  },
  {
    id: 6,
    label: 'Recurrentes',
    conversionRate: '70%',
    kpi: 'LTV y Retención',
    description: 'Renovaciones, ampliación de cuentas y crecimiento a largo plazo.',
    color: '#50DBCA'
  }
];

export const growthLevers: GrowthLever[] = [
  {
    title: 'CAPTACIÓN',
    description: 'Meta Ads y Google Ads optimizados para capturar demanda altamente calificada.',
    badge: 'Tráfico de Alta Intención',
    icon: 'Magnet'
  },
  {
    title: 'REMARKETING',
    description: 'Sistemas inteligentes para recuperar prospectos que mostraron interés previo.',
    badge: 'Recuperación Inteligente',
    icon: 'RefreshCw'
  },
  {
    title: 'CONTENIDO B2B',
    description: 'Generación de autoridad de marca y recursos educativos que generan confianza comercial.',
    badge: 'Autoridad de Marca',
    icon: 'FileText'
  },
  {
    title: 'REFERIDOS',
    description: 'Mecanismos automatizados para incentivar recomendaciones y activar el network effect.',
    badge: 'Network Effect',
    icon: 'Users'
  }
];

export const searchQueries: SearchQuery[] = [
  {
    id: 1,
    text: 'marketing digital para empresas de logistica',
    results: [
      'SIGMA AI | Adquisición de Clientes Corporativos',
      'Cómo captar cargamentos de alto valor con Google Ads B2B',
      'Caso de Éxito: +180% en contratos logísticos anuales'
    ]
  },
  {
    id: 2,
    text: 'automatizacion con IA para agencias de seguros',
    results: [
      'SIGMA AI | Flujos de Pre-calificación y Cotización',
      'Acelera el cierre de pólizas B2B con agentes conversacionales',
      'Guía completa: Integrar WhatsApp IA en tu embudo de ventas'
    ]
  },
  {
    id: 3,
    text: 'consultoria estrategica para clinicas privadas',
    results: [
      'SIGMA AI | Campañas de Captación Médica Calificada',
      'Aumenta el agendamiento de cirugías premium con SEO',
      'Retorno de Inversión (ROI) en marketing de salud B2B'
    ]
  }
];

export const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    label: 'Lead Inbound',
    type: 'auto',
    description: 'El prospecto completa el formulario buscando expandir sus operaciones.'
  },
  {
    id: 2,
    label: 'Canal WhatsApp',
    type: 'auto',
    description: 'Se activa contacto instantáneo automatizado para mitigar la fricción de espera.'
  },
  {
    id: 3,
    label: 'Pre-calificación IA',
    type: 'auto',
    description: 'El agente inteligente califica la madurez y presupuesto del prospecto.'
  },
  {
    id: 4,
    label: 'Ejecutivo Comercial',
    type: 'human',
    description: 'Handoff inmediato a un especialista para agendar llamada estratégica.'
  },
  {
    id: 5,
    label: 'Propuesta',
    type: 'human',
    description: 'Diseño de la arquitectura del ecosistema conectado específico para su modelo.'
  },
  {
    id: 6,
    label: 'Contrato',
    type: 'human',
    description: 'Cierre del acuerdo, firma electrónica e inicio de implementación.'
  },
  {
    id: 7,
    label: 'Encuesta de Calidad',
    type: 'feedback',
    description: 'Evaluación rápida del proceso de onboarding para asegurar la satisfacción.'
  },
  {
    id: 8,
    label: 'Fidelización',
    type: 'feedback',
    description: 'Optimización de campañas y escalamiento para expandir la cuenta.'
  }
];

export const dashboardMetrics: DashboardMetric[] = [
  { id: 'leads', label: 'Leads Nuevos', value: 1248, suffix: '', trend: '+24%', icon: 'UserCheck' },
  { id: 'proposals', label: 'Propuestas Enviadas', value: 618, suffix: '', trend: '+18%', icon: 'FileSend' },
  { id: 'clients', label: 'Clientes Activos', value: 342, suffix: '', trend: '+12%', icon: 'Users' },
  { id: 'conversion', label: 'Tasa Conversión', value: 7.8, suffix: '%', trend: '+1.5%', icon: 'TrendingUp' },
  { id: 'cpa', label: 'CPA Promedio', value: 2.10, suffix: '', trend: '-14%', icon: 'DollarSign' },
  { id: 'ctr', label: 'CTR Campañas', value: 3.9, suffix: '%', trend: '+0.8%', icon: 'MousePointerClick' }
];

export const roadmapSteps: RoadmapStep[] = [
  {
    id: '01',
    title: 'Mes 1: Implementación',
    subtitle: 'Base sólida para medir y crecer',
    list: [
      'Configuración de medición avanzada y píxeles (Meta CAPI, Google Analytics 4)',
      'Lanzamiento de primeras campañas en Google y Meta de alta intención',
      'Estructura de dashboard ejecutivo inicial para visibilidad de datos'
    ],
    icon: 'Rocket',
    status: 'base'
  },
  {
    id: '02',
    title: 'Mes 2: Optimización',
    subtitle: 'Datos duros, decisiones inteligentes',
    list: [
      'Análisis de los primeros datos duros y tasas de conversión por canal',
      'Ajustes milimétricos de audiencias, copys, creativos y presupuestos',
      'Detección y desbloqueo de cuellos de botella en el embudo comercial'
    ],
    icon: 'BarChart2',
    status: 'ajuste'
  },
  {
    id: '03',
    title: 'Mes 3: Escalamiento',
    subtitle: 'Máxima velocidad, mínimo riesgo',
    list: [
      'Inversión agresiva en canales y campañas con señales ROI positivas',
      'Activación de automatizaciones complejas y agentes de pre-calificación IA',
      'Consolidación del sistema continuo de adquisición para flujo predecible'
    ],
    icon: 'TrendingUp',
    status: 'escala'
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'BASIC',
    price: '$300',
    badge: 'Primeros pasos',
    phrase: 'Quiero probar si la publicidad digital funciona.',
    idealFor: 'Primeros leads organizados',
    features: [
      { name: 'Meta Ads: 1 campaña', included: true },
      { name: 'Dashboard: —', included: false },
      { name: 'Optimización: Mensual', included: true },
      { name: 'Automatización e IA: —', included: false },
      { name: 'Consultoría: Correo', included: true },
      { name: 'Meta CAPI: —', included: false }
    ],
    isFeatured: false,
    ctaText: 'Comenzar con Basic'
  },
  {
    id: 'start',
    name: 'START',
    price: '$400',
    badge: 'Medición clara',
    phrase: 'Necesito una base profesional con medición clara.',
    idealFor: 'Valida estrategias con dashboard antes de escalar',
    features: [
      { name: 'Meta Ads: Incluido', included: true },
      { name: 'Dashboard: Incluido', included: true },
      { name: 'Optimización: Quincenal', included: true },
      { name: 'Automatización e IA: —', included: false },
      { name: 'Consultoría: Estrategia', included: true },
      { name: 'Meta CAPI: —', included: false }
    ],
    isFeatured: false,
    ctaText: 'Elegir Start'
  },
  {
    id: 'growth',
    name: 'GROWTH',
    price: '$500',
    badge: 'RECOMENDADO',
    phrase: 'Busco el mejor equilibrio inversión-resultados-escalabilidad.',
    idealFor: 'Implementa IA, CAPI y automatización para crecimiento medible',
    features: [
      { name: 'Meta Ads: Profesional', included: true },
      { name: 'Dashboard: Ejecutivo', included: true },
      { name: 'Optimización: Semanal', included: true },
      { name: 'Automatización e IA: Incluido', included: true },
      { name: 'Consultoría: Estrategia', included: true },
      { name: 'Meta CAPI: Incluido', included: true }
    ],
    isFeatured: true,
    ctaText: 'Elegir Growth'
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE',
    price: '$800+ com',
    badge: 'Socio estratégico',
    phrase: 'Estoy en etapa de escalamiento y quiero un socio estratégico.',
    idealFor: 'Ecosistema integral (Google, SEO, BI). Cuando tú creces, nosotros crecemos.',
    features: [
      { name: 'Meta Ads: Profesional', included: true },
      { name: 'Dashboard: Avanzado', included: true },
      { name: 'Optimización: Premium', included: true },
      { name: 'Automatización e IA: Incluido', included: true },
      { name: 'Consultoría: Avanzada + BI + CRO', included: true },
      { name: 'Meta CAPI: Incluido', included: true }
    ],
    isFeatured: false,
    ctaText: 'Hablar con Ventas'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Carlos Mendoza',
    role: 'Director de Expansión',
    company: 'Logix Global Solutions',
    rating: 5,
    quote: 'El cambio de campañas sueltas al Sistema Sigma transformó nuestro flujo comercial. En solo dos meses, logramos un aumento del 140% en contratos corporativos calificados y pudimos rastrear cada dólar invertido.',
    metric: '+140% en leads B2B',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: 'Co-fundadora y CMO',
    company: 'Klinik Integra',
    rating: 5,
    quote: 'Lo que más valoramos de Sigma Agency es el Dashboard Ejecutivo. Por fin tenemos visibilidad total sin métricas de vanidad. Sabemos exactamente qué servicios en Google nos traen pacientes de alto valor.',
    metric: '-28% CPA en 60 días',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't3',
    name: 'Mauricio Silva',
    role: 'CEO',
    company: 'Fintech Secure S.A.',
    rating: 5,
    quote: 'La automatización de pre-calificación por WhatsApp fue un antes y un después. Nuestros asesores ya no pierden tiempo con contactos fríos. Ahora solo atienden llamadas de empresas pre-calificadas por la IA.',
    metric: '4x en tasa de agendamiento',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const faqList: FAQItem[] = [
  {
    id: 1,
    question: '¿Cuánto tiempo toma ver resultados?',
    answer: 'La fase inicial de implementación toma 90 días como parte de nuestro roadmap para asegurar que la medición sea perfecta. Sin embargo, las primeras campañas de Google y Meta Ads se lanzan durante el primer mes, comenzando a capturar leads calificados desde las primeras semanas. El crecimiento se consolida y optimiza entre el mes 2 y el mes 3.'
  },
  {
    id: 2,
    question: '¿Necesito tener experiencia en marketing digital?',
    answer: 'No, en absoluto. Nosotros nos encargamos de toda la complejidad técnica, desde la integración de Meta CAPI hasta el desarrollo de tus agentes conversacionales en WhatsApp. Tu equipo solo interactuará con el Dashboard Ejecutivo interactivo y recibirá leads listos para cerrar.'
  },
  {
    id: 3,
    question: '¿Qué diferencia a Sigma de otras agencias?',
    answer: 'La mayoría de las agencias tradicionales te venden clicks, impresiones o reportes en PDF incomprensibles. En Sigma Agency operamos bajo el "Sistema de Crecimiento Conectado", integrando tus canales de pauta (Meta, Google) con SEO y pre-calificación por IA, todo unificado en un Dashboard en vivo. No medimos likes; medimos contratos firmados y retorno de inversión real.'
  },
  {
    id: 4,
    question: '¿Puedo cambiar de plan después?',
    answer: 'Sí. Todos nuestros planes están diseñados para adaptarse al perfil de madurez de tu negocio. Puedes actualizar de un plan Start a un plan Growth para activar la integración de IA y medición avanzada a medida que tus operaciones requieran más escala.'
  },
  {
    id: 5,
    question: '¿Cómo funciona la automatización con IA?',
    answer: 'Cuando un lead llega desde una campaña de alta intención, en lugar de esperar horas para ser contactado, un agente entrenado con IA inicia un chat inmediato en WhatsApp. Hace preguntas clave para calificar el presupuesto, urgencia y necesidad. Si cumple con tus criterios, lo transfiere automáticamente a tus ejecutivos de ventas.'
  },
  {
    id: 6,
    question: '¿Qué incluye exactamente el Dashboard Ejecutivo?',
    answer: 'Es un panel interactivo centralizado que se conecta directamente a tus plataformas de anuncios y base de datos de clientes. Muestra en tiempo real métricas reales: número de leads, costo por adquisición (CPA), tasa de conversión, y propuestas en proceso. Olvídate de los reportes estáticos a fin de mes.'
  },
  {
    id: 7,
    question: '¿Trabajan con mi industria específica?',
    answer: 'Nos especializamos en agencias, proveedores de servicios B2B, consultoras, clínicas y empresas de software. Cualquier modelo de negocio que dependa de agendar citas o enviar propuestas formales de alto valor se beneficia exponencialmente de nuestro Sistema de Crecimiento Conectado.'
  },
  {
    id: 8,
    question: '¿Hay contrato de permanencia mínima?',
    answer: 'No creemos en retener a nuestros clientes por contratos de permanencia forzada. Aunque recomendamos un ciclo inicial de 90 días para ver el poder completo de la máquina, puedes cancelar o ajustar tu plan cuando quieras.'
  }
];
