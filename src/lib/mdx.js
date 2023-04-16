import { bundleMDX } from 'mdx-bundler';
///import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

import getAllFilesRecursively from './utils/files';
import readingTime from 'reading-time';

import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

const rehypePrettyCodeOptions = {
  theme: 'one-dark-pro',
  keepBackground: false,
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

const root = process.cwd();
const folderData = 'data';

export function getFiles(type) {
  const prefixPaths = path.join(root, folderData, type);
  const files = getAllFilesRecursively(prefixPaths);
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
  );
}

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '');
}

export function dateSortDesc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

export async function getFileBySlug(type, slug) {
  const mdxPath = path.join(root, folderData, type, `${slug}.mdx`);
  const mdPath = path.join(root, folderData, type, `${slug}.md`);
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8');

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      root,
      'node_modules',
      'esbuild',
      'esbuild.exe'
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      root,
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    );
  }

  let toc = [];

  const { code, frontmatter } = await bundleMDX({
    source,
    // mdx imports can be automatically source from the components directory
    cwd: path.join(root, 'src', 'components'),
    xdmOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkFrontmatter,
        remarkGfm,
        remarkMath,
        // remarkExtractFrontmatter,
        // [remarkTocHeadings, { exportRef: toc }],
        // remarkGfm,
        // remarkCodeTitles,
        // [remarkFootnotes, { inlineNotes: true }],
        // remarkMath,
        // remarkImgToJsx,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeKatex,
        [rehypePrettyCode, rehypePrettyCodeOptions],
        // rehypeSlug,
        // rehypeAutolinkHeadings,
        // rehypeKatex,
        // [rehypeCitation, { path: path.join(root, folderData) }],
        // [rehypePrismPlus, { ignoreMissing: true }],
        // rehypePresetMinify,
      ];
      return options;
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      };
      return options;
    },
  });

  return {
    mdxSource: code,
    toc,
    frontMatter: {
      readingTime: readingTime(code),
      slug: slug || null,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...frontmatter,
      date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
    },
  };
}

export async function getAllFilesFrontMatter(folder) {
  const prefixPaths = path.join(root, folderData, folder);

  const files = getAllFilesRecursively(prefixPaths);

  const allFrontMatter = [];

  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/');
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return;
    }
    const source = fs.readFileSync(file, 'utf8');
    const { data: frontmatter } = matter(source);
    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        slug: formatSlug(fileName),
        date: frontmatter.date
          ? new Date(frontmatter.date).toISOString()
          : null,
      });
    }
  });

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}

export async function getFileBySlug2(type, slug) {
  return {};
  // const mdxPath = path.join(root, folderData, type, `${slug}.mdx`);
  // const mdPath = path.join(root, folderData, type, `${slug}.md`);
  // // get MDX metadata and content
  // const fileContents = fs.existsSync(mdxPath)
  //   ? fs.readFileSync(mdxPath, 'utf8')
  //   : fs.readFileSync(mdPath, 'utf8');

  // // get metadata, content
  // const { data, content } = matter(fileContents);
  // console.log('frontMatter:', data);
  // const mdxSource = await serialize(content, {
  //   mdxOptions: {
  //     remarkPlugins: [remarkFrontmatter, remarkMath, remarkGfm],
  //     rehypePlugins: [
  //       rehypeKatex,
  //       // rehypeSlug,
  //       // [
  //       //   rehypeAutolinkHeadings,
  //       //   {
  //       //     properties: {
  //       //       className: [
  //       //         "anchor no-underline flex items-center before:-translate-x-[8px] before:-ml-[20px] before:bg-no-repeat before:bg-contain before:w-[20px] before:h-[20px] before:content-[''] hover:before:bg-[url('/link.svg')]",
  //       //       ],
  //       //     },
  //       //     behaviour: "wrap",
  //       //   },
  //       // ],
  //       [rehypePrettyCode, rehypePrettyCodeOptions],
  //     ],
  //   },
  // });
  // let toc = [];
  // return {
  //   mdxSource,
  //   toc,
  //   frontMatter: {
  //     readingTime: readingTime(mdxSource),
  //     slug: slug || null,
  //     fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
  //     ...data,
  //     date: data.date ? new Date(data.date).toISOString() : null,
  //   },
  // };
}
