"use client";

import { useEffect, useState } from "react";
import {
  getStoredAccent,
  setAccent as saveAccent,
  subscribeAppearanceChange,
} from "@/lib/appearance";
import { cn } from "@/lib/utils";

type AccentSwitcherProps = {
  className?: string;
};

export function AccentSwitcher({ className }: Readonly<AccentSwitcherProps>) {
  const [accent, setAccent] = useState<"blue" | "green">("blue");

  useEffect(() => {
    setAccent(getStoredAccent());

    return subscribeAppearanceChange(() => {
      setAccent(getStoredAccent());
    });
  }, []);

  const handleAccentChange = (newAccent: "blue" | "green") => {
    setAccent(newAccent);
    saveAccent(newAccent);
  };

  return (
    <fieldset
      className={cn(
        "accent-switch inline-flex w-full items-center justify-between gap-3 rounded-md border border-border bg-background px-3 py-2",
        className,
      )}
    >
      <legend className="sr-only">Accent palette</legend>

      <span className="accent-switch__label text-xs font-medium text-muted-foreground">
        Accent
      </span>

      <div className="flex items-center gap-1.5">
        <button
          className="accent-switch__btn inline-flex h-8 w-8 items-center justify-center rounded-md border border-border transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          type="button"
          data-accent-option="blue"
          aria-label="Accent: Blue"
          aria-pressed={accent === "blue"}
          onClick={() => handleAccentChange("blue")}
        >
          <span
            className={`accent-swatch accent-swatch--blue h-4 w-4 rounded-full ${accent === "blue" ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`}
            aria-hidden="true"
            style={{ backgroundColor: "#1F64AD" }}
          ></span>
        </button>

        <button
          className="accent-switch__btn inline-flex h-8 w-8 items-center justify-center rounded-md border border-border transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          type="button"
          data-accent-option="green"
          aria-label="Accent: Green"
          aria-pressed={accent === "green"}
          onClick={() => handleAccentChange("green")}
        >
          <span
            className={`accent-swatch accent-swatch--green h-4 w-4 rounded-full ${accent === "green" ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`}
            aria-hidden="true"
            style={{ backgroundColor: "#3AAF61" }}
          ></span>
        </button>
      </div>
    </fieldset>
  );
}
