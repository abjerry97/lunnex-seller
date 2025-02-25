"use client";
import React, { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import FormBtn from "@/components/FormBtn/FormBtn";
import { useRouter } from "next/navigation";
import { useUserAuth } from "@/context/UserAuthContext";
import FormInput from "@/components/FormInput/FormInput";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const router = useRouter();

  const { logIn } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setisLoading(true);
      await logIn(email, password);
      setisLoading(false);
      toast.success(JSON.stringify("Success"), {
        position: "top-right",
        pauseOnHover: true,
      });
      router.push("/home");
    } catch (err: any) {
      // setError(mapAuthCodeToMessage(err.code))

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
      <div className="text-center mt-4 lg:mt-10 pt-0 md:pt-5">
        <h3 className="font-bold  text-2xl mb-1">Welcome 👋</h3>
        <p className="mb-4">Enter your details to sign in to your account.</p>

        <form>
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
