import React from 'react';
import {
  HeartHandshake,
  Umbrella,
  Accessibility,
  Eye,
  Ambulance,
  SunSnow
} from 'lucide-react';

export const SocialResponsibility: React.FC = () => {
  const initiatives = [
    {
      icon: <SunSnow className="w-4 h-4 text-[#77d1ff]" />,
      title: 'Winter Blanket Distribution',
      detail: 'Annual winter support for underprivileged and needy individuals.',
    },
    {
      icon: <Umbrella className="w-4 h-4 text-[#77d1ff]" />,
      title: 'Summer & Monsoon Umbrella Aid',
      detail: 'Protection from harsh summer sun and seasonal monsoon rains.',
    },
    {
      icon: <Accessibility className="w-4 h-4 text-[#77d1ff]" />,
      title: 'Wheelchair Support',
      detail: 'Mobility assistance provided for persons with disabilities.',
    },
    {
      icon: <Eye className="w-4 h-4 text-[#77d1ff]" />,
      title: 'Free Eye Check-Up Camps',
      detail: 'Community vision screening and preventive eye care initiatives.',
    },
    {
      icon: <Ambulance className="w-4 h-4 text-[#77d1ff]" />,
      title: 'Free Ambulance Services',
      detail: 'Operated twice a month for Below Poverty Line (BPL) families.',
    },
  ];

  return (
    <section
      id="social-responsibility"
      className="scroll-mt-24 py-24 bg-[#f2f6f9] border-b border-[#c3c6d1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-l-2 border-[#006688] pl-4 sm:pl-6 mb-14">
          <div className="text-xs font-mono-tech uppercase tracking-widest text-[#006688] mb-1 font-semibold">
            COMMUNITY WELFARE &amp; CSR COMMITMENT
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#001e40] tracking-tight">
            Our Social Responsibility
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Full Verbatim Statement (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#c3c6d1] rounded-sm p-6 sm:p-10 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-5 font-body text-[#191c1e] text-base sm:text-[17px] leading-relaxed">
              <p>
                At Air Q Solutions, we believe that business growth and social responsibility must go hand in hand. While remaining committed to our economic values and delivering quality air conditioning solutions, we recognise our responsibility towards society and the communities we serve.
              </p>

              <p>
                As part of our annual social initiatives, we support underprivileged and needy individuals through the distribution of blankets during winter, umbrellas for protection from the summer sun and monsoon rains, and wheelchairs for persons with disabilities. We also organise free eye check-up camps and provide free ambulance services twice a month for people belonging to Below Poverty Line (BPL) families, along with other welfare activities.
              </p>

              <p className="p-5 bg-[#f7f9fb] border-l-4 border-[#006688] rounded-r text-[#001e40] font-medium">
                We believe that true success is measured not only by economic growth but also by the positive difference we make in people&apos;s lives. We remain committed to growing as a responsible business while contributing meaningfully to the well-being of society.
              </p>
            </div>

            <div className="pt-4 border-t border-[#e0e3e5] flex items-center gap-2 text-xs font-mono-tech text-[#006688] font-semibold">
              <HeartHandshake className="w-4 h-4 shrink-0" />
              <span>RESPONSIBLE GROWTH • COMMUNITY WELL-BEING</span>
            </div>
          </div>

          {/* Right Column: Annual Social Initiatives Highlights (5 Cols) */}
          <div className="lg:col-span-5 bg-[#001e40] text-white border border-[#002b55] rounded-sm p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
                <span className="font-mono-tech text-xs text-[#77d1ff] uppercase tracking-wider font-bold">
                  ANNUAL WELFARE INITIATIVES
                </span>
                <HeartHandshake className="w-5 h-5 text-[#77d1ff]" />
              </div>

              <div className="space-y-4">
                {initiatives.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 p-3 rounded bg-white/5 border border-white/10"
                  >
                    <div className="p-2 rounded bg-[#006688]/40 border border-[#77d1ff]/25 shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-white">
                        {item.title}
                      </h3>
                      <p className="font-body text-xs text-[#d5e3ff] mt-0.5 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/15 text-[11px] font-mono-tech text-[#c2e8ff]">
              Dedicated to serving BPL families &amp; local communities year-round
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
