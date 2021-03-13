import React from 'react';
import Head from 'next/head';

import { getPagesData } from '../lib/loadFromMarkdownFiles';

export default function Page({ ...pageData }) {
  return (
    <>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      <section className='px-14 py-4'>
        <div dangerouslySetInnerHTML={{ __html: pageData.contentHtml }} />
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const pagesData = await getPagesData();
  const slugs = pagesData.map((page) => ({
    params: { title: page.slug },
  }));
  return { paths: slugs, fallback: false };
}

export async function getStaticProps({ params }) {
  const pagesData = await getPagesData();
  const { title } = params;

  const pageData = pagesData.find((post) => post.slug === title);
  return {
    props: {
      ...pageData,
    },
  };
}
