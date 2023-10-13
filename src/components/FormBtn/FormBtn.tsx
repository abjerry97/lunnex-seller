import React from "react";

export default function FormBtn(props: any) {
  const { children, transparent, className } = props;
  return (
    <button
      className={`text-sm w-full px-2 md:px-3 lg:px-6  py-3 rounded-lg shadow   ${
        !!transparent
          ? "border-2 border-black bg-white text-black"
          : "text-white  bg-[#000000] "
      } ${className}`}
    >
      {children}
    </button>
  );
}
