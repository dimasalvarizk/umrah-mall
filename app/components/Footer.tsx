"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Logo = ({ className = "h-10" }: { className?: string }) => (
  <img
    src="/Logo2.png"
    alt="UMRAH Mall"
    className={`${className} w-auto object-contain transition-opacity duration-200 hover:opacity-90 cursor-pointer`}
  />
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setSubscribed(true);
      setTimeout(() => {
        setName("");
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#F5F5F5] text-gray-600 relative overflow-hidden">
      {/* 1. Newsletter CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div
          className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.1)] px-8 py-16 md:px-12 md:py-24 text-center z-10"
        >
          <Image
            src="/Footer/Mosque.jpg"
            alt="Newsletter Background"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-[center_72%] z-0"
          />
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-10" />

          <div className="relative z-20 max-w-3xl mx-auto">
            <h3 
              className="text-2xl md:text-3xl font-bold text-white mb-6"
              style={{ fontFamily: "'All Genders v4', 'All Genders', sans-serif" }}
            >
              Subscribe To Our Newsletter
            </h3>

            {subscribed ? (
              <div 
                className="py-3 px-6 rounded-xl bg-gold-default/20 border border-gold-default/30 text-gold-default font-semibold text-sm inline-flex items-center gap-2 animate-pulse"
                style={{ fontFamily: "'All Genders v4', 'All Genders', sans-serif" }}
              >
                <span>Thank you! You have successfully subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 items-center max-w-2xl mx-auto">
                <input
                  type="text"
                  required
                  placeholder="First name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full sm:flex-1 px-5 py-3.5 bg-white border border-gray-200 focus:border-[#D3BD67] focus:outline-none rounded-xl text-sm text-gray-800 placeholder-gray-400 transition-colors shadow-sm"
                  style={{ fontFamily: "'All Genders v4', 'All Genders', sans-serif" }}
                />
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:flex-1 px-5 py-3.5 bg-white border border-gray-200 focus:border-[#D3BD67] focus:outline-none rounded-xl text-sm text-gray-800 placeholder-gray-400 transition-colors shadow-sm"
                  style={{ fontFamily: "'All Genders v4', 'All Genders', sans-serif" }}
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#161616] hover:bg-black text-white font-semibold text-sm rounded-xl transition-all shadow-md active:scale-95 whitespace-nowrap"
                  style={{ fontFamily: "'All Genders v4', 'All Genders', sans-serif" }}
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* 2. Main Footer Directory & Bottom Bar in Cairo Font */}
      <div style={{ fontFamily: "var(--font-cairo), sans-serif" }}>
        {/* 2. Main Footer Directory */}
        <div className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Column 1: Logo & Company Address */}
          <div className="md:col-span-6 flex flex-col gap-5">
            <Link href="/">
              <Logo className="h-[36px]" />
            </Link>
            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-md">
              Hsoub Tech Trading Company, MC Floor,<br />
              Al Mukhtara Tower, King Faisal Ring Road,<br />
              Al Suqya District - Medina, 42315,<br />
              Kingdom of Saudi Arabia.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-200/70 hover:bg-gray-300 flex items-center justify-center text-gray-700 transition-colors">
                <TwitterIcon className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#D3BD67] hover:bg-[#b8a24c] flex items-center justify-center text-white transition-colors">
                <FacebookIcon className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-200/70 hover:bg-gray-300 flex items-center justify-center text-gray-700 transition-colors">
                <InstagramIcon className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: HELP */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="text-sm font-bold text-[#D3BD67] uppercase tracking-wider">Help</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-700 font-medium">
              <li><Link href="#" className="hover:text-[#D3BD67] transition-colors">Costumer Service</Link></li>
              <li><Link href="#" className="hover:text-[#D3BD67] transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-[#D3BD67] transition-colors">Privacy</Link></li>
            </ul>
          </div>

          {/* Column 3: UMRAH MALL */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <h4 className="text-sm font-bold text-[#D3BD67] uppercase tracking-wider">Umrah Mall</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-700 font-medium">
              <li><Link href="#" className="hover:text-[#D3BD67] transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-[#D3BD67] transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-[#D3BD67] transition-colors">Choose Package</Link></li>
              <li><Link href="#" className="hover:text-[#D3BD67] transition-colors">Become a Partner</Link></li>
            </ul>
          </div>
        </div>

        {/* 3. Bottom Bar */}
        <div className="py-6 border-t border-gray-200 text-center text-xs text-gray-500 font-medium">
          <p>© Copyright 2026,UmrahMall, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
