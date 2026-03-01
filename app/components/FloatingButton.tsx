"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { helpMessage, whatsappUrl } from '../constants';

const FloatingHelpButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleWhatsApp = () => {
    window.open(`${whatsappUrl}?text=${encodeURIComponent(helpMessage)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div ref={containerRef} className="fixed bottom-6 right-6 z-9999">
          {/* Help Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-6 mb-2 w-80 border border-gray-100"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">¿Necesitas ayuda urgente?</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Contáctanos ahora y te ayudaremos con tu tarea lo antes posible
                  </p>
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-linear-to-r from-[#10b981] to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <MessageCircle size={20} />
                  Chatear por WhatsApp
                </button>

                <div className="mt-3 text-center">
                  <button
                    onClick={() => {
                      const element = document.getElementById('contacto');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        setIsOpen(false);
                      }
                    }}
                    className="text-sm text-[#2563eb] hover:text-[#1e40af] hover:underline font-medium transition-colors"
                  >
                    O envía información detallada por aquí
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <motion.div className="relative">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-16 h-16 bg-linear-to-r from-[#2563eb] to-[#10b981] rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-[0_10px_40px_rgba(37,99,235,0.4)] transition-all duration-300"
              style={{ zIndex: 10000 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={28} strokeWidth={2.5} /> : <MessageCircle size={28} strokeWidth={2.5} />}
              </motion.div>
            </motion.button>

            {/* Pulse Effect */}
            {!isOpen && (
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-[#2563eb] to-[#10b981] rounded-full pointer-events-none"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingHelpButton;
