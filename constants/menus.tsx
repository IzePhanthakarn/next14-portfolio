import { TreeDataItem } from "@/components/ui/tree-view";
import {
  IconCalendarMonth,
  IconFileInvoice,
  IconGraph,
  IconHome,
  IconReportMoney,
} from "@tabler/icons-react";

export const sidebarMenus: TreeDataItem[] = [
  {
    id: "1",
    label: "Dashboard",
    icon: <IconHome className="h-8 w-8 3xl:h-10 3xl:w-10" />,
    route: "/app/dashboard",
  },
  {
    id: "2",
    label: "Finance",
    icon: <IconReportMoney className="h-8 w-8 3xl:h-10 3xl:w-10" />,
    route: "",
    children: [
      {
        id: "f1",
        label: "Overview",
        icon: <IconGraph className="h-6 w-6 3xl:h-8 3xl:w-8" />,
        route: "/app/finance",
      },
      {
        id: "f2",
        label: "Statement",
        icon: <IconFileInvoice className="h-6 w-6 3xl:h-8 3xl:w-8" />,
        route: "/app/finance/statement",
      },
      {
        id: "f3",
        label: "Subscription",
        icon: <IconCalendarMonth className="h-6 w-6 3xl:h-8 3xl:w-8" />,
        route: "/app/finance/subscription",
      },
    ],
  },
];
