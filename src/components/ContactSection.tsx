import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/hvacData';
import { AirQWordmark } from './BrandLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Building2, 
  Clock, 
  ShieldCheck,
  FileText
} from 'lucide-react';

interface ContactSectionProps {
  initialInquiry?: {
    area?: number;
    spaceType?: string;
    estimatedTR?: number;
    estimatedHP?: number;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialInquiry }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    city: '',
    serviceType: 'VRF System Project Execution',
    region: 'East Region (HQ)' as 'East Region (HQ)' | 'West Region (Chhatrapati Sambhajinagar)' | 'PAN India / Other',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState('');

  const INQUIRY_RECIPIENTS = 'aqs.ac.br@gmail.com,amalroy.arc@gmail.com';

  const buildInquiryMailtoUrl = (data: typeof formData) => {
    const subject = `HVAC Technical Proposal Inquiry - ${data.organization || data.name} (${data.city || 'India'})`;
    const body = [
      `Technical Proposal & Site Inquiry Details`,
      `----------------------------------------`,
      `Name: ${data.name}`,
      `Company / Organization: ${data.organization}`,
      `Phone Number: ${data.phone}`,
      `Email Address: ${data.email}`,
      `Project Location / City: ${data.city}`,
      `Preferred Region Hub: ${data.region}`,
      `Service / Equipment Required: ${data.serviceType}`,
      ``,
      `Project Scope / Specific Requirements:`,
      `${data.message || 'N/A'}`,
    ].join('\n');

    return `mailto:${INQUIRY_RECIPIENTS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  useEffect(() => {
    if (initialInquiry) {
      setFormData(prev => ({
        ...prev,
        message: `Estimated Project Specs: Space: ${initialInquiry.spaceType || 'Commercial'}, Area: ${initialInquiry.area || ''} sq.ft, Estimated Load: ${initialInquiry.estimatedTR || ''} TR / ${initialInquiry.estimatedHP || ''} HP. Please provide a formal engineering sizing and quote.`,
      }));
    }
  }, [initialInquiry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const mailtoUrl = buildInquiryMailtoUrl(formData);
    setLastMailtoUrl(mailtoUrl);

    // Save local lead history
    try {
      const inquiries = JSON.parse(localStorage.getItem('airq_inquiries') || '[]');
      inquiries.push({
        ...formData,
        recipients: ['aqs.ac.br@gmail.com', 'amalroy.arc@gmail.com'],
        date: new Date().toISOString(),
      });
      localStorage.setItem('airq_inquiries', JSON.stringify(inquiries));
    } catch (err) {
      // ignore
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Launch email client pre-addressed to aqs.ac.br@gmail.com & amalroy.arc@gmail.com
      window.location.href = mailtoUrl;
    }, 400);
  };

  return (
    <section id="contact" className="pt-28 pb-24 bg-white border-b border-[#c3c6d1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-l-2 border-[#006688] pl-4 sm:pl-6 mb-16">
          <div className="text-xs font-mono-tech uppercase tracking-widest text-[#006688] mb-1 font-semibold">
            TECHNICAL CONSULTATION & SITE INQUIRIES
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#001e40] tracking-tight flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span>Connect with</span>
            <AirQWordmark inline className="h-[0.76em] text-[#4a4d52]" />
          </h2>
          <p className="font-body text-[#43474f] text-base sm:text-lg max-w-3xl mt-2">
            Speak directly with our senior HVAC project engineers for site visits, thermal load calculations, project execution, or authorized Carrier & Hitachi systems.
          </p>
        </div>

        {/* 2-Column Layout: Direct Telemetry Cards & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Office Locations & Hotlines (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Line High Impact Banner */}
            <div className="bg-[#001e40] text-white p-6 rounded-sm shadow-md blueprint-grid">
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <span className="text-xs font-mono-tech text-[#77d1ff] tracking-wider uppercase font-bold">
                  DIRECT CONSULTATION HOTLINE
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </div>

              <div className="mt-4">
                <div className="text-xs text-white/70 font-mono-tech">CENTRAL DIRECT LINE:</div>
                <a 
                  href="tel:+919748441750"
                  className="font-display font-extrabold text-2xl sm:text-3xl text-white hover:text-[#77d1ff] transition-colors block mt-0.5 tracking-tight"
                >
                  +91 9748441750
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                <a
                  href={`https://wa.me/9748441750?text=${encodeURIComponent("Hello AIR Q SOLUTIONS team, I would like to inquire about HVAC engineering and project execution.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono-tech px-4 py-2 rounded flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <a
                  href="mailto:amalroy.arc@gmail.com,aqs.ac.br@gmail.com"
                  className="bg-white/10 hover:bg-white/20 text-white text-xs font-mono-tech px-3.5 py-2 rounded flex items-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#77d1ff]" />
                  <span>Email Team</span>
                </a>
              </div>
            </div>

            {/* Registered Office: East Region HQ */}
            <div id="kolkata-hq" className="scroll-mt-28 bg-[#f7f9fb] border border-[#c3c6d1] p-6 rounded-sm space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#006688] shrink-0" />
                  <div className="relative group/loc inline-block">
                    <a
                      href="https://maps.app.goo.gl/sN62tVW1VJmqoip2A"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="For location, click here."
                      className="font-display font-bold text-sm text-[#001e40] hover:text-[#006688] underline decoration-[#006688]/40 underline-offset-4 hover:decoration-[#006688] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Registered Office (East Region HQ)</span>
                      <MapPin className="w-3.5 h-3.5 text-[#006688] shrink-0" />
                    </a>
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute left-0 bottom-full mb-2 whitespace-nowrap bg-[#001e40] text-white text-[11px] font-mono-tech px-2.5 py-1 rounded shadow-lg opacity-0 translate-y-1 group-hover/loc:opacity-100 group-hover/loc:translate-y-0 transition-all z-20 border border-white/15"
                    >
                      For location, click here.
                    </span>
                  </div>
                </div>
                <span className="font-mono-tech text-[10px] bg-white text-[#006688] px-2 py-0.5 rounded border border-[#c3c6d1] shrink-0">
                  WEST BENGAL
                </span>
              </div>

              <p className="text-xs text-[#43474f] font-body">
                {COMPANY_INFO.registeredOffice.address}
              </p>

              <div className="pt-2 border-t border-[#e0e3e5] flex flex-wrap items-start justify-between text-xs font-mono-tech text-[#001e40]">
                <span>EAST HOTLINE:</span>
                <div className="text-right space-y-1">
                  <a href={`tel:${COMPANY_INFO.eastPhone}`} className="font-bold text-[#006688] hover:underline block">
                    {COMPANY_INFO.eastPhone}
                  </a>
                  <a href="tel:+918017507442" className="font-bold text-[#006688] hover:underline block">
                    +91 8017507442
                  </a>
                </div>
              </div>
            </div>

            {/* Branch Office: West Region (Chhatrapati Sambhajinagar) */}
            <div className="bg-[#f7f9fb] border border-[#c3c6d1] p-6 rounded-sm space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#006688] shrink-0" />
                  <div className="relative group/loc inline-block">
                    <a
                      href="https://maps.app.goo.gl/BgmPxbqGgcvBFWdQ9"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="For location, click here."
                      className="font-display font-bold text-sm text-[#001e40] hover:text-[#006688] underline decoration-[#006688]/40 underline-offset-4 hover:decoration-[#006688] inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Dedicated Branch (West Region)</span>
                      <MapPin className="w-3.5 h-3.5 text-[#006688] shrink-0" />
                    </a>
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute left-0 bottom-full mb-2 whitespace-nowrap bg-[#001e40] text-white text-[11px] font-mono-tech px-2.5 py-1 rounded shadow-lg opacity-0 translate-y-1 group-hover/loc:opacity-100 group-hover/loc:translate-y-0 transition-all z-20 border border-white/15"
                    >
                      For location, click here.
                    </span>
                  </div>
                </div>
                <span className="font-mono-tech text-[10px] bg-white text-[#006688] px-2 py-0.5 rounded border border-[#c3c6d1] shrink-0">
                  MAHARASHTRA
                </span>
              </div>

              <p className="text-xs text-[#43474f] font-body">
                "Biz Square", Shop no. 5, Gut no. 58, Satara- Beed Bypass, Chh. Sambhajinagar (MH)- 431001
              </p>

              <div className="text-[11px] font-mono-tech text-[#737780]">
                Coordinates: 19.8762° N, 75.3433° E
              </div>

              <div className="pt-2 border-t border-[#e0e3e5] flex flex-wrap items-center justify-between text-xs font-mono-tech text-[#001e40]">
                <span>WEST HOTLINE:</span>
                <a href={`tel:${COMPANY_INFO.westPhone}`} className="font-bold text-[#006688] hover:underline">
                  {COMPANY_INFO.westPhone}
                </a>
              </div>
            </div>

            {/* Official Email Channels */}
            <div className="bg-[#f7f9fb] border border-[#c3c6d1] p-4 rounded-sm flex items-center justify-between text-xs font-mono-tech text-[#43474f]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#006688]" />
                <span>OFFICIAL EMAILS:</span>
              </div>
              <div className="text-right">
                <a href="mailto:amalroy.arc@gmail.com" className="text-[#001e40] font-bold block hover:underline">
                  amalroy.arc@gmail.com
                </a>
                <a href="mailto:aqs.ac.br@gmail.com" className="text-[#001e40] font-bold block hover:underline">
                  aqs.ac.br@gmail.com
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Project Sizing & Consultation Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#c3c6d1] p-6 sm:p-8 rounded-sm shadow-sm">
            <div className="pb-4 border-b border-[#e0e3e5] mb-6">
              <span className="font-mono-tech text-xs text-[#006688] font-bold uppercase tracking-wider">
                INQUIRY & PROPOSAL DISPATCH
              </span>
              <h3 className="font-display font-bold text-2xl text-[#001e40]">
                Request Technical Proposal
              </h3>
              <p className="text-xs text-[#43474f] font-body mt-1">
                Fill out your project specifications for an initial sizing assessment and equipment quotation. Inquiries are addressed to{' '}
                <span className="font-mono-tech font-semibold text-[#001e40]">aqs.ac.br@gmail.com</span> and{' '}
                <span className="font-mono-tech font-semibold text-[#001e40]">amalroy.arc@gmail.com</span>.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#f2f4f6] border border-[#006688] rounded text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-display font-bold text-xl text-[#001e40]">
                  Inquiry Dispatched Successfully
                </h4>
                <p className="text-xs text-[#43474f] max-w-md mx-auto font-body">
                  Thank you for reaching out to <AirQWordmark inline className="h-[0.88em] text-[#4a4d52] mx-1" />. Your inquiry has been prepared for{' '}
                  <strong className="text-[#001e40]">aqs.ac.br@gmail.com</strong> and{' '}
                  <strong className="text-[#001e40]">amalroy.arc@gmail.com</strong>.
                </p>
                <div className="pt-2 flex flex-col items-center gap-3">
                  {lastMailtoUrl && (
                    <a
                      href={lastMailtoUrl}
                      className="inline-flex items-center gap-2 bg-[#001e40] hover:bg-[#006688] text-white text-xs font-mono-tech uppercase tracking-wider px-4 py-2.5 rounded transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#77d1ff]" />
                      <span>Open Email Client (aqs.ac.br@gmail.com &amp; amalroy.arc@gmail.com)</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono-tech text-[#006688] underline uppercase"
                  >
                    Submit Another Technical Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase text-[#001e40] font-bold mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Er. Rajiv Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#f7f9fb] border border-[#c3c6d1] text-xs font-body p-3 rounded text-[#001e40] focus:outline-none focus:border-[#006688]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech uppercase text-[#001e40] font-bold mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Hospital / Infrastructure"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-[#f7f9fb] border border-[#c3c6d1] text-xs font-body p-3 rounded text-[#001e40] focus:outline-none focus:border-[#006688]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase text-[#001e40] font-bold mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#f7f9fb] border border-[#c3c6d1] text-xs font-body p-3 rounded text-[#001e40] focus:outline-none focus:border-[#006688]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech uppercase text-[#001e40] font-bold mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#f7f9fb] border border-[#c3c6d1] text-xs font-body p-3 rounded text-[#001e40] focus:outline-none focus:border-[#006688]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase text-[#001e40] font-bold mb-1.5">
                      Project Location / City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kolkata / Sambhajinagar / Pune"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#f7f9fb] border border-[#c3c6d1] text-xs font-body p-3 rounded text-[#001e40] focus:outline-none focus:border-[#006688]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech uppercase text-[#001e40] font-bold mb-1.5">
                      Preferred Region Hub
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value as any })}
                      className="w-full bg-[#f7f9fb] border border-[#c3c6d1] text-xs font-mono-tech p-3 rounded text-[#001e40] focus:outline-none focus:border-[#006688]"
                    >
                      <option value="East Region (HQ)">East Region HQ (Kolkata & East)</option>
                      <option value="West Region (Chhatrapati Sambhajinagar)">West Region (Maharashtra Hub)</option>
                      <option value="PAN India / Other">Other / PAN India</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-[#001e40] font-bold mb-1.5">
                    Service / Equipment Required
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-[#f7f9fb] border border-[#c3c6d1] text-xs font-mono-tech p-3 rounded text-[#001e40] focus:outline-none focus:border-[#006688]"
                  >
                    <option value="VRF System Project Execution">VRF System Project Execution (Carrier / Hitachi)</option>
                    <option value="Commercial Ductable Air-Conditioning">Commercial Ductable Air-Conditioning</option>
                    <option value="Packaged AC Units & Plant Ventilation">Packaged AC Units & Plant Ventilation</option>
                    <option value="Hospital / Cleanroom Precision Cooling">Hospital / Cleanroom Precision Cooling</option>
                    <option value="After Sales Service / Maintenance / OEM Spares">After Sales Service / Maintenance / OEM Spares</option>
                    <option value="Bosch Hydronics / Thermal Systems">Bosch Hydronics / Thermal Systems</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-[#001e40] font-bold mb-1.5">
                    Project Scope / Specific Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe building layout, carpet area (sq. ft.), expected occupancy, or existing chiller/VRF retrofit details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#f7f9fb] border border-[#c3c6d1] text-xs font-body p-3 rounded text-[#001e40] focus:outline-none focus:border-[#006688]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#001e40] hover:bg-[#006688] text-white py-3.5 rounded text-xs font-mono-tech uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  {loading ? (
                    <span>Transmitting Data...</span>
                  ) : (
                    <>
                      <span>Transmit Engineering Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
