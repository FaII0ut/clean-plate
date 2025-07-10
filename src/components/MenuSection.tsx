import React, { useState } from "react";


const MENU_ITEMS = [
  {
    name: "BBQ Grilled Ribs",
    price: "$18.99",
    type: "nonveg",
    category: "nonveg",
    image: "/img/hero.jpg",
    tag: "Non-Veg",
    description:
      "Tender and slow-cooked to perfection, our BBQ Grilled Ribs are glazed with a smoky sweet barbecue.",
  },
  {
    name: "Classic Mojito",
    price: "$4.75",
    type: "drinks",
    category: "drinks",
    image: "/img/hero.jpg",
    tag: "Drinks",
    description:
      "This classic mocktail blends fresh mint, lime juice, and soda for a cool, bubbly, and refreshing drink.",
  },
  {
    name: "Coconut drinks Fizz",
    price: "$4.25",
    type: "drinks",
    category: "drinks",
    image: "/img/hero.jpg",
    tag: "Drinks",
    description:
      "A tropical delight, the Pineapple Coconut Fizz combo sweet pineapple juice with creamy coconut.",
  },
];

export default function MenuSection() {
  const [selected] = useState("all");
  const filtered =
    selected === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selected || item.type === selected);

  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="font-forum text-5xl font-semibold text-[#22223B] mb-4">Explore Our Menu</h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-6">
          Experience a symphony of flavors with our carefully curated menu.<br />
          Each dish is designed to delight your senses and leave.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {filtered.map((item) => (
          <div
            key={item.name}
            className="bg-[#faf9f7] rounded-3xl p-6 flex flex-col items-center w-full max-w-[390px] min-w-[390px] border border-[#f3f3f3]"
          >
            <div className="w-full mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-2xl w-full h-52 object-cover"
                style={{ background: '#e5e7eb' }}
              />
            </div>
            <div className="flex w-full items-center justify-between mb-2">
              <span className="font-forum text-3xl text-[#eb7147] font-bold">{item.price}</span>
            </div>
            <h3 className="font-satoshi text-lg font-bold text-[#22223B] mb-1 w-full text-left">{item.name}</h3>
            <p className="text-gray-400 text-sm w-full text-left mb-1">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
