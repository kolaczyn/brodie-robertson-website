import Head from 'next/head';
import Chip from '../components/ui/Chip';

export default function Home() {
  return (
    <>
      <h1 className="text-sm">Lorem</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem accusamus ad animi sint obcaecati soluta quis quaerat autem impedit in.</p>
      <Chip label='rants' number={5} onClick={() => console.log('clicked')} />
    </>
  );
}
