import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import PageBtn from "@/components/PageBtn/PageBtn";
import HomeProductCard from "@/components/HomeProductCard/HomeProductCard";
import HomeChart from "@/components/charts/HomeChart";
import RatingIcon from "@/assets/icons/RatingIcon";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex gap-4 items-stretch mb-4">
        <div className="bg-[#D0D0FB] rounded-xl p-4 w-full lg:w-4/12 shadow ">
          <div className="flex justify-between mb-16 items-center">
            <h4 className="font-semibold text-sm  text-black">Total Sales</h4>
            <select
              name=""
              id=""
              className="h-fit border border-black p-2 rounded text-xs shadow bg-inherit  text-black"
            >
              <option className="text-xs" value="All time">All time</option>
            </select>
          </div>
          <div className="flex items-center gap-1 ">
            <h1 className="text-2xl font-bold  text-black">N200,000:00</h1>{" "}
            <span className="text-xs  text-black"> +2.4%</span>
          </div>
        </div>
        <div className="bg-[#FBD0DB] rounded-xl p-4 w-4/12 shadow hidden lg:block">
          <div className="flex justify-between mb-16 items-center">
            <h4 className="font-semibold text-sm  text-black">Total Sales</h4>{" "}
            <select
              name=""
              id=""
              className="h-fit border border-black p-2 rounded text-xs shadow bg-inherit  text-black"
            >
              <option value="All time">All time</option>
            </select>
          </div>
          <div className="flex items-center gap-1 ">
            <h1 className="text-2xl font-bold  text-black">N200,000:00</h1>{" "}
            <span className="text-xs  text-black">+2.4%</span>
          </div>
        </div>
        <div className="bg-[#FCFCFC] rounded-xl p-4 w-4/12 shadow flex flex-col justify-between hidden lg:flex">
          <div className="flex ">
            <h4 className="w-4/6 font-semibold text-sm  text-black">Average Rating</h4>
            <div className="w-2/6 text-7xl bg-[#A7A7F6] rounded-full p-2 flex items-center text-center justify-center">
              🤩
            </div>
          </div>
          <div className="flex justify-between items-center ">
            <h1 className="text-2xl font-bold  text-black">4.8</h1>{" "}
            <span className="text-xs flex gap-1">
              <RatingIcon />
              (172)
            </span>
          </div>
        </div>
      </div>

      <div className="block lg:flex  gap-5">
        <div className=" mb-16 w-full lg:w-8/12 shadow p-4 bg-[#FCFCFC] min-h-6 h-fit  rounded-xl">
          <div className="flex justify-between mb-4 items-center">
            <h4 className="font-bold text-lg  text-black">Revenue</h4>
            <select name="" id="" className="h-fit border border-black p-2 rounded text-xs  text-black">
              <option className="text-xs" value="All time">All time</option>
            </select>
          </div>
          <div className="">
            <HomeChart />
          </div>
        </div>
        <div className=" w-full lg:w-4/12 bg-[#FCFCFC] p-4 shadow rounded-xl">
          <h1 className="mb-3 font-bold text-lg  text-black" >Top Products</h1>

          <div className="">
            <HomeProductCard />
            <HomeProductCard />
            <HomeProductCard />
            <HomeProductCard />
            <HomeProductCard />
            <div className="flex items-center justify-center mt-6">
              <PageBtn transparent>See all products</PageBtn>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
