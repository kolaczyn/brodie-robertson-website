import fs from 'fs';
import path from 'path';
import util from 'util';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import { string } from 'prop-types';

const readFile = util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);

// TODO it's a bit messy with the functions being extremely similar, it just doesn't seem right

// TODO make one function for gettings posts' metadata, and one for getting the post with metadata
export default async function getParsedMarkdownFile(pathToFile: string) {
  // Expected input example:
  // pathToFile='pages/contact.md'
  // pathToFile='posts/code-example.md'
  // It returns both metadata and rendered Markdown

  const absolutePath = path.join(process.cwd(), 'markdown', pathToFile);

  const fileContents = await readFile(absolutePath, 'utf-8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...matterResult.data,
  };
}

export async function getPagesData() {
  // gets data for pages ['/videos', '/podcast', '/donate', '/contact']
  const pagesDir = path.join(process.cwd(), 'markdown/pages');
  const fileNames = ['videos', 'podcast', 'donate', 'contact']

  const allPagesData = await Promise.all(
  fileNames.map(async (fileName) => {
    const fullPath = path.join(pagesDir, `${fileName}.md`)
    const fileContents = await readFile(fullPath, 'utf-8')

    const matterResult = matter(fileContents);

    // TODO I should make this snippet a function
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      return {
        contentHtml,
        slug: fileName,
        ...(matterResult.data as {
          title: string;
        })
      }
  })
  )

  return allPagesData;
}

export async function getSortedPostsData() {
  const postsDir = path.join(process.cwd(), 'markdown/posts');
  const fileNames = await readDir(postsDir);

  // Loop through all the files in 'posts' directory
  // Promise.all, etc is a way to read all the files in its own pace,
  // and then continue once all the files have been read
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');

      const fullPath = path.join(postsDir, fileName);
      const fileContents = await readFile(fullPath, 'utf-8');

      const matterResult = matter(fileContents);

      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      return {
        slug,
        contentHtml,
        ...(matterResult.data as {
          title: string;
          date: string;
          category: string;
        }),
      };
    })
  );

  // Figure out what categories are available and how many items are there in each category
  const categoryChipsData: {[key: string]: number} = {}
  allPostsData.forEach((post) => {
    const { category } = post;
    if (categoryChipsData.hasOwnProperty(category)) categoryChipsData[category]++;
    else categoryChipsData[category] = 1;
  });
  

  const sortedPostsData = allPostsData
    .slice()
    .sort((post1, post2) => (post1.date < post2.date ? 1 : -1));

  return {
    categoryChipsData,
    sortedPostsData,
  };
}
