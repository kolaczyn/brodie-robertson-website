import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import getParsedMarkdownFile, {
  getSortedPostsData,
} from '@/lib/loadFromMarkdownFiles';
import Card from '@/components/ui/Card';
import HeroImage from '@/components/ui/HeroImage';

const lorem =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ratione hic commodi nemo error dolor...';

export default function Home({ contentHtml, latestPosts }) {
  return (
    <>
      <Head>
        <title>Tech Blog</title>
      </Head>
      <HeroImage imgSrc='/img/hero.jpg'>Hey, Welcome on my website</HeroImage>
      <section></section>
      <section className='px-14 py-4'>
        <article>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
        <h2 className='my-4'>Latest Blog Posts</h2>
        <section className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
          {latestPosts.map(({ title, date, slug, image }) => (
            <Card
              key={title}
              title={title}
              subtitle={date}
              imgSrc={image}
              href={`/blog/${slug}`}
            >
              {lorem}
            </Card>
          ))}
        </section>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { contentHtml } = await getParsedMarkdownFile('pages/home.md');
  const { sortedPostsData } = await getSortedPostsData();
  const latestPosts = sortedPostsData.slice(0, 3);
  return {
    props: {
      contentHtml,
      latestPosts,
    },
    revalidate: 7200,
  };
};
