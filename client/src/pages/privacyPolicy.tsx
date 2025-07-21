import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useSpring } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <>
      <Helmet>
        <title>Privacy Policy - House of Humanity</title>
        <meta
          name="description"
          content="Privacy Policy for House of Humanity, outlining how we collect, use, and protect your personal information."
        />
      </Helmet>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-800 py-12 relative">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-fresh-green z-50"
          style={{ scaleX, transformOrigin: '0%' }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <motion.h1
            className="md:text-6xl sm:text-4xl text-2xl  font-extrabold tracking-tight  text-primary-blue text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-fresh-green text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           Your trust matters to us. Learn how we collect, use, and protect your personal information when you engage with our donation platform
          </motion.p>
          <div className="space-y-8">
            {[
              {
                title: 'Introduction',
                content: (
                  <p>
                    House of Humanity ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your personal information when you visit our
                    website, make a donation, or engage with our services. By using our website, you agree to the terms of
                    this Privacy Policy.
                  </p>
                ),
              },
              {
                title: 'Information We Collect',
                content: (
                  <>
                    <p>We may collect the following types of information:</p>
                    <ul className="list-disc pl-6">
                      <li>
                        <strong>Personal Information</strong>: When you make a donation, sign up for our newsletter, or
                        contact us, we may collect your name, email address, phone number, mailing address, and payment
                        information (e.g., credit card details processed securely by our payment processor, such as
                        Razorpay).
                      </li>
                      <li>
                        <strong>Non-Personal Information</strong>: We collect non-identifiable data such as your IP
                        address, browser type, device information, and website usage data (e.g., pages visited, time spent)
                        through cookies and similar technologies.
                      </li>
                      <li>
                        <strong>Voluntarily Provided Information</strong>: Information you provide through forms, surveys,
                        or communications (e.g., feedback or inquiries).
                      </li>
                    </ul>
                  </>
                ),
              },
              {
                title: 'How We Use Your Information',
                content: (
                  <>
                    <p>We use your information to:</p>
                    <ul className="list-disc pl-6">
                      <li>Process and acknowledge donations.</li>
                      <li>Send newsletters, updates, and fundraising appeals (with your consent).</li>
                      <li>Improve our website and services through analytics.</li>
                      <li>Respond to your inquiries or provide support.</li>
                      <li>Comply with legal obligations or protect our rights.</li>
                    </ul>
                  </>
                ),
              },
              {
                title: 'How We Share Your Information',
                content: (
                  <>
                    <p>We do not sell or rent your personal information. We may share your information with:</p>
                    <ul className="list-disc pl-6">
                      <li>
                        <strong>Service Providers</strong>: Third-party vendors (e.g., payment processors like Razorpay,
                        email services, or Elfsight for our Instagram feed) who assist us in operating our website and
                        processing donations. These providers are contractually obligated to protect your data.
                      </li>
                      <li>
                        <strong>Legal Requirements</strong>: If required by law, we may disclose your information to
                        comply with legal processes or protect the rights, property, or safety of House of Humanity and
                        others.
                      </li>
                    </ul>
                  </>
                ),
              },
              {
                title: 'Cookies and Tracking Technologies',
                content: (
                  <p>
                    We use cookies and similar technologies to enhance your experience, analyze website performance, and
                    display relevant content (e.g., our Instagram feed via Elfsight). You can manage your cookie
                    preferences through your browser settings. Disabling cookies may affect website functionality.
                  </p>
                ),
              },
              {
                title: 'Data Security',
                content: (
                  <p>
                    We implement reasonable security measures to protect your information, such as encryption for payment
                    processing and secure data storage. However, no method of transmission over the internet is 100% secure,
                    and we cannot guarantee absolute security.
                  </p>
                ),
              },
              {
                title: 'Your Rights',
                content: (
                  <>
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6">
                      <li>Access or request a copy of your personal information.</li>
                      <li>Request correction of inaccurate information.</li>
                      <li>Request deletion of your data, subject to legal obligations.</li>
                      <li>Opt out of marketing communications (e.g., newsletters).</li>
                      <li>Object to or restrict certain data processing activities.</li>
                    </ul>
                    <p>
                      To exercise these rights, contact us at{' '}
                      <a
                        href="mailto:privacy@houseofhumanity.org"
                        className="text-fresh-green hover:text-primary-blue transition-colors duration-200"
                      >
                        privacy@houseofhumanity.org
                      </a>
                      .
                    </p>
                  </>
                ),
              },
              {
                title: 'Third-Party Links',
                content: (
                  <p>
                    Our website may contain links to third-party sites (e.g., payment processors, social media like
                    Instagram). We are not responsible for the privacy practices of these sites. Please review their privacy
                    policies before providing personal information.
                  </p>
                ),
              },
              {
                title: 'Children’s Privacy',
                content: (
                  <p>
                    Our services are not directed to individuals under 13. We do not knowingly collect personal information
                    from children. If you believe we have collected such information, please contact us immediately.
                  </p>
                ),
              },
              {
                title: 'Changes to This Privacy Policy',
                content: (
                  <p>
                    We may update this Privacy Policy periodically. Changes will be posted on this page with an updated
                    "Last Updated" date. Please review this policy regularly.
                  </p>
                ),
              },
              {
                title: 'Contact Us',
                content: (
                  <p>
                    If you have questions about this Privacy Policy or our data practices, please contact us at:
                    <br />
                   <strong> House of Humanity</strong>
                    <br />
                    Email:{' '}
                    <a
                      href="mailto:Info@houseofhumanity.in"
                      className="text-fresh-green hover:text-primary-blue transition-colors duration-200"
                    >
                      privacy@houseofhumanity.org
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

export default PrivacyPolicy;

