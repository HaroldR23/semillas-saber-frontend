"use client";

import { motion } from 'motion/react';
import { useState } from 'react';
import { Check } from 'lucide-react';

import { plans } from '@/app/constants';


const Pricing = ({ onSelectPlan }: { onSelectPlan: (plan: string) => void }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const scrollToContact = () => {
    if (selectedIndex === null) return;
    onSelectPlan(plans[selectedIndex].name);
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="precios" className="py-20 bg-white">
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
            Planes y Precios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades académicas
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const isSelected = selectedIndex === index;
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg z-10 whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`text-left w-full bg-white rounded-2xl p-6 h-full flex flex-col transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? `ring-[3px] ${plan.ring} shadow-2xl scale-[1.02]`
                      : 'border-2 border-gray-100 hover:border-gray-200 hover:shadow-lg'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${plan.gradient} flex items-center justify-center mb-4 ${
                      isSelected ? 'scale-110' : ''
                    } transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={24} strokeWidth={2} />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-[1.1rem] font-bold text-gray-900 mb-1 leading-snug">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 mb-5">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-5">
                    <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-sm text-gray-400 ml-1">COP</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div
                          className={`shrink-0 w-5 h-5 rounded-full mt-0.5 flex items-center justify-center ${
                            isSelected
                              ? `bg-linear-to-br ${plan.gradient}`
                              : 'bg-gray-100'
                          } transition-colors duration-300`}
                        >
                          <Check
                            size={12}
                            className={isSelected ? 'text-white' : 'text-gray-500'}
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Selection indicator */}
                  <div
                    className={`w-full py-2.5 rounded-full text-center text-sm font-semibold transition-all duration-300 ${
                      isSelected
                        ? `bg-linear-to-r ${plan.gradient} text-white shadow-md`
                        : 'bg-gray-50 text-gray-400 border border-dashed border-gray-200'
                    }`}
                  >
                    {isSelected ? 'Seleccionado' : 'Seleccionar plan'}
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            onClick={scrollToContact}
            disabled={selectedIndex === null}
            className={`px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
              selectedIndex !== null
                ? 'bg-linear-to-r from-[#2563eb] to-[#10b981] text-white hover:shadow-xl hover:scale-105 cursor-pointer'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {selectedIndex !== null
              ? `Comenzar con ${plans[selectedIndex].name}`
              : 'Selecciona un plan para continuar'}
          </button>

          <p className="text-gray-500 text-sm mt-4">
            ¿Necesitas un plan personalizado?{' '}
            <button
              onClick={scrollToContact}
              className="text-[#2563eb] font-semibold hover:underline"
            >
              Contáctanos
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
