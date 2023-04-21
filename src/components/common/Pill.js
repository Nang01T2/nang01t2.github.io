import { $ } from "@/libs/core";

export default function Pill({ className, selected, ...props }) {
  return (
    <div
      {...props}
      className={$(
        "rounded-lg px-2 py-0.5 transition-colors",
        "bg-secondary hover:text-primary hover:bg-tertiary",
        selected
          ? "text-primary font-semibold ring-2 ring-neutral-350"
          : "text-secondary font-normal",
        className
      )}
    />
  );
}
