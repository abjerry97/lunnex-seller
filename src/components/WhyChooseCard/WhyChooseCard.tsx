import test from "node:test";
import React from "react";

export default function WhyChooseCard(props:any) {
    const {icon, title, text,color}= props
  return (
    <div className="rounded-xl shadow text-white p-5 py-8 w-full md:w-5/12 lg:w-3/12 " style={{ backgroundColor: color ||"#26264C"}} >
      <div className="">
        {icon}
      </div>
      <h4 className="text-xl font-semibold my-2">{title}</h4>
      <p className="text-xs">
       {text}
      </p>
    </div>
  );
}
