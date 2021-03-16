import React from 'react';
import Head from 'next/head';

import HeroImage from '@/components/ui/HeroImage';
import { getSortedPostsData } from '@/lib/loadFromMarkdownFiles';

export default function BlogPost({ ...data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre>I am BlogPost */}
      <article>
        <HeroImage imgSrc={data.image}>{data.title}</HeroImage>
        <div className='px-14 py-4'>
          <div className="dim">{data.date}</div>
          <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const { sortedPostsData } = await getSortedPostsData();
  const slugs = sortedPostsData.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths: slugs, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { sortedPostsData } = await getSortedPostsData();
  const post = sortedPostsData.find((post) => post.slug === slug);
  return {
    props: {
      ...post,
    },
  };
}
