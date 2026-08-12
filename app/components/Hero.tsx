"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-36 pb-16 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden scale-105">
        <Image
          src="/hero_bg.png"
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Black Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-black/40 to-black/75 z-0" />
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Light Ray & Sun Glow Effects (Putih-putih) */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-white/20 filter blur-[120px] z-0 pointer-events-none" />
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen filter blur-[60px]"
        style={{
          background: "linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.1) 42%, rgba(255, 255, 255, 0.45) 50%, rgba(255, 255, 255, 0.1) 58%, transparent 70%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 65%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 65%)",
        }}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex-grow flex flex-col justify-center items-center text-center pt-8">
        {/* Headline & Subtitles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-5xl figma-headline text-white mb-8 mx-auto relative">
            Your <span className="text-[#D3BD67]">All-in-One</span> Destination for{" "}
            <span className="relative inline-block pb-2 lg:inline-flex lg:flex-col lg:items-center">
              Hajj & Umrah
              <img
                src="/Undeline.png"
                alt="Underline indicator"
                className="absolute -bottom-1.5 left-0 w-full h-[8px] object-contain"
              />
            </span>
          </h1>
          <p
            className="text-sm sm:text-base text-gray-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed mt-4"
            style={{ fontFamily: "var(--font-cairo), sans-serif" }}
          >
            From trip preparations and essentials to booking affordable Umrah <br className="hidden sm:inline" />
            packages; your premier platform for a seamless spiritual journey.
          </p>
        </motion.div>

        {/* CTA Buttons (Sign in & Contact Us) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href="#login"
            className="px-6 py-2.5 rounded-full bg-gold-default hover:bg-gold-accent text-dark-bg font-semibold text-xs transition-all shadow-md active:scale-95"
          >
            Sign in
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full border border-gold-default/45 hover:border-gold-default text-white hover:bg-white/5 font-semibold text-xs transition-all active:scale-95"
          >
            Contact Us
          </a>
        </motion.div>
      </div>

    </section>
  );
}

