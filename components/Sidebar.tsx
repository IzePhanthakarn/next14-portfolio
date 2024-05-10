"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconApps } from "@tabler/icons-react";
import { sidebarMenus } from "@/constants/menus";
import { TreeView } from "./ui/tree-view";

const Sidebar = () => {
  return (
    <div className="flex w-72 3xl:w-96 h-screen bg-background flex-col gap-2">
      <div className="flex h-14 3xl:h-20 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-4 font-semibold">
          <IconApps className="h-8 w-8 3xl:h-12 3xl:w-12 text-primary" />
          <p className="text-foreground text-lg 3xl:text-2xl">
            <span className="text-primary">IZE</span> SERVICE
          </p>
        </Link>
      </div>
      <div className="flex-1">
        <nav className="grid items-start gap-1 px-2 text-sm font-medium lg:px-3">
          <TreeView data={sidebarMenus} />
        </nav>
      </div>
      <div className="mt-auto p-4">
        <Button size="sm" className="w-full">
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
