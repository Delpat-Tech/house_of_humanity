import React, { useState, ChangeEvent } from 'react';
import GiftCarousel from './GiftCarousel';
import BhimQR from './BhimQR';
import WaysToDonate from './WaysToDonate';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
};

type Errors = {
  firstName?: string;
  email?: string;
};

const DonateForACause: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [amount, setAmount] = useState<string>('10.00');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [formData, setFormData] = useState<FormData>({ firstName: '', lastName: '', email: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');

  const amounts = ['10.00', '25.00', '50.00', '100.00', '250.00', '500.00'];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateStep1 = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (step === 1 && !validateStep1()) return;
    setStep((prev) => Math.min(prev + 1, 2));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      throw new Error('Simulated server error');
    } catch (error) {
      setSubmitError(
        "The following error occurred when submitting the form:\n\nSomething went wrong, please try again or contact support."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getProgress = (): string => {
    return step === 0 ? 'w-1/3' : step === 1 ? 'w-2/3' : 'w-full';
  };

  return (
    <div className="w-full">
      <img
        src="/assets/hero-donation.png"
        alt="Hero"
        className="w-full h-auto object-cover]"
      />

      <div className="pt-24 max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-dfPink mb-4">
            Help us cultivate dignity for women and children to Dream Beyond their circumstances.
          </h2>
          <p className="font-semibold mb-2">All individual donations are 100% matched</p>
          <p>
            When you support The Desai Foundation, you are investing in health, livelihood, and menstrual equity
            initiatives for millions of women and girls in rural India. But we cannot bring this mission to life without you.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <div className="w-full h-1 bg-gray-200 mb-6">
            <div className={`h-full bg-dfPink transition-all duration-500 ${getProgress()}`} />
          </div>

          {step === 0 && (
            <div>
              <p className="font-bold mb-2">How much would you like to donate today?</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    className={`border px-4 py-2 rounded font-semibold ${amount === amt ? 'bg-dfPink text-white' : ''}`}
                    onClick={() => {
                      setAmount(amt);
                      setCustomAmount('');
                    }}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCustomAmount(e.target.value);
                  setAmount(e.target.value);
                }}
                className="w-full border rounded px-4 py-2 mb-4"
              />
              <button onClick={handleContinue} className="bg-dfPink text-white w-full py-2 rounded font-bold">
                Donate now →
              </button>
            </div>
          )}

          {step === 1 && (
            <div>
              <p className="font-bold mb-4">We'll never share this information with anyone.</p>
              <input
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full border rounded px-4 py-2 mb-2"
              />
              {errors.firstName && <p className="text-red-600 text-sm mb-2">{errors.firstName}</p>}
              <input
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full border rounded px-4 py-2 mb-2"
              />
              <input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                onBlur={(e) => {
                  const email = e.target.value;
                  if (!validateEmail(email)) {
                    setErrors((prev) => ({ ...prev, email: 'Invalid email format' }));
                  } else {
                    setErrors((prev) => ({ ...prev, email: '' }));
                  }
                }}
                className="w-full border rounded px-4 py-2 mb-2"
              />
              {errors.email && <p className="text-red-600 text-sm mb-2">{errors.email}</p>}
              <div className="flex justify-between mt-4">
                <button onClick={handleBack} className="text-dfPink font-semibold">← Back</button>
                <button onClick={handleContinue} className="bg-dfPink text-white px-4 py-2 rounded font-bold">
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="font-bold mb-4">Payment Details</p>
              <div className="border p-4 rounded mb-4">
                <p><strong>Payment Amount:</strong> ₹{amount}</p>
                <p><strong>Giving Frequency:</strong> One time</p>
              </div>
              <div className="border p-4 rounded mb-4 text-sm">Donate with Stripe Payment Element (placeholder)</div>

              {submitError && (
                <div className="text-red-600 text-sm mb-4 whitespace-pre-wrap">
                  {submitError}
                </div>
              )}

              <div className="flex justify-between mt-4 items-center">
                <button onClick={handleBack} className="text-dfPink font-semibold" disabled={isSubmitting}>
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`flex items-center gap-2 bg-dfPink text-white px-4 py-2 rounded font-bold ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting && (
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                    </svg>
                  )}
                  {isSubmitting ? 'Submitting...' : 'Donate now'}
                </button>
              </div>
            </div>
          )}

          <div className="text-center text-xs text-gray-600 mt-4">
            🔒 100% Secure Donation
          </div>
        </div>
      </div>
      <GiftCarousel />
      <BhimQR />
      <WaysToDonate />
    </div>
  );
};

export default DonateForACause;
