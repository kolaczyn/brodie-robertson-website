import getParsedMarkdownFile from '../lib/getParsedMarkdownFile';

export default function Home({ contentHtml }) {
  console.log(contentHtml)
  return (
    <div dangerouslySetInnerHTML={{__html: contentHtml}} />
  );
}

export async function getStaticProps() {
  const { contentHtml } = await getParsedMarkdownFile('pages/home.md');
  return {
    props: {
      contentHtml
    },
  };
}
