import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { IconCaretRight } from "@tabler/icons-react";
import { SheetClose } from "./sheet";

function TreeView({ data }: { data: TreeDataItem[] | any }) {
  const router = useRouter();
  const navigateToRoute = (route: string) => {
    router.push(route);
  };

  return (
    <ul role="list" className="space-y-1.5 xl:space-y-1">
      {data instanceof Array ? (
        data.map((item) => (
          <li key={item.id}>
            {item.children ? (
              <AccordionPrimitive.Root type="single" collapsible>
                <AccordionPrimitive.Item value="item-1">
                  <AccordionTrigger>
                    {item.icon}
                    <p className="ml-1 xl:ml-2 text-xs xl:text-base 3xl:text-xl">
                      {item.label}
                    </p>
                  </AccordionTrigger>
                  <AccordionContent className="pl-4">
                    <TreeView
                      data={item.children ? item.children : item.label}
                    />
                  </AccordionContent>
                </AccordionPrimitive.Item>
              </AccordionPrimitive.Root>
            ) : (
              <Leaf
                label={item.label}
                icon={item.icon}
                route={item.route}
                onClick={() => navigateToRoute(item.route)}
              />
            )}
          </li>
        ))
      ) : (
        <li>
          <Leaf
            label={data.label}
            icon={data.icon}
            route={data.route}
            onClick={() => navigateToRoute(data.route)}
          />
        </li>
      )}
    </ul>
  );
}

interface TreeDataItem {
  id: string;
  label: string;
  icon: React.ReactElement;
  route: string;
  children?: TreeDataItem[];
}

export { TreeView, type TreeDataItem };

function Leaf({
  label,
  icon,
  route,
  onClick,
}: {
  label: string;
  icon: React.ReactElement;
  route: string;
  onClick: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === route;
  return (
    <SheetClose className="w-full py-1">
      <div
        onClick={onClick}
        className={cn(
          "flex items-center rounded xl:rounded-lg py-1.5 xl:py-2 transition-all cursor-pointer hover:text-primary",
          { "text-primary bg-background-secondary": isActive }
        )}
      >
        <IconCaretRight className="h-4 w-4 xl:h-6 xl:w-6 shrink-0 opacity-0" />
        {icon}
        <p className="ml-1 xl:ml-2 text-xs xl:text-base 3xl:text-xl">{label}</p>
      </div>
    </SheetClose>
  );
}
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="grid">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex hover:text-primary items-center py-1 xl:py-2 font-medium transition-all first:[&[data-state=open]>svg]:rotate-90",
        className
      )}
      {...props}
    >
      <IconCaretRight className="h-4 w-4 xl:h-6 xl:w-6 shrink-0 transition-transform duration-200" />
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
