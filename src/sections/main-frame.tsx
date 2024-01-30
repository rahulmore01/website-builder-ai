"use client";
import { useState } from "react";
import Sidebar from "@/components/sidebar";
import Toolbar from "@/components/toolbar";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/mode-toggle";
import { FileCode, PanelsTopLeft, Share } from "lucide-react";
import React from "react";
import CodeView from "@/components/code-view";
import Canvas from "@/components/canvas";

const MainFrame = () => {
  const [isViewCode, setIsViewCode] = useState(false);

  const toggleView = () => {
    setIsViewCode(!isViewCode);
  };

  return (
    <div className="flex justify-between items-center bg-cusBackground dark:bg-secondary w-screen h-screen">
      <Sidebar />
      <div className="h-full w-full max-w-[60%] yFlex !justify-start  gap-4 px-4 pt-8 ">
        <div className="xFlex !justify-between w-full z-40">
          <ModeToggle />
          <div className="xFlex gap-4">
            <Button
              className="bg-background text-muted-foreground border border-secondary-foreground/10 hover:bg-muted p-2"
              onClick={toggleView}
            >
              {isViewCode ? (
                <PanelsTopLeft
                  className="hover:text-primary"
                  size={20}
                  strokeWidth={1.5}
                />
              ) : (
                <FileCode
                  className="hover:text-primary"
                  size={20}
                  strokeWidth={1.5}
                />
              )}
            </Button>
            <Button className="bg-background text-muted-foreground border border-secondary-foreground/10 hover:bg-muted p-2">
              <Share
                className="hover:text-primary"
                size={20}
                strokeWidth={1.5}
              />
            </Button>
          </div>
        </div>
        <div className="w-full ">{isViewCode ? <CodeView /> : <Canvas />}</div>
      </div>
      <Toolbar />
    </div>
  );
};

export default MainFrame;
