import { $ } from "@/libs/core";

export default function Hr({ className, ...props }) {
  return (
    <hr
      {...props}
      className={$(
        "border-1 w-full border-neutral-300 transition-all dark:border-neutral-700",
        className
      )}
    />
  );
}
