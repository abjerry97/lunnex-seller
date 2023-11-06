import Logo from "@/assets/icons/Logo";
import { useUserAuth } from "@/context/UserAuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function AuthLayout(props: any) {
  const router = useRouter();
  const { user } = useUserAuth();

  useEffect(() => {
    const authenticated = !!user && !!user.uid;
    if (authenticated) router.push("/home");
  }, [user,router]);

  return (
    
    <div className=" ">
      <div className="flex justify-end p-5 sticky top-0">
        <Logo />
      </div>

      <div className="flex items-center justify-center py-20 lg:py-2">
        <div className="w-10/12 md:w-6/12 lg:w-4/12 text-black">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
