import React, { useState } from 'react';
import { Mail, Send, MapPin, Share2, CheckCircle2, AlertCircle, Copy, Check, SlidersHorizontal } from 'lucide-react';
import { ContactData } from '../types';

interface ContactProps {
  contactData: ContactData;
  onOpenEditGuide: () => void;
}

export const Contact: React.FC<ContactProps> = ({ contactData, onOpenEditGuide }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipoConsulta: 'Propuesta para escuela o colegio',
    mensaje: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 500);
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contacto" className="py-24 bg-[#FAF8F5] border-b border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-semibold block mb-2">
            04 / CONTACTO Y PROPUESTAS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0F2438] font-normal tracking-tight">
            ¿Querés conversar sobre robótica educativa?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            Estoy a disposición para coordinar talleres con estudiantes, asesorar a equipos directivos en equipamiento STEAM, o capacitar a docentes que quieran incorporar la robótica en sus aulas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-2xl border border-stone-200/90 shadow-[0_2px_16px_rgba(28,25,23,0.03)]">
            <h3 className="font-serif text-2xl text-[#0F2438] mb-1">
              Escribime un mensaje
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Respondé con los detalles de tu institución o proyecto y te contestaré a la brevedad.
            </p>

            {formStatus === 'success' ? (
              <div className="p-6 rounded-xl bg-[#F2EDE4] border border-stone-300 text-center space-y-4">
                <div className="w-10 h-10 rounded-full bg-[#166534] text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#0F2438]">
                  ¡Mensaje preparado con éxito!
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
                  Muchas gracias <strong className="text-stone-900">{formData.nombre}</strong>. Podés abrir este mensaje directamente en tu correo electrónico habitual:
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`mailto:${contactData.email.startsWith('[') ? '' : contactData.email}?subject=Consulta de ${encodeURIComponent(formData.nombre)} - Robótica Educativa&body=${encodeURIComponent(formData.mensaje)}`}
                    className="px-5 py-2.5 rounded-lg bg-[#0F2438] hover:bg-[#1a3a5a] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Abrir cliente de correo</span>
                  </a>
                  <button
                    onClick={() => {
                      setFormStatus('idle');
                      setFormData({ nombre: '', email: '', tipoConsulta: 'Propuesta para escuela o colegio', mensaje: '' });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formStatus === 'error' && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>Por favor completá tu nombre, correo y mensaje antes de enviar.</span>
                  </div>
                )}

                <div>
                  <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Nombre completo o Institución <span className="text-[#C2410C]">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre o el de tu escuela"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-300 focus:border-[#0F2438] focus:ring-1 focus:ring-[#0F2438] text-stone-900 text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Correo electrónico <span className="text-[#C2410C]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="contacto@colegio.edu.ar"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-300 focus:border-[#0F2438] focus:ring-1 focus:ring-[#0F2438] text-stone-900 text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="tipoConsulta" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Tipo de propuesta o consulta
                  </label>
                  <select
                    id="tipoConsulta"
                    name="tipoConsulta"
                    value={formData.tipoConsulta}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-300 focus:border-[#0F2438] focus:ring-1 focus:ring-[#0F2438] text-stone-900 text-sm focus:outline-none transition-colors"
                  >
                    <option value="Propuesta para escuela o colegio">Taller o proyecto escolar</option>
                    <option value="Capacitación y formación docente">Capacitación docente en STEAM / Robótica</option>
                    <option value="Asesoramiento en laboratorio Maker">Asesoramiento en equipamiento y laboratorio Maker</option>
                    <option value="Feria de ciencias o evento">Feria de ciencias o jornada tecnológica</option>
                    <option value="Otro motivo">Otra consulta</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Mensaje <span className="text-[#C2410C]">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    placeholder="Contame brevemente tu idea, las edades de los estudiantes o la necesidad formativa..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-stone-300 focus:border-[#0F2438] focus:ring-1 focus:ring-[#0F2438] text-stone-900 text-sm focus:outline-none transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-lg font-semibold text-white bg-[#0F2438] hover:bg-[#1a3a5a] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-70"
                >
                  <Send className="w-4 h-4 text-stone-300" />
                  <span>{formStatus === 'submitting' ? 'Enviando...' : 'Escribime'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                <span className="font-serif text-sm font-bold text-stone-900">
                  Canales y modalidad
                </span>
                <button
                  onClick={onOpenEditGuide}
                  className="text-xs text-[#0F2438] hover:underline flex items-center gap-1"
                >
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>Personalizar</span>
                </button>
              </div>

              {/* Email */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="flex items-center gap-1.5 font-medium text-stone-700">
                    <Mail className="w-3.5 h-3.5 text-[#0F2438]" />
                    Correo electrónico
                  </span>
                  <span className="font-mono text-[10px] text-stone-400">Editable</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-stone-800 break-all">
                    {contactData.email}
                  </span>
                  <button
                    onClick={() => copyToClipboard(contactData.email, 'email')}
                    className="p-1 text-stone-400 hover:text-stone-700 transition-colors"
                    title="Copiar correo"
                  >
                    {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Social */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="flex items-center gap-1.5 font-medium text-stone-700">
                    <Share2 className="w-3.5 h-3.5 text-[#C2410C]" />
                    Instagram o LinkedIn
                  </span>
                  <span className="font-mono text-[10px] text-stone-400">Editable</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-stone-800 break-all">
                    {contactData.social}
                  </span>
                  <button
                    onClick={() => copyToClipboard(contactData.social, 'social')}
                    className="p-1 text-stone-400 hover:text-stone-700 transition-colors"
                    title="Copiar red"
                  >
                    {copiedField === 'social' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="flex items-center gap-1.5 font-medium text-stone-700">
                    <MapPin className="w-3.5 h-3.5 text-[#166534]" />
                    Ciudad / modalidad
                  </span>
                  <span className="font-mono text-[10px] text-stone-400">Editable</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-stone-800">
                    {contactData.locationMode}
                  </span>
                  <button
                    onClick={() => copyToClipboard(contactData.locationMode, 'location')}
                    className="p-1 text-stone-400 hover:text-stone-700 transition-colors"
                    title="Copiar modalidad"
                  >
                    {copiedField === 'location' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

            </div>

            {/* Privacy & Professional Care Notice */}
            <div className="p-4 rounded-xl bg-[#F2EDE4] border border-stone-300 text-xs text-stone-600 space-y-1 leading-relaxed">
              <strong className="text-stone-900 block font-serif">Compromiso ético de aula</strong>
              <p>
                Los datos de contacto entre corchetes son configurables para respetar la información oficial de la docente. Toda consulta se responde con absoluta confidencialidad pedagógica.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
