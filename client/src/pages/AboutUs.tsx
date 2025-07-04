import React, { useRef, useEffect, useState } from 'react';
import { CheckCircle, Heart, Users, BookOpen, Leaf, Award, UserCheck, Activity, Quote } from 'lucide-react';

const focusAreas = [
  {
    icon: <Leaf className="w-8 h-8 text-fresh-green" />, title: 'Hunger Eradication',
    desc: 'No one should go to bed hungry. We provide nutritious meals and build sustainable food security pathways.'
  },
  {
    icon: <Heart className="w-8 h-8 text-primary-blue" />, title: 'Health, Hygiene & Sanitation',
    desc: 'Access to clean water, healthcare, and hygiene for a life of dignity.'
  },
  {
    icon: <BookOpen className="w-8 h-8 text-fresh-green" />, title: 'Education',
    desc: 'Quality education for all, breaking the cycle of poverty and opening doors to opportunity.'
  },
  {
    icon: <Activity className="w-8 h-8 text-primary-blue" />, title: 'Sports',
    desc: 'Empowering youth through sports—building health, leadership, and confidence.'
  },
  {
    icon: <UserCheck className="w-8 h-8 text-fresh-green" />, title: 'Urban Livelihood',
    desc: 'Skill development, training, and entrepreneurship for sustainable livelihoods.'
  },
  {
    icon: <Award className="w-8 h-8 text-primary-blue" />, title: 'Women Empowerment',
    desc: 'Championing gender equality and supporting women to lead and thrive.'
  },
];

// Custom hook for scroll animation
function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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

const AboutUs = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollFadeIn();
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollFadeIn();
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollFadeIn();
  const { ref: historyRef, isVisible: historyVisible } = useScrollFadeIn();

  return (
    <div className="bg-off-white min-h-screen pt-0">
      {/* Hero Section with animated gradient background */}
      <section ref={heroRef} className={`relative overflow-hidden bg-warm-light-blue py-20 px-4 md:px-0 flex flex-col items-center text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Animated gradient blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-blue opacity-20 rounded-full filter blur-3xl animate-pulse-slow z-0" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-fresh-green opacity-20 rounded-full filter blur-2xl animate-pulse-slower z-0" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-primary-blue opacity-10 rounded-full filter blur-2xl animate-pulse-slow z-0" />
        <div className="relative z-10 flex flex-col items-center w-full">
          <img src="/logo512.png" alt="House of Humanity Logo" className="h-28 w-auto mx-auto mb-8 mt-6 drop-shadow-lg bg-white rounded-full p-2 border-4 border-warm-light-blue" style={{maxWidth:'120px'}} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-blue mb-4 header-font drop-shadow-sm">House of Humanity Charitable Trust</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-dark-gray mb-6 font-medium">
            Building a world where dignity, opportunity, and hope are rights for all. Driven by compassion, we empower communities to thrive—together.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center mt-6">
            <div className="bg-white/80 rounded-xl shadow-lg px-8 py-6 max-w-xs mx-auto border-t-4 border-primary-blue transition-transform duration-500 ease-out animate-fade-in-card hover:scale-105 hover:-translate-y-1 cursor-pointer">
              <h2 className="text-xl font-bold text-primary-blue mb-2">Our Mission</h2>
              <p className="text-dark-gray text-base">To touch lives, offer hope, and work tirelessly for a world where compassion leads the way.</p>
            </div>
            <div className="bg-white/80 rounded-xl shadow-lg px-8 py-6 max-w-xs mx-auto border-t-4 border-fresh-green transition-transform duration-500 ease-out animate-fade-in-card delay-200 hover:scale-105 hover:-translate-y-1 cursor-pointer">
              <h2 className="text-xl font-bold text-fresh-green mb-2">Our Vision</h2>
              <p className="text-dark-gray text-base">A future where no one is left behind, and every person, family, and community can realize their potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote/Testimonial */}
      <section ref={quoteRef} className={`py-8 px-4 md:px-0 flex justify-center transition-all duration-1000 ${quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="bg-white/90 rounded-2xl shadow-lg px-8 py-8 max-w-2xl mx-auto border-l-4 border-primary-blue flex flex-col items-center animate-fade-in-card delay-400 transition-transform duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer">
          <Quote className="w-8 h-8 text-primary-blue mb-2 animate-bounce-slow" />
          <p className="text-xl italic text-dark-gray mb-2">“If not us, then who?”</p>
          <span className="text-fresh-green font-semibold">— Founders, House of Humanity</span>
        </div>
      </section>

      {/* About HoH Section */}
      <section ref={aboutRef} className={`py-16 px-4 md:px-0 max-w-5xl mx-auto transition-all duration-1000 ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 header-font text-center">About HoH</h2>
        <p className="max-w-3xl mx-auto text-lg text-dark-gray mb-10 text-center">
          At House of Humanity, we believe in the power of kindness, solidarity, and sustainable change. We don't just provide aid—we partner with communities, empowering them to break barriers and build brighter futures. Our holistic approach tackles hunger, health, education, and more, ensuring no one is left behind.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {focusAreas.map((area, idx) => (
            <div key={area.title} className="bg-warm-light-blue rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 hover:shadow-xl transition-transform duration-300 group cursor-pointer">
              <div className="mb-2 group-hover:scale-110 transition-transform duration-300">{area.icon}</div>
              <h3 className="mt-2 text-lg font-semibold text-primary-blue mb-2 group-hover:text-fresh-green transition-colors duration-300">{area.title}</h3>
              <p className="text-dark-gray text-sm group-hover:text-primary-blue transition-colors duration-300">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section ref={historyRef} className={`py-16 px-4 md:px-0 bg-white border-t border-warm-light-blue transition-all duration-1000 ${historyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 header-font">Our Story</h2>
            <p className="text-dark-gray text-lg mb-6">
              Born in the darkest days of the COVID-19 pandemic, House of Humanity began as a simple act of feeding 200 people daily. What started as a local effort by two empathetic founders quickly grew into a movement—now over 180 volunteers strong—dedicated to tackling hunger, health, education, and empowerment.
            </p>
            <p className="text-dark-gray text-base mb-4">
              Our journey is about impact: children accessing education, families finding food security, women gaining independence, and communities growing stronger. Every step brings us closer to a world where compassion and opportunity are for everyone.
            </p>
            <p className="text-dark-gray text-base">
              We're still growing, still learning, and still committed to making sure no one is forgotten. Join us as we build a future where kindness and justice lead the way.
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <img src="/public/images/about-placeholder.jpg" alt="Volunteers helping community" className="rounded-2xl shadow-lg w-full max-w-xs mb-6 animate-fade-in" />
            <img src="/public/images/about-team-placeholder.jpg" alt="House of Humanity team" className="rounded-2xl shadow-lg w-full max-w-xs animate-fade-in delay-200" />
          </div>
        </div>
      </section>
      {/* Custom Animations */}
      <style>{`
        @keyframes pulse-slow { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.4; } }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        @keyframes pulse-slower { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.3; } }
        .animate-pulse-slower { animation: pulse-slower 10s ease-in-out infinite; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: none; } }
        .animate-fade-in { animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both; }
        .delay-200 { animation-delay: 0.2s; }
        @keyframes fade-in-card { from { opacity: 0; transform: scale(0.95) translateY(30px);} to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-fade-in-card { animation: fade-in-card 1s cubic-bezier(.4,0,.2,1) both; }
        .delay-400 { animation-delay: 0.4s; }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .animate-bounce-slow { animation: bounce-slow 2.5s infinite; }
      `}</style>
    </div>
  );
};

export default AboutUs; 