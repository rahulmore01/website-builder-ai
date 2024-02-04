"use client";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React from "react";

import {
  buttonVariants,
  inputVariants,
  avatarVariants,
  CalendarWrapper,
  badgeVariants,
} from "@/utils/component-imports";

export function ShadcnCompPreview() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="w-full h-full flex flex-col justify-center items-start gap-2 max-w-[400px]">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Buttons</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-2 py-2 px-8">
              {buttonVariants.map((component, index) => (
                <ListItem key={index}>{component}</ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Inputs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-2 py-2 px-8 w-[400px]">
              {inputVariants.map((component, index) => (
                <ListItem key={index}>{component}</ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Avatar</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-2 py-2 px-8 ">
              {avatarVariants.map((component, index) => (
                <ListItem key={index}>{component}</ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Calendar</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-2 py-2 px-8 ">
              <CalendarWrapper />
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Badge</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-2 py-2 px-8 ">
              {badgeVariants.map((component, index) => (
                <ListItem key={index}>{component}</ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(({ ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
          {...props}
        ></a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// "use client";
// import { cn } from "@/lib/utils";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu";
// import React from "react";
// import { Button } from "./ui/button";
// import { ChevronRightIcon } from "lucide-react";
// import Link from "next/link";
// import { ReloadIcon } from "@radix-ui/react-icons";
// import { EnvelopeOpenIcon } from "@radix-ui/react-icons";

// export function ShadcnCompPreview() {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList className="w-full h-full flex flex-col justify-center items-start gap-2">
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="flex flex-col gap-4 py-6 px-12">
//               <Button>Button</Button>
//               <Button variant="secondary">Button</Button>
//               <Button variant="destructive">Button</Button>
//               <Button variant="outline">Button</Button>
//               <Button variant="ghost">Button</Button>
//               <Button variant="link">Button</Button>
//               <Button variant="outline" size="icon">
//                 <ChevronRightIcon className="h-4 w-4" />
//               </Button>
//               <Button>
//                 <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
//               </Button>
//               <Button disabled>
//                 <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
//                 Please wait
//               </Button>
//               <Button asChild>
//                 <Link href="/login">Login</Link>
//               </Button>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

// "use client";
// import * as React from "react";
// import { cn } from "@/lib/utils";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";

// import {
//   buttonImages,
//   avatarImages,
//   paginationImages,
//   inputImages,
// } from "@/constants/img-paths";

// export function ShadcnImagesPreview() {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList className=" w-full h-full flex flex-col justify-center items-start gap-2">
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>button</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className=" grid w-[400px] gap-3 p-4 md:w-[360px] md:grid-cols-1 lg:w-[360px]">
//               {buttonImages.map((imageSrc) => (
//                 <ListItem key={imageSrc} imageSrc={imageSrc} />
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>

//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Pagination</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[400px] gap-3 p-4 md:w-[360px] md:grid-cols-1 lg:w-[360px]">
//               {paginationImages.map((imageSrc) => (
//                 <ListItem key={imageSrc} imageSrc={imageSrc} />
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>avatar</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[400px] gap-3 p-4 md:w-[360px] md:grid-cols-1 lg:w-[360px]">
//               {avatarImages.map((imageSrc) => (
//                 <ListItem key={imageSrc} imageSrc={imageSrc} />
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Input</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[400px] gap-3 p-4 md:w-[360px] md:grid-cols-1 lg:w-[360px]">
//               {inputImages.map((imageSrc) => (
//                 <ListItem key={imageSrc} imageSrc={imageSrc} />
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// }

// const ListItem = React.forwardRef(({ imageSrc, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//           )}
//           {...props}
//         >
//           {imageSrc && (
//             <div className=" ">
//               <img src={imageSrc} className="rounded-md h-10" />
//             </div>
//           )}
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";
