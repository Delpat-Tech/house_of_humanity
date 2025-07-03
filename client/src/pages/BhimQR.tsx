import React from 'react';

const BhimQR: React.FC = () => {
  return (
    <section className="px-4 py-10 md:px-12">
      <div className="bg-gray-100 p-6 md:p-10 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6 md:gap-16 shadow-md">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            USE BHIM UPI TO DONATE DIRECTLY TO DESAI FOUNDATION TRUST
          </h2>
        </div>
        <div className="flex-shrink-0">
          <img
            src="/assets/qrcode-upi.png"
            alt="BHIM QR code for UPI donation"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default BhimQR;
