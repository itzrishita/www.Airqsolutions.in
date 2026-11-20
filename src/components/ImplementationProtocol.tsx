import React from 'react';
import { PROTOCOL_STEPS } from '../data/hvacData';
import { 
  Compass, 
  FileSpreadsheet, 
  Wrench, 
  CheckCircle2, 
  Sliders, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const ImplementationProtocol: React.FC = () => {
  return (
    <section id="protocol" className="py-24 bg-white border-b border-[#c3c6d1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-l-2 border-[#006688] pl-4 sm:pl-6 mb-16">
          <div className="text-xs font-mono-tech uppercase tracking-widest text-[#006688] mb-1 font-semibold">
            METHODOLOGY & QUALITY ASSURANCE
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#001e40] tracking-tight">
            4-Stage Implementation Protocol
          </h2>
          <p className="font-body text-[#43474f] text-base sm:text-lg max-w-3xl mt-2">
            A disciplined engineering lifecycle designed to eliminate on-site bottlenecks, maintain ASHRAE standards, and deliver maximum thermodynamic efficiency.
          </p>
        </div>

        {/* 4 Steps Timeline / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROTOCOL_STEPS.map((step, idx) => (
            <div 
              key={step.stepNumber}
              className="bg-[#f7f9fb] border border-[#c3c6d1] p-6 rounded-sm flex flex-col justify-between hover:border-[#006688] hover:shadow-md transition-all group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono-tech text-xl font-extrabold text-[#001e40] bg-white px-3 py-1 rounded border border-[#c3c6d1] group-hover:bg-[#006688] group-hover:text-white transition-colors">
                    STAGE {step.stepNumber}
                  </span>
                  <span className="text-[10px] font-mono-tech text-[#737780] uppercase">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#001e40] mb-1">
                  {step.title}
                </h3>
                <div className="text-xs font-mono-tech text-[#006688] font-semibold mb-3">
                  {step.subtitle}
                </div>

                <p className="font-body text-xs text-[#43474f] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-4 border-t border-[#e0e3e5] space-y-2">
                <span className="text-[10px] font-mono-tech uppercase font-bold text-[#001e40] block tracking-wider">
                  KEY DELIVERABLES:
                </span>
                {step.deliverables.map((del, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-[#43474f]">
                    <CheckCircle2 className="w-3 h-3 text-[#006688] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Assurance Banner */}
        <div className="mt-12 bg-[#001e40] text-white p-6 sm:p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 blueprint-grid">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#77d1ff]">
              <ShieldCheck className="w-4 h-4" />
              <span>COMMISSIONING & SAFETY STANDARD</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Every system tested to OEM factory standards
            </h3>
            <p className="text-xs text-[#d5e3ff] max-w-2xl font-body">
              All nitrogen pressure holding tests, air volume balancing (CFM), and refrigerant vacuum stabilization are documented with formal handover certificates.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 bg-[#006688] hover:bg-[#004f6b] text-white text-xs font-mono-tech uppercase px-6 py-3 rounded font-semibold flex items-center gap-2 transition-colors"
          >
            <span>Request Site Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
