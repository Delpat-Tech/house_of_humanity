import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface LoaderProps {
  show: boolean;
  onFadeOut: () => void;
}

const Loader: React.FC<LoaderProps> = ({ show, onFadeOut }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const highlightRingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Particle elements
  const createParticles = () => {
    return Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className="absolute animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${3 + Math.random() * 2}s`,
        }}
      >
        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-40" />
      </div>
    ));
  };

  // Entrance animation
  useEffect(() => {
    if (show && logoRef.current) {
      if (timelineRef.current) timelineRef.current.kill();
      const tl = gsap.timeline();
      timelineRef.current = tl;

      gsap.set(
        [
          logoRef.current,
          logoContainerRef.current,
          orbitRef.current,
          glowRef.current,
          backgroundRef.current,
          highlightRingRef.current,
        ],
        { opacity: 0, scale: 0 }
      );

      tl.to(backgroundRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });

      tl.to(
        logoContainerRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

      tl.to(
        glowRef.current,
        {
          opacity: 0.7,
          scale: 1.2,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.6"
      );

      tl.to(
        logoRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
        },
        "-=1"
      );

      tl.to(
        orbitRef.current,
        {
          scale: 1,
          opacity: 0.6,
          duration: 1,
          ease: "power2.out",
        },
        "-=1"
      );

      tl.to(
        highlightRingRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
        "-=1.2"
      );

      // Continuous animations
      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 10,
        ease: "none",
        repeat: -1,
      });

      gsap.to(glowRef.current, {
        scale: 1.5,
        opacity: 0.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(highlightRingRef.current, {
        scale: 1.2,
        opacity: 0.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(logoRef.current, {
        y: -8,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, [show]);

  // Exit animation
  useEffect(() => {
    if (!show && loaderRef.current) {
      if (timelineRef.current) timelineRef.current.kill();

      const exitTl = gsap.timeline();

      exitTl.to(logoRef.current, {
        opacity: 0,
        scale: 1.3,
        y: -40,
        duration: 0.6,
        ease: "power2.inOut",
      });

      exitTl.to(
        logoContainerRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: "power2.in",
        },
        "-=0.5"
      );

      exitTl.to(
        backgroundRef.current,
        {
          y: "-100%",
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.4"
      );

      exitTl.to(
        loaderRef.current,
        {
          y: "-100%",
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            onFadeOut();
            animatePageLoad(); // ✅ Immediately animate content
          },
        },
        "-=0.6"
      );
    }
  }, [show, onFadeOut]);

  const animatePageLoad = () => {
    gsap.fromTo(
      "header, main, .main-content, footer, [data-header], [data-main-content], [data-footer]",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.05,
      }
    );
  };

  useEffect(() => {
    return () => {
      if (timelineRef.current) timelineRef.current.kill();
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ${
        show ? "" : "pointer-events-none"
      }`}
      style={{ opacity: show ? 1 : 0 }}
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-green-900/20"
      />

      {/* Background particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden">
        {createParticles()}
      </div>

      {/* Logo Container */}
      <div className="relative z-10 flex items-center justify-center">
        <div
          ref={logoContainerRef}
          className="relative p-12 md:p-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/40 dark:border-gray-700/40"
        >
          {/* Glow */}
          <div
            ref={glowRef}
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/30 to-green-400/30 blur-3xl"
          />

          {/* Orbit Rings */}
          <div
            ref={orbitRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="absolute w-44 h-44 border border-blue-300/30 rounded-full blur-sm" />
            <div className="absolute w-36 h-36 border border-green-300/30 rounded-full blur-md" />
            <div className="absolute w-28 h-28 border border-blue-200/20 rounded-full blur" />
          </div>

          {/* Highlight Spark Ring */}
          <div
            ref={highlightRingRef}
            className="absolute w-full h-full rounded-full border-2 border-white/20 blur-xl"
          />

          {/* Logo Image */}
          <img
            ref={logoRef}
            src="/logo192.png"
            alt="House of Humanity Logo"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 relative z-20 mx-auto my-auto object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
