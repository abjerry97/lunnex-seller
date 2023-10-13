import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import RatingIcon from "@/assets/icons/RatingIcon";
import FormBtn from "@/components/FormBtn/FormBtn";
import Image from "next/image";

export default function ViewProduct() {
  return (
    <DashboardLayout>
      <div className="">
        <div className="w-5/12  ">
          <div className="flex">
            <div className="">
              <Image
                src="/images/product-large.png"
                className="h-60 w-full"
                alt=""
                // width={"100%"}
              />
              <div className="flex mt-4 gap-2">
                <Image
                  src="/images/product-large.png"
                  className="w-2/6 h-20"
                  alt=""
                />
                <Image
                  src="/images/product-large.png"
                  className="w-2/6 h-20"
                  alt=""
                />
                <Image
                  src="/images/product-large.png"
                  className="w-2/6 h-20"
                  alt=""
                />
              </div>
            </div>
            <div className="">sdsds</div>
          </div>

          <div className=" mt-3">
            <p className="text-xs">PRODUCT TAG - W29LH</p>
            <h1 className="font-bold">Zenith Aura™ Luminescent Whisper</h1>
            <RatingIcon />
            <h3>$1,139.33</h3>
            <div className="flex">
              <p>Availability :</p>
              <p>60 In Stock </p>
            </div>
            <p className="text-xs mb-3">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>

            <div className="flex gap-4">
              <FormBtn transparent>Edit Product</FormBtn>
              <FormBtn>Edit Product</FormBtn>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
