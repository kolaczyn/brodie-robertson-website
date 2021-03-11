import React, { useState } from 'react';

import PostDescription from '../../components/ui/PostDescription';
import Chip from '../../components/ui/Chip';

import { getSortedPostsData } from '../../lib/loadFromMarkdownFiles';
import { stringify } from 'remark';

// TODO I'm gonna programatically add lead on the posts later
const lorem =
  'Odit et repudiandae aut dolore. Quae itaque necessitatibus sed omnis cum. Et odit ratione ut esse animi provident. Quasi enim et vel...';

export default function BlogPostsList({ sortedPostsData, categoryChipsData }) {
  const chipsLabels = Object.keys(categoryChipsData);
  const [selectedCategories, setSelectedCategories] = useState(chipsLabels);

  const handleChipClick = (label) => {
    if (selectedCategories.includes(label)) {
      setSelectedCategories(old => old.filter(value => value !== label))
    } else {
      setSelectedCategories(old => [...old, label])
    }
  }


  return (
    <section>
      <section className='flex gap-2.5 mb-8 pt-4 flex-wrap'>
        {chipsLabels.map((label) => {
          const number = categoryChipsData[label];
          return (
            <Chip
              key={label}
              label={label}
              number={number}
              onClick={() => handleChipClick(label)}
            />
          );
        })}
      </section>
      <pre>
        {JSON.stringify(selectedCategories, null, stringify)}
      </pre>
      <section className='flex flex-col gap-y-5'>
        {sortedPostsData.filter(({category}) => selectedCategories.includes(category)).map(({ title, date, category, slug, lead }) => (
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
