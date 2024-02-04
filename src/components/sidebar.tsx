import React, { useState } from "react";
import { Button } from "./ui/button";
import { UserRoundPlus } from "lucide-react";
import { ShadcnImagesPreview } from "./shadcn-images-preview";
import { ShadcnCompPreview } from "./shadcn-component-preview";

const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-between items-center bg-card w-full max-w-[270px] h-screen border border-r relative">
      <div className="xFlex !justify-start gap-4 w-full h-20 border-b py-6 px-8">
        <div className="w-[40px] h-[40px] bg-primary rounded-md"></div>
        <span className="font-semibold text-[18px]">Logo</span>
      </div>
      {/* shadcn side nav */}
      <div className="h-full w-full px-14 py-6">
        {/* <ShadcnImagesPreview /> */}
        <ShadcnCompPreview />
      </div>
      <div className=" w-full xFlex gap-4 h-20 border-t border-[50%] py-6 px-8">
        <Button className="bg-red-500 hover:bg-red-600 w-full max-w-[270px] h-9 rounded-lg dark:text-gray-200">
          <span>
            <UserRoundPlus size={16} strokeWidth={2.5} className="mr-1" />
          </span>
          Sign Up
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
