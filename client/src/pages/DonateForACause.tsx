"use client";

import React, { useState, ChangeEvent, useEffect } from "react";
import GiftCarousel from "./GiftCarousel";
import BhimQR from "./BhimQR";
import WaysToDonate from "./WaysToDonate";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import HeroStatsSection from "../components/ui/HeroStatsSection";
import { Sparkles } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import type { CountryData } from "react-phone-input-2";
import { isValidPhoneNumber } from "libphonenumber-js";
import "react-phone-input-2/lib/style.css";

type FormData = {
  name: string;
  email: string;
  phone: number | string;
  countryCode?: string;
};

import { FormErrors } from "../types";

type Errors = FormErrors;

interface RazorpayWindow extends Window {
  Razorpay: any;
}
declare let window: RazorpayWindow;

const testimonials = [
  {
    quote:
      "My donation truly made a difference. I received updates and saw the impact firsthand!",
    name: "Anjali P.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "Supporting House of Humanity is the best way to give back to the community.",
    name: "Vikram S.",
    img: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    quote:
      "I love how transparent and impactful their work is. Highly recommended!",
    name: "Sara M.",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

const programs = [
  { name: "Child Health and Upliftment" },
  { name: "Women Empowerment Fund" },
  { name: "Sustainable Livelihood" },
  { name: "Hygiene Awareness In Girls" },
  { name: "Community Outreach Campaigns" },
  { name: "Women Health And Hygiene" },
  { name: "Healthcare Fund" },
  { name: "Sitaare Sponsor" },
  { name: "Sitaare Nutrition" },
  { name: "Sitaare Full Care" },
  { name: "Sitaare One-Time Meal" },
  { name: "Sitaare Meal for Two" },
  { name: "Sitaare Celebration" },
  { name: "General Donation" },
];

const TestimonialCarousel = ({
  testimonials,
}: {
  testimonials: { quote: string; name: string; img: string }[];
}) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="hidden md:flex items-center justify-between gap-6">
        <button
          onClick={prev}
          className="flex items-center justify-center bg-white hover:bg-gray-50 text-primary-blue border border-gray-200 rounded-full w-12 h-12 shadow-md hover:shadow-lg transition-all duration-200"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 flex-1 max-w-2xl"
        >
          <div className="flex items-start gap-4">
            <img
              src={testimonials[index].img}
              alt={testimonials[index].name}
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
            />
            <div className="flex-1">
              <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-4 italic">
                "{testimonials[index].quote}"
              </p>
              <div className="text-primary-blue font-semibold">
                {testimonials[index].name}
              </div>
            </div>
          </div>
        </motion.div>
        <button
          onClick={next}
          className="flex items-center justify-center bg-white hover:bg-gray-50 text-primary-blue border border-gray-200 rounded-full w-12 h-12 shadow-md hover:shadow-lg transition-all duration-200"
          aria-label="Next testimonial"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="md:hidden">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-start gap-4">
            <img
              src={testimonials[index].img}
              alt={testimonials[index].name}
              className="w-14 h-14 rounded-full object-cover border-2 border-gray-100"
            />
            <div className="flex-1">
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-3 italic">
                "{testimonials[index].quote}"
              </p>
              <div className="text-primary-blue font-semibold">
                {testimonials[index].name}
              </div>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={prev}
            className="flex items-center justify-center bg-white hover:bg-gray-50 text-primary-blue border border-gray-200 rounded-full w-10 h-10 shadow-md transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="flex items-center justify-center bg-white hover:bg-gray-50 text-primary-blue border border-gray-200 rounded-full w-10 h-10 shadow-md transition-all duration-200"
            aria-label="Next testimonial"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      console.log("Razorpay SDK loaded");
      resolve(true);
    };
    script.onerror = () => reject(new Error("Failed to load Razorpay SDK."));
    document.body.appendChild(script);
  });
};

const DonateForACause: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [amount, setAmount] = useState<string>("10.00");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedProgram, setSelectedProgram] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>("");
  const [donateSuccess, setDonateSuccess] = useState<boolean>(false);

  const amounts = ["100", "250", "500", "1000", "2500", "5000"];

  // Read URL parameters to prefill amount and purpose
  useEffect(() => {
    console.log("DonateForACause useEffect triggered");
    const params = new URLSearchParams(window.location.search);
    const amountParam = params.get("amount");
    const purposeParam = params.get("purpose");

    console.log("Query params received:", {
      amount: amountParam,
      purpose: purposeParam,
    });

    if (amountParam) {
      console.log("Setting amount:", amountParam);
      setAmount(amountParam);
      setCustomAmount(amountParam);
    }
    if (purposeParam) {
      const decodedPurpose = decodeURIComponent(purposeParam).trim();
      console.log("Decoded purpose:", decodedPurpose);
      const program = programs.find((p) => p.name.trim() === decodedPurpose);
      if (program) {
        console.log("Setting selectedProgram:", decodedPurpose);
        setSelectedProgram(decodedPurpose);
      } else {
        console.warn("Invalid purpose:", decodedPurpose);
        console.log(
          "Available programs:",
          programs.map((p) => p.name)
        );
      }
    }
  }, []);

  // Log state changes
  useEffect(() => {
    console.log("State updated:", { amount, selectedProgram });
  }, [amount, selectedProgram]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[0-9]{8,15}$/;
    return phoneRegex.test(phone);
  };

  const validateStep1 = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone || !validatePhone(formData.phone.toString()))
      newErrors.phone = "Valid phone number (8-15 digits) required";
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

  const handleProgramClick = (program: { name: string }) => {
    setSelectedProgram(program.name);
    setAmount("");
    setCustomAmount("");
    setStep(0); // Ensure the form is shown with prefilled values
  };

  const handleDonateWithRazorpay = async () => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const isScriptLoaded = await loadRazorpayScript();
      if (!isScriptLoaded) throw new Error("Failed to load Razorpay SDK.");

      const donationAmount = parseFloat(customAmount || amount);
      if (isNaN(donationAmount) || donationAmount <= 0) {
        throw new Error("Invalid donation amount");
      }

      const donorName = formData.name.trim() || "Anonymous";
      const donorEmail = formData.email;
      const donorPhone = formData.phone.toString();
      const purpose = selectedProgram || "General Donation";

      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${apiBaseUrl}/api/donate/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: donationAmount,
          purpose,
          donorName,
          donorEmail,
          donorPhone,
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Fetch response:", text);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { success, data, error: serverError } = await response.json();
      if (!success || !data) {
        throw new Error(serverError || "Failed to create order.");
      }

      const {
        orderId,
        amount: orderAmount,
        currency,
        keyId,
        donorName: responseDonorName,
        donorEmail: responseDonorEmail,
        donorPhone: responseDonorPhone,
        purpose: responsePurpose,
      } = data;

      if (!window.Razorpay) {
        throw new Error("Razorpay SDK not loaded");
      }

      const options = {
        key: keyId,
        amount: orderAmount,
        currency,
        name: "House of Humanity",
        description: `Donation for ${purpose}`,
        order_id: orderId,
        handler: async (response: any) => {
          try {
            const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
            const authResponse = await fetch(
              `${apiBaseUrl}/api/donate/payment-auth`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                  donorName: responseDonorName,
                  donorEmail: responseDonorEmail,
                  donorPhone: responseDonorPhone,
                  amount: orderAmount,
                  purpose: responsePurpose,
                }),
              }
            );

            const authResult = await authResponse.json();
            if (authResult.success) {
              setDonateSuccess(true);
              setTimeout(() => {
                setDonateSuccess(false);
                const queryParams = new URLSearchParams({
                  paymentId: response.razorpay_payment_id,
                  orderId: response.razorpay_order_id,
                  amount: (orderAmount / 100).toString(),
                  purpose: responsePurpose,
                  donorName: responseDonorName,
                  donorEmail: responseDonorEmail || "",
                  donorPhone: responseDonorPhone || "",
                  createdAt: new Date().toISOString(),
                });
                window.location.href = `/donation-success?${queryParams.toString()}`;
              }, 3000);
            } else {
              throw new Error(
                authResult.error || "Payment verification failed"
              );
            }
          } catch (error: any) {
            console.error("Payment auth error:", error);
            setSubmitError(error.message || "Payment verification failed");
            setTimeout(() => {
              setSubmitError("");
              const queryParams = new URLSearchParams({
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                amount: (orderAmount / 100).toString(),
                purpose: responsePurpose,
                donorName: responseDonorName,
                donorEmail: responseDonorEmail || "",
                donorPhone: responseDonorPhone || "",
                createdAt: new Date().toISOString(),
                errorDescription:
                  error.message || "Payment verification failed",
              });
              window.location.href = `/donation-failed?${queryParams.toString()}`;
            }, 3000);
          }
        },
        prefill: {
          name: responseDonorName,
          email: responseDonorEmail,
          contact: responseDonorPhone,
        },
        theme: { color: "#BC1782" },
        modal: {
          ondismiss: () => {
            setIsSubmitting(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response: any) => {
        console.error("Payment failed:", response.error);
        setSubmitError(response.error.description || "Payment failed.");
        setTimeout(() => {
          setSubmitError("");
          const queryParams = new URLSearchParams({
            paymentId: response.error.metadata.payment_id,
            orderId: response.error.metadata.order_id,
            amount: (orderAmount / 100).toString(),
            purpose: responsePurpose,
            donorName: responseDonorName,
            donorEmail: responseDonorEmail || "",
            donorPhone: responseDonorPhone || "",
            createdAt: new Date().toISOString(),
            errorDescription: response.error.description || "Payment failed",
          });
          window.location.href = `/donation-failed?${queryParams.toString()}`;
        }, 3000);
      });
      rzp.open();
    } catch (error: any) {
      console.error("Donation error:", {
        message: error.message,
        stack: error.stack,
        amount,
        purpose: selectedProgram,
        donorName: formData.name,
        donorEmail: formData.email,
        donorPhone: formData.phone,
      });
      setSubmitError(
        error.message || "Failed to process donation. Please try again."
      );
      setIsSubmitting(false);
    }
  };

  const getProgress = (): string => {
    return step === 0 ? "w-1/3" : step === 1 ? "w-2/3" : "w-full";
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 mt-24 min-h-screen transition-colors duration-300">
      <HeroStatsSection
        title={<span>Donate For A Cause</span>}
        subtitle="Your support powers our mission. Make a difference by donating to a cause you care about!"
        stats={[]}
        badge={
          <>
            <Sparkles className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-white font-medium">Support & Empower</span>
          </>
        }
      />
      <div className="py-16" />
      <div className="-mt-24 max-w-5xl mx-auto px-2 sm:px-4 flex flex-col md:flex-row gap-6 md:gap-8 relative z-20 md:min-h-[520px]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 min-h-[400px] flex flex-col bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-2xl rounded-3xl p-4 sm:p-6 md:p-10 border border-primary-blue/20 dark:border-blue-900 transition-colors duration-300"
        >
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded mb-8 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-primary-blue to-fresh-green transition-all duration-500 rounded ${getProgress()}`}
            />
          </div>
          {step === 0 && (
            <div>
              <p className="font-bold mb-2 text-primary-blue">
                How much would you like to donate today?
              </p>
              <div className="mb-4">
                <label
                  htmlFor="program"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Purpose of Donation
                </label>
                <select
                  id="program"
                  key={selectedProgram} // Force re-render
                  value={selectedProgram}
                  onChange={(e) => {
                    console.log("Selected program:", e.target.value);
                    setSelectedProgram(e.target.value);
                    setAmount("");
                    setCustomAmount("");
                  }}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-blue focus:ring-primary-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white px-3 py-2"
                >
                  <option value="">Select a Purpose</option>
                  {programs.map((program) => (
                    <option
                      key={program.name}
                      value={program.name}
                      onClick={() => handleProgramClick(program)}
                    >
                      {program.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    className={`border-2 px-4 py-2 rounded-lg font-semibold transition-all duration-200 ${
                      amount === amt
                        ? "bg-gradient-to-r from-primary-blue to-fresh-green text-white shadow-lg scale-105"
                        : "bg-white text-primary-blue border-primary-blue/30 hover:bg-primary-blue/5"
                    }`}
                    onClick={() => {
                      setAmount(amt);
                      setCustomAmount("");
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
                  console.log("Custom amount changed:", e.target.value);
                  setCustomAmount(e.target.value);
                  setAmount(e.target.value);
                }}
                className="w-full border-2 border-primary-blue/30 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <Button
                onClick={handleContinue}
                className="w-full py-3 bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 text-white font-bold shadow-lg hover:scale-105 transition-transform rounded-lg"
              >
                Continue →
              </Button>
            </div>
          )}
          {step === 1 && (
            <div>
              <p className="font-bold mb-4 text-primary-blue">
                We'll never share this information with anyone.
              </p>
              <input
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border-2 border-primary-blue/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mb-2">{errors.name}</p>
              )}
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
                    setErrors((prev) => ({
                      ...prev,
                      email: "Invalid email format",
                    }));
                  } else {
                    setErrors((prev) => ({ ...prev, email: "" }));
                  }
                }}
                className="w-full border-2 border-primary-blue/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mb-2">{errors.email}</p>
              )}
              <PhoneInput
                country={"in"}
                value={(formData.phone ?? "").toString()}
                onChange={(phone: string, country: CountryData) => {
                  setFormData({ ...formData, phone });
                  if (country.countryCode === "in" && phone.length !== 12) {
                    // e.g. +91 + 10 digits => length = 13, but react-phone-input-2 stores only digits, so 12
                    setErrors((prev) => ({
                      ...prev,
                      phone: "Indian numbers must be exactly 10 digits",
                    }));
                  } else {
                    setErrors((prev) => ({ ...prev, phone: "" }));
                  }
                }}
                onBlur={() => {
                  const valid = isValidPhoneNumber("+" + formData.phone);
                  if (!valid) {
                    setErrors((prev) => ({
                      ...prev,
                      phone: "Enter a valid phone number",
                    }));
                  }
                }}
                inputClass="w-full border-2 border-primary-blue/30 rounded-lg px-4 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-primary-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                inputStyle={{ width: "100%" }}
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mb-2">{errors.phone}</p>
              )}
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleBack}
                  className="text-primary-blue font-semibold hover:text-blue-700 transition-colors"
                >
                  ← Back
                </button>
                <Button
                  onClick={handleContinue}
                  className="bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 text-white px-4 py-2 font-bold shadow hover:scale-105 transition-transform rounded-lg"
                >
                  Continue →
                </Button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <p className="font-bold mb-4 text-primary-blue">
                Payment Details
              </p>
              <div className="border-2 border-primary-blue/30 p-4 rounded-lg mb-4 bg-primary-blue/5 dark:bg-blue-900/10">
                <p>
                  <strong>Payment Amount:</strong>{" "}
                  <span className="text-primary-blue">
                    ₹{(parseFloat(amount) || 0).toFixed(2)}
                  </span>
                </p>
                <p>
                  <strong>Purpose:</strong>{" "}
                  <span className="text-primary-blue">
                    {selectedProgram || "General Donation"}
                  </span>
                </p>
                <p>
                  <strong>Donor Name:</strong>{" "}
                  <span className="text-primary-blue">
                    {formData.name || "Anonymous"}
                  </span>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span className="text-primary-blue">
                    {formData.email || "Not provided"}
                  </span>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <span className="text-primary-blue">
                    {formData.phone || "Not provided"}
                  </span>
                </p>
              </div>
              <div className="border-2 border-primary-blue/30 p-4 rounded-lg mb-4 text-sm bg-primary-blue/5 dark:bg-blue-900/10">
                Donate securely with Razorpay
              </div>
              {submitError && (
                <div className="text-red-600 text-sm mb-4 whitespace-pre-wrap">
                  {submitError}
                </div>
              )}
              {donateSuccess && (
                <div className="text-green-600 text-sm mb-4">
                  Donation successful! Redirecting...
                </div>
              )}
              <div className="flex justify-between mt-4 items-center">
                <button
                  onClick={handleBack}
                  disabled={isSubmitting}
                  className="text-primary-blue font-semibold hover:text-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Back
                </button>
                <Button
                  onClick={handleDonateWithRazorpay}
                  disabled={isSubmitting}
                  className={`bg-gradient-to-r from-primary-blue to-fresh-green hover:from-blue-700 hover:to-green-600 text-white px-4 py-2 font-bold shadow-lg hover:scale-105 transition-transform rounded-lg ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting && (
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                  )}
                  {isSubmitting ? "Processing..." : "Donate now"}
                </Button>
              </div>
            </div>
          )}
          <div className="text-center text-xs text-primary-blue mt-4">
            🔒 100% Secure Donation
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 min-h-[400px] flex flex-col bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-2xl rounded-3xl p-4 sm:p-6 md:p-10 border border-primary-blue/20 dark:border-blue-900 transition-colors duration-300"
        >
          <GiftCarousel />
        </motion.div>
      </div>
      <div className="max-w-5xl mx-auto px-2 sm:px-4 mt-24 mb-20">
        <h2 className="text-3xl font-extrabold text-primary-blue dark:text-blue-200 mb-8 text-center">
          What Our Donors Say
        </h2>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
      <div className="bg-gradient-to-br from-white via-blue-50 to-fresh-green/10 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-primary-blue dark:text-blue-200 mb-4">
              Your Impact in Action
            </h2>
            <p className="text-lg text-fresh-green dark:text-fresh-green/80 font-semibold mb-2">
              Every donation plants a seed of hope.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Thanks to your generosity, lives are being transformed every day.
              Here's how your support is making a real difference in our
              communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                stat: "+500 Women Helped",
                title: "Health & Hygiene",
                desc: "Provides sanitary pads, health camps, and hygiene education for women and children.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
              },
              {
                stat: "120 Scholarships",
                title: "Education",
                desc: "Funds school supplies, scholarships, and after-school programs for underprivileged kids.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
              },
              {
                stat: "10,000+ Meals Served",
                title: "Nutrition",
                desc: "Delivers nutritious meals and supplements to malnourished children and families.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                    />
                  </svg>
                ),
              },
              {
                stat: "75+ Women Entrepreneurs",
                title: "Livelihood",
                desc: "Supports vocational training and micro-enterprise for women and youth.",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                    />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 ring-1 ring-inset ring-fresh-green/20 hover:ring-fresh-green/40 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-blue to-fresh-green mb-3 shadow mt-6">
                  <span className="text-white text-2xl">{item.icon}</span>
                </div>
                <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 transition-colors duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-blue-200 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-primary-blue dark:text-blue-200 font-bold mt-8 text-lg">
            Be the change.{" "}
            <span className="text-fresh-green">Your support matters.</span>
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-16">
          <BhimQR />
          <WaysToDonate />
        </div>
      </div>
    </div>
  );
};

export default DonateForACause;
