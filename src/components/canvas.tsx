import { MonitorPlay, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";

const Canvas = () => {
  const [canvasWidth, setCanvasWidth] = useState("w-[100%]");

  const handleIconClick = (newWidth: any) => {
    setCanvasWidth(newWidth);
  };

  return (
    <div className="h-full w-full   yFlex gap-6  ">
      {/* main canvas */}
      <div
        className={`h-full max-h-[85vh] border border-input dark:border-neutral-600 rounded-lg bg-muted dark:bg-black/50 ${canvasWidth}`}
      >
        <div className="xFlex !justify-between w-full h-[50px]  px-6 rounded-t-lg">
          <div className="xFlex gap-3">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
          <div className="flex items-center gap-2 opacity-80 active:text-primary">
            <MonitorPlay
              size={26}
              strokeWidth={1.75}
              className="text-gray-500 hover:text-primary transition duration-300"
              onClick={() => handleIconClick("w-[100%]")}
            />
            <Tablet
              size={24}
              strokeWidth={1.75}
              className="text-gray-500 hover:text-primary transition duration-300 cursor-pointer"
              onClick={() => handleIconClick("w-[60%]")}
            />
            <Smartphone
              size={24}
              strokeWidth={1.75}
              className="text-gray-500 hover:text-primary transition duration-300 cursor-pointer"
              onClick={() => handleIconClick("w-80")}
            />
          </div>
        </div>
        <div className="w-full h-[76vh] bg-white rounded-b-lg"></div>
      </div>
    </div>
  );
};

export default Canvas;
