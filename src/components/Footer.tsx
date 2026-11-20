import React from 'react';
import { COMPANY_INFO } from '../data/hvacData';
import { BrandLogo, AirQWordmark } from './BrandLogo';
import { Phone, Mail, MapPin, Building, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001428] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Brand & Regional Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Philosophy (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" size="lg" />

            <p className="text-xs text-white/70 font-body leading-relaxed max-w-sm">
              Over 35 years of collective HVAC engineering leadership. Authorised sales and service dealers for Carrier and Hitachi commercial systems, partnering with Bosch Home Comfort India.
            </p>

            <div className="p-3 bg-white/5 border border-white/10 rounded">
              <div className="italic font-display font-bold text-sm text-[#77d1ff]">
                "Cooling matters for living better."
              </div>
            </div>
          </div>

          {/* Col 2: East Region HQ (3 Cols) */}
          <div className="lg:col-span-3 space-y-2">
            <div className="text-xs font-mono-tech uppercase tracking-wider text-[#77d1ff] font-bold flex items-center gap-1.5 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>EAST REGION (HQ)</span>
            </div>
            <div className="font-display font-bold text-sm text-white">
              Registered Office
            </div>
            <p className="text-xs text-white/70 font-body leading-relaxed">
              116, Shantinagar Road, Uttarpara 712232, West Bengal
            </p>
            <div className="pt-2 text-xs font-mono-tech">
              <span className="text-white/50 block text-[10px]">PHONE:</span>
              <a href="tel:+919830079309" className="text-white hover:text-[#77d1ff] block font-bold">
                +91 9830079309
              </a>
              <a href="tel:+918696911863" className="text-[#77d1ff] hover:underline block">
                +91 8696911863 (Direct)
              </a>
            </div>
          </div>

          {/* Col 3: West Region Branch (3 Cols) */}
          <div className="lg:col-span-3 space-y-2">
            <div className="text-xs font-mono-tech uppercase tracking-wider text-[#77d1ff] font-bold flex items-center gap-1.5 mb-2">
              <Building className="w-3.5 h-3.5" />
              <span>WEST REGION (BRANCH)</span>
            </div>
            <div className="font-display font-bold text-sm text-white">
              Dedicated Branch
            </div>
            <p className="text-xs text-white/70 font-body leading-relaxed">
              "Biz Square", Shop no. 5, Gut no. 58, Satara- Beed Bypass, Chh. Sambhajinagar (MH)- 431001
            </p>
            <div className="pt-2 text-xs font-mono-tech">
              <span className="text-white/50 block text-[10px]">PHONE:</span>
              <a href="tel:+918696911863" className="text-white hover:text-[#77d1ff] block font-bold">
                +91 8696911863
              </a>
              <span className="text-[10px] text-white/50">Coordinates: 19.8762° N, 75.3433° E</span>
            </div>
          </div>

          {/* Col 4: Credentials (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono-tech uppercase tracking-wider text-[#77d1ff] font-bold mb-2">
              CREDENTIALS
            </div>
            
            <div className="space-y-1.5 text-xs font-mono-tech text-white/80">
              <div className="bg-white/5 p-2 rounded border border-white/10 text-center">
                <span className="font-bold text-white block">Carrier</span>
                <span className="text-[10px] text-[#77d1ff]">Authorised Dealer</span>
              </div>
              <div className="bg-white/5 p-2 rounded border border-white/10 text-center">
                <span className="font-bold text-white block">HITACHI</span>
                <span className="text-[10px] text-[#77d1ff]">Authorised Dealer</span>
              </div>
              <div className="bg-white/5 p-2 rounded border border-white/10 text-center">
                <span className="font-bold text-white block">BOSCH</span>
                <span className="text-[10px] text-[#77d1ff]">Partnering Firm</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-white/60">
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
            <span>© {new Date().getFullYear()}</span>
            <AirQWordmark inline className="h-[0.9em] text-white mx-0.5" />
            <span>. All rights reserved. Engineering Comfort. Delivering Performance.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white">
              About Profile
            </a>
            <a href="#projects" className="hover:text-white">
              14 Iconic Projects
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#77d1ff] hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
