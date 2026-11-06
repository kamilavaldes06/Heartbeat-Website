import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  // --- Long-Term Care Services ---
  {
    id: 'personal-care',
    name: {
      en: 'Personal Care',
      es: 'Cuidado Personal',
    },
    abbreviation: 'PC',
    category: 'ltc',
    description: {
      en: 'Assistance with essential daily routines designed to maintain dignity, hygiene, and physical comfort in the familiar setting of home.',
      es: 'Asistencia con las rutinas esenciales de la vida diaria, diseñada para preservar la dignidad, higiene y comodidad física en el hogar.',
    },
    details: {
      en: [
        'Assistance with bathing, showering, and gentle personal hygiene',
        'Dressing, personal grooming, and hair care support',
        'Mobility assistance, safe transfers, and walking stability',
        'Incontinence care, toileting assistance, and skin routine monitoring',
        'Medication reminders in accordance with prescribed schedules',
      ],
      es: [
        'Asistencia con el baño, ducha e higiene personal respetuosa',
        'Apoyo para vestirse, arreglo personal y cuidado del cabello',
        'Asistencia de movilidad, traslados seguros y soporte al caminar',
        'Cuidado de incontinencia, apoyo para ir al baño y cuidado de la piel',
        'Recordatorios oportunos para la toma de medicamentos',
      ],
    },
    iconName: 'HeartHandshake',
  },
  {
    id: 'homemaker-services',
    name: {
      en: 'Homemaker Services',
      es: 'Servicios de Amo/a de Casa',
    },
    abbreviation: 'HMK',
    category: 'ltc',
    description: {
      en: 'Help with everyday household tasks and light housekeeping to maintain a clean, organized, and safe residential environment.',
      es: 'Apoyo con las tareas domésticas cotidianas y limpieza ligera para mantener un ambiente residencial limpio, ordenado y seguro.',
    },
    details: {
      en: [
        'Light housekeeping including dusting, vacuuming, and surface sanitization',
        'Laundry, folding clothes, and changing bed linens',
        'Nutritious meal preparation according to dietary preferences',
        'Grocery shopping, errand coordination, and pantry organization',
        'Trash removal and home hazard safety checks',
      ],
      es: [
        'Limpieza ligera del hogar, aspirado y desinfección de superficies',
        'Lavado, planchado y cambio de sábanas y ropa de cama',
        'Preparación de comidas nutritivas según indicaciones dietéticas',
        'Compras de alimentos y diligencias esenciales',
        'Eliminación de basura y revisión de seguridad en el entorno',
      ],
    },
    iconName: 'Home',
  },
  {
    id: 'companion-services',
    name: {
      en: 'Companion Services',
      es: 'Servicios de Acompañamiento',
    },
    category: 'ltc',
    description: {
      en: 'Friendly companionship, engaging conversation, social interaction, and supportive presence to combat isolation and promote emotional health.',
      es: 'Acompañamiento cordial, conversación amena, interacción social y presencia empática para reducir el aislamiento y nutrir el bienestar emocional.',
    },
    details: {
      en: [
        'Engaging conversations, sharing memories, and active listening',
        'Support with recreational activities, puzzles, reading, and hobbies',
        'Accompaniment to local appointments, errands, or neighborhood walks',
        'Encouraging social connections with family and friends',
        'Emotional support and comforting daily presence',
      ],
      es: [
        'Conversación estimulante, recuerdos compartidos y escucha activa',
        'Apoyo en actividades recreativas, lectura, juegos y pasatiempos',
        'Acompañamiento a citas médicas, salidas y caminatas seguras',
        'Fomento de la comunicación con familiares y amigos',
        'Apoyo emocional continuo y presencia tranquilizadora',
      ],
    },
    iconName: 'Users',
  },
  {
    id: 'respite-care',
    name: {
      en: 'Respite Care',
      es: 'Cuidado de Relevo (Respite Care)',
    },
    category: 'ltc',
    description: {
      en: 'Temporary, flexible care assistance providing primary family caregivers with essential time to rest, recharge, and attend to personal responsibilities.',
      es: 'Atención temporal y flexible que brinda a los cuidadores familiares el tiempo necesario para descansar, recargar energías y atender compromisos personales.',
    },
    details: {
      en: [
        'Scheduled short-term relief for family and primary caregivers',
        'Continuation of all regular daily living and personal care routines',
        'Flexible coverage for mornings, afternoons, evenings, or weekends',
        'Reduced caregiver burnout and improved long-term family dynamic',
        'Seamless communication and detailed care summary reporting',
      ],
      es: [
        'Alivio programado a corto plazo para familiares cuidadores',
        'Continuidad impecable de las rutinas de cuidado habituales',
        'Disponibilidad flexible por horas, días o fines de semana',
        'Prevención del agotamiento físico y emocional del cuidador familiar',
        'Reporte claro y detallado de cada jornada de atención',
      ],
    },
    iconName: 'Sparkles',
  },

  // --- Skilled Home Health Services ---
  {
    id: 'registered-nurse',
    name: {
      en: 'Registered Nurse Services',
      es: 'Servicios de Enfermería Registrada',
    },
    abbreviation: 'RN',
    category: 'skilled',
    description: {
      en: 'Comprehensive clinical nursing care delivered in the home based on individual patient care needs and treating physician orders.',
      es: 'Atención de enfermería clínica integral en el hogar, orientada a las necesidades individuales del paciente bajo órdenes médicas.',
    },
    details: {
      en: [
        'Clinical patient health assessment and vital sign monitoring',
        'Wound care management, surgical dressing changes, and skin integrity',
        'Medication administration, reconciliation, and teaching',
        'Chronic disease management (diabetes, hypertension, CHF, COPD)',
        'Ongoing clinical coordination with the attending physician',
      ],
      es: [
        'Evaluación clínica integral y monitoreo continuo de signos vitales',
        'Cuidado de heridas quirúrgicas, curaciones y protección de la piel',
        'Administración, control y educación sobre medicamentos prescritos',
        'Control de afecciones crónicas (diabetes, hipertensión, insuficiencia cardíaca)',
        'Comunicación y actualización clínica constante con el médico tratante',
      ],
    },
    iconName: 'Activity',
  },
  {
    id: 'physical-therapy',
    name: {
      en: 'Physical Therapy',
      es: 'Fisioterapia',
    },
    abbreviation: 'PT',
    category: 'skilled',
    description: {
      en: 'Therapeutic rehabilitation services focused on restoring mobility, physical strength, balance, gait stability, and functional independence.',
      es: 'Servicios de rehabilitación terapéutica enfocados en restablecer la movilidad, fuerza física, equilibrio, marcha e independencia funcional.',
    },
    details: {
      en: [
        'Comprehensive mobility, balance, and fall-risk evaluations',
        'Targeted therapeutic exercises to rebuild strength and endurance',
        'Gait retraining, transfer practice, and safe assistive device instruction',
        'Home safety assessment and practical hazard elimination',
        'Personalized home exercise programs for continuous progress',
      ],
      es: [
        'Evaluación detallada de movilidad, equilibrio y riesgo de caídas',
        'Ejercicios terapéuticos para recuperar fuerza muscular y resistencia',
        'Reeducación de la marcha y uso seguro de bastones, andadores o sillas',
        'Inspección de seguridad en el hogar para prevenir accidentes',
        'Programas de ejercicios personalizados para el progreso continuo',
      ],
    },
    iconName: 'Zap',
  },
  {
    id: 'occupational-therapy',
    name: {
      en: 'Occupational Therapy',
      es: 'Terapia Ocupacional',
    },
    abbreviation: 'OT',
    category: 'skilled',
    description: {
      en: 'Targeted support designed to improve or maintain the ability to safely and independently perform activities of daily living and self-care.',
      es: 'Apoyo especializado para mejorar o mantener la capacidad de realizar de forma autónoma y segura las actividades cotidianas y de autocuidado.',
    },
    details: {
      en: [
        'Functional self-care training (eating, dressing, grooming, bathing)',
        'Fine motor coordination, dexterity, and cognitive task practice',
        'Energy conservation and joint protection techniques',
        'Recommendations for adaptive equipment and home modifications',
        'Customized strategies to foster self-sufficiency and confidence',
      ],
      es: [
        'Entrenamiento en autocuidado funcional (alimentación, vestido, aseo)',
        'Ejercicios para motricidad fina, destreza y tareas cognitivas',
        'Técnicas de conservación de energía y protección articular',
        'Recomendación y adaptación de equipos de asistencia para el hogar',
        'Estrategias prácticas para fomentar la autonomía personal',
      ],
    },
    iconName: 'ShieldCheck',
  },
  {
    id: 'medical-social-work',
    name: {
      en: 'Medical Social Work Services',
      es: 'Servicios de Trabajo Social Médico',
    },
    abbreviation: 'MSW',
    category: 'skilled',
    description: {
      en: 'Professional guidance and supportive counseling addressing psychosocial needs, community resource navigation, and coordination of care.',
      es: 'Orientación profesional y asesoramiento para atender necesidades psicosociales, acceso a recursos comunitarios y coordinación de apoyo integral.',
    },
    details: {
      en: [
        'Comprehensive assessment of emotional, social, and environmental factors',
        'Assistance navigating community programs, food access, and utilities',
        'Advance care planning guidance and healthcare surrogate assistance',
        'Supportive counseling for patients and families coping with illness',
        'Care coordination with case managers, clinics, and social agencies',
      ],
      es: [
        'Evaluación integral de factores emocionales, familiares y sociales',
        'Orientación para acceder a programas de asistencia y recursos comunitarios',
        'Asesoría en directivas anticipadas y voluntades de atención médica',
        'Apoyo emocional para sobrellevar diagnósticos y cambios de salud',
        'Coordinación directa con administradores de casos y agencias comunitarias',
      ],
    },
    iconName: 'UserCheck',
  },
  {
    id: 'speech-therapy',
    name: {
      en: 'Speech Therapy',
      es: 'Terapia del Habla (Fonoaudiología)',
    },
    abbreviation: 'ST',
    category: 'skilled',
    description: {
      en: 'Clinical services addressing communication, voice, cognitive-linguistic function, and swallowing difficulties when clinically indicated.',
      es: 'Servicios clínicos para evaluar y tratar la comunicación, voz, función cognitivo-lingüística y dificultades de deglución.',
    },
    details: {
      en: [
        'Clinical evaluation of speech, language, and voice production',
        'Swallowing therapy (dysphagia management) and safe diet guidance',
        'Cognitive rehabilitation for memory, problem-solving, and attention',
        'Alternative and augmentative communication strategies',
        'Family and caregiver education for safe mealtime techniques',
      ],
      es: [
        'Evaluación clínica del habla, lenguaje comprensivo y modulación vocal',
        'Terapia de deglución (disfagia) y recomendaciones de texturas seguras',
        'Rehabilitación cognitiva para memoria, concentración y comunicación',
        'Estrategias de comunicación alternativa y aumentativa',
        'Orientación a cuidadores y familiares para una alimentación segura',
      ],
    },
    iconName: 'MessageSquareHeart',
  },
  {
    id: 'home-health-aide',
    name: {
      en: 'Home Health Aide Services',
      es: 'Servicios de Asistente de Salud en el Hogar',
    },
    abbreviation: 'HHA',
    category: 'skilled',
    description: {
      en: 'Personal hands-on supportive care provided under the direct clinical supervision and care plan of a Registered Nurse or licensed therapist.',
      es: 'Atención personal y apoyo directo proporcionado bajo la supervisión clínica y plan de cuidados de un Enfermero Registrado o terapeuta licenciado.',
    },
    details: {
      en: [
        'Support with bathing, grooming, oral care, and personal hygiene',
        'Assistance with gentle ambulation, exercises, and safe positioning',
        'Vital sign checking and immediate reporting of physical changes',
        'Maintaining a clean, calm, and supportive immediate environment',
        'Delivering care strictly in adherence to the physician-approved plan',
      ],
      es: [
        'Apoyo en el baño, aseo, cuidado bucal e higiene personal',
        'Asistencia con deambulación suave, cambios posturales y transferencias',
        'Toma de signos vitales y reporte oportuno al enfermero supervisor',
        'Preservación de un entorno de descanso limpio y confortable',
        'Cumplimiento riguroso del plan de cuidados supervisado',
      ],
    },
    iconName: 'ClipboardCheck',
  },

  // --- Pediatric Services ---
  {
    id: 'pediatric-hha',
    name: {
      en: 'Pediatric Home Health Aide Services',
      es: 'Servicios Pediátricos de Asistente de Salud (HHA)',
    },
    abbreviation: 'Pediatric HHA',
    category: 'pediatric',
    description: {
      en: 'Compassionate in-home supportive care for children who require dedicated personal assistance, hygiene support, and daily care in a familiar home setting.',
      es: 'Atención compasiva en el hogar para niños que requieren apoyo en su aseo personal, rutinas cotidianas y cuidados en un ambiente familiar y cálido.',
    },
    details: {
      en: [
        'Gentle assistance with bathing, dressing, and pediatric personal hygiene',
        'Support with prescribed daily activity schedules and comfort routines',
        'Attentive supervision to maintain child safety in the home',
        'Close communication and partnership with parents and family members',
        'Accepted via specialized managed care programs (including Molina Healthcare and Simply Healthcare)',
      ],
      es: [
        'Asistencia suave y respetuosa con el baño, vestido e higiene del menor',
        'Apoyo en las rutinas diarias de descanso, alimentación y confort',
        'Supervisión atenta para garantizar la seguridad infantil en el hogar',
        'Comunicación cercana y respetuosa en constante alianza con los padres',
        'Aceptado a través de programas de salud seleccionados (incluyendo Molina Healthcare y Simply Healthcare)',
      ],
    },
    iconName: 'Baby',
  },
];
