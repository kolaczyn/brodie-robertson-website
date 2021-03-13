import React, { useState } from 'react';
import Head from 'next/head';

import PostDescription from '../../components/ui/PostDescription';
import Chip from '../../components/ui/Chip';

import { getSortedPostsData } from '../../lib/loadFromMarkdownFiles';
import { stringify } from 'remark';

// TODO I'm gonna programatically add lead on the posts later
const lorem =
  'Odit et repudiandae aut dolore. Quae itaque necessitatibus sed omnis cum. Et odit ratione ut esse animi provident. Quasi enim et vel...';

export default function BlogPostsList({ sortedPostsData, categoryChipsData }) {
  const chipsLabels = Object.keys(categoryChipsData);
  const [selectedCategories, setSelectedCategories] = useState(() => new Set());

  const handleChipClick = (label) => {
    if (selectedCategories.has(label)) {
      setSelectedCategories((oldValue) => {
        // I can't just do it in one line,
        // because Set's delete method returns true,
        // unlike Set's  add method
        const newValue = new Set(oldValue);
        newValue.delete(label);
        return newValue;
      });
    } else {
      setSelectedCategories((oldValue) => new Set(oldValue).add(label));
    }
  };

  const selectPosts = () => {
    // returns all posts if no category was selected
    // otherwise returns posts with the selected category
    if (selectedCategories.size > 0) {
      return sortedPostsData.filter(({ category }) =>
        selectedCategories.has(category)
      );
    } else {
      return sortedPostsData;
    }
  };

  return (
    <>
    <Head>
      <title>Blog</title>
    </Head>
    <section className='px-14 py-4'>
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
      {selectedCategories.size > 0 && (
        <section>
          <p>Selected categories:</p>
          <pre>{[...selectedCategories].join(', ')}</pre>
        </section>
      )}
      <section className='flex flex-col gap-y-5'>
        {selectPosts().map(({ title, date, category, slug, lead }) => (
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
    </>
  );
}

export async function getStaticProps() {
  const sortedPosts = await getSortedPostsData();
  return { props: { ...sortedPosts } };
}
