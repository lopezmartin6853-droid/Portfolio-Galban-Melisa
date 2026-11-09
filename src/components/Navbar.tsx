import React, { useState, useEffect } from 'react';
import { Menu, X, SlidersHorizontal } from 'lucide-react';

interface NavbarProps {
  onOpenEditGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEditGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['inicio', 'sobre-mi', 'proyectos', 'enfoque-docente', 'contacto'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Sobre mí', href: '#sobre-mi', id: 'sobre-mi' },
    { name: 'Casos y proyectos', href: '#proyectos', id: 'proyectos' },
    { name: 'Enfoque docente', href: '#enfoque-docente', id: 'enfoque-docente' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/90 shadow-[0_2px_12px_rgba(28,25,23,0.04)] py-3.5'
          : 'bg-[#FAF8F5]/85 backdrop-blur-sm border-b border-stone-200/50 py-4.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Wordmark */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded py-0.5"
          >
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#0F2438] group-hover:text-stone-700 transition-colors">
              Rita Melisa Galbán
            </span>
            <span className="text-[11px] font-sans tracking-wider uppercase text-stone-500 font-medium -mt-0.5">
              Robótica Educativa · Estudio Docente
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            {navLinks.slice(0, 4).map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`transition-colors whitespace-nowrap shrink-0 py-1 text-[13px] tracking-wide ${
                    isActive ? 'text-[#0F2438] font-semibold underline underline-offset-8 decoration-stone-400' : 'hover:text-[#0F2438]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Guide toggle */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenEditGuide}
              title="Personalizar datos [ ... ]"
              className="px-2.5 py-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors text-xs flex items-center gap-1.5 border border-stone-200"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Datos editables</span>
            </button>

            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, '#contacto')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0F2438] hover:bg-[#1a3a5a] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              Hablemos de una propuesta
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenEditGuide}
              className="p-2 text-stone-700 hover:text-stone-900 rounded-lg border border-stone-200 bg-white"
              aria-label="Ver guía de edición"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-stone-900 rounded-lg border border-stone-200 bg-white"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-stone-200 px-5 pt-3 pb-6 space-y-2.5 animate-in fade-in">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-stone-200/70 text-[#0F2438] font-semibold'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, '#contacto')}
              className="block w-full text-center py-2.5 text-sm font-semibold text-white bg-[#0F2438] hover:bg-[#1a3a5a] rounded-lg"
            >
              Hablemos de una propuesta
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
