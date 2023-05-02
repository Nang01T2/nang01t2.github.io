import React from "react";
import { Series } from "@/libs/types";
import Link from "next/link";

export default function CollectionItem({ item }: { item: Series }) {
  return (
    <Link as={item.slug} href={`/blog/[slug]`}>
      <div className="relative h-56 w-40 select-none rounded-lg bg-neutral-200 px-8 pt-8 pb-12 shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl dark:bg-neutral-800">
        <div className="absolute inset-y-0 left-2.5 w-[1px] bg-neutral-100 dark:bg-neutral-700" />
        <div className="flex h-full break-keep bg-white px-2 py-3 text-sm font-medium dark:bg-neutral-700 dark:text-white">
          {item.title}
        </div>
      </div>
    </Link>
  );
}
