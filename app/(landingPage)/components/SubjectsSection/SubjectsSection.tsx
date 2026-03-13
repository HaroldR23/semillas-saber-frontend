"use client";

import { motion } from 'motion/react';
import CategoryCard from './SubjectCard';
import { subjectCategories } from '@/app/constants';

const SubjectsSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="materias" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#2563eb] mb-3">
            Áreas de conocimiento
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explora nuestras materias
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Organizadas por campos de Aprendizaje para que encuentres exactamente lo que necesitas
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {subjectCategories.map((cat, index) => (
            <CategoryCard key={cat.id} category={cat} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-gray-600 mb-5">
            ¿No encuentras tu materia? ¡Pregúntanos y te ayudamos!
          </p>
          <button
            onClick={scrollToContact}
            className="bg-linear-to-r from-[#2563eb] to-[#10b981] text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Contáctanos
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default SubjectsSection;
