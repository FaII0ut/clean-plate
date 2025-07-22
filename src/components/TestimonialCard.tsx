import React from "react";
import Image from "next/image";

export interface Testimonial {
  name: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <span className="inline-flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={i} className="w-6 h-6 text-[#FFC94B]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.538 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.783.57-1.838-.197-1.538-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
      {halfStar && (
        <svg className="w-6 h-6 text-[#FFC94B]" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#FFC94B" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.538 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.783.57-1.838-.197-1.538-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" fill="url(#half)" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={i} className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.538 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.783.57-1.838-.197-1.538-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </span>
  );
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-[#faf9f7] rounded-2xl shadow-md p-8 mb-2 min-w-[340px] max-w-xs w-full flex flex-col justify-between mx-2 overflow-hidden">
    <div className="flex items-center gap-2 mb-2">
      <StarRating rating={testimonial.rating} />
      <span className="text-gray-700 font-satoshi font-semibold text-lg">
        {testimonial.rating}/5
      </span>
    </div>
    <p className="text-gray-400 text-base mb-6 break-words whitespace-normal overflow-hidden">
      “{testimonial.text}”
    </p>
    <div className="flex items-center gap-3 mt-auto">
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        className="rounded-full w-16 h-16 object-cover border-2 border-primary shadow-md"
        width={64}
        height={64}
        priority={true}
      />
      <div className="text-left">
        <div className="font-satoshi font-bold text-black text-base leading-tight">
          {testimonial.name}
        </div>
        <div className="text-xs text-gray-400">{testimonial.company}</div>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
