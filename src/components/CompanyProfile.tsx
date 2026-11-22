import React from 'react';
import { STRENGTHS, COMPANY_INFO } from '../data/hvacData';
import { AirQWordmark } from './BrandLogo';
import { 
  Users, 
  Wrench, 
  Layers, 
  Handshake, 
  Globe, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Award,
  Cpu,
  Building,
  Gauge
} from 'lucide-react';

export const CompanyProfile: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-6 h-6 text-[#006688]" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-[#006688]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#006688]" />;
      case 'Handshake': return <Handshake className="w-6 h-6 text-[#006688]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#006688]" />;
      default: return <Award className="w-6 h-6 text-[#006688]" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-white border-b border-[#c3c6d1]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left Vertical Anchor Line */}
        <div className="border-l-2 border-[#006688] pl-4 sm:pl-6 mb-16">
          <div className="text-xs font-mono-tech uppercase tracking-widest text-[#006688] mb-1 font-semibold">
            CORPORATE OVERVIEW & CREDENTIALS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#001e40] tracking-tight flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span>About</span>
            <AirQWordmark inline className="h-[0.76em] text-[#4a4d52]" />
          </h2>
          <p className="font-body text-[#43474f] text-base sm:text-lg max-w-3xl mt-2">
            <AirQWordmark inline className="h-[0.84em] text-[#4a4d52] mr-1.5" /> is one of the most preferred sales and service dealers for the commercial range of <strong className="text-[#001e40]">Carrier and Hitachi products including VRF systems</strong>, partnering with <strong className="text-[#001e40]">Bosch Home Comfort</strong>.
          </p>
        </div>

        {/* Narrative Split: Company Philosophy + VRF Future of Comfort */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left Column: 35+ Years Combined Experience & Operational Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#f7f9fb] p-8 rounded-lg border border-[#c3c6d1]/80">
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 bg-[#001e40] text-white rounded">
                  <Sparkles className="w-5 h-5 text-[#77d1ff]" />
                </span>
                <span className="font-mono-tech text-xs uppercase tracking-wider font-bold text-[#006688]">
                  35+ Years of Leadership Experience
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#001e40] mb-4 leading-snug">
                Engineering excellence backed by over three decades of HVAC industry leadership.
              </h3>

              <p className="font-body text-[#43474f] text-sm sm:text-base leading-relaxed mb-4">
                Backed by a team of seasoned professionals with <strong className="text-[#001e40]">over 35 years of combined experience</strong> in Sales & Marketing, Service Operations, and Channel Management of the HVAC industry, we deliver innovative, reliable, and cost-effective solutions that meet our customers' critical business requirements.
              </p>

              {/* Tagline highlight from brochure */}
              <div className="p-4 bg-[#001e40] text-white rounded border-l-4 border-[#006688] mt-6">
                <div className="font-display font-semibold text-lg italic text-[#77d1ff]">
                  "Cooling matters for living better"
                </div>
                <div className="text-xs font-mono-tech text-[#c2e8ff] mt-1 flex items-center gap-1.5 flex-wrap">
                  <AirQWordmark inline className="h-[0.9em] text-white" />
                  <span>Operating Philosophy & Mission</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#f7f9fb] p-5 rounded border border-[#c3c6d1]/80 text-center">
                <div className="font-display font-black text-2xl sm:text-3xl text-[#006688]">
                  35+
                </div>
                <div className="text-[11px] font-mono-tech text-[#43474f] uppercase tracking-wider mt-1">
                  Years Experience
                </div>
              </div>
              <div className="bg-[#f7f9fb] p-5 rounded border border-[#c3c6d1]/80 text-center">
                <div className="font-display font-black text-2xl sm:text-3xl text-[#001e40]">
                  14+
                </div>
                <div className="text-[11px] font-mono-tech text-[#43474f] uppercase tracking-wider mt-1">
                  Landmark Sites
                </div>
              </div>
              <div className="bg-[#f7f9fb] p-5 rounded border border-[#c3c6d1]/80 text-center">
                <div className="font-display font-black text-2xl sm:text-3xl text-[#006688]">
                  100%
                </div>
                <div className="text-[11px] font-mono-tech text-[#43474f] uppercase tracking-wider mt-1">
                  Genuine Spares
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: VRF Systems - The Future of Comfort Highlight */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#001e40] text-white p-8 rounded-lg relative overflow-hidden flex-1 border border-[#002b55]">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#006688]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded text-xs font-mono-tech text-[#77d1ff] tracking-wider uppercase">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Flagship Technology Specialisation</span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  VRF Systems: The Future of Climate Comfort
                </h3>

                <p className="font-body text-[#d5e3ff] text-sm leading-relaxed">
                  Advanced VRF technology offers energy-efficient cooling and heating with individual temperature control for each zone. It saves architectural space, operates with whisper-quiet acoustics, and is ideal for large commercial and residential spaces.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/15">
                  <div className="flex items-start gap-2.5 text-xs font-mono-tech text-[#c2e8ff]">
                    <CheckCircle2 className="w-4 h-4 text-[#77d1ff] shrink-0 mt-0.5" />
                    <span>Independent micro-zone climate regulation with high-efficiency inverter compressors</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs font-mono-tech text-[#c2e8ff]">
                    <CheckCircle2 className="w-4 h-4 text-[#77d1ff] shrink-0 mt-0.5" />
                    <span>Carrier XPower & Hitachi Set-Free commercial multi-split modular architecture</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs font-mono-tech text-[#c2e8ff]">
                    <CheckCircle2 className="w-4 h-4 text-[#77d1ff] shrink-0 mt-0.5" />
                    <span>Seamless integration with Centralized Building Management Systems (BMS)</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="#quote"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#006688] hover:bg-[#004f6b] text-white text-xs font-mono-tech uppercase font-bold rounded transition-colors"
                  >
                    <span>Request VRF Engineering Assessment</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Authorised Partnership Banner */}
            <div className="bg-[#f7f9fb] p-4 rounded border border-[#c3c6d1]/80 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono-tech text-[#43474f] uppercase tracking-wider">
                  Direct OEM Distribution
                </div>
                <div className="font-display font-bold text-sm text-[#001e40]">
                  Carrier & Hitachi Authorised Dealer
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#006688] font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>OEM Genuine Spares</span>
              </div>
            </div>
          </div>

        </div>

        {/* 5 Core Strengths Grid (From Official Brochure) */}
        <div>
          <div className="border-l-2 border-[#006688] pl-4 mb-8">
            <div className="text-xs font-mono-tech uppercase tracking-widest text-[#006688] font-semibold">
              PILLARS OF OPERATIONAL EXCELLENCE
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#001e40]">
              Our 5 Core Strengths
            </h3>
            <p className="font-body text-[#43474f] text-sm mt-1">
              Structured capabilities engineered to deliver seamless HVAC execution and lifelong lifecycle reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STRENGTHS.map((strength, index) => (
              <div
                key={strength.id}
                className="bg-[#f7f9fb] rounded-lg border border-[#c3c6d1]/80 hover:border-[#006688] hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {strength.imageUrl && (
                    <div className="relative h-48 w-full border-b border-[#c3c6d1]/60 overflow-hidden bg-white">
                      <img
                        src={strength.imageUrl}
                        alt={strength.title}
                        className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${strength.imageClass || 'object-cover object-center'}`}
                      />
                      <span className="absolute top-3 right-3 font-mono-tech font-bold text-xs text-[#001e40] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded border border-[#c3c6d1] shadow-xs">
                        0{index + 1}
                      </span>
                    </div>
                  )}

                  <div className="p-6 pb-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 bg-white rounded-md border border-[#c3c6d1] group-hover:border-[#006688] transition-colors shadow-2xs shrink-0">
                        {getIcon(strength.iconName)}
                      </div>
                      <h4 className="font-display font-bold text-lg text-[#001e40] group-hover:text-[#006688] transition-colors leading-snug">
                        {strength.title}
                      </h4>
                    </div>

                    <p className="font-body text-[#43474f] text-sm leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>

                <div className="mx-6 mb-6 mt-6 pt-4 border-t border-[#e0e3e5] flex items-center gap-1.5 text-xs font-mono-tech text-[#006688] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Project Standard</span>
                </div>
              </div>
            ))}

            {/* Project Sales & Execution Charter Card */}
            <div className="bg-[#001e40] text-white rounded-lg border border-[#002b55] flex flex-col justify-between overflow-hidden group">
              <div>
                <div className="relative h-48 w-full border-b border-white/15 overflow-hidden bg-white">
                  <img
                    src="/assets/aistudio/project_sales_and_executive_charter_6304c71e.jpeg"
                    alt="Project Sales & Execution Charter"
                    className="w-full h-full object-contain bg-white p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 font-mono-tech font-bold text-xs text-[#77d1ff] bg-[#001e40]/90 backdrop-blur-xs px-2.5 py-1 rounded border border-white/15 shadow-xs">
                    EXECUTION
                  </span>
                </div>

                <div className="p-6 pb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-[#006688] text-white rounded-md shrink-0">
                      <Building className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-white leading-snug">
                      Project Sales & Execution Charter
                    </h4>
                  </div>

                  <p className="font-body text-[#d5e3ff] text-xs leading-relaxed space-y-2">
                    <span>• Dedicated expert team headed by certified Project Managers handling Ductable, Packaged & VRF installations.</span>
                    <br />
                    <span>• World-class site management reducing unnecessary site rework.</span>
                    <br />
                    <span>• Immediate mobilization of resources & technical material under instantaneous client demand.</span>
                  </p>
                </div>
              </div>

              <div className="mx-6 mb-6 mt-6 pt-4 border-t border-white/15 text-xs font-mono-tech text-[#77d1ff]">
                Kolkata & Maharashtra Operations
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
