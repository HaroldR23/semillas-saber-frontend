import { motion } from 'motion/react';
import { Send, Tag } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

import { ContactProps } from '@/app/models';
import { whatsappUrl } from '@/app/constants';

const Contact = ({ selectedPlan, onClearPlan }: ContactProps) => {
  const initialFormData = {
    name: '',
    email: '',
    guardianName: '',
    subject: '',
    message: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const avoidError = () => {
      if (selectedPlan) {
        setFormData((prev) => ({
          ...prev,
          subject: `Plan: ${selectedPlan}`,
          message: prev.message
          ? prev.message
          : `Hola, estoy interesado/a en el plan ${selectedPlan}. Me gustaría recibir más información.`,
        }));
      }
    }
    avoidError();
  }, [selectedPlan]);

  const encodeWhatsAppMessage = (data: typeof initialFormData): string => {
    const message = `*Nueva Solicitud de Ayuda*\n\n*Nombre:* ${data.name}\n*Email:* ${data.email}\n*Acudiente:* ${data.guardianName}\n*Asunto:* ${data.subject}\n*Mensaje:*\n${data.message}`;
    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const encodedMessage = encodeWhatsAppMessage(formData);
    const whatsappUrlWithMessage = `${whatsappUrl}?text=${encodedMessage}`;
    window.open(whatsappUrlWithMessage, '_blank');
    
    setFormData(initialFormData);
    onClearPlan?.();
  };

  const handleDismissPlan = () => {
    setFormData((prev) => ({ ...prev, subject: '', message: '' }));
    onClearPlan?.();
  };

  return (
    <section id="contacto" className="py-20 bg-white">
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
            Contacto Rápido
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos pronto
          </p>
        </motion.div>

        <div className="flex flex-col justify-center max-w-3xl mx-auto border border-gray-200 rounded-xl p-8 shadow-lg">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Selected plan banner */}
              {selectedPlan && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between gap-3 bg-linear-to-r from-blue-50 to-emerald-50 border border-blue-200 rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Tag size={16} className="text-[#2563eb] shrink-0" />
                    <span className="text-sm font-medium text-gray-700 truncate">
                      Plan seleccionado: <span className="font-bold text-[#2563eb]">{selectedPlan}</span>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleDismissPlan}
                    className="text-gray-400 hover:text-gray-600 text-xs shrink-0 underline"
                  >
                    Quitar
                  </button>
                </motion.div>
              )}

              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nombre del Estudiante
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition-all"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition-all"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="guardianName" className="block text-gray-700 mb-2">
                  Nombre del Acudiente
                </label>
                <input
                  type="text"
                  id="guardianName"
                  value={formData.guardianName}
                  onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition-all"
                  placeholder="Nombre del acudiente"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Materia o Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition-all"
                  placeholder="Ej: Matemáticas - Cálculo"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Describe tu tarea
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563eb] transition-all resize-none"
                  placeholder="Describe tu tarea, fecha de entrega y cualquier detalle importante..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-[#2563eb] to-[#10b981] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Enviar Mensaje
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
