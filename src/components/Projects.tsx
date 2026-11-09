import React, { useState } from 'react';
import { CaseStudyProject } from '../types';
import { ExternalLink, Tag, BookOpen, Layers, CheckCircle2, AlertCircle, Sparkles, SlidersHorizontal, ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  projects: CaseStudyProject[];
  onOpenEditGuide: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onOpenEditGuide }) => {
  const [selectedProject, setSelectedProject] = useState<CaseStudyProject | null>(null);
  const [activeTab, setActiveTab] = useState<'todos' | 'hardware' | 'sensores' | 'software'>('todos');

  const filteredProjects = projects.filter((p) => {
    if (activeTab === 'todos') return true;
    if (activeTab === 'hardware') {
      return p.technologies.some(t => {
        const lower = t.toLowerCase();
        return lower.includes('arduino') || lower.includes('micro:bit') || lower.includes('motores');
      });
    }
    if (activeTab === 'sensores') {
      return p.technologies.some(t => {
        const lower = t.toLowerCase();
        return lower.includes('sensor') || lower.includes('ultrasonido');
      });
    }
    if (activeTab === 'software') {
      return p.technologies.some(t => {
        const lower = t.toLowerCase();
        return lower.includes('scratch') || lower.includes('bloques') || lower.includes('programación');
      });
    }
    return true;
  });

  return (
    <section id="proyectos" className="py-24 bg-[#FAF8F5] border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-semibold block mb-2">
            02 / CASOS DE ESTUDIO Y PROYECTOS ESCOLARES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F2438] font-normal tracking-tight">
            Proyectos de robótica
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Una selección de experiencias creadas junto a estudiantes. Cada proyecto refleja un proceso de investigación, diseño, prueba y mejora.
          </p>

          {/* Nota editorial sobre proyectos de ejemplo */}
          <div className="mt-6 p-4 rounded-xl bg-[#F2EDE4] border border-stone-300/80 flex items-start gap-3 text-stone-700 text-xs sm:text-sm">
            <span className="w-2 h-2 rounded-full bg-[#166534] mt-1.5 shrink-0" />
            <div className="flex-1 leading-relaxed">
              <strong className="text-stone-900 font-semibold">Casos de ejemplo estructurados: </strong>
              Prototipos diseñados para ilustrar el alcance formativo en escuelas. Podés vincular los repositorios o registros fotográficos de tu propia institución reemplazando la URL del botón.
            </div>
            <button
              onClick={onOpenEditGuide}
              className="text-xs font-semibold text-[#0F2438] underline shrink-0 hover:text-stone-900"
            >
              Cómo editar
            </button>
          </div>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-stone-200">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'todos', label: 'Todos los casos (6)' },
              { id: 'hardware', label: 'Hardware & Placas' },
              { id: 'sensores', label: 'Sensores y Automatización' },
              { id: 'software', label: 'Programación y Código' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#0F2438] text-white shadow-sm'
                    : 'text-stone-600 bg-white border border-stone-200 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono text-stone-500">
            Mostrando {filteredProjects.length} de {projects.length} casos
          </div>
        </div>

        {/* Projects Layout: Case Studies as Editorial Stories */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <article
                key={project.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-[0_2px_14px_rgba(28,25,23,0.03)] overflow-hidden transition-all duration-200 hover:border-stone-400"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Visual Column: Photograph or Workshop Sketch */}
                  <div className={`lg:col-span-5 bg-stone-100 relative min-h-[260px] lg:min-h-full ${isReversed ? 'lg:order-2' : ''}`}>
                    {project.image ? (
                      <div className="h-full w-full relative overflow-hidden group">
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          className="w-full h-full object-cover min-h-[280px] lg:min-h-full"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                        <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-2.5 rounded-lg border border-stone-200 text-[11px] text-stone-600 font-serif italic">
                          {project.caption}
                        </div>
                      </div>
                    ) : (
                      /* Clean tactile workshop card fallback for secondary cases */
                      <div className="h-full w-full p-8 flex flex-col justify-between bg-[#F8F5F0] border-b lg:border-b-0 lg:border-r border-stone-200">
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="font-mono text-xs font-bold text-stone-400 uppercase tracking-widest">
                              PROTOTIPO DE LABORATORIO
                            </span>
                            <span className="font-serif text-lg font-bold text-stone-400">
                              CASO {project.letter}
                            </span>
                          </div>
                          <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-sm space-y-2">
                            <span className="text-[11px] font-mono text-stone-500 uppercase tracking-wider block">
                              Componentes principales
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {project.hardware.map((hw, i) => (
                                <span key={i} className="text-xs px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-mono">
                                  {hw}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-stone-200/80 text-xs text-stone-500 font-serif italic">
                          {project.caption}
                        </div>
                      </div>
                    )}

                    {/* Badge: Proyecto de ejemplo */}
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0F2438] text-white text-[11px] font-mono font-medium shadow-sm">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>Proyecto de ejemplo {project.letter}</span>
                    </div>

                    {/* Badge: Nivel / edad editable */}
                    <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white text-stone-800 text-[11px] font-mono font-medium shadow-sm border border-stone-200">
                      <Tag className="w-3 h-3 text-[#166534]" />
                      <span>{project.level}</span>
                    </div>
                  </div>

                  {/* Content Column: The Case Study Breakdown */}
                  <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-left ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="space-y-6">
                      
                      <div>
                        <div className="text-xs font-mono text-stone-500 mb-1 flex items-center gap-2">
                          <span>Caso de estudio</span>
                          <span>·</span>
                          <span className="font-semibold text-stone-700">{project.technologies.join(' · ')}</span>
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#0F2438] tracking-tight">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-stone-700 text-sm sm:text-base leading-relaxed">
                          {project.summary}
                        </p>
                      </div>

                      {/* Structured 3-part pedagogical case data */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
                        
                        <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
                          <span className="text-[11px] font-mono font-bold text-[#C2410C] uppercase tracking-wider block mb-1">
                            El desafío
                          </span>
                          <p className="text-xs text-stone-700 leading-relaxed font-sans">
                            {project.desafio}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
                          <span className="text-[11px] font-mono font-bold text-[#0F2438] uppercase tracking-wider block mb-1">
                            Actividad en taller
                          </span>
                          <p className="text-xs text-stone-700 leading-relaxed font-sans">
                            {project.actividad}
                          </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200/80">
                          <span className="text-[11px] font-mono font-bold text-[#166534] uppercase tracking-wider block mb-1">
                            Aprendizaje clave
                          </span>
                          <p className="text-xs text-stone-700 leading-relaxed font-sans">
                            {project.aprendizaje}
                          </p>
                        </div>

                      </div>

                    </div>

                    {/* Bottom Actions */}
                    <div className="mt-8 pt-5 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-stone-700 hover:text-[#0F2438] underline underline-offset-4 flex items-center gap-1"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Ver detalles de aula y materiales</span>
                      </button>

                      {/* Botón Ver proyecto con placeholder fácil de reemplazar */}
                      <a
                        href={project.urlPlaceholder}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (project.urlPlaceholder.startsWith('[')) {
                            e.preventDefault();
                            setSelectedProject(project);
                          }
                        }}
                        title={`Enlace editable: ${project.urlPlaceholder}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0F2438] hover:bg-[#1a3a5a] transition-colors shadow-sm"
                      >
                        <span>Ver proyecto</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-stone-300" />
                      </a>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-sm animate-in fade-in"
        >
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-stone-200">
            
            {/* Modal Header */}
            <div className="p-6 bg-[#FAF8F5] border-b border-stone-200 flex items-start justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#166534] uppercase tracking-wider block mb-1">
                  CASO DE ESTUDIO {selectedProject.letter} · {selectedProject.level}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#0F2438]">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-800 hover:bg-stone-200/60 transition-colors"
                aria-label="Cerrar modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6 text-left text-stone-800">
              
              {selectedProject.image && (
                <div className="rounded-xl overflow-hidden aspect-[16/9] border border-stone-200 bg-stone-100">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div>
                <h4 className="font-serif text-lg font-bold text-stone-900 mb-1">
                  Resumen de la experiencia
                </h4>
                <p className="text-sm text-stone-600 leading-relaxed font-sans">
                  {selectedProject.summary}
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                  <span className="text-xs font-mono font-bold text-[#C2410C] uppercase block mb-1">
                    Pregunta guía / Desafío
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {selectedProject.desafio}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                  <span className="text-xs font-mono font-bold text-[#0F2438] uppercase block mb-1">
                    Proceso de construcción y programación
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {selectedProject.actividad}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                  <span className="text-xs font-mono font-bold text-[#166534] uppercase block mb-1">
                    Habilidades y aprendizajes consolidados
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    {selectedProject.aprendizaje}
                  </p>
                </div>
              </div>

              {/* Hardware / Materiales */}
              <div>
                <h4 className="text-xs font-mono font-bold text-stone-500 uppercase tracking-wider mb-2">
                  Materiales y componentes de aula:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.hardware.map((hw, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 bg-[#FAF8F5] border border-stone-200 rounded-md font-mono text-stone-800">
                      {hw}
                    </span>
                  ))}
                </div>
              </div>

              {/* URL placeholder guidance */}
              <div className="p-4 rounded-xl bg-[#F2EDE4] border border-stone-300 text-xs text-stone-700 space-y-1.5">
                <div className="flex items-center justify-between font-semibold text-stone-900">
                  <span>Enlace actual configurado para el botón:</span>
                  <span className="font-mono text-[11px] bg-white px-2 py-0.5 rounded border border-stone-300">
                    Editable
                  </span>
                </div>
                <p className="font-mono text-stone-800 break-all bg-white p-2 rounded border border-stone-300/80">
                  {selectedProject.urlPlaceholder}
                </p>
                <p className="text-[11px] text-stone-500">
                  Reemplazá este valor en <code>src/data/projectsData.ts</code> por el link al drive, video o repositorio de tu escuela.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#0F2438] hover:bg-[#1a3a5a] transition-colors"
                >
                  Cerrar ficha
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
