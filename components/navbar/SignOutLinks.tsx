'use client';


import React from "react";
import { useToast } from "../ui/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";


function SignOutLinks() {
  const {toast} = useToast()
  const handleLogOut = () => {
    toast({description:'Logout Successful'})
  }
  return <SignOutButton >
   <Link href='/' className="w-full text-left onClick={handleLogOut}">
   Logout 
   </Link>

  </SignOutButton>;
}

export default SignOutLinks;
