import React from 'react';

import { getSortedPostsData } from '../../lib/loadFromMarkdownFiles';

export default function BlogPost({ ...data }) {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>I am BlogPost
      <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
    </div>
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
