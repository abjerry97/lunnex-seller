"use client";
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import RatingIcon from "@/assets/icons/RatingIcon";
import FormBtn from "@/components/FormBtn/FormBtn";
import Image from "next/image";
import { useProductsStore } from "@/context/ProductsContext";
import { useQuery } from "@tanstack/react-query";
import Error from "@/app/error";
import Loading from "@/app/store/Loading";

export default function ViewProduct(props: any) {
  console.log(props);
  const { getProduct, product } = useProductsStore();


  const { isLoading, error, data } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      getProduct(props?.params?.slug).then((res: any) => {
        return res;
      }),
  });
  return (
    <DashboardLayout>
      {error  ? (
        <Error error={error} /> // "Something Went Wrong"
      ) : isLoading && !product ? (
        <Loading />
      ) : (
      <div className="bg-[#F5F5F5] rounded-lg p-4 flex items-center justify-center">
        {/* {JSON.stringify(props)} */}
        <div className=" ">
          <div className="flex">
            <div className="">
              <Image
                src="/images/product-large.png"
                className="h-60 w-full"
                alt=""
                width={200}
                height={200}
              />
              <div className="flex mt-4 gap-2">
                <Image
                  src="/images/product-large.png"
                  className="w-2/6 h-20"
                  alt=""
                  width={200}
                  height={200}
                />
                <Image
                  src="/images/product-large.png"
                  className="w-2/6 h-20"
                  alt=""
                  width={200}
                  height={200}
                />
                <Image
                  src="/images/product-large.png"
                  className="w-2/6 h-20"
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
            </div>

            {/* <div className="">sdsds</div> */}
          </div>

          <div className=" my-5">
            <div className="block lg:flex mb-3 text-xs ">
              <p className="w-full lg:w-4/12">PRODUCT TAG </p>
              <p className="w-full lg:w-8/12"> {product?.sku || "W29LH"}</p>
            </div>
            <div className="block text-xs lg:flex mb-3">
              <h1 className="w-full lg:w-4/12">Product name</h1>
              <h1 className="font-bold w-full lg:w-8/12">
                {product?.name || "Zenith Aura™ Luminescent Whisper"}
              </h1>
            </div>
            <div className="block text-xs lg:flex mb-3">
              <h1 className="w-full lg:w-4/12">Product Description</h1>
              <h1 className="w-full lg:w-8/12">
                {" "}
                {product?.description ||
                  "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.Excitation venial consequent sent nostrum met."}
              </h1>
            </div>
            <div className="block text-xs lg:flex mb-3">
              <h1 className="w-full lg:w-4/12">Product price</h1>
              <h1 className="font-bold w-full lg:w-8/12">
                {product?.price || "$1,139.33"}
              </h1>
            </div>
            <div className="block text-xs lg:flex mb-3">
              <h1 className="w-full lg:w-4/12 ">Rating</h1>
              <h1 className="w-full lg:w-8/12">
                {" "}
                <RatingIcon />{" "}
              </h1>
            </div>

            <div className="block text-xs lg:flex mb-3">
              <p className="w-full lg:w-4/12">Availability :</p>
              <p className="w-full lg:w-8/12">{product?.sold || "60"} In Stock </p>
            </div>
            <div className="block text-xs lg:flex mb-3">
              <p className="w-full lg:w-4/12">Review :</p>
              <p className="w-full lg:w-8/12">
                {" "}
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met{" "}
              </p>
            </div>

            <div className="flex gap-4 mt-4">
              <FormBtn transparent>Remove Product</FormBtn>
              <FormBtn>Edit Product</FormBtn>
            </div>
          </div>
        </div>
      </div>)}
    </DashboardLayout>
  );
}
