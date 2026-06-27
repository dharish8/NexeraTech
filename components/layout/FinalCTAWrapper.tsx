"use client";

import { usePathname } from "next/navigation";
import FinalCTA from "./FinalCTA";

export default function FinalCTAWrapper() {
  const pathname = usePathname();

  // Do not show the global CTA form on the contact page to avoid duplicate forms/inquiries.
  if (pathname === "/contact") {
    return null;
  }

  return <FinalCTA />;
}
