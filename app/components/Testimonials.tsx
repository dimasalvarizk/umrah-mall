"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Hadi",
    image: "/Testimonial/testi1.png",
    quote: "Umrah Mall exceeded all my expectations. Their meticulous attention to detail made the Umrah experience a truly unforgettable journey.",
  },
  {
    id: 2,
    name: "Aisha Rahma",
    image: "/Testimonial/testi1.png",
    quote: "Booking train tickets from Jeddah to Makkah was incredibly seamless. The platform is extremely fast, and the customer service helped verify our visa requirements within minutes.",
  },
  {
    id: 3,
    name: "Yusuf Mansur",
    image: "/Testimonial/testi1.png",
    quote: "The integrated ecosystem is outstanding. Everything from visa guidance to train scheduling and hotel connections was handled perfectly. I could fully focus on my prayers without any worries.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section className="bg-transparent pt-24 pb-20 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold-default/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Testimonial Card Wrapper (Offset Overlapping Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center max-w-4xl mx-auto">

          {/* Left Column: Portrait Card (Static with shadow) */}
          <div className="col-span-1 md:col-span-5 relative z-20 justify-self-center md:justify-self-end -mr-0 md:-mr-16 lg:-mr-20 md:-mt-8 lg:-mt-12">
            <div className="relative w-[280px] h-[360px] md:w-[300px] md:h-[390px]">
              {/* Image Container with overflow-hidden */}
              <div className="w-full h-full rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-gray-50 border border-gray-100">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Floating Gold "Next >" button */}
              <button
                onClick={nextTestimonial}
                className="absolute bottom-16 -left-8 md:-left-12 bg-[#D3BD67] hover:bg-[#b8a24c] text-white text-xs font-semibold px-8 py-2.5 rounded-full flex items-center gap-1 shadow-[0_6px_15px_rgba(211,189,103,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer z-30"
              >
                Next <span className="font-bold text-[10px]">&gt;</span>
              </button>
            </div>
          </div>

          {/* Right Column: White Offset Content Card */}
          <div className="col-span-1 md:col-span-7 w-full relative z-10">
            <div
              style={{
                "--offset-md": "240px", // Atur seberapa jauh card putih melebar ke kiri (md)
                "--offset-lg": "250px", // Atur seberapa jauh card putih melebar ke kiri (lg)
              } as React.CSSProperties}
              className="bg-white border border-gray-100 rounded-[32px] p-8 md:p-12 pl-8 md:pl-[calc(135px+var(--offset-md))] lg:pl-[calc(150px+var(--offset-lg))] md:-ml-[var(--offset-md)] md:w-[calc(100%+var(--offset-md))] lg:-ml-[var(--offset-lg)] lg:w-[calc(100%+var(--offset-lg))] shadow-[0_15px_45px_rgba(0,0,0,0.06)] relative w-full min-h-[300px] flex flex-col justify-between"
            >

              {/* Large Faint Quote Mark Background */}
              <span className="absolute left-[60%] -bottom-16 text-[180px] font-serif text-gray-100 leading-none select-none pointer-events-none -z-0">
                “
              </span>

              <div className="relative z-10 flex flex-col justify-between h-full w-full">

                {/* Heading with thumbs up circle icon */}
                <div className="flex items-center gap-3 mb-6">
                  <img src="/Testimonial/Like.png" alt="Like" className="w-8 h-8 object-contain shrink-0" />
                  <h2 className="text-lg md:text-xl font-bold text-gray-800 tracking-tight">
                    Read What <span className="text-[#D3BD67]">Others</span> Say
                  </h2>
                </div>

                {/* Quote text with slide animation */}
                <div className="min-h-[100px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="font-cairo text-gray-600 text-sm md:text-base leading-relaxed font-medium"
                    >
                      {current.quote}
                    </motion.p>
                  </AnimatePresence>
                </div>

              </div>

              {/* Author Name positioned absolutely in the bottom-right corner of the card wrapper */}
              <div className="absolute bottom-6 right-8 md:bottom-8 md:right-12">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-lg md:text-xl font-extrabold text-gray-800"
                  >
                    {current.name}
                  </motion.span>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
