import MoreVertIcon from "@/assets/icons/MoreVert";
import RatingIcon from "@/assets/icons/RatingIcon";
import Image from "next/image";
import React from "react";

export default function ProductTableItem() {
  return (
    <div className="m-0 lg:m-4 mb-4">
      <div className="rounded flex  py-3 border border-[#D2D2D2] text-xs text-center items-center shadow w-full px-2 lg:px-0">
        <div className="w-1/12 px-2 hidden lg:flex justify-center text-center ">1</div>
        <div className="w-2/12 flex items-center justify-center">
          <Image className=" h-16 w-full lg:w-8/12" src="/images/product-1.png" alt=""  width={100} height={100}/>
        </div>
        <div className="w-10/12 lg:w-2/12 font-bold text-start lg:text-center px-2 lg:px-0 ">
          Zenith Aura™ Luminescent Whisper
          <div className="  lg:hidden font-light">
            <div className="mt-1 mb-2 ">₦2,350.0</div>
            <div className=" ">BCHTK</div>
          </div>
        </div>
        <div className=" hidden lg:block w-1/12">₦2,350.0</div>
        <div className="hidden lg:block w-1/12">BCHTK</div>
        <div className="hidden  lg:block w-1/12">40</div>
        <div className=" hidden  lg:block w-1/12">175</div>
        <div className=" hidden lg:flex w-2/12  items-center justify-center">
          <RatingIcon />
        </div>
        <div className="w-1/12 flex justify-center items-center">
          <MoreVertIcon />
        </div>
      </div>
      <div className="flex items-center text-xs justify-between p-1 lg:hidden">
        <div className="">Quantity (40)</div>
        <div className="">Sold (175)</div>
        <div className="flex">
          <RatingIcon />
        </div>
      </div>
    </div>
  );
}
