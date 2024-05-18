"use client";

import Loading from "@/components/Loading";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Card } from "@/components/ui/card";
import { getSession } from "@/lib/session";
import { AppDispatch } from "@/store/store";
import _ from "lodash";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function checkSession() {
      const sessionUser = await dispatch(getSession());
      if (!_.isEmpty(sessionUser)) {
        router.push("/app/dashboard");
      } else {
        setUser(sessionUser);
      }
      setLoading(false);
    }
    checkSession();
  }, [router, dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (!_.isEmpty(user)) {
    return null;
  }

  return (
    <main className="text-white min-h-screen px-4 sm:px-0 flex items-center justify-center">
      <Card className="bg-card w-full sm:w-auto rounded-lg sm:rounded-xl z-10">
        {children}
      </Card>
      <BackgroundBeams />
    </main>
  );
}
