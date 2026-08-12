"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, FileText, CheckCircle2 } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Search & Select",
    desc: "Browse and select from customizable Hajj/Umrah packages and Haramain rail options suited to your journey.",
    icon: Search,
    coords: { x: 100, y: 120 }, // desktop positioning
    align: "top",
  },
  {
    id: 2,
    title: "Provide Details",
    desc: "Complete passenger profiles, upload passport info, and select customizable accommodation additions.",
    icon: FileText,
    coords: { x: 600, y: 280 },
    align: "bottom",
  },
  {
    id: 3,
    title: "Book & Confirm",
    desc: "Check out securely, receive instant ticket confirmations, and download your detailed itineraries.",
    icon: CheckCircle2,
    coords: { x: 1100, y: 120 },
    align: "top",
  },
];

export default function JourneySteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Map scroll progress to path drawing
  const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      id="guide" 
      className="bg-dark-bg py-24 relative overflow-hidden border-b border-dark-border"
    >
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gold-default/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gold-default/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-default mb-2 block">
            Simplifying Travel
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Your Spiritual Journey in <span className="gold-text-gradient">3 Simple Steps</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 mt-4 max-w-xl mx-auto font-light">
            An intuitive and transparent pathway designed to prepare you for your pilgrimage with zero stress.
          </p>
        </div>

        {/* Desktop Layout (> 1024px) */}
        <div className="hidden lg:block relative h-[500px] w-full">
          {/* SVG S-Curve Line */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 1200 400"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background dotted path */}
            <path
              d="M 100,150 C 350,150 250,300 600,300 C 950,300 850,150 1100,150"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="4"
              strokeDasharray="8 8"
            />
            {/* Animated Solid gold path */}
            <motion.path
              d="M 100,150 C 350,150 250,300 600,300 C 950,300 850,150 1100,150"
              stroke="url(#goldGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength }}
            />
            
            {/* Gradient definition for SVG */}
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f3e8d2" />
                <stop offset="50%" stopColor="#c5a880" />
                <stop offset="100%" stopColor="#a88a60" />
              </linearGradient>
            </defs>
          </svg>

          {/* Steps Rendering */}
          {steps.map((step) => {
            const Icon = step.icon;
            const isTop = step.align === "top";

            return (
              <div
                key={step.id}
                className="absolute transition-all duration-300"
                style={{
                  left: `${step.coords.x - 175}px`, // Center the 350px card
                  top: isTop ? "30px" : "210px",
                  width: "350px",
                }}
              >
                {/* Floating Large Background Number */}
                <motion.div
                  animate={{
                    y: [-4, 4, -4],
                  }}
                  transition={{
                    duration: 3 + step.id,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-16 left-6 text-9xl font-black text-white/[0.02] select-none pointer-events-none"
                >
                  {step.id}
                </motion.div>

                {/* Content Box */}
                <motion.div
                  initial={{ opacity: 0, y: isTop ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: step.id * 0.1 }}
                  className="bg-dark-card/60 backdrop-blur-md border border-white/5 hover:border-gold-default/30 p-6 rounded-2xl flex flex-col items-center text-center shadow-lg group relative"
                >
                  {/* Step Point Indicator on the path */}
                  <div
                    className="absolute w-5 h-5 rounded-full bg-dark-bg border-4 border-gold-default left-1/2 -translate-x-1/2 z-10 transition-transform group-hover:scale-125 shadow-md shadow-gold-default/20"
                    style={{
                      top: isTop ? "106%" : "-30px",
                    }}
                  />

                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-full bg-gold-default/10 text-gold-default flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-default transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Tablet & Mobile Layout (< 1024px) */}
        <div className="lg:hidden relative pl-8 md:pl-16 max-w-lg mx-auto">
          {/* Vertical Path Line */}
          <div className="absolute left-[26px] md:left-[58px] top-4 bottom-4 w-0.5 bg-white/5">
            <motion.div
              style={{ scaleY: scrollYProgress, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-gold-light via-gold-default to-gold-dark origin-top"
            />
          </div>

          {/* Steps stack */}
          <div className="flex flex-col gap-12">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col md:flex-row items-start gap-4 md:gap-6 group"
                >
                  {/* Step Bullet Dot */}
                  <div className="absolute -left-[14px] md:-left-[22px] top-3.5 w-7 h-7 rounded-full bg-dark-bg border-4 border-gold-default flex items-center justify-center z-10 shadow-lg">
                    <span className="text-[9px] font-bold text-white">{step.id}</span>
                  </div>

                  {/* Icon Card */}
                  <div className="w-10 h-10 rounded-xl bg-gold-default/10 text-gold-default flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Content Container */}
                  <div className="bg-white/5 border border-white/5 hover:border-gold-default/20 p-6 rounded-2xl flex-grow shadow-md">
                    {/* Big background floating number */}
                    <div className="absolute right-4 bottom-2 text-7xl font-bold text-white/[0.01] pointer-events-none select-none">
                      {step.id}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-default transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
