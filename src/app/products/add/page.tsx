import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import FormInput from "@/components/FormInput/FormInput";
import FormTextArea from "@/components/FormTextArea/FormTextArea";
import FormBtn from "@/components/FormBtn/FormBtn";

export default function page() {
  return (
    <DashboardLayout>
      <div className="flex  justify-between flex-wrap">
        <div className="w-full lg:w-5/12">
          <FormInput
            label="Product name"
            placeholder="Enter product name here"
          />
        </div>
        <div className="w-full lg:w-5/12">
          <FormInput label="Product Price" placeholder="Enter Product Price" />
        </div>

        <div className="w-full">
          <FormTextArea
            placeholder="Enter product description here"
            label="Product description "
          />
        </div>
        <div className="w-full lg:w-5/12">
          <FormInput label="Quantity" placeholder="Enter available quantity" />
        </div>
        <div className="w-full lg:w-5/12">
          <FormInput label="Product Tag" placeholder="W29LH" />
        </div>
        <div className="w-full lg:w-5/12">
          <FormInput label="Quantity" placeholder="Enter available quantity" />
        </div>
        <div className="w-full lg:w-5/12">
          <FormInput label="Product Tag" placeholder="W29LH" />
        </div>
        <div className="w-full lg:w-5/12 mt-4">
            <FormBtn>Save Changes</FormBtn>
        </div>
      </div>
    </DashboardLayout>
  );
}
