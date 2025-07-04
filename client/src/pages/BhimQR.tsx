import React from 'react';
import { motion } from 'framer-motion';

const BhimQR: React.FC = () => {
  return (
    <section className="px-4 py-10 md:px-12">
      <motion.div 
        className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16 border border-primary-blue/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-primary-blue mb-2">
            USE BHIM UPI TO DONATE DIRECTLY TO HOUSE OF HUMANITY
          </h2>
          <p className="text-dark-gray text-sm md:text-base">
            Scan the QR code below to make a secure UPI payment directly to our foundation.
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="bg-white p-4 rounded-2xl shadow-lg border border-primary-blue/20">
            <img
              src="/assets/qrcode-upi.png"
              alt="BHIM QR code for UPI donation"
              className="object-contain w-32 h-32 md:w-40 md:h-40"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BhimQR;
