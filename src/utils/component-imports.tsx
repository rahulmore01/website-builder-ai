import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";

export const buttonVariants = [
  <Button>Button</Button>,
  <Button variant="secondary">Button</Button>,
  <Button variant="destructive">Button</Button>,
  <Button variant="outline">Button</Button>,

  <Button variant="ghost">Button</Button>,
  <Button variant="link">Button</Button>,

  <Button variant="outline" size="icon">
    <ChevronRightIcon className="h-4 w-4" />
  </Button>,
  <Button>
    <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
  </Button>,
  <Button disabled>
    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
    Please wait
  </Button>,
  <Button asChild>
    <Link href="/login">Login</Link>
  </Button>,
  <Button asChild>
    <Link href="/login">Login</Link>
  </Button>,
];
export const inputVariants = [
  <Input type="email" placeholder="Email" />,

  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="picture">Picture</Label>
    <Input id="picture" type="file" />
  </div>,
  <Input disabled type="email" placeholder="Email" />,
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" placeholder="Email" />
  </div>,
  <div className="flex w-full max-w-sm items-center space-x-2">
    <Input type="email" placeholder="Email" />
    <Button type="submit">Subscribe</Button>
  </div>,
];
export const avatarVariants = [
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>,
];
export const CalendarWrapper = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};
export const badgeVariants = [<Badge variant="outline">Badge</Badge>];
