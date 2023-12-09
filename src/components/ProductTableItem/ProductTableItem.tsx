import MoreVertIcon from "@/assets/icons/MoreVert";
import RatingIcon from "@/assets/icons/RatingIcon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ProductTableItem(props: any) {
  const router = useRouter();
  const { index, image = "/", name, sku: id, price, qty, sold } = props;
  const [dropdownState, setDropdownState] = useState(false);
  return (
    <div
      className="m-0 lg:m-4 mb-4 cursor-pointer"
      onClick={() => {
        router.push(`products/${id}`);
      }}
    >
      <div className="rounded flex  py-2 border border-[#D2D2D2] text-xs text-center items-center shadow w-full px-2 lg:px-0">
        <div className="w-1/12 px-2 hidden lg:flex justify-center text-center ">
          {index}
        </div>
        <div className="w-2/12 flex items-center justify-center">
          <Image
            className=" h-16 w-full lg:w-8/12"
            src={image}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="w-10/12 lg:w-2/12 font-bold text-start lg:text-center px-2 lg:px-0 ">
          {name}
          <div className="  lg:hidden font-light">
            <div className="mt-1 mb-2 ">{price?.price || ""}</div>
            <div className=" ">{id}</div>
          </div>
        </div>
        <div className=" hidden lg:block w-1/12">{price?.price|| ""}</div>
        <div className="hidden lg:block w-1/12">{id}</div>
        <div className="hidden  lg:block w-1/12">{qty}</div>
        <div className=" hidden  lg:block w-1/12">{sold}</div>
        <div className=" hidden lg:flex w-2/12  items-center justify-center">
          <RatingIcon />
        </div>
        <div
          className="w-1/12 flex justify-center items-center relative"
          onClick={(e) => { e.stopPropagation();
            setDropdownState(!dropdownState);
          }}
        >
          <MoreVertIcon />
          {dropdownState ? (
            <div className="absolute w-32 top-0 bottom-0">
              <ul className=" bg-white shadow rounded ">
                <li className=" border-b-2 p-2 cursor-pointer">View Product</li>
                <li className=" border-b-2 p-2 cursor-pointer">View Product</li>
                <li className=" border-b-2 p-2 cursor-pointer">View Product</li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex items-center text-xs justify-between p-1 lg:hidden">
        <div className="">Quantity ({qty})</div>
        <div className="">Sold ({sold})</div>
        <div className="flex">
          <RatingIcon />
        </div>
      </div>
    </div>
  );
}
