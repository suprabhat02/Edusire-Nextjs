import { cn } from "@/lib/utils";
import { AccentSwitcher } from "@/components/accent-switcher";
import { ThemeModeSwitcher } from "@/components/theme-mode-switcher";

type AppearanceControlsProps = {
  className?: string;
};

export function AppearanceControls({
  className,
}: Readonly<AppearanceControlsProps>) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <ThemeModeSwitcher />
      <AccentSwitcher />
    </div>
  );
}
