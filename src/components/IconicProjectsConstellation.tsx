import React, { useState } from 'react';
import { ICONIC_PROJECTS, BROCHURE_IMAGES } from '../data/hvacData';
import { IconicProject, ProjectCategory } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { 
  Building2, 
  MapPin, 
  Zap, 
  Search, 
  LayoutGrid, 
  Orbit, 
  ExternalLink, 
  CheckCircle,
  GraduationCap,
  HeartPulse,
  Landmark,
  Train,
  Hotel,
  Sun,
  Shield,
  Filter
} from 'lucide-react';

export const IconicProjectsConstellation: React.FC = () => {
  const [viewMode, setViewMode] = useState<'constellation' | 'grid'>('constellation');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState<IconicProject | null>(null);
  const [activeHoverNode, setActiveHoverNode] = useState<IconicProject>(ICONIC_PROJECTS[0]);

  const categories: ProjectCategory[] = [
    'All',
    'Education & Culture',
    'Healthcare',
    'Commercial & Hospitality',
    'Infrastructure & Transit',
    'Government & Landmark'
  ];

  const getCategoryIcon = (category: ProjectCategory) => {
    switch (category) {
      case 'Education & Culture': return <GraduationCap className="w-4 h-4 text-[#006688]" />;
      case 'Healthcare': return <HeartPulse className="w-4 h-4 text-red-600" />;
      case 'Infrastructure & Transit': return <Train className="w-4 h-4 text-[#006688]" />;
      case 'Commercial & Hospitality': return <Hotel className="w-4 h-4 text-amber-600" />;
      case 'Government & Landmark': return <Landmark className="w-4 h-4 text-emerald-700" />;
      default: return <Building2 className="w-4 h-4 text-[#006688]" />;
    }
  };

  const filteredProjects = ICONIC_PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.capacity.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 bg-white border-b border-[#c3c6d1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="border-l-2 border-[#006688] pl-4 sm:pl-6">
            <div className="text-xs font-mono-tech uppercase tracking-widest text-[#006688] mb-1 font-semibold">
              GLIMPSE OF ICONIC PROJECTS
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#001e40] tracking-tight">
              Projects Executed Portfolio
            </h2>
            <p className="font-body text-[#43474f] text-base sm:text-lg max-w-2xl mt-2">
              A proven track record of engineering excellence across high-capacity installations, healthcare institutions, and iconic national landmarks.
            </p>
          </div>

          {/* View Mode Switcher Toggle */}
          <div className="flex items-center gap-2 mt-6 md:mt-0 bg-[#f2f4f6] p-1 rounded border border-[#c3c6d1]">
            <button
              onClick={() => setViewMode('constellation')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono-tech uppercase transition-all ${
                viewMode === 'constellation'
                  ? 'bg-[#001e40] text-white shadow-xs font-semibold'
                  : 'text-[#43474f] hover:text-[#001e40]'
              }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>Constellation Orbit (Brochure View)</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono-tech uppercase transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#001e40] text-white shadow-xs font-semibold'
                  : 'text-[#43474f] hover:text-[#001e40]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Technical Grid (14 Sites)</span>
            </button>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#e0e3e5]">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded text-xs font-mono-tech transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#006688] text-white font-bold shadow-xs'
                    : 'bg-[#f7f9fb] border border-[#c3c6d1] text-[#43474f] hover:bg-[#e0e3e5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#737780]" />
            <input
              type="text"
              placeholder="Search site, city, capacity..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f7f9fb] border border-[#c3c6d1] pl-9 pr-3 py-1.5 text-xs font-mono-tech rounded text-[#001e40] placeholder:text-[#737780] focus:outline-none focus:border-[#006688]"
            />
          </div>
        </div>

        {/* VIEW 1: CIRCULAR CONSTELLATION ORBIT (Replicating Page 2 of Brochure) */}
        {viewMode === 'constellation' && (
          <div className="bg-[#f7f9fb] border border-[#c3c6d1] rounded-sm p-6 lg:p-10 mb-8 relative overflow-hidden">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="font-mono-tech text-xs uppercase tracking-widest text-[#006688] font-bold">
                CIRCULAR SITE CONSTELLATION
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#001e40]">
                Interactive 14-Site Project Matrix
              </h3>
              <p className="text-xs font-body text-[#43474f] mt-1">
                Hover or click any project node around the perimeter to inspect capacity, engineering highlights, and system specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left/Center Visual Orbit Interactive Container (7 Cols) */}
              <div className="lg:col-span-7 flex items-center justify-center p-4">
                <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                  
                  {/* Outer Orbit Guide Ring */}
                  <div className="absolute inset-4 rounded-full border border-dashed border-[#006688]/30 pointer-events-none"></div>
                  <div className="absolute inset-16 rounded-full border border-[#c3c6d1] pointer-events-none"></div>

                  {/* Center Core Hub: Active Project Display / Brochure Image Link */}
                  <div 
                    onClick={() => setActiveProjectModal(activeHoverNode)}
                    className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#001e40] text-white p-4 flex flex-col items-center justify-center text-center shadow-xl border-4 border-white cursor-pointer group hover:scale-105 transition-transform"
                  >
                    <div className="text-[10px] font-mono-tech uppercase text-[#77d1ff] tracking-widest mb-1">
                      SITE #{activeHoverNode.id} OF 14
                    </div>
                    <div className="font-display font-extrabold text-sm sm:text-base leading-tight text-white line-clamp-2 px-2">
                      {activeHoverNode.name}
                    </div>
                    <div className="text-xs font-mono-tech text-[#c2e8ff] mt-1">
                      {activeHoverNode.location}
                    </div>
                    <div className="mt-2 bg-[#006688] text-white font-mono-tech text-xs px-2.5 py-0.5 rounded font-bold">
                      {activeHoverNode.capacity}
                    </div>
                    <span className="text-[10px] font-mono-tech text-[#77d1ff] mt-2 group-hover:underline flex items-center gap-1">
                      <span>Inspect Details</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </div>

                  {/* 14 Circular Project Nodes positioned radially */}
                  {ICONIC_PROJECTS.map((proj, index) => {
                    const total = ICONIC_PROJECTS.length;
                    // Angle calculation starting from top (-90 degrees)
                    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
                    // Radius as percentage from center
                    const radiusPercent = 43; // percentage of container
                    const left = 50 + radiusPercent * Math.cos(angle);
                    const top = 50 + radiusPercent * Math.sin(angle);
                    const isActive = activeHoverNode.id === proj.id;

                    return (
                      <button
                        key={proj.id}
                        onClick={() => {
                          setActiveHoverNode(proj);
                          setActiveProjectModal(proj);
                        }}
                        onMouseEnter={() => setActiveHoverNode(proj)}
                        style={{
                          left: `${left}%`,
                          top: `${top}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                        className={`absolute z-20 transition-all group ${
                          isActive ? 'scale-125 z-30' : 'hover:scale-110'
                        }`}
                        title={`${proj.id}. ${proj.name} (${proj.capacity})`}
                      >
                        <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-mono-tech text-xs font-bold border-2 transition-all shadow-md ${
                          isActive
                            ? 'bg-[#006688] text-white border-white ring-2 ring-[#006688]'
                            : 'bg-white text-[#001e40] border-[#c3c6d1] hover:border-[#006688]'
                        }`}>
                          {proj.id}
                        </div>

                        {/* Floating Tooltip with Name & Capacity */}
                        <div className={`hidden sm:block absolute ${
                          left > 50 ? 'left-full ml-2' : 'right-full mr-2'
                        } top-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap bg-[#001e40] text-white text-[10px] font-mono-tech px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-40 border border-white/20`}>
                          <span className="font-bold">{proj.name}</span>
                          <span className="text-[#77d1ff] ml-1.5">[{proj.capacity}]</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Side: Active Project Deep Dive Card (5 Cols) */}
              <div className="lg:col-span-5 bg-white border border-[#c3c6d1] p-6 rounded shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#e0e3e5]">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#001e40] text-white text-[10px] font-mono-tech px-2 py-0.5 rounded font-bold">
                        NODE 0{activeHoverNode.id}
                      </span>
                      <span className="text-xs font-mono-tech text-[#006688]">
                        {activeHoverNode.category}
                      </span>
                    </div>
                    <span className="font-mono-tech font-bold text-xs bg-[#c2e8ff] text-[#004f6b] px-2.5 py-0.5 rounded">
                      {activeHoverNode.capacity}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-extrabold text-2xl text-[#001e40]">
                      {activeHoverNode.name}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#43474f] mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#006688]" />
                      <span>{activeHoverNode.location}</span>
                    </div>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-[#191c1e] leading-relaxed">
                    {activeHoverNode.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono-tech text-[#43474f] font-bold block uppercase">
                      Engineering Highlights:
                    </span>
                    {activeHoverNode.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#43474f]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#006688] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e0e3e5] flex items-center justify-between">
                  <span className="text-[11px] font-mono-tech text-[#737780]">
                    System: {activeHoverNode.systemType.split(' ')[0]}...
                  </span>
                  <button
                    onClick={() => setActiveProjectModal(activeHoverNode)}
                    className="bg-[#001e40] hover:bg-[#006688] text-white text-xs font-mono-tech px-4 py-2 rounded transition-colors flex items-center gap-1.5"
                  >
                    <span>Full Spec Sheet</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* VIEW 2: TECHNICAL GRID (Matching Image 9 Mockup) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProjectModal(project)}
              className="bg-white border border-[#c3c6d1] p-6 rounded-sm hover:border-[#006688] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-8 h-8 rounded bg-[#f2f4f6] flex items-center justify-center border border-[#e0e3e5] group-hover:bg-[#c2e8ff] transition-colors">
                    {getCategoryIcon(project.category)}
                  </div>
                  {project.tag && (
                    <span className="bg-[#006688] text-white text-[10px] font-mono-tech uppercase tracking-wider px-2 py-0.5 rounded font-medium">
                      {project.tag}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-lg text-[#001e40] group-hover:text-[#006688] transition-colors">
                  {project.name}
                </h3>

                <div className="flex items-center gap-1 text-xs font-mono-tech text-[#43474f] mt-1 mb-4">
                  <MapPin className="w-3 h-3 text-[#737780]" />
                  <span>{project.location}</span>
                </div>

                <p className="font-body text-xs text-[#43474f] line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e0e3e5] flex items-center justify-between">
                <span className="font-mono-tech text-xs font-bold text-[#006688] bg-[#f7f9fb] px-2.5 py-1 rounded border border-[#e0e3e5]">
                  {project.capacity}
                </span>

                <span className="text-[11px] font-mono-tech text-[#737780] group-hover:text-[#001e40] flex items-center gap-1 transition-colors">
                  <span>View Specs</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search doesn't match */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#f7f9fb] border border-dashed border-[#c3c6d1] rounded">
            <Building2 className="w-8 h-8 text-[#737780] mx-auto mb-2" />
            <p className="font-display font-semibold text-[#001e40]">No projects found matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs font-mono-tech text-[#006688] underline"
            >
              Reset all filters
            </button>
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </section>
  );
};
