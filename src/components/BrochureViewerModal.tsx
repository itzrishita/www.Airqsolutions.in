import React, { useState } from 'react';
import { COMPANY_INFO, ICONIC_PROJECTS, STRENGTHS } from '../data/hvacData';
import { AirQWordmark } from './BrandLogo';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Printer, 
  FileText,
  Sparkles,
  Building,
  ShieldCheck,
  CheckCircle2,
  Users,
  Wrench,
  Layers,
  Handshake,
  Globe,
  Award,
  Cpu,
  MapPin,
  Phone,
  Mail,
  Columns,
  Maximize2
} from 'lucide-react';

interface BrochureViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureViewerModal: React.FC<BrochureViewerModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);
  const [viewMode, setViewMode] = useState<'crisp' | 'spread'>('crisp');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const getStrengthIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-5 h-5 text-white" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-white" />;
      case 'Layers': return <Layers className="w-5 h-5 text-white" />;
      case 'Handshake': return <Handshake className="w-5 h-5 text-white" />;
      case 'Globe': return <Globe className="w-5 h-5 text-white" />;
      default: return <Award className="w-5 h-5 text-white" />;
    }
  };

  // Render Page 1 Component
  const renderPage1 = () => (
    <div className="bg-white text-[#191c1e] shadow-2xl rounded-sm border border-[#c3c6d1] overflow-hidden w-full max-w-5xl mx-auto font-sans">
      
      {/* 3-Column Tri-Fold Brochure Layout (Exact match to PDF Page 1) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
        
        {/* PANEL 1 (Left 4 cols): Logo, Company Profile, Carrier & Hitachi Dealership */}
        <div className="lg:col-span-4 bg-[#001e40] text-white p-6 sm:p-8 flex flex-col justify-between border-r border-white/10 relative overflow-hidden">
          {/* Subtle geometric background line accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#006688]/20 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="space-y-6">
            {/* Air Q Solutions Official Brand Logo (Exact match to provided identity card) */}
            <div className="bg-white rounded-sm shadow-md overflow-hidden border border-white/20">
              <div className="h-2 bg-[#1495ab] w-full" />
              <div className="px-4 py-3.5">
                <AirQWordmark className="w-full h-auto" color="#57585a" />
                <div className="text-[9px] sm:text-[10px] font-sans font-extrabold tracking-[0.06em] text-[#111827] uppercase mt-1.5">
                  HVAC PROJECT MANAGEMENT GROUP
                </div>
              </div>
            </div>

            {/* COMPANY PROFILE Hero Block */}
            <div className="pt-4">
              <div className="bg-[#002e5d] border border-[#004b93] px-4 py-3 rounded-sm shadow-inner text-center">
                <h1 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wider">
                  COMPANY PROFILE
                </h1>
              </div>
              
              <div className="mt-4 text-center">
                <p className="font-display font-bold text-sm sm:text-base text-[#77d1ff] leading-snug tracking-wide uppercase">
                  YOUR PARTNER IN ADVANCED HVAC SOLUTIONS
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Authorized Brands Badge */}
          <div className="mt-8 pt-6 border-t border-white/15 space-y-4">
            <div className="text-center">
              <div className="text-[10px] font-mono-tech tracking-widest text-white/70 uppercase mb-2">
                Authorised Sales & Service Dealer
              </div>
              
              <div className="bg-white p-3 rounded shadow-md flex items-center justify-around gap-2">
                {/* Carrier Logo */}
                <div className="flex items-center">
                  <span className="font-serif italic font-bold text-lg text-[#003882] tracking-tight">
                    Carrier
                  </span>
                </div>
                <div className="h-6 w-px bg-slate-300"></div>
                {/* Hitachi Logo */}
                <div className="flex items-center gap-1">
                  <span className="font-black text-sm text-[#e60012] tracking-tighter">■</span>
                  <span className="font-sans font-black text-base text-black tracking-widest">
                    HITACHI
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center text-[10px] font-mono-tech text-[#77d1ff]">
              Partnering with Bosch Home Comfort India
            </div>
          </div>
        </div>

        {/* PANEL 2 (Middle 4.5 cols): About Air Q Solutions & Our Specialisation */}
        <div className="lg:col-span-4 bg-[#fcfdfe] p-6 sm:p-7 flex flex-col justify-between border-r border-[#c3c6d1]/70 space-y-6">
          <div className="space-y-4">
            {/* Section Title */}
            <div>
              <h2 className="font-display font-black text-lg sm:text-xl text-[#001e40] border-b-2 border-[#006688] pb-1 uppercase tracking-wide flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span>ABOUT</span>
                <AirQWordmark inline className="h-[0.76em] text-[#4a4d52]" />
              </h2>
            </div>

            {/* Narrative text matching PDF verbatim */}
            <div className="text-xs sm:text-[13px] text-[#2d3139] leading-relaxed space-y-3 font-medium">
              <p>
                <AirQWordmark inline className="h-[0.86em] text-[#4a4d52] mr-1.5" /> is one of the most preferred sales and service dealers for the commercial range of <strong className="text-[#001e40]">Carrier and Hitachi products including VRF system</strong>.
              </p>
              <p>
                Backed by a team of seasoned professionals with <strong>over 35 years of combined experience</strong> in Sales & Marketing, Service Operations and Channel Management of the HVAC (Heating, Ventilation & Air-conditioning) industry, we deliver innovative, reliable and cost-effective solutions that meet our customers' critical business requirements.
              </p>
            </div>

            {/* Red Calligraphic / Script Quote (Verbatim from brochure) */}
            <div className="py-2 text-center">
              <p className="font-serif italic font-bold text-base sm:text-lg text-[#d62828] tracking-wide">
                "Cooling matters for living better."
              </p>
            </div>

            {/* OUR SPECIALISATION */}
            <div className="pt-2">
              <h3 className="font-display font-black text-sm text-[#001e40] uppercase tracking-wider mb-3 border-b border-[#c3c6d1] pb-1">
                OUR SPECIALISATION
              </h3>

              <div className="space-y-3">
                {/* 1. VRF Systems */}
                <div className="flex items-start gap-2.5 p-2 bg-[#f0f7fa] rounded border border-[#006688]/20">
                  <div className="w-7 h-7 rounded-full bg-[#006688] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Sparkles className="w-4 h-4 text-[#77d1ff]" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#001e40] uppercase tracking-wide">
                      VRF SYSTEMS
                    </div>
                    <div className="text-[11px] text-[#43474f] leading-snug">
                      High efficiency, variable refrigerant flow systems for superior comfort and energy savings
                    </div>
                  </div>
                </div>

                {/* 2. Ductable Systems */}
                <div className="flex items-start gap-2.5 p-2 bg-[#f0f7fa] rounded border border-[#006688]/20">
                  <div className="w-7 h-7 rounded-full bg-[#006688] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Layers className="w-4 h-4 text-[#77d1ff]" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#001e40] uppercase tracking-wide">
                      DUCTABLE SYSTEMS
                    </div>
                    <div className="text-[11px] text-[#43474f] leading-snug">
                      Custom designed solutions for large commercial and institutional spaces
                    </div>
                  </div>
                </div>

                {/* 3. Packaged AC Units */}
                <div className="flex items-start gap-2.5 p-2 bg-[#f0f7fa] rounded border border-[#006688]/20">
                  <div className="w-7 h-7 rounded-full bg-[#006688] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Cpu className="w-4 h-4 text-[#77d1ff]" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-[#001e40] uppercase tracking-wide">
                      PACKAGED AC UNITS
                    </div>
                    <div className="text-[11px] text-[#43474f] leading-snug">
                      Reliable and robust solutions for diverse applications
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono-tech text-[#737780] border-t border-[#c3c6d1] pt-2 flex items-center justify-between">
            <AirQWordmark inline className="h-[0.95em] text-[#4a4d52]" />
            <span>PAGE 01</span>
          </div>
        </div>

        {/* PANEL 3 (Right 3.5 cols): VRF Systems - The Future of Comfort & Units */}
        <div className="lg:col-span-4 bg-white p-6 sm:p-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <div className="text-[10px] font-mono-tech font-bold text-[#006688] uppercase tracking-widest">
                INVERTER MULTI-SPLIT & MODULAR
              </div>
              <h2 className="font-display font-black text-lg sm:text-xl text-[#001e40] uppercase tracking-wide">
                VRF SYSTEMS
              </h2>
              <div className="font-display font-bold text-xs sm:text-sm text-[#006688] uppercase">
                THE FUTURE OF COMFORT
              </div>
            </div>

            <p className="text-xs text-[#43474f] leading-relaxed">
              Advanced VRF technology offers energy-efficient cooling and heating with individual temperature control for each zone. It saves space, operates quietly and is ideal for large commercial and residential spaces.
            </p>

            {/* Equipment Photos from the brochure */}
            <div className="space-y-3 pt-2">
              <div className="border border-[#c3c6d1] rounded p-2 bg-[#f7f9fb] shadow-xs">
                <div className="text-[10px] font-mono-tech font-bold text-[#001e40] uppercase tracking-wide mb-1 flex items-center justify-between">
                  <span>VRF OUTDOOR UNITS (ODU)</span>
                  <span className="text-[#006688] font-bold">SET FREE SERIES</span>
                </div>
                <div className="h-32 bg-slate-900 rounded overflow-hidden flex items-center justify-center relative">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhOoMSSoJjS3lvG6N-1O-ilZVj5PR68R2PPXnzmsOtcg-2Av0NfuMrC79LfRHRuCxq7KsZzr_S6pcErHuHt4dXfC9FdXJYg6kUPMHOSSHlpdaOkZbMZAQg8BTtFekWHz9HPlHys43vVNHPX6jhrigEjOxaPoevMb-9813mdPaZrVHSyWlxL8jztxZTgE4-4Ziw88PgIdb0leO9hKpRdwa5dpTODfRBeK0gf5OMHtZgmK_atL4koh4"
                    alt="Hitachi Set Free VRF Outdoor Units"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-black/70 text-white font-mono-tech text-[9px] px-1.5 py-0.5 rounded">
                    HITACHI SET FREE
                  </div>
                </div>
              </div>

              {/* Indoor Units Grid */}
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <div className="p-2 bg-[#f7f9fb] rounded border border-[#c3c6d1]">
                  <div className="font-bold text-[11px] text-[#001e40]">4-Way Cassette</div>
                  <div className="text-[9px] text-[#737780]">360° Surround Airflow</div>
                </div>
                <div className="p-2 bg-[#f7f9fb] rounded border border-[#c3c6d1]">
                  <div className="font-bold text-[11px] text-[#001e40]">Concealed Duct</div>
                  <div className="text-[9px] text-[#737780]">High Static Pressure</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#001e40] text-white p-2.5 rounded text-center text-[10px] font-mono-tech">
            <span className="text-[#77d1ff] font-bold">CARRIER & HITACHI</span> COMMERCIAL RANGE
          </div>
        </div>

      </div>
    </div>
  );

  // Render Page 2 Component
  const renderPage2 = () => (
    <div className="bg-white text-[#191c1e] shadow-2xl rounded-sm border border-[#c3c6d1] overflow-hidden w-full max-w-5xl mx-auto font-sans">
      
      {/* 2-Column Split (Exact match to PDF Page 2) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
        
        {/* LEFT COLUMN (5 cols): Our Strengths & Project Sales & Execution */}
        <div className="lg:col-span-5 bg-[#fcfdfe] p-6 sm:p-7 flex flex-col justify-between border-r border-[#c3c6d1] space-y-6">
          <div className="space-y-4">
            
            {/* OUR STRENGTHS HEADER */}
            <div className="bg-[#001e40] text-white px-3.5 py-2 rounded-sm flex items-center justify-between shadow-xs">
              <h2 className="font-display font-black text-sm sm:text-base tracking-wider uppercase">
                OUR STRENGTHS
              </h2>
              <span className="text-[10px] font-mono-tech text-[#77d1ff] font-bold">5 PILLARS</span>
            </div>

            {/* 5 Strengths List Verbatim */}
            <div className="space-y-3 text-xs">
              {/* 1. Experienced & Professional Team */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded bg-[#006688] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#001e40]">
                    Experienced & Professional Team
                  </div>
                  <div className="text-[11px] text-[#43474f] leading-snug">
                    35+ years of collective experience in the HVAC industry across Sales, Service & Project Execution.
                  </div>
                </div>
              </div>

              {/* 2. Strong Infrastructure */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded bg-[#006688] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Wrench className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#001e40]">
                    Strong Infrastructure
                  </div>
                  <div className="text-[11px] text-[#43474f] leading-snug">
                    Well-equipped infrastructure, qualified engineers, trained technicians, adequate tools and genuine spares for reliable support.
                  </div>
                </div>
              </div>

              {/* 3. End-to-End Solutions */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded bg-[#006688] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Layers className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#001e40]">
                    End-to-End Solutions
                  </div>
                  <div className="text-[11px] text-[#43474f] leading-snug">
                    From concept and design to installation, commissioning and after-sales service — we ensure excellence at every stage.
                  </div>
                </div>
              </div>

              {/* 4. Customer Centric Approach */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded bg-[#006688] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Handshake className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#001e40]">
                    Customer Centric Approach
                  </div>
                  <div className="text-[11px] text-[#43474f] leading-snug">
                    Engagement based approach ensuring timely delivery, cost effectiveness and long term customer satisfaction.
                  </div>
                </div>
              </div>

              {/* 5. PAN India Presence */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded bg-[#006688] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#001e40]">
                    PAN India Presence
                  </div>
                  <div className="text-[11px] text-[#43474f] leading-snug">
                    Proven track record in Government / Private Hospitals, Banks, Educational Institutions, Commercial and Residential Projects across India.
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT SALES & EXECUTION CHARTER */}
            <div className="pt-2">
              <div className="bg-[#001e40] text-white px-3.5 py-1.5 rounded-sm mb-2.5">
                <h3 className="font-display font-black text-xs sm:text-sm tracking-wider uppercase">
                  PROJECT SALES & EXECUTION
                </h3>
              </div>

              <div className="p-3 bg-[#eef7fb] rounded border border-[#006688]/30 space-y-2 text-[11px] text-[#2d3139]">
                <div className="flex items-start gap-2">
                  <span className="text-[#00a651] font-bold text-sm leading-none mt-0.5">✓</span>
                  <span>A dedicated team of experts headed by Project Managers handle all installations of Ductable, Packaged & VRF units.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00a651] font-bold text-sm leading-none mt-0.5">✓</span>
                  <span>World class professional site management practices (with a clear focus to reduce site work).</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#00a651] font-bold text-sm leading-none mt-0.5">✓</span>
                  <span>Organisational capability to mobilize resources & materials under instantaneous demand.</span>
                </div>
              </div>
            </div>

          </div>

          <div className="text-[10px] font-mono-tech text-[#737780] border-t border-[#c3c6d1] pt-2 flex items-center gap-1.5 flex-wrap">
            <AirQWordmark inline className="h-[0.95em] text-[#4a4d52]" />
            <span>• TECHNICAL CAPABILITIES</span>
          </div>
        </div>

        {/* RIGHT COLUMN (7 cols): Glimpse of Iconic Projects & Contact Footer */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            {/* GLIMPSE OF ICONIC PROJECTS HEADER */}
            <div className="bg-[#001e40] text-white px-4 py-2 rounded-sm flex items-center justify-between shadow-xs">
              <h2 className="font-display font-black text-sm sm:text-base tracking-wider uppercase">
                GLIMPSE OF ICONIC PROJECTS
              </h2>
              <span className="text-[10px] font-mono-tech text-[#77d1ff] font-bold">14 LANDMARKS</span>
            </div>

            {/* Iconic Projects 14 Grid with capacity ratings (verbatim from brochure) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {ICONIC_PROJECTS.map((proj, idx) => (
                <div 
                  key={proj.id}
                  className="flex items-center justify-between p-2 bg-[#f7f9fb] rounded border border-[#c3c6d1] hover:border-[#006688] transition-colors"
                >
                  <div className="flex items-start gap-1.5 pr-1">
                    <span className="font-mono-tech font-bold text-[#006688] text-[11px] shrink-0">
                      {idx + 1}.
                    </span>
                    <div>
                      <div className="font-bold text-[#001e40] text-[11px] leading-tight">
                        {proj.name}
                      </div>
                      <div className="text-[10px] text-[#737780]">
                        {proj.location}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono-tech font-bold text-[10px] px-1.5 py-0.5 bg-white border border-[#c3c6d1] rounded text-[#006688] shrink-0 whitespace-nowrap">
                    {proj.capacity}
                  </span>
                </div>
              ))}
            </div>

            {/* Visual Callout for Key Projects */}
            <div className="p-3 bg-[#f0f7fa] rounded border border-[#006688]/30 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono-tech">
              <div className="flex items-center gap-1.5 text-[#001e40] font-bold">
                <Building className="w-4 h-4 text-[#006688]" />
                <span>Landmarks: Bangladesh Bhawan (300 HP) • Metro Rail (588 HP) • Solar Dome (450 HP)</span>
              </div>
            </div>

          </div>

          {/* Contact Details & Branch Network Footer (Verbatim from Page 2 footer) */}
          <div className="border-t-2 border-[#001e40] pt-3 bg-[#f7f9fb] p-3.5 rounded border border-[#c3c6d1] space-y-2 text-xs">
            <div className="font-display font-black text-xs text-[#001e40] uppercase tracking-wider flex items-center justify-between gap-2 flex-wrap">
              <AirQWordmark inline className="h-[0.95em] text-[#4a4d52]" />
              <span className="text-[10px] font-mono-tech text-[#006688]">EAST & WEST REGION OFFICES</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] font-mono-tech">
              <div>
                <span className="text-[#43474f] font-bold block">REGISTERED OFFICE (EAST HQ):</span>
                <span className="text-[#001e40]">116, Shantinagar Road, Uttarpara 712232, West Bengal</span>
                <span className="text-[#006688] font-bold block mt-0.5">Mob: +91 8804907777 / 9830079309</span>
              </div>

              <div>
                <span className="text-[#43474f] font-bold block">BRANCH OFFICE (WEST):</span>
                <span className="text-[#001e40]">"Biz Square", Shop no. 5, Gut no. 58, Satara- Beed Bypass, Chh. Sambhajinagar (MH)- 431001</span>
                <span className="text-[#006688] font-bold block mt-0.5">Mob: +91 8696911863</span>
              </div>
            </div>

            <div className="text-[10px] font-mono-tech text-[#737780] border-t border-[#c3c6d1] pt-1 flex justify-between">
              <span>Email: amalroy.arc@gmail.com / aqs.ac.br@gmail.com</span>
              <span>Authorised Carrier & Hitachi Dealer</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative bg-[#001e40] text-white rounded-lg border border-white/20 shadow-2xl w-full max-w-6xl h-[94vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#001428] border-b border-white/10 px-4 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#006688] flex items-center justify-center text-white shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="font-display font-bold text-sm sm:text-base text-white flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-2 flex-wrap">
                  <AirQWordmark inline className="h-[0.82em] text-white" />
                  <span>Official Technical Brochure</span>
                </span>
                <span className="text-[10px] font-mono-tech px-2 py-0.5 bg-[#006688] text-white rounded font-normal">
                  AUTHORIZED
                </span>
              </div>
              <div className="text-xs font-mono-tech text-white/70">
                {viewMode === 'spread' 
                  ? '2-Page Complete Brochure Spread (Profile, VRF, 14 Projects & Strengths)'
                  : `Page ${currentPage} of 2 • ${currentPage === 1 ? 'Company Profile, Dealership & VRF Systems' : '14 Iconic Projects, 5 Strengths & Execution'}`
                }
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Control Toolbar */}
        <div className="bg-[#002447] border-b border-white/10 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shrink-0 text-xs font-mono-tech">
          {/* View Mode Toggle */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center bg-white/10 p-0.5 rounded border border-white/15">
              <button
                onClick={() => setViewMode('crisp')}
                className={`px-3 py-1 rounded transition-all font-bold flex items-center gap-1.5 ${
                  viewMode === 'crisp' ? 'bg-[#006688] text-white shadow-sm' : 'text-white/70 hover:text-white'
                }`}
                title="Ultra-Clear Crisp Vector Reading Mode"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#77d1ff]" />
                <span>Crisp Readable Mode</span>
              </button>
              <button
                onClick={() => setViewMode('spread')}
                className={`px-3 py-1 rounded transition-all font-bold flex items-center gap-1.5 ${
                  viewMode === 'spread' ? 'bg-[#006688] text-white shadow-sm' : 'text-white/70 hover:text-white'
                }`}
                title="View Both Pages Side-by-Side"
              >
                <Columns className="w-3.5 h-3.5 text-[#77d1ff]" />
                <span>2-Page Spread</span>
              </button>
            </div>

            {viewMode !== 'spread' && (
              <>
                <div className="h-4 w-px bg-white/20 mx-1 hidden sm:block"></div>

                {/* Page Selector Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage(1)}
                    className={`px-3 py-1 rounded transition-colors font-bold ${
                      currentPage === 1 ? 'bg-[#00a651] text-white' : 'bg-white/10 text-white/70 hover:text-white'
                    }`}
                  >
                    Page 1: Profile & VRF
                  </button>
                  <button
                    onClick={() => setCurrentPage(2)}
                    className={`px-3 py-1 rounded transition-colors font-bold ${
                      currentPage === 2 ? 'bg-[#00a651] text-white' : 'bg-white/10 text-white/70 hover:text-white'
                    }`}
                  >
                    Page 2: 14 Projects & Strengths
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Action Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1 bg-[#006688] hover:bg-[#004f6b] text-white rounded font-bold transition-colors flex items-center gap-1.5 shadow-sm"
              title="Print or Save Brochure as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* Main Document Viewer Canvas */}
        <div className="flex-1 overflow-y-auto bg-[#0a111a] p-3 sm:p-6 lg:p-8 flex justify-center items-start">
          
          {/* 1. CRISP READABLE DIGITAL VECTOR MODE (Page 1 or Page 2) */}
          {viewMode === 'crisp' && (
            currentPage === 1 ? renderPage1() : renderPage2()
          )}

          {/* 2. TWO-PAGE SPREAD MODE (Both Pages Visible) */}
          {viewMode === 'spread' && (
            <div className="space-y-8 w-full max-w-5xl">
              <div className="text-xs font-mono-tech text-[#77d1ff] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00a651]"></span>
                <span>PAGE 1: CORPORATE PROFILE, DEALERSHIP & VRF SYSTEMS</span>
              </div>
              {renderPage1()}

              <div className="text-xs font-mono-tech text-[#77d1ff] flex items-center gap-2 pt-4">
                <span className="w-2 h-2 rounded-full bg-[#00a651]"></span>
                <span>PAGE 2: 14 ICONIC PROJECTS, 5 CORE STRENGTHS & EXECUTION CHARTER</span>
              </div>
              {renderPage2()}
            </div>
          )}

        </div>

        {/* Footer Navigation Bar */}
        <div className="bg-[#001428] border-t border-white/10 px-4 py-2.5 flex items-center justify-between shrink-0 text-xs font-mono-tech">
          <div className="text-white/60 text-[11px] hidden sm:block">
            Dealership: Carrier & Hitachi • Registered: {COMPANY_INFO.registeredOffice.address}
          </div>

          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            {viewMode !== 'spread' && (
              <>
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(1)}
                  className="px-3 py-1 bg-white/10 disabled:opacity-30 rounded hover:bg-white/20 transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Page 1</span>
                </button>
                <button
                  disabled={currentPage === 2}
                  onClick={() => setCurrentPage(2)}
                  className="px-3 py-1 bg-white/10 disabled:opacity-30 rounded hover:bg-white/20 transition-colors flex items-center gap-1"
                >
                  <span>Page 2</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
