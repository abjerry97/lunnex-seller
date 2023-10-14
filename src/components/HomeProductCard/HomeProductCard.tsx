import RatingIcon from "@/assets/icons/RatingIcon";
import Image from "next/image";
import React from "react";

export default function HomeProductCard() {
  return (
    <div className="flex mb-4 shadow p-2">
      <Image className="h-16" src="/images/product-1.png" alt="" width={100} height={100} />
      <div className="ms-2">
        <h4 className="text-sm font-semibold">Zenith Aura™ Lumine...</h4>
        <p className="text-xs mb-2">N7,500:00</p>
        <div className="flex">
          <RatingIcon /> <span className="text-xs">(172)</span>
        </div>
      </div>
    </div>
  );
}
