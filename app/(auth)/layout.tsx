import { BackgroundBeams } from "@/components/ui/background-beams";
import { Card } from "@/components/ui/card";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="text-white min-h-screen px-4 sm:px-0 flex items-center justify-center">
      <Card className="bg-card w-full sm:w-auto rounded-lg sm:rounded-xl z-10">{children}</Card>
      <BackgroundBeams />
    </main>
  );
}
