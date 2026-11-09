import React from 'react';
import { ArrowUp } from 'lucide-react';
import { ContactData } from '../types';

interface FooterProps {
  contactData: ContactData;
}

export const Footer: React.FC<FooterProps> = ({ contactData }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Casos y proyectos', href: '#proyectos' },
    { name: 'Enfoque docente', href: '#enfoque-docente' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-[#FAF8F5] border-t border-stone-200 py-14 text-stone-600 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-stone-200">
          
          <div>
            <span className="font-serif text-2xl font-bold text-[#0F2438] block tracking-tight">
              {contactData.name}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#166534] font-semibold mt-0.5 block">
              Profesora de robótica educativa
            </span>
            <p className="mt-2 text-xs text-stone-500 max-w-sm leading-relaxed">
              Educación STEAM, pensamiento computacional y aprendizaje activo en escuelas e instituciones formativas.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-stone-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#0F2438] hover:underline underline-offset-4 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg border border-stone-300 hover:bg-white text-stone-700 hover:text-stone-900 transition-colors shadow-sm self-end md:self-auto"
            title="Volver arriba"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {currentYear} {contactData.name}. Todos los derechos reservados.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-stone-500">
            <span>Redes: {contactData.social}</span>
            <span>·</span>
            <span>Modalidad: {contactData.locationMode}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
