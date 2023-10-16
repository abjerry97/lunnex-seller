import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ProductTable from "@/components/ProductTable/ProductTable";
import HomeChart from "@/components/charts/HomeChart";
import SelectBox from "@/components/SelectBox/SelectBox";

export default function Products() {
  return (
    <DashboardLayout>
      <div className="flex gap-4 items-stretch mb-4">
        <div className="bg-[#FCFCFC] rounded-xl p-4 w-full lg:w-6/12 shadow flex flex-col justify-between ">
          <div className="flex justify-between mb-16 items-center">
            <h4 className="font-semibold text-sm  text-black">Total Sales</h4>
            <SelectBox/>
          </div>

          <div className="flex items-center gap-1 ">
            <h1 className="text-2xl font-bold  text-black">N200,000:00</h1>{" "}
            <span className="text-xs  text-black">+2.4%</span>
          </div>
        </div>
        <div className="bg-[#FCFCFC] rounded-xl p-4  w-full lg:w-6/12 shadow hidden lg:block">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-sm  text-black">Total Sales</h4>
            <SelectBox/>
          </div>

          <HomeChart />
        </div>
      </div>

      <ProductTable />
      {/* #FCFCFC */}
    </DashboardLayout>
  );
}
