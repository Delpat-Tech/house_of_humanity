import React from 'react';

const Sitaare = () => {
  return (
    <section className="px-6 py-12 bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">A Home Beyond Shelter</h2>
        <p className="text-sm text-center uppercase tracking-widest text-gray-500">P R E S E N T S</p>
        
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Project Sitaare</h3>
            <p className="mb-4">
              Project Sitaare is a one-of-a-kind orphanage and shelter home for girls aged 6 to 18. 
              More than just shelter—it’s a place where dreams take flight. With full education, safety, 
              and holistic development, it's the most empowering space for girls in Gujarat.
            </p>

            <h4 className="text-xl font-semibold mt-6">Why Project Sitaare?</h4>
            <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
              <li>Full school support, digital literacy, and career guidance</li>
              <li>Nutritious meals, healthcare & emotional well-being</li>
              <li>Vocational training, sports & self-defense</li>
              <li>Safe and nurturing home environment</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
            <p className="mb-4 italic">
              A world where every girl can dream, learn, and succeed—regardless of her past.
            </p>

            <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
            <p className="mb-4">
              To empower orphaned girls with the tools to become strong, independent women who
              make a positive difference in the world.
            </p>

            <h4 className="text-xl font-semibold mb-2">Impact Goals</h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Safe, loving home for 30+ girls</li>
              <li>100% education and career readiness</li>
              <li>Financial independence through life skills</li>
              <li>Foster confidence and belief in self</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h5 className="font-semibold mb-2">Corporate CSR</h5>
            <p className="text-sm">
              Support infrastructure, sponsor learning programs, provide internships, mentorships, and career guidance.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h5 className="font-semibold mb-2">Individual Giving</h5>
            <p className="text-sm">
              Sponsor a child’s education, healthcare, or donate hygiene kits, meals, and essentials.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h5 className="font-semibold mb-2">Volunteer Opportunities</h5>
            <p className="text-sm">
              Mentor, teach, or run workshops—help girls explore digital skills, arts, and STEM. Even virtual adoption is possible.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="mb-4 font-medium">
            With just ₹11,551/month, you can virtually adopt a child and provide:
            <br />
            <span className="italic text-gray-600 text-sm">Education • Meals • Healthcare • Life Skills</span>
          </p>
          <a
            href="https://sitaare.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Learn More on Sitaare.org
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sitaare;
