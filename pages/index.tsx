import getParsedMarkdownFile from '../lib/loadFromMarkdownFiles';

export default function Home({ contentHtml }) {
  return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
}

export async function getStaticProps() {
  const { contentHtml } = await getParsedMarkdownFile('pages/home.md');
  return {
    props: {
      contentHtml,
    },
  };
}
