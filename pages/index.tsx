import React from 'react';
import Head from 'next/head';
import getParsedMarkdownFile from '../lib/loadFromMarkdownFiles';

export default function Home({ contentHtml }) {
  return (
    <>
      <Head>
        <title>Tech Blog</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  );
}

export async function getStaticProps() {
  const { contentHtml } = await getParsedMarkdownFile('pages/home.md');
  return {
    props: {
      contentHtml,
    },
  };
}
