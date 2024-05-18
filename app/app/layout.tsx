"use client";

import AppHeader from "@/components/AppHeader";
import Loading from "@/components/Loading";
import Sidebar from "@/components/Sidebar";
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
      if (_.isEmpty(sessionUser)) {
        router.push("/signin");
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

  if (_.isEmpty(user)) {
    return null;
  }
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
