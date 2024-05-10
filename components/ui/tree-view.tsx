import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { IconCaretRight } from "@tabler/icons-react";

function TreeView({ data }: { data: TreeDataItem[] | any }) {
  const router = useRouter();
  const navigateToRoute = (route: string) => {
    // ทำการ navigate ไปยัง route ที่กำหนด
    // โดยตัวอย่างนี้ใช้ useRouter จาก next/router
    // คุณอาจต้องเปลี่ยนการ navigate ตาม library หรือ framework ที่ใช้งาน
    router.push(route);
  };

  return (
    <ul role="list" className="space-y-1">
      {data instanceof Array ? (
        data.map((item) => (
          <li key={item.id}>
            {item.children ? (
              <AccordionPrimitive.Root type="single" collapsible>
                <AccordionPrimitive.Item value="item-1">
                  <AccordionTrigger>
                    {item.icon}
                    <p className="ml-2 3xl:text-xl">{item.label}</p>
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
    <div
      onClick={onClick}
      //   href={route}
      className={cn(
        "flex items-center rounded-lg py-2 transition-all hover:text-primary",
        { "text-primary bg-background-secondary": isActive }
      )}
    >
      <IconCaretRight className="h-6 w-6 shrink-0 opacity-0" />
      {icon}
      <p className="ml-2 3xl:text-xl">{label}</p>
    </div>
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
        "flex hover:text-primary items-center py-2 font-medium transition-all first:[&[data-state=open]>svg]:rotate-90",
        className
      )}
      {...props}
    >
      <IconCaretRight className="h-6 w-6 shrink-0 transition-transform duration-200" />
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
