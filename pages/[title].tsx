import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

import { getPagesData } from '@/lib/loadFromMarkdownFiles';

export default function Page({ ...pageData }) {
  return (
    <>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      <article className='px-14 py-4'>
        <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pagesData = await getPagesData();
  const slugs = pagesData.map((page) => ({
    params: { title: page.slug },
  }));
  return { paths: slugs, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pagesData = await getPagesData();
  const { title } = params;

  const pageData = pagesData.find((post) => post.slug === title);
  return {
    props: {
      ...pageData,
    },
  };
};
