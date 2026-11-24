import React, { useState, useEffect, useCallback } from 'react';
import { PageSection } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyProfile } from './components/CompanyProfile';
import { EquipmentCatalog } from './components/EquipmentCatalog';
import { IconicProjectsConstellation } from './components/IconicProjectsConstellation';
import { MaharashtraExpansion } from './components/MaharashtraExpansion';
import { ImplementationProtocol } from './components/ImplementationProtocol';
import { HvacEstimator } from './components/HvacEstimator';
import { SocialResponsibility } from './components/SocialResponsibility';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BrochureViewerModal } from './components/BrochureViewerModal';

const VALID_SECTIONS: PageSection[] = [
  'hero',
  'about',
  'expertise',
  'equipment',
  'projects',
  'expansion',
  'protocol',
  'estimator',
  'social-responsibility',
  'contact',
];

function resolveSectionFromHash(hash: string): { section: PageSection; subAnchor?: string } {
  const cleaned = hash.replace(/^#/, '').trim();
  if (!cleaned || cleaned === 'hero') {
    return { section: 'hero' };
  }
  if (cleaned === 'kolkata-hq') {
    return { section: 'contact', subAnchor: 'kolkata-hq' };
  }
  if (cleaned === 'quote') {
    return { section: 'contact' };
  }
  if (VALID_SECTIONS.includes(cleaned as PageSection)) {
    return { section: cleaned as PageSection };
  }
  return { section: 'hero' };
}

export function App() {
  const [activeSection, setActiveSection] = useState<PageSection>(() => {
    if (typeof window !== 'undefined') {
      return resolveSectionFromHash(window.location.hash).section;
    }
    return 'hero';
  });
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [estimatorInquiryData, setEstimatorInquiryData] = useState<{
    area?: number;
    spaceType?: string;
    estimatedTR?: number;
    estimatedHP?: number;
  } | null>(null);

  const navigateToSection = useCallback((section: PageSection, subAnchor?: string) => {
    setActiveSection(section);

    if (typeof window !== 'undefined') {
      const targetHash = subAnchor ? `#${subAnchor}` : section === 'hero' ? '#hero' : `#${section}`;
      if (window.location.hash !== targetHash) {
        window.history.replaceState(null, '', targetHash);
      }

      if (subAnchor) {
        window.setTimeout(() => {
          const el = document.getElementById(subAnchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const resolved = resolveSectionFromHash(window.location.hash);
      setActiveSection(resolved.section);
      if (resolved.subAnchor) {
        window.setTimeout(() => {
          const el = document.getElementById(resolved.subAnchor!);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleExploreProjects = () => {
    navigateToSection('projects');
  };

  const handleApplyEstimatorToInquiry = (data: {
    area: number;
    spaceType: string;
    estimatedTR: number;
    estimatedHP: number;
  }) => {
    setEstimatorInquiryData(data);
    navigateToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] flex flex-col selection:bg-[#006688] selection:text-white">
      {/* Top Authoritative Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={navigateToSection}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      {/* Single Active View Section */}
      <main className="flex-1">
        {activeSection === 'hero' && (
          <Hero
            onExploreProjects={handleExploreProjects}
            onNavigate={navigateToSection}
          />
        )}

        {activeSection === 'about' && (
          <CompanyProfile onNavigate={navigateToSection} />
        )}

        {activeSection === 'expertise' && (
          <EquipmentCatalog mode="expertise" onNavigate={navigateToSection} />
        )}

        {activeSection === 'equipment' && (
          <EquipmentCatalog mode="equipment" onNavigate={navigateToSection} />
        )}

        {activeSection === 'projects' && (
          <IconicProjectsConstellation onNavigate={navigateToSection} />
        )}

        {activeSection === 'expansion' && (
          <MaharashtraExpansion onNavigate={navigateToSection} />
        )}

        {activeSection === 'protocol' && (
          <ImplementationProtocol onNavigate={navigateToSection} />
        )}

        {activeSection === 'estimator' && (
          <HvacEstimator onApplyToInquiry={handleApplyEstimatorToInquiry} />
        )}

        {activeSection === 'social-responsibility' && (
          <SocialResponsibility />
        )}

        {activeSection === 'contact' && (
          <ContactSection initialInquiry={estimatorInquiryData} />
        )}
      </main>

      {/* Authoritative Global Footer */}
      <Footer onNavigate={navigateToSection} />

      {/* High-Resolution Brochure Viewer Modal */}
      <BrochureViewerModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </div>
  );
}

export default App;
