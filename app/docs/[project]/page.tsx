import { notFound, redirect } from 'next/navigation';
import { getDocBySlug, getFirstSlug } from '@/app/docs/utils';
import MarkdownRenderer from '@/app/docs/components/MarkdownRenderer';
import Link from 'next/link';

type Params = {
  params: {
    project: string;
  };
};

export default function SingleDocPage({ params }: Params) {
  const { project } = params;

  const doc = getDocBySlug('', project);

  if (!doc) {
    const firstSlug = getFirstSlug(project);
    if (firstSlug) {
      redirect(`/docs/${firstSlug}`);
    } else {
      return notFound();
    }
  }

  return (
    <main>
      <p>
        Navigate to <Link href="/test">/test</Link> to restart the path
      </p>
      <article className="w-9/12 p-12">
        <MarkdownRenderer>{doc.content}</MarkdownRenderer>
      </article>
    </main>
  );
}
