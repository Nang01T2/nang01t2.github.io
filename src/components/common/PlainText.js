import { $ } from "@/libs/core";

export default function PlainText({ children, className }) {
  return <p className={$("text-tertiary mb-4", className)}>{children}</p>;
}
