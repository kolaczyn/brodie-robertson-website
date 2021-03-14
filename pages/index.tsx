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
    title: '',
    subtitle: 'This card has no text on top of the image',
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
        <ShadedImage src='/test-image.jpg' gradientColor='from-main'>
          <div className='px-14 py-2'>
            <h1>Hey, Welcome on my website</h1>
          </div>
        </ShadedImage>
      </header>
      <section className='px-14 py-4'>
        <article>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
        <h2 className='mb-4'>Latest Blog Posts</h2>
        <section className='grid grid-cols-3 gap-8'>
          {cardsData.map(({ title, content, ...props }) => (
            <Card key={title} title={title} {...props}>
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
