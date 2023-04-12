import React from "react";

export default function DefaultLayout({ children, frontMatter }) {
  console.log("frontMatter", frontMatter);
  return <main className="mb-auto">{children}</main>;
}
