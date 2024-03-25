"use client";

import { useRouter } from "next/navigation";

export default function Login({}) {
  // redirect("/ocalhost:8000/admin/login");
  const router = useRouter();

  router.push("http://localhost:8000/admin/login");

  return null;
}
