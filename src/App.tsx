import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Pedagogy } from './components/Pedagogy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EditGuideModal } from './components/EditGuideModal';
import { projectsData } from './data/projectsData';
import { ContactData } from './types';

export default function App() {
  const [projects] = useState(projectsData);
  const [isEditGuideOpen, setIsEditGuideOpen] = useState(false);

  // Editable configuration holding the exact placeholder tokens required
  const defaultContactData: ContactData = {
    name: 'Rita Melisa Galbán',
    email: '[TU_EMAIL]',
    social: '[TU_RED_SOCIAL]',
    locationMode: '[PRESENCIAL, VIRTUAL O HÍBRIDA]',
    objectivePhrase: '[Escribí aquí una frase personal sobre tu manera de enseñar.]'
  };

  const [contactData, setContactData] = useState<ContactData>(defaultContactData);

  const handleUpdateContactData = (data: Partial<ContactData>) => {
    setContactData(prev => ({ ...prev, ...data }));
  };

  const handleResetContactData = () => {
    setContactData(defaultContactData);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-[#F2EDE4] selection:text-stone-900">
      
      {/* Accessible skip link for keyboard navigation */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#0F2438] text-white font-bold rounded-lg shadow-lg focus:outline-none"
      >
        Saltar al contenido principal
      </a>

      {/* Fixed Navigation Bar with Anchor Links */}
      <Navbar onOpenEditGuide={() => setIsEditGuideOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero / Inicio */}
        <Hero />

        {/* 2. Sobre mí */}
        <About
          customObjective={contactData.objectivePhrase}
          onOpenEditGuide={() => setIsEditGuideOpen(true)}
        />

        {/* 3. Proyectos de estudiantes */}
        <Projects
          projects={projects}
          onOpenEditGuide={() => setIsEditGuideOpen(true)}
        />

        {/* 4. Enfoque docente */}
        <Pedagogy />

        {/* 5. Contacto */}
        <Contact
          contactData={contactData}
          onOpenEditGuide={() => setIsEditGuideOpen(true)}
        />
      </main>

      {/* 6. Footer */}
      <Footer contactData={contactData} />

      {/* Helper modal for viewing and testing editable bracketed fields */}
      <EditGuideModal
        isOpen={isEditGuideOpen}
        onClose={() => setIsEditGuideOpen(false)}
        contactData={contactData}
        onUpdateContactData={handleUpdateContactData}
        onResetContactData={handleResetContactData}
      />

    </div>
  );
}
