import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import OrderCard from "@/components/OrderCard/OrderCard";

export default function Orders() {
  return (
    <DashboardLayout>
      <div className="border-b-2 mb-4">
        <ul className="flex gap-4 text-xs font-semibold mb-2">
          <li className="text-xs hover:opacity-100 cursor-pointer flex items-center gap-1 justify-center">
            <span> ALL</span>{" "}
            <span className="py-0.5 px-2 bg-[#26264C] h-fit text-white text-xs rounded-xl font-light">
              123
            </span>
          </li>
          <li className="text-xs  hover:opacity-100 cursor-pointer flex items-center gap-1 justify-center">
            <span> NEW</span>{" "}
            <span className="py-0.5 px-2 bg-[#7979F1] h-fit text-white text-xs rounded-xl  font-light">
              123
            </span>
          </li>
          <li className="text-xs  hover:opacity-100 cursor-pointer flex items-center gap-1 justify-center">
            <span> DELIVERED</span>{" "}
            <span className="py-0.5 px-2 bg-[#31D0AA] h-fit text-black text-xs rounded-xl  font-light">
              123
            </span>
          </li>
          <li className="text-xs  hover:opacity-100 cursor-pointer flex items-center gap-1 justify-center">
            <span> CANCELLED</span>{" "}
            <span className="py-0.5 px-2 bg-[#D03131] h-fit text-white text-xs rounded-xl  font-light">
              123
            </span>
          </li> 
        </ul>
      </div>
      <>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </>
    </DashboardLayout>
  );
}
