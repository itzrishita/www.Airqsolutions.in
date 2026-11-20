import React from 'react';
import { COMPANY_INFO } from '../data/hvacData';
import { MapPin, Phone, Building, Navigation, ArrowRight, ShieldCheck, CheckCircle2, Radio } from 'lucide-react';

export const MaharashtraExpansion: React.FC = () => {
  return (
    <section id="expansion" className="py-24 bg-[#001e40] text-white relative overflow-hidden blueprint-grid border-b border-[#003366]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Expansion Declaration & Telemetry */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#006688]/40 border border-[#43c5fd]/40 text-[#77d1ff] px-3.5 py-1.5 rounded text-xs font-mono-tech tracking-wider">
              <Radio className="w-3.5 h-3.5 animate-pulse text-[#43c5fd]" />
              <span>REGIONAL EXPANSION ANNOUNCEMENT</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Now Engineering in <br />
              <span className="text-[#77d1ff]">Chhatrapati Sambhajinagar</span>
            </h2>

            <div className="border-l-2 border-[#006688] pl-5 py-1">
              <p className="font-body text-[#d5e3ff] text-base sm:text-lg leading-relaxed">
                Expanding our 35-year engineering footprint into Western India. Our dedicated Chhatrapati Sambhajinagar branch brings Tier-1 authorized Carrier & Hitachi VRF project execution, precision load design, and 24/7 OEM after-sales support directly to Maharashtra's thriving industrial and commercial ecosystem.
              </p>
            </div>

            {/* Industrial & Commercial Coverage Corridor */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#77d1ff] shrink-0 mt-0.5" />
                <div className="text-xs font-mono-tech">
                  <strong className="text-white block">AURIC / Shendra & Waluj MIDC</strong>
                  <span className="text-white/60">Industrial cleanroom & plant ventilation</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-3.5 rounded flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#77d1ff] shrink-0 mt-0.5" />
                <div className="text-xs font-mono-tech">
                  <strong className="text-white block">Commercial & Healthcare</strong>
                  <span className="text-white/60">Hospitals, hotels, IT hubs & institutional</span>
                </div>
              </div>
            </div>

            {/* Telemetry Coordinate Box */}
            <div className="p-4 bg-white/5 border border-white/15 rounded flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech">
              <div>
                <span className="text-white/50 block text-[10px]">GEO-COORDINATES:</span>
                <span className="text-[#77d1ff] font-bold">19.8762° N, 75.3433° E (SAMBHAJINAGAR)</span>
              </div>
              <div>
                <span className="text-white/50 block text-[10px]">WEST REGION DIRECT:</span>
                <a href="tel:+918696911863" className="text-white font-bold hover:text-[#77d1ff] transition-colors">
                  +91 8696911863
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="bg-[#006688] hover:bg-[#004f6b] text-white px-6 py-3.5 rounded text-xs font-mono-tech uppercase tracking-wider font-semibold flex items-center gap-2 transition-all shadow-lg"
              >
                <span>Connect with West Region Team</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+918696911863"
                className="border border-white/20 hover:bg-white/10 text-white px-5 py-3.5 rounded text-xs font-mono-tech uppercase tracking-wider flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#77d1ff]" />
                <span>Call Branch: +91 8696911863</span>
              </a>
            </div>
          </div>

          {/* Right Column: Radar Pulse Schematic Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#001428] border border-white/15 rounded-lg p-6 relative overflow-hidden shadow-2xl">
              
              {/* Radar Grid Graphic */}
              <div className="relative aspect-square w-full max-w-[380px] mx-auto flex items-center justify-center">
                
                {/* Concentric Radar Rings */}
                <div className="absolute inset-0 rounded-full border border-[#006688]/30"></div>
                <div className="absolute inset-12 rounded-full border border-[#006688]/40"></div>
                <div className="absolute inset-24 rounded-full border border-[#006688]/60"></div>
                <div className="absolute inset-36 rounded-full border border-[#77d1ff]/40"></div>

                {/* Crosshairs */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#006688]/30"></div>
                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#006688]/30"></div>

                {/* Animated Rotating Radar Sweep */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-[#43c5fd]/10 to-transparent animate-[spin_6s_linear_infinite] pointer-events-none"></div>

                {/* Center Pulse Point: Chhatrapati Sambhajinagar Node */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative flex h-6 w-6 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#43c5fd] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#43c5fd] border-2 border-white"></span>
                  </div>

                  <div className="mt-3 bg-[#001e40]/90 border border-[#77d1ff] px-3 py-1.5 rounded text-center shadow-lg backdrop-blur-xs">
                    <div className="font-display font-bold text-xs text-white">Chhatrapati Sambhajinagar</div>
                    <div className="font-mono-tech text-[10px] text-[#77d1ff]">19.8762° N | WEST REGION</div>
                  </div>
                </div>

                {/* Secondary East HQ Anchor in Radar Graphic */}
                <div className="absolute top-10 right-10 flex items-center gap-1.5 bg-black/40 border border-white/10 px-2 py-1 rounded text-[10px] font-mono-tech">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                  <span>KOLKATA HQ (EAST)</span>
                </div>
              </div>

              {/* Status Footer */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-white/70">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Branch Active & Operational</span>
                </span>
                <span className="text-[#77d1ff]">AUTHORISED CARRIER / HITACHI</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
