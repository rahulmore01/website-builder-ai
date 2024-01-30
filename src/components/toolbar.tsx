// "use client";
import React, { useState } from "react";
import TailwindSelect from "react-tailwindcss-select";
import { suggestions } from "@/constants/tw-classes";

const Toolbar = () => {
  const [fixedClasses, setFixedClasses] = useState([
    "text-gray-500",
    "hover:bg-red-900",
  ]);
  const [dynamicClasses, setDynamicClasses] = useState<string[]>([]);
  const [newClass, setNewClass] = useState<string[]>([]);

  const handleAddClass = () => {
    if (newClass.length > 0) {
      setFixedClasses((prevClasses) => [...prevClasses, ...newClass]);
      setDynamicClasses((prevDynamicClasses) => [
        ...prevDynamicClasses,
        ...newClass,
      ]);
      setNewClass([]);
    }
  };

  const handleInputChange = (selectedOption) => {
    if (selectedOption) {
      setNewClass((prevNewClass) => [...prevNewClass, selectedOption.value]);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddClass();
    }
  };

  const handleRemoveClass = (index, type) => {
    if (type === "dynamic") {
      setDynamicClasses((prevDynamicClasses) =>
        prevDynamicClasses.filter((_, i) => i !== index)
      );
    } else if (type === "new") {
      setNewClass((prevNewClass) => prevNewClass.filter((_, i) => i !== index));
    } else if (type === "fixed") {
      setFixedClasses((prevFixedClasses) =>
        prevFixedClasses.filter((_, i) => i !== index)
      );
    }
  };

  const selectOptions = suggestions.map((value) => ({ label: value, value }));

  return (
    <aside className="flex flex-col justify-between items-center bg-card w-full max-w-[270px] h-screen border border-r">
      {/* top side */}
      <div className="xFlex !justify-start gap-4 w-full h-20 border-b py-6 px-8">
        <h3 className="font-medium text-foreground/90 text-[16px]">Classes</h3>
      </div>
      {/* middle tailwind classes portion */}
      <div className="h-auto w-full py-6 px-8 ">
        <TailwindSelect
          options={selectOptions}
          isSearchable
          placeholder={
            newClass.length > 0
              ? newClass[newClass.length - 1]
              : "Add new class"
          }
          value={{
            label: newClass.length > 0 ? newClass[newClass.length - 1] : "",
            value: newClass,
          }}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          primaryColor={"green"}
          classNames={{
            menuButton: ({ isDisabled }) =>
              `flex text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none ${
                isDisabled
                  ? "bg-muted"
                  : "bg-muted hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
              }`,
            menu: "absolute z-20 w-full bg-white dark:bg-muted shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
          }}
        />
      </div>
      <div className="h-full w-full pt-2 px-8 yFlex !items-start !justify-start gap-3 flex-col-reverse">
        {/* Display all dynamic classes in reverse order with delete icon */}
        {dynamicClasses
          .slice(0)
          .reverse()
          .map((className, index) => (
            <div
              key={`dynamic-${index}`}
              className="xFlex gap-1 bg-[#021D05]/90 dark:bg-neutral-700 px-3 py-1 rounded-full"
            >
              <img src="/tw.png" alt="tw.png" className="w-6 h-6" />
              <h5 className="text-[12px] font-medium text-primary-foreground dark:text-neutral-300">
                {className}
              </h5>
              <span
                onClick={() => handleRemoveClass(index, "dynamic")}
                className="cursor-pointer ml-2 text-red-500"
              >
                &#x2715;
              </span>
            </div>
          ))}
        {/* Display the new classes in reverse order with delete icon */}
        {newClass
          .slice(0)
          .reverse()
          .map((className, index) => (
            <div
              key={`new-${index}`}
              className="xFlex gap-1 bg-[#021D05]/90 dark:bg-neutral-700 px-3 py-1 rounded-full"
            >
              <img src="/tw.png" alt="tw.png" className="w-6 h-6" />
              <h5 className="text-[12px] font-medium text-primary-foreground dark:text-neutral-300">
                {className}
              </h5>
              <span
                onClick={() => handleRemoveClass(index, "new")}
                className="cursor-pointer ml-2 text-red-500"
              >
                &#x2715;
              </span>
            </div>
          ))}
        {/* Display all fixed classes with delete icon */}
        {fixedClasses
          .slice(0)
          .reverse()
          .map((className, index) => (
            <div
              key={`fixed-${index}`}
              className="xFlex gap-1 bg-[#021D05]/90 dark:bg-neutral-700 px-3 py-1 rounded-full"
            >
              <img src="/tw.png" alt="tw.png" className="w-6 h-6" />
              <h5 className="text-[12px] font-medium text-primary-foreground dark:text-neutral-300">
                {className}
              </h5>
              <span
                onClick={() => handleRemoveClass(index, "fixed")}
                className="cursor-pointer ml-2 text-red-500"
              >
                &#x2715;
              </span>
            </div>
          ))}
      </div>
    </aside>
  );
};

export default Toolbar;

// import React, { useState } from "react";
// import TailwindSelect from "react-tailwindcss-select";
// import { suggestions } from "@/lib/constants";

// const Sidebar = () => {
//   const [fixedClasses, setFixedClasses] = useState([
//     "text-gray-500",
//     "hover:bg-red-900",
//   ]);
//   const [dynamicClasses, setDynamicClasses] = useState<string[]>([]);
//   const [newClass, setNewClass] = useState<string[]>([]); // Change the state to an array

//   const handleAddClass = () => {
//     if (newClass.length > 0) {
//       setFixedClasses((prevClasses) => [...prevClasses, ...newClass]);
//       setDynamicClasses((prevDynamicClasses) => [
//         ...prevDynamicClasses,
//         ...newClass,
//       ]);
//       setNewClass([]);
//     }
//   };

//   const handleInputChange = (selectedOption) => {
//     if (selectedOption) {
//       setNewClass((prevNewClass) => [...prevNewClass, selectedOption.value]);
//     }
//   };

//   const handleInputKeyDown = (e) => {
//     if (e.key === "Enter") {
//       handleAddClass();
//     }
//   };

//   const selectOptions = suggestions.map((value) => ({ label: value, value }));

//   return (
//     <aside className="flex flex-col justify-between items-center bg-card w-full max-w-[270px] h-screen border border-r">
//       {/* top side */}
//       <div className="xFlex !justify-start gap-4 w-full h-20 border-b py-6 px-8">
//         <h3 className="font-medium text-foreground/90 text-[16px]">Classes</h3>
//       </div>
//       {/* middle tailwind classes portion */}
//       <div className="h-auto w-full py-6 px-8">
//         <TailwindSelect
//           options={selectOptions}
//           isSearchable
//           placeholder={
//             newClass.length > 0
//               ? newClass[newClass.length - 1]
//               : "Add new class"
//           }
//           value={{
//             label: newClass.length > 0 ? newClass[newClass.length - 1] : "",
//             value: newClass,
//           }}
//           onChange={handleInputChange}
//           onKeyDown={handleInputKeyDown}
//           primaryColor={"green"}
//           classNames={{
//             op: "bg-red-500",
//           }}
//         />
//       </div>
//       <div className="h-full w-full pt-2 px-8 yFlex !items-start !justify-start gap-3 flex-col-reverse">
//         {/* Display all dynamic classes in reverse order */}
//         {dynamicClasses
//           .slice(0)
//           .reverse()
//           .map((className, index) => (
//             <div
//               key={`dynamic-${index}`}
//               className="xFlex gap-1 bg-[#021D05]/90 dark:bg-neutral-700 px-3 py-1 rounded-full"
//             >
//               <img src="/tw.png" alt="tw.png" className="w-6 h-6" />
//               <h5 className="text-[12px] font-medium text-primary-foreground dark:text-neutral-300">
//                 {className}
//               </h5>
//             </div>
//           ))}
//         {/* Display the new classes in reverse order */}
//         {newClass
//           .slice(0)
//           .reverse()
//           .map((className, index) => (
//             <div
//               key={`new-${index}`}
//               className="xFlex gap-1 bg-[#021D05]/90 dark:bg-neutral-700 px-3 py-1 rounded-full"
//             >
//               <img src="/tw.png" alt="tw.png" className="w-6 h-6" />
//               <h5 className="text-[12px] font-medium text-primary-foreground dark:text-neutral-300">
//                 {className}
//               </h5>
//             </div>
//           ))}
//         {/* Display all fixed classes */}
//         {fixedClasses.map((className, index) => (
//           <div
//             key={`fixed-${index}`}
//             className="xFlex gap-1 bg-[#021D05]/90 dark:bg-neutral-700 px-3 py-1 rounded-full"
//           >
//             <img src="/tw.png" alt="tw.png" className="w-6 h-6" />
//             <h5 className="text-[12px] font-medium text-primary-foreground dark:text-neutral-300">
//               {className}
//             </h5>
//           </div>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
