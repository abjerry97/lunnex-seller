"use client";
import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import PageBtn from "@/components/PageBtn/PageBtn";
import HomeProductCard from "@/components/HomeProductCard/HomeProductCard";
import HomeChart from "@/components/charts/HomeChart";
import RatingIcon from "@/assets/icons/RatingIcon";
import SelectBox from "@/components/SelectBox/SelectBox";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Home() {
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
      },
    },
  ];
  return (
    <DashboardLayout>
      {/* children here */}

      {/* <div className="flex gap-4 items-stretch mb-4"> */}
      {/* <Slide slidesToScroll={2} slidesToShow={2} indicators={true} responsive={responsiveSettings}> */}

      {/* <div className="bg-[#D0D0FB] rounded-xl p-4 w-full lg:w-4/12 shadow ">
          <div className="flex justify-between mb-16 items-center">
            <h4 className="font-semibold text-sm  text-black">Total Sales</h4>
            <SelectBox/>
          </div>
          <div className="flex items-center gap-1 ">
            <h1 className="text-2xl font-bold  text-black">N200,000:00</h1>{" "}
            <span className="text-xs  text-black"> +2.4%</span>
          </div>
        </div>
        <div className="bg-[#FBD0DB] rounded-xl p-4 w-4/12 shadow hidden lg:block">
          <div className="flex justify-between mb-16 items-center">
            <h4 className="font-semibold text-sm  text-black">Total Sales</h4>{" "}
            <SelectBox/>
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
        </div> */}

      {/* </Slide> */}
      {/* <div className="w-full">
          <Slide
            slidesToScroll={1}
            slidesToShow={3}
            indicators={true}
            autoplay={false}
            responsive={[
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
          

          <div className="bg-[#D0D0FB] rounded-xl p-4 mx-2   shadow w-fi">
          <div className="flex justify-between mb-16 items-center">
            <h4 className="font-semibold text-sm  text-black">Total Sales</h4>
            <SelectBox/>
          </div>
          <div className="flex items-center gap-1 ">
            <h1 className="text-2xl font-bold  text-black">N200,000:00</h1>{" "}
            <span className="text-xs  text-black"> +2.4%</span>
          </div>
        </div>
        <div className="bg-[#FBD0DB] rounded-xl p-4 mx-2  shadow hidden lg:block">
          <div className="flex justify-between mb-16 items-center">
            <h4 className="font-semibold text-sm  text-black">Total Sales</h4>{" "}
            <SelectBox/>
          </div>
          <div className="flex items-center gap-1 ">
            <h1 className="text-2xl font-bold  text-black">N200,000:00</h1>{" "}
            <span className="text-xs  text-black">+2.4%</span>
          </div>
        </div>
        <div className="bg-[#FCFCFC] rounded-xl p-4 mx-2  shadow flex flex-col justify-between hidden lg:flex">
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


          </Slide>
        </div> */}
      <div className="w-full">
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={true}
          autoplay={false}
          responsive={[
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ]}
        >
          <div className="bg-[#D0D0FB] rounded-xl p-4 mx-2   shadow w-fi">
            <div className="flex justify-between mb-16 items-center">
              <h4 className="font-semibold text-sm  text-black">Total Sales</h4>
              <SelectBox />
            </div>
            <div className="flex items-center gap-1 ">
              <h1 className="text-2xl font-bold  text-black">N200,000:00</h1>{" "}
              <span className="text-xs  text-black"> +2.4%</span>
            </div>
          </div>
          <div className="bg-[#FBD0DB] rounded-xl p-4 mx-2  shadow  lg:block">
            <div className="flex justify-between mb-16 items-center">
              <h4 className="font-semibold text-sm  text-black">Total Sales</h4>{" "}
              <SelectBox />
            </div>
            <div className="flex items-center gap-1 ">
              <h1 className="text-2xl font-bold  text-black">N200,000:00</h1>{" "}
              <span className="text-xs  text-black">+2.4%</span>
            </div>
          </div>
          <div className="bg-[#FCFCFC] rounded-xl p-4 mx-2  shadow flex flex-col justify-between  lg:flex">
            <div className="flex ">
              <h4 className="w-4/6 font-semibold text-sm  text-black">
                Average Rating
              </h4>
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
        </Slide>
        {/* </div> */}
      </div>
      <div className="block lg:flex  gap-5">
        <div className=" mb-16 w-full lg:w-8/12 shadow p-4 bg-[#FCFCFC] min-h-6 h-fit  rounded-xl">
          <div className="flex justify-between mb-4 items-center">
            <h4 className="font-bold text-lg  text-black">Revenue</h4>
            <SelectBox />
          </div>
          <div className="">
            <HomeChart />
          </div>
        </div>
        <div className=" w-full lg:w-4/12 bg-[#FCFCFC] p-4 shadow rounded-xl">
          <h1 className="mb-3 font-bold text-lg  text-black">Top Products</h1>

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
