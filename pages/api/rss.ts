import generateRss from '@/lib/generateRss';

const rss = async (_, res) => {
  const rssFeed = await generateRss();
  res.setHeader('Content-Type', 'text/xml');
  res.write(rssFeed);
  res.send();
};

export default rss;
