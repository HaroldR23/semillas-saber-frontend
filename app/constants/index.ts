import {
  Brain,
  MessageCircle,
  Users,
  Cpu,
  Lightbulb,
  Landmark,
  Atom,
  Leaf,
  FlaskConical,
  BookOpen,
  Globe2,
  MapPin,
  ScrollText,
  Heart,
  Code,
  Bot,
  BookMarked,
  Coins,
  Scale,
  Send,
  CheckCircle,
  GraduationCap,
  FileCheck,
  Video,
  BookCheck,
  FileEdit,
  Sparkles,
  Zap,
  TrendingUp,
  Clock,
  Crown,
  Check,
} from 'lucide-react';
import { Category } from "../models";

export const menuItems = [
  { label: 'Inicio', id: 'hero' },
  { label: 'Nosotros', id: 'nosotros' },
  { label: 'Materias', id: 'materias' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Precios', id: 'precios' },
  { label: 'Contacto', id: 'contacto' },
];
export const waMessage = "https://wa.me/573124184842?text=Hola%20Semillas%20del%20Saber%2C%20necesito%20ayuda%20con%20mis%20tareas.";
export const subjectCategories: Category[] = [
  {
    id: 'logico',
    name: 'Ciencias del Pensamiento Lógico',
    icon: Brain,
    gradient: 'from-blue-500 to-indigo-600',
    bgLight: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    borderColor: 'border-blue-200 hover:border-blue-400',
    tagline: 'Razonamiento, análisis y resolución de problemas',
    subjects: [
      { name: 'Matemáticas', icon: Atom },
      { name: 'Ciencias Naturales & Educación Ambiental', icon: Leaf },
      { name: 'Química', icon: FlaskConical },
    ],
  },
  {
    id: 'comunicacion',
    name: 'Comunicación y Expresión',
    icon: MessageCircle,
    gradient: 'from-pink-500 to-rose-600',
    bgLight: 'bg-pink-50',
    iconBg: 'bg-pink-100',
    borderColor: 'border-pink-200 hover:border-pink-400',
    tagline: 'Domina el lenguaje y conecta con el mundo',
    subjects: [
      { name: 'Lengua Castellana', icon: BookOpen },
      { name: 'Idioma Extranjero — Inglés', icon: Globe2 },
    ],
  },
  {
    id: 'sociedad',
    name: 'Sociedad y Ciudadanía',
    icon: Users,
    gradient: 'from-emerald-500 to-teal-600',
    bgLight: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
    borderColor: 'border-emerald-200 hover:border-emerald-400',
    tagline: 'Comprende tu entorno social e histórico',
    subjects: [
      { name: 'Historia', icon: ScrollText },
      { name: 'Geografía', icon: MapPin },
      { name: 'Constitución Política', icon: Landmark },
      { name: 'Educación en Ética y Valores', icon: Heart },
    ],
  },
  {
    id: 'tecnologia',
    name: 'Tecnología',
    icon: Cpu,
    gradient: 'from-amber-500 to-orange-600',
    bgLight: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    borderColor: 'border-amber-200 hover:border-amber-400',
    tagline: 'Crea, programa e innova con tecnología',
    subjects: [
      { name: 'Programación', icon: Code },
      { name: 'Robótica', icon: Bot },
    ],
  },
  {
    id: 'critica',
    name: 'Crítico-Reflexiva',
    icon: Lightbulb,
    gradient: 'from-purple-500 to-violet-600',
    bgLight: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    borderColor: 'border-purple-200 hover:border-purple-400',
    tagline: 'Piensa, cuestiona y transforma ideas',
    subjects: [{ name: 'Filosofía', icon: BookMarked }],
  },
  {
    id: 'economicas',
    name: 'Ciencias Económicas y Políticas',
    icon: Landmark,
    gradient: 'from-cyan-500 to-sky-600',
    bgLight: 'bg-cyan-50',
    iconBg: 'bg-cyan-100',
    borderColor: 'border-cyan-200 hover:border-cyan-400',
    tagline: 'Entiende cómo funcionan la economía y la política',
    subjects: [
      { name: 'Economía', icon: Coins },
      { name: 'Política', icon: Scale },
    ],
  },
];
export const steps = [
  {
    number: '01',
    title: 'Envía tu tarea',
    description:
      'Comparte los detalles de tu tarea, proyecto o tema de estudio. Incluye instrucciones y fecha límite.',
    icon: Send,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    number: '02',
    title: 'Recíbela resuelta y explicada',
    description:
      'Nuestros expertos trabajan en tu tarea y te la entregan con explicaciones claras paso a paso.',
    icon: CheckCircle,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    number: '03',
    title: 'Aprende y mejora',
    description:
      'Revisa las explicaciones, entiende el proceso y mejora tus calificaciones con confianza.',
    icon: GraduationCap,
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
  },
];
export const services = [
  {
    icon: FileCheck,
    title: 'Resolución de Tareas',
    description:
      'Resolvemos tus tareas con explicaciones detalladas para que entiendas cada paso del proceso.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Video,
    title: 'Clases Particulares Online',
    description:
      'Sesiones personalizadas en vivo para reforzar temas específicos y aclarar todas tus dudas.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: BookCheck,
    title: 'Preparación para Exámenes',
    description:
      'Te ayudamos a prepararte con material de estudio, ejercicios prácticos y simulacros.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: MessageCircle,
    title: 'Explicaciones Paso a Paso',
    description:
      'Cada solución incluye explicaciones claras y fáciles de entender para que realmente aprendas.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: FileEdit,
    title: 'Corrección de Trabajos',
    description:
      'Revisamos y corregimos tus ensayos, informes y proyectos antes de entregarlos.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
  },
  {
    icon: Sparkles,
    title: 'Asesoría Académica',
    description:
      'Orientación personalizada para mejorar tu rendimiento académico y técnicas de estudio.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
];
export const benefits = [
  {
    icon: Zap,
    title: 'Entregas Oportunas',
    description: 'Respuestas oportunas para que nunca pierdas una fecha límite.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Heart,
    title: 'Fácil de Entender',
    description: 'Explicaciones claras y sencillas adaptadas a tu nivel de conocimiento.',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: TrendingUp,
    title: 'Mejora tu Rendimiento',
    description: 'Aprende técnicas y conceptos que elevarán tus calificaciones.',
    gradient: 'from-amber-500 to-amber-600',
  },
  {
    icon: Clock,
    title: 'Ahorra Tiempo',
    description: 'Optimiza tu tiempo de estudio y reduce el estrés académico.',
    gradient: 'from-purple-500 to-purple-600',
  },
];

export const plans = [
  {
    name: 'Clase individual primaria',
    icon: Check,
    price: '$25.000',
    description: 'Ideal para tareas o consultas específicas',
    features: [
      'Resolución de una tarea',
      'Explicación paso a paso',
      'Garantía de calidad',
    ],
    gradient: 'from-blue-500 to-blue-600',
    ring: 'ring-blue-500',
    badge: undefined as string | undefined,
  },
  {
    name: 'Clase individual bachillerato',
    icon: Check,
    price: '$30.000',
    description: 'Lo más popular para estudiantes activos',
    features: [
      'Prioridad en entregas',
      '2 clases particulares',
      'Descuento en clases extras',
    ],
    gradient: 'from-emerald-500 to-emerald-600',
    ring: 'ring-emerald-500',
    badge: 'Más Popular',
  },
  {
    name: 'Plan mensual primaria',
    icon: Zap,
    price: '$180.000',
    description: 'Perfecto para preparación intensiva',
    features: [
      '8 clases de 1 hora',
      'Horario flexible',
      'Material de estudio incluido',
      'Grabación de sesiones',
      'Seguimiento personalizado',
    ],
    gradient: 'from-amber-500 to-amber-600',
    ring: 'ring-amber-500',
    badge: undefined as string | undefined,
  },
  {
    name: 'Plan mensual bachillerato',
    icon: Crown,
    price: '$200.000',
    description: 'Perfecto para preparación intensiva',
    features: [
      '8 clases de 1 hora',
      'Horario flexible',
      'Material de estudio incluido',
      'Grabación de sesiones',
      'Seguimiento personalizado',
    ],
    gradient: 'from-purple-500 to-violet-600',
    ring: 'ring-purple-500',
    badge: undefined as string | undefined,
  },
];
export const whatsappUrl = 'https://wa.me/573124184842';
export const helpMessage = "Hola, necesito ayuda con mis tareas.";
