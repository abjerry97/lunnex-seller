"use client";
import React, { useState, useEffect } from "react";
import DashboardLayout from "../../app/layouts/DashboardLayout";
import FormInput from "@/components/FormInput/FormInput";
import FormTextArea from "@/components/FormTextArea/FormTextArea";
import FormBtn from "@/components/FormBtn/FormBtn";
import SearchIcon from "@/assets/icons/SearchIcon";
import Image from "next/image";
import RatingIcon from "@/assets/icons/RatingIcon";
import PlayIcon from "@/assets/icons/PlayIcon";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../app/axios";
import { useUserStore } from "@/context/UserStoreContext";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Error from "@/app/error";

export default function ViewStore() {
  const router = useRouter();
  const { createStore, store, getStore } = useUserStore();
  const [storeName, setstoreName] = useState( "");
  const [storeLink, setstoreLink] = useState("");
  const [welcomeText, setWelcomeText] = useState("" );
  const [email, setEmail] = useState(store?.email || ""); 
  useEffect(() => {
    if (store) {
      console.log(store)
      setstoreName(store?.name)
      setstoreLink(store?.link || "")
      setWelcomeText(store?.welcomeText || "")
      setEmail(store?.email || "")}
  }, [store]);
 

  const queryClient = useQueryClient();

  const { isSuccess, isPending, status, error, mutate } = useMutation({
    mutationFn: async (data:any) => {
      return await createStore(data);
    },

    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["store"] });
       
      toast.success(JSON.stringify("Success"), {
        pauseOnHover: true,
        position: "top-right",
      });
    },
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      mutate({
        name: storeName,
        link: storeLink,
        welcomeText,
        email,
      });
    } catch (error: any) {
      toast.error(
        JSON.stringify(error.response?.data?.message || error.message),
        {
          position: "top-right",
          pauseOnHover: true,
        }
      );
    }
  };


  
  return (
    <> 
        {status == "error" || error  ? (
          <Error error = {error}/>
        ) :  isPending ? (
          "loading"
        ) : (
          <div className="flex h-full flex-wrap">
            {/* {JSON.stringify(store)} */}
            <div className="w-full lg:w-5/12 h-fit mb-10">
              <FormInput
                label="Store Name"
                placeholder="Enter Store name here"
                value={storeName}
                setValue={setstoreName}
              />
              <FormInput
                label="Store link"
                placeholder=".name.getlunnex.ng"
                value={storeLink}
                setValue={setstoreLink}
              />
              <FormTextArea
                label="Welcome text"
                placeholder="Enter welcome text here"
                value={welcomeText}
                setValue={setWelcomeText}
              />

              <FormInput
                label="Email address"
                placeholder="Add your Email address here"
                value={email}
                setValue={setEmail}
              />
              <div className="mt-6">
                <FormBtn onClick={handleSubmit}>Save Changes</FormBtn>
              </div>
              {/* {JSON.stringify(storeData && storeData[storeData.length - 1])} */}
            </div>
            <div className="w-full lg:w-2/12 "></div>
            <div className="w-full lg:w-5/12 bg-[#F3F3F3] h-fit">
              <div className="bg-[#26264C] p-4 text-white flex items-center justify-between">
                <p>Store preview</p>
                <PlayIcon />
              </div>

              <div className="border-2 border-black m-4 bg-white shadow">
                <div className="flex justify-between items-center p-2">
                  <p className="font-semibold">{storeName || "Loni’s Fabrics"}</p>
                  <div className="flex gap-1 items-center justify-center">
                    {" "}
                    <SearchIcon />
                    <Image
                      src="/images/avatar.png"
                      width={30}
                      height={30}
                      alt=""
                    />
                  </div>
                </div>

                <div className="rounded-xl bg-[#2C2A2A] h-72 m-4 text-center flex items-center justify-center p-10">
                  <h1 className="text-white font-bold text-3xl">
                 {welcomeText ||"Collection of Local Africa’s Fabrics"}
                  </h1>
                </div>
                <div className="m-4">
                  <h1 className="text-center font-semibold text-xl mt-3  uppercase">
                    {storeName ||"LONI’s LATEST"} PRODUCT
                  </h1>
                  <p className="text-center">Trending product this week</p>

                  <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-3">
                    <div className="rounded-xl shadow-xl mt-2 pb-4">
                      <Image
                        className="m-auto"
                        src="/images/product-1.png"
                        width={250}
                        height={150}
                        alt=""
                      />
                      <p className="font-semibold text-sm mt-4 px-2">
                        ZenithAura™ LuminescentWhispe
                      </p>
                      <div className="flex justify-between items-center mt-4 px-2">
                        <RatingIcon />{" "}
                        <span className="font-semibold text-xs">N350.00</span>
                      </div>
                      <div className="flex justify-around px-10 lg:px-2 mt-4">
                        <FormBtn>Add to cart</FormBtn>
                      </div>
                    </div>
                    <div className="rounded-xl shadow-xl mt-2 pb-4">
                      <Image
                        className="m-auto"
                        src="/images/product-1.png"
                        width={250}
                        height={150}
                        alt=""
                      />
                      <p className="font-semibold text-sm mt-4 px-2">
                        ZenithAura™ LuminescentWhispe
                      </p>
                      <div className="flex justify-between items-center mt-4 px-2">
                        <RatingIcon />{" "}
                        <span className="font-semibold text-xs">N350.00</span>
                      </div>
                      <div className="flex justify-around px-10 lg:px-2 mt-4">
                        <FormBtn>Add to cart</FormBtn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} 
    </>
  );
}
