import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import ImpactCard from '../components/ui/ImpactCard';
import Card from '../components/ui/Card';
import MediaCard from '../components/ui/MediaCard';
import StatsCard from '../components/ui/StatsCard';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import Button from '../components/ui/Button';
import { useTheme } from '../shared/contexts/ThemeContext';
import { Star, Target } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  experience: string;
  impact: string;
  imageUrl?: string;
}

interface Outcome {
  title: string;
  summary: string;
  imageUrl?: string;
  videoUrl?: string;
}
const testimonials: Testimonial[] = [

  {
    name: 'Rucha Shukla',
    role: 'Donor',
    experience: 'I wanted to celebrate my birthday with some underprivileged kids. House of Humanity Charitable Trust helped me with that in the best possible way. Harsh, the founder was extremely prompt at making it possible by arranging everything well in advance. Have made other donations in the past and as per my experience the NGO is doing an incredible job as they are a team of selfless dedicated individuals striving to make someone’s day every day! If you ever wish to donate for a good cause or volunteer or do something good for the society in general then the House of Humanity Charitable Trust is the place to go to! ',
    impact: 'For my birthday celebration, Harsh helped me serve Chinese food to kids at 2 different rural primary schools, where it was a dream for the kids to have Chinese food. The joyous smiles on the faces of the kids was the best impact the NGO helped me create for these underprivileged kids! They really want to help those in actual need!',
    imageUrl: '/images/Rucha Shukla.png',
  },
  {
    name: 'SHRUTI JITENDRA PAGI ',
    role: 'Volunteer',
    experience: 'House of humanity has given me a new perspective towards our society and has made me more emphatic than i was.',
    impact: 'It has given me a greater sense of understanding and now i know where to sympathise and where to emphasize. It made me realise that I am way more privileged than many people whp sleep empty stomached and i dont.',
    imageUrl: '/images/Shruti Pagi.jpg',
  },
  {
    name: 'Rachna suthar',
    role: 'Volunteer',
    experience: 'My experience with the HOH charitable trust has been enriching, providing meaningful opportunities to contribute to social causes and support underprivileged communities.',
    impact: 'My involvement has helped me grow personally while positively impacting the community by bringing people together for collective well-being.',
    imageUrl: '/images/Rachna Suthar.jpeg',
  },
  {
    name: 'Drashti Patel',
    role: 'Volunteer',
    experience: 'It was an amazing experience and the best till now',
    impact: 'We should always help the needy people ',
    imageUrl: undefined,
  },
  {
    name: 'Patel Zalak',
    role: 'Donor',
    experience: 'It is very appreciable work they are doing as a whole team of HoH. ',
    impact: 'Stupendous ',
    imageUrl: undefined,
  },
  {
    name: 'Swapnil Patil',
    role: 'Donor',
    experience: 'It was a great experience overall',
    impact: 'I consider that my involvement has impacted the community in good way',
    imageUrl: undefined,
  },
  {
    name: 'Preeti Sharma',
    role: 'Donor',
    experience: 'My experience with the House of Humanity Charitable Trust has been very fulfilling. Seeing children receive school supplies, free pad drives , or patients getting proper medical care brings happiness and hope to them. This list is long, and I hope we can work together to give them reasons to smile, even in difficult situations.',
    impact: "My time with the HOH has really changed me. I've seen how tough life can be for some people, which has made me want to help even more. For the community, our projects have brought them access to education, healthcare, and other resources they need. It's great to know that we’re making a real difference in their lives.",
    imageUrl: '/images/Preeti Sharma.jpg',
  },
  {
    name: 'Zeel Shah',
    role: 'Donor',
    experience: 'One of the best NGO I have seen working towards making life easy for needful people. It is not only about donations and food distribution, but the care & warmth given to the people, is what I love seeing in HOH. This team is actually creating a real change. Amazing work! ',
    impact: "I'd love being a part of this team since it made me appreciate the importance of giving back.",
    imageUrl: undefined,
  },
  {
    name: 'Nidhi Hitendra Pandya ',
    role: 'Volunteer',
    experience: 'The experience could not be described. I joined a year back with a affectionate cause but didnt know would get attached to the NGO and their work. The team members and their efforts and the work is commendable.',
    impact: 'My involvement with the NGO has affected me as being a Doctor myself. Meeting new people and patients is my daily task, and the food donation drive at SSG was the most attractive part of me joining the team!',
    imageUrl: '/images/Nidhi Pandya.jpeg',
  },
  {
    name: 'Hiteshi Vaishnav ',
    role: 'Donor',
    experience: 'It has been a great experience seeing House of Humanity achieve its goal of helping out the community and hope to see this NGO grow more and more with time.',
    impact: "House of Humanity has been working for the community since it's establishment and it has been a great way for me in helping out the community in whatever little way possible.",
    imageUrl: undefined,
  }
];

const outcomes: Outcome[] = [
  {
    title: "Aarav's Recovery – Pediatric Aid",
    summary: "Aarav was born with a congenital heart defect. With help from our pediatric program, he underwent successful surgery and is now attending school with joy.",
    imageUrl: "https://example.com/images/aarav.jpg",
    videoUrl: "https://www.youtube.com/embed/sample_video_1",
  },
  {
    title: "SSG Hospital Meal Drive",
    summary: "We provided over 300 free meals to underprivileged families in the SSG pediatric ward every weekend for 3 months.",
    imageUrl: "https://example.com/images/ssg-meal-drive.jpg",
  },
  {
    title: "Education Support for Reena",
    summary: "Reena, an orphaned girl adopted under our child support scheme, topped her class this year. She's now enrolled in a private school with our scholarship.",
    imageUrl: "https://example.com/images/reena.jpg",
  },
];

const SuccessStories: React.FC = () => {
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 mt-24 min-h-screen transition-colors duration-300">
      <motion.div
        className="text-center py-12 bg-gradient-to-r from-pink-100 to-indigo-100 dark:from-primary-blue dark:to-fresh-green"
        variants={fadeIn('down', 0.1)}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-4xl font-bold mb-2 text-primary-blue dark:text-primary-blue">Success Stories</h1>
        <p className="text-lg text-gray-600 dark:text-gray-200">Real voices from our mission – shaping lives, one story at a time.</p>
      </motion.div>

      {/* Testimonials Section */}
      <motion.section
        className="py-12 px-6 lg:px-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-primary-blue dark:text-fresh-green flex items-center justify-center gap-2">
          <Star className="inline-block text-yellow-400 dark:text-yellow-300" size={32} /> Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              onClick={() => setSelected(t)}
              className="cursor-pointer"
              variants={fadeIn('up', index * 0.1)}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-warm-light-blue dark:border-gray-700 h-full flex flex-col">
                {t.imageUrl ? (
                  <img src={t.imageUrl} alt={t.name} className="w-full h-48 object-cover rounded-xl mb-4" />
                ) : (
                  <ImagePlaceholder text={t.name} width="100%" height="192px" className="mb-4" />
                )}
                <h3 className="text-xl font-bold text-primary-blue dark:text-fresh-green">{t.name}</h3>
                <p className="text-sm text-pink-600 dark:text-fresh-green">{t.role}</p>
                <p className="mt-4 text-gray-700 dark:text-gray-200 line-clamp-3">{t.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Outcomes Section */}
      <motion.section
        className="py-12 px-6 lg:px-20 bg-gray-50 dark:bg-gray-800"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-primary-blue dark:text-fresh-green flex items-center justify-center gap-2">
          <Target className="inline-block text-fresh-green dark:text-primary-blue" size={32} /> Outcomes – Real Impact Stories
        </h2>
        <div className="space-y-10">
          {outcomes.map((story, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-6 border border-warm-light-blue dark:border-gray-700"
              variants={fadeIn('up', index * 0.15)}
              whileHover={{ scale: 1.01 }}
            >
              {story.imageUrl ? (
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="w-full md:w-1/3 h-60 object-cover rounded-xl"
                />
              ) : (
                <ImagePlaceholder text={story.title} width="100%" height="240px" />
              )}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-primary-blue dark:text-fresh-green">{story.title}</h3>
                <p className="text-gray-700 dark:text-gray-200 mt-2">{story.summary}</p>
                {story.videoUrl && (
                  <div className="mt-4">
                    <iframe
                      width="100%"
                      height="250"
                      src={story.videoUrl}
                      title="Outcome video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-xl border border-primary-blue dark:border-fresh-green"
                    ></iframe>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

  

      {/* Add testimonial form CTA at the bottom */}
      <div className="flex justify-center my-12 px-4">
        <a
          href="https://docs.google.com/forms/d/1X1Eoz5_7tHHQplR1hf7VWQOU9U3kFsLvcyyhLL3jiD0/viewform?edit_requested=true"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-block bg-primary-blue hover:bg-fresh-green text-white dark:text-gray-900 hover:text-white font-bold py-3 px-4 sm:px-8 rounded-full shadow-lg transition-all text-base sm:text-lg text-center"
        >
          Want to share your story? Click here!
        </a>
      </div>

      {/* Testimonial Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 max-w-2xl w-full relative border border-warm-light-blue dark:border-gray-700"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
              {selected.imageUrl ? (
                <img src={selected.imageUrl} alt={selected.name} className="w-full h-64 object-cover rounded-xl mb-4" />
              ) : (
                <ImagePlaceholder text={selected.name} width="100%" height="256px" className="mb-4" />
              )}
              <h3 className="text-2xl font-bold text-primary-blue dark:text-fresh-green">{selected.name}</h3>
              <p className="text-sm text-pink-600 dark:text-fresh-green">{selected.role}</p>
              <p className="mt-4 text-gray-700 dark:text-gray-200 whitespace-pre-line">{selected.experience}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400 italic whitespace-pre-line">“{selected.impact}”</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SuccessStories;
