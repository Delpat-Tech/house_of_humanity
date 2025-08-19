import React, { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import HeroStatsSection from '../components/ui/HeroStatsSection';
import { TestimonialFormData, TestimonialErrors } from '../types';

const ConfettiCheck: React.FC<{ show: boolean }> = ({ show }) => (
  <div className="flex flex-col items-center mb-4 min-h-[32px]">
    {show ? (
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        className="flex items-center justify-center"
      >
        <svg className="w-8 h-8 text-fresh-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="ml-2 text-fresh-green font-semibold">Sent!</span>
      </motion.div>
    ) : null}
  </div>
);

const Testimonial: React.FC = () => {
  const [formData, setFormData] = useState<TestimonialFormData>({
    name: '',
    email: '',
    interactionType: '',
    otherInteraction: '',
    rating: '',
    experience: '',
    impact: '',
    recommendation: '',
    otherRecommendation: '',
    permission: '',
    suggestions: '',
    files: []
  });
  const [errors, setErrors] = useState<TestimonialErrors>({
    name: '',
    email: '',
    interactionType: '',
    rating: '',
    experience: '',
    impact: '',
    recommendation: '',
    permission: '',
    files: '',
    submit: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (files.length > 5) {
      setErrors(prev => ({ ...prev, files: 'Maximum 5 files allowed.' }));
      return;
    }
    if (files.some(file => file.size > 10 * 1024 * 1024)) {
      setErrors(prev => ({ ...prev, files: 'Each file must be under 10 MB.' }));
      return;
    }
    if (files.some(file => !['image/jpeg', 'image/png', 'image/gif'].includes(file.type))) {
      setErrors(prev => ({ ...prev, files: 'Only JPEG, PNG, or GIF files are allowed.' }));
      return;
    }
    setFormData(prev => ({ ...prev, files }));
    setErrors(prev => ({ ...prev, files: '' }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const newErrors: TestimonialErrors = {
      name: '',
      email: '',
      interactionType: '',
      rating: '',
      experience: '',
      impact: '',
      recommendation: '',
      permission: '',
      files: '',
      submit: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      hasError = true;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      hasError = true;
    }
    if (!formData.interactionType) {
      newErrors.interactionType = 'Interaction type is required';
      hasError = true;
    }
    if (formData.interactionType === 'Other' && !formData.otherInteraction.trim()) {
      newErrors.interactionType = 'Please specify your interaction';
      hasError = true;
    }
    if (!formData.rating) {
      newErrors.rating = 'Rating is required';
      hasError = true;
    }
    if (!formData.experience.trim()) {
      newErrors.experience = 'Experience description is required';
      hasError = true;
    }
    if (!formData.impact.trim()) {
      newErrors.impact = 'Impact description is required';
      hasError = true;
    }
    if (!formData.recommendation) {
      newErrors.recommendation = 'Recommendation is required';
      hasError = true;
    }
    if (formData.recommendation === 'Other' && !formData.otherRecommendation.trim()) {
      newErrors.recommendation = 'Please specify your recommendation';
      hasError = true;
    }
    if (!formData.permission) {
      newErrors.permission = 'Permission selection is required';
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    setIsSubmitting(true);
    setShowConfetti(true);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'files') {
        value.forEach((file: File) => formDataToSend.append('files', file));
      } else {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await fetch('http://localhost:3000/api/testimonial', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        toast.success('Your testimonial has been submitted successfully!');
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          interactionType: '',
          otherInteraction: '',
          rating: '',
          experience: '',
          impact: '',
          recommendation: '',
          otherRecommendation: '',
          permission: '',
          suggestions: '',
          files: []
        });
        setErrors({
          name: '',
          email: '',
          interactionType: '',
          rating: '',
          experience: '',
          impact: '',
          recommendation: '',
          permission: '',
          files: '',
          submit: ''
        });
      } else {
        const errorData = await response.json();
        setErrors(prev => ({ ...prev, submit: errorData.error || 'Failed to submit testimonial. Please try again.' }));
        toast.error(errorData.error || 'Failed to submit testimonial. Please try again.');
      }
    } catch (error) {
      setErrors(prev => ({ ...prev, submit: 'Network error. Please try again later.' }));
      toast.error('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowConfetti(false), 1800);
    }
  };

  return (
    <div className="bg-off-white dark:bg-gray-900 text-dark-gray dark:text-gray-100 mt-24 min-h-screen transition-colors duration-300">
      <HeroStatsSection
        title={<span>Share Your Experience</span>}
        subtitle={"Thank you for sharing your experience with the House of Humanity Charitable Trust. Your feedback is invaluable and helps us grow."}
        stats={[]}
        badge={<><Sparkles className="w-5 h-5 text-yellow-300 mr-2" /><span className="text-white font-medium">Your Story Matters</span></>}
      />
      <div className="py-12" />
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-warm-light-blue dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-warm-light-blue dark:border-slate-700 max-w-2xl mx-auto"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-fresh-green dark:text-fresh-green font-semibold text-lg text-center"
            >
              Thank you for your testimonial! We'll review it soon.<br />
              <a
                href="/contact-us"
                className="inline-block mt-4 bg-primary-blue hover:bg-fresh-green dark:bg-fresh-green dark:hover:bg-primary-blue text-white font-bold py-2 px-6 rounded-full shadow transition-all"
              >
                Back to Contact Us
              </a>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl font-bold mb-6 text-primary-blue dark:text-fresh-green">Share Your Testimonial</h2>
              <p className="font-bold mb-2 text-primary-blue dark:text-fresh-green">Your Details</p>
              <input
                type="text"
                placeholder="Full name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-2 border-primary-blue/30 dark:border-fresh-green/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-fresh-green focus:border-primary-blue dark:focus:border-fresh-green bg-white dark:bg-slate-900 text-dark-gray dark:text-gray-100 transition-colors"
              />
              {errors.name && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.name}</p>}
              <input
                type="email"
                placeholder="Email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-primary-blue/30 dark:border-fresh-green/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-fresh-green focus:border-primary-blue dark:focus:border-fresh-green bg-white dark:bg-slate-900 text-dark-gray dark:text-gray-100 transition-colors"
              />
              {errors.email && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.email}</p>}

              <p className="font-bold mb-2 mt-4 text-primary-blue dark:text-fresh-green">How did you interact with us?</p>
              <select
                name="interactionType"
                value={formData.interactionType}
                onChange={handleChange}
                className="w-full border-2 border-primary-blue/30 dark:border-fresh-green/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-fresh-green focus:border-primary-blue dark:focus:border-fresh-green bg-white dark:bg-slate-900 text-dark-gray dark:text-gray-100 transition-colors"
              >
                <option value="">Select interaction type</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Donor">Donor</option>
                <option value="Beneficiary">Beneficiary</option>
                <option value="Partner Organization">Partner Organization</option>
                <option value="Other">Other</option>
              </select>
              {errors.interactionType && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.interactionType}</p>}
              {formData.interactionType === 'Other' && (
                <input
                  type="text"
                  placeholder="Please specify"
                  name="otherInteraction"
                  value={formData.otherInteraction}
                  onChange={handleChange}
                  className="w-full border-2 border-primary-blue/30 dark:border-fresh-green/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-fresh-green focus:border-primary-blue dark:focus:border-fresh-green bg-white dark:bg-slate-900 text-dark-gray dark:text-gray-100 transition-colors"
                />
              )}

              <p className="font-bold mb-2 mt-4 text-primary-blue dark:text-fresh-green">How would you rate your experience?</p>
              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full border-2 border-primary-blue/30 dark:border-fresh-green/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-fresh-green focus:border-primary-blue dark:focus:border-fresh-green bg-white dark:bg-slate-900 text-dark-gray dark:text-gray-100 transition-colors"
              >
                <option value="">Select rating</option>
                <option value="1">1 - Poor</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 - Excellent</option>
              </select>
              {errors.rating && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.rating}</p>}

              <p className="font-bold mb-2 mt-4 text-primary-blue dark:text-fresh-green">Describe your experience</p>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="In a few sentences, please describe your experience with the House of Humanity Charitable Trust."
                className="w-full border-2 border-primary-blue/30 dark:border-fresh-green/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-fresh-green focus:border-primary-blue dark:focus:border-fresh-green bg-white dark:bg-slate-900 text-dark-gray dark:text-gray-100 transition-colors"
                rows={4}
              />
              {errors.experience && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.experience}</p>}

              <p className="font-bold mb-2 mt-4 text-primary-blue dark:text-fresh-green">How has your involvement impacted you or the community?</p>
              <textarea
                name="impact"
                value={formData.impact}
                onChange={handleChange}
                placeholder="Describe the impact of your involvement."
                className="w-full border-2 border-primary-blue/30 dark:border-fresh-green/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-fresh-green focus:border-primary-blue dark:focus:border-fresh-green bg-white dark:bg-slate-900 text-dark-gray dark:text-gray-100 transition-colors"
                rows={4}
              />
              {errors.impact && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.impact}</p>}

              <p className="font-bold mb-2 mt-4 text-primary-blue dark:text-fresh-green">Would you recommend us to others?</p>
              <select
                name="recommendation"
                value={formData.recommendation}
                onChange={handleChange}
                className="w-full border-2 border-primary-blue/30 dark:border-fresh-green/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-fresh-green focus:border-primary-blue dark:focus:border-fresh-green bg-white dark:bg-slate-900 text-dark-gray dark:text-gray-100 transition-colors"
              >
                <option value="">Select recommendation</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Maybe">Maybe</option>
                <option value="Other">Other</option>
              </select>
              {errors.recommendation && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.recommendation}</p>}
              {formData.recommendation === 'Other' && (
                <input
                  type="text"
                  placeholder="Please specify"
                  name="otherRecommendation"
                  value={formData.otherRecommendation}
                  onChange={handleChange}
                  className="w-full border-2 border-primary-blue/30 dark:border-fresh-green/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-fresh-green focus:border-primary-blue dark:focus:border-fresh-green bg-white dark:bg-slate-900 text-dark-gray dark:text-gray-100 transition-colors"
                />
              )}

              <p className="font-bold mb-2 mt-4 text-primary-blue dark:text-fresh-green">Can we feature your testimonial?</p>
              <select
                name="permission"
                value={formData.permission}
                onChange={handleChange}
                className="w-full border-2 border-primary-blue/30 dark:border-fresh-green/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-fresh-green focus:border-primary-blue dark:focus:border-fresh-green bg-white dark:bg-slate-900 text-dark-gray dark:text-gray-100 transition-colors"
              >
                <option value="">Select option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.permission && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.permission}</p>}

              <p className="font-bold mb-2 mt-4 text-primary-blue dark:text-fresh-green">Suggestions for improvement (optional)</p>
              <textarea
                name="suggestions"
                value={formData.suggestions}
                onChange={handleChange}
                placeholder="Any suggestions for us?"
                className="w-full border-2 border-primary-blue/30 dark:border-fresh-green/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue dark:focus:ring-fresh-green focus:border-primary-blue dark:focus:border-fresh-green bg-white dark:bg-slate-900 text-dark-gray dark:text-gray-100 transition-colors"
                rows={4}
              />

              <p className="font-bold mb-2 mt-4 text-primary-blue dark:text-fresh-green">Photos (optional, up to 5)</p>
              <input
                type="file"
                name="files"
                accept="image/jpeg,image/png,image/gif"
                multiple
                onChange={handleFileChange}
                className="w-full border-2 border-primary-blue/30 dark:border-fresh-green/30 rounded-lg px-4 py-2 mb-2 bg-white dark:bg-slate-900 text-dark-gray dark:text-gray-100"
              />
              {errors.files && <p className="text-red-600 dark:text-red-400 text-sm mb-2">{errors.files}</p>}
              <p className="text-gray-500 dark:text-gray-300 text-sm mb-4">
                Upload up to 5 photos (JPEG, PNG, or GIF, max 10 MB each). Include a personal photo or activity photos.
              </p>

              <ConfettiCheck show={showConfetti} />
              <div className="flex flex-col items-center gap-1 mt-3">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 font-medium">
                  <svg className="w-4 h-4 text-primary-blue dark:text-fresh-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  We respect your privacy. Your information will only be used to process your testimonial.
                </div>
              </div>
              <div className="flex justify-between mt-4 items-center">
                <a
                  href="/contact-us"
                  className="text-primary-blue dark:text-fresh-green font-semibold hover:text-blue-700 dark:hover:text-fresh-green transition-colors"
                >
                  ← Back to Contact Us
                </a>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 dark:from-fresh-green dark:to-primary-blue dark:hover:from-primary-blue dark:hover:to-fresh-green text-white font-bold px-4 py-2 shadow-lg hover:scale-105 transition-transform rounded-lg disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending...' : 'Send Testimonial'}
                </button>
              </div>
              {errors.submit && <p className="text-red-600 dark:text-red-400 text-sm mt-2 text-center">{errors.submit}</p>}
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;