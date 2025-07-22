import React from "react";

import MenuCard from "./MenuCard";
import Link from "next/link";
import {menu} from "@/data/menu";

export default function MenuSection() {
  const filtered = menu.filter((item, index) => index < 8);

  return (
    <section
      id="menu-section"
      className="py-28 pt-36 mx-auto container md:px-12 px-4 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="font-forum text-4xl md:text-6xl font-semibold text-[#22223B] mb-4">
          Explore Our Menu
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-6">
          Experience a symphony of flavors with our carefully curated menu.
          <br />
          Each dish is designed to delight your senses and leave.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-32">
        {filtered.map((item) => (
          <Link
            key={item.name}
            href={`/menu/${item.slug}`}
            style={{display: "block"}}
          >
            <MenuCard
              name={item.name}
              price={item.price}
              image={item.img}
              description={item.description}
              slug={item.slug}
              calories={item.calories}
              protein={item.protein}
              carbs={item.carbs}
              fat={item.fat}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
