import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import OrderCard from "@/components/OrderCard/OrderCard";

export default function Orders() {
  return (
    <DashboardLayout>
      <div className="border-b-2 mb-4">
        <ul className="flex gap-4 text-xs font-semibold ">
          <li className="p-2 opacity-50 hover:opacity-100 cursor-pointer">ALL</li>
          <li className="p-2 opacity-50 hover:opacity-100 cursor-pointer ">NEW</li>
          <li className="p-2 opacity-50 hover:opacity-100 cursor-pointer ">DELIVERED</li>
          <li className="p-2 opacity-50 hover:opacity-100 cursor-pointer ">CANCELLED</li>
        </ul>
      </div>
      <>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
      </>
    </DashboardLayout>
  );
}
