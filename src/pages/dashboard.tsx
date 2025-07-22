import React from "react";
import Image from "next/image";
import {useRouter} from "next/router";

function useDashboardPageParam(): string {
  const {query} = useRouter();
  const page = typeof query.page === "string" ? query.page : undefined;
  if (["overview", "orders", "calendar", "settings"].includes(page || "")) {
    return page!;
  }
  return "overview";
}

const DashboardTabLink: React.FC<{value: string; label: string}> = ({
  value,
  label,
}) => {
  const router = useRouter();
  const page =
    typeof router.query.page === "string" ? router.query.page : undefined;
  const isActive = (page || "overview") === value;
  return (
    <button
      className={`font-satoshi font-semibold text-base px-4 py-2 rounded-full transition-all duration-150 ${
        isActive ? " text-[#e36d4e]" : "text-gray-600"
      }`}
      onClick={() =>
        router.push({pathname: "/dashboard", query: {page: value}}, undefined, {
          shallow: true,
        })
      }
    >
      {label}
    </button>
  );
};

import OrdersTab from "@/components/dashboard/OrdersTab";
import OverviewTab from "@/components/dashboard/OverviewTab";
import SettingsTab from "@/components/dashboard/SettingsTab";


const DashboardContent: React.FC<{pageParam: string}> = ({
  pageParam,
}) => {
  if (pageParam === "orders") {
    return <OrdersTab />;
  }
  if (pageParam === "settings") {
    return <SettingsTab />;
  }
  // Default: overview
  return <OverviewTab />;
};

const Dashboard: React.FC & {noLayout?: boolean} = () => {

  return (
    <main className="min-h-screen max-h-screen bg-white relative flex flex-col py-16">
      {/* Top Nav Bar (matches create-plan) */}
      <div className="w-full h-16 fixed top-0 border-b border-gray-200 bg-white z-50">
        <div className="items-center justify-between flex mx-auto container md:px-12 px-4 h-full w-full ">
          <div className="flex items-center gap-2">
            <Image
              src="/img/logo.png"
              alt="Clean Plate Logo"
              className="w-10 h-10"
              width={40}
              height={40}
              priority={true}
            />
            {/* <p className="font-forum text-2xl font-bold hidden md:flex ">
              Clean plate
            </p> */}
          </div>
          <div className="flex flex-row gap-6 w-full mx-auto justify-end">
            {[
              {label: "Overview", value: "overview"},
              {label: "Orders", value: "orders"},
              {label: "Settings", value: "settings"},
            ].map((tab) => (
              <DashboardTabLink
                key={tab.value}
                value={tab.value}
                label={tab.label}
              />
            ))}
            <div className="w-10 h-10 rounded-full bg-[#e36d4e] flex items-center justify-center">
              {/* <DynamicIcon name="user" size={20} color="white" /> */}
              <Image
                src="/img/avatar.png"
                alt="Clean Plate Logo"
                className="w-10 h-10 rounded-full"
                width={40}
                height={40}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col z-10 w-full mx-auto container px-12 mt-12">
        <DashboardContent pageParam={useDashboardPageParam()} />
      </div>

      <div className="w-full h-20 fixed bottom-0 border-t border-gray-200 bg-white z-50 flex items-center justify-center">
        <div className="font-satoshi text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Clean Plate
        </div>
      </div>
    </main>
  );
};

Dashboard.noLayout = true;

export default Dashboard;
