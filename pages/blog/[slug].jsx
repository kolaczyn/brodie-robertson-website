import React from 'react';

import { getSortedPostsData } from '../../lib/getParsedMarkdownFile';

export default function BlogPost({ ...data }) {
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>I am BlogPost
      <div dangerouslySetInnerHTML={{__html: data.contentHtml}} />
    </div>
  );
}

export async function getStaticPaths() {
  const sortedPosts = await getSortedPostsData();
  const slugs = sortedPosts.map((post) => ({ params: { slug: post.slug } }));

  return { paths: slugs, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const sortedPosts = await getSortedPostsData();
  const post = sortedPosts.find((post) => post.slug === slug);
  return {
    props: {
      ...post,
    },
  };
}
