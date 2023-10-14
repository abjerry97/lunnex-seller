import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Image from "next/image";

export default function Profile() {
  return (
    <DashboardLayout>
      <div className="flex flex items-center justify-center mt-10">
        <div className="flex flex-col items-center">
          <Image alt="" src="/images/avatar.png" height={150} width={150} />
          <div className="text-black text-center mt-4">
            <h1 className="text-2xl font-semibold">Bettie Hampton</h1>
            <p className="font-sm">Edit profile</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ul>
            <li className="mb-3 font-semibold"><a href="">Edit profile</a></li>
            <li className="mb-3 font-semibold"><a href="">Account Setting</a></li>
            <li className="mb-3 font-semibold"><a href="">Change Password</a></li>
        </ul>
      </div>
    </DashboardLayout>
  );
}
