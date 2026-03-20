"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import {
  getStoredThemeMode,
  setThemeMode as saveThemeMode,
  subscribeAppearanceChange,
  type ThemeMode,
} from "@/lib/appearance";

export function ThemeModeSwitcher() {
  const [theme, setTheme] = useState<ThemeMode>("system");

  useEffect(() => {
    setTheme(getStoredThemeMode());

    return subscribeAppearanceChange(() => {
      setTheme(getStoredThemeMode());
    });
  }, []);

  const isActive = (mode: ThemeMode) => theme === mode;

  return (
    <fieldset className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-background px-3 py-2 shadow-sm">
      <legend className="sr-only">Theme mode</legend>

      <button
        type="button"
        onClick={() => {
          setTheme("light");
          saveThemeMode("light");
        }}
        aria-label="Theme: Light"
        aria-pressed={isActive("light")}
        className={`inline-flex h-8 w-8 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
          isActive("light")
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-background text-foreground hover:border-primary"
        }`}
      >
        <Sun className="h-4 w-4" />
      </button>

      <span className="text-xs font-medium text-muted-foreground">Theme</span>

      <button
        type="button"
        onClick={() => {
          setTheme("system");
          saveThemeMode("system");
        }}
        aria-label="Theme: System"
        aria-pressed={isActive("system")}
        className={`inline-flex h-8 w-8 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
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
        className={`inline-flex h-8 w-8 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
          isActive("dark")
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-background text-foreground hover:border-primary"
        }`}
      >
        <Moon className="h-4 w-4" />
      </button>
    </fieldset>
  );
}
