import React from 'react';
import Head from 'next/head';

import getParsedMarkdownFile from '../lib/loadFromMarkdownFiles';
import ShadedImage from '../components/ui/ShadedImage';
import Card from '../components/ui/Card';

const lorem =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ratione hic commodi nemo error dolor...';

const cardsData = [
  {
    title: 'Latest blog post',
    subtitle: 'September 10 2020',
    imgSrc: '/test-image.jpg',
    content: lorem,
  },
  {
    title: 'Second blog post',
    subtitle: 'September 10 2020',
    imgSrc: '/test-image.jpg',
    content: lorem,
  },
  {
    title: 'The third impact',
    subtitle: 'June 20 2020',
    imgSrc: '/test-image.jpg',
    content: lorem,
  },
];

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
        <h2>Latest Blog Posts</h2>
        <section className='grid grid-cols-3 gap-8'>
          {cardsData.map(({ content, ...props }) => (
            <Card
              {...props}
            >
              {content}
            </Card>
          ))}
        </section>
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
