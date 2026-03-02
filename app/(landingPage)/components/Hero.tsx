"use client";

import { motion } from 'motion/react';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [tasksCount, setTasksCount] = useState(0);

  // Animated counter
  useEffect(() => {
    const target = 500;
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setTasksCount(target);
        clearInterval(timer);
      } else {
        setTasksCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-linear-to-br from-blue-50 via-emerald-50 to-amber-50">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#2563eb]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-6"
            >
              <Star className="text-[#fbbf24]" size={18} fill="#fbbf24" />
              <span className="text-sm font-semibold text-gray-700">
                +{tasksCount.toLocaleString()} tareas entregadas con éxito
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Aprende mejor.
              <br />
              Entrega a tiempo.
              <br />
              <span className="bg-linear-to-r from-[#2563eb] via-[#10b981] to-[#fbbf24] text-transparent bg-clip-text">
                Mejora tus notas.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Ayuda académica rápida y confiable para estudiantes de primaria y
              secundaria. Resuelve tus tareas y aprende en el proceso.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => scrollToSection('contacto')}
                className="bg-linear-to-r from-[#2563eb] to-[#10b981] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Solicitar Ayuda Ahora
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('materias')}
                className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 border-2 border-gray-200 hover:border-[#2563eb]"
              >
                Ver Materias
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="bg-linear-to-br from-[#2563eb] to-[#10b981] p-2 rounded-lg">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-linear-to-br from-[#10b981] to-[#fbbf24] p-2 rounded-lg">
                  <Star size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Estudiantes activos</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex items-end justify-center"
          >
            <Image
              src="/docentes_sonrientes.png"
              alt="Equipo de tutores académicos"
              width={500}
              height={500}
              className="w-full drop-shadow-2xl relative"
            />

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Star className="text-green-600" size={20} fill="#16a34a" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Entrega oportuna</div>
                  {/* <div className="text-sm text-gray-600">24-48 horas</div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
