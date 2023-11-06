"use client";
import React, { useState, useEffect } from "react";
import AuthLayout from "../layouts/AuthLayout";
import FormBtn from "@/components/FormBtn/FormBtn";
import { useRouter } from "next/navigation";
import { useUserAuth } from "@/context/UserAuthContext";
import { toast } from "react-toastify";
import FormInput from "@/components/FormInput/FormInput";
import { useUserStore } from "@/context/UserStoreContext";

export default function Signup() {
  const router = useRouter();

  const { addUserToFirestore } = useUserAuth();
  const { storeName, createStore } = useUserStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setisLoading(true);
      const user = await addUserToFirestore(
        email,
        password,
        { fullName: name },
        storeName
      );
      if (user?.uid) await createStore({ name: storeName, userId: user.uid });
      setisLoading(false);
      toast.success(JSON.stringify("Success"), {
        pauseOnHover: true,
      });
      router.push("/home");
    } catch (err: any) {
      await toast.error(err.message, {
        position: "top-right",
        pauseOnHover: true,
      });
      console.warn(err);
      setisLoading(false);
    }
  };
  useEffect(() => {
    if (!storeName) router.push("/store-name");
  }, [storeName,router]);

  return (
    <AuthLayout>
      <div className="text-center">
        <h3 className="font-bold text-2xl mb-1">Welcome 👋</h3>
        <p className="mb-4">Enter your details to create an account.</p>
        <form action="">
          <div className="text-start my-4">
            <label htmlFor="name">Name</label>
            <FormInput
              className="border border-[#D4D4D4] rounded-lg w-full p-2 placeholder:text-[#A0A0A0] text-sm"
              placeholder="Your name"
              type="text"
              name="name"
              id=""
              value={name}
              setValue={setName}
            />
          </div>
          <div className="text-start my-4">
            <label htmlFor="login">Email</label>
            <FormInput
              placeholder="Your email"
              type="email"
              name="login"
              id=""
              value={email}
              setValue={setEmail}
            />
          </div>
          <div className="text-start my-4">
            <label htmlFor="login">Password</label>
            <FormInput
              placeholder="Create a password"
              type="password"
              name="login"
              id=""
              value={password}
              setValue={setPassword}
            />
          </div>
          <FormBtn
            className="my-4"
            isLoading={isLoading}
            onClick={handleSubmit}
          >
            Continue
          </FormBtn>
        </form>
        <p className="text-center my-10">
          By creating an account, you agree to our{" "}
          <a href="" className=" font-bold">
            {" "}
            Term & Conditions.
          </a>
        </p>
      </div>
    </AuthLayout>
  );
}
