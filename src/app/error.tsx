"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Error(props: any) {
  const router = useRouter();
  const { error } = props; 
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="fof text-center">
        <h1>Error {error?.response?.status}</h1>
        <p>{error.message}</p>

        <p
          className="mt-2 underline cursor-pointer"
          onClick={() => router.back()}
        >
          go back
        </p>
      </div>
    </div>
  );
}
