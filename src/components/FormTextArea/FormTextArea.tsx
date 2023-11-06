"use client"
import React from "react";

export default function FormTextArea(props: any) {
  const { label, type, placeholder, name,value="", setValue=()=>{} } = props;

  return (
    <div className="text-start mb-3">
      {label && <label htmlFor="login"  className="text-xs">{label}</label>}
      <textarea
        className="border-[1px] border-[#D4D4D4] rounded-lg w-full p-2 placeholder:text-[#A0A0A0] text-xs"
        placeholder={`${placeholder}`} 
        name={`${name}`}
        id=""
        rows={6}
        
        value={value} 
        onChange = {(e)=>setValue && setValue(e.target.value)}
      />
    </div>
  );
}
