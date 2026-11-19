"use client";

import { ArrowRight } from "lucide-react";

export default function ManpowerHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/courses/manpower-hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 py-16 md:py-18">
        <div className="max-w-6xl mx-auto px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-[#801717] backdrop-blur-sm border border-red-500/40 text-red-100 px-5 py-2 rounded-full text-sm mb-10">
            Skilled Talent • Industrial Expertise • Workforce Solutions
          </div>

          <h1 className="text-[32px] md:text-6xl font-bold leading-tight tracking-wide mb-6">
            Manpower Solutions
            <span className="block text-gray-200 mt-2">for Industrial Excellence</span>
          </h1>

          <p className="text-md md:text-lg text-gray-200 max-w-3xl mx-auto mb-12 leading-8">
            Connecting industries with skilled and capable professionals to
            support industrial operations, automation projects, and business
            growth.
          </p>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#801717] hover:bg-red-800 px-8 py-4 rounded-xl font-semibold text-white transition duration-300 shadow-xl"
          >
            Enquire Now
            <ArrowRight size={20} />
          </a>
        </div>
    
      </div>
    </section>
  );
}
