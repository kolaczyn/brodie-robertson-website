import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import getParsedMarkdownFile, {
  getSortedPostsData,
} from '@/lib/loadFromMarkdownFiles';
import Card from '@/components/ui/Card';
import HeroImage from '@/components/ui/HeroImage';
import fetchLatestVideos from '@/lib/fetchLatestVideos';

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

export default function Home({ contentHtml, latestPosts, latestVideos }) {
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
        <h2 className='mb-4'>Latest Blog Posts</h2>
        <section className='grid grid-cols-3 gap-8'>
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
        <section className='grid grid-cols-3 gap-8'>
          {latestVideos.map(
            ({ videoId, title, description, publishedAt, thumbnail }) => (
              <Card
                key={title}
                title={title}
                subtitle={publishedAt}
                imgSrc={thumbnail}
                href={`https://www.youtube.com/watch?v=${videoId}`}
              >
                {description}
              </Card>
            )
          )}
        </section>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { contentHtml } = await getParsedMarkdownFile('pages/home.md');
  const { sortedPostsData } = await getSortedPostsData();
  const latestVideos = await fetchLatestVideos();
  const latestPosts = sortedPostsData.slice(0, 3);
  return {
    props: {
      contentHtml,
      latestPosts,
      latestVideos,
    },
    revalidate: 7200,
  };
};
