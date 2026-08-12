"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    id: 0,
    title: "KSA Ministry License",
    image: "/cert_umrah.png",
  },
  {
    id: 1,
    title: "IATA Accreditation",
    image: "/cert_umrah.png",
  },
  {
    id: 2,
    title: "Haramain Rail Partner",
    image: "/cert_umrah.png",
  },
  {
    id: 3,
    title: "ISO 9001:2015 Certification",
    image: "/cert_umrah.png",
  },
  {
    id: 4,
    title: "Ministry of Tourism License",
    image: "/cert_umrah.png",
  },
];

export default function Recognition() {
  const [activeIndex, setActiveIndex] = useState(2); // Center card active by default
  const [prevActiveIndex, setPrevActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000); // Geser otomatis setiap 4 detik
    return () => clearInterval(timer);
  }, [activeIndex]);

  // Sync prevActiveIndex on activeIndex change to detect card wrap-around
  useEffect(() => {
    setPrevActiveIndex(activeIndex);
  }, [activeIndex]);

  const getCircularDistance = (index: number, currentActiveIndex: number, length: number) => {
    let diff = index - currentActiveIndex;
    while (diff < -Math.floor(length / 2)) diff += length;
    while (diff > Math.floor(length / 2)) diff -= length;
    return diff;
  };

  return (
    <section className="bg-transparent pt-0 pb-24 relative overflow-hidden">
      {/* Decorative backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#74C081]/5 rounded-full filter blur-[120px] pointer-events-none" />

      {/* Edge gradient overlays for smooth blending */}
      <div className="absolute top-0 left-0 bottom-0 w-[15%] md:w-[25%] bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none backdrop-blur-[1px]" />
      <div className="absolute top-0 right-0 bottom-0 w-[15%] md:w-[25%] bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none backdrop-blur-[1px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
            Our Excellence in <span className="text-[#D3BD67]">Numbers</span> and Official Recognition
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-4 max-w-2xl mx-auto font-medium leading-relaxed">
            Excellence is never a coincidence; it is the outcome of our dedication to the highest quality standards in serving the guests of Allah, culminating in our consistent top rankings in official performance indicators.
          </p>
        </div>

        {/* 3D Coverflow Stack Container */}
        <div className="relative h-[250px] md:h-[400px] flex items-center justify-center overflow-visible select-none max-w-5xl mx-auto">
          {certificates.map((cert, index) => {
            const diff = getCircularDistance(index, activeIndex, certificates.length);
            const oldDiff = getCircularDistance(index, prevActiveIndex, certificates.length);
            const isWrapping = Math.abs(diff - oldDiff) > 1;
            const isActive = diff === 0;

            // Calculate positioning and design based on circular distance
            let positionX = 0;
            let scale = 0.8;
            let zIndex = 0;

            if (isMobile) {
              if (diff === 0) {
                positionX = 0;
                scale = 1;
                zIndex = 10;
              } else if (diff === -1) {
                positionX = -90;
                scale = 0.85;
                zIndex = 5;
              } else if (diff === 1) {
                positionX = 90;
                scale = 0.85;
                zIndex = 5;
              } else if (diff === -2) {
                positionX = -170;
                scale = 0.72;
                zIndex = 2;
              } else if (diff === 2) {
                positionX = 170;
                scale = 0.72;
                zIndex = 2;
              }
            } else {
              if (diff === 0) {
                positionX = 0;
                scale = 1;
                zIndex = 10;
              } else if (diff === -1) {
                positionX = -260;
                scale = 0.85;
                zIndex = 5;
              } else if (diff === 1) {
                positionX = 260;
                scale = 0.85;
                zIndex = 5;
              } else if (diff === -2) {
                positionX = -460;
                scale = 0.72;
                zIndex = 2;
              } else if (diff === 2) {
                positionX = 460;
                scale = 0.72;
                zIndex = 2;
              }
            }

            // Determine opacity based on wrap state and position
            const opacity = isWrapping
              ? 0
              : isActive
                ? 1
                : Math.abs(diff) === 1
                  ? 0.85
                  : 0.35;

            // Use spring physics for smooth, organic motion except when wrapping
            const cardTransition = isWrapping
              ? { duration: 0 }
              : {
                type: "spring" as const,
                stiffness: 150,
                damping: 20,
                mass: 0.8,
              };

            return (
              <motion.div
                key={cert.id}
                style={{ zIndex }}
                animate={{
                  x: positionX,
                  scale: scale,
                  opacity: opacity,
                }}
                transition={cardTransition}
                onClick={() => {
                  if (!isActive) {
                    setActiveIndex(index);
                  }
                }}
                className="absolute w-[300px] md:w-[520px] h-[180px] md:h-[300px] rounded-[24px] md:rounded-[36px] bg-transparent shadow-[0_15px_35px_rgba(0,0,0,0.12)] flex items-center justify-center cursor-pointer overflow-hidden"
              >
                {/* Background Overlays for smooth GPU-accelerated transition */}
                <div
                  className="absolute inset-0 bg-[#3D8049] transition-opacity duration-700 ease-in-out"
                  style={{ opacity: diff === -2 ? 1 : 0 }}
                />
                <div
                  className="absolute inset-0 bg-[#143F1A] transition-opacity duration-700 ease-in-out"
                  style={{ opacity: diff === -1 ? 1 : 0 }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#143F1A] to-[#8AD493] transition-opacity duration-700 ease-in-out"
                  style={{ opacity: diff === 0 ? 1 : 0 }}
                />
                <div
                  className="absolute inset-0 bg-[#8AD493] transition-opacity duration-700 ease-in-out"
                  style={{ opacity: diff === 1 ? 1 : 0 }}
                />
                <div
                  className="absolute inset-0 bg-[#A1E2A9] transition-opacity duration-700 ease-in-out"
                  style={{ opacity: diff === 2 ? 1 : 0 }}
                />

                {/* Certificate White Sheet */}
                <div className="w-[82%] h-[84%] rounded-[16px] md:rounded-[24px] overflow-hidden bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] relative flex items-center justify-center z-10">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 768px) 260px, 440px"
                    className="object-cover"
                    priority={isActive}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3D Stack Navigation Controls & Bullet Indicators */}
        <div className="flex flex-col items-center gap-6 mt-12">
          <div className="flex items-center gap-6">
            <button
              onClick={handlePrev}
              className="text-gray-400 hover:text-gold-default transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 stroke-[1.5]" />
            </button>
            <div className="flex items-center gap-2">
              {certificates.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeIndex === i ? "bg-gold-default" : "bg-gray-200"
                    }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="text-gray-400 hover:text-gold-default transition-colors cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
