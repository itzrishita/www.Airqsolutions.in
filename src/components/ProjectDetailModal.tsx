import React from 'react';
import { IconicProject } from '../types';
import { AirQWordmark } from './BrandLogo';
import { X, MapPin, Zap, Building, CheckCircle2, Phone, ArrowRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: IconicProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded border border-[#c3c6d1] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#001e40] text-white p-6 rounded-t flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#006688] text-white font-mono-tech text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-bold">
                PROJECT #{project.id}
              </span>
              {project.tag && (
                <span className="bg-[#43c5fd]/20 text-[#77d1ff] border border-[#43c5fd]/40 font-mono-tech text-[10px] uppercase tracking-wider px-2 py-0.5 rounded">
                  {project.tag}
                </span>
              )}
            </div>
            <h3 className="font-display font-extrabold text-2xl text-white">
              {project.name}
            </h3>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#c2e8ff] mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#77d1ff]" />
              <span>{project.location}</span>
              <span>•</span>
              <span className="text-[#77d1ff] font-bold">{project.capacity}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Quick Spec Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 bg-[#f7f9fb] border border-[#e0e3e5] rounded text-xs font-mono-tech">
            <div>
              <span className="text-[#43474f] block text-[10px]">TOTAL CAPACITY:</span>
              <span className="font-bold text-[#001e40] text-sm">{project.capacity}</span>
            </div>
            <div>
              <span className="text-[#43474f] block text-[10px]">SECTOR / CATEGORY:</span>
              <span className="font-bold text-[#006688]">{project.category}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-[#43474f] block text-[10px]">SYSTEM TYPE:</span>
              <span className="font-bold text-[#001e40] truncate block">{project.systemType}</span>
            </div>
          </div>

          {/* Project Summary */}
          <div>
            <h4 className="font-mono-tech text-xs font-bold text-[#001e40] uppercase tracking-wider mb-2">
              Executive Project Overview:
            </h4>
            <p className="font-body text-[#191c1e] text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Engineering Highlights */}
          <div>
            <h4 className="font-mono-tech text-xs font-bold text-[#001e40] uppercase tracking-wider mb-3">
              Engineering & Execution Highlights:
            </h4>
            <div className="space-y-2">
              {project.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#43474f] font-body bg-[#f2f4f6]/50 p-2.5 rounded border border-[#e0e3e5]">
                  <CheckCircle2 className="w-4 h-4 text-[#006688] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Action */}
          <div className="pt-4 border-t border-[#e0e3e5] flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-mono-tech text-[#43474f] flex items-center gap-1.5 flex-wrap">
              <span>Execution by</span>
              <AirQWordmark inline className="h-[0.9em] text-[#4a4d52]" />
            </div>

            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-mono-tech uppercase border border-[#c3c6d1] rounded hover:bg-[#f2f4f6]"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={onClose}
                className="px-4 py-2 text-xs font-mono-tech uppercase bg-[#001e40] text-white rounded hover:bg-[#006688] flex items-center gap-1.5"
              >
                <span>Consult on Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
