"use client";
import MinusInactive from "@/assets/icons/MinusInactive";
import PlusActive from "@/assets/icons/PlusActive";
import React, { useState } from "react";

export default function FaqCard(props: any) {
  const [isActive, setActive] = useState(false);
  return (
    <div
      className={`shadow bg-[#26264C] p-6 text-white rounded-xl mb-4 cursor-zoom-in ${
        isActive && "border-2 border-[#9696A9]"
      } `}
      onClick={() => setActive(!isActive)}
    >
      <div className="flex justify-between mb-4">
        <h1 className="font-bold text-sm">How do I get started with Lunnex?</h1>
        <div className="text-sm flex gap:0.5 lg:gap-1.5 items-center">
          <h1>Read Less</h1> {isActive ? <MinusInactive /> : <PlusActive />}
        </div>
      </div>
      <p className={`w-3/4  text-xs ${!isActive && "hidden"}`}>
        To get started, simply sign up for an account and follow our
        step-by-step onboarding process. You&apos;ll be guided through the process of
        setting up your store, selecting a template, and customizing your
        website.
      </p>
    </div>
  );
}
