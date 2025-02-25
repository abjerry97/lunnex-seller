import RatingIcon from "@/assets/icons/RatingIcon";
import React from "react";
import ProductTableItem from "../ProductTableItem/ProductTableItem";
import { useProductsStore } from "@/context/ProductsContext";
import { useQuery } from "@tanstack/react-query";
import Error from "@/app/error";
import Link from "next/link";

export default function ProductTable() {
  const { getUserProducts } = useProductsStore();

  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      getUserProducts().then((res: any) => {
        return res;
      }),
  });
  return (
    <div className="">
      <div className=" text-black bg-[#D0D0FB] rounded py-4 px-8 mb-4 text-xs font-semibold text-center hidden lg:flex">
        <div className="w-1/12 px-2">S/N</div>
        <div className="w-2/12">Image</div>
        <div className="w-2/12">Name</div>
        <div className="w-1/12">Price</div>
        <div className="w-1/12">ID</div>
        <div className="w-1/12">Qty</div>
        <div className="w-1/12">Sold</div>
        <div className="w-2/12">Review</div>
        <div className="w-1/12"></div>
      </div>

      <div className="bg-[#D0D0FB] font-bold p-4 mb-3 rounded hidden  text-black">
        Product
      </div>
      <div className="m-0 lg:m-4  text-black">
        {isLoading ? (
          "Loading"
        ) : error ? (
          <Error error={error} />
        ) : !!data && data.length > 0 ? (
          <>
            {" "}
            {data?.map((data: any, index: any) => {
              return <ProductTableItem index={index} {...data} key={index} />;
            })}
          </>
        ) : (
          <>{JSON.stringify(error)} Product Empty, Proceed to create product <Link className=" underline cursor-pointer" href="products/add">here</Link></>
        )}
      </div>
    </div>
  );
}
