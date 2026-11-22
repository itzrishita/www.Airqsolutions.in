import React, { useState } from 'react';
import { EQUIPMENT_CATALOG } from '../data/hvacData';
import { EquipmentUnit } from '../types';
import { 
  Wind, 
  Layers, 
  Box, 
  Wrench, 
  Sliders, 
  Volume2, 
  Zap, 
  Check, 
  Sparkles,
  ArrowRight,
  Info,
  Fan
} from 'lucide-react';

export const EquipmentCatalog: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<EquipmentUnit>(EQUIPMENT_CATALOG[0]);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Indoor' | 'Outdoor'>('All');

  const specialisations = [
    {
      id: "vrf",
      title: "VRF SYSTEMS",
      subtitle: "Variable Refrigerant Flow",
      description: "High efficiency, multi-inverter refrigerant systems for superior comfort, individual zoning, and maximum energy savings.",
      icon: <Wind className="w-5 h-5 text-[#006688]" />,
      stats: "Up to 96 HP modular combination",
      imageUrl: "/assets/aistudio/vrf_systems_6bc0ad21.jpeg",
      imageClass: "object-cover object-center"
    },
    {
      id: "ductable",
      title: "DUCTABLE SYSTEMS",
      subtitle: "Central High Static Cooling",
      description: "Custom engineered ductwork distribution for large commercial complexes, auditoriums, and institutional spaces.",
      icon: <Layers className="w-5 h-5 text-[#006688]" />,
      stats: "High static pressure up to 250 Pa",
      imageUrl: "/assets/aistudio/ductable_systems_796e0c15.jpeg",
      imageClass: "object-contain p-2 bg-white"
    },
    {
      id: "packaged",
      title: "PACKAGED AC UNITS",
      subtitle: "Heavy Duty Direct Cooling",
      description: "Reliable and robust packaged solutions designed for fast deployment in diverse industrial and commercial applications.",
      icon: <Box className="w-5 h-5 text-[#006688]" />,
      stats: "Factory-assembled integrity",
      imageUrl: "/assets/aistudio/packaged_ac_units_47ac2061.jpeg",
      imageClass: "object-cover object-center"
    },
    {
      id: "service",
      title: "AFTER SALES SERVICE",
      subtitle: "24/7 OEM Support",
      description: "Prompt, efficient, and professional preventive & breakdown service support with 100% genuine spares across India.",
      icon: <Wrench className="w-5 h-5 text-[#006688]" />,
      stats: "Guaranteed SLA response times",
      imageUrl: "/assets/aistudio/after_sales_service_048e92fc.jpeg",
      imageClass: "object-cover object-top"
    }
  ];

  const filteredUnits = activeCategory === 'All' 
    ? EQUIPMENT_CATALOG 
    : EQUIPMENT_CATALOG.filter(u => u.type === activeCategory);

  return (
    <section id="expertise" className="py-24 bg-[#f7f9fb] border-b border-[#c3c6d1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-l-2 border-[#006688] pl-4 sm:pl-6 mb-16">
          <div className="text-xs font-mono-tech uppercase tracking-widest text-[#006688] mb-1 font-semibold">
            ENGINEERING SPECIALISATION & SYSTEMS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#001e40] tracking-tight">
            HVAC Product & Solutions Range
          </h2>
          <p className="font-body text-[#43474f] text-base sm:text-lg max-w-3xl mt-2">
            Engineered equipment portfolio spanning VRF outdoor units, comprehensive indoor configurations, ducted matrices, and dedicated after-sales service.
          </p>
        </div>

        {/* 4 Core Specialisation Cards (From Brochure Page 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {specialisations.map((spec) => (
            <div 
              key={spec.id}
              className="bg-white border border-[#c3c6d1] rounded-sm hover:border-[#006688] hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                <div className="relative h-44 w-full bg-[#f2f4f6] border-b border-[#e0e3e5] overflow-hidden">
                  <img
                    src={spec.imageUrl}
                    alt={spec.title}
                    className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${spec.imageClass}`}
                  />
                  <div className="absolute bottom-3 left-4 w-9 h-9 rounded bg-white/95 backdrop-blur-sm flex items-center justify-center border border-[#c3c6d1]/80 shadow-sm">
                    {spec.icon}
                  </div>
                </div>
                <div className="p-6 pb-0">
                  <h3 className="font-display font-bold text-lg text-[#001e40] mb-1">
                    {spec.title}
                  </h3>
                  <div className="font-mono-tech text-xs text-[#006688] font-medium mb-3">
                    {spec.subtitle}
                  </div>
                  <p className="font-body text-xs text-[#43474f] leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              </div>

              <div className="mx-6 mb-6 mt-6 pt-3 border-t border-[#e0e3e5] text-[11px] font-mono-tech text-[#001e40] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#006688]"></span>
                <span>{spec.stats}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Equipment Range Showcase */}
        <div id="equipment" className="pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#c3c6d1]">
            <div>
              <div className="text-xs font-mono-tech uppercase text-[#006688] font-bold">
                EQUIPMENT SPECIFICATION BROWSER
              </div>
              <h3 className="font-display font-bold text-2xl text-[#001e40]">
                VRF Indoor & Outdoor Range
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              {(['All', 'Indoor', 'Outdoor'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded text-xs font-mono-tech uppercase tracking-wider transition-colors ${
                    activeCategory === cat
                      ? 'bg-[#001e40] text-white font-bold'
                      : 'bg-white border border-[#c3c6d1] text-[#43474f] hover:bg-[#e0e3e5]'
                  }`}
                >
                  {cat} Units
                </button>
              ))}
            </div>
          </div>

          {/* Unit Selector Grid + Spec Detail View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Unit Selector Cards (Left 5 Cols) */}
            <div className="lg:col-span-5 space-y-3">
              {filteredUnits.map((unit) => {
                const isSelected = selectedUnit.id === unit.id;
                return (
                  <button
                    key={unit.id}
                    onClick={() => setSelectedUnit(unit)}
                    className={`w-full text-left p-4 rounded transition-all border flex items-center justify-between group ${
                      isSelected
                        ? 'bg-white border-[#006688] shadow-sm ring-1 ring-[#006688]'
                        : 'bg-white/80 border-[#c3c6d1] hover:bg-white hover:border-[#737780]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono-tech px-2 py-0.5 rounded uppercase font-semibold ${
                          unit.type === 'Outdoor' 
                            ? 'bg-[#001e40] text-white' 
                            : 'bg-[#c2e8ff] text-[#004f6b]'
                        }`}>
                          {unit.type}
                        </span>
                        <h4 className="font-display font-bold text-sm text-[#001e40] group-hover:text-[#006688]">
                          {unit.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[#43474f] font-body mt-1">
                        {unit.subtitle}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[11px] font-mono-tech text-[#006688] block">
                        {unit.badge}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Unit Deep Specification Card (Right 7 Cols) */}
            <div className="lg:col-span-7 bg-white border border-[#c3c6d1] p-6 sm:p-8 rounded-sm shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#e0e3e5]">
                <div>
                  <span className="font-mono-tech text-xs text-[#006688] font-bold uppercase tracking-wider">
                    TECHNICAL DATA SHEET
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-[#001e40]">
                    {selectedUnit.name}
                  </h3>
                  <div className="font-mono-tech text-xs text-[#43474f] mt-0.5">
                    {selectedUnit.subtitle}
                  </div>
                </div>

                <div className="bg-[#f2f4f6] border border-[#c3c6d1] px-3 py-1.5 rounded text-xs font-mono-tech text-[#001e40] font-bold">
                  {selectedUnit.badge}
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <p className="font-body text-[#191c1e] text-sm sm:text-base leading-relaxed">
                  {selectedUnit.description}
                </p>

                {/* Technical Metric Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#f7f9fb] border border-[#e0e3e5] rounded">
                  <div>
                    <div className="flex items-center gap-1 text-[11px] font-mono-tech text-[#43474f] mb-1">
                      <Zap className="w-3.5 h-3.5 text-[#006688]" />
                      <span>CAPACITY</span>
                    </div>
                    <div className="font-display font-bold text-xs sm:text-sm text-[#001e40]">
                      {selectedUnit.specs.capacityRange}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1 text-[11px] font-mono-tech text-[#43474f] mb-1">
                      <Volume2 className="w-3.5 h-3.5 text-[#006688]" />
                      <span>ACOUSTICS</span>
                    </div>
                    <div className="font-display font-bold text-xs sm:text-sm text-[#001e40]">
                      {selectedUnit.specs.noiseLevel}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1 text-[11px] font-mono-tech text-[#43474f] mb-1">
                      <Fan className="w-3.5 h-3.5 text-[#006688]" />
                      <span>AIRFLOW</span>
                    </div>
                    <div className="font-display font-bold text-xs sm:text-sm text-[#001e40]">
                      {selectedUnit.specs.airflow}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1 text-[11px] font-mono-tech text-[#43474f] mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#006688]" />
                      <span>REFRIGERANT</span>
                    </div>
                    <div className="font-display font-bold text-xs sm:text-sm text-[#001e40]">
                      {selectedUnit.specs.refrigerant}
                    </div>
                  </div>
                </div>

                {/* Key Engineering Features */}
                <div>
                  <h4 className="font-mono-tech text-xs font-bold text-[#001e40] uppercase tracking-wider mb-3">
                    Key Engineering Features:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedUnit.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#43474f] font-body">
                        <Check className="w-4 h-4 text-[#006688] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suitable Application Sectors */}
                <div className="pt-4 border-t border-[#e0e3e5]">
                  <span className="font-mono-tech text-xs text-[#43474f] block mb-2 font-semibold">
                    RECOMMENDED DEPLOYMENT SECTORS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedUnit.suitableFor.map((sector, i) => (
                      <span 
                        key={i}
                        className="bg-white border border-[#c3c6d1] text-[#001e40] px-2.5 py-1 rounded text-xs font-mono-tech"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA to Consult */}
                <div className="pt-2 flex justify-end">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider bg-[#001e40] text-white px-5 py-2.5 rounded hover:bg-[#006688] transition-colors"
                  >
                    <span>Request Engineering Sizing for {selectedUnit.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
