import React, { useEffect, useState } from "react";
import { Volunteer } from "../types";

const founders = [
  {
    name: "Harsh Rao",
    title: "Founder",
    img: "/images/founder.jpg",
    intro: `The journey of the House of Humanity Charitable Trust started with a simple desire—to make a difference in the lives of those who needed it most. I, Harsh Rao, born on 9th December 1996, pursued Electronics and Communication Engineering, followed by a Master's in Human Resource Management. Before founding this NGO, I was actively engaged with various NGOs in Vadodara, learning the importance of compassion, action, and community.\n\nWhen we first began, this NGO was a small, informal initiative—created with a sense of purpose, yet driven by the joy of helping others. However, life took an unexpected turn in 2020, during the initial phase of our NGO, when I was diagnosed with Ewing's Sarcoma, a rare and aggressive cancer. It was during this deeply challenging time that I discovered a renewed sense of purpose.\n\nThis experience shifted my vision for the House of Humanity. What started as a modest effort has now grown into a mission much larger than any individual—a mission that has inspired me to work towards creating a Cancer Wellness Center for those facing the battles I have faced. The idea of offering support, care, and hope to cancer patients became the cornerstone of our organization.\n\nBut my role in this organization doesn't stop with the vision. As the founder, I am committed to overseeing all the activities of the NGO. From ensuring the smooth execution of our projects to fostering engagement with our volunteers, partners, and communities, I remain deeply involved in every aspect of the organization. I believe that building strong relationships with the people we serve and those who support our mission is key to driving meaningful change.\n\nBeyond the Cancer wellness center, another dream close to my heart is to open an orphanage, one that is more than just a shelter but a place of boundless possibility. I envision an orphanage where children are not just cared for, but where they are empowered to dream big. Whether they aspire to be doctors, lawyers, artists, or even models, this orphanage will provide them with the resources, education, and mentorship they need to pursue their goals. I want every child to see this space as a launchpad for their dreams—a place where their potential is nurtured and where every aspiration, no matter how grand, is encouraged and supported.\n\nThis orphanage will be a unique environment that goes beyond traditional care, aiming to cultivate ambition, resilience, and self-belief. It will be a home where every dream is valid, and every child is given the tools to succeed in whatever they choose. I believe that with the right support, every child, regardless of their background, can reach incredible heights. This vision is not just about providing care; it's about creating future leaders, innovators, and changemakers.\n\nMy work involves not just administration but staying connected with the very heartbeat of the organization—our team of passionate volunteers, supporters, and beneficiaries. Every day, I strive to ensure that our values of compassion, integrity, and service remain at the forefront of everything we do. Whether it's mobilizing resources for hunger relief, health and hygiene programs, or advocating for women's empowerment, I'm committed to leading our organization with empathy and determination.\n\nThe House of Humanity Charitable Trust is not just my vision—it belongs to everyone who believes in the power of community and humanity. Together, we are creating a future where people can live with dignity, have access to opportunities, and most importantly, find hope in the face of adversity.\n\nThank you for standing by us on this incredible journey. Your belief in our mission fuels our drive to reach even greater height`,
  },
  {
    name: "Manthan Shah",
    title: "Co-Founder",
    img: "/images/cofounder.jpg",
    intro: `Dear Supporters,\n\nIt has always been my belief that true harmony in society can only be achieved when we work together to uplift those in need. I, Manthan Shah, born on 13th June 1997, completed my Master's in Commerce (M.Com). Over the years, I have developed a deep passion for creating social impact, particularly through leveraging the potential of urban development and corporate social responsibility (CSR) initiatives.\n\nWhen we first began the House of Humanity Charitable Trust, it was a vision rooted in compassion and action. Today, our work spans several key areas—from hunger eradication and education to women's empowerment and healthcare access. As co-founder, my primary focus has been on tapping into CSR funding and partnerships to fuel these projects and expand our reach. I strongly believe that urban areas hold immense potential to drive resources and create sustainable change, and my goal is to channel those resources to where they are needed most.\n\nMy dream is to make CSR initiatives a powerful force for good by aligning corporate efforts with meaningful, community-driven projects. Through collaboration, I see endless possibilities to create employment opportunities, improve living conditions, and bring about positive change in urban environments. By doing so, we can bridge the gap between corporate responsibility and grassroots impact.\n\nWorking alongside Harsh Rao and our dedicated team, I am committed to ensuring that the House of Humanity grows into a beacon of hope and empowerment for all. Our aim is not just to provide aid but to create opportunities for growth and self-sufficiency, helping individuals and families break the cycle of poverty.\n\nThis journey has been incredibly fulfilling, and it wouldn't be possible without the support of people like you. Your involvement, whether through time, resources, or advocacy, enables us to push forward and make lasting change in the lives of those who need it most.\n\nThank you for being part of this mission. Together, we can build a future where every individual has the chance to thrive.`,
  },
];

const baseVolunteers: Volunteer[] = [
  {
    name: "Aarav",
    img: "/images/person.png",
    intro: "Loves teaching kids.",
  },
  {
    name: "Priya",
    img: "/images/person.png",
    intro: "Community health advocate.",
  },
  {
    name: "Rohan",
    img: "/images/person.png",
    intro: "Sports and youth mentor.",
  },
  {
    name: "Simran",
    img: "/images/person.png",
    intro: "Nutrition and wellness lead.",
  },
];
const allVolunteers: Volunteer[] = Array.from({ length: 160 }).map((_, i) => {
  const v = baseVolunteers[i % baseVolunteers.length];
  return {
    name: v.name + " " + (Math.floor(i / baseVolunteers.length) + 1),
    img: v.img,
    intro: v.intro,
  };
});
const collageVolunteers = allVolunteers.slice(0, 24);

const OurTeam = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-off-white min-h-screen pt-0">
      {/* Hero Section - match AboutUs */}
      <section className="relative overflow-hidden bg-warm-light-blue dark:bg-gray-800 py-20 px-4 md:px-0 flex flex-col items-center text-center">
        {/* Animated gradient blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-blue opacity-20 rounded-full filter blur-3xl animate-pulse-slow z-0" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-fresh-green opacity-20 rounded-full filter blur-2xl animate-pulse-slower z-0" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-primary-blue opacity-10 rounded-full filter blur-2xl animate-pulse-slow z-0" />
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="pt-16 text-4xl md:text-5xl font-extrabold text-primary-blue mb-4 header-font drop-shadow-sm">Meet Our Team</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-dark-gray dark:text-gray-200 mb-6 font-medium">
            The heart and soul of House of Humanity—our dedicated founders, passionate volunteers, and everyone who makes our mission possible.
          </p>
        </div>
      </section>
      {/* Founders Desk */}
      <section className="max-w-5xl mx-auto py-16 px-4 md:px-0 pt-32">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-10 header-font text-center">
          Founders Desk
        </h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch">
          {founders.map((f, idx) => {
            const { ref, isVisible } = useScrollFadeIn();
            return (
              <div
                key={f.name}
                ref={ref}
                className={`flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-fresh-green transition-shadow duration-300 transition-all duration-1000 animate-float-card
                  hover:scale-105 hover:shadow-2xl hover:border-primary-blue ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
              >
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-40 h-40 object-cover rounded-full border-4 border-primary-blue mb-6 shadow-md"
                />
                <h3 className="text-xl font-bold text-primary-blue mb-1">
                  {f.name}
                </h3>
                <span className="text-fresh-green font-semibold mb-4">
                  {f.title}
                </span>
                <p className="text-dark-gray text-sm whitespace-pre-line text-left max-h-64 overflow-y-auto px-2">
                  {f.intro}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Team - Volunteers Collage */}
      <section className="bg-warm-light-blue py-16 px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4 header-font text-center">
          Our Team
        </h2>
        <p className="text-dark-gray text-center mb-8 max-w-2xl mx-auto">
          Meet our passionate volunteers! Here's a glimpse of our team—each card
          represents a story of compassion and impact. Click below to see
          everyone!
        </p>
        <PolaroidCollage volunteers={collageVolunteers} />
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowModal(true)}
            className="btn-primary shadow-lg hover:scale-105 transition-transform"
          >
            See All Volunteers
          </button>
        </div>
        {showModal && (
          <AllVolunteersModal
            volunteers={allVolunteers}
            onClose={() => setShowModal(false)}
          />
        )}
      </section>
      {/* Flip card CSS and polaroid style */}
      <style>{`
        .perspective { perspective: 1200px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .polaroid-card { box-shadow: 0 8px 24px rgba(0,0,0,0.12), 0 1.5px 4px rgba(0,0,0,0.10); border: 4px solid #fff; }
        @keyframes float-card { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-float-card { animation: float-card 5s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

function useScrollFadeIn() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return { ref, isVisible };
}

function PolaroidCollage({ volunteers }: { volunteers: Volunteer[] }) {
  // Each card gets a random rotation and z-index for a dynamic look
  return (
    <div className="relative flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
      {volunteers.map((v, idx) => {
        const rotate = (Math.random() - 0.5) * 10; // -5deg to +5deg
        const z = 10 + Math.floor(Math.random() * 10);
        const { ref, isVisible } = useScrollFadeIn();
        return (
          <FlipCard
            key={idx}
            volunteer={v}
            style={{
              transform: `rotate(${rotate}deg)`,
              zIndex: z,
              position: "relative",
            }}
            refProp={ref}
            visible={isVisible}
          />
        );
      })}
    </div>
  );
}

interface FlipCardProps {
  volunteer: Volunteer;
  style?: React.CSSProperties;
  refProp?: React.Ref<HTMLDivElement>;
  visible?: boolean;
}
function FlipCard({ volunteer, style, refProp, visible }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      ref={refProp}
      className={`perspective w-32 h-40 cursor-pointer transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={style}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onTouchStart={() => setFlipped((f) => !f)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-white polaroid-card rounded-xl flex flex-col items-center justify-center p-2 backface-hidden">
          <img
            src={volunteer.img}
            alt={volunteer.name}
            className="w-16 h-16 object-cover rounded-full border-2 border-primary-blue mb-2"
          />
          <span className="text-primary-blue font-semibold text-xs text-center">
            {volunteer.name}
          </span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 bg-fresh-green polaroid-card rounded-xl flex flex-col items-center justify-center p-2 rotate-y-180 backface-hidden">
          <span className="text-dark-gray font-semibold text-xs mb-1 text-center">
            {volunteer.name}
          </span>
          <span className="text-dark-gray text-xs text-center">
            {volunteer.intro}
          </span>
        </div>
      </div>
    </div>
  );
}

function AllVolunteersModal({
  volunteers,
  onClose,
}: {
  volunteers: Volunteer[];
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-off-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-0 relative">
        {/* Sticky header with close button */}
        <div className="sticky top-0 z-20 bg-off-white flex justify-end items-center px-8 pt-6 pb-2 rounded-t-2xl">
          <button
            onClick={onClose}
            className="bg-white rounded-full shadow text-primary-blue font-bold text-lg w-10 h-10 flex items-center justify-center border border-primary-blue hover:bg-primary-blue hover:text-white transition-colors"
          >
            &times;
          </button>
        </div>
        <h3 className="text-2xl font-bold text-primary-blue mb-6 text-center">
          All Volunteers
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-8 pb-8">
          {volunteers.map((v, idx) => {
            const { ref, isVisible } = useScrollFadeIn();
            return (
              <FlipCard
                key={idx}
                volunteer={v}
                refProp={ref}
                visible={isVisible}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
