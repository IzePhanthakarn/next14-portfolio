export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="text-white min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
}
