import fs from 'fs';
import path from 'path';
import util from 'util';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

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

export async function getSortedPostsData() {
  const postsDir = path.join(process.cwd(), 'markdown/posts');
  const fileNames = await readDir(postsDir);

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
        ...matterResult.data,
      };
    })
  );

  return allPostsData.sort((post1, post2) =>
  // @ts-ignore
    post1.date < post2.date ? 1 : -1
  );
}
