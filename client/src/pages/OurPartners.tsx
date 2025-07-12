import React from 'react';
import ImageSlider from '../components/ui/ImageSlider';
import Button from '../components/ui/Button';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import StatsCard from '../components/ui/StatsCard';
import HeroStatsSection from '../components/ui/HeroStatsSection';
import { Sparkles } from 'lucide-react';

const Partners: React.FC = () => {
  const partners = {
    corporate: [
      { name: "Corporate Partner 1", logo: null },
      { name: "Corporate Partner 2", logo: null },
      { name: "Corporate Partner 3", logo: null },
      { name: "Corporate Partner 4", logo: null },
      { name: "Corporate Partner 5", logo: null },
      { name: "Corporate Partner 6", logo: null }
    ],
    ngo: [
      { name: "NGO Partner 1", logo: null },
      { name: "NGO Partner 2", logo: null },
      { name: "NGO Partner 3", logo: null },
      { name: "NGO Partner 4", logo: null }
    ],
    government: [
      { name: "Government Partner 1", logo: null },
      { name: "Government Partner 2", logo: null },
      { name: "Government Partner 3", logo: null }
    ]
  };

  const PartnerSection: React.FC<{
    title: string;
    partners: Array<{ name: string; logo: string | null }>;
    description: string;
    accent: string;
  }> = ({ title, partners, description, accent }) => (
    <section className="mb-20">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Section Header */}
        <div className={`${accent} px-8 py-6 relative`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">
              {title}
            </h2>
            <p className="text-white/90 text-center max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-warm-light-blue/20 to-warm-light-blue/5 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-warm-light-blue/20"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-blue/5 to-fresh-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <div className="relative">
                      <ImagePlaceholder 
                        text={partner.name} 
                        width="160px" 
                        height="100px" 
                        className="rounded-lg shadow-md border border-warm-light-blue/30"
                      />
                      {/* Decorative corner */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-fresh-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-gray group-hover:text-primary-blue transition-colors duration-300">
                    {partner.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="container mx-auto px-4 py-12 mt-24">
      {/* Hero Section */}
      <HeroStatsSection
        title={<><span>Building Tomorrow</span><span className="block text-warm-light-blue">Together</span></>}
        subtitle={"Collaborating with industry leaders, innovative NGOs, and forward-thinking government agencies to create meaningful change and sustainable impact across communities."}
        stats={[]}
        badge={<span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-white text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">Strategic Partnerships</span>}
        backgroundClassName="bg-gradient-to-br from-primary-blue via-primary-blue to-blue-800"
        overlayClassName="bg-black bg-opacity-10"
        className="rounded-2xl mb-6 py-2 px-1"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
          <a href="/milestones">
            <Button className="px-8 py-4 text-lg font-semibold bg-fresh-green text-white">
              View Our Impact
            </Button>
          </a>
          <a href="/getinvolved">
            <Button className="px-8 py-4 text-lg font-semibold bg-fresh-green text-white">
              Join Our Network
            </Button>
          </a>
        </div>
      </HeroStatsSection>

      {/* Partnership Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <StatsCard count="50+" label="Active Partners" />
        <StatsCard count="15+" label="Countries Reached" />
        <StatsCard count="1M+" label="Lives Impacted" />
      </div>

      {/* Corporate Partners */}
      <PartnerSection
        title="Corporate Partners"
        partners={partners.corporate}
        description="Leading corporations that support our mission through CSR initiatives, employee volunteering, and strategic partnerships."
        accent="bg-gradient-to-r from-primary-blue to-blue-600"
      />

      {/* NGO Partners */}
      <PartnerSection
        title="NGO Partners"
        partners={partners.ngo}
        description="Non-profit organizations working alongside us to amplify our impact and reach more communities in need."
        accent="bg-gradient-to-r from-fresh-green to-green-600"
      />

      {/* Government Partners */}
      <PartnerSection
        title="Government Partners"
        partners={partners.government}
        description="Government agencies and departments that collaborate with us to implement social welfare programs and initiatives."
        accent="bg-gradient-to-r from-dark-gray to-gray-600"
      />
    </div>
  );
};

export default Partners;