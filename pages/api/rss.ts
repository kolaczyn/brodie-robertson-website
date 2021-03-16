import generateRss from '@/lib/generateRss';

export default async (_, res) => {
  const rssFeed = await generateRss();
  res.setHeader('Content-Type', 'text/xml');
  res.write(rssFeed);
  res.send();
};
