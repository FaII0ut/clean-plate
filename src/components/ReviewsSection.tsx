import {DynamicIcon} from "lucide-react/dynamic";
import React from "react";

const reviewsData = {
  totalReviews: 2300,
  growth: 21, // percent
  averageRating: 4.5,
  ratingsBreakdown: [
    {stars: 5, count: 900},
    {stars: 4, count: 800},
    {stars: 3, count: 350},
    {stars: 2, count: 100},
    {stars: 1, count: 0},
  ],
  period: "Jan 2024 - Mar 2024",
};

const ReviewsSection: React.FC = () => {
  const {totalReviews, growth, averageRating, ratingsBreakdown, period} =
    reviewsData;
  const maxCount = Math.max(...ratingsBreakdown.map((r) => r.count));

  return (
    <>
      <p className="text-gray-500 font-forum font-bold text-3xl mx-auto px-4 lg:px-12 container mt-16 mb-8">
        Reviews
      </p>
      <section className="mx-auto container px-4 lg:px-12 flex lg:flex-row flex-col gap-y-8">
        <div className="flex-1 flex flex-col items-start">
          <p className="text-gray-500 text-base font-satoshi font-medium">
            Total Reviews
          </p>
          <div className="flex items-baseline gap-2">
            <p className="text-6xl font-bold font-forum">
              {(totalReviews / 1000).toFixed(1)}k
            </p>
            <p className="text-green-600 bg-green-100 text-xs px-2 py-0.5 rounded-full font-semibold">
              {growth}% ↑
            </p>
          </div>
          <p className="text-base text-gray-400 mt-1 font-satoshi font-medium">
            Growth in reviews on this year
          </p>
        </div>

        <div className="flex-1 flex flex-col lg:border-x lg:border-gray-200 lg:px-8 ">
          <span className="text-gray-500 font-satoshi font-medium">
            Average Rating
          </span>
          <div className="flex items-center gap-2">
            <span className="text-6xl font-forum font-bold">
              {averageRating}
            </span>
            <div className="flex gap-x-2">
              <DynamicIcon name="star" stroke="gray" fill="gray" size={26} />
              <DynamicIcon name="star" stroke="gray" fill="gray" size={26} />
              <DynamicIcon name="star" stroke="gray" fill="gray" size={26} />
              <DynamicIcon name="star" stroke="gray" fill="gray" size={26} />
              <DynamicIcon name="star" stroke="gray" fill="gray" size={26} />
            </div>
          </div>
          <span className="text-base text-gray-400 mt-1 font-satoshi font-medium">
            Average Rating on this year
          </span>
        </div>

        <div className="flex-1 flex flex-col items-end lg:px-8">
          <div className="flex flex-col gap-1 w-full">
            {ratingsBreakdown.map((r) => (
              <div key={r.stars} className="flex items-center gap-2 w-full">
                <span className="font-satoshi text-gray-400 text-sm w-4">
                  {r.stars}
                </span>
                <div className="flex-1 h-2 rounded bg-gray-100">
                  <div
                    className="h-2 rounded bg-gray-700"
                    style={{width: `${(r.count / maxCount) * 100}%`}}
                  ></div>
                </div>
                <span className="font-satoshi text-gray-700 text-sm w-8 text-right">
                  {r.count}
                </span>
              </div>
            ))}
          </div>
          <span className="font-satoshi text-xs text-gray-400 mt-3">
            {period}
          </span>
        </div>
      </section>
      <div className="mx-auto container px-4 lg:px-12 flex flex-row ">
        <div className="flex flex-col border-t border-gray-200 pt-6 w-full">
          {[1,2,3].map((item) => (
            <div className="flex flex-row gap-2 mt-8" key={item}>
              <div className="min-w-12 min-h-12 w-12 h-12 rounded-full bg-red-400"></div>
              <div className="flex-col max-w-4xl">
                <div>
                  <p className="font-satoshi font-bold text-base text-[#22223B]/80">
                    John Doe
                  </p>
                  <div className="flex flex-row mt-1 items-center">
                    <DynamicIcon
                      name="star"
                      stroke="#eb7147"
                      fill="#eb7147"
                      size={18}
                    />
                    <DynamicIcon
                      name="star"
                      stroke="#eb7147"
                      fill="#eb7147"
                      size={18}
                    />
                    <DynamicIcon
                      name="star"
                      stroke="#eb7147"
                      fill="#eb7147"
                      size={18}
                    />
                    <DynamicIcon
                      name="star"
                      stroke="gray"
                      fill="gray"
                      size={18}
                    />
                    <DynamicIcon
                      name="star"
                      stroke="gray"
                      fill="gray"
                      size={18}
                    />
                  </div>
                </div>
                <p className="font-satoshi font-semibold text-base text-[#22223B]/50 mt-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe laboriosam ratione id, laudantium reiciendis ea quae
                  nemo molestias asperiores! Repellat, fuga dolor earum rem odit
                  a consequatur nulla quia similique.
                </p>
                <p className="text-[#22223B]/50 text-sm mt-2 font-satoshi font-semibold">
                  24-10-2024
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewsSection;
