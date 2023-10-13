import React from "react";
import AuthLayout from "../layouts/AuthLayout";
import FormBtn from "@/components/FormBtn/FormBtn";

export default function Login() {
  return (
    <AuthLayout>
      <div className="text-center">
        <h3 className="font-bold">Welcome 👋</h3>
        <p className="mb-4">Enter your details to sign in to your account.</p>

        <form action="">
          <div className="text-start my-4">
            <label htmlFor="login">Email</label>
            <input
              className="border-2 border-[#D4D4D4] rounded-lg w-full p-2 placeholder:text-[#A0A0A0] text-sm"
              placeholder="Your email"
              type="email"
              name="login"
              id=""
            />
          </div>
          <div className="text-start my-4">
            <label htmlFor="login">Password</label>
            <input
              className="border-2 border-[#D4D4D4] rounded-lg w-full p-2 placeholder:text-[#A0A0A0] text-sm"
              placeholder="Create a password"
              type="password"
              name="login"
              id=""
            />
          </div>
          <FormBtn className="my-4">Continue</FormBtn>
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
