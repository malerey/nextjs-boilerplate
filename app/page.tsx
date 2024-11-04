import Link from 'next/link';
import NameCollector from './NameCollector';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <NameCollector />

      <p>
        After setting up the name go to <Link href="/test">/test</Link> to test
        the cookies with just server components
      </p>
    </div>
  );
}
