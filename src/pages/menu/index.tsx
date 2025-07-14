import React from "react";
import Head from "next/head";
import MenuCard from "../../components/MenuCard";
import {menu} from "../../data/menu";
import Link from "next/link";

function MenuHeroBanner() {
  return (
    <section className="w-full min-h-[40vh] md:min-h-[50vh] container mx-auto px-4 md:px-12   flex flex-col items-center justify-center text-center rounded-2xl mb-12">
      <h1 className="font-forum text-4xl md:text-6xl font-semibold text-white mb-4 mt-16 md:mt-0">
        Special menu for each day
      </h1>
      <p className="text-white/90 text-sm md:text-base max-w-xl mx-auto">
        At Craving, we believe that food should be a delightful journey. Our
        menu features a wide variety of dishes, carefully crafted to excite.
      </p>
    </section>
  );
}

export default function MenuPage() {
  return (
    <>
      <Head>
        <title>Menu | Clean Plate</title>
        <meta
          name="description"
          content="Explore our menu - a symphony of flavors for every palate."
        />
      </Head>
      <main className="bg-white min-h-screen pt-4 pb-16">
        <div className="relative -top-32 bg-[#25382c] pt-12">
          <MenuHeroBanner />
        </div>
        <div className="container mx-auto px-4 md:px-12 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {menu.map((item, i) => (
            <Link
              key={i}
              href={`/menu/${item.slug}`}
              style={{display: "block"}}
            >
              <MenuCard
                name={item.name}
                price={item.price}
                image={item.img}
                description={
                  "A delicious sample menu item for demonstration purposes."
                }
                slug={item.slug}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
