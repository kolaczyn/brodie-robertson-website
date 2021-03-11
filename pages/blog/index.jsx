import React from 'react';

import PostDescription from '../../components/ui/PostDescription';
import Chip from '../../components/ui/Chip';

import { getSortedPostsData } from '../../lib/getParsedMarkdownFile';

import chipsData from '../../fixtures/chipsData';

// I'm gonna add lead on posts later
const lorem = 'Odit et repudiandae aut dolore. Quae itaque necessitatibus sed omnis cum. Et odit ratione ut esse animi provident. Quasi enim et vel...'

export default function BlogPostsList({ sortedPosts }) {
  return (
    <section>
      <section className='flex gap-2.5 mb-8 pt-4 flex-wrap'>
        {chipsData.map(({ label, number }) => (
          <Chip
            key={label}
            label={label}
            number={number}
            onClick={() => console.log(`clicked ${label}`)}
          />
        ))}
      </section>
      <section className='flex flex-col gap-y-5'>
        {sortedPosts.map(({ title, date, category, slug, lead }) => (
          <PostDescription
            key={slug}
            slug={slug}
            title={title}
            date={date}
            category={category}
          >
            {lorem}
          </PostDescription>
        ))}
      </section>
    </section>
  );
}

export async function getStaticProps() {
  const sortedPosts = await getSortedPostsData();
  return { props: { sortedPosts } };
}
