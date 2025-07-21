import React, { useEffect } from 'react';

const Instagram = () => {
  useEffect(() => {
    if (document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      // The script is already on the page, don't add it again.
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">
          Follow us on Instagram
        </h2>
        <div className="mt-8">
          <div className="elfsight-app-e55db66f-3fff-4a9c-aae1-bf299435a299" data-elfsight-app-lazy></div>
        </div>
      </div>
    </div>
  );
};

export default Instagram; 