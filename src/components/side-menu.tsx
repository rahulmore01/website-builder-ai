"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  buttonImages,
  avatarImages,
  paginationImages,
  inputImages,
} from "@/constants/img-paths";

export function ShadcnImagesPreview() {
  return (
    <NavigationMenu>
      <NavigationMenuList className=" w-full h-full flex flex-col justify-center items-start gap-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger>button</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" grid w-[400px] gap-3 p-4 md:w-[360px] md:grid-cols-1 lg:w-[360px]">
              {buttonImages.map((imageSrc) => (
                <ListItem key={imageSrc} imageSrc={imageSrc} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Pagination</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[360px] md:grid-cols-1 lg:w-[360px]">
              {paginationImages.map((imageSrc) => (
                <ListItem key={imageSrc} imageSrc={imageSrc} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>avatar</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[360px] md:grid-cols-1 lg:w-[360px]">
              {avatarImages.map((imageSrc) => (
                <ListItem key={imageSrc} imageSrc={imageSrc} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Input</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[360px] md:grid-cols-1 lg:w-[360px]">
              {inputImages.map((imageSrc) => (
                <ListItem key={imageSrc} imageSrc={imageSrc} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(({ imageSrc, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
          {...props}
        >
          {imageSrc && (
            <div className=" ">
              <img src={imageSrc} className="rounded-md h-10" />
            </div>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
