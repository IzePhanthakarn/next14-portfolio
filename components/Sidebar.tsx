"use client";

import Link from "next/link";
import { IconApps, IconCategory, IconSettings } from "@tabler/icons-react";
import { sidebarMenus } from "@/constants/menus";
import { TreeView } from "./ui/tree-view";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitch";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <section className="flex w-full lg:w-48 xl:w-72 3xl:w-80 h-fit lg:h-screen bg-background flex-col gap-2">
      <Sheet>
        <div className="flex lg:hidden justify-between h-14 3xl:h-20 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-4 font-semibold">
            <IconApps className="xl:h-8 xl:w-8 3xl:h-12 3xl:w-12 text-primary" />
            <p className="text-foreground text-sm xl:text-lg 3xl:text-2xl">
              <span className="text-primary">IZE</span> SERVICE
            </p>
          </Link>
          <SheetTrigger asChild>
            <Button
              className="w-10 h-10 p-0 bg-transparent hover:bg-background-secondary"
              variant="outline"
            >
              <IconCategory />
            </Button>
          </SheetTrigger>
        </div>

        {/* Mobile Sidebar */}
        <SheetContent className="p-0 w-72 flex flex-col">
          <div className="flex h-14 3xl:h-20 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-4 font-semibold">
              <IconApps className="xl:h-8 xl:w-8 3xl:h-12 3xl:w-12 text-primary" />
              <p className="text-foreground text-sm xl:text-lg 3xl:text-2xl">
                <span className="text-primary">IZE</span> SERVICE
              </p>
            </Link>
          </div>
          <div className="flex lg:hidden px-2">
            <Card className="w-full p-2 flex items-center space-x-1.5">
              <Avatar className="cursor-pointer w-8 h-8 3xl:w-10 3xl:h-10">
                <AvatarImage src="/profile-1.jpg" alt="profile" />
                <AvatarFallback>PK</AvatarFallback>
              </Avatar>
              <div className="text-left text-xs flex flex-col space-y-0.5">
                <p>Phanthakarn Khumphai</p>
                <span>izephanthakarn@hotmail.com</span>
              </div>
            </Card>
          </div>
          <div className="flex-1">
            <nav className="grid items-start gap-1 px-1 text-sm font-medium xl:px-3">
              <TreeView data={sidebarMenus} />
            </nav>
          </div>
          <div className="mt-auto">
            <div className="p-2 xl:px-4">
              <SheetClose asChild className="w-full ">
                <Link
                  href="/app/setting"
                  className={cn(
                    "flex p-2 xl:p-3 items-center space-x-2 xl:space-x-4 rounded xl:rounded-lg hover:text-primary",
                    { "bg-background-secondary": pathname === "/app/setting" }
                  )}
                >
                  <IconSettings className="h-5 w-5xl:h-6 xl:w-6" />
                  <span className="text-sm xl:text-base">Setting</span>
                </Link>
              </SheetClose>
            </div>
            <div className="border-t space-y-1 p-2 xl:p-4">
              <div className="flex justify-between px-2 py-1.5 xl:p-3 items-center space-x-2 xl:space-x-4">
                <span className="text-sm xl:text-base">Darkmode</span>
                <ThemeSwitcher />
              </div>
            </div>
            <div className="block sm:hidden w-full p-2 pt-0">
              <Button className="w-full">Sign Out</Button>
            </div>
          </div>
        </SheetContent>

        <div className="hidden lg:flex flex-col justify-between h-full">
          <div className="flex h-14 3xl:h-20 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-4 font-semibold">
              <IconApps className="xl:h-8 xl:w-8 3xl:h-12 3xl:w-12 text-primary" />
              <p className="text-foreground text-sm xl:text-lg 3xl:text-2xl">
                <span className="text-primary">IZE</span> SERVICE
              </p>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start gap-1 px-1 pt-1 text-sm font-medium xl:px-3">
              <TreeView data={sidebarMenus} />
            </nav>
          </div>
          <div className="mt-auto">
            <div className="py-2 px-2 xl:px-4">
              <Link
                href="/app/setting"
                className={cn(
                  "flex px-2 py-1.5 xl:p-2 items-center space-x-2 xl:space-x-4 rounded xl:rounded-lg hover:text-primary",
                  { "bg-background-secondary": pathname === "/app/setting" }
                )}
              >
                <IconSettings className="h-5 w-5 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8" />
                <span className="text-sm xl:text-lg 3xl:text-xl">Setting</span>
              </Link>
            </div>
            <div className="border-t space-y-1 p-2 xl:p-4">
              <div className="flex justify-between px-2 py-1.5 xl:p-1 items-center space-x-2 xl:space-x-4">
                <span className="text-sm xl:text-lg 3xl:text-xl">Darkmode</span>
                <ThemeSwitcher />
              </div>
            </div>
            <div className="block sm:hidden w-full p-2 pt-0">
              <Button className="w-full">Sign Out</Button>
            </div>
          </div>
        </div>
      </Sheet>
    </section>
  );
};

export default Sidebar;
