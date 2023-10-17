"use client";
import React from "react";
import DottedElipseLoader from "../DottedElipseLoader";

export default function FormBtn(props: any) {
  const {
    isLoading,
    loadingText = "loading",
    children,
    transparent,
    className,
    onClick = () => {},
  } = props;
  return (
    <button
    disabled={isLoading}
      className={`text-sm w-full px-2 md:px-3 lg:px-6  py-3 rounded-lg shadow  flex justify-center items-center gap-2 ${
        !!transparent
          ? "border-2 border-black bg-white text-black"
          : "text-white  bg-[#000000] "
      } ${className} ${isLoading ? "opacity-80" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {isLoading ? loadingText : children}
      {isLoading && <DottedElipseLoader />}
    </button>
  );
}
