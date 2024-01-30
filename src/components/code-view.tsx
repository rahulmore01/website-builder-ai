"use client";
import { useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { CodeBlock, dracula } from "react-code-blocks";

const CodeView = () => {
  const [copy, setCopy] = useState(false);

  const code =
    // Initial code or a placeholder
    `import React from "react";\n\nconst Card = () => {\n  // Dummy data for the card\n  const title = "Example Card";\n  const description = "This is a simple card component in React with Tailwind CSS.";\n  const imageUrl = "https://example.com/example-image.jpg";\n\n  return (\n    <div className="max-w-sm rounded overflow-hidden shadow-lg">\n      <img className="w-full" src={imageUrl} alt={title} />\n      <div className="px-6 py-4">\n        <div className="font-bold text-xl mb-2">{title}</div>\n 
    <div className="font-bold text-xl mb-2">{title}</div>\n 
    <div className="font-bold text-xl mb-2">{title}</div>\n  
    <div className="font-bold text-xl mb-2">{title}</div>\n 
    
    <p className="text-gray-700 text-base">{description}</p>\n      </div>\n    </div>\n  );\n};\n\nexport default Card`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <div className="h-[84vh] text-left w-full flex flex-col rounded-md overflow-x-hidden border border-input dark:border dark:border-white/10">
      <div className="flex justify-between text-muted-foreground px-[25px] text-xs font-normal items-center bg-muted dark:bg-black/50 border-b border-input  rounded-t-md  dark:border-white/10 ">
        <p className="py-4 text-center  font-normal cursor-pointer">
          Example code
        </p>
        <div onClick={handleCopy}>
          <button className="py-1 inline-flex items-center gap-1  font-normal hover:text-primary">
            <span className="">
              {copy ? (
                <ClipboardCheck className="h-4 w-4" />
              ) : (
                <Clipboard className="h-4 w-4" />
              )}
            </span>
            {copy ? "Copied!" : "Copy Code"}
          </button>
        </div>
      </div>
      <CodeBlock
        text={code}
        language="jsx"
        showLineNumbers={true}
        // wrapLines={true}
        theme={dracula}
        startingLineNumber={1}
        // codeBlock
      />
    </div>
  );
};

export default CodeView;
