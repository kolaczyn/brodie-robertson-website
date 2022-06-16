# Tech YouTuber's blog

[Visit the website](https://tech-blog.kolaczyn.com)

## About

This is a project is made for a YouTuber who is tech savy enough, to know how to edit Markdown and push changes to GitHub.  
I also plan to use YouTube's API to fetch the latest videos from the YouTuber's channel.
It's currently work in progress, I should finish the MPV around March the 15th.

## Features

- The hosting is free. It looks like you don't have to pay anything for public GitHub projects on Vercel,
- You can just edit Markdown files and push changes to GitHub. Thanks to [Vercel](https://vercel.com/solutions/nextjs), it only takes a few minutes to deply a new version,
- You can add blog posts by adding new Markdown files with [YAML Frontmatter](https://docs.zettlr.com/en/core/yaml-frontmatter/) in the beginning of each file. You can sort posts based on category,
- It follows [Material Design](https://material.io/design).

## Dependencies

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [YouTube's API](https://developers.google.com/youtube/v3/) `// not integrated yet`
- [remark](https://www.npmjs.com/package/remark) and [gray-matter](https://www.npmjs.com/package/gray-matter)
- [Material Icons](https://material.io/resources/icons)

## Development

Running the development server:

```bash
npm run dev
# or
yarn dev
```

Vercel's bot automatically does checks on the latest commits and deploys the development server to the Internet.
