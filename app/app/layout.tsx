import Sidebar from "@/components/Sidebar";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-background-secondary">
      <Sidebar />
      <ThemeSwitch />
      <main>{children}</main>
    </div>
  )
}
