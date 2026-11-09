import React from 'react';
import { X, SlidersHorizontal, RotateCcw, Copy, Check, Code2 } from 'lucide-react';
import { ContactData } from '../types';

interface EditGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactData: ContactData;
  onUpdateContactData: (data: Partial<ContactData>) => void;
  onResetContactData: () => void;
}

export const EditGuideModal: React.FC<EditGuideModalProps> = ({
  isOpen,
  onClose,
  contactData,
  onUpdateContactData,
  onResetContactData,
}) => {
  const [copiedCode, setCopiedCode] = React.useState(false);

  if (!isOpen) return null;

  const handleCopyCodeSnippet = () => {
    const snippet = `// Configuración de datos en src/App.tsx:
const customContact = {
  email: "${contactData.email}",
  social: "${contactData.social}",
  locationMode: "${contactData.locationMode}",
  name: "${contactData.name}",
  objectivePhrase: "${contactData.objectivePhrase}",
};`;
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-sm animate-in fade-in"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-stone-200 text-left">
        
        {/* Header */}
        <div className="p-6 bg-[#FAF8F5] border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0F2438] text-white flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#0F2438]">
                Panel de personalización de textos [ ... ]
              </h3>
              <p className="text-xs text-stone-500">
                Ajustá tus datos en vivo o consultá cómo reemplazarlos en el código
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-800 hover:bg-stone-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-stone-800">
          
          <div className="p-4 rounded-xl bg-[#F2EDE4] border border-stone-300 text-xs text-stone-700">
            <p>
              Todos los datos que no fueron provistos en la consigna inicial se preservaron entre corchetes <code className="bg-white px-1 py-0.5 rounded font-mono font-bold text-stone-800">[TEXTO]</code> para no inventar información. Podés probar cómo se ven tus datos reales ingresándolos a continuación:
            </p>
          </div>

          {/* Form fields for live preview */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-stone-900 border-b pb-2">
              Edición en tiempo real:
            </h4>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Correo institucional o personal:
              </label>
              <input
                type="text"
                value={contactData.email}
                onChange={(e) => onUpdateContactData({ email: e.target.value })}
                placeholder="[TU_EMAIL]"
                className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono text-xs focus:border-[#0F2438] focus:ring-1 focus:ring-[#0F2438]"
              />
            </div>

            {/* Red Social */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Instagram o LinkedIn:
              </label>
              <input
                type="text"
                value={contactData.social}
                onChange={(e) => onUpdateContactData({ social: e.target.value })}
                placeholder="[TU_RED_SOCIAL]"
                className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono text-xs focus:border-[#0F2438] focus:ring-1 focus:ring-[#0F2438]"
              />
            </div>

            {/* Ciudad / Modalidad */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Ciudad / modalidad de trabajo:
              </label>
              <input
                type="text"
                value={contactData.locationMode}
                onChange={(e) => onUpdateContactData({ locationMode: e.target.value })}
                placeholder="[PRESENCIAL, VIRTUAL O HÍBRIDA]"
                className="w-full px-3 py-2 rounded-lg border border-stone-300 font-mono text-xs focus:border-[#0F2438] focus:ring-1 focus:ring-[#0F2438]"
              />
            </div>

            {/* Frase personal objetivo */}
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Mi objetivo / frase personal sobre tu manera de enseñar:
              </label>
              <textarea
                rows={2}
                value={contactData.objectivePhrase}
                onChange={(e) => onUpdateContactData({ objectivePhrase: e.target.value })}
                placeholder="[Escribí aquí una frase personal sobre tu manera de enseñar.]"
                className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs focus:border-[#0F2438] focus:ring-1 focus:ring-[#0F2438]"
              />
            </div>
          </div>

          {/* Guide for Project URLs */}
          <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 text-xs space-y-1.5">
            <div className="font-bold text-stone-900 flex items-center gap-1.5 font-serif">
              <Code2 className="w-4 h-4 text-[#0F2438]" />
              <span>Enlaces y fotos de proyectos:</span>
            </div>
            <p className="text-stone-600">
              Cada proyecto de ejemplo tiene asignado el botón con <code>href="[PEGAR_URL_DEL_PROYECTO]"</code> en <code>src/data/projectsData.ts</code>. Podés pegar allí links a carpetas de Google Drive, videos de YouTube o repositorios de GitHub con los proyectos de tus estudiantes.
            </p>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onResetContactData}
              className="px-3 py-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restablecer corchetes</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCodeSnippet}
                className="px-3.5 py-2 text-xs font-medium rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors flex items-center gap-1.5"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copiado' : 'Copiar configuración'}</span>
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2 text-xs font-semibold rounded-lg bg-[#0F2438] hover:bg-[#1a3a5a] text-white transition-colors"
              >
                Aplicar y cerrar
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
