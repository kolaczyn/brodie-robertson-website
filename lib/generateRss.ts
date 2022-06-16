import RSS from 'rss';

import { getSortedPostsData } from './loadFromMarkdownFiles';

const generateRss = async () => {
  const feedOptions = {
    title: 'Tech Blog',
  };
  const feed = new RSS(feedOptions);

  const { sortedPostsData } = await getSortedPostsData();
  sortedPostsData.forEach(({ title, date }) => {
    feed.item({ title, date });
  });

  return feed.xml();
};

export default generateRss;
