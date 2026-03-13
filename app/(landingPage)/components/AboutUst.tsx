import { motion } from 'motion/react';
import Image from 'next/image';
import {
  Sprout,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  Star,
  ChevronRight,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const AboutUs = () => {
  return (
    <section id="nosotros" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-blue-50/40 to-emerald-50/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-[#2563eb]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-150 h-150 bg-[#10b981]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-[#2563eb]/10 to-[#10b981]/10 px-5 py-2 rounded-full mb-5">
            <Sprout size={18} className="text-[#10b981]" />
            <span className="text-sm font-semibold text-[#2563eb]">Conócenos</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Quiénes{' '}
            <span className="bg-linear-to-r from-[#2563eb] to-[#10b981] text-transparent bg-clip-text">
              Somos
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Cultivamos el conocimiento con amor, dedicación y profesionalismo
          </p>
        </motion.div>

        {/* ─── Presentación ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={1}
          className="relative max-w-4xl mx-auto mb-20"
        >
          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Decorative top bar */}
            <div className="h-2 bg-linear-to-r from-[#2563eb] via-[#10b981] to-[#fbbf24]" />

            <div className="p-8 md:p-12">
              <div className="flex items-start gap-5 mb-6">
                <div className="shrink-0 bg-linear-to-br from-[#2563eb] to-[#10b981] p-3.5 rounded-2xl shadow-lg shadow-blue-200/50">
                  <Sprout size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    Semillas de Aprendizaje
                  </h3>
                  <span className="text-sm font-semibold text-[#10b981] tracking-wide uppercase">
                    Emprendimiento Educativo Virtual
                  </span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Somos un emprendimiento educativo virtual en{' '}
                <span className="font-semibold text-gray-800">Colombia</span>, orientado al
                acompañamiento académico de estudiantes de{' '}
                <span className="font-semibold text-gray-800">primaria y bachillerato</span> en
                todas las áreas. Nuestro proyecto se fundamenta en el{' '}
                <span className="text-[#2563eb] font-semibold">profesionalismo</span>, la{' '}
                <span className="text-[#10b981] font-semibold">enseñanza con amor</span> y la{' '}
                <span className="text-[#fbbf24] font-semibold">dedicación</span> al aprendizaje
                integral de los estudiantes.
              </p>

              {/* Value pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Award, label: 'Profesionalismo', color: '#2563eb' },
                  { icon: Heart, label: 'Enseñanza con amor', color: '#10b981' },
                  { icon: Lightbulb, label: 'Aprendizaje integral', color: '#fbbf24' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2.5 rounded-full"
                  >
                    <item.icon size={16} style={{ color: item.color }} />
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating decorative elements */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute -top-5 -right-5 bg-[#fbbf24] p-3 rounded-2xl shadow-lg shadow-yellow-200/50 hidden md:block"
          >
            <Star size={22} className="text-white" fill="white" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-4 -left-4 bg-[#2563eb] p-3 rounded-2xl shadow-lg shadow-blue-200/50 hidden md:block"
          >
            <BookOpen size={22} className="text-white" />
          </motion.div>
        </motion.div>

        {/* ─── Misión y Visión ─── */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-20">
          {/* Misión */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={scaleIn}
            custom={0}
            className="group relative"
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#2563eb] to-[#2563eb]/80 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-90" />
            <div className="relative bg-linear-to-br from-[#2563eb] to-blue-700 rounded-3xl p-8 md:p-10 text-white h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Target size={26} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Misión</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                Brindar apoyo académico virtual de alta calidad, fortaleciendo las competencias
                escolares mediante{' '}
                <span className="text-[#fbbf24] font-semibold">
                  estrategias pedagógicas personalizadas
                </span>
                .
              </p>
              {/* Decorative circle */}
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-white/5 rounded-full" />
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/5 rounded-full" />
            </div>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={scaleIn}
            custom={1}
            className="group relative"
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#10b981] to-[#10b981]/80 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500 opacity-90" />
            <div className="relative bg-linear-to-br from-[#10b981] to-emerald-700 rounded-3xl p-8 md:p-10 text-white h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Eye size={26} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Visión</h3>
              </div>
              <p className="text-white/90 leading-relaxed text-lg">
                Ser una academia virtual reconocida en Colombia por su{' '}
                <span className="text-[#fbbf24] font-semibold">excelencia educativa</span> y
                compromiso con el aprendizaje.
              </p>
              {/* Decorative circle */}
              <div className="absolute bottom-4 right-4 w-24 h-24 bg-white/5 rounded-full" />
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/5 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* ─── Equipo de Trabajo ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={0}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-[#10b981]/10 to-[#fbbf24]/10 px-5 py-2 rounded-full mb-5">
            <Users size={18} className="text-[#10b981]" />
            <span className="text-sm font-semibold text-[#10b981]">Nuestro Equipo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Equipo de{' '}
            <span className="bg-linear-to-r from-[#10b981] to-[#fbbf24] text-transparent bg-clip-text">
              Trabajo
            </span>
          </h2>
        </motion.div>

        {/* Director Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={1}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">
              {/* Photo side */}
              <div className="relative bg-linear-to-br from-[#2563eb] to-[#10b981] p-6 md:p-8 flex flex-col items-center justify-center text-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-xl mb-5">
                  <Image
                    src="/rosalba_photo.jpg"
                    alt="Rosalba Riaño Poveda"
                    width={192}
                    height={192}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Rosalba Riaño Poveda</h3>
                <span className="text-white/80 text-sm font-medium mb-3">Directora / Coordinadora académica</span>
              </div>

              {/* Info side */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="mb-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen size={18} className="text-[#2563eb]" />
                    Formación Académica
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    Licenciada en Educación Básica con énfasis en Tecnología e Informática.{' '}
                    <span className="font-semibold text-gray-800">
                      Master in Teaching English as a Foreign Language
                    </span>
                    .
                  </p>
                </div>

                <div className="mb-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Award size={18} className="text-[#10b981]" />
                    Especializaciones
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Metodologías activas para el aprendizaje',
                      'Estrategias para la inclusión en el aula',
                      'Administración educativa',
                    ].map((spec) => (
                      <span
                        key={spec}
                        className="inline-flex items-center gap-1.5 text-sm bg-gray-50 border border-gray-100 text-gray-700 px-3 py-1.5 rounded-full"
                      >
                        <ChevronRight size={12} className="text-[#10b981]" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Star size={18} className="text-[#fbbf24]" />
                    Experiencia
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Docente durante varios años en instituciones educativas reconocidas, con
                    experiencia en administración de negocios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={2}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1758270705657-f28eec1a5694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhY2hlcnMlMjB0ZWFtJTIwZWR1Y2F0aW9uJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3MjQ2NjM5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Equipo de docentes especializados"
              width={1600}
              height={720}
              unoptimized
              className="w-full h-64 md:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#10b981] p-2 rounded-xl">
                  <Users size={20} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Docentes Especializados
                </h3>
              </div>
              <p className="text-white/85 max-w-xl leading-relaxed">
                Contamos con un grupo selecto de docentes especializados en cada una de las áreas
                del aprendizaje, comprometidos con la excelencia académica y el desarrollo integral
                de cada estudiante.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
