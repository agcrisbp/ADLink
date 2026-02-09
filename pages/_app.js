import { useEffect, useState } from "react"
import Head from "next/head"
import { ThemeProvider } from "styled-components"
import { ThemeProvider as NextThemeProvider, useTheme } from "next-themes"

import Layout from "../components/Layout"
import GlobalStyle from "../styles/GlobalStyle"
import { darkTheme, lightTheme } from "../styles/theme.config"

import { GoogleAnalytics } from "nextjs-google-analytics"
import { Analytics } from "@vercel/analytics/react"
import SEO from "../next-seo.config"

function StyledThemeBridge({ children }) {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme === "dark" ? darkTheme : lightTheme
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <GoogleAnalytics />
      <Analytics />

      <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <StyledThemeBridge>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <title>{SEO.openGraph.title}</title>
            <meta name="description" content={SEO.openGraph.description} />
            <meta name="keywords" content={SEO.openGraph.keywords} />
            <link rel="canonical" href={SEO.openGraph.url} />

            <meta property="og:title" content={SEO.openGraph.title} />
            <meta property="og:description" content={SEO.openGraph.description} />
            <meta property="og:url" content={SEO.openGraph.url} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={SEO.openGraph.images[0].url} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={SEO.openGraph.title} />
            <meta name="twitter:description" content={SEO.openGraph.description} />
            <meta name="twitter:image" content={SEO.openGraph.images[0].url} />
          </Head>

          <GlobalStyle />

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StyledThemeBridge>
      </NextThemeProvider>
    </>
  )
}

export default MyApp