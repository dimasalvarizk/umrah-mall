"use client";

export default function SpiritualJourney() {
  const steps = [
    {
      number: "1",
      title: "Browse & Prepare",
      description:
        "Discover a wide range of essential Umrah items (Ihram clothing, prayer beads, prayer mats, and more) and choose what suits your needs.",
      staggerClass: "md:pt-[210px]",
      widthClass: "md:w-[380px]",
      descWidthClass: "md:max-w-[350px]",
      numPosClass: "absolute -top-4 md:-top-15 right-2 md:right-48",
    },
    {
      number: "2",
      title: "Choose Your Package",
      description:
        "Compare a variety of carefully designed Umrah packages tailored to fit your budget and personal preferences.",
      staggerClass: "md:pt-[110px]",
      widthClass: "md:w-[440px]",
      descWidthClass: "md:max-w-[400px]",
      numPosClass: "absolute -top-4 md:-top-15 right-2 md:right-60",
    },
    {
      number: "3",
      title: "Book & Confirm",
      description:
        "Complete the secure payment process and confirm your booking in minutes to receive all your trip and purchase details instantly.",
      staggerClass: "md:pt-[10px]",
      widthClass: "md:w-[260px]",
      descWidthClass: "md:max-w-[220px]",
      numPosClass: "absolute -top-4 md:-top-17 right-2 md:right-15",
    },
  ];

  return (
    <section className="bg-[#F5F5F5] pt-6 pb-20 md:pt-8 md:pb-28 relative overflow-hidden border-b border-gray-100">

      {/* 3D Atmospheric Lighting and Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-default/3 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-gold-default/2 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">

        {/* Left Column: Heading, Subtitle and Action Button (Placed relative at the top) */}
        <div className="max-w-[460px] flex flex-col items-start pt-4 relative z-20">

          <h2 className="text-2xl md:text-3xl lg:text-[34px] lg:leading-[42px] font-bold text-[#595959] tracking-tight mb-6 shadow-sm shadow-transparent">
            Your Spiritual Journey in <span className="text-[#D3BD67]">3</span>{" "}
            <span className="text-[#D3BD67] block mt-1">Simple Steps</span>
          </h2>

          <p className="text-[#9CA3AF] text-sm md:text-base mb-8 max-w-md leading-relaxed font-manrope">
            We make planning for Umrah easy, from securing essentials to
            confirming your booking, so you can begin your journey with
            complete peace of mind.
          </p>

          <button className="bg-[#D3BD67] hover:bg-[#b8a24c] text-white font-semibold text-sm px-8 py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(211,189,103,0.35)] hover:shadow-[0_15px_30px_-5px_rgba(211,189,103,0.5)] transition-all hover:scale-105 active:scale-95 mb-12 md:mb-0">
            Get Started
          </button>
        </div>

        {/* Timeline Steps (Overlaps horizontally and vertically) */}
        <div className="relative w-full md:-mt-[220px] min-h-[480px] md:min-h-0 z-10">

          {/* Mobile Vertical Timeline Line */}
          <div className="absolute left-[31px] top-6 bottom-6 w-[2px] bg-[#D3BD67]/30 md:hidden z-0" />

          {/* Steps Wrapper (relative height determined by the image to prevent distortion) */}
          <div className="relative w-full">
            {/* Desktop Curved Path Image */}
            <img
              src="/JourneySteps/Line.png"
              alt="Golden curve path"
              className="w-full h-auto pointer-events-none hidden md:block z-0"
            />

            {/* Steps Container (absolute overlay on desktop) */}
            <div className="md:absolute md:inset-0 w-full h-full flex flex-col gap-12 md:block">
              {steps.map((step, idx) => {
                // Exact coordinates mapping directly to the Line.png pixels
                let positionClass = "";
                if (idx === 0) {
                  positionClass = "md:absolute md:left-[18%] md:top-[85%] md:w-[260px]";
                } else if (idx === 1) {
                  positionClass = "md:absolute md:left-[60%] md:top-[53%] md:w-[260px]";
                } else {
                  positionClass = "md:absolute md:left-[89%] md:top-[-2%] md:w-[260px]";
                }

                return (
                  <div
                    key={step.number}
                    className={`flex flex-row md:flex-col gap-6 md:gap-4 items-start ${positionClass} ${step.widthClass} w-full`}
                  >

                    {/* Node wrapper using IncludeLine.png */}
                    <div className="w-[40px] h-[40px] flex items-center justify-center shrink-0 relative z-20 cursor-pointer hover:scale-105 transition-transform duration-300">
                      <img
                        src="/JourneySteps/IncludeLine.png"
                        alt="Step node"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Text block */}
                    <div className="relative pt-1.5 md:pt-0 w-full z-10">

                      {/* Giant backdrop watermark number */}
                      <span className={`${step.numPosClass} font-gilroy text-[100px] md:text-[120px] font-black text-[#E8E8E8]/70 select-none pointer-events-none -z-10 leading-none`}>
                        {step.number}
                      </span>

                      <h3 className="text-xs md:text-[14px] font-bold text-black mb-1.5 md:mb-2">
                        {step.title}
                      </h3>

                      <p className={`font-poppins text-black text-[10px] md:text-[11px] leading-relaxed max-w-[280px] ${step.descWidthClass}`}>
                        {step.description}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Right Logo Watermark (Floating Stamped Brand Mark) */}
      <img
        src="/Logo2.png"
        alt="UMRAH Mall Logo"
        className="absolute bottom-6 right-8 h-8 md:h-10 w-auto object-contain pointer-events-none select-none z-10 hover:scale-105 transition-transform duration-300"
      />
    </section>
  );
}
