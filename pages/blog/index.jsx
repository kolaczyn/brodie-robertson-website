import React from 'react';

import PostDescription from '../../components/ui/PostDescription';
import Chip from '../../components/ui/Chip';

import postsData from '../../fixtures/postsData';
import chipsData from '../../fixtures/chipsData';

export default function BlogPostsList() {
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
        {postsData.map(({ title, date, category, slug, lead }) => (
          <PostDescription
            key={slug}
            slug={slug}
            title={title}
            date={date}
            category={category}
          >
            {lead}
          </PostDescription>
        ))}
      </section>
    </section>
  );
}
