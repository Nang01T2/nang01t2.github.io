import { Post as TPost } from "contentlayer/generated";
import type { Author } from "contentlayer/generated";

export type Optional<Type, Key extends keyof Type> = Omit<Type, Key> &
  Partial<Pick<Type, Key>>;

/**
 * (posts + snippets)
 */
export type Post = TPost & {
  seriesName?: string | null;
  snippetName?: string | null;
};
export type ReducedPost = Omit<Omit<Omit<Post, "body">, "_raw">, "_id">;

export type Series = Post & {
  posts: ReducedPost[];
};

export type TableOfContents = Section[];
export type SubSection = {
  slug: string;
  text: string;
};
export type Section = SubSection & {
  subSections: SubSection[];
};

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export type Toc = {
  value: string;
  url: string;
  depth: number;
}[];

export type AuthorFrontMatter = Author;