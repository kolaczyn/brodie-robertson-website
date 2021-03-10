import Head from 'next/head';
import Chip from '../components/ui/Chip';
import PostDescription from '../components/ui/PostDescription';

const chipsData = [
  { label: 'Rants', number: 5 },
  { label: 'Linux', number: 19 },
  { label: 'Announcements', number: 3 },
  { label: 'Weeb Shit', number: 69 },
  { label: 'Lorem', number: 3 },
  { label: 'Ipsum Dolor', number: 13 },
];

const postsData = [
  {
    title: 'Rants in the woods',
    date: 'September 20 2020',
    category: 'Rants',
    lead: 'I recently discovered that I love hiking after I spending my Saturday climbing up Mount Lofty, calling it fun...',
    slug: 'rants-in-the-woods',
  },
  {
    title: 'Ipsum Dolor',
    date: 'May 12 2020',
    category: 'Lorem',
    lead: 'Non est ipsam ipsum. Quae officia in adipisci eius voluptas sed. Ipsum amet earum aspernatur voluptate sint maxime provident...',
    slug: 'lorem-ipsum',
  },
  {
    title: 'I’m still new to Linux',
    date: 'September 2 2020',
    category: 'Linux',
    lead: 'It may come across in my videos like I\'m someone who\'s been using Linux for years and has tons of...',
    slug: 'im-still-new-to-linux',
  }
];

export default function Home() {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <div className='container mx-auto'>
        <h1>Components Showcase</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
          accusamus ad animi sint obcaecati soluta quis quaerat autem impedit
          in.
        </p>
        <section className='flex gap-2.5 my-8 flex-wrap'>
          {chipsData.map(({ label, number }) => (
            <Chip
              key={label}
              label={label}
              number={number}
              onClick={() => console.log(`clicked ${label}`)}
            />
          ))}
        </section>
        <section className="flex flex-col gap-y-5">
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
      </div>
    </div>
  );
}
