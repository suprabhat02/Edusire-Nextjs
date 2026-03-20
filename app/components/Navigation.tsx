"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AppearanceControls } from "../../components/appearance-controls";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Education", href: "/education" },
  { name: "Office Appliances", href: "/office-appliances" },
  { name: "Ayurvedic Products", href: "/ayurvedic" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-40">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center min-w-0">
            <Image
              src="/logo/Edusires-side-logo.svg"
              alt="Logo"
              width={180}
              height={72}
              className="w-[150px] sm:w-[170px] md:w-[180px] h-auto"
            />
          </Link>

          {/* Right Side: Links + Appearance */}
          <div className="flex items-center justify-end gap-2 min-w-0">
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium border border-transparent transition-colors",
                    isActivePath(item.href)
                      ? "bg-accent text-foreground border-border"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-9 rounded-md border-border/70 px-3"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    Appearance
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-72 rounded-lg border-2 border-border/80 bg-card p-3"
                >
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-foreground">
                      Appearance
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Theme mode and accent color
                    </p>
                  </div>
                  <AppearanceControls />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-base font-medium border transition-colors",
                    isActivePath(item.href)
                      ? "bg-accent text-foreground border-border"
                      : "border-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-3 rounded-lg border border-border/70 bg-card p-3">
                <div className="mb-3">
                  <p className="text-sm font-semibold text-foreground">
                    Appearance
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Theme mode and accent color
                  </p>
                </div>
                <AppearanceControls />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
