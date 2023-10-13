import Logo from "@/assets/icons/Logo";
import React from "react";

function AuthLayout(props: any) {
  return (
    <div className=" ">
      <div className="flex justify-end p-5 sticky top-0">
        <Logo />
      </div>
      
      <div className="flex items-center justify-center py-20 lg:py-20">
        <div className="w-10/12 md:w-6/12 lg:w-4/12">{props.children}</div>
      </div>
    </div>
  );
}

export default AuthLayout;
