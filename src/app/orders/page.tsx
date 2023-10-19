import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import OrderCard from "@/components/OrderCard/OrderCard";

export default function Orders() {
  return (
    <DashboardLayout>
      <div className="mb-4">
        <ul className="flex gap-4 text-xs font-semibold mb-2 border-b-2 ">
          <li className="py-2 border-b-4  border-[#FF3365]  mb-[-3px]  text-xs text-center hover:opacity-100 cursor-pointer block items-center justify-center lg:flex  gap-1 ">
            <span> ALL</span>{" "}
            <span className="py-0.5 px-2 bg-[#26264C] h-fit text-white text-xs rounded-xl font-light  text-[8px]">
              123
            </span>
          </li>
          <li className=" py-2 text-xs  hover:opacity-100 cursor-pointerblock lg:flex items-center gap-1 justify-center text-center">
            <span> NEW</span>{" "}
            <span className="py-0.5 px-2 bg-[#7979F1] h-fit text-white text-xs rounded-xl  font-light  text-[8px]">
              123
            </span>
          </li>
          <li className="py-2 text-xs  hover:opacity-100 cursor-pointer block lg:flex items-center gap-1 justify-center text-center">
            <span> DELIVERED</span>{" "}
            <span className="py-0.5 px-2 bg-[#31D0AA] h-fit text-black text-xs rounded-xl  font-light  text-[8px]">
              123
            </span>
          </li>
          <li className="py-2 text-xs  hover:opacity-100 cursor-pointer block lg:flex items-center gap-1 justify-center text-center">
            <span> CANCELLED</span>{" "}
            <span className="py-0.5 px-2 bg-[#D03131] h-fit text-white text-xs rounded-xl  font-light text-[8px]">
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
