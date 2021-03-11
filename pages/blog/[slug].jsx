import React from 'react';

import postsData from '../../fixtures/postsData';

export default function BlogPost({...data}) {

  return <div>
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
    I am BlogPost</div>;
}

export function getStaticPaths() {
  const paths = postsData.map((post) => ({params: {slug: post.slug}}));
  console.log(paths);
  return { paths, fallback: false };
}

export function getStaticProps({ params }) {
  const { slug } = params;
  const post = postsData.find((post) => post.slug === slug);
  return {
    props: {
      ...post
    },
  };
}
