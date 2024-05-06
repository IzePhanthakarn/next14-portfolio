import { BackgroundBeams } from "@/components/ui/background-beams";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="text-white min-h-screen px-4 sm:px-0 flex items-center justify-center">
      <section className="bg-[#0F172A99] w-full sm:w-auto rounded-lg sm:rounded-xl z-10">{children}</section>
      <BackgroundBeams />
    </main>
  );
}
