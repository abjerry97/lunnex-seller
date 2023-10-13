import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import FormInput from "@/components/FormInput/FormInput";
import FormTextArea from "@/components/FormTextArea/FormTextArea";
import FormBtn from "@/components/FormBtn/FormBtn";
import SearchIcon from "@/assets/icons/SearchIcon";

export default function CreateStore() {
  return (
    <DashboardLayout>
      <div className="flex">
        <div className="w-5/12">
          <FormInput label="Store Name" placeholder="Enter Store name here" />
          <FormInput label="Store link" placeholder=".name.getlunnex.ng" />
          <FormTextArea
            label="Welcome text"
            placeholder="Enter welcome text here"
          />

          <FormBtn>Save Changes</FormBtn>
        </div>
        <div className="w-2/12"></div>
        <div className="w-5/12 bg-[#F3F3F3]">
          <div className="bg-[#26264C] p-4 text-white">
            <p>Store preview</p>
          </div>

          <div className="border-2 border-black m-4 h-full">
            <div className="flex justify-between items-center p-2">
                <p>Loni’s Fabrics</p>
                <SearchIcon/>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
