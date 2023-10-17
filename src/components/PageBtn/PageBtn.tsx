"use client"
import React from "react";

export default function PageBtn(props: any) {
  const { children, transparent ,onClick = ()=>{}} = props;
  return (
    <button
      className={`text-xs w-fit px-4 md:px-3 lg:px-5  py-3 font-semibold rounded-lg shadow bg-[#FF3365]    ${
        !!transparent ? "border-2 border-black bg-white text-black":"text-white"
      }`}
      
      onClick={(e)=>{e.preventDefault();
        onClick()
      }}
    >
      {children}
    </button>
  );
}
