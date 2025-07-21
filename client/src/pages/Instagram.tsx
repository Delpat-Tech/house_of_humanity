import React, { useEffect } from "react";

const Instagram = () => {
  useEffect(() => {
    if (
      document.querySelector(
        'script[src="https://static.elfsight.com/platform/platform.js"]'
      )
    ) {
      // The script is already on the page, don't add it again.
      return;
    }
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Dynamically apply styles to the branding link
    const observer = new MutationObserver(() => {
      const link = document.querySelector('a[href*="utm_campaign=free-widget"]') as HTMLAnchorElement | null;
      if (link) {
        // Check if dark mode is active
        const isDarkMode = document.documentElement.classList.contains('dark');
        if (isDarkMode) {
          link.style.setProperty('background-color', '#202938', 'important'); // Match dark-gray or use #1f2937 for dark:bg-gray-800
          link.style.setProperty('color', '#202938', 'important');
          link.style.setProperty('pointer-events', 'none', 'important');
          const svg = link.querySelector('svg') as SVGSVGElement | null;
          if (svg) {
            svg.style.setProperty('fill', '#202938', 'important');
          }
        } else {
          link.style.setProperty('background-color', 'white', 'important');
          link.style.setProperty('color', 'white', 'important');
          link.style.setProperty('pointer-events', 'none', 'important');
          const svg = link.querySelector('svg') as SVGSVGElement | null;
          if (svg) {
            svg.style.setProperty('fill', 'white', 'important');
          }
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.removeChild(script);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <style>
        {`
          div.elfsight-app-e55db66f-3fff-4a9c-aae1-bf299435a299 + a[href*="utm_campaign=free-widget"] {
            background-color: white !important;
            color: white !important;
            pointer-events: none !important;
          }
          div.elfsight-app-e55db66f-3fff-4a9c-aae1-bf299435a299 + a[href*="utm_campaign=free-widget"] svg {
            fill: white !important;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">
          Follow us on Instagram
        </h2>
        <div className="mt-8">
          <div
            className="elfsight-app-e55db66f-3fff-4a9c-aae1-bf299435a299"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
