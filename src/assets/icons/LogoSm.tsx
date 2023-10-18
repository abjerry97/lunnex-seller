import Image from "next/image";
import React from "react";

export default function LogoSm() {
  return (
    <a href="/"> 
    
    <Image src="/images/logo-sm.png" alt="" width={80} height={60} />
    </a>
  );
}
