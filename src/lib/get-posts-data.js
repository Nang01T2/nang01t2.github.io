//import dynamic from 'next/dynamic';
//import {metadata, _importMeta as postPaths} from '../posts/*'

import getAllFilesRecursively from './utils/files';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
//import readingTime from 'reading-time';

import remarkMath from 'remark-math';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkTocHeadings from '@/lib/remark-toc-headings';

import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

const rehypePrettyCodeOptions = {
  theme: 'one-dark-pro',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  },
};

// current 'posts' directory
const postsDirectory = path.join(process.cwd(), 'posts');
const mdx_file_extention = '.mdx';

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
  return slug.replace(/\.(mdx|md)/, '');
}

export function getFiles(type) {
  const prefixPaths = path.join(postsDirectory, type);
  const files = getAllFilesRecursively(prefixPaths);
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
  );
}

export function getAllPostsMetadata(pageIndex) {
  const allMdxFiles = getMdxFiles();

  const allPostsData = allMdxFiles.map((parsedFile) => {
    const fullPath = path.join(postsDirectory, parsedFile.base);

    // get MDX metadata and content
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // get metadata, content
    const { data, content } = matter(fileContents);
    let metadata = data;
    metadata['id'] = parsedFile.name;
    return { metadata, content };
  });

  const sortedData = allPostsData.sort((a, b) => {
    if (new Date(a.metadata.date) < new Date(b.metadata.date)) {
      return 1;
    } else {
      return -1;
    }
  });

  return sortedData;
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
    let path_list = path.split('/');
    path = path_list[path_list.length - 1].replace(/\.mdx$/, '');
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

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  let toc = [];
  const mdxSource = await serialize(fileContents, {
    mdxOptions: {
      remarkPlugins: [
        //remarkFrontmatter,
        remarkMath,
        remarkGfm,
        //[remarkTocHeadings, { exportRef: toc }],
      ],
      rehypePlugins: [
        rehypeKatex,
        // rehypeSlug,
        // [
        //   rehypeAutolinkHeadings,
        //   {
        //     properties: {
        //       className: [
        //         "anchor no-underline flex items-center before:-translate-x-[8px] before:-ml-[20px] before:bg-no-repeat before:bg-contain before:w-[20px] before:h-[20px] before:content-[''] hover:before:bg-[url('/link.svg')]",
        //       ],
        //     },
        //     behaviour: "wrap",
        //   },
        // ],
        [rehypePrettyCode, rehypePrettyCodeOptions],
      ],
    },
    // Indicates whether or not to parse the frontmatter from the mdx source
    parseFrontmatter: true,
  });
  const { frontmatter } = mdxSource;

  return {
    toc,
    content: mdxSource,
    metadata: {
      ...frontmatter,
      //readingTime: readingTime(fileContents),
      slug: id || null,
      fileName: fs.existsSync(mdxPath) ? `${id}.mdx` : `${id}.md`,
      ///date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
    },
  };
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, id + mdx_file_extention);
  // get MDX metadata and content
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  // get metadata, content
  const { data, content } = matter(fileContents);

  let metadata = data;
  metadata['id'] = id;

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
