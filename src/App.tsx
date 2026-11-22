import React, { useState } from 'react';
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

export function App() {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [estimatorInquiryData, setEstimatorInquiryData] = useState<{
    area?: number;
    spaceType?: string;
    estimatedTR?: number;
    estimatedHP?: number;
  } | null>(null);

  const handleExploreProjects = () => {
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimatorToInquiry = (data: {
    area: number;
    spaceType: string;
    estimatedTR: number;
    estimatedHP: number;
  }) => {
    setEstimatorInquiryData(data);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] flex flex-col selection:bg-[#006688] selection:text-white">
      {/* Top Authoritative Navigation */}
      <Navbar 
        onOpenBrochure={() => setIsBrochureOpen(true)} 
      />

      {/* Main Engineering Sections */}
      <main className="flex-1">
        {/* 1. Hero Showcase */}
        <Hero 
          onExploreProjects={handleExploreProjects}
        />

        {/* 2. Corporate Overview, Authorized Brands & 5 Core Strengths */}
        <CompanyProfile />

        {/* 3. HVAC Equipment Systems & VRF Technical Catalog */}
        <EquipmentCatalog />

        {/* 4. Glimpse of 14 Iconic Projects (Constellation Orbit & Grid) */}
        <IconicProjectsConstellation />

        {/* 5. Maharashtra Expansion (Chhatrapati Sambhajinagar Branch) */}
        <MaharashtraExpansion />

        {/* 6. 4-Stage Implementation Protocol & Quality Management */}
        <ImplementationProtocol />

        {/* 7. Interactive HVAC Tonnage & Horsepower Estimator */}
        <HvacEstimator onApplyToInquiry={handleApplyEstimatorToInquiry} />

        {/* 8. Our Social Responsibility & Community Initiatives */}
        <SocialResponsibility />

        {/* 9. Direct Telemetry, Office Locations & Project Consultation */}
        <ContactSection initialInquiry={estimatorInquiryData} />
      </main>

      {/* Authoritative Global Footer */}
      <Footer />

      {/* High-Resolution Brochure Viewer Modal */}
      <BrochureViewerModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </div>
  );
}

export default App;
