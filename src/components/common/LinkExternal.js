import { $ } from "@/libs/core";

export default function LinkExternal({ children, className, ...props }) {
  return (
    <a
      {...props}
      className={$("text-primary transition hover:text-secondary", className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
