import { BackgroundBeams } from "@/components/ui/background-beams";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="text-white min-h-screen flex items-center justify-center">
      <section className="bg-[#0F172A99] rounded-xl z-10">{children}</section>
      <BackgroundBeams />
    </main>
  );
}
