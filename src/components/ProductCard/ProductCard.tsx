import React from "react";

export default function ProductCard(props:any) {
  const {index, title, text, color} = props
  return (
    // bg-[${color ||'#FF3365'}]
    <div className={` rounded-xl shadow p-5  lg:w-4/12 text-white flex overflow-hidden ${index ==2 && "lg:mb-[-2rem] lg:mt-[2rem]"}`} style={{backgroundColor: color|| '#FF3365'}}>
      <div className="w-9/12 lg:W-7/12 p-4 text-start">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-xs mt-3">{text}</p>
      </div>
      <div className="w-3/12  lg:W-5/12 text-center relative">
        <h1 className="flex text-center items-center justify-center text-3xl font-b6ld border-8 rounded-full absolute" style={{width:"7rem", height:"7rem", top:"-2.5rem",right:"-2.7rem"}}>{index}.</h1></div>
    </div>
  );
}
