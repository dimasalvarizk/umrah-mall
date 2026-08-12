"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Briefcase, Users, Search, ChevronDown, Check, Building2 } from "lucide-react";

const stations = [
  { name: "Makkah", code: "MAK", desc: "Makkah Station" },
  { name: "Madinah", code: "MAD", desc: "Madinah Station" },
  { name: "Jeddah Airport (KAIA)", code: "JED-A", desc: "King Abdulaziz Int'l Airport" },
  { name: "Jeddah Central", code: "JED-C", desc: "Al-Sulimaniyah Station" },
  { name: "KAEC Rabigh", code: "KAEC", desc: "King Abdullah Economic City" },
];

const tripTypes = ["One Way", "Round Trip"];
const guestClasses = [
  "1 Guest, Economy Class",
  "2 Guests, Economy Class",
  "1 Guest, Business Class",
  "2 Guests, Business Class",
  "Family, Economy Class",
];

const TrainIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Train Nose & Body */}
    <path d="M2 10h12c3 0 7 2 7 5H2v-5Z" />
    {/* Cockpit Window */}
    <path d="M13 11h4.5c.8 0 1.5.5 1.5 1.2v.8h-6v-2Z" />
    {/* Left speed lines */}
    <path d="M2 12.5h4" />
    {/* Tracks and Sleepers */}
    <path d="M1 18h22" />
    <path d="M4 18v2M9 18v2M14 18v2M19 18v2" />
  </svg>
);

export default function BookingWidget() {
  const [arrival, setArrival] = useState<typeof stations[0] | null>(null);
  const [departure, setDeparture] = useState<typeof stations[0] | null>(null);
  const [departureDate, setDepartureDate] = useState("");
  const [tripType, setTripType] = useState("");
  const [guestClass, setGuestClass] = useState("");

  const [arrivalOpen, setArrivalOpen] = useState(false);
  const [departureOpen, setDepartureOpen] = useState(false);
  const [tripTypeOpen, setTripTypeOpen] = useState(false);
  const [guestClassOpen, setGuestClassOpen] = useState(false);

  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-full max-w-[1200px] mx-auto rounded-tr-[24px] rounded-b-[24px] bg-white border border-gray-100 shadow-[0_25px_60px_rgba(0,0,0,0.18)] p-6 md:p-8 relative z-10"
    >
      {/* Header Tab (Gold background with a surrounding thick white frame/border matching the reference) */}
      <div className="absolute -top-[50px] left-0 bg-white p-1.5 pb-2 rounded-t-[24px] rounded-b-none flex items-center justify-center z-20">
        <div className="bg-[#D3BD67] text-white font-bold text-xs md:text-sm px-8 py-3.5 rounded-[18px] flex items-center gap-2 shadow-md">
          <TrainIcon className="w-4.5 h-4.5 text-white" />
          <span>Haramain Train Booking</span>
        </div>
      </div>

      {/* Main Outer Grid Layout (Forms columns + Search button column) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch mt-3">

        {/* Left Side: Form Fields occupying 10 of 12 columns */}
        <div className="lg:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-1.5">

          {/* Row 1: 1. Arrival Station */}
          <div className="relative">
            <button
              onClick={() => {
                setArrivalOpen(!arrivalOpen);
                setDepartureOpen(false);
                setTripTypeOpen(false);
                setGuestClassOpen(false);
              }}
              className="w-full flex items-center justify-between px-6 py-3 bg-[#E3E3E3] hover:bg-[#D6D6D6] transition-all rounded-t-[24px] rounded-b-none md:rounded-t-[46.21px] md:rounded-b-none text-left text-gray-800 h-[56px] border border-transparent focus:border-[#D3BD67]/30"
            >
              <div className="flex items-center gap-2">
                <span className={arrival ? "text-sm font-bold text-gray-800" : "text-sm font-semibold text-gray-500"}>
                  {arrival ? arrival.name : "Arrival"}
                </span>
                <Calendar className="w-4 h-4 text-gray-500 shrink-0" />
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
            </button>

            <AnimatePresence>
              {arrivalOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 right-0 mt-2 bg-white border border-gray-100 rounded-[20px] shadow-2xl z-50 max-h-56 overflow-y-auto scrollbar-thin"
                >
                  {stations.map((st) => (
                    <button
                      key={st.code}
                      onClick={() => {
                        setArrival(st);
                        setArrivalOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-gray-50 text-xs text-gray-700 border-b border-gray-100 last:border-0 font-medium"
                    >
                      <div>
                        <p className="font-semibold text-gray-800">{st.name}</p>
                        <p className="text-[10px] text-gray-400 font-light">{st.desc}</p>
                      </div>
                      {arrival?.code === st.code && <Check className="w-4 h-4 text-[#D3BD67]" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Row 1: 2. Departure Station */}
          <div className="relative">
            <button
              onClick={() => {
                setDepartureOpen(!departureOpen);
                setArrivalOpen(false);
                setTripTypeOpen(false);
                setGuestClassOpen(false);
              }}
              className="w-full flex items-center justify-between px-6 py-3 bg-[#E3E3E3] hover:bg-[#D6D6D6] transition-all rounded-none md:rounded-t-[46.21px] md:rounded-b-none text-left text-gray-800 h-[56px] border border-transparent focus:border-[#D3BD67]/30"
            >
              <div className="flex items-center gap-2">
                <span className={departure ? "text-sm font-bold text-gray-800" : "text-sm font-semibold text-gray-500"}>
                  {departure ? departure.name : "Departure"}
                </span>
                <Calendar className="w-4 h-4 text-gray-500 shrink-0" />
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
            </button>

            <AnimatePresence>
              {departureOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 right-0 mt-2 bg-white border border-gray-100 rounded-[20px] shadow-2xl z-50 max-h-56 overflow-y-auto scrollbar-thin"
                >
                  {stations.map((st) => (
                    <button
                      key={st.code}
                      onClick={() => {
                        setDeparture(st);
                        setDepartureOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-gray-50 text-xs text-gray-700 border-b border-gray-100 last:border-0 font-medium"
                    >
                      <div>
                        <p className="font-semibold text-gray-800">{st.name}</p>
                        <p className="text-[10px] text-gray-400 font-light">{st.desc}</p>
                      </div>
                      {departure?.code === st.code && <Check className="w-4 h-4 text-[#D3BD67]" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Row 1: 3. Departure Date */}
          <div className="relative">
            <div className="w-full flex items-center justify-between px-6 py-3 bg-[#E3E3E3] rounded-none md:rounded-t-[46.21px] md:rounded-b-none text-left text-gray-800 h-[56px] border border-transparent relative">
              <div className="flex items-center gap-1.5">
                <span className={departureDate ? "text-sm font-bold text-gray-800" : "text-sm font-semibold text-gray-500"}>
                  {departureDate ? departureDate : "Departure Date"}
                </span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-gray-500 shrink-0 pointer-events-none absolute right-6 top-1/2 -translate-y-1/2" />
                <input
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
                />
              </div>
            </div>
          </div>

          {/* Row 2: 4. Trip Type (Spans 2 columns on desktop) */}
          <div className="relative md:col-span-2">
            <button
              onClick={() => {
                setTripTypeOpen(!tripTypeOpen);
                setArrivalOpen(false);
                setDepartureOpen(false);
                setGuestClassOpen(false);
              }}
              className="w-full flex items-center justify-between px-6 py-3 bg-[#E3E3E3] hover:bg-[#D6D6D6] transition-all rounded-none md:rounded-b-[46.21px] md:rounded-t-none text-left text-gray-800 h-[56px] border border-transparent focus:border-[#D3BD67]/30"
            >
              <div className="flex items-center gap-2">
                <span className={tripType ? "text-sm font-bold text-gray-800" : "text-sm font-semibold text-gray-500"}>
                  {tripType ? tripType : "Trip Type"}
                </span>
                <Briefcase className="w-4 h-4 text-gray-500 shrink-0" />
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
            </button>

            <AnimatePresence>
              {tripTypeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 right-0 mt-2 bg-white border border-gray-100 rounded-[20px] shadow-2xl z-50 overflow-hidden"
                >
                  {tripTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setTripType(type);
                        setTripTypeOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-5 py-3.5 text-left hover:bg-gray-50 text-xs text-gray-700 border-b border-gray-100 last:border-0 font-medium"
                    >
                      <span>{type}</span>
                      {tripType === type && <Check className="w-4 h-4 text-[#D3BD67]" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Row 2: 5. Guests & Class (Spans 1 column on desktop) */}
          <div className="relative">
            <button
              onClick={() => {
                setGuestClassOpen(!guestClassOpen);
                setArrivalOpen(false);
                setDepartureOpen(false);
                setTripTypeOpen(false);
              }}
              className="w-full flex items-center justify-between px-6 py-3 bg-[#E3E3E3] hover:bg-[#D6D6D6] transition-all rounded-b-[24px] rounded-t-none md:rounded-b-[46.21px] md:rounded-t-none text-left text-gray-800 h-[56px] border border-transparent focus:border-[#D3BD67]/30"
            >
              <div className="flex items-center gap-2">
                <span className={guestClass ? "text-sm font-bold text-gray-800" : "text-sm font-semibold text-gray-500"}>
                  {guestClass ? guestClass : "Guests & Class"}
                </span>
                <Users className="w-4 h-4 text-gray-500 shrink-0" />
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
            </button>

            <AnimatePresence>
              {guestClassOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-0 right-0 mt-2 bg-white border border-gray-100 rounded-[20px] shadow-2xl z-50 overflow-hidden"
                >
                  {guestClasses.map((gc) => (
                    <button
                      key={gc}
                      onClick={() => {
                        setGuestClass(gc);
                        setGuestClassOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-5 py-3.5 text-left hover:bg-gray-50 text-xs text-gray-700 border-b border-gray-100 last:border-0 font-medium"
                    >
                      <span className="truncate">{gc}</span>
                      {guestClass === gc && <Check className="w-4 h-4 text-[#D3BD67]" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Right Side: Large Search Button (Spans both rows on desktop, occupying 2 of 12 columns) */}
        <div className="lg:col-span-2 flex items-stretch mt-2 lg:mt-0">
          <button className="w-full bg-[#D3BD67] hover:bg-[#b8a24c] text-white rounded-[24px] flex items-center justify-center shadow-lg hover:scale-[1.02] active:scale-98 transition-all p-5 lg:p-0 min-h-[56px] lg:min-h-0">
            <Search className="w-7 h-7 text-white font-bold" />
          </button>
        </div>

      </div>
    </motion.div>
  );
}
