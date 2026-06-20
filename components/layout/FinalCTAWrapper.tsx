"use client";

import { usePathname } from "next/navigation";
import FinalCTA from "./FinalCTA";

export default function FinalCTAWrapper() {
  const pathname = usePathname();

  // Do not show the global CTA form on the contact page or CSR/Ishara page to avoid duplicate forms/inquiries.
  if (pathname === "/contact" || pathname === "/csr-foundation") {
    return null;
  }

  return <FinalCTA />;
}
