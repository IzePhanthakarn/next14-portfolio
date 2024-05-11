"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "./ui/breadcrumb";
import { Input } from "./ui/input";
import {
  IconApps,
  IconBell,
  IconCategory,
  IconChevronRight,
  IconNotification,
  IconReport,
  IconSearch,
  IconSettings,
  IconUserSquare,
} from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";

const AppHeader = () => {
  const pathname = usePathname();
  const pathArr = pathname.slice(1).split("/");
  const currentPath = pathArr.pop();
  return (
    <header className="flex h-14 3xl:h-20 items-center justify-between px-4 lg:h-[60px] 2xl:px-6">
      <Breadcrumb className="hidden xl:block">
        <BreadcrumbList className="3xl:text-lg">
          {pathArr.map((path) => (
            <div
              className={cn("flex items-center capitalize", {
                "pointer-events-none": path === "app",
              })}
              key={path}
            >
              <BreadcrumbItem>
                <Link
                  className="transition-colors capitalize hover:text-foreground hover:underline underline-offset-2"
                  href={path === "app" ? "" : `/app/${path}`}
                >
                  {path}
                </Link>
              </BreadcrumbItem>
              <IconChevronRight className="ml-2 mt-0.5 3xl:mt-1 w-5 h-5 3xl:w-6 3xl:h-6" />
            </div>
          ))}

          <BreadcrumbItem>
            <BreadcrumbPage className="capitalize">
              {currentPath}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Link
        href="/app/dashboard"
        className="flex lg:hidden items-center gap-4 font-semibold"
      >
        <p className="text-foreground text-sm xl:text-lg 3xl:text-2xl">
          <span className="text-primary">IZE</span> SERVICE
        </p>
      </Link>
      <div className="relative hidden lg:flex">
        <IconSearch className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search..."
          className="w-96 2xl:w-[600px] h-auto rounded-lg bg-background pl-8"
        />
      </div>
      <div className="hidden lg:flex items-center space-x-1 3xl:space-x-2">
        <Button
          variant="outline"
          className="rounded-xl aspect-square p-0 bg-transparent hover:bg-background"
        >
          <IconBell className="w-6 h-6" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="p-2 3xl:p-3 h-12 3xl:h-14 flex space-x-2 hover:bg-background"
            >
              <Avatar className="cursor-pointer w-8 h-8 3xl:w-10 3xl:h-10">
                <AvatarImage src="/profile-1.jpg" alt="profile" />
                <AvatarFallback>PK</AvatarFallback>
              </Avatar>
              <div className="text-left hidden xl:block">
                <p>Phanthakarn Khumphai</p>
                <span>izephanthakarn@hotmail.com</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem className="space-x-2 cursor-pointer hover:bg-background-secondary">
              <IconUserSquare />
              <span>Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="space-x-2 cursor-pointer hover:bg-background-secondary">
              <IconSettings />
              <span>Setting</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="space-x-2 cursor-pointer hover:bg-background-secondary">
              <IconReport />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <div className="p-0.5">
              <Button className="w-full h-8">Sign Out</Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex lg:hidden ">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="w-10 h-10 p-0 bg-transparent hover:bg-background-secondary"
              variant="outline"
            >
              <IconCategory />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0 w-72">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default AppHeader;
