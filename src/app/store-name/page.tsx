import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import FormBtn from "@/components/FormBtn/FormBtn";

export default function StoreName() {
  return (
    <AuthLayout>
      <div className="text-center">
        <h3 className="font-bold">Welcome 👋</h3>
        <p className="mb-4">Enter your details to create an account.</p>
        <h1 className="text-xl lg:text-3xl font-bold mb-4">
          What is the name of your store?
        </h1>
        <input
          className="border-2 border-[#D4D4D4] rounded-lg w-full p-2 placeholder:text-[#A0A0A0] text-sm"
          placeholder="Enter the name of your store"
          type="text"
          name=""
          id=""
        />
        
        <FormBtn className="my-4">Continue</FormBtn>


        <p className="text-center my-10">By creating an account, you agree to our <a href=""className=" font-bold"> Term & Conditions.</a></p>
      </div>
    </AuthLayout>
  );
}
