"use client";

import { motion } from 'motion/react';
import { benefits } from '@/app/constants';


const Benefits = () => {
  return (
    <section className="py-20 bg-linear-to-br from-blue-50 via-emerald-50 to-amber-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Beneficios para Estudiantes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre por qué miles de estudiantes confían en StudyBoost
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-white/50 hover:-translate-y-2">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-linear-to-br ${benefit.gradient} flex items-center justify-center mb-4`}
                >
                  <benefit.icon className="text-white" size={28} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 to-emerald-600 text-transparent bg-clip-text mb-2">
                98%
              </div>
              <div className="text-gray-600">Tasa de Satisfacción</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-emerald-600 to-amber-600 text-transparent bg-clip-text mb-2">
                500+
              </div>
              <div className="text-gray-600">Tareas Completadas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-linear-to-r from-amber-600 to-blue-600 text-transparent bg-clip-text mb-2">
                24h
              </div>
              <div className="text-gray-600">Tiempo Promedio</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
