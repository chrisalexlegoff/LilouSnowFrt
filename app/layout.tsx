"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Favicon from './components/favicon/favicon'
import Nav from './components/nav/nav'
import { useEffect } from 'react'
import { fixMobileSize } from './lib/helpers/mobile-size-fix'
import Reseaux from './components/widgets/reseaux'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Mise à niveau taille pour mobile -- vh
    fixMobileSize()
  }, [])
  return (
    <html lang="en">
       <head>
        <meta charSet="utf-8" />
        <Favicon />
      </head>
      <body className={inter.className + " select-none"}>
        <Nav />
        {children}
        <Reseaux
        slug={["facebook", "messenger", "instagram", "email"]}
        classname={
          "md:hidden fixed bottom-0 flex w-full flex-wrap justify-around items-center h-[10%] bg-blanc opacity-80 z-10"
        }
      />
        </body>
    </html>
  )
}
