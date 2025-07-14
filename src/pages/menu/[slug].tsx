import {GetStaticPaths, GetStaticProps} from "next";
import {menu} from "../../data/menu";
import React from "react";
import Button from "../../components/Button";
import ReviewsSection from "../../components/ReviewsSection";
import MenuCard from "../../components/MenuCard";
import {DynamicIcon} from "lucide-react/dynamic";
import {useStoreActions, Actions} from "easy-peasy";
import {StoreModel} from "../../store/models/index";

export default function MenuItemPage({item}: {item: (typeof menu)[0]}) {
  const setShowCartModal = useStoreActions(
    (actions: Actions<StoreModel>) => actions.global.setShowCartModal
  );
  if (!item) {
    return (
      <div className="p-12 text-center text-2xl">Menu item not found.</div>
    );
  }
  return (
    <>
      <div className="flex flex-row mx-auto container px-12 gap-x-3 mt-6">
        <p className="font-satoshi font-semibold text-sm text-[#747474]">Home</p>
        <p className="font-satoshi font-semibold text-sm text-[#747474]">/</p>
        <p className="font-satoshi font-semibold text-sm text-[#747474]">Menu</p>
        <p className="font-satoshi font-semibold text-sm text-[#747474]">/</p>
        <p className="font-satoshi font-semibold text-sm text-[#747474]">{item.name}</p>
      </div>
      <div className="mx-auto container md:px-12 px-4 flex lg:flex-row flex-col w-full gap-x-8 mt-6">
        <div className="flex min-w-1/2 h-[60vh] flex-row gap-3">
          <div className="hidden lg:flex flex-col gap-2">
            <div className="w-24 h-32 rounded-xl">
              <img
                src="/img/menu2.heic"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-24 h-32 rounded-xl">
              <img
                src="/img/menu3.webp"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="flex-1 w-full h-full relative">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-end">
              <div className="flex flex-row gap-x-10 bg-[#eb7147] w-min rounded-2xl px-4 py-2 m-3">
                <div className="flex flex-col">
                  <p className="text-white lg:text-3xl text-2xl font-satoshi font-bold">{item.calories}</p>
                  <p className="text-white text-sm md:text-base max-w-md font-satoshi font-semibold">Calories</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-white lg:text-3xl text-2xl font-satoshi font-bold">{item.carbs}</p>
                  <p className="text-white text-sm md:text-base max-w-md font-satoshi font-semibold">Carbs</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-white lg:text-3xl text-2xl font-satoshi font-bold">{item.protein}</p>
                  <p className="text-white text-sm md:text-base max-w-md font-satoshi font-semibold">Protein</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-white lg:text-3xl text-2xl font-satoshi font-bold">{item.fat}</p>
                  <p className="text-white text-sm md:text-base max-w-md font-satoshi font-semibold">Fat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 mt-4 lg:mt-0">
          <div className="flex flex-row gap-x-2">
            <div className="flex flex-row gap-x-2">
              <DynamicIcon name="fish" stroke="gray" size={20} />
              <DynamicIcon name="beef" stroke="gray" size={20} />
              <DynamicIcon name="drumstick" stroke="gray" size={20} />
            </div>
          </div>
          <h2 className="font-forum text-5xl font-semibold text-[#22223B]">{item.name}</h2>
          <div className="flex flex-row gap-x-2">
            {[...Array(5)].map((_, idx) => (
              <DynamicIcon
                key={idx}
                name="star"
                stroke="#eb7147"
                fill={idx < item.stars ? "#eb7147" : "gray"}
                opacity={idx < item.stars ? 1 : 0.2}
                size={24}
              />
            ))}
          </div>
          <p className="text-gray-800 text-xl max-w-md font-satoshi font-semibold mt-2">
            MVR {item.price}
          </p>
          <p className="text-gray-500 text-sm md:text-base max-w-md font-satoshi font-semibold mt-2">
            {item.description}
          </p>

          <div className="flex-col mt-4">
            <p className="font-satoshi font-semibold text-sm">ADDONS</p>
            <div className="flex gap-2 mt-2">
              <div className="flex px-4 py-2 bg-[#396042] rounded-xl">
                <p className="font-satoshi font-semibold text-white text-xs lg:text-sm">
                  PROTEIN PLUS
                </p>
              </div>
              <div className="flex px-4 py-2 bg-[#b1b1b1] rounded-xl">
                <p className="font-satoshi font-semibold text-white text-xs lg:text-sm">
                  SALAD ++
                </p>
              </div>
              <div className="flex px-4 py-2 bg-[#b1b1b1] rounded-xl">
                <p className="font-satoshi font-semibold text-white text-xs lg:text-sm">
                  CHICKEN ++
                </p>
              </div>
            </div>
          </div>
          <p className="font-satoshi font-semibold text-sm mt-6 over">
            QUANTITY
          </p>
          <div className="flex flex-row border border-black/30 rounded-xl w-min overflow-hidden">
            <div className="w-12 h-12 flex items-center justify-center text-base hover:bg-[#396042] hover:text-white cursor-pointer">
              -
            </div>
            <div className="w-12 h-12 flex items-center justify-center text-base ">
              1
            </div>
            <div className="w-12 h-12 flex items-center justify-center text-base hover:bg-[#396042] hover:text-white cursor-pointer">
              +
            </div>
          </div>
          <Button
            onClick={() => setShowCartModal(true)}
            className="flex items-center gap-2 w-full justify-center mt-24"
            variant="primary"
          >
            Add to cart
          </Button>
        </div>
      </div>
      <ReviewsSection />

      <p className="text-gray-500 font-forum font-bold text-3xl mx-auto px-4 lg:px-12 container mt-16">
        Suggestion
      </p>
      <div className="mx-auto container px-4 lg:px-12 flex flex-row mb-16 mt-10">
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-4">
          {Array.from({length: 4}).map((_, i) => (
            <MenuCard
              key={i}
              name={menu[i].name}
              price={menu[i].price}
              image={menu[i].img}
              description={menu[i].description}
              slug={menu[i].slug}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: menu.map((item) => ({params: {slug: item.slug}})),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;
  const item = menu.find((m) => m.slug === slug) || null;
  return {
    props: {item},
  };
};
