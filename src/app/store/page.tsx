"use client";
import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useRouter } from "next/navigation";
import { makeRequest } from "../axios";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import Loading from "./Loading";
import { useUserStore } from "@/context/UserStoreContext";
import ViewStore from "@/components/ViewStore/page";
import Error from "../error";

export default function Store() {
  const { createStore, store, getStore } = useUserStore();
  const { isLoading, error, data } = useQuery({
    queryKey: ["store"],
    queryFn: () =>
      getStore().then((res: any) => {
        return res;
      }),
  });
  const router = useRouter();
  return (
    <DashboardLayout>
      {error ? <Error error={error}/> : // "Something Went Wrong"
      isLoading ? (
        <Loading />
      ) : data.length < 1 ? (
        <div className="flex  justify-center h-full w-full">
          <div className="h-32 shadow text-sm p-4 px-10 bg-[#FF3365] rounded-xl flex flex-col items-center justify-center mt-40">
            <p className="text-white mb-3"> You don’t have a Store yet</p>
            <button
              className="bg-white rounded shadow px-4 py-2"
              onClick={() => router.push("store/view")}
            >
              Create Store
            </button>
          </div>
        </div>
      ) : (
       <ViewStore/>
      )}
    </DashboardLayout>
  );
}
