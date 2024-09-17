import Link from "next/link";

import { Package2 } from "lucide-react";

import { ModeToggle } from "@/components/app-navbar/mode-toggle";

import AuthButton from "./auth-button";

export default function AppNavbar() {
  return (
    <nav className="flex items-center justify-between py-4">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Package2 className="h-6 w-6" />
        <span className="">Next Starter</span>
      </Link>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <AuthButton />
      </div>
    </nav>
  );
}
