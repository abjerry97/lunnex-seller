"use client";
import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useRouter } from "next/navigation"; 
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Loading from "./Loading";
import { useUserStore } from "@/context/UserStoreContext";
import ViewStore from "@/components/ViewStore/page";
import Error from "../error";

export default function Store() {
  const router = useRouter();
  const [displayViewStore, setdisplayViewStore] = useState(false);
  const { createStore, store, checkUserStore } = useUserStore();
  const { isLoading, error, data } = useQuery({
    queryKey: ["store"],
    queryFn: () =>
    checkUserStore().then((res: any) => {
        return res;
      }),
  });
  console.log(error)
  return (
    <DashboardLayout>
      {displayViewStore ? (
        <ViewStore />
      ): error ? (
        <Error error={error} /> // "Something Went Wrong"
      ) : isLoading ? (
        <Loading />
      ) : data?.length < 1 ? (
        <div className="flex  justify-center h-full w-full">
          <div className="h-32 shadow text-sm p-4 px-10 bg-[#FF3365] rounded-xl flex flex-col items-center justify-center mt-40">
            <p className="text-white mb-3"> You don’t have a Store yet</p>
            <button
              className="bg-white rounded shadow px-4 py-2"
              onClick={() => setdisplayViewStore(true)}
            >
              Create Store
            </button>
          </div>
        </div>
      ) : (
        <ViewStore />
      )}
    </DashboardLayout>
  );
}
