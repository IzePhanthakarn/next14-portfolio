"use client";

import Link from "next/link";
import { IconApps, IconSettings } from "@tabler/icons-react";
import { sidebarMenus } from "@/constants/menus";
import { TreeView } from "./ui/tree-view";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitch";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="hidden lg:flex w-48 xl:w-72 3xl:w-80 h-screen bg-background flex-col gap-2">
      <div className="flex h-14 3xl:h-20 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-4 font-semibold">
          <IconApps className="xl:h-8 xl:w-8 3xl:h-12 3xl:w-12 text-primary" />
          <p className="text-foreground text-sm xl:text-lg 3xl:text-2xl">
            <span className="text-primary">IZE</span> SERVICE
          </p>
        </Link>
      </div>
      <div className="flex-1">
        <nav className="grid items-start gap-1 px-1 text-sm font-medium xl:px-3">
          <TreeView data={sidebarMenus} />
        </nav>
      </div>
      <div className="mt-auto">
        <div className="py-2 px-2 xl:px-4">
          <Link
            href="/app/setting"
            className={cn(
              "flex px-2 py-1.5 xl:p-3 items-center space-x-2 xl:space-x-4 rounded xl:rounded-lg hover:text-primary",
              { "bg-background-secondary": pathname === "/app/setting" }
            )}
          >
            <IconSettings className="h-5 w-5xl:h-6 xl:w-6" />
            <span className="text-sm xl:text-base">Setting</span>
          </Link>
        </div>
        <div className="border-t space-y-1 p-2 xl:p-4">
          <div className="flex justify-between px-2 py-1.5 xl:p-3 items-center space-x-2 xl:space-x-4">
            <span className="text-sm xl:text-base">Darkmode</span>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
