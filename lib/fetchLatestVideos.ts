import { google } from 'googleapis';

const channelsId: Array<string> = [
  'UC8butISFwT-Wl7EV0hUK0BQ', // freeCodeCamp
  'UCvmINlrza7JHB1zkIOuXEbw', // Mike Dane
  'UCVls1GmFKf6WlTraIb_IaJg', // Distro Tube
];

const fetchLatestVideo = async () => {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (apiKey === undefined)
    throw new Error('There is no YOUTUBE_API_KEY in .env.local file');
  const results = await Promise.all(
    channelsId.map(async (id) => {
      const result = await google.youtube('v3').search.list({
        // @ts-ignore
        key: apiKey,
        part: 'snippet',
        type: 'video',
        order: 'date',
        channelId: id,
        maxResults: 1,
      });
      // @ts-ignore
      const video = result.data.items[0];
      return {
        videoId: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.default.url,
        publishedAt: video.snippet.publishedAt,
      };
    })
  );

  return results;
};

export default fetchLatestVideo;
