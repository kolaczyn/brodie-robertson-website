import Head from 'next/head';
import Chip from '../components/ui/Chip';

const chipsData = [
  { label: 'Rants', number: 5 },
  { label: 'Linux', number: 19 },
  { label: 'Announcements', number: 3 },
  { label: 'Weeb Shit', number: 69 },
  { label: 'Lorem', number: 3 },
  { label: 'Ipsum Dolor', number: 13 },
];

export default function Home() {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <div className='container mx-auto'>
        <h1 className='text-sm'>Lorem</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
          accusamus ad animi sint obcaecati soluta quis quaerat autem impedit
          in.
        </p>
        <div className='flex gap-2.5'>
          {chipsData.map(({ label, number }) => (
            <Chip
              key={label}
              label={label}
              number={number}
              onClick={() => console.log(`clicked ${label}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
