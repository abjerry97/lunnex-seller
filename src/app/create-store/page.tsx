import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import FormInput from "@/components/FormInput/FormInput";
import FormTextArea from "@/components/FormTextArea/FormTextArea";
import FormBtn from "@/components/FormBtn/FormBtn";
import SearchIcon from "@/assets/icons/SearchIcon";
import Image from "next/image";
import RatingIcon from "@/assets/icons/RatingIcon";
import PlayIcon from "@/assets/icons/PlayIcon";

export default function CreateStore() {
  return (
    <DashboardLayout>
      <div className="flex h-full flex-wrap">
        <div className="w-full lg:w-5/12 h-fit mb-10">
          <FormInput label="Store Name" placeholder="Enter Store name here" />
          <FormInput label="Store link" placeholder=".name.getlunnex.ng" />
          <FormTextArea
            label="Welcome text"
            placeholder="Enter welcome text here"
          />

          <FormInput
            label="Email address"
            placeholder="Add your Email address here"
          />
          <FormBtn>Save Changes</FormBtn>
        </div>
        <div className="w-full lg:w-2/12 "></div>
        <div className="w-full lg:w-5/12 bg-[#F3F3F3] h-fit">
          <div className="bg-[#26264C] p-4 text-white flex items-center justify-between">
            <p>Store preview</p>
            <PlayIcon />
          </div>

          <div className="border-2 border-black m-4 bg-white shadow">
            <div className="flex justify-between items-center p-2">
              <p className="font-semibold">Loni’s Fabrics</p>
              <div className="flex gap-1 items-center justify-center">
                {" "}
                <SearchIcon />
                <Image src="/images/avatar.png" width={30} height={30} alt="" />
              </div>
            </div>

            <div className="rounded-xl bg-[#2C2A2A] h-72 m-4 text-center flex items-center justify-center p-10">
              <h1 className="text-white font-bold text-3xl">
                Collection of Local Africa’s Fabrics
              </h1>
            </div>
            <div className="m-4">
              <h1 className="text-center font-semibold text-xl mt-3">
                LONI’s LATEST PRODUCT
              </h1>
              <p className="text-center">Trending product this week</p>

              <div className="flex flex flex-wrap lg:flex-nowrap justify-center items-center gap-3">
                <div className="rounded-xl shadow-xl mt-2 pb-4">
                  <Image
                    className="m-auto"
                    src="/images/product-1.png"
                    width={250}
                    height={150}
                    alt=""
                  />
                  <p className="font-semibold text-sm mt-4 px-2">
                    ZenithAura™ LuminescentWhispe
                  </p>
                  <div className="flex justify-between items-center mt-4 px-2">
                    <RatingIcon />{" "}
                    <span className="font-semibold text-xs">N350.00</span>
                  </div>
                  <div className="flex justify-around px-10 lg:px-2 mt-4">
                    <FormBtn>Add to cart</FormBtn>
                  </div>
                </div>
                <div className="rounded-xl shadow-xl mt-2 pb-4">
                  <Image
                    className="m-auto"
                    src="/images/product-1.png"
                    width={250}
                    height={150}
                    alt=""
                  />
                  <p className="font-semibold text-sm mt-4 px-2">
                    ZenithAura™ LuminescentWhispe
                  </p>
                  <div className="flex justify-between items-center mt-4 px-2">
                    <RatingIcon />{" "}
                    <span className="font-semibold text-xs">N350.00</span>
                  </div>
                  <div className="flex justify-around px-10 lg:px-2 mt-4">
                    <FormBtn>Add to cart</FormBtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
