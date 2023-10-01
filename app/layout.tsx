"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Favicon from './components/favicon/favicon'
import Nav from './components/nav/nav'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <meta charSet="utf-8" />
        <Favicon />
      </head>
      <body className={inter.className}>
        <Nav />
        {children}</body>
    </html>
  )
}
