import React from 'react';
import { PageSection } from '../types';
import { BROCHURE_IMAGES, COMPANY_INFO } from '../data/hvacData';
import { AirQWordmark } from './BrandLogo';
import { MapPin, Building2, ChevronRight, ArrowUpRight, ShieldCheck, Zap, Award } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onNavigate?: (section: PageSection) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onNavigate }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#001e40] text-white">
      {/* Background Architectural Photography + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={BROCHURE_IMAGES.heroFacility}
          alt="Modern Industrial HVAC Facility"
          className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
        />
        {/* Technical Blueprint Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        {/* Radial Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001e40] via-[#001e40]/90 to-[#001e40]/75"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Regional Location Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-3.5 py-1.5 rounded text-xs font-mono-tech tracking-wider backdrop-blur-sm shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#77d1ff]" />
                <span>Kolkata HQ</span>
              </div>

              <div className="inline-flex items-center gap-2 bg-[#006688]/30 border border-[#43c5fd]/50 text-[#77d1ff] px-3.5 py-1.5 rounded text-xs font-mono-tech tracking-wider backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#43c5fd] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#43c5fd]"></span>
                </span>
                <Building2 className="w-3.5 h-3.5" />
                <span>New Branch: Chhatrapati Sambhajinagar</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white">
              Engineering Comfort.<br />
              <span className="text-[#77d1ff] drop-shadow-sm">Delivering Performance.</span>
            </h1>

            {/* Sub-copy with Technical Border */}
            <div className="border-l-2 border-[#006688] pl-5 py-1 max-w-2xl">
              <p className="text-base sm:text-lg text-[#d5e3ff] leading-relaxed font-body font-normal">
                <strong className="text-white font-semibold">35+ years of combined technical expertise</strong> in HVAC engineering. Providing meticulous design, high-capacity execution, and after-sales support for high-stakes industrial, institutional, and commercial developments across India.
              </p>
            </div>

            {/* Authorised Brand Alignment */}
            <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono-tech text-[#c2e8ff]">
              <span className="text-[#a7c8ff]">AUTHORISED DEALER:</span>
              <span className="bg-white/10 px-2.5 py-1 rounded font-bold text-white tracking-widest border border-white/15">
                CARRIER
              </span>
              <span className="bg-white/10 px-2.5 py-1 rounded font-bold text-white tracking-widest border border-white/15">
                HITACHI
              </span>
              <span className="text-white/40">|</span>
              <span className="text-[#a7c8ff]">PARTNERING WITH:</span>
              <span className="bg-white/10 px-2.5 py-1 rounded font-bold text-white tracking-widest border border-white/15">
                BOSCH
              </span>
            </div>

            {/* Action Call-to-Actions */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('contact');
                  }
                }}
                className="bg-[#006688] hover:bg-[#004f6b] text-white px-7 py-3.5 rounded text-xs font-mono-tech uppercase tracking-wider font-semibold flex items-center gap-2.5 transition-all shadow-lg hover:shadow-[#006688]/40 hover:-translate-y-0.5"
              >
                <span>Get in Touch</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onExploreProjects}
                className="bg-transparent hover:bg-white/10 text-white border border-[#c3c6d1]/40 px-6 py-3.5 rounded text-xs font-mono-tech uppercase tracking-wider font-medium flex items-center gap-2 transition-all"
              >
                <span>View Our Projects (14 Sites)</span>
                <ArrowUpRight className="w-4 h-4 text-[#77d1ff]" />
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Visual Display */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Technical grid backdrop accent */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#006688]/20 to-transparent rounded border border-white/10 -rotate-1 hidden sm:block pointer-events-none"></div>

            {/* Brochure Visual Display Preview */}
            <div className="relative bg-white text-[#191c1e] p-3 rounded shadow-2xl transition-all duration-300 group">
              <div className="border border-[#c3c6d1] overflow-hidden rounded-sm relative bg-white">
                {/* Crisp Miniature Tri-Fold Page 1 Brochure Preview */}
                <div className="grid grid-cols-12 min-h-[300px] sm:min-h-[330px] text-[10px] leading-tight">
                  {/* Left Dark Navy Panel with Exact New Brand Logo */}
                  <div className="col-span-5 bg-[#001e40] text-white p-3 sm:p-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      {/* Exact Brand Logo Lockup from Provided Image */}
                      <div className="bg-white rounded-[2px] overflow-hidden shadow-sm">
                        <div className="h-1 bg-[#1495ab] w-full" />
                        <div className="px-2 py-2">
                          <AirQWordmark className="w-full h-auto" color="#57585a" />
                          <div className="text-[6px] sm:text-[6.5px] font-sans font-extrabold tracking-[0.04em] text-[#111827] uppercase mt-1 leading-none">
                            HVAC PROJECT MANAGEMENT GROUP
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#002e5d] border border-[#004b93] px-2 py-2 rounded-[2px] text-center">
                        <div className="font-display font-black text-xs sm:text-sm tracking-wider text-white">
                          COMPANY PROFILE
                        </div>
                      </div>

                      <p className="text-[7px] sm:text-[8px] font-display font-bold text-[#77d1ff] text-center uppercase tracking-wide leading-snug">
                        YOUR PARTNER IN ADVANCED HVAC SOLUTIONS
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/15 space-y-1.5">
                      <div className="text-[6px] font-mono-tech text-white/70 text-center uppercase tracking-wider">
                        Authorised Sales &amp; Service Dealer
                      </div>
                      <div className="bg-white px-2 py-1.5 rounded-[2px] flex items-center justify-around">
                        <span className="font-serif italic font-bold text-[10px] text-[#003882]">Carrier</span>
                        <span className="h-3 w-px bg-slate-300" />
                        <span className="font-sans font-black text-[9px] text-black tracking-wider">
                          <span className="text-[#e60012] mr-0.5">■</span>HITACHI
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle & Right Brochure Panels */}
                  <div className="col-span-7 bg-[#fcfdfe] p-3 sm:p-4 flex flex-col justify-between border-l border-[#e0e3e5]">
                    <div className="space-y-2.5">
                      <div className="border-b border-[#006688] pb-1 flex items-baseline gap-1 flex-wrap">
                        <span className="font-display font-black text-[10px] sm:text-[11px] text-[#001e40] uppercase">ABOUT</span>
                        <AirQWordmark inline className="h-[0.8em] text-[#4a4d52]" />
                      </div>

                      <p className="text-[7.5px] sm:text-[8.5px] text-[#2d3139] leading-relaxed">
                        Preferred sales &amp; service dealers for the commercial range of <strong className="text-[#001e40]">Carrier &amp; Hitachi VRF systems</strong>, backed by <strong>35+ years</strong> of HVAC leadership.
                      </p>

                      <div className="text-center font-serif italic font-bold text-[9px] sm:text-[10px] text-[#d62828]">
                        &ldquo;Cooling matters for living better.&rdquo;
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <div className="font-display font-black text-[8px] text-[#001e40] uppercase tracking-wider border-b border-[#c3c6d1] pb-0.5">
                          OUR SPECIALISATION
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-center text-[6.5px] font-mono-tech font-bold text-[#001e40]">
                          <div className="bg-[#f0f7fa] border border-[#006688]/20 rounded-[2px] py-1 px-1">VRF SYSTEMS</div>
                          <div className="bg-[#f0f7fa] border border-[#006688]/20 rounded-[2px] py-1 px-1">DUCTABLE</div>
                          <div className="bg-[#f0f7fa] border border-[#006688]/20 rounded-[2px] py-1 px-1">PACKAGED AC</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 rounded-[2px] overflow-hidden border border-[#c3c6d1] relative h-20 sm:h-24 bg-slate-900">
                      <img
                        src={BROCHURE_IMAGES.heroFacility}
                        alt="AIR Q SOLUTIONS Technical Profile Brochure"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-1 right-1 bg-black/75 text-white font-mono-tech text-[6.5px] px-1.5 py-0.5 rounded-[2px]">
                        HITACHI SET FREE VRF
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Spec Badge */}
              <div className="mt-3 flex items-center justify-between px-2 py-1 bg-[#f7f9fb] border border-[#e0e3e5] rounded text-xs font-mono-tech">
                <div>
                  <span className="text-[#43474f] block text-[10px]">SYS_AUTH:</span>
                  <span className="font-bold text-[#006688]">CARRIER / HITACHI / BOSCH</span>
                </div>
                <div className="text-right">
                  <span className="text-[#43474f] block text-[10px]">SCOPE:</span>
                  <span className="font-bold text-[#001e40]">PAN INDIA</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Metric Pillars */}
        <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#77d1ff]">35+</div>
            <div className="text-xs font-mono-tech text-[#c2e8ff] uppercase tracking-wider">Years Collective Experience</div>
            <p className="text-xs text-white/60">Decades of proven HVAC engineering</p>
          </div>

          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#77d1ff]">14+</div>
            <div className="text-xs font-mono-tech text-[#c2e8ff] uppercase tracking-wider">Iconic Landmark Projects</div>
            <p className="text-xs text-white/60">From 1000 HP campuses to solar domes</p>
          </div>

          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#77d1ff]">100%</div>
            <div className="text-xs font-mono-tech text-[#c2e8ff] uppercase tracking-wider">Genuine Spares & OEM</div>
            <p className="text-xs text-white/60">Carrier, Hitachi & Bosch authorized</p>
          </div>

          <div className="space-y-1">
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#77d1ff]">2 Hubs</div>
            <div className="text-xs font-mono-tech text-[#c2e8ff] uppercase tracking-wider">East HQ & West Branch</div>
            <p className="text-xs text-white/60">Kolkata & Chhatrapati Sambhajinagar</p>
          </div>
        </div>

      </div>
    </section>
  );
};
