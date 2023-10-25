"use client";
import HomeIcon from "@/assets/icons/HomeIcon";
import Logo from "@/assets/icons/Logo";
import DestopSideNav from "@/components/DestopSideNav/DestopSideNav";
import LogoSm from "@/assets/icons/LogoSm";
import NotificationIcon from "@/assets/icons/NotificationIcon";
import OrderIcon from "@/assets/icons/OrderIcon";
import Person from "@/assets/icons/Person";
import ProductIcon from "@/assets/icons/ProductIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import SettingsIcon from "@/assets/icons/SettingsIcon";
import StoreIcon from "@/assets/icons/StoreIcon";
import WalletIcon from "@/assets/icons/WalletIcon";
import Image from "next/image";
import React, { useEffect } from "react";
import MobileBottomNav from "@/components/MobileBottomNav/MobileBottomNav";
import MobileTopNav from "@/components/MobileTopNav/MobileTopNav";
import DesktopTopNav from "@/components/DesktopTopNav/DesktopTopNav";
import { useUserAuth } from "@/context/UserAuthContext";
import { useRouter } from "next/navigation";
import ProtectedRoute from "../ProtectedRoute";
const LogoDiv = () => {
  return (
    <>
      <Logo />
    </>
  );
};

export default function DashboardLayout(props: any) {
  const router = useRouter();
  const { user } = useUserAuth();

  return (
    <ProtectedRoute>
      <div className="block lg:flex h-screen max-h-screen overflow-hiden">
        <MobileTopNav />
        <DestopSideNav />

        <div className="w-full lg:w-10/12 h-full max-h-screen overflow-y-scroll">
          <div
            className=" mb-2 lg:sticky top-0 bg-white px-8 py-4 lg:shadow opacity-100 "
            style={{ zIndex: 100 }}
          >
            <div className="flex lg:justify-between">
              <div className=" text-black">
                <h1 className="font-bold">Hi {user?.displayName ?? ""},</h1>
                <p className="text-xs">Welcome to your Seller’s Dashboard.</p>
              </div>
              <DesktopTopNav />
            </div>
          </div>
          {/* bg-[#FAFAFA] */}
          <div className=" mx-4 lg:px-8 lg:py-6 rounded-xl h-full  text-black">
            {props.children}
          </div>
        </div>

        <MobileBottomNav />
      </div>
    </ProtectedRoute>
  );
}
