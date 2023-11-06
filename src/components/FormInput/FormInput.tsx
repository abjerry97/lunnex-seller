"use client"
import React from "react";

export default function FormInput(props: any) {
  const { label, type, placeholder, name,value= "", setValue =()=>{} } = props;

  return (
    <div className="text-start mb-3">
      {label && <label htmlFor="login" className="text-xs">{label}</label>}
      <input
        className="border-[1.5px] border-[#D4D4D4] rounded-lg w-full p-2 py-3 placeholder:text-[#A0A0A0] text-xs "
        placeholder={`${placeholder}`}
        type={`${type}`}
        name={`${name}`}
        id="" 
        value={value} 
        onChange = {(e)=>setValue && setValue(e.target.value)}
      />
    </div>
  );
}
