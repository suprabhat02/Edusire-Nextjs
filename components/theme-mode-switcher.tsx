"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import {
  getStoredThemeMode,
  setThemeMode as saveThemeMode,
  subscribeAppearanceChange,
  type ThemeMode,
} from "@/lib/appearance";
import { cn } from "@/lib/utils";

type ThemeModeSwitcherProps = {
  className?: string;
};

export function ThemeModeSwitcher({
  className,
}: Readonly<ThemeModeSwitcherProps>) {
  const [theme, setTheme] = useState<ThemeMode>("system");

  useEffect(() => {
    setTheme(getStoredThemeMode());

    return subscribeAppearanceChange(() => {
      setTheme(getStoredThemeMode());
    });
  }, []);

  const isActive = (mode: ThemeMode) => theme === mode;

  return (
    <fieldset
      className={cn(
        "inline-flex w-full items-center justify-between gap-3 rounded-md border border-border bg-background px-3 py-2",
        className,
      )}
    >
      <legend className="sr-only">Theme mode</legend>

      <span className="text-xs font-medium text-muted-foreground">Theme</span>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => {
            setTheme("light");
            saveThemeMode("light");
          }}
          aria-label="Theme: Light"
          aria-pressed={isActive("light")}
          className={`inline-flex h-8 w-8 items-center justify-center rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
            isActive("light")
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background text-foreground hover:border-primary"
          }`}
        >
          <Sun className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => {
            setTheme("system");
            saveThemeMode("system");
          }}
          aria-label="Theme: System"
          aria-pressed={isActive("system")}
          className={`inline-flex h-8 w-8 items-center justify-center rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
            isActive("system")
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background text-foreground hover:border-primary"
          }`}
        >
          <Monitor className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => {
            setTheme("dark");
            saveThemeMode("dark");
          }}
          aria-label="Theme: Dark"
          aria-pressed={isActive("dark")}
          className={`inline-flex h-8 w-8 items-center justify-center rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
            isActive("dark")
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background text-foreground hover:border-primary"
          }`}
        >
          <Moon className="h-4 w-4" />
        </button>
      </div>
    </fieldset>
  );
}
