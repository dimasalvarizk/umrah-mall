import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import BookingWidget from "./components/BookingWidget";
import SpiritualJourney from "./components/SpiritualJourney";
import Testimonials from "./components/Testimonials";
import Recognition from "./components/Recognition";
import Footer from "./components/Footer";
import { Star, MapPin, Calendar, Compass, Sparkles } from "lucide-react";



export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Floating Booking Widget */}
      <div id="train" className="relative z-30 -mt-24 translate-y-12 px-4 sm:px-6">
        <BookingWidget />
      </div>

      {/* Partner Logos */}
      <div id="partners">
        <Partners />
      </div>

      {/* Spiritual Journey Steps */}
      <SpiritualJourney />

      {/* Testimonials & Recognition Wrapper */}
      <div className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
        <Testimonials />
        <Recognition />
      </div>

      {/* Footer & Newsletter Signup */}
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}