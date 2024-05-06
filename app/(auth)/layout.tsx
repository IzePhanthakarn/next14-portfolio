export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-slate-900 text-white min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
}
