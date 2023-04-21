import { $ } from "@/libs/core";

export default function IconText({ Icon, iconSize = 14, text, className }) {
  return (
    <div className={$("flex items-center", className ?? "gap-1 text-xs")}>
      <Icon width={iconSize} height={iconSize} />
      <span>{text}</span>
    </div>
  );
}
