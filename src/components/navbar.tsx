import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/ui/button";

export const Navbar = () => {
  const { data: sessionData } = useSession();
  return (
    <nav>
      <div className="container mx-auto flex flex-row items-center justify-between px-4 py-2">
        <Link
          href="/"
          className="flex flex-row items-center text-2xl font-semibold text-primary"
        >
          <Image
            width="64"
            height="64"
            src="/branding.png"
            alt="app branding illustration"
          />
          <span>Paperflow</span>
        </Link>
        <Button
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </Button>
      </div>
    </nav>
  );
};
