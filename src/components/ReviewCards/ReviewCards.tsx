import Image from "next/image";
import React from "react";

export default function ReviewCards(props:any) {
  const {name,text,avatar,role}= props
  return (
    <div className="rounded bg-white shadow rounded-xl w-full md:w-7/12 p-3">
      <p className="text-black text-sm text-start p-5 text-sm">
        {text}
      </p>
      <div className="flex gap-2 py-3 px-6">
        <div className="rounded-full overflow-hidden">
          <Image src={avatar} alt="" width={50} height={50}/>
        </div>
        <div className="">
          <h4 className=" text-start text-sm font-semibold text-black my-0">
            {name}
          </h4>
          <p className="text-[#9696A9] text-sm"> {role}</p>
        </div>
      </div>
    </div>
  );
}
