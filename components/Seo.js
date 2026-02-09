import Head from 'next/head'
import seoData from '../next-seo.config'

export default function Seo({ page }) {
  const { title, excerpt, slug, coverImage } = page

  return (
    <Head>
      <title>{title} | {seoData.openGraph.title}</title>
      <meta name="description" content={seoData.openGraph.description} />
      <meta name="keywords" content={seoData.openGraph.keywords} />
      <link rel="canonical" href={seoData.openGraph.url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.openGraph.url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={seoData.openGraph.description} />
      <meta property="og:locale" content="en_EN" />
      <meta property="og:image" content={seoData.openGraph.images[0].url} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Agcrismanto Budhi Praswastyka" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@agcrisbp" />
      <meta name="twitter:creator" content="@agcrisbp" />
      <meta name="twitter:image" content={seoData.openGraph.images[0].url} />
      <meta httpEquiv="x-ua-compatible" content="IE=edge; chrome=1" />
    </Head>
  )
}