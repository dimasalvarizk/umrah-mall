"use client";

import { motion } from "framer-motion";

const ecosystemLogos = [
  { name: "Haseeb Tech", src: "/Ecosystem/Logo6.png" },
  { name: "Visit Saudi", src: "/Ecosystem/Logo2.png" },
  { name: "Catering", src: "/Ecosystem/Logo3.png" },
  { name: "OBST Travel & Tourism", src: "/Ecosystem/Logo4.png" },
  { name: "Smart Services", src: "/Ecosystem/Logo5.png" },
  { name: "DST", src: "/Ecosystem/Logo1.png" },
];

export default function Partners() {
  return (
    <section className="bg-white border-b border-gray-100 overflow-hidden relative pt-20 lg:pt-24">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-default/3 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Inner Gradient Wrapper containing Al Mokhtara Group Content */}
      <div
        className="w-full pt-16 pb-16 md:pt-20 md:pb-20"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(219, 219, 219, 1) 0%, rgba(219, 219, 219, 0) 100%)"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Centered Al Mokhtara Group Logo */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <img
              src="/AiMokhtaraGroup.png"
              alt="Al Mokhtara Group"
              className="h-[96px] md:h-[115px] w-auto object-contain"
            />
          </motion.div>

          {/* Section Heading & Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[65px] lg:leading-[90px] font-bold text-slate-800 mb-6"
          >
            An Integrated <span className="text-[#D3BD67]">Ecosystem</span> at Your Service
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed mt-4"
          >
            We are proud of our long-standing partnership with our sister companies,<br className="hidden md:inline" />
            delivering a seamless experience tailored to meet all your needs.
          </motion.p>
        </div>
      </div>

      {/* Infinite Scroll Marquee Container (Solid White Background Bar) */}
      <div className="relative flex items-center w-full py-8 overflow-hidden bg-white border-t border-gray-200/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
        {/* Left & Right Fading Overlays (matching the white background) */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex w-max animate-marquee gap-12 md:gap-16">
          {[...ecosystemLogos, ...ecosystemLogos, ...ecosystemLogos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-28 w-60 select-none shrink-0">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-[84px] max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
