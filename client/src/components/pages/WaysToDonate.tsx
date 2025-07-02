import React from 'react';

interface DonationItem {
  title: string;
  desc: string;
  img: string;
}

const donations: DonationItem[] = [
  {
    title: 'Custom Donation',
    desc: 'No matter the amount, become a champion for women’s empowerment.',
    img: '/assets/ways/w1.jpg',
  },
  {
    title: 'Donate in Cryptocurrency',
    desc: 'Donating cryptocurrency is a non-taxable event, meaning you can deduct it on your taxes. We use GivingBlock to help us accept coins!',
    img: '/assets/ways/w2.jpg',
  },
  {
    title: 'Invest in Transforming Lives',
    desc: 'Empower the livelihood of women to gain new skills and excel in entrepreneurship.',
    img: '/assets/ways/w3.jpg',
  },
  {
    title: 'Support Menstrual Equity',
    desc: 'Whether it’s pad distribution, hygiene education, or eradicating stigma, become a crucial part in our menstrual equity initiative.',
    img: '/assets/ways/w4.jpg',
  },
  {
    title: 'Ensure Access to Life-saving Healthcare',
    desc: 'Your investment can provide accessible healthcare to thousands in underserved areas.',
    img: '/assets/ways/w5.jpg',
  },
  {
    title: 'Empower Women: Give Monthly!',
    desc: 'Champion gender equality through your support every month.',
    img: '/assets/ways/w6.jpg',
  },
  {
    title: 'Support Skills Training',
    desc: 'Help women learn employable skills like tailoring and computing by supporting training programs.',
    img: '/assets/ways/w7.jpg',
  },
];

const WaysToDonate: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-12">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10 tracking-wide">
        WAYS YOU CAN DONATE
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {donations.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-[0_8px_8px_rgba(0,0,0,0.1)] border-b-4"
            style={{ borderBottomColor: '#D5006E' }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-center text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 text-center mb-4">{item.desc}</p>
              <div className="text-center">
                <a
                  href="https://thegivingblock.com/donate/desai-foundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-[#D5006E] text-white border border-[#D5006E] px-6 py-2 text-sm font-semibold transition hover:bg-white hover:text-blue-500 hover:border-blue-400"
                >
                  DONATE &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WaysToDonate;
