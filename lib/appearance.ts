export type AccentMode = "blue" | "green";
export type ThemeMode = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const ACCENT_STORAGE_KEY = "edusires-accent";
export const THEME_STORAGE_KEY = "edusires-theme";
export const APPEARANCE_EVENT = "edusires-appearance-change";

const accentTokens: Record<
  AccentMode,
  Record<ResolvedTheme, Record<string, string>>
> = {
  blue: {
    light: {
      "--background": "210 50% 98%",
      "--card": "210 45% 99%",
      "--muted": "210 42% 95%",
      "--border": "210 28% 88%",
      "--input": "210 28% 90%",
      "--primary": "208 70% 40%",
      "--accent": "208 70% 40%",
      "--ring": "208 70% 40%",
      "--secondary": "208 65% 92%",
      "--secondary-foreground": "208 70% 22%",
      "--color-accent": "var(--color-blue-600)",
      "--color-accent-light": "var(--color-blue-50)",
      "--color-success": "var(--color-blue-600)",
      "--color-info": "var(--color-blue-600)",
    },
    dark: {
      "--background": "216 30% 10%",
      "--card": "216 26% 13%",
      "--muted": "216 20% 19%",
      "--border": "216 20% 22%",
      "--input": "216 20% 17%",
      "--primary": "208 64% 53%",
      "--accent": "208 64% 53%",
      "--ring": "208 64% 53%",
      "--secondary": "208 35% 24%",
      "--secondary-foreground": "208 80% 90%",
      "--color-accent": "var(--color-blue-300)",
      "--color-accent-light": "var(--color-blue-200)",
      "--color-success": "var(--color-blue-300)",
      "--color-info": "var(--color-blue-300)",
    },
  },
  green: {
    light: {
      "--background": "130 28% 98%",
      "--card": "130 24% 99%",
      "--muted": "130 26% 95%",
      "--border": "130 20% 87%",
      "--input": "130 20% 89%",
      "--primary": "130 50% 46%",
      "--accent": "130 50% 46%",
      "--ring": "130 50% 46%",
      "--secondary": "130 45% 90%",
      "--secondary-foreground": "130 60% 22%",
      "--color-accent": "var(--color-green-600)",
      "--color-accent-light": "var(--color-green-50)",
      "--color-success": "var(--color-green-600)",
      "--color-info": "var(--color-green-600)",
    },
    dark: {
      "--background": "140 22% 10%",
      "--card": "140 18% 13%",
      "--muted": "140 16% 19%",
      "--border": "140 14% 22%",
      "--input": "140 14% 17%",
      "--primary": "130 45% 53%",
      "--accent": "130 45% 53%",
      "--ring": "130 45% 53%",
      "--secondary": "130 30% 24%",
      "--secondary-foreground": "130 65% 90%",
      "--color-accent": "var(--color-green-500)",
      "--color-accent-light": "var(--color-green-200)",
      "--color-success": "var(--color-green-500)",
      "--color-info": "var(--color-green-500)",
    },
  },
};

export function getStoredAccent(): AccentMode {
  if (globalThis.window === undefined) return "blue";
  return globalThis.localStorage.getItem(ACCENT_STORAGE_KEY) === "green"
    ? "green"
    : "blue";
}

export function getStoredThemeMode(): ThemeMode {
  if (globalThis.window === undefined) return "system";
  const value = globalThis.localStorage.getItem(THEME_STORAGE_KEY);
  return value === "light" || value === "dark" || value === "system"
    ? value
    : "system";
}

export function resolveThemeMode(themeMode: ThemeMode): ResolvedTheme {
  if (themeMode === "system") {
    if (
      globalThis.window !== undefined &&
      globalThis.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  }
  return themeMode;
}

export function applyAppearance(
  themeMode = getStoredThemeMode(),
  accent = getStoredAccent(),
) {
  if (typeof document === "undefined") {
    return { themeMode, accent, resolvedTheme: "light" as ResolvedTheme };
  }

  const resolvedTheme = resolveThemeMode(themeMode);
  const isDark = resolvedTheme === "dark";
  const root = document.documentElement;

  root.dataset.accent = accent;
  root.dataset.themeMode = themeMode;

  root.classList.toggle("dark", isDark);

  const tokens = accentTokens[accent][resolvedTheme];
  Object.entries(tokens).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });

  return { themeMode, accent, resolvedTheme };
}

export function setAccent(accent: AccentMode) {
  if (globalThis.window === undefined) return;
  globalThis.localStorage.setItem(ACCENT_STORAGE_KEY, accent);
  const state = applyAppearance(getStoredThemeMode(), accent);
  globalThis.dispatchEvent(
    new CustomEvent(APPEARANCE_EVENT, { detail: state }),
  );
}

export function setThemeMode(themeMode: ThemeMode) {
  if (globalThis.window === undefined) return;
  globalThis.localStorage.setItem(THEME_STORAGE_KEY, themeMode);
  const state = applyAppearance(themeMode, getStoredAccent());
  globalThis.dispatchEvent(
    new CustomEvent(APPEARANCE_EVENT, { detail: state }),
  );
}

export function subscribeAppearanceChange(callback: () => void) {
  if (globalThis.window === undefined) return () => {};

  const handleChange = () => callback();
  const media = globalThis.matchMedia("(prefers-color-scheme: dark)");
  const handleSystemChange = () => {
    if (getStoredThemeMode() === "system") {
      const state = applyAppearance();
      globalThis.dispatchEvent(
        new CustomEvent(APPEARANCE_EVENT, { detail: state }),
      );
    }
  };

  globalThis.addEventListener(APPEARANCE_EVENT, handleChange);
  media.addEventListener("change", handleSystemChange);

  return () => {
    globalThis.removeEventListener(APPEARANCE_EVENT, handleChange);
    media.removeEventListener("change", handleSystemChange);
  };
}
