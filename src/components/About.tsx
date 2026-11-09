import React from 'react';
import { Target, SlidersHorizontal, BookOpen, Clock, Heart } from 'lucide-react';
import { teacherTimeline } from '../data/projectsData';

interface AboutProps {
  customObjective?: string;
  onOpenEditGuide: () => void;
}

export const About: React.FC<AboutProps> = ({ customObjective, onOpenEditGuide }) => {
  const interestAreas = [
    { label: '[Programación]', desc: 'Scratch, MakeCode, C++/Arduino y lógica de bloques' },
    { label: '[Electrónica]', desc: 'Microcontroladores, sensores analógicos y circuitos' },
    { label: '[Diseño 3D]', desc: 'Modelado CAD para impresión 3D y piezas estructurales' },
    { label: '[Pensamiento computacional]', desc: 'Algoritmos, descomposición de problemas y patrones' },
    { label: '[Aprendizaje basado en proyectos]', desc: 'Desafíos reales contextualizados para la comunidad' },
  ];

  const objectiveText = customObjective || '[Escribí aquí una frase personal sobre tu manera de enseñar.]';

  return (
    <section id="sobre-mi" className="py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-semibold block mb-2">
            01 / PERFIL Y TRAYECTORIA
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F2438] font-normal tracking-tight">
            Tecnología enseñada con cercanía, rigor y sentido humano
          </h2>
        </div>

        {/* Asymmetric Profile Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column Left: Official Teacher Portrait with warm studio matting */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#FAF8F5] p-3 sm:p-4 rounded-2xl border border-stone-200 shadow-sm">
              <div className="relative overflow-hidden rounded-xl bg-stone-100 aspect-[4/5]">
                <img
                  src="/assets/aistudio/Retrato_profesional_con_fondo_beige_42f5065c.png"
                  alt="Retrato profesional de Rita Melisa Galbán, docente de robótica educativa"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Matting Caption */}
              <div className="pt-3 px-1 flex items-center justify-between text-xs text-stone-600">
                <div>
                  <p className="font-serif font-bold text-stone-900 text-sm">Rita Melisa Galbán</p>
                  <p className="text-[11px] text-stone-500 font-mono">Docente de Robótica Educativa</p>
                </div>
                <button
                  onClick={onOpenEditGuide}
                  className="text-[11px] text-[#0F2438] hover:underline font-medium flex items-center gap-1"
                >
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>Editar datos</span>
                </button>
              </div>
            </div>

            {/* Teaching philosophy quote badge */}
            <div className="mt-6 p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs text-stone-700 space-y-2">
              <div className="flex items-center gap-1.5 font-semibold text-stone-900 font-serif">
                <Heart className="w-3.5 h-3.5 text-[#C2410C]" />
                <span>Mi mirada en el aula</span>
              </div>
              <p className="italic leading-relaxed">
                “La robótica se vuelve transformadora cuando los chicos descubren que un sensor o una línea de código pueden resolver una necesidad de su propia escuela.”
              </p>
            </div>
          </div>

          {/* Column Right: Biography & Areas & Objective */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#0F2438] mb-4">
                Hola, soy Rita Melisa Galbán
              </h3>
              
              <div className="prose text-stone-700 text-base sm:text-lg leading-relaxed font-normal space-y-4">
                <p>
                  Soy profesora de robótica y acompaño a estudiantes en experiencias de aprendizaje donde programar, diseñar y construir se convierten en herramientas para imaginar soluciones reales. Me interesa que cada proyecto fortalezca la curiosidad, el trabajo en equipo, la autonomía y la confianza.
                </p>
                <p className="text-sm text-stone-600">
                  Trabajo junto a escuelas e instituciones diseñando propuestas pedagógicas que integran la programación y la electrónica sin tecnicismos innecesarios, partiendo de preguntas genuinas de los estudiantes.
                </p>
              </div>
            </div>

            {/* Áreas de trabajo e intereses con etiquetas editables */}
            <div className="pt-4 border-t border-stone-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-serif text-sm font-bold text-stone-900 uppercase tracking-wider">
                  Áreas e intereses formativos
                </h4>
                <span className="text-[11px] font-mono text-stone-400">Etiquetas editables</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {interestAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-[#FAF8F5] border border-stone-200/90 text-left"
                  >
                    <span className="font-mono text-xs font-bold text-[#0F2438] block mb-0.5">
                      {area.label}
                    </span>
                    <span className="text-xs text-stone-600 leading-snug block">
                      {area.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bloque breve "Mi objetivo" con texto editable */}
            <div className="p-6 rounded-2xl bg-[#F2EDE4]/70 border border-stone-300 text-left">
              <div className="flex items-center justify-between mb-2 text-stone-800">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#166534]" />
                  <span className="text-xs font-mono uppercase tracking-wider font-bold text-stone-800">
                    Mi objetivo docente
                  </span>
                </div>
                <button
                  onClick={onOpenEditGuide}
                  className="text-xs text-[#0F2438] hover:underline font-medium"
                >
                  Modificar texto
                </button>
              </div>

              <p className="font-serif text-lg sm:text-xl text-[#0F2438] italic font-normal leading-relaxed pl-3 border-l-2 border-[#166534]">
                «{objectiveText}»
              </p>
            </div>

          </div>

        </div>

        {/* Línea de tiempo o Recorrido Docente */}
        <div className="mt-20 pt-12 border-t border-stone-200">
          <div className="max-w-2xl mb-10 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-semibold block mb-1">
              RECORRIDO DOCENTE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#0F2438]">
              Cómo abordo cada espacio de enseñanza
            </h3>
            <p className="text-sm text-stone-600 mt-2">
              Un enfoque pedagógico centrado en la persona que aprende, combinando metodología activa y acompañamiento docente cercano.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {teacherTimeline.map((item, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl bg-[#FAF8F5] border border-stone-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#EBE5DB] font-mono text-[11px] font-semibold text-stone-800">
                      <Clock className="w-3 h-3 text-stone-600" />
                      {item.period}
                    </span>
                    <span className="font-serif text-xs text-stone-400 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#0F2438] mb-1">
                    {item.role}
                  </h4>
                  
                  <span className="text-xs font-mono text-[#166534] font-semibold block mb-3">
                    {item.focus}
                  </span>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center gap-1 text-[11px] text-stone-500 font-serif italic">
                  <BookOpen className="w-3 h-3 text-stone-400" />
                  <span>Enfoque pedagógico activo</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
