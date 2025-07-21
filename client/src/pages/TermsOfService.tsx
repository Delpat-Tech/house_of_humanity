import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useSpring } from 'framer-motion';

const TermsOfService: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <Helmet>
        <title>Terms of Service - House of Humanity</title>
        <meta
          name="description"
          content="Terms of Service for House of Humanity, outlining the rules and guidelines for using our website and services."
        />
      </Helmet>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-16 relative">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-fresh-green z-50"
          style={{ scaleX, transformOrigin: '0%' }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="mt-24 md:text-6xl sm:text-4xl text-3xl font-extrabold tracking-tight text-primary-blue text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Terms of Service
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto font-semibold text-fresh-green text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Terms of Service for House of Humanity, outlining the rules and guidelines for using our website and services.
          </motion.p>
          <div className="space-y-8">
            {[
              {
                title: 'Introduction',
                content: (
                  <p>
                    Welcome to House of Humanity ("we," "us," or "our"). These Terms of Service ("Terms") govern your use
                    of our website, services, and related features, including donations and newsletter subscriptions. By
                    accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do
                    not use our website.
                  </p>
                ),
              },
              {
                title: 'Use of Our Website',
                content: (
                  <>
                    <p>You agree to use our website only for lawful purposes and in accordance with these Terms. You may
                      not:</p>
                    <ul className="list-disc pl-6">
                      <li>Use the website in any way that violates applicable laws or regulations.</li>
                      <li>Attempt to gain unauthorized access to our systems or data.</li>
                      <li>Engage in any activity that disrupts or interferes with the website’s functionality.</li>
                      <li>Use automated systems (e.g., bots, scrapers) to access or collect data from the website.</li>
                    </ul>
                  </>
                ),
              },
              {
                title: 'Donations',
                content: (
                  <p>
                    Donations made through our website are processed securely via third-party payment processors (e.g.,
                    Razorpay). All donations are non-refundable unless otherwise stated. You agree to provide accurate
                    payment information and acknowledge that we may use third-party services to process transactions.
                  </p>
                ),
              },
              {
                title: 'Content and Intellectual Property',
                content: (
                  <p>
                    All content on our website, including text, images, logos, and designs, is owned by or licensed to
                    House of Humanity and protected by copyright and other intellectual property laws. You may not copy,
                    reproduce, or distribute our content without prior written permission, except for personal,
                    non-commercial use.
                  </p>
                ),
              },
              {
                title: 'Third-Party Services and Links',
                content: (
                  <p>
                    Our website may include third-party services (e.g., Elfsight for Instagram feeds, Razorpay for
                    payments) and links to external sites. We are not responsible for the content, practices, or terms of
                    these third-party services or websites. Your use of such services is subject to their respective terms
                    and policies.
                  </p>
                ),
              },
              {
                title: 'User Conduct',
                content: (
                  <>
                    <p>When interacting with our website (e.g., submitting forms or contacting us), you agree to:</p>
                    <ul className="list-disc pl-6">
                      <li>Provide accurate and truthful information.</li>
                      <li>Refrain from submitting harmful, offensive, or inappropriate content.</li>
                      <li>Respect the rights and privacy of others.</li>
                    </ul>
                  </>
                ),
              },
              {
                title: 'Limitation of Liability',
                content: (
                  <p>
                    To the fullest extent permitted by law, House of Humanity is not liable for any direct, indirect,
                    incidental, or consequential damages arising from your use of our website or services. We do not
                    guarantee uninterrupted access to our website or error-free operation.
                  </p>
                ),
              },
              {
                title: 'Termination',
                content: (
                  <p>
                    We reserve the right to suspend or terminate your access to our website at our discretion, particularly
                    if you violate these Terms or engage in unlawful activity. Upon termination, your right to use our
                    website will cease immediately.
                  </p>
                ),
              },
              {
                title: 'Changes to These Terms',
                content: (
                  <p>
                    We may update these Terms periodically. Changes will be posted on this page with an updated "Last
                    Updated" date. Your continued use of our website after changes constitutes acceptance of the updated
                    Terms.
                  </p>
                ),
              },
            {
                title: 'Contact Us',
                content: (
                  <p>
                    If you have questions about this Terms of Service, please contact us at:
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

export default TermsOfService;