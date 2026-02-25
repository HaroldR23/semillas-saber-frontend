"use client";

import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { steps } from '../../constants';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Obtén ayuda académica en 3 simples pasos
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-linear-to-r from-gray-300 to-transparent -translate-x-1/2 z-0"></div>
              )}

              <div className="relative z-10 text-center">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md mb-6">
                  <span className={`text-xl font-bold bg-linear-to-r ${step.color} text-transparent bg-clip-text`}>
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className={`${step.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="text-gray-700" size={40} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-linear-to-r from-[#2563eb] to-[#10b981] text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            Comenzar Ahora
            <Send size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
