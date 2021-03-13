import React from 'react';
import Head from 'next/head';

import getParsedMarkdownFile from '../lib/loadFromMarkdownFiles';
import ShadedImage from '../components/ui/ShadedImage';

export default function Home({ contentHtml }) {
  return (
    <>
      <Head>
        <title>Tech Blog</title>
      </Head>
      <header className='w-full h-64 relative'>
        <ShadedImage src='/test-image.jpg'>
          <h1>Hey, Welcome on my website</h1>
        </ShadedImage>
      </header>
      <section className='px-14 py-4'>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </section>
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
