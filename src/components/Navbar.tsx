import React, { useState, useEffect } from 'react';
import { PageSection } from '../types';
import { BrandLogo } from './BrandLogo';
import { Menu, X, Phone, FileText, MapPin, Building2, ChevronDown } from 'lucide-react';

interface NavbarProps {
  activeSection: PageSection;
  onNavigate: (section: PageSection, subAnchor?: string) => void;
  onOpenBrochure: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenBrochure }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; section: PageSection; href: string }[] = [
    { label: 'About', section: 'about', href: '#about' },
    { label: 'Expertise', section: 'expertise', href: '#expertise' },
    { label: 'Equipment', section: 'equipment', href: '#equipment' },
    { label: 'Iconic Projects', section: 'projects', href: '#projects' },
    { label: 'Protocol', section: 'protocol', href: '#protocol' },
    { label: 'Estimator', section: 'estimator', href: '#estimator' },
    { label: 'Social Responsibility', section: 'social-responsibility', href: '#social-responsibility' },
    { label: 'Contact', section: 'contact', href: '#contact' },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: PageSection,
    subAnchor?: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setBranchesOpen(false);
    onNavigate(section, subAnchor);
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#c3c6d1]/50 py-3' 
          : 'bg-white border-b border-[#c3c6d1] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Authority (returns to Hero Home view) */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="flex items-center group shrink-0"
        >
          <BrandLogo variant="dark" size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.section)}
                aria-current={isActive ? 'page' : undefined}
                className={`px-2 xl:px-2.5 py-2 text-xs xl:text-sm font-medium rounded transition-colors font-display whitespace-nowrap ${
                  isActive
                    ? 'bg-[#001e40] text-white font-semibold shadow-xs'
                    : 'text-[#43474f] hover:text-[#001e40] hover:bg-[#f2f4f6]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenBrochure}
            className="inline-flex items-center gap-1.5 text-xs font-mono-tech uppercase tracking-wider text-[#006688] bg-[#f2f4f6] hover:bg-[#c2e8ff]/50 border border-[#c3c6d1] px-3 py-2 rounded transition-colors"
            title="View Original Technical Brochure"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Brochure</span>
          </button>

          {/* Offices Hover Dropdown (Kolkata HQ & Maharashtra Branch) */}
          <div
            className="relative"
            onMouseEnter={() => setBranchesOpen(true)}
            onMouseLeave={() => setBranchesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setBranchesOpen((prev) => !prev)}
              aria-expanded={branchesOpen}
              aria-haspopup="true"
              className="inline-flex items-center gap-2 bg-[#001e40] text-white text-xs font-mono-tech uppercase tracking-wider px-4 py-2.5 rounded hover:bg-[#003366] transition-all shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-[#77d1ff]" />
              <span>Branches</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#77d1ff] transition-transform duration-200 ${
                  branchesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {branchesOpen && (
              <div className="absolute right-0 top-full pt-2 w-72 z-50">
                <div className="bg-white border border-[#c3c6d1] rounded shadow-xl overflow-hidden">
                  <div className="px-3.5 py-2 bg-[#f7f9fb] border-b border-[#e0e3e5] text-[10px] font-mono-tech uppercase tracking-widest text-[#006688] font-bold">
                    Select Office Location
                  </div>

                  <div className="p-1.5 space-y-1">
                    <a
                      href="#kolkata-hq"
                      onClick={(e) => handleLinkClick(e, 'contact', 'kolkata-hq')}
                      className="w-full flex items-start gap-3 p-2.5 rounded hover:bg-[#f0f7fa] border border-transparent hover:border-[#006688]/25 transition-colors group"
                    >
                      <div className="p-1.5 rounded bg-[#001e40] text-[#77d1ff] shrink-0 mt-0.5">
                        <Building2 className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-display font-bold text-xs text-[#001e40] group-hover:text-[#006688]">
                            Kolkata (HQ)
                          </span>
                          <span className="text-[9px] font-mono-tech uppercase px-1.5 py-0.5 rounded bg-[#eef7fb] text-[#006688] font-bold">
                            EAST HQ
                          </span>
                        </div>
                        <span className="block text-[11px] font-body text-[#43474f] truncate mt-0.5">
                          Uttarpara, West Bengal
                        </span>
                      </div>
                    </a>

                    <a
                      href="#expansion"
                      onClick={(e) => handleLinkClick(e, 'expansion')}
                      className="w-full flex items-start gap-3 p-2.5 rounded hover:bg-[#f0f7fa] border border-transparent hover:border-[#006688]/25 transition-colors group"
                    >
                      <div className="p-1.5 rounded bg-[#006688] text-white shrink-0 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-display font-bold text-xs text-[#001e40] group-hover:text-[#006688]">
                            Maharashtra Branch
                          </span>
                          <span className="text-[9px] font-mono-tech uppercase px-1.5 py-0.5 rounded bg-[#001e40] text-[#77d1ff] font-bold">
                            WEST HUB
                          </span>
                        </div>
                        <span className="block text-[11px] font-body text-[#43474f] truncate mt-0.5">
                          Chh. Sambhajinagar (MH)
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenBrochure}
            className="p-2 text-[#006688] bg-[#f2f4f6] rounded border border-[#c3c6d1]"
            aria-label="Brochure"
          >
            <FileText className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-[#001e40] hover:bg-[#f2f4f6] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#c3c6d1] shadow-xl px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-[#e0e3e5]">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#006688]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Kolkata HQ & Maharashtra Hub</span>
            </div>
            <div className="text-xs font-mono-tech font-bold text-[#001e40]">
              AUTH: CARRIER / HITACHI
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.section;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.section)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-2.5 text-sm font-medium rounded border font-display transition-colors ${
                    isActive
                      ? 'bg-[#001e40] text-white border-[#001e40] font-semibold'
                      : 'text-[#191c1e] bg-[#f7f9fb] hover:bg-[#e0e3e5] border-[#c3c6d1]/40'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#kolkata-hq"
                onClick={(e) => handleLinkClick(e, 'contact', 'kolkata-hq')}
                className="flex items-center justify-center gap-1.5 bg-[#001e40] text-white py-2.5 px-3 rounded text-xs font-mono-tech font-semibold"
              >
                <Building2 className="w-3.5 h-3.5 text-[#77d1ff]" />
                <span>Kolkata (HQ)</span>
              </a>
              <a
                href="#expansion"
                onClick={(e) => handleLinkClick(e, 'expansion')}
                className="flex items-center justify-center gap-1.5 bg-[#006688] text-white py-2.5 px-3 rounded text-xs font-mono-tech font-semibold"
              >
                <MapPin className="w-3.5 h-3.5 text-[#77d1ff]" />
                <span>Maharashtra Branch</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrochure();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#f2f4f6] text-[#006688] border border-[#006688]/30 py-3 rounded text-xs font-mono-tech font-semibold"
            >
              <FileText className="w-4 h-4" />
              VIEW COMPANY BROCHURE (2 PAGES)
            </button>

            <a
              href="tel:+918804907777"
              className="w-full flex items-center justify-center gap-2 bg-[#001e40] text-white py-3 rounded text-xs font-mono-tech font-semibold"
            >
              <Phone className="w-4 h-4 text-[#77d1ff]" />
              CALL DIRECT LINE: +91 8804907777
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
