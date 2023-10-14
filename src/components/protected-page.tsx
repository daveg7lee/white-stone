"use client";

import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface IProtectedPageProps {
  children: ReactNode;
}

export default function ProtectedPage({ children }: IProtectedPageProps) {
  const user = auth.currentUser;
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  return <>{children}</>;
}
