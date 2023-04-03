import { getAllPostsMetadata } from "@/lib/get-posts-data";

export default function handler(req, res) {
  const { page } = req.query;

  const posts = getAllPostsMetadata(page);
  res.status(200).json(posts);
}
