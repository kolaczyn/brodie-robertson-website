import React from 'react';

import PostDescription from '../../components/ui/PostDescription';
import Chip from '../../components/ui/Chip';

import { getSortedPostsData } from '../../lib/loadFromMarkdownFiles';

import chipsData from '../../fixtures/chipsData';

// TODO I'm gonna programatically add lead on the posts later
const lorem =
  'Odit et repudiandae aut dolore. Quae itaque necessitatibus sed omnis cum. Et odit ratione ut esse animi provident. Quasi enim et vel...';

export default function BlogPostsList({ sortedPostsData, categoryChipsData }) {
  const chipsLabels = Object.keys(categoryChipsData);
  return (
    <section>
      <section className='flex gap-2.5 mb-8 pt-4 flex-wrap'>
        {chipsLabels.map((label) => {
          const number = categoryChipsData[label];
          return <Chip
            key={label}
            label={label}
            number={number}
            onClick={() => console.log(`clicked ${label}`)}
          />;
        })}
      </section>
      <section className='flex flex-col gap-y-5'>
        {sortedPostsData.map(({ title, date, category, slug, lead }) => (
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
  return { props: { ...sortedPosts } };
}
