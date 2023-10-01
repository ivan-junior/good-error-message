import { Description } from './components/Description';
import { ErrorMessage } from './components/ErrorMessage';

export default function Home() {
  return (
    <main className='h-screen bg-zinc-950 flex items-center justify-center flex-col p-2'>
      <Description />
      <ErrorMessage />
    </main>
  )
}
