import Image from "next/image";
import React from "react";

export default function LogoSm() {
  return (
    <a href="/"> 
    
    <Image src="/images/logo-sm.png" alt="" width={100} height={100} />
    </a>
  );
}
