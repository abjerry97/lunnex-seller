import Image from "next/image";
import React from "react";

export default function OrderCard() {
  return (
    <div className="rounded-xl p-4 bg-[#F9F8F8] mb-4 shadow">
      <div className="flex justify-between mb-4">
        <div className="">
          <h1 className="font-semibold">Order #1919</h1>
          <p className="text-xs">06 May, 2023 at 4:13pm</p>
        </div>
        <h1 className="font-semibold">N400:00</h1>
      </div>
      <div className="bg-white rounded-xl flex p-4 gap-2">
        <Image src="/images/product-1.png" alt="" />
        <div className="p-2">
          <h1 className="font-semibold text-sm mb-4">Zenith Aura™ Luminescent Whisper</h1>
          <div className="flex gap-2 text-xs">
            <span>Quantity</span> <span>12</span>
          </div>
          <div className="flex gap-2 text-xs">
            <span>Product ID</span> <span>28282C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
