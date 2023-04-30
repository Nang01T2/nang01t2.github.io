import { useState } from "react";
import { toast } from "react-hot-toast";

import useWatchTimeout from "@/libs/useWatchTimeout";

import CheckIcon from "../icons/CheckIcon";
import LinkIcon from "../icons/LinkIcon";
import IconButton from "./IconButton";

export default function CopyLinkButton(props) {
  const [copied, setCopied] = useState(false);

  useWatchTimeout(copied, 1500, () => {
    setCopied(false);
  });

  const handleCopy = async () => {
    const url = window.document.location.href;

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast("Copied the link.", { icon: "🔗" });
    } catch (e) {
      console.error(e);
      toast.error("Link copy failed.");
    }
  };

  return (
    <IconButton {...props} aria-label="copy-link" onClick={handleCopy}>
      {copied ? <CheckIcon width={20} /> : <LinkIcon width={20} />}
    </IconButton>
  );
}
