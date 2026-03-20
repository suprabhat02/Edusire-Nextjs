"use client";

import { useEffect, useState } from "react";
import {
  getStoredAccent,
  setAccent as saveAccent,
  subscribeAppearanceChange,
} from "@/lib/appearance";

export function AccentSwitcher() {
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
    <fieldset className="accent-switch inline-flex items-center gap-3 rounded-full border-2 border-border bg-background px-4 py-2 shadow-sm">
      <legend className="sr-only">Accent palette</legend>

      <button
        className="accent-switch__btn inline-flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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

      <span className="accent-switch__label text-xs font-medium text-muted-foreground">
        Accent
      </span>

      <button
        className="accent-switch__btn inline-flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
    </fieldset>
  );
}
