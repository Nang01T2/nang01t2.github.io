import getAllFilesRecursively from "./utils/files";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";

import remarkMath from "remark-math";
import remarkFrontmatter from "remark-frontmatter";
import remarkExtractFrontmatter from "@/libs/remark-extract-frontmatter";
import remarkGfm from "remark-gfm";
import remarkTocHeadings from "@/libs/remark-toc-headings";
import remarkImgToJsx from "@/libs/remark-img-to-jsx";

import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypePresetMinify from "rehype-preset-minify";

const rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  keepBackground: true,
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};

const root = process.cwd();

// current 'posts' directory
const dataFolder = "posts";
const postsDirectory = path.join(root, dataFolder);
const mdx_file_extention = ".mdx";

function getAllFilesInDirectory() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return path.parse(fileName);
  });
}

function getMdxFiles() {
  const allFiles = getAllFilesInDirectory();
  return allFiles.filter((parsedFile) => parsedFile.ext == mdx_file_extention);
}

export function getAllPostsPath() {
  const allMdxFiles = getMdxFiles();
  return allMdxFiles.map((parsedFile) => {
    return {
      params: {
        id: parsedFile.name,
      },
    };
  });
}

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, "");
}

export function getFiles(type) {
  const prefixPaths = path.join(root, dataFolder, type);
  const files = getAllFilesRecursively(prefixPaths);
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, "/")
  );
}

export function dateSortDesc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

export function getAllPostsMetadata(pageIndex) {
  return [];
  const allMdxFiles = getFiles("blog");

  const allPostsData = allMdxFiles.map((parsedFile) => {
    const fullPath = path.join(postsDirectory, "blog", parsedFile);

    // get MDX metadata and content
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // get metadata, content
    const { data, content } = matter(fileContents);
    let metadata = data;
    metadata["id"] = parsedFile;
    return { metadata, content };
  });

  return allPostsData;
  // const sortedData = allPostsData.sort((a, b) => {
  //   if (new Date(a.metadata.date) < new Date(b.metadata.date)) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });

  // return sortedData;
  //return filterPostsByPageIndex(sortedData, pageIndex);

  /*
	const postsMetadata = metadata.map((metadata, index) => {
		let path = postPaths[index]?.importedPath;
		let path_list = path.split('/');
		path = path_list[path_list.length - 1].replace(/\.mdx$/, '');
		//console.log(path);
		metadata['id'] = path;
		return { metadata } 
	});
	return postsMetadata.sort((a, b) => {
		if (new Date(a.metadata.date) < new Date(b.metadata.date)) {
			return 1;
		}
		else {
			return -1;
		}
	})
*/
}

export const filterPostsByPageIndex = (posts, pageIndex) => {
  const postPerPage = 5;
  // get the total posts from page 1 to current page
  const totalPagePosts = +pageIndex * postPerPage;

  // get the total posts from page 1 to previous page
  const prevPagePosts = totalPagePosts - postPerPage;

  return posts.filter(
    (post, index) => index < totalPagePosts && index >= prevPagePosts
  );
};

export function getPostMetadata(id) {
  const postMetadata = metadata.filter((metadata, index) => {
    let path = postPaths[index]?.importedPath;
    let path_list = path.split("/");
    path = path_list[path_list.length - 1].replace(/\.mdx$/, "");
    //console.log(path, id);
    if (path == id) return { metadata };
  });
  return postMetadata;
}

export async function getFileBySlug(type, id) {
  const mdxPath = path.join(postsDirectory, type, `${id}.mdx`);
  const mdPath = path.join(postsDirectory, type, `${id}.md`);

  const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  //console.log('fullPath', fullPath);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  let toc = [];
  const mdxSource = await serialize(fileContents, {
    mdxOptions: {
      remarkPlugins: [
        remarkFrontmatter,
        remarkExtractFrontmatter,
        remarkMath,
        remarkGfm,
        [remarkTocHeadings, { exportRef: toc }],
        remarkImgToJsx,
      ],
      rehypePlugins: [
        rehypeKatex,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["anchor"],
              ariaLabel: "anchor",
            },
          },
        ],
        [rehypePrettyCode, rehypePrettyCodeOptions],
        rehypePresetMinify,
      ],
    },
    // Indicates whether or not to parse the frontmatter from the mdx source
    parseFrontmatter: true,
  });
  const { frontmatter } = mdxSource;
  const fileName = fs.existsSync(mdxPath) ? `${id}.mdx` : `${id}.md`;
  return {
    toc,
    content: mdxSource,
    metadata: {
      ...frontmatter,
      fileName,
      readingTime: readingTime(fileContents),
      slug: [type, id].join("/") || null,
      date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      category: fileName?.split("/")?.at(0) ?? null,
    },
  };
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, id + mdx_file_extention);
  // get MDX metadata and content
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // get metadata, content
  const { data, content } = matter(fileContents);

  let metadata = data;
  metadata["id"] = id;

  return { metadata: metadata, content: content };

  /*
	const full_path = path.join(postsDirectory, `${id}.mdx`);
	const MDXContent = dynamic(() => import(full_path));
	const mdx = <MDXContent />
	return {
		id,
		mdx,
	}
*/
}

export async function getAllFilesFrontMatter(folder) {
  const prefixPaths = path.join(root, dataFolder, folder);

  const files = getAllFilesRecursively(prefixPaths);

  const allFrontMatter = [];

  files.forEach((file) => {
    //console.log('File', file);
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, "/");
    // Remove Unexpected File
    if (path.extname(fileName) !== ".md" && path.extname(fileName) !== ".mdx") {
      return;
    }
    const source = fs.readFileSync(file, "utf8");
    const { data: frontmatter } = matter(source);
    if (frontmatter.draft !== true) {
      //console.log('frontmatter', frontmatter);
      allFrontMatter.push({
        ...frontmatter,
        slug: formatSlug(fileName),
        // date: frontmatter.date
        //   ? new Date(frontmatter.date).toISOString()
        //   : null,
      });
    }
  });

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}
