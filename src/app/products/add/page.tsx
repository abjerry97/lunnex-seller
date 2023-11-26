"use client";
import React, { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import FormInput from "@/components/FormInput/FormInput";
import FormTextArea from "@/components/FormTextArea/FormTextArea";
import FormBtn from "@/components/FormBtn/FormBtn"; 
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useProductsStore } from "@/context/ProductsContext";
import Error from "@/app/error";
import Loading from "@/app/signup/loading";

export default function page() { 
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState("");

  const queryClient = useQueryClient();

  const { createProduct } = useProductsStore();
  const { isSuccess, isPending, status, error, mutate } = useMutation({
    mutationFn: async (data: any) => {
      return await createProduct(data);
    },

    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success(JSON.stringify("Success"), {
        pauseOnHover: true,
        position: "top-right",
      });
    },
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      mutate({
        name: productName,
        image: "",
        qty: qty,
        description: productDescription,
        sku: productId,
      });
    } catch (error: any) {
      toast.error(
        JSON.stringify(error.response?.data?.message || error.message),
        {
          position: "top-right",
          pauseOnHover: true,
        }
      );
    }
  };

  return (
    <DashboardLayout>
      {error ? (
        <Error error={error} /> // "Something Went Wrong"
      ) : isPending ? (
        <Loading />
      ) : (
        <div className="flex  justify-between flex-wrap">
          <div className="w-full lg:w-5/12">
            <FormInput
              label="Product name"
              placeholder="Enter product name here"
              value={productName}
              setValue={setProductName}
            />
          </div>
          <div className="w-full lg:w-5/12">
            <FormInput
              label="Product Price"
              placeholder="Enter Product Price"
              value={productPrice}
              setValue={setProductPrice}
            />
          </div>

          <div className="w-full">
            <FormTextArea
              placeholder="Enter product description here"
              label="Product description "
              value={productDescription}
              setValue={setProductDescription}
            />
          </div>
          <div className="w-full lg:w-5/12">
            <FormInput
              label="Quantity"
              placeholder="Enter available quantity"
              value={qty}
              setValue={setQty}
            />
          </div>
          <div className="w-full lg:w-5/12">
            <FormInput
              label="Product Tag"
              placeholder="W29LH"
              value={productId}
              setValue={setProductId}
            />
          </div>

          <div className="w-full lg:w-5/12 mt-4">
            <FormBtn onClick={handleSubmit}>Save Changes</FormBtn>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
