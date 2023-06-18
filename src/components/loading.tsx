import { Loader2 } from "lucide-react";
import React from "react";
import { Navbar } from "@/components/navbar";

type TLoading = { pageTitle: string };

const Loading = ({ pageTitle }: TLoading) => {
  return (
    <div className=" relative  h-screen bg-background">
      <div className="w-full ">
        <Navbar />
      </div>

      <div className="absolute  left-1/2  top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Loading {pageTitle}...
        </h2>
        <Loader2 className="mr-2 h-10 w-10 animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
