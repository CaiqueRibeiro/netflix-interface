import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full item-center justify-between p-4 lg:px-10 lg:py-6">
      <div className="flex items-center space-x-2 md:space-x-8">
        <Image
          src='/logo.svg'
          alt="netflix"
          width={100}
          height={100}
        />
        <ul className="hidden md:flex md:space-x-8">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </div>
    </header>

  )
}