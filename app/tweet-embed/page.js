'use client';

import { Tweet } from 'react-tweet';

export default function TweetEmbedPage({ searchParams }) {
  const id = searchParams?.id;

  if (!id) return <div>The embedded tweet could not be found…</div>;

  return <Tweet id={id} />;
}