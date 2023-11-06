"use client";
import React, { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import FormBtn from "@/components/FormBtn/FormBtn";
import FormInput from "@/components/FormInput/FormInput";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/context/UserStoreContext";
import Loading from "./loading";

export default function StoreName() {
  const router = useRouter();
  const [storeName, setStoreName] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const { createStoreName } = useUserStore();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setisLoading(true);
      await createStoreName(storeName);
      setisLoading(false);
      router.push("/signup");
    } catch (err: any) {
      await toast.error(err.message, {
        position: "top-right",
        pauseOnHover: true,
      });
      setisLoading(false);
    }
  };
  return (
    <AuthLayout>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="text-center">
          <h3 className="font-bold  text-2xl mb-1">Welcome 👋</h3>
          <p className="mb-4">Enter your details to create an account.</p>
          <h1 className="text-xl lg:text-3xl font-bold mb-4">
            What is the name of your store?
          </h1>
          <FormInput
            placeholder="Enter the name of your store"
            type="text"
            name=""
            id=""
            value={storeName}
            setValue={setStoreName}
          />

          <FormBtn
            isLoading={isLoading}
            className="my-4"
            onClick={handleSubmit}
          >
            Continue
          </FormBtn>

          <p className="text-center my-10">
            By creating an account, you agree to our{" "}
            <a href="" className=" font-bold">
              {" "}
              Term & Conditions.
            </a>
          </p>
        </div>
      )}
    </AuthLayout>
  );
}
