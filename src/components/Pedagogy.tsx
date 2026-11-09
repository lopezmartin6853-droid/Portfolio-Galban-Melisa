import React from 'react';
import { Compass, PenTool, Code2, Share2, Quote, Check } from 'lucide-react';

export const Pedagogy: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Explorar',
      quote: 'Partimos de preguntas, desafíos y problemas reales.',
      icon: Compass,
      tag: 'Indagación activa',
      method: 'Observamos el aula, el barrio o la naturaleza para encontrar desafíos genuinos. La tecnología entra como respuesta a una necesidad real, no como un fin en sí misma.',
      accent: 'border-t-2 border-[#166534]'
    },
    {
      num: '02',
      title: 'Diseñar',
      quote: 'Ideamos, planificamos y construimos prototipos.',
      icon: PenTool,
      tag: 'Prototipado artesanal',
      method: 'Bocetamos en papel, usamos cartón, madera y piezas impresas en 3D. El ensayo físico permite entender peso, equilibrio y funcionalidad antes de soldar o conectar.',
      accent: 'border-t-2 border-[#0F2438]'
    },
    {
      num: '03',
      title: 'Programar',
      quote: 'Usamos la lógica y el código para dar vida a las ideas.',
      icon: Code2,
      tag: 'Lógica computacional',
      method: 'Desde bloques visuales en Scratch o MakeCode hasta sintaxis en Arduino. Cada estudiante aprende a descomponer problemas complejos en instrucciones claras.',
      accent: 'border-t-2 border-[#CA8A04]'
    },
    {
      num: '04',
      title: 'Compartir',
      quote: 'Probamos, mejoramos y comunicamos lo aprendido.',
      icon: Share2,
      tag: 'Comunidad y reflexión',
      method: 'Muestras escolares y rondas de prueba entre pares. Reflexionamos sobre los errores como datos de ajuste y celebramos el proceso colectivo de construcción.',
      accent: 'border-t-2 border-[#C2410C]'
    },
  ];

  return (
    <section id="enfoque-docente" className="py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-semibold block mb-2">
            03 / ENFOQUE PEDAGÓGICO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F2438] font-normal tracking-tight">
            Aprender haciendo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Una metodología en cuatro tiempos pedagógicos donde cada estudiante experimenta el camino completo de una creadora o creador de tecnología.
          </p>
        </div>

        {/* 4 Steps Sequence - Editorial Notebook Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className={`p-6 bg-[#FAF8F5] rounded-xl border border-stone-200/80 flex flex-col justify-between ${step.accent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-stone-400">
                      PASO {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-800">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-semibold block mb-1">
                    {step.tag}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#0F2438] mb-2">
                    {step.title}
                  </h3>

                  <p className="font-serif italic text-sm text-stone-800 leading-snug mb-3">
                    “{step.quote}”
                  </p>

                  <p className="text-xs text-stone-600 leading-relaxed font-sans pt-3 border-t border-stone-200">
                    {step.method}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Frase Destacada Editorial */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#F2EDE4] border border-stone-300/80 text-left relative overflow-hidden">
          <div className="max-w-3xl">
            <Quote className="w-8 h-8 text-[#0F2438]/30 mb-3" />
            <blockquote className="font-serif text-2xl sm:text-3xl text-[#0F2438] italic font-normal leading-snug tracking-tight">
              “La robótica no es solo tecnología: es una oportunidad para aprender a pensar, crear y colaborar.”
            </blockquote>
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-stone-600">
              <span className="font-bold text-[#0F2438]">Rita Melisa Galbán</span>
              <span>—</span>
              <span>Docente de Robótica Educativa</span>
            </div>
          </div>
        </div>

        {/* 3 Classroom Commitments */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-4 rounded-xl bg-white border border-stone-200">
            <div className="flex items-center gap-2 text-xs font-mono text-[#166534] font-bold uppercase mb-1">
              <Check className="w-3.5 h-3.5" />
              <span>Sin frustración</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              El error en el código o en la mecánica no es un fracaso: es información precisa para iterar y perfeccionar el prototipo.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-stone-200">
            <div className="flex items-center gap-2 text-xs font-mono text-[#0F2438] font-bold uppercase mb-1">
              <Check className="w-3.5 h-3.5" />
              <span>Tecnología accesible</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Priorizamos placas accesibles, software libre y materiales reutilizables para que cualquier escuela pueda replicar la experiencia.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-stone-200">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C2410C] font-bold uppercase mb-1">
              <Check className="w-3.5 h-3.5" />
              <span>Voz estudiantil</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Los estudiantes proponen las temáticas, eligen el destino de su robot y explican en primera persona el funcionamiento.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
