"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, BookOpen, Briefcase, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  getStoredThemeMode,
  resolveThemeMode,
  setThemeMode as saveThemeMode,
  subscribeAppearanceChange,
  type ThemeMode,
} from "@/lib/appearance";

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
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");
  const pathname = usePathname();

  useEffect(() => {
    setThemeMode(getStoredThemeMode());

    return subscribeAppearanceChange(() => {
      setThemeMode(getStoredThemeMode());
    });
  }, []);

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

          {/* Right Side: Links + Theme Toggle */}
          <div className="flex items-center justify-end gap-2 min-w-0">
            <div className="hidden lg:flex items-center space-x-1">
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
                  {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                  {item.name}
                </Link>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                const nextMode =
                  resolveThemeMode(themeMode) === "dark" ? "light" : "dark";
                setThemeMode(nextMode);
                saveThemeMode(nextMode);
              }}
              className="shrink-0"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

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
                  {item.icon && <item.icon className="w-4 h-4 mr-2" />}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
