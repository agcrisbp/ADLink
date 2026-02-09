'use client';

import { Suspense } from 'react';
import { Tweet } from 'react-tweet';
import { useSearchParams } from 'next/navigation';

function TweetEmbed() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  if (!id) return <div>The embedded tweet could not be found…</div>;

  return <Tweet id={id} />;
}

export default function TweetEmbedPage() {
  return (
    <Suspense fallback={null}>
      <TweetEmbed />
    </Suspense>
  );
}