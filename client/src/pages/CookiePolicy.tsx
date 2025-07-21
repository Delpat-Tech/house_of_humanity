import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useSpring } from 'framer-motion';

const CookiePolicy: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <Helmet>
        <title>Cookie Policy - House of Humanity</title>
        <meta
          name="description"
          content="Cookie Policy for House of Humanity, explaining how we use cookies and tracking technologies on our website."
        />
      </Helmet>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-16 relative">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-fresh-green z-50"
          style={{ scaleX, transformOrigin: '0%' }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <motion.h1
            className="md:text-6xl sm:text-4xl text-3xl font-extrabold tracking-tight text-primary-blue text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Cookie Policy
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-fresh-green font-semibold  text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cookie Policy for House of Humanity, explaining how we use cookies and tracking technologies on our website.
          </motion.p>
          <div className="space-y-8">
            {[
              {
                title: 'Introduction',
                content: (
                  <p>
                    House of Humanity ("we," "us," or "our") uses cookies and similar tracking technologies to enhance your
                    experience on our website. This Cookie Policy explains what cookies are, how we use them, and how you
                    can manage your cookie preferences.
                  </p>
                ),
              },
              {
                title: 'What Are Cookies?',
                content: (
                  <p>
                    Cookies are small text files stored on your device when you visit a website. They help us remember your
                    preferences, analyze website performance, and provide personalized content. We may also use similar
                    technologies, such as pixels or local storage, for similar purposes.
                  </p>
                ),
              },
              {
                title: 'Types of Cookies We Use',
                content: (
                  <>
                    <p>We use the following types of cookies:</p>
                    <ul className="list-disc pl-6">
                      <li>
                        <strong>Essential Cookies</strong>: Necessary for the website to function, such as maintaining your
                        session during donation processes.
                      </li>
                      <li>
                        <strong>Analytics Cookies</strong>: Help us understand how visitors use our website, such as which
                        pages are visited and how long users stay.
                      </li>
                      <li>
                        <strong>Functional Cookies</strong>: Enable enhanced features, such as remembering your preferences
                        or displaying our Instagram feed via Elfsight.
                      </li>
                      <li>
                        <strong>Marketing Cookies</strong>: Used to deliver relevant advertisements or track the
                        effectiveness of our campaigns.
                      </li>
                    </ul>
                  </>
                ),
              },
              {
                title: 'Third-Party Cookies',
                content: (
                  <p>
                    We use third-party services that may set cookies, such as Elfsight (for our Instagram feed), Razorpay
                    (for payment processing), and analytics providers (e.g., Google Analytics, if applicable). These
                    cookies are subject to the respective third-party privacy policies.
                  </p>
                ),
              },
              {
                title: 'How to Manage Cookies',
                content: (
                  <p>
                    You can control cookies through your browser settings, such as disabling cookies or deleting existing
                    ones. Note that disabling cookies may affect website functionality, such as donation processing or
                    personalized features. For instructions, visit your browser’s help resources.
                  </p>
                ),
              },
              {
                title: 'Changes to This Cookie Policy',
                content: (
                  <p>
                    We may update this Cookie Policy periodically. Changes will be posted on this page with an updated "Last
                    Updated" date. Please review this policy regularly to stay informed.
                  </p>
                ),
              },
              {
                title: 'Contact Us',
                content: (
                  <p>
                    If you have questions about this Cookie Policy or our data practices, please contact us at:
                    <br />
                   <strong> House of Humanity</strong>
                    <br />
                    Email:{' '}
                    <a
                      href="mailto:Info@houseofhumanity.in"
                      className="text-fresh-green hover:text-primary-blue transition-colors duration-200"
                    >
                      Info@houseofhumanity.in
                    </a>
                    <br />
                    Address: B1/44 Somdutt park, Near Rajesh tower, Gotri road, Vadodara - 390023
                  </p>
                ),
              },
            ].map((section, index) => (
              <motion.section
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-primary-blue dark:text-fresh-green mb-4">{section.title}</h2>
                <div className="prose prose-lg text-gray-700 dark:text-gray-300">{section.content}</div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;