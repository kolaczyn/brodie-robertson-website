import fs from 'fs';
import path from 'path';
import util from 'util';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const readFile = util.promisify(fs.readFile);

  // TODO make one function for gettings posts' metadata, and one for getting the post with metadata
export default async function getParsedMarkdownFile(pathToFile: string) {
  // Expected input example:
  // pathToFile='pages/contact.md'
  // pathToFile='posts/code-example.md'
  // It returns both metadata and rendered Markdown

  const absolutePath = path.join(process.cwd(), 'markdown', pathToFile)

  const fileContents = await readFile(absolutePath, 'utf-8');
  const matterResult = matter(fileContents)

  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    contentHtml,
    ...matterResult.data
  };
}
