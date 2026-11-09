import React from 'react';
import { ArrowRight, Compass, Wrench, Lightbulb, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-36 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF8F5] border-b border-stone-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Typographic Presentation */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Subdued Editorial Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F2EDE4] border border-stone-300/70 text-xs font-mono font-medium text-stone-700 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#166534]" />
              <span>Estudio de Robótica Educativa & STEAM</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-normal tracking-tight text-[#0F2438] leading-[1.12]" style={{ textWrap: 'balance' }}>
              Robótica educativa para{' '}
              <em className="italic font-serif text-[#166534] font-medium">crear, explorar</em>{' '}
              y resolver.
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl font-normal">
              Acompaño a estudiantes a transformar ideas en proyectos, combinando tecnología, creatividad y aprendizaje activo.
            </p>

            {/* Natural, sober buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('proyectos')}
                className="px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#0F2438] hover:bg-[#1a3a5a] transition-colors flex items-center justify-center gap-2.5 cursor-pointer shadow-sm"
              >
                <span>Conocé mis proyectos</span>
                <ArrowRight className="w-4 h-4 text-stone-300" />
              </button>

              <button
                onClick={() => scrollTo('contacto')}
                className="px-6 py-3.5 rounded-lg text-sm font-medium text-stone-800 bg-[#EFECE6] hover:bg-[#E5E0D8] border border-stone-300/80 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Hablemos de una propuesta</span>
              </button>
            </div>

            {/* Classroom Quote Pill */}
            <div className="pt-6 border-t border-stone-200/90 flex items-start gap-3 text-stone-600 text-xs sm:text-sm">
              <div className="w-6 h-6 rounded-full bg-[#F2EDE4] border border-stone-300 text-stone-700 flex items-center justify-center shrink-0 font-serif font-bold text-xs">
                “
              </div>
              <p className="italic font-serif leading-snug text-stone-700">
                En el taller no buscamos robots perfectos de catálogo: buscamos que cada estudiante comprenda cómo funciona el mundo que lo rodea y se sienta capaz de transformarlo.
              </p>
            </div>

          </div>

          {/* Right Column: Visual Composition / Workshop Studio Collage */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer warm paper frame */}
            <div className="relative p-2.5 sm:p-3 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-stone-200/90 rotate-1 hover:rotate-0 transition-transform duration-300">
              
              {/* Authentic documentary workshop photograph */}
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-stone-100">
                <img
                  src="/images/hero-robotica.jpg"
                  alt="Estudiantes en taller de robótica ensamblando un robot móvil con cables, cuaderno de diagramas y placas electrónicas sobre mesa de madera"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  width={800}
                  height={600}
                />
              </div>

              {/* Photo Caption */}
              <div className="pt-3 pb-1 px-1 flex items-start justify-between gap-2 text-xs text-stone-500">
                <span className="font-serif italic text-stone-600">
                  Taller de prototipado escolar · Construcción de rover 2WD y notas de campo
                </span>
                <span className="font-mono text-[10px] text-stone-400 shrink-0">FIG. 01</span>
              </div>
            </div>

            {/* Tactile overlay workshop card */}
            <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#FAF8F5] p-3.5 sm:p-4 rounded-xl shadow-md border border-stone-300/80 max-w-[240px] text-left hidden sm:block">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#166534] font-semibold uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-[#166534]" />
                <span>En el aula real</span>
              </div>
              <p className="text-xs text-stone-700 leading-snug font-sans">
                Circuitos reales, ensayo y error, debate en grupo y prototipos que funcionan.
              </p>
            </div>

            {/* Tactile corner stamp */}
            <div className="absolute -top-3 -right-3 px-3 py-1 rounded bg-[#E76F51] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-sm rotate-3">
              Aprendizaje Activo
            </div>

          </div>

        </div>

        {/* Studio Pedagogical Ribbon */}
        <div className="mt-16 pt-8 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-start gap-3">
            <Compass className="w-5 h-5 text-[#0F2438] shrink-0 mt-0.5" />
            <div>
              <span className="font-serif text-sm font-semibold text-[#0F2438] block">Curiosidad guiada</span>
              <span className="text-xs text-stone-500">Preguntas desafiantes como punto de partida</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Wrench className="w-5 h-5 text-[#166534] shrink-0 mt-0.5" />
            <div>
              <span className="font-serif text-sm font-semibold text-[#0F2438] block">Manos a la obra</span>
              <span className="text-xs text-stone-500">Cables, sensores y materiales tangibles</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-[#CA8A04] shrink-0 mt-0.5" />
            <div>
              <span className="font-serif text-sm font-semibold text-[#0F2438] block">Lógica aplicada</span>
              <span className="text-xs text-stone-500">Código claro para resolver situaciones concretas</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users className="w-5 h-5 text-[#C2410C] shrink-0 mt-0.5" />
            <div>
              <span className="font-serif text-sm font-semibold text-[#0F2438] block">Trabajo en equipo</span>
              <span className="text-xs text-stone-500">Roles cooperativos y comunicación efectiva</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
