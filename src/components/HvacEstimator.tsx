import React, { useState } from 'react';
import { Calculator, Zap, Wind, ShieldAlert, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

interface EstimatorProps {
  onApplyToInquiry?: (data: { area: number; spaceType: string; estimatedTR: number; estimatedHP: number }) => void;
}

export const HvacEstimator: React.FC<EstimatorProps> = ({ onApplyToInquiry }) => {
  const [spaceType, setSpaceType] = useState<string>('Commercial Office');
  const [areaSqFt, setAreaSqFt] = useState<number>(3500);
  const [ceilingHeight, setCeilingHeight] = useState<number>(10);
  const [glazingLevel, setGlazingLevel] = useState<'Standard' | 'High Glazing (Solar Load)'>('Standard');
  const [occupancy, setOccupancy] = useState<number>(30);

  // Thermodynamic rule of thumb calculation
  const spaceMultiplier: Record<string, number> = {
    'Commercial Office': 140, // sq ft per TR
    'Hospital / OT / Clinic': 100, // sq ft per TR (high fresh air/cleanroom)
    'Data / Server Center': 60,  // high sensible heat
    'Auditorium / Theatre': 90,  // high occupancy
    'Retail Showroom / Mall': 120,
    'Luxury Hotel / Residence': 160,
  };

  const baseSqFtPerTR = spaceMultiplier[spaceType] || 140;
  
  // Modifiers
  const heightFactor = ceilingHeight > 10 ? 1 + (ceilingHeight - 10) * 0.05 : 1;
  const glazingFactor = glazingLevel === 'High Glazing (Solar Load)' ? 1.18 : 1;
  
  const estimatedTR = Math.max(1, Math.round((areaSqFt / baseSqFtPerTR) * heightFactor * glazingFactor * 10) / 10);
  const estimatedHP = Math.round(estimatedTR * 1.35 * 10) / 10;
  const estimatedCFM = Math.round(estimatedTR * 400);

  const getRecommendedSystem = () => {
    if (spaceType === 'Hospital / OT / Clinic') {
      return 'Hitachi Modular VRF with Cleanroom AHU & Laminar Airflow Stages';
    }
    if (spaceType === 'Data / Server Center') {
      return 'Precision Packaged Units with N+1 Dual Circuit Redundancy';
    }
    if (spaceType === 'Auditorium / Theatre') {
      return 'High Static Ducted VRF System with Acoustic Silencer Baffles';
    }
    if (areaSqFt > 10000) {
      return 'Modular Carrier / Hitachi Set Free VRF Outdoor Network (Multi-HP)';
    }
    return 'Hitachi / Carrier Set Free VRF with 4-Way Compact Cassette & Slim Ducted Units';
  };

  const handleConsultSubmit = () => {
    if (onApplyToInquiry) {
      onApplyToInquiry({
        area: areaSqFt,
        spaceType,
        estimatedTR,
        estimatedHP,
      });
    }
    // Smooth scroll to contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="pt-28 pb-24 bg-[#f7f9fb] border-b border-[#c3c6d1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-l-2 border-[#006688] pl-4 sm:pl-6 mb-16">
          <div className="text-xs font-mono-tech uppercase tracking-widest text-[#006688] mb-1 font-semibold">
            ENGINEERING PLANNING TOOL
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#001e40] tracking-tight">
            HVAC Load & Capacity Estimator
          </h2>
          <p className="font-body text-[#43474f] text-base sm:text-lg max-w-3xl mt-2">
            Calculate preliminary thermodynamic tonnage (TR), VRF horsepower (HP), and recommended airflow parameters for your facility prior to detailed psychrometric mapping.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#c3c6d1] p-6 sm:p-8 rounded-sm shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#e0e3e5]">
              <span className="font-mono-tech text-xs text-[#006688] font-bold uppercase tracking-wider">
                SPACE & ENVIRONMENTAL PARAMETERS
              </span>
              <button
                onClick={() => {
                  setSpaceType('Commercial Office');
                  setAreaSqFt(3500);
                  setCeilingHeight(10);
                  setGlazingLevel('Standard');
                  setOccupancy(30);
                }}
                className="text-xs font-mono-tech text-[#737780] hover:text-[#001e40] flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Defaults</span>
              </button>
            </div>

            {/* Space Type Selector */}
            <div>
              <label className="block text-xs font-mono-tech uppercase text-[#001e40] font-bold mb-2">
                1. Select Application / Facility Type:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  'Commercial Office',
                  'Hospital / OT / Clinic',
                  'Data / Server Center',
                  'Auditorium / Theatre',
                  'Retail Showroom / Mall',
                  'Luxury Hotel / Residence'
                ].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSpaceType(type)}
                    className={`p-3 text-left rounded text-xs font-display transition-all border ${
                      spaceType === type
                        ? 'bg-[#001e40] text-white border-[#001e40] font-semibold'
                        : 'bg-[#f7f9fb] text-[#43474f] border-[#c3c6d1] hover:bg-[#e0e3e5]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Floor Area Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono-tech uppercase text-[#001e40] font-bold">
                  2. Carpet Floor Area (Sq. Ft.):
                </label>
                <span className="font-mono-tech text-sm font-bold text-[#006688] bg-[#f2f4f6] px-3 py-1 rounded border border-[#c3c6d1]">
                  {areaSqFt.toLocaleString()} sq. ft.
                </span>
              </div>
              <input
                type="range"
                min={500}
                max={50000}
                step={250}
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2 bg-[#e0e3e5] rounded-lg appearance-none cursor-pointer accent-[#006688]"
              />
              <div className="flex justify-between text-[10px] font-mono-tech text-[#737780] mt-1">
                <span>500 sq. ft.</span>
                <span>25,000 sq. ft.</span>
                <span>50,000+ sq. ft.</span>
              </div>
            </div>

            {/* Secondary Controls: Height & Solar Glazing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <label className="block text-xs font-mono-tech uppercase text-[#001e40] font-bold mb-2">
                  3. Ceiling Height (Feet):
                </label>
                <select
                  value={ceilingHeight}
                  onChange={(e) => setCeilingHeight(Number(e.target.value))}
                  className="w-full bg-[#f7f9fb] border border-[#c3c6d1] text-xs font-mono-tech p-2.5 rounded text-[#001e40] focus:outline-none focus:border-[#006688]"
                >
                  <option value={9}>9 Feet (Standard Ceiling)</option>
                  <option value={10}>10 Feet (Medium False Ceiling)</option>
                  <option value={12}>12 Feet (High Ceiling)</option>
                  <option value={16}>16 Feet (Double Height / Lobby)</option>
                  <option value={20}>20+ Feet (Industrial / Auditorium)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-tech uppercase text-[#001e40] font-bold mb-2">
                  4. Solar Envelope / Glass Facade:
                </label>
                <select
                  value={glazingLevel}
                  onChange={(e) => setGlazingLevel(e.target.value as any)}
                  className="w-full bg-[#f7f9fb] border border-[#c3c6d1] text-xs font-mono-tech p-2.5 rounded text-[#001e40] focus:outline-none focus:border-[#006688]"
                >
                  <option value="Standard">Standard Masonry / Modest Windows</option>
                  <option value="High Glazing (Solar Load)">High Glass Facade / Direct Sun Exposure</option>
                </select>
              </div>
            </div>

          </div>

          {/* Results Calculation Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#001e40] text-white p-6 sm:p-8 rounded-sm shadow-xl blueprint-grid flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <span className="text-xs font-mono-tech text-[#77d1ff] tracking-wider uppercase font-bold flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>ESTIMATED THERMAL SIZING</span>
                </span>
                <span className="text-[10px] font-mono-tech text-white/60">
                  REF: ISHRAE / ASHRAE
                </span>
              </div>

              {/* Primary Numbers */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded border border-white/15">
                  <span className="text-[10px] font-mono-tech text-[#c2e8ff] block uppercase">
                    ESTIMATED TONNAGE:
                  </span>
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#77d1ff] mt-1">
                    {estimatedTR} <span className="text-base font-normal text-white">TR</span>
                  </div>
                </div>

                <div className="bg-white/10 p-4 rounded border border-white/15">
                  <span className="text-[10px] font-mono-tech text-[#c2e8ff] block uppercase">
                    MODULAR VRF POWER:
                  </span>
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-1">
                    {estimatedHP} <span className="text-base font-normal text-[#77d1ff]">HP</span>
                  </div>
                </div>
              </div>

              {/* Airflow requirement */}
              <div className="p-3.5 bg-white/5 border border-white/10 rounded flex items-center justify-between text-xs font-mono-tech">
                <div className="flex items-center gap-2 text-[#d5e3ff]">
                  <Wind className="w-4 h-4 text-[#77d1ff]" />
                  <span>ESTIMATED AIRFLOW:</span>
                </div>
                <span className="font-bold text-white">~{estimatedCFM.toLocaleString()} CFM</span>
              </div>

              {/* Recommended Architecture */}
              <div className="space-y-2">
                <span className="text-xs font-mono-tech text-[#77d1ff] uppercase font-bold block">
                  RECOMMENDED SYSTEM CONFIGURATION:
                </span>
                <div className="p-3.5 bg-[#002b5c] border border-[#006688] rounded text-xs font-body text-white">
                  {getRecommendedSystem()}
                </div>
              </div>

              <p className="text-[11px] text-white/60 font-body">
                * Note: Preliminary calculation. Final equipment capacity requires exact heat load calculation, orientation analysis, and equipment diversity factors.
              </p>
            </div>

            {/* Transfer to Consultation Form Button */}
            <div className="pt-6 mt-6 border-t border-white/15">
              <button
                onClick={handleConsultSubmit}
                className="w-full bg-[#006688] hover:bg-[#004f6b] text-white py-3.5 px-4 rounded text-xs font-mono-tech uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <span>Request Formal Engineering Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
