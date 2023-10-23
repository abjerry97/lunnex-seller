"use client";
import React, { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import FormBtn from "@/components/FormBtn/FormBtn";
import { useRouter } from "next/navigation";
import { useUserAuth } from "@/context/UserAuthContext";
import {  toast } from "react-toastify";
import FormInput from "@/components/FormInput/FormInput";

export default function Signup() {
  const router = useRouter();

  const { addUserToFirestore } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setisLoading(true);
      await addUserToFirestore(email, password, {name});
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
              // className="border border-[#D4D4D4] rounded-lg w-full p-2 placeholder:text-[#A0A0A0] text-sm"
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
              // className="border border-[#D4D4D4] rounded-lg w-full p-2 placeholder:text-[#A0A0A0] text-sm"
              placeholder="Create a password"
              type="password"
              name="login"
              id=""
              value={password}
              setValue={setPassword}
            />
          </div>
          <FormBtn className="my-4" onClick={handleSubmit}>
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
