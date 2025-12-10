export const metadata = {
  title: 'ADLink',
  description: 'A perfect custom landing page for your links on the world wide web. Template auto support dark-mode depending on system config.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
