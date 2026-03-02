"use client";

import { Mail, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { menuItems, waMessage } from '../constants';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Logo />
            <p className="text-gray-400 leading-relaxed mb-6">
              Ayuda académica rápida y confiable para estudiantes de primaria y
              secundaria.
            </p>
            <div className="flex gap-4 items-center">
              <a
                href={waMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#2563eb] rounded-lg flex items-center justify-center transition-colors"
              >
                <MessageCircle color='green' size={20} />
              </a>
              <span>WhatsApp</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                    {item.label}
                  </button>
                </li>
              ))}
              </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Resolución de Tareas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Clases Particulares
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Preparación de Exámenes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Corrección de Trabajos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-[#2563eb] shrink-0 mt-1" size={20} />
                <a
                  href="mailto:rianopovedar@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  rianopovedar@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="text-[#10b981] shrink-0 mt-1" size={20} />
                <a
                  href={waMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp: +57 312 4184842
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Semillas del Saber. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
