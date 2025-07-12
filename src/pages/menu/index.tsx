import React, {useState} from "react";
import Head from "next/head";
import MenuFilterBar from "../../components/MenuFilterBar";
import MenuCard from "../../components/MenuCard";

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
  const [selected, setSelected] = useState("sunday");

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
        {/* <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
           flex: 1,
            backgroundImage: "url('/img/pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            opacity: 0.3,
            zIndex: 0,
            pointerEvents: "none",
          }}
        /> */}
        <div className="relative -top-32 bg-[#25382c] pt-12">
          <MenuHeroBanner />
        </div>
        <div className="relative -top-24">
          <MenuFilterBar selected={selected} onSelect={setSelected} />
        </div>
        <div className="container mx-auto px-4 md:px-12 mt-2">
          <div className="flex flex-row border-b border-[#f3f3f3] pb-4 justify-between items-end">
            <p className="text-5xl font-forum font-bold">203 Menu items</p>
            <p className="text-gray-500 text-xl font-satoshi">Hight to low</p>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-12 mt-8">
          <div className="grid grid-cols-4  justify-center items-stretch gap-6">
            {Array.from({length: 15}).map((_, i) => (
              <MenuCard
                key={i}
                name={`Sample Dish ${i + 1}`}
                price="$9.99"
                image="/img/menu1.heic"
                description="A delicious sample menu item for demonstration purposes."
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
