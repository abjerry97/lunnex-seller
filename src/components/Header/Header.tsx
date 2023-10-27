import Logo from "@/assets/icons/Logo";
import { useUserAuth } from "@/context/UserAuthContext";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header() {
  const router = useRouter();
  const { user, logOut } = useUserAuth();
  return (
    <nav className="flex items-center justify-between px-2 lg:px-10 py-3 sticky top-0 bg-white z-[100] ">
      <Logo />
      {user ? (
        <div className="flex gap-4 text-sm items-center ">
          <a className="underline" href="/home">
            go to dashboard
          </a>

          <a
            href=""
            onClick={logOut}
            className="rounded shadow  border border-black px-4 py-2"
          >
            Logout
          </a>
        </div>
      ) : (
        <div className="flex gap-4 text-sm items-center ">
          <a
            href="/login"
            className="rounded shadow  border border-black px-4 py-2"
          >
            Login
          </a>
          <a
            href="/store-name"
            className="rounded shadow bg-[#FF3365] text-white px-4 py-2"
          >
            Create account
          </a>
        </div>
      )}
    </nav>
  );
}
