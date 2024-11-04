import Link from 'next/link';
import RandomData from './RandomData';

async function getServerSideData() {
  // Simulating a data fetch that would normally hit an API or database
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    color: 'green',
    sign: 'leo',
    birthstone: 'ruby',
  };
}

export default async function Home() {
  const userData = await getServerSideData();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Test 2 with just server components
      </h1>
      <RandomData data={userData} />

      <p>
        Navigate to <Link href="/docs">/docs</Link> to test the docs
      </p>
    </main>
  );
}
