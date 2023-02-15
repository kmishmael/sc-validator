import './globals.css'
import { Heading } from '@sc-validator/components/header'
import { Footer } from '@sc-validator/components/Footer'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <Heading />
        {children}
        <Footer />
      </body>
    </html>
  )
}
