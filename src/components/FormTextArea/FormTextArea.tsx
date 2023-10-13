import React from "react";

export default function FormTextArea(props: any) {
  const { label, type, placeholder, name } = props;

  return (
    <div className="text-start mb-2">
      {label && <label htmlFor="login">{label}</label>}
      <textarea
        className="border-2 border-[#D4D4D4] rounded-lg w-full p-2 placeholder:text-[#A0A0A0] text-sm"
        placeholder={`${placeholder}`} 
        name={`${name}`}
        id=""
      />
    </div>
  );
}
