import React from "react";

import testimonials from "../data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsMarquee() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="font-forum text-5xl font-semibold text-[#22223B] mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          From startups to global enterprises, our platform has empowered
          thousands of teams to collaborate seamlessly and achieve.
        </p>
      </div>
      {/* Marquee effect */}
      <div className="overflow-x-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap will-change-transform">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
          {testimonials.map((t, i) => (
            <TestimonialCard key={"dup-" + i} testimonial={t} />
          ))}
          {testimonials.map((t, i) => (
            <TestimonialCard key={"dup-" + i} testimonial={t} />
          ))}
        </div>
      </div>
      {/* Marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
