import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ProductTable from "@/components/ProductTable/ProductTable";
import HomeChart from "@/components/charts/HomeChart";

export default function Products() {
  return (
    <DashboardLayout>
      <div className="flex gap-4 items-stretch mb-4">
        <div className="bg-[#FCFCFC] rounded-xl p-4 w-full lg:w-6/12 shadow flex flex-col justify-between ">
          <div className="flex justify-between mb-16 items-center">
            <h4 className="font-semibold text-sm">Total Sales</h4>
            <select name="" id="" className="text-xs border p-2 border-black bg-inherit rounded shadow">
              <option value="All Sales">All Sales</option>
            </select>
          </div>

          <div className="flex items-center gap-1 ">
            <h1 className="text-2xl font-bold">N200,000:00</h1>{" "}
            <span className="text-xs">+2.4%</span>
          </div>
        </div>
        <div className="bg-[#FCFCFC] rounded-xl p-4  w-full lg:w-6/12 shadow hidden lg:block">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-sm">Total Sales</h4>
            <select name="" id="" className="text-xs border p-2 border-black bg-inherit rounded shadow">
              <option value="All Sales">All Sales</option>
            </select>
          </div>

          <HomeChart />
        </div>
      </div>

      <ProductTable />
      {/* #FCFCFC */}
    </DashboardLayout>
  );
}
