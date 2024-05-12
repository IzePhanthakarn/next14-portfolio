import AppHeader from "@/components/AppHeader";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col lg:flex-row bg-background-secondary">
      <Sidebar />
      <div className="h-screen w-full lg:w-[calc(100vw-192px)] xl:w-[calc(100vw-288px)] 3xl:w-[calc(100vw-320px)] column-1">
        <AppHeader />
        <main>{children}</main>
      </div>
    </div>
  );
}
